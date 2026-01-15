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
  Wrench,
  HeartPulse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Implantes = () => {
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

  const title = t("blog.implantes.title", {
    defaultValue: "Implantes dentários: guia completo",
  });
  const description = t("blog.implantes.description", {
    defaultValue:
      "Tudo o que precisa saber sobre implantes dentários, desde o procedimento até à recuperação. Guia completo sobre implantologia.",
  });

  const toc = useMemo(
    () => [
      { id: "what", label: t("blog.implantes.toc.what", { defaultValue: "O que é um implante" }) },
      { id: "advantages", label: t("blog.implantes.toc.advantages", { defaultValue: "Vantagens" }) },
      { id: "eligibility", label: t("blog.implantes.toc.eligibility", { defaultValue: "Quem pode fazer" }) },
      { id: "procedure", label: t("blog.implantes.toc.procedure", { defaultValue: "O procedimento" }) },
      { id: "recovery", label: t("blog.implantes.toc.recovery", { defaultValue: "Recuperação" }) },
      { id: "success", label: t("blog.implantes.toc.success", { defaultValue: "Taxa de sucesso" }) },
      { id: "cost", label: t("blog.implantes.toc.cost", { defaultValue: "Custos" }) },
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
                <Wrench className="w-4 h-4" />
                {t("blog.implantes.category", { defaultValue: "Implantes" })}
              </span>
              
              <span className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                <Clock className="w-4 h-4" />
                {t("blog.implantes.readTime", { defaultValue: "10 min leitura" })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h1>

            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              {t("blog.implantes.lead", {
                defaultValue:
                  "Os implantes dentários são a solução mais moderna e eficaz para substituir dentes perdidos. Funcionam como raízes artificiais que suportam coroas, pontes ou próteses, proporcionando resultados naturais e duradouros.",
              })}
            </p>
          </header>

          <div className="w-full h-64 md:h-[420px] mb-10 rounded-3xl overflow-hidden border bg-muted">
            <img
              src="/implantes.png"
              alt={t("blog.implantes.imageAlt", { defaultValue: "Implantes Dentários" })}
              className="h-full w-full object-cover object-center md:object-[50%_55%]"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-2xl border bg-background p-5 shadow-sm">
                <p className="font-semibold mb-3">
                  {t("blog.implantes.toc.title", { defaultValue: "Neste artigo" })}
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
                    {t("blog.implantes.ctaButton", { defaultValue: "Marcar Consulta" })}
                  </Button>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {t("blog.implantes.toc.note", {
                      defaultValue:
                        "Quer recuperar o seu sorriso? Agende uma avaliação gratuita para saber se os implantes são indicados para si.",
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
                      {t("blog.implantes.takeaways.title", {
                        defaultValue: "Pontos-chave",
                      })}
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        • {t("blog.implantes.takeaways.one", {
                          defaultValue: "Taxa de sucesso superior a 95%",
                        })}
                      </li>
                      <li>
                        • {t("blog.implantes.takeaways.two", {
                          defaultValue: "Podem durar toda a vida com cuidados adequados",
                        })}
                      </li>
                      <li>
                        • {t("blog.implantes.takeaways.three", {
                          defaultValue: "Preservam o osso maxilar e dentes adjacentes",
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* What is an implant */}
              <div id="what" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.implantes.whatTitle", { defaultValue: "O que é um implante dentário?" })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.implantes.whatText", {
                    defaultValue:
                      "Um implante dentário é um pequeno parafuso de titânio que é inserido cirurgicamente no osso maxilar ou mandibular. O titânio é um material biocompatível, o que significa que o corpo o aceita e o osso cresce à sua volta, criando uma base sólida para o novo dente.",
                  })}
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">🔩</div>
                    <h4 className="font-semibold text-foreground">
                      {t("blog.implantes.parts.implant.title", { defaultValue: "Implante" })}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("blog.implantes.parts.implant.text", { defaultValue: "Parafuso de titânio inserido no osso" })}
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">🔗</div>
                    <h4 className="font-semibold text-foreground">
                      {t("blog.implantes.parts.abutment.title", { defaultValue: "Pilar" })}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("blog.implantes.parts.abutment.text", { defaultValue: "Peça de ligação entre implante e coroa" })}
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">👑</div>
                    <h4 className="font-semibold text-foreground">
                      {t("blog.implantes.parts.crown.title", { defaultValue: "Coroa" })}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("blog.implantes.parts.crown.text", { defaultValue: "Dente artificial visível" })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantages */}
              <div id="advantages" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.implantes.advantagesTitle", { defaultValue: "Vantagens dos implantes dentários" })}
                </h2>

                <div className="space-y-3">
                  {[
                    t("blog.implantes.advantages.1", { defaultValue: "Aspeto e sensação natural" }),
                    t("blog.implantes.advantages.2", { defaultValue: "Durabilidade - podem durar toda a vida com cuidados adequados" }),
                    t("blog.implantes.advantages.3", { defaultValue: "Preservam o osso maxilar" }),
                    t("blog.implantes.advantages.4", { defaultValue: "Não afetam os dentes adjacentes" }),
                    t("blog.implantes.advantages.5", { defaultValue: "Permitem comer e falar normalmente" }),
                    t("blog.implantes.advantages.6", { defaultValue: "Não requerem remoção para limpeza" }),
                    t("blog.implantes.advantages.7", { defaultValue: "Melhoram a autoestima e qualidade de vida" }),
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div id="eligibility" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.implantes.eligibilityTitle", { defaultValue: "Quem pode fazer implantes?" })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.implantes.eligibilityText1", {
                    defaultValue:
                      "A maioria dos adultos com boa saúde geral pode receber implantes dentários. No entanto, é necessária uma avaliação cuidadosa para determinar se é um bom candidato.",
                  })}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.implantes.eligibilityText2", {
                    defaultValue: "Fatores que podem afetar a elegibilidade incluem:",
                  })}
                </p>

                <div className="rounded-2xl border bg-background p-6 shadow-sm">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t("blog.implantes.eligibility.1", { defaultValue: "Quantidade e qualidade do osso disponível" })}</li>
                    <li>• {t("blog.implantes.eligibility.2", { defaultValue: "Saúde geral e condições médicas (diabetes, osteoporose)" })}</li>
                    <li>• {t("blog.implantes.eligibility.3", { defaultValue: "Hábitos como fumar" })}</li>
                    <li>• {t("blog.implantes.eligibility.4", { defaultValue: "Higiene oral" })}</li>
                    <li>• {t("blog.implantes.eligibility.5", { defaultValue: "Medicamentos em uso" })}</li>
                  </ul>
                </div>
              </div>

              {/* Procedure */}
              <div id="procedure" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.implantes.procedureTitle", { defaultValue: "Como é o procedimento?" })}
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      phase: t("blog.implantes.procedure.phase1.title", { defaultValue: "Fase 1: Avaliação e planeamento" }),
                      text: t("blog.implantes.procedure.phase1.text", {
                        defaultValue: "O dentista realiza exames clínicos e radiográficos detalhados, incluindo TAC 3D, para avaliar o osso e planear a posição ideal do implante.",
                      }),
                    },
                    {
                      phase: t("blog.implantes.procedure.phase2.title", { defaultValue: "Fase 2: Colocação do implante" }),
                      text: t("blog.implantes.procedure.phase2.text", {
                        defaultValue: "Sob anestesia local, o implante é inserido no osso. O procedimento é geralmente indolor. Pode ser colocado um dente provisório no mesmo dia (carga imediata) em casos selecionados.",
                      }),
                    },
                    {
                      phase: t("blog.implantes.procedure.phase3.title", { defaultValue: "Fase 3: Osteointegração" }),
                      text: t("blog.implantes.procedure.phase3.text", {
                        defaultValue: "Durante 3 a 6 meses, o osso integra-se com o implante. Este período é crucial para o sucesso a longo prazo.",
                      }),
                    },
                    {
                      phase: t("blog.implantes.procedure.phase4.title", { defaultValue: "Fase 4: Colocação da coroa definitiva" }),
                      text: t("blog.implantes.procedure.phase4.text", {
                        defaultValue: "Após a cicatrização, é colocado o pilar e a coroa definitiva, feita à medida para combinar perfeitamente com os seus dentes naturais.",
                      }),
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 rounded-2xl border bg-background p-5 shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold">{item.phase}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recovery */}
              <div id="recovery" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.implantes.recoveryTitle", { defaultValue: "Recuperação e cuidados" })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.implantes.recoveryText", {
                    defaultValue: "A recuperação inicial dura alguns dias a uma semana. Durante este período:",
                  })}
                </p>

                <div className="rounded-2xl border bg-background p-6 shadow-sm">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t("blog.implantes.recovery.1", { defaultValue: "Pode haver algum inchaço e desconforto leve" })}</li>
                    <li>• {t("blog.implantes.recovery.2", { defaultValue: "Tome a medicação prescrita conforme indicado" })}</li>
                    <li>• {t("blog.implantes.recovery.3", { defaultValue: "Evite alimentos duros na zona operada" })}</li>
                    <li>• {t("blog.implantes.recovery.4", { defaultValue: "Mantenha uma boa higiene oral" })}</li>
                    <li>• {t("blog.implantes.recovery.5", { defaultValue: "Evite fumar e álcool" })}</li>
                  </ul>
                </div>
              </div>

              {/* Success Rate */}
              <div id="success" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.implantes.successTitle", { defaultValue: "Taxa de sucesso" })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.implantes.successText", {
                    defaultValue:
                      "Os implantes dentários têm uma taxa de sucesso superior a 95% quando colocados por profissionais experientes e com cuidados adequados. Com manutenção regular, podem durar toda a vida.",
                  })}
                </p>
              </div>

              {/* Cost */}
              <div id="cost" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.implantes.costTitle", { defaultValue: "Quanto custam os implantes?" })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.implantes.costText", {
                    defaultValue:
                      "O custo varia dependendo do número de implantes, tipo de coroa e procedimentos adicionais necessários (como enxerto ósseo). Oferecemos opções de financiamento para tornar o tratamento acessível.",
                  })}
                </p>
              </div>

              {/* Final CTA */}
              <div className="rounded-3xl border bg-primary text-primary-foreground p-8">
                <p className="text-xl md:text-2xl font-bold">
                  {t("blog.implantes.finalCta.title", { defaultValue: "Quer recuperar o seu sorriso?" })}
                </p>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl">
                  {t("blog.implantes.finalCta.text", {
                    defaultValue:
                      "Agende uma avaliação gratuita para saber se os implantes dentários são a solução ideal para si.",
                  })}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button variant="secondary" onClick={handleCTA}>
                    {t("blog.implantes.ctaButton", { defaultValue: "Marcar Consulta" })}
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

export default Implantes;
