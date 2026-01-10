import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Calendar, X } from 'lucide-react';

const FloatingCTA = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 500 && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const scrollToAppointment = () => {
    const element = document.querySelector('#marcacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 animate-scale-in">
      <Button
        variant="cta"
        size="lg"
        onClick={scrollToAppointment}
        className="shadow-dental-lg"
      >
        <Calendar className="w-5 h-5 mr-2" />
        {t('floatingCTA.button')}
      </Button>
      <button
        onClick={() => setIsDismissed(true)}
        className="w-8 h-8 rounded-full bg-background shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Fechar"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FloatingCTA;
