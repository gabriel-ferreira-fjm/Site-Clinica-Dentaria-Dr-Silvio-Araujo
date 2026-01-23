import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Captions,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  // Legendas
  trackSrc?: string;
  trackLang?: string;
  trackLabel?: string;
  showCaptionsByDefault?: boolean;
}

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const total = Math.floor(seconds);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
};

const VideoPlayer = ({
  src,
  poster,
  className,
  trackSrc,
  trackLang = "pt",
  trackLabel,
  showCaptionsByDefault = true,
}: VideoPlayerProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // CC
  const [captionsEnabled, setCaptionsEnabled] = useState<boolean>(
    Boolean(trackSrc && showCaptionsByDefault)
  );

  // Texto da legenda (renderizado em HTML, sempre funciona)
  const [captionText, setCaptionText] = useState<string>("");

  // Track se já fizemos bind das legendas
  const [trackBound, setTrackBound] = useState(false);

  // ✅ guarda o cleanup atual do listener do track (pra não duplicar)
  const trackCleanupRef = useRef<null | (() => void)>(null);

  const progress = useMemo(() => {
    if (!duration || !Number.isFinite(duration)) return 0;
    return clamp((currentTime / duration) * 100, 0, 100);
  }, [currentTime, duration]);

  const play = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(!video.paused && !video.ended);
    }
  };

  const pause = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || video.ended) void play();
    else pause();
  };

  const seekBy = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;

    const dur = Number.isFinite(video.duration) ? video.duration : duration;
    const next = clamp(video.currentTime + seconds, 0, dur || 0);
    video.currentTime = next;
    setCurrentTime(next);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted || volume === 0) {
      video.muted = false;
      video.volume = 1;
      setVolume(1);
    } else {
      video.muted = true;
      setVolume(0);
    }
  };

  const handleVolumeChange = (value: number) => {
    const video = videoRef.current;
    if (!video) return;

    const v = clamp(value, 0, 1);
    video.volume = v;
    video.muted = v === 0;
    setVolume(v);
  };

  const onProgressChange = (value: number) => {
    const video = videoRef.current;
    if (!video) return;

    const dur = Number.isFinite(video.duration) ? video.duration : duration;
    if (!dur) return;

    const nextTime = (clamp(value, 0, 100) / 100) * dur;
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const enterFullscreen = () => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    if (!wrapper && !video) return;

    const el = wrapper ?? video!;
    const anyEl = el as HTMLElement & {
      webkitRequestFullscreen?: () => Promise<void>;
      webkitEnterFullscreen?: () => void;
    };

    if (anyEl.requestFullscreen) {
      void anyEl.requestFullscreen();
      return;
    }
    if (anyEl.webkitRequestFullscreen) {
      void anyEl.webkitRequestFullscreen();
      return;
    }

    // iOS Safari fallback
    const anyVideo = video as HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
    };
    if (anyVideo?.webkitEnterFullscreen) {
      anyVideo.webkitEnterFullscreen();
    }
  };

  const exitFullscreen = () => {
    const d = document as Document & {
      webkitFullscreenElement?: Element;
      webkitExitFullscreen?: () => Promise<void>;
    };
    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }
    if (d.webkitFullscreenElement && d.webkitExitFullscreen) {
      void d.webkitExitFullscreen();
    }
  };

  const toggleFullscreen = () => {
    const d = document as Document & { webkitFullscreenElement?: Element };
    if (document.fullscreenElement || d.webkitFullscreenElement) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  const toggleCaptions = () => {
    if (!trackSrc) return;
    setCaptionsEnabled((prev) => !prev);
  };

  // ✅ Faz bind do track e escuta cuechange (SEM duplicar listeners)
  const bindTrack = useCallback(() => {
    const video = videoRef.current;
    if (!video || !trackSrc) return;

    const tracks = video.textTracks;
    if (!tracks || tracks.length === 0) return;

    const track = tracks[0];

    // remove listener anterior (se existir)
    trackCleanupRef.current?.();
    trackCleanupRef.current = null;

    // "hidden" = carrega cues e dispara eventos, mas não desenha nativo
    track.mode = "hidden";

    const updateFromActiveCues = () => {
      if (!captionsEnabled) {
        setCaptionText("");
        return;
      }

      const cues = track.activeCues;
      if (!cues || cues.length === 0) {
        setCaptionText("");
        return;
      }

      const lines: string[] = [];
      for (let i = 0; i < cues.length; i++) {
        const cue = cues[i] as VTTCue;
        const text = (cue?.text ?? "").trim();
        if (text) lines.push(text);
      }

      setCaptionText(lines.join("\n"));
    };

    track.addEventListener("cuechange", updateFromActiveCues);
    updateFromActiveCues();

    setTrackBound(true);

    // guarda cleanup
    trackCleanupRef.current = () => {
      track.removeEventListener("cuechange", updateFromActiveCues);
    };
  }, [trackSrc, captionsEnabled]);

  // Detecta fullscreen para trocar ícone
  useEffect(() => {
    const onFsChange = () => {
      const d = document as Document & { webkitFullscreenElement?: Element };
      const fs =
        Boolean(document.fullscreenElement) || Boolean(d.webkitFullscreenElement);
      setIsFullscreen(fs);
    };

    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange);
    };
  }, []);

  // Atualiza estados do vídeo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setTrackBound(false);

    // limpa track listener ao trocar vídeo
    trackCleanupRef.current?.();
    trackCleanupRef.current = null;
    setCaptionText("");

    const onLoaded = () => {
      const dur = Number.isFinite(video.duration) ? video.duration : 0;
      setDuration(dur);
      setCurrentTime(video.currentTime || 0);
      setIsPlaying(!video.paused && !video.ended);
    };

    const onTimeUpdate = () => setCurrentTime(video.currentTime || 0);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
    };
  }, [src]);

  // ✅ LEGENDAS - tenta bind quando o track carrega (com retries)
  useEffect(() => {
    const video = videoRef.current;

    // sempre limpa
    trackCleanupRef.current?.();
    trackCleanupRef.current = null;
    setTrackBound(false);

    if (!video || !trackSrc) {
      setCaptionText("");
      return;
    }

    let attempts = 0;
    const maxAttempts = 10;

    const tryBind = () => {
      const tracks = video.textTracks;
      if (
        tracks &&
        tracks.length > 0 &&
        tracks[0].cues &&
        tracks[0].cues.length > 0
      ) {
        bindTrack();
        return true;
      }
      return false;
    };

    if (tryBind()) return;

    const intervalId = setInterval(() => {
      attempts++;
      if (tryBind() || attempts >= maxAttempts) {
        clearInterval(intervalId);
      }
    }, 200);

    return () => {
      clearInterval(intervalId);
      trackCleanupRef.current?.();
      trackCleanupRef.current = null;
      setCaptionText("");
    };
  }, [trackSrc, bindTrack]);

  // Quando liga/desliga captions: só atualiza texto/track.mode
  useEffect(() => {
    if (!trackSrc) return;

    if (!captionsEnabled) {
      setCaptionText("");
      return;
    }

    // se captions foi ligado e já tem track, força rebind pra atualizar imediatamente
    if (trackBound) {
      bindTrack();
    }
  }, [captionsEnabled, trackBound, bindTrack, trackSrc]);

  // Reset CC quando muda trackSrc
  useEffect(() => {
    const initial = Boolean(trackSrc && showCaptionsByDefault);
    setCaptionsEnabled(initial);
  }, [trackSrc, showCaptionsByDefault]);

  return (
    <div className={className ?? "w-full"}>
      <div
        ref={wrapperRef}
        className="group relative rounded-3xl overflow-hidden shadow-2xl border border-blue-200 bg-black"
      >
        <div className="relative w-full aspect-video">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            preload="auto"
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-top cursor-pointer"           onClick={togglePlay}
          >
            {trackSrc && (
              <track
                key={`${trackLang}-${trackSrc}`}
                kind="subtitles"
                src={trackSrc}
                srcLang={trackLang}
                label={trackLabel ?? trackLang.toUpperCase()}
                default
              />
            )}
          </video>

          {/* ✅ Legenda renderizada por nós (sempre aparece) */}
          {trackSrc && captionsEnabled && captionText && (
            <div className="pointer-events-none absolute inset-x-0 bottom-16 md:bottom-20 px-4 z-10">
              <div className="mx-auto max-w-4xl rounded-2xl bg-black/70 backdrop-blur-sm px-4 py-3 text-center">
                <p className="whitespace-pre-line text-white text-sm md:text-base font-semibold drop-shadow-lg">
                  {captionText}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Overlay controles */}
        <div
          className="
            absolute bottom-0 left-0 right-0
            bg-gradient-to-t from-black/70 to-transparent
            px-4 pt-6 pb-3
            opacity-0 pointer-events-none
            transition-opacity duration-300
            group-hover:opacity-100 group-hover:pointer-events-auto
            max-md:opacity-100 max-md:pointer-events-auto
            z-20
          "
        >
          <div className="mb-2">
            <div className="flex items-center justify-between text-xs text-white/90 mb-1 font-medium">
              <span aria-label="Tempo decorrido">{formatTime(currentTime)}</span>
              <span aria-label="Duração total">{formatTime(duration)}</span>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              step={0.1}
              value={progress}
              onClick={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              onChange={(e) => onProgressChange(Number(e.target.value))}
              className="w-full accent-blue-500 h-1 cursor-pointer"
              aria-label="Barra de progresso do vídeo"
            />
          </div>

          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1">
              <Button
                size="icon"
                variant="ghost"
                className="h-9 w-9 hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  seekBy(-10);
                }}
                aria-label="Recuar 10 segundos"
              >
                <RotateCcw className="w-5 h-5 text-white" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="h-10 w-10 hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="h-9 w-9 hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  seekBy(10);
                }}
                aria-label="Avançar 10 segundos"
              >
                <RotateCw className="w-5 h-5 text-white" />
              </Button>
            </div>

            <div className="flex items-center gap-1">
              {trackSrc && (
                <Button
                  size="icon"
                  variant="ghost"
                  className={`h-9 w-9 transition ${
                    captionsEnabled
                      ? "bg-blue-600/40 hover:bg-blue-600/50"
                      : "hover:bg-white/20"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCaptions();
                  }}
                  aria-label={
                    captionsEnabled ? "Desativar legendas" : "Ativar legendas"
                  }
                  title={captionsEnabled ? "Legendas ligadas" : "Legendas desligadas"}
                >
                  <Captions
                    className={`w-5 h-5 transition ${
                      captionsEnabled ? "text-blue-300" : "text-white"
                    }`}
                  />
                </Button>
              )}

              <Button
                size="icon"
                variant="ghost"
                className="h-9 w-9 hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                aria-label={volume === 0 ? "Ativar som" : "Silenciar vídeo"}
              >
                {volume === 0 ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </Button>

              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={volume}
                onClick={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                onChange={(e) => handleVolumeChange(Number(e.target.value))}
                className="w-20 accent-blue-500 h-1 cursor-pointer hidden sm:block"
                aria-label="Volume"
              />

              <Button
                size="icon"
                variant="ghost"
                className="h-9 w-9 hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                aria-label={isFullscreen ? "Sair do ecrã inteiro" : "Ecrã inteiro"}
                title={isFullscreen ? "Sair do ecrã inteiro" : "Ecrã inteiro"}
              >
                {isFullscreen ? (
                  <Minimize className="w-5 h-5 text-white" />
                ) : (
                  <Maximize className="w-5 h-5 text-white" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
