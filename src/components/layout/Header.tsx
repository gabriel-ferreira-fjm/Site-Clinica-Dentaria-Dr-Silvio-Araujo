import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('header.home') },
    { href: '#sobre', label: t('header.about') },
    { href: '#servicos', label: t('header.services') },
    { href: '#equipa', label: t('header.team') },
    { href: '#precos', label: t('header.prices') },
    { href: '#blog', label: t('header.blog') },
    { href: '#faq', label: t('header.faq') },
    { href: '#contactos', label: t('header.contacts') },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Se não estiver na home, navegar primeiro para a home
    if (location.pathname !== '/') {
      navigate('/');
      // Aguardar navegação completar antes de fazer scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Se já estiver na home, apenas fazer scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {t('header.location')}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {t('header.phone')}
            </span>
          </div>
          <div className="text-primary-foreground/80">
            {t('header.schedule')}
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-dental'
            : 'bg-background'
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-3">
            <img 
              src="/logo-clinica.png" 
              alt="Logo Clínica Dentária Dr. Sílvio Araújo" 
              className="h-20 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-lg text-foreground leading-tight">
                Dr. Sílvio Araújo
              </h1>
              <p className="text-xs text-muted-foreground">Clínica Dentária</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-accent"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Language Selector & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSelector />
            <Button
              variant="cta"
              size="lg"
              onClick={() => scrollToSection('#marcacao')}
            >
              {t('header.bookAppointment')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSelector />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <nav className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="cta"
                size="lg"
                className="mt-4"
                onClick={() => scrollToSection('#marcacao')}
              >
                {t('header.bookAppointment')}
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
