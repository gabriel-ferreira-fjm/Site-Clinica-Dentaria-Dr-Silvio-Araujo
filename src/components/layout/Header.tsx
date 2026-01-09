import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
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
    { href: '#home', label: 'Home' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#equipa', label: 'Equipa' },
    { href: '#precos', label: 'Preços' },
    { href: '#contactos', label: 'Contactos' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              Quinta do Conde, Portugal
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +351 210 851 266
            </span>
          </div>
          <div className="text-primary-foreground/80">
            Seg - Sex: 9h - 19h | Sáb: 9h - 13h
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
          <a href="#home" className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}logo-clinica.png`}
              alt="Logo Clínica Dentária Dr. Sílvio Araújo"
              className="h-20 w-auto block"
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

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="cta"
              size="lg"
              onClick={() => scrollToSection('#marcacao')}
            >
              Marcar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
                Marcar Consulta
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
