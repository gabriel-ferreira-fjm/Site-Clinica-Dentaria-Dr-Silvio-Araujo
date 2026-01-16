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

  // Dropdowns
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  // Timers anti-flicker (mantém aberto ao cruzar o espaço)
  const servicesCloseTimerRef = useRef<number | null>(null);
  const blogCloseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha dropdowns ao clicar fora
  useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-services-menu="wrapper"]')) setIsServicesOpen(false);
      if (!target.closest('[data-blog-menu="wrapper"]')) setIsBlogOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  const clearTimer = (ref: React.MutableRefObject<number | null>) => {
    if (ref.current) {
      window.clearTimeout(ref.current);
      ref.current = null;
    }
  };

  // Serviços handlers
  const openServices = () => {
    clearTimer(servicesCloseTimerRef);
    setIsServicesOpen(true);
    setIsBlogOpen(false);
  };
  const scheduleCloseServices = () => {
    clearTimer(servicesCloseTimerRef);
    servicesCloseTimerRef.current = window.setTimeout(() => setIsServicesOpen(false), 200);
  };

  // Blog handlers
  const openBlog = () => {
    clearTimer(blogCloseTimerRef);
    setIsBlogOpen(true);
    setIsServicesOpen(false);
  };
  const scheduleCloseBlog = () => {
    clearTimer(blogCloseTimerRef);
    blogCloseTimerRef.current = window.setTimeout(() => setIsBlogOpen(false), 200);
  };

  const servicesDropdown = [
    { label: "Consulta e Diagnóstico", to: "/consulta-diagnostico" },
    { label: "Prevenção & Higiene", to: "/prevencao-higiene" },
    { label: "Estética e Ortodontia", to: "/estetica-ortodontia" },
    { label: "Implantes e Próteses", to: "/implantes-proteses" },
    { label: "Tratamentos especializados", to: "/tratamentos-especializados" },
  ];

  // ✅ rotas do Blog exatamente como no seu App.tsx
  const blogDropdown = [
    { label: "Higiene Oral", to: "/blog/higiene-oral-diaria" },
    { label: "Estética", to: "/blog/estetica-branqueamento" },
    { label: "Odontopediatria", to: "/blog/odontopediatria-criancas" },
    { label: "Implantes", to: "/blog/implantes-guia-completo" },
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
  };

  const scrollToSection = (href: string) => {
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

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {t("header.location")}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {t("header.phone")}
            </span>
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
              alt="Logo Clínica Dentária Dr. Sílvio Araújo"
              className="h-20 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-lg text-foreground leading-tight">
                Dr. Sílvio Araújo
              </h1>
              <p className="text-xs text-muted-foreground">Clínica Dentária</p>
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

              // BLOG (✅ sem negrito)
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
            <nav className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                // Mobile - Serviços accordion
                if (link.isServices) {
                  return (
                    <div key={link.href} className="px-1">
                      <button
                        type="button"
                        onClick={() => {
                          setIsServicesOpen((v) => !v);
                          setIsBlogOpen(false);
                        }}
                        className="w-full px-3 py-3 text-left text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors flex items-center justify-between"
                        aria-expanded={isServicesOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isServicesOpen && (
                        <div className="mt-1 ml-2 border-l border-border">
                          {servicesDropdown.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={closeAll}
                              className="block px-4 py-3 text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // Mobile - Blog accordion (✅ sem negrito)
                if (link.isBlog) {
                  return (
                    <div key={link.href} className="px-1">
                      <button
                        type="button"
                        onClick={() => {
                          setIsBlogOpen((v) => !v);
                          setIsServicesOpen(false);
                        }}
                        className="w-full px-3 py-3 text-left text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors flex items-center justify-between"
                        aria-expanded={isBlogOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${isBlogOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isBlogOpen && (
                        <div className="mt-1 ml-2 border-l border-border">
                          {blogDropdown.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={closeAll}
                              className="block px-4 py-3 text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // Mobile - Links normais
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="px-4 py-3 text-left text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
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
