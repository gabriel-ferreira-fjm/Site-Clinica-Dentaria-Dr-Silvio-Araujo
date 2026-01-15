import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Calendar, Stethoscope, ScanLine, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ConsultaDiagnostico = () => {
  const { t } = useTranslation();

  const scrollToAppointment = () => {
    const el = document.getElementById("marcacao");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>{t("consultadiagnostico.hero.title")} | Clínica Dentária</title>
        <meta
          name="description"
          content={t("consultadiagnostico.hero.subtitle")}
        />
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="bg-muted/30 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">
          {t("consultadiagnostico.hero.title")}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          {t("consultadiagnostico.hero.subtitle")}
        </p>
        <Button size="lg" onClick={scrollToAppointment}>
          <Calendar className="mr-2 h-5 w-5" />
          {t("consultadiagnostico.hero.cta")}
        </Button>
      </section>

      {/* CONTENT */}
      <section className="py-24 container space-y-20">

        {/* Consulta Dentária */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Stethoscope className="h-20 w-20 text-primary" />
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {t("consultadiagnostico.consultation.title")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("consultadiagnostico.consultation.description")}
            </p>
            <p>{t("consultadiagnostico.consultation.content")}</p>
          </div>
        </div>

        {/* Radiografias Digitais */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScanLine className="h-20 w-20 text-primary" />
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {t("consultadiagnostico.radiology.title")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("consultadiagnostico.radiology.description")}
            </p>
            <p>{t("consultadiagnostico.radiology.content")}</p>
          </div>
        </div>

        {/* Urgências Dentárias */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AlertTriangle className="h-20 w-20 text-destructive" />
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {t("consultadiagnostico.emergency.title")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("consultadiagnostico.emergency.description")}
            </p>
            <p>{t("consultadiagnostico.emergency.content")}</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <h3 className="text-3xl font-bold mb-4">
          {t("consultadiagnostico.cta.title")}
        </h3>
        <p className="mb-8">
          {t("consultadiagnostico.cta.subtitle")}
        </p>
        <Button size="lg" variant="secondary" onClick={scrollToAppointment}>
          {t("consultadiagnostico.cta.button")}
        </Button>
      </section>

      <Footer />
    </>
  );
};

export default ConsultaDiagnostico;
