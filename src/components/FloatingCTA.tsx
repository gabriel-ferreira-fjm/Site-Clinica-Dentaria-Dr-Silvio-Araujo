import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Calendar, X, ChevronLeft } from "lucide-react";

const STORAGE_KEY = "floatingCTA:collapsed";

const FloatingCTA = () => {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false); // controla render geral (baseado no scroll)
  const [isCollapsed, setIsCollapsed] = useState(false); // controla se está recolhido (mostra handle)

  // Carrega preferência (persistência)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "1") setIsCollapsed(true);
    } catch {
      // ignore
    }
  }, []);

  // Reage ao scroll: só aparece depois de 500px
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 500;
      setIsVisible(show);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAppointment = useCallback(() => {
    const element = document.querySelector("#marcacao");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, []);

  const collapse = useCallback(() => {
    setIsCollapsed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  const expand = useCallback(() => {
    setIsCollapsed(false);
    try {
      localStorage.setItem(STORAGE_KEY, "0");
    } catch {
      // ignore
    }
  }, []);

  // Se ainda não passou do scroll, não mostra nada (nem handle)
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* HANDLE (mini botão lateral) */}
      {isCollapsed && (
        <button
          type="button"
          onClick={expand}
          className="
            fixed
            right-0
            bottom-28
            z-[60]
            h-12
            w-10
            rounded-l-full
            bg-primary
            text-primary-foreground
            shadow-lg
            flex
            items-center
            justify-center
            hover:opacity-95
            transition
            pointer-events-auto
          "
          aria-label={t("floatingCTA.expand", { defaultValue: "Abrir marcação" })}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* CTA COMPLETO */}
      {!isCollapsed && (
        <div className="relative animate-scale-in">
          <Button
            variant="cta"
            size="lg"
            onClick={scrollToAppointment}
            className="shadow-dental-lg pr-12"
          >
            <Calendar className="w-5 h-5 mr-2" />
            {t("floatingCTA.button")}
          </Button>

          {/* Botão fechar (colapsar) */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              collapse();
            }}
            className="
              absolute
              -right-3
              -top-3
              z-[60]
              w-8 h-8
              rounded-full
              bg-background
              shadow-md
              flex items-center justify-center
              text-muted-foreground
              hover:text-foreground
              transition-colors
              pointer-events-auto
            "
            aria-label={t("common.close", { defaultValue: "Fechar" })}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;
