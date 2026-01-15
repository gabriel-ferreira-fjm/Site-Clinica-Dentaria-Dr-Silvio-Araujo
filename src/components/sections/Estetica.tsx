import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Estetica = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleBackToBlog = useCallback(() => {
    navigate("/");
    window.setTimeout(() => scrollToId("blog"), 150);
  }, [navigate, scrollToId]);

  const handleCTA = useCallback(() => {
    navigate("/");
    window.setTimeout(() => scrollToId("marcacao"), 150);
  }, [navigate, scrollToId]);

  const title = t("blog.estetica.title", {
    defaultValue: "Tudo sobre branqueamento dentário",
  });
  const description = t("blog.estetica.description", {
    defaultValue:
      "Conheça os diferentes tipos de branqueamento dentário e qual é o mais indicado para si. Guia completo sobre estética dentária.",
  });

  const toc = useMemo(
    () => [
      { id: "causes", label: t("blog.estetica.toc.causes", { defaultValue: "O que causa o escurecimento" }) },
      { id: "types", label: t("blog.estetica.toc.types", { defaultValue: "Tipos de branqueamento" }) },
      { id: "safety", label: t("blog.estetica.toc.safety", { defaultValue: "Segurança" }) },
      { id: "aftercare", label: t("blog.estetica.toc.aftercare", { defaultValue: "Cuidados após o tratamento" }) },
      { id: "duration", label: t("blog.estetica.toc.duration", { defaultValue: "Duração dos resultados" }) },
    ],
    [t]
  );

  const share = useCallback(async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, text: description, url });
        return;
      }
      await navigator.clipboard.writeText(url);
    } catch {
      // fallback silencioso
    }
  }, [title, description]);

  return (
    <>
      <Helmet>
        <title>{title} | Dr. Sílvio Araújo</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-5xl">
          <button
            type="button"
            onClick={handleBackToBlog}
            className="inline-flex items-center text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("blog.back", { defaultValue: "Voltar ao Blog" })}
          </button>

          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                {t("blog.estetica.category", { defaultValue: "Estética" })}
              </span>
              
              <span className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                <Clock className="w-4 h-4" />
                {t("blog.estetica.readTime", { defaultValue: "7 min leitura" })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h1>

            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              {t("blog.estetica.lead", {
                defaultValue:
                  "O branqueamento dentário é um dos procedimentos estéticos mais procurados nas clínicas dentárias. Um sorriso mais branco pode aumentar significativamente a autoconfiança e melhorar a aparência geral do rosto.",
              })}
            </p>
          </header>

          <div className="w-full h-64 md:h-[420px] mb-10 rounded-3xl overflow-hidden border bg-muted">
            <img
              src="/branqueamento.png"
              alt={t("blog.branqueamento.imageAlt", { defaultValue: "Branqueamento dentário" })}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-2xl border bg-background p-5 shadow-sm">
                <p className="font-semibold mb-3">
                  {t("blog.estetica.toc.title", { defaultValue: "Neste artigo" })}
                </p>

                <nav className="space-y-2">
                  {toc.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToId(item.id)}
                      className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      • {item.label}
                    </button>
                  ))}
                </nav>

                <div className="mt-5 pt-5 border-t">
                  <Button className="w-full" variant="cta" onClick={handleCTA}>
                    {t("blog.estetica.ctaButton", { defaultValue: "Marcar Consulta" })}
                  </Button>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {t("blog.estetica.toc.note", {
                      defaultValue:
                        "Quer um sorriso mais branco? Agende uma avaliação para descobrir qual o melhor tipo de branqueamento para si.",
                    })}
                  </p>
                </div>
              </div>
            </aside>

            <section className="space-y-10">
              {/* Key Takeaways */}
              <div className="rounded-2xl border bg-primary/5 p-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      {t("blog.estetica.takeaways.title", {
                        defaultValue: "Pontos-chave",
                      })}
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        • {t("blog.estetica.takeaways.one", {
                          defaultValue: "Branqueamento profissional é seguro e eficaz",
                        })}
                      </li>
                      <li>
                        • {t("blog.estetica.takeaways.two", {
                          defaultValue: "Resultados podem durar de 1 a 3 anos",
                        })}
                      </li>
                      <li>
                        • {t("blog.estetica.takeaways.three", {
                          defaultValue: "Consulte sempre um profissional qualificado",
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Causes Section */}
              <div id="causes" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.estetica.causesTitle", { defaultValue: "O que causa o escurecimento dos dentes?" })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.estetica.causesText", {
                    defaultValue:
                      "Os dentes podem escurecer por diversas razões ao longo do tempo. Entender as causas ajuda a prevenir e a escolher o tratamento mais adequado.",
                  })}
                </p>

                <div className="space-y-3">
                  {[
                    {
                      title: t("blog.estetica.causes.food.title", { defaultValue: "Alimentos e bebidas" }),
                      text: t("blog.estetica.causes.food.text", { defaultValue: "Café, chá, vinho tinto e refrigerantes com corantes" }),
                    },
                    {
                      title: t("blog.estetica.causes.tobacco.title", { defaultValue: "Tabaco" }),
                      text: t("blog.estetica.causes.tobacco.text", { defaultValue: "O fumo é uma das principais causas de manchas nos dentes" }),
                    },
                    {
                      title: t("blog.estetica.causes.age.title", { defaultValue: "Idade" }),
                      text: t("blog.estetica.causes.age.text", { defaultValue: "O esmalte desgasta-se naturalmente, revelando a dentina mais amarelada" }),
                    },
                    {
                      title: t("blog.estetica.causes.medication.title", { defaultValue: "Medicamentos" }),
                      text: t("blog.estetica.causes.medication.text", { defaultValue: "Certos antibióticos e tratamentos podem causar descoloração" }),
                    },
                    {
                      title: t("blog.estetica.causes.hygiene.title", { defaultValue: "Higiene inadequada" }),
                      text: t("blog.estetica.causes.hygiene.text", { defaultValue: "Acumulação de placa e tártaro" }),
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-3 rounded-2xl border bg-background p-5 shadow-sm"
                    >
                      <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Types Section */}
              <div id="types" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.estetica.typesTitle", { defaultValue: "Tipos de branqueamento dentário" })}
                </h2>

                <div className="space-y-6">
                  {/* Office Whitening */}
                  <div className="rounded-2xl border bg-background p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">
                      {t("blog.estetica.types.office.title", { defaultValue: "1. Branqueamento em consultório" })}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t("blog.estetica.types.office.text", {
                        defaultValue:
                          "Realizado pelo dentista, utiliza produtos com concentração mais elevada de agentes branqueadores, proporcionando resultados visíveis numa única sessão. É o método mais rápido e eficaz.",
                      })}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {t("blog.estetica.types.office.duration", { defaultValue: "Duração: 1 a 2 horas" })}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {t("blog.estetica.types.office.results", { defaultValue: "Resultados: Até 8 tons mais claro" })}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {t("blog.estetica.types.office.safety", { defaultValue: "Segurança: Monitorizado por profissional" })}
                      </li>
                    </ul>
                  </div>

                  {/* Home Whitening */}
                  <div className="rounded-2xl border bg-background p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">
                      {t("blog.estetica.types.home.title", { defaultValue: "2. Branqueamento caseiro supervisionado" })}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t("blog.estetica.types.home.text", {
                        defaultValue:
                          "O dentista confeciona moldeiras personalizadas e fornece o gel branqueador para uso em casa. É uma opção mais económica e confortável, embora os resultados demorem mais tempo a aparecer.",
                      })}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {t("blog.estetica.types.home.duration", { defaultValue: "Duração: 2 a 4 semanas de tratamento" })}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {t("blog.estetica.types.home.application", { defaultValue: "Aplicação: Algumas horas por dia ou durante a noite" })}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {t("blog.estetica.types.home.advantage", { defaultValue: "Vantagem: Pode retocar quando necessário" })}
                      </li>
                    </ul>
                  </div>

                  {/* Combined Whitening */}
                  <div className="rounded-2xl border bg-background p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">
                      {t("blog.estetica.types.combined.title", { defaultValue: "3. Branqueamento combinado" })}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("blog.estetica.types.combined.text", {
                        defaultValue:
                          "Combina uma sessão em consultório com tratamento caseiro de manutenção, oferecendo o melhor dos dois métodos: resultados rápidos e duradouros.",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Safety Section */}
              <div id="safety" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.estetica.safetyTitle", { defaultValue: "O branqueamento é seguro?" })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.estetica.safetyText", {
                    defaultValue:
                      "Sim, quando realizado ou supervisionado por um dentista qualificado. Os produtos utilizados em clínicas são seguros e testados. Pode haver alguma sensibilidade temporária, que desaparece após o tratamento.",
                  })}
                </p>
              </div>

              {/* Aftercare Section */}
              <div id="aftercare" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.estetica.aftercareTitle", { defaultValue: "Cuidados após o branqueamento" })}
                </h2>

                <div className="rounded-2xl border bg-background p-6 shadow-sm">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {t("blog.estetica.aftercare.1", { defaultValue: "Evite alimentos e bebidas com cor intensa nas primeiras 48 horas" })}
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {t("blog.estetica.aftercare.2", { defaultValue: "Não fume durante o período de tratamento" })}
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {t("blog.estetica.aftercare.3", { defaultValue: "Mantenha uma boa higiene oral" })}
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {t("blog.estetica.aftercare.4", { defaultValue: "Faça visitas regulares ao dentista para manutenção" })}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Duration Section */}
              <div id="duration" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.estetica.durationTitle", { defaultValue: "Quanto tempo duram os resultados?" })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.estetica.durationText", {
                    defaultValue:
                      "Os resultados podem durar de 1 a 3 anos, dependendo dos hábitos alimentares, higiene oral e estilo de vida. Tratamentos de manutenção periódicos ajudam a prolongar o efeito.",
                  })}
                </p>
              </div>

              {/* Final CTA */}
              <div className="rounded-3xl border bg-primary text-primary-foreground p-8">
                <p className="text-xl md:text-2xl font-bold">
                  {t("blog.estetica.finalCta.title", { defaultValue: "Quer um sorriso mais branco?" })}
                </p>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl">
                  {t("blog.estetica.finalCta.text", {
                    defaultValue:
                      "Agende uma avaliação para descobrir qual o melhor tipo de branqueamento para si.",
                  })}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button variant="secondary" onClick={handleCTA}>
                    {t("blog.estetica.ctaButton", { defaultValue: "Marcar Consulta" })}
                  </Button>
                  <Button variant="outline" onClick={share} className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    <Share2 className="w-4 h-4 mr-2" />
                    {t("blog.share", { defaultValue: "Partilhar" })}
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <span className="text-muted-foreground">
                  {t("blog.share", { defaultValue: "Partilhar" })}
                </span>
                <Button variant="outline" size="icon" type="button" onClick={share} aria-label={t("blog.share", { defaultValue: "Partilhar" })}>
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default Estetica;
