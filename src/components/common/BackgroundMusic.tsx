import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import {
  Music2,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

// ✅ IMPORTA OS TEUS MP3
import track1 from "@/assets/audio/1 - Clinica_8.mp3";
import track2 from "@/assets/audio/2 - Clinica_1.mp3";
import track3 from "@/assets/audio/4 - Clinica_3.mp3";
import track4 from "@/assets/audio/5 - Clinica_7.mp3";
import track5 from "@/assets/audio/6 - Clinica_7.mp3";
import track6 from "@/assets/audio/1 - Clinica_5.mp3";

type Track = { id: string; titleKey: string; src: string };

const LS_KEYS = {
  trackId: "bgm_track_id",
  volume: "bgm_volume",
  muted: "bgm_muted",
  playing: "bgm_playing",
  unlocked: "bgm_unlocked",
  toastCollapsed: "bgm_toast_collapsed",
};

type BgmState = {
  trackId: string;
  volume: number; // 0..1
  muted: boolean;
  playing: boolean; // intenção do UI (e estado lógico)
  unlocked: boolean;
};

const TRACKS: Track[] = [
  { id: "t1", titleKey: "music.tracks.t1", src: track1 },
  { id: "t2", titleKey: "music.tracks.t2", src: track2 },
  { id: "t3", titleKey: "music.tracks.t3", src: track3 },
  { id: "t4", titleKey: "music.tracks.t4", src: track4 },
  { id: "t5", titleKey: "music.tracks.t5", src: track5 },
  { id: "t6", titleKey: "music.tracks.t6", src: track6 },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
function readLSBool(key: string, fallback: boolean) {
  const raw = localStorage.getItem(key);
  return raw == null ? fallback : raw === "true";
}
function readLSNum(key: string, fallback: number) {
  const raw = localStorage.getItem(key);
  const v = raw == null ? fallback : Number(raw);
  return clamp(Number.isFinite(v) ? v : fallback, 0, 1);
}
function readLSStr(key: string, fallback: string) {
  return localStorage.getItem(key) ?? fallback;
}

/* =============================================================================
   ✅ SINGLETON “DE VERDADE” (sobrevive ao HMR) em globalThis
============================================================================= */

declare global {
  // eslint-disable-next-line no-var
  var __BGM_AUDIO__: HTMLAudioElement | null | undefined;
  // eslint-disable-next-line no-var
  var __BGM_RAF__: number | null | undefined;
  // eslint-disable-next-line no-var
  var __BGM_STATE__: BgmState | undefined;
}

function getGlobalAudio() {
  if (globalThis.__BGM_AUDIO__ === undefined) globalThis.__BGM_AUDIO__ = null;
  return globalThis.__BGM_AUDIO__!;
}
function setGlobalAudio(a: HTMLAudioElement | null) {
  globalThis.__BGM_AUDIO__ = a;
}
function getGlobalRaf() {
  if (globalThis.__BGM_RAF__ === undefined) globalThis.__BGM_RAF__ = null;
  return globalThis.__BGM_RAF__!;
}
function setGlobalRaf(id: number | null) {
  globalThis.__BGM_RAF__ = id;
}

/* =============================================================================
   ✅ MOTOR ÚNICO (store + fade-in + subscribe)
============================================================================= */

let stateSingleton: BgmState =
  globalThis.__BGM_STATE__ ??
  (globalThis.__BGM_STATE__ = {
    trackId: readLSStr(LS_KEYS.trackId, TRACKS[0].id),
    volume: readLSNum(LS_KEYS.volume, 0.75),
    muted: readLSBool(LS_KEYS.muted, false),
    playing: readLSBool(LS_KEYS.playing, true),
    unlocked: readLSBool(LS_KEYS.unlocked, false),
  });

const subs = new Set<() => void>();
function notify() {
  subs.forEach((fn) => fn());
}

function stopRamp() {
  const raf = getGlobalRaf();
  if (raf != null) {
    cancelAnimationFrame(raf);
    setGlobalRaf(null);
  }
}

function startVolumeRamp(from: number, to: number, durationMs: number) {
  const a = getGlobalAudio();
  if (!a) return;

  stopRamp();

  const start = performance.now();
  const f = clamp(from, 0, 1);
  const tVol = clamp(to, 0, 1);
  const dur = Math.max(500, durationMs);

  const tick = (now: number) => {
    const audio = getGlobalAudio();
    if (!audio) return;

    const elapsed = now - start;
    const t = clamp(elapsed / dur, 0, 1);
    const eased = 1 - Math.pow(1 - t, 3);

    const next = f + (tVol - f) * eased;
    audio.volume = clamp(next, 0, 1);

    if (t < 1) setGlobalRaf(requestAnimationFrame(tick));
    else {
      setGlobalRaf(null);
      audio.volume = clamp(tVol, 0, 1);
    }
  };

  setGlobalRaf(requestAnimationFrame(tick));
}

function getCurrentTrack(): Track {
  return TRACKS.find((t) => t.id === stateSingleton.trackId) || TRACKS[0];
}

function ensureAudio() {
  let a = getGlobalAudio();
  if (a) return a;

  const tr = getCurrentTrack();
  a = new Audio(tr.src);
  a.loop = true;
  a.preload = "auto";
  a.muted = stateSingleton.muted;
  a.volume = stateSingleton.muted ? 0 : 0.05;

  setGlobalAudio(a);
  return a;
}

function persistState() {
  localStorage.setItem(LS_KEYS.trackId, stateSingleton.trackId);
  localStorage.setItem(LS_KEYS.volume, String(stateSingleton.volume));
  localStorage.setItem(LS_KEYS.muted, String(stateSingleton.muted));
  localStorage.setItem(LS_KEYS.playing, String(stateSingleton.playing));
  localStorage.setItem(LS_KEYS.unlocked, String(stateSingleton.unlocked));
  globalThis.__BGM_STATE__ = stateSingleton;
}

function setState(patch: Partial<BgmState>) {
  stateSingleton = { ...stateSingleton, ...patch };
  persistState();

  const a = getGlobalAudio();
  if (a) {
    a.muted = stateSingleton.muted;

    if (stateSingleton.muted) {
      stopRamp();
      a.volume = 0;
    } else if (typeof patch.volume === "number") {
      // ✅ user mexeu no slider => aplica imediatamente e mata ramp
      stopRamp();
      a.volume = clamp(stateSingleton.volume, 0, 1);
    }
  }

  notify();
}

async function applyTrack(id: string) {
  const tr = TRACKS.find((t) => t.id === id) || TRACKS[0];
  const a = ensureAudio();

  stopRamp();
  a.pause();

  a.src = tr.src;
  try {
    a.currentTime = 0;
  } catch {
    // ignore
  }
  a.loop = true;
  a.muted = stateSingleton.muted;
  a.volume = stateSingleton.muted ? 0 : 0.05;
  a.load();

  if (stateSingleton.playing && stateSingleton.unlocked && !stateSingleton.muted) {
    await safePlay();
  }
}

async function safePlay() {
  const a = ensureAudio();

  stopRamp();
  a.muted = stateSingleton.muted;

  const startVol = stateSingleton.muted ? 0 : 0.05;
  a.volume = startVol;

  try {
    await a.play();
    setState({ playing: true });

    if (!stateSingleton.muted) startVolumeRamp(startVol, stateSingleton.volume, 12000);
  } catch {
    // autoplay bloqueado
  }
}

function pauseAudio() {
  const a = getGlobalAudio();
  stopRamp();
  if (a) a.pause();
  setState({ playing: false });
}

async function toggleMute() {
  const next = !stateSingleton.muted;
  setState({ muted: next });

  const a = ensureAudio();

  if (next) {
    stopRamp();
    a.muted = true;
    a.volume = 0;
    return;
  }

  a.muted = false;

  if (stateSingleton.playing) await safePlay();
}

async function playWithUnlock() {
  if (!stateSingleton.unlocked) setState({ unlocked: true });
  setState({ playing: true });
  await safePlay();
}

async function setTrack(id: string) {
  setState({ trackId: id });
  await applyTrack(id);
}

/** ✅ FIX: cleanup não pode retornar boolean */
function subscribe(fn: () => void) {
  subs.add(fn);
  return () => {
    subs.delete(fn);
  };
}

function useBgm() {
  const [, force] = useState(0);

  useEffect(() => {
    const unsubscribe = subscribe(() => force((x) => x + 1));
    return unsubscribe;
  }, []);

  const track = getCurrentTrack();

  return {
    state: stateSingleton,
    track,
    tracks: TRACKS,
    actions: {
      play: playWithUnlock,
      pause: pauseAudio,
      toggleMute,
      setVolume: (v: number) => setState({ volume: clamp(v, 0, 1) }),
      setTrack,
      unlockAndMaybePlay: async () => {
        if (!stateSingleton.unlocked) setState({ unlocked: true });
        if (stateSingleton.playing && !stateSingleton.muted) await safePlay();
      },
    },
  };
}

/* =============================================================================
   ✅ AUTO-START no primeiro clique/toque/tecla (uma vez)
============================================================================= */

let autoStartBound = false;
function bindAutoStartOnce() {
  if (autoStartBound) return;
  autoStartBound = true;

  const onFirst = async () => {
    window.removeEventListener("pointerdown", onFirst);
    window.removeEventListener("touchstart", onFirst);
    window.removeEventListener("keydown", onFirst);

    if (!stateSingleton.unlocked) setState({ unlocked: true });
    if (stateSingleton.playing && !stateSingleton.muted) await safePlay();
  };

  window.addEventListener("pointerdown", onFirst, { once: true });
  window.addEventListener("touchstart", onFirst, { once: true });
  window.addEventListener("keydown", onFirst, { once: true });
}

/* =============================================================================
   1) UI DO HEADER — Menu completo (i18n)
============================================================================= */

export function BackgroundMusicHeader() {
  const { t } = useTranslation();
  const { state, track, tracks, actions } = useBgm();

  useEffect(() => {
    bindAutoStartOnce();
  }, []);

  const IconVol = state.muted ? VolumeX : Volume2;

  return (
    <div className="flex items-center gap-2">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full"
        onClick={() => (state.playing ? actions.pause() : actions.play())}
        aria-label={state.playing ? t("music.controls.pause") : t("music.controls.play")}
        title={state.playing ? t("music.controls.pause") : t("music.controls.play")}
      >
        {state.playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            className="h-9 rounded-full gap-2 px-3"
            variant="secondary"
            aria-label={t("music.controls.menu")}
            title={t("music.controls.menu")}
            onClick={() => actions.unlockAndMaybePlay()}
          >
            <Music2 className="h-4 w-4" />
            <span className="hidden md:inline text-sm font-medium">{t(track.titleKey)}</span>
            <ChevronDown className="h-4 w-4 opacity-70" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-80 p-3">
          <DropdownMenuLabel className="px-1">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{t("music.nowPlayingLabel")}</p>
                <p className="truncate font-medium">{t(track.titleKey)}</p>
              </div>

              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full"
                onClick={actions.toggleMute}
                aria-label={state.muted ? t("music.controls.unmute") : t("music.controls.mute")}
                title={state.muted ? t("music.controls.unmute") : t("music.controls.mute")}
              >
                <IconVol className="h-5 w-5" />
              </Button>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <div className="px-1 py-2">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">{t("music.volumeLabel")}</span>
              <span className="text-xs text-muted-foreground">{Math.round(state.volume * 100)}%</span>
            </div>

            <Slider
              value={[Math.round(state.volume * 100)]}
              min={0}
              max={100}
              step={1}
              onValueChange={(v) => actions.setVolume((v?.[0] ?? 75) / 100)}
            />
          </div>

          <DropdownMenuSeparator />

          <div className="px-1">
            <p className="mb-2 text-sm font-medium">{t("music.chooseTrackLabel")}</p>

            <div className="max-h-56 overflow-auto rounded-md border">
              {tracks.map((trk) => {
                const active = trk.id === state.trackId;
                return (
                  <DropdownMenuItem
                    key={trk.id}
                    className="flex items-center justify-between"
                    onSelect={(e) => {
                      e.preventDefault();
                      actions.setTrack(trk.id);
                    }}
                  >
                    <span className="truncate">{t(trk.titleKey)}</span>
                    {active ? <Check className="h-4 w-4" /> : null}
                  </DropdownMenuItem>
                );
              })}
            </div>

            <p className="mt-3 text-xs text-muted-foreground">{t("music.autoplayHint")}</p>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

/* =============================================================================
   2) MINI TOAST FIXO — com menu próprio (volume + trocar música)
============================================================================= */

export function BackgroundMusicToast() {
  const { t } = useTranslation();
  const { state, track, tracks, actions } = useBgm();

  const [collapsed, setCollapsed] = useState<boolean>(() =>
    readLSBool(LS_KEYS.toastCollapsed, false)
  );

  useEffect(() => {
    bindAutoStartOnce();
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.toastCollapsed, String(collapsed));
  }, [collapsed]);

  const IconVol = state.muted ? VolumeX : Volume2;
  const TOP_OFFSET_CLASS = "top-28";

  return (
    <div className={`fixed ${TOP_OFFSET_CLASS} right-4 z-[2147483647] pointer-events-auto`}>
      {collapsed ? (
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="group flex items-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg px-3 py-2 hover:brightness-110 transition"
          aria-label={t("music.toast.open")}
          title={t("music.toast.open")}
        >
          <ChevronLeft className="h-4 w-4" />
          <Music2 className="h-4 w-4 opacity-90" />
        </button>
      ) : (
        <div className="flex items-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg px-2.5 py-2">
          <button
            type="button"
            onClick={() => (state.playing ? actions.pause() : actions.play())}
            className="h-9 w-9 rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 transition flex items-center justify-center"
            aria-label={state.playing ? t("music.controls.pause") : t("music.controls.play")}
            title={state.playing ? t("music.controls.pause") : t("music.controls.play")}
          >
            {state.playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={actions.toggleMute}
            className="h-9 w-9 rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 transition flex items-center justify-center"
            aria-label={state.muted ? t("music.controls.unmute") : t("music.controls.mute")}
            title={state.muted ? t("music.controls.unmute") : t("music.controls.mute")}
          >
            <IconVol className="h-5 w-5" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                onClick={() => actions.unlockAndMaybePlay()}
                className="hidden sm:flex items-center gap-2 rounded-full px-3 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition"
                aria-label={t("music.controls.menu")}
                title={t("music.controls.menu")}
              >
                <Music2 className="h-4 w-4" />
                <span className="max-w-[160px] truncate text-sm font-semibold">{t(track.titleKey)}</span>
                <ChevronDown className="h-4 w-4 opacity-80" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-80 p-3">
              <DropdownMenuLabel className="px-1">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{t("music.nowPlayingLabel")}</p>
                    <p className="truncate font-medium">{t(track.titleKey)}</p>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 rounded-full"
                    onClick={actions.toggleMute}
                    aria-label={state.muted ? t("music.controls.unmute") : t("music.controls.mute")}
                    title={state.muted ? t("music.controls.unmute") : t("music.controls.mute")}
                  >
                    <IconVol className="h-5 w-5" />
                  </Button>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <div className="px-1 py-2">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">{t("music.volumeLabel")}</span>
                  <span className="text-xs text-muted-foreground">{Math.round(state.volume * 100)}%</span>
                </div>

                <Slider
                  value={[Math.round(state.volume * 100)]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(v) => actions.setVolume((v?.[0] ?? 75) / 100)}
                />
              </div>

              <DropdownMenuSeparator />

              <div className="px-1">
                <p className="mb-2 text-sm font-medium">{t("music.chooseTrackLabel")}</p>

                <div className="max-h-56 overflow-auto rounded-md border">
                  {tracks.map((trk) => {
                    const active = trk.id === state.trackId;
                    return (
                      <DropdownMenuItem
                        key={trk.id}
                        className="flex items-center justify-between"
                        onSelect={(e) => {
                          e.preventDefault();
                          actions.setTrack(trk.id);
                        }}
                      >
                        <span className="truncate">{t(trk.titleKey)}</span>
                        {active ? <Check className="h-4 w-4" /> : null}
                      </DropdownMenuItem>
                    );
                  })}
                </div>

                <p className="mt-3 text-xs text-muted-foreground">{t("music.autoplayHint")}</p>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            type="button"
            onClick={() => setCollapsed(true)}
            className="h-9 w-9 rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 transition flex items-center justify-center"
            aria-label={t("music.toast.collapse")}
            title={t("music.toast.collapse")}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}

/** compat */
export default BackgroundMusicHeader;
