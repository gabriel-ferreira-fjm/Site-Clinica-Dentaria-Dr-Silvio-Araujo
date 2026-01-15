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
  Baby,
  HeartPulse,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Odontopediatria = () => {
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

  const title = t("blog.odontopediatria.title", {
    defaultValue: "Quando levar as crianças ao dentista?",
  });
  const description = t("blog.odontopediatria.description", {
    defaultValue:
      "Saiba qual a idade ideal para a primeira consulta e como preparar os mais pequenos para uma experiência positiva no dentista.",
  });

  const toc = useMemo(
    () => [
      { id: "ideal-age", label: t("blog.odontopediatria.toc.idealAge", { defaultValue: "Idade ideal" }) },
      { id: "preparation", label: t("blog.odontopediatria.toc.preparation", { defaultValue: "Preparar a consulta" }) },
      { id: "problems", label: t("blog.odontopediatria.toc.problems", { defaultValue: "Problemas comuns" }) },
      { id: "hygiene", label: t("blog.odontopediatria.toc.hygiene", { defaultValue: "Higiene por idade" }) },
      { id: "frequency", label: t("blog.odontopediatria.toc.frequency", { defaultValue: "Frequência das consultas" }) },
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
                <Baby className="w-4 h-4" />
                {t("blog.odontopediatria.category", { defaultValue: "Odontopediatria" })}
              </span>
              
              <span className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                <Clock className="w-4 h-4" />
                {t("blog.odontopediatria.readTime", { defaultValue: "4 min leitura" })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h1>

            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              {t("blog.odontopediatria.lead", {
                defaultValue:
                  "A saúde oral das crianças é fundamental para o seu desenvolvimento. Muitos pais perguntam-se quando devem levar os filhos ao dentista pela primeira vez e como tornar essa experiência positiva.",
              })}
            </p>
          </header>

          <div className="w-full h-64 md:h-[420px] mb-10 rounded-3xl overflow-hidden border bg-muted">
            <img
              src="/criancas.png"
              alt={t("blog.odontopediatria.imageAlt", { defaultValue: "Criança no dentista com os pais" })}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-2xl border bg-background p-5 shadow-sm">
                <p className="font-semibold mb-3">
                  {t("blog.odontopediatria.toc.title", { defaultValue: "Neste artigo" })}
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
                    {t("blog.odontopediatria.ctaButton", { defaultValue: "Marcar Consulta" })}
                  </Button>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {t("blog.odontopediatria.toc.note", {
                      defaultValue:
                        "A nossa equipa está preparada para receber os mais pequenos com todo o carinho e atenção.",
                    })}
                  </p>
                </div>
              </div>
            </aside>

            <section className="space-y-10">
              {/* Key Takeaways */}
              <div className="rounded-2xl border bg-primary/5 p-6">
                <div className="flex items-start gap-3">
                  <HeartPulse className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      {t("blog.odontopediatria.takeaways.title", {
                        defaultValue: "Pontos-chave",
                      })}
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        • {t("blog.odontopediatria.takeaways.one", {
                          defaultValue: "Primeira consulta até ao 1º aniversário",
                        })}
                      </li>
                      <li>
                        • {t("blog.odontopediatria.takeaways.two", {
                          defaultValue: "Fale positivamente sobre o dentista",
                        })}
                      </li>
                      <li>
                        • {t("blog.odontopediatria.takeaways.three", {
                          defaultValue: "Consultas regulares a cada 6 meses",
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ideal Age Section */}
              <div id="ideal-age" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.odontopediatria.idealAgeTitle", { defaultValue: "Qual a idade ideal para a primeira consulta?" })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.odontopediatria.idealAgeText", {
                    defaultValue:
                      "A primeira visita ao dentista deve ocorrer quando nasce o primeiro dente ou, no máximo, até ao primeiro aniversário da criança. Esta consulta inicial é essencial para:",
                  })}
                </p>

                <div className="space-y-3">
                  {[
                    t("blog.odontopediatria.idealAge.1", { defaultValue: "Avaliar o desenvolvimento dos dentes e maxilares" }),
                    t("blog.odontopediatria.idealAge.2", { defaultValue: "Identificar precocemente possíveis problemas" }),
                    t("blog.odontopediatria.idealAge.3", { defaultValue: "Orientar os pais sobre higiene oral infantil" }),
                    t("blog.odontopediatria.idealAge.4", { defaultValue: "Criar uma relação positiva entre a criança e o dentista" }),
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preparation Section */}
              <div id="preparation" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.odontopediatria.preparationTitle", { defaultValue: "Como preparar a criança para a consulta?" })}
                </h2>

                {/* Before */}
                <div className="rounded-2xl border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">
                    {t("blog.odontopediatria.preparation.beforeTitle", { defaultValue: "Antes da consulta" })}
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>{t("blog.odontopediatria.preparation.before.1.title", { defaultValue: "Fale positivamente:" })}</strong>{" "}
                        {t("blog.odontopediatria.preparation.before.1.text", { defaultValue: "Evite usar palavras como \"dor\", \"injeção\" ou \"arrancar\"" })}
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>{t("blog.odontopediatria.preparation.before.2.title", { defaultValue: "Leia livros:" })}</strong>{" "}
                        {t("blog.odontopediatria.preparation.before.2.text", { defaultValue: "Existem histórias infantis sobre visitas ao dentista" })}
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>{t("blog.odontopediatria.preparation.before.3.title", { defaultValue: "Brinque de dentista:" })}</strong>{" "}
                        {t("blog.odontopediatria.preparation.before.3.text", { defaultValue: "Simule uma consulta em casa com bonecos" })}
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>{t("blog.odontopediatria.preparation.before.4.title", { defaultValue: "Escolha o horário certo:" })}</strong>{" "}
                        {t("blog.odontopediatria.preparation.before.4.text", { defaultValue: "Prefira horários em que a criança está descansada" })}
                      </div>
                    </li>
                  </ul>
                </div>

                {/* During */}
                <div className="rounded-2xl border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">
                    {t("blog.odontopediatria.preparation.duringTitle", { defaultValue: "Durante a consulta" })}
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• {t("blog.odontopediatria.preparation.during.1", { defaultValue: "Mantenha a calma e transmita segurança" })}</li>
                    <li>• {t("blog.odontopediatria.preparation.during.2", { defaultValue: "Deixe o dentista comunicar diretamente com a criança" })}</li>
                    <li>• {t("blog.odontopediatria.preparation.during.3", { defaultValue: "Evite fazer promessas de recompensas exageradas" })}</li>
                    <li>• {t("blog.odontopediatria.preparation.during.4", { defaultValue: "Elogie o comportamento da criança após a consulta" })}</li>
                  </ul>
                </div>
              </div>

              {/* Common Problems Section */}
              <div id="problems" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.odontopediatria.problemsTitle", { defaultValue: "Problemas dentários comuns em crianças" })}
                </h2>

                <div className="space-y-4">
                  {/* Baby Bottle Cavities */}
                  <div className="rounded-2xl border bg-background p-6 shadow-sm">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">
                          {t("blog.odontopediatria.problems.bottle.title", { defaultValue: "Cáries de biberão" })}
                        </h3>
                        <p className="mt-1 text-muted-foreground">
                          {t("blog.odontopediatria.problems.bottle.text", {
                            defaultValue:
                              "Ocorrem quando a criança adormece com o biberão de leite ou sumo na boca. Para prevenir, limpe os dentes após cada mamada e evite bebidas açucaradas no biberão.",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Thumb Sucking */}
                  <div className="rounded-2xl border bg-background p-6 shadow-sm">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">
                          {t("blog.odontopediatria.problems.thumb.title", { defaultValue: "Chuchar no dedo" })}
                        </h3>
                        <p className="mt-1 text-muted-foreground">
                          {t("blog.odontopediatria.problems.thumb.text", {
                            defaultValue:
                              "É natural nos primeiros anos, mas deve ser desencorajado após os 4 anos para evitar alterações no posicionamento dos dentes e no desenvolvimento da arcada dentária.",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dental Trauma */}
                  <div className="rounded-2xl border bg-background p-6 shadow-sm">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">
                          {t("blog.odontopediatria.problems.trauma.title", { defaultValue: "Traumatismos dentários" })}
                        </h3>
                        <p className="mt-1 text-muted-foreground">
                          {t("blog.odontopediatria.problems.trauma.text", {
                            defaultValue:
                              "Quedas e acidentes são comuns na infância. Em caso de trauma dentário, procure imediatamente um dentista, mesmo que pareça não haver danos visíveis.",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hygiene by Age Section */}
              <div id="hygiene" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.odontopediatria.hygieneTitle", { defaultValue: "Higiene oral infantil por idade" })}
                </h2>

                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-2">
                      {t("blog.odontopediatria.hygiene.0to2.title", { defaultValue: "0-2 anos" })}
                    </h4>
                    <p className="text-muted-foreground">
                      {t("blog.odontopediatria.hygiene.0to2.text", {
                        defaultValue:
                          "Limpe as gengivas com uma gaze húmida. Quando surgirem os primeiros dentes, use uma escova de bebé com água.",
                      })}
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-2">
                      {t("blog.odontopediatria.hygiene.2to6.title", { defaultValue: "2-6 anos" })}
                    </h4>
                    <p className="text-muted-foreground">
                      {t("blog.odontopediatria.hygiene.2to6.text", {
                        defaultValue:
                          "Use pasta de dentes com flúor (quantidade do tamanho de uma ervilha). Os pais devem supervisionar e ajudar na escovagem.",
                      })}
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-2">
                      {t("blog.odontopediatria.hygiene.6plus.title", { defaultValue: "6+ anos" })}
                    </h4>
                    <p className="text-muted-foreground">
                      {t("blog.odontopediatria.hygiene.6plus.text", {
                        defaultValue:
                          "A criança pode escovar sozinha, mas os pais devem verificar. Introduza o uso de fio dental quando os dentes começarem a tocar-se.",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Frequency Section */}
              <div id="frequency" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.odontopediatria.frequencyTitle", { defaultValue: "Com que frequência ir ao dentista?" })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.odontopediatria.frequencyText", {
                    defaultValue:
                      "Após a primeira consulta, recomenda-se visitar o dentista a cada 6 meses para check-ups de rotina. Esta frequência permite detetar e tratar problemas precocemente, quando são mais fáceis de resolver.",
                  })}
                </p>
              </div>

              {/* Final CTA */}
              <div className="rounded-3xl border bg-primary text-primary-foreground p-8">
                <p className="text-xl md:text-2xl font-bold">
                  {t("blog.odontopediatria.finalCta.title", { defaultValue: "Está na hora da primeira consulta do seu filho?" })}
                </p>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl">
                  {t("blog.odontopediatria.finalCta.text", {
                    defaultValue:
                      "A nossa equipa está preparada para receber os mais pequenos com todo o carinho e atenção.",
                  })}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button variant="secondary" onClick={handleCTA}>
                    {t("blog.odontopediatria.ctaButton", { defaultValue: "Marcar Consulta" })}
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

export default Odontopediatria;
