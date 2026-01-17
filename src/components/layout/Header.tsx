import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dropdowns Desktop
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  // Dropdowns Mobile (separados para evitar conflitos)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileBlogOpen, setIsMobileBlogOpen] = useState(false);

  // Timers anti-flicker (mantém aberto ao cruzar o espaço)
  const servicesCloseTimerRef = useRef<number | null>(null);
  const blogCloseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha dropdowns ao clicar fora (apenas desktop)
  useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-services-menu="wrapper"]')) setIsServicesOpen(false);
      if (!target.closest('[data-blog-menu="wrapper"]')) setIsBlogOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  // Reset mobile dropdowns quando menu fecha
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileServicesOpen(false);
      setIsMobileBlogOpen(false);
    }
  }, [isMobileMenuOpen]);

  const clearTimer = (ref: React.MutableRefObject<number | null>) => {
    if (ref.current) {
      window.clearTimeout(ref.current);
      ref.current = null;
    }
  };

  // Serviços handlers (Desktop)
  const openServices = () => {
    clearTimer(servicesCloseTimerRef);
    setIsServicesOpen(true);
    setIsBlogOpen(false);
  };
  const scheduleCloseServices = () => {
    clearTimer(servicesCloseTimerRef);
    servicesCloseTimerRef.current = window.setTimeout(() => setIsServicesOpen(false), 200);
  };

  // Blog handlers (Desktop)
  const openBlog = () => {
    clearTimer(blogCloseTimerRef);
    setIsBlogOpen(true);
    setIsServicesOpen(false);
  };
  const scheduleCloseBlog = () => {
    clearTimer(blogCloseTimerRef);
    blogCloseTimerRef.current = window.setTimeout(() => setIsBlogOpen(false), 200);
  };

  // ✅ Dropdowns agora usam traduções
  const servicesDropdown = [
    { label: t('header.servicesDropdown.consultaDiagnostico'), to: "/consulta-diagnostico" },
    { label: t('header.servicesDropdown.prevencaoHigiene'), to: "/prevencao-higiene" },
    { label: t('header.servicesDropdown.esteticaOrtodontia'), to: "/estetica-ortodontia" },
    { label: t('header.servicesDropdown.implantesProteses'), to: "/implantes-proteses" },
    { label: t('header.servicesDropdown.tratamentosEspecializados'), to: "/tratamentos-especializados" },
  ];

  const blogDropdown = [
    { label: t('header.blogDropdown.higieneOral'), to: "/blog/higiene-oral-diaria" },
    { label: t('header.blogDropdown.estetica'), to: "/blog/estetica-branqueamento" },
    { label: t('header.blogDropdown.odontopediatria'), to: "/blog/odontopediatria-criancas" },
    { label: t('header.blogDropdown.implantes'), to: "/blog/implantes-guia-completo" },
  ];

  const navLinks = [
    { href: "#home", label: t("header.home") },
    { href: "#sobre", label: t("header.about") },
    { href: "#servicos", label: t("header.services"), isServices: true },
    { href: "#equipa", label: t("header.team") },
    { href: "#precos", label: t("header.prices") },
    { href: "#blog", label: t("header.blog"), isBlog: true },
    { href: "#faq", label: t("header.faq") },
    { href: "#contactos", label: t("header.contacts") },
  ];

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsBlogOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileBlogOpen(false);
  };

  const scrollToSection = (href: string) => {
    // Fecha tudo primeiro
    closeAll();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handler para navegação mobile para páginas
  const handleMobileNavigate = (to: string) => {
    closeAll();
    navigate(to);
  };

  // Toggle mobile dropdowns
  const toggleMobileServices = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileServicesOpen(!isMobileServicesOpen);
    setIsMobileBlogOpen(false);
  };

  const toggleMobileBlog = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileBlogOpen(!isMobileBlogOpen);
    setIsMobileServicesOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a 
              href="https://maps.google.com/?q=Rua+D+Sebastião+2050,+Quinta+do+Conde,+Portugal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              {t("header.location")}
            </a>
            <a 
              href="tel:+351924123784"
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {t("header.phone")}
            </a>
          </div>
          <div className="text-primary-foreground/80">{t("header.schedule")}</div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-dental" : "bg-background"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={closeAll} className="flex items-center gap-3">
            <img
              src="/logo-clinica.png"
              alt={`${t("hero.titleHighlight")} - ${t("hero.title")}`}
              className="h-20 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-lg text-foreground leading-tight">
                {t("hero.titleHighlight")}
              </h1>
              <p className="text-xs text-muted-foreground">{t("hero.title")}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              // SERVIÇOS
              if (link.isServices) {
                return (
                  <div
                    key={link.href}
                    data-services-menu="wrapper"
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.href)}
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-accent inline-flex items-center gap-1"
                      aria-haspopup="menu"
                      aria-expanded={isServicesOpen}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    <div
                      className={`absolute left-0 top-full mt-2 w-72 rounded-xl border border-border bg-background shadow-lg overflow-hidden transition-all duration-150 ${
                        isServicesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
                      }`}
                      role="menu"
                      onMouseEnter={openServices}
                      onMouseLeave={scheduleCloseServices}
                    >
                      <div className="py-2">
                        {servicesDropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setIsServicesOpen(false)}
                            className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                            role="menuitem"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // BLOG
              if (link.isBlog) {
                return (
                  <div
                    key={link.href}
                    data-blog-menu="wrapper"
                    className="relative"
                    onMouseEnter={openBlog}
                    onMouseLeave={scheduleCloseBlog}
                  >
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.href)}
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-accent inline-flex items-center gap-1"
                      aria-haspopup="menu"
                      aria-expanded={isBlogOpen}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    <div
                      className={`absolute left-0 top-full mt-2 w-72 rounded-xl border border-border bg-background shadow-lg overflow-hidden transition-all duration-150 ${
                        isBlogOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
                      }`}
                      role="menu"
                      onMouseEnter={openBlog}
                      onMouseLeave={scheduleCloseBlog}
                    >
                      <div className="py-2">
                        {blogDropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setIsBlogOpen(false)}
                            className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                            role="menuitem"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // LINKS NORMAIS
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-accent"
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Language Selector & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSelector />
            <Button variant="cta" size="lg" onClick={() => scrollToSection("#marcacao")}>
              {t("header.bookAppointment")}
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
            <nav className="container py-4 flex flex-col gap-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link) => {
                // Mobile - Serviços com dropdown
                if (link.isServices) {
                  return (
                    <div key={link.href}>
                      {/* Linha com botão de scroll + botão de toggle */}
                      <div className="flex items-center justify-between px-4 py-3 hover:bg-accent rounded-lg transition-colors">
                        <button
                          type="button"
                          onClick={() => scrollToSection(link.href)}
                          className="flex-1 text-left text-foreground hover:text-primary font-medium"
                        >
                          {link.label}
                        </button>
                        <button
                          type="button"
                          onClick={toggleMobileServices}
                          className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                          aria-label={isMobileServicesOpen ? "Fechar submenu" : "Abrir submenu"}
                        >
                          <ChevronDown 
                            className={`w-5 h-5 text-primary transition-transform duration-200 ${
                              isMobileServicesOpen ? "rotate-180" : ""
                            }`} 
                          />
                        </button>
                      </div>

                      {/* Dropdown com serviços específicos */}
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          isMobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="mt-1 ml-4 pl-4 border-l-2 border-primary/20 space-y-1 pb-2">
                          {servicesDropdown.map((item) => (
                            <button
                              key={item.to}
                              type="button"
                              onClick={() => handleMobileNavigate(item.to)}
                              className="block w-full text-left px-3 py-2.5 text-sm text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                // Mobile - Blog com dropdown
                if (link.isBlog) {
                  return (
                    <div key={link.href}>
                      {/* Linha com botão de scroll + botão de toggle */}
                      <div className="flex items-center justify-between px-4 py-3 hover:bg-accent rounded-lg transition-colors">
                        <button
                          type="button"
                          onClick={() => scrollToSection(link.href)}
                          className="flex-1 text-left text-foreground hover:text-primary font-medium"
                        >
                          {link.label}
                        </button>
                        <button
                          type="button"
                          onClick={toggleMobileBlog}
                          className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                          aria-label={isMobileBlogOpen ? "Fechar submenu" : "Abrir submenu"}
                        >
                          <ChevronDown 
                            className={`w-5 h-5 text-primary transition-transform duration-200 ${
                              isMobileBlogOpen ? "rotate-180" : ""
                            }`} 
                          />
                        </button>
                      </div>

                      {/* Dropdown com artigos */}
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          isMobileBlogOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="mt-1 ml-4 pl-4 border-l-2 border-primary/20 space-y-1 pb-2">
                          {blogDropdown.map((item) => (
                            <button
                              key={item.to}
                              type="button"
                              onClick={() => handleMobileNavigate(item.to)}
                              className="block w-full text-left px-3 py-2.5 text-sm text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                // Mobile - Links normais
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="px-4 py-3 text-left text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                );
              })}

              <Button variant="cta" size="lg" className="mt-4" onClick={() => scrollToSection("#marcacao")}>
                {t("header.bookAppointment")}
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;