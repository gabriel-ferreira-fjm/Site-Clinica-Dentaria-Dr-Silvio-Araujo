import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Força o play do vídeo no iOS/Safari
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Função para tentar reproduzir o vídeo
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        // Silenciosamente ignora erro - alguns browsers bloqueiam autoplay
        console.log('Autoplay prevented:', error);
      }
    };

    // Tenta reproduzir imediatamente
    playVideo();

    // Também tenta reproduzir quando o vídeo estiver carregado
    video.addEventListener('loadeddata', playVideo);

    // Tenta reproduzir quando o usuário interagir com a página (fallback para iOS restritivo)
    const handleInteraction = () => {
      playVideo();
      // Remove listeners após primeira interação
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };

    document.addEventListener('touchstart', handleInteraction, { passive: true });
    document.addEventListener('click', handleInteraction, { passive: true });
    document.addEventListener('scroll', handleInteraction, { passive: true });

    return () => {
      video.removeEventListener('loadeddata', playVideo);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/video-poster.jpg"
          className="absolute w-full h-full object-cover"
          webkit-playsinline="true"
          x5-playsinline="true"
        >
          <source src="/video-hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-white/40" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Floating shapes */}
      <div className="absolute top-40 right-20 w-4 h-4 bg-primary/30 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-40 right-40 w-6 h-6 bg-primary/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
      <div className="absolute top-60 left-20 w-3 h-3 bg-primary/40 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
              {t('hero.welcome')}
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in stagger-1">
              {t('hero.title')}
              <br />
              <span className="text-primary">{t('hero.titleHighlight')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed animate-fade-in stagger-2">
              {t('hero.subtitle')}
            </p>
            
            <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 animate-fade-in stagger-3">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in stagger-4">
              <Button
                variant="cta"
                size="xl"
                onClick={() => scrollToSection('#marcacao')}
                className="group"
              >
                {t('hero.bookNow')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection('#servicos')}
              >
                {t('hero.viewServices')}
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4 animate-fade-in stagger-5">
              
              <a href="tel:924123784"
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">{t('header.phone')}</span>
              </a>
              <a href="https://maps.google.com/?q=Rua+D+Sebastião+2050,+Quinta+do+Conde,+Portugal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span>Rua D Sebastião 2050, Quinta do Conde, Portugal</span>
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              {/* Main circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary-dark/50 rounded-full shadow-dental-lg" />
              
              {/* Inner content */}
              <div className="absolute inset-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C10.8 2 9.7 2.4 8.8 3.1C8.1 3.6 7.5 4.3 7.1 5.1C6.4 4.5 5.5 4.2 4.5 4.5C3.1 4.9 2 6.2 2 7.8C2 9.1 2.6 10.3 3.5 11.2C4.3 12 5.4 12.5 6.5 12.5C6.8 12.5 7 12.5 7.3 12.4C7.1 13.4 7 14.5 7 15.5C7 18.5 8.3 21 10.5 22.4C11 22.8 11.5 23 12 23C12.5 23 13 22.8 13.5 22.4C15.7 21 17 18.5 17 15.5C17 14.5 16.9 13.4 16.7 12.4C17 12.5 17.2 12.5 17.5 12.5C18.6 12.5 19.7 12 20.5 11.2C21.4 10.3 22 9.1 22 7.8C22 6.2 20.9 4.9 19.5 4.5C18.5 4.2 17.6 4.5 16.9 5.1C16.5 4.3 15.9 3.6 15.2 3.1C14.3 2.4 13.2 2 12 2Z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">
                    {t('hero.professionalCare')}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {t('hero.yearsExperience')}
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 right-0 bg-white/60 backdrop-blur-sm rounded-2xl shadow-dental p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-green-100/80 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-gray-900 text-sm">+5000</p>
                    <p className="text-xs text-gray-600">{t('hero.happyPatients')}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-0 bg-white/60 backdrop-blur-sm rounded-2xl shadow-dental p-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-gray-900 text-sm">4.9/5</p>
                    <p className="text-xs text-gray-600">{t('hero.averageRating')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;