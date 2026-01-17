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
  HeartPulse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const HigieneOral = () => {
  // ✅ namespace correto + idioma resolvido
  const { t, i18n } = useTranslation("translation");
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

  const title = t("blog.higiene.title", {
    defaultValue: "Como manter uma boa higiene oral diária",
  });

  const description = t("blog.higiene.description", {
    defaultValue:
      "Hábitos práticos para dentes e gengivas mais saudáveis: técnica de escovagem, fio dentário, elixir, alimentação e quando consultar o dentista.",
  });

  const toc = useMemo(
    () => [
      { id: "why", label: t("blog.higiene.toc.why", { defaultValue: "Porque é importante" }) },
      {
        id: "daily",
        label: t("blog.higiene.toc.daily", { defaultValue: "Rotina diária (passo a passo)" }),
      },
      {
        id: "technique",
        label: t("blog.higiene.toc.technique", { defaultValue: "Técnica de escovagem (guia rápido)" }),
      },
      {
        id: "floss",
        label: t("blog.higiene.toc.floss", { defaultValue: "Fio dentário e limpeza interdental" }),
      },
      { id: "diet", label: t("blog.higiene.toc.diet", { defaultValue: "Alimentação e hábitos" }) },
      {
        id: "warning",
        label: t("blog.higiene.toc.warning", { defaultValue: "Sinais de alerta" }),
      },
      {
        id: "faq",
        label: t("blog.higiene.toc.faq", { defaultValue: "Mitos e perguntas frequentes" }),
      },
    ],
    // ✅ atualiza quando troca idioma
    [t, i18n.resolvedLanguage]
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
        <html lang={i18n.resolvedLanguage || i18n.language} />
        <title>{title}</title>
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
                {t("blog.higiene.category", { defaultValue: "Higiene Oral" })}
              </span>

              <span className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                <Clock className="w-4 h-4" />
                {t("blog.higiene.readTime", { defaultValue: "Leitura de 5 min" })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h1>

            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              {t("blog.higiene.lead", {
                defaultValue:
                  "Pequenos hábitos diários fazem uma grande diferença. Aqui está um guia prático para manter os dentes e as gengivas saudáveis — em casa e entre consultas.",
              })}
            </p>
          </header>

          <div className="w-full h-64 md:h-[420px] mb-10 rounded-3xl overflow-hidden border bg-muted">
            <img
              src="/higiene-oral.png"
              alt={t("blog.higiene.imageAlt", { defaultValue: "Higiene oral" })}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-2xl border bg-background p-5 shadow-sm">
                <p className="font-semibold mb-3">
                  {t("blog.higiene.toc.title", { defaultValue: "Neste artigo" })}
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
                    {t("blog.higiene.ctaButton", { defaultValue: "Marcar Consulta" })}
                  </Button>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {t("blog.higiene.toc.note", {
                      defaultValue:
                        "Precisa de um plano personalizado? Podemos avaliar a sua rotina e recomendar os melhores produtos e técnicas.",
                    })}
                  </p>
                </div>
              </div>
            </aside>

            <section className="space-y-10">
              <div className="rounded-2xl border bg-primary/5 p-6">
                <div className="flex items-start gap-3">
                  <HeartPulse className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      {t("blog.higiene.keyTakeawaysTitle", { defaultValue: "Pontos-chave" })}
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        •{" "}
                        {t("blog.higiene.keyTakeaway1", {
                          defaultValue: "Escove 2× por dia (2 min) + limpeza interdental",
                        })}
                      </li>
                      <li>
                        •{" "}
                        {t("blog.higiene.keyTakeaway2", {
                          defaultValue: "Reduza snacks e bebidas açucaradas",
                        })}
                      </li>
                      <li>
                        •{" "}
                        {t("blog.higiene.keyTakeaway3", {
                          defaultValue: "Não salte as limpezas profissionais",
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="why" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.whyTitle", { defaultValue: "Porque é importante" })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.higiene.whyText1", {
                    defaultValue:
                      "A saúde oral vai além da estética. Doença gengival e cárie podem causar dor, perda dentária e estão associadas a condições sistémicas como doença cardiovascular e diabetes.",
                  })}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.higiene.whyText2", {
                    defaultValue:
                      "A boa notícia? A prevenção é simples com os hábitos certos. Eis o que faz mesmo a diferença.",
                  })}
                </p>
              </div>

              <div id="daily" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.dailyTitle", { defaultValue: "Rotina diária (passo a passo)" })}
                </h2>

                <div className="space-y-3">
                  {[
                    {
                      title: t("blog.higiene.daily.step1.title", {
                        defaultValue: "Manhã e noite: escovar durante 2 minutos",
                      }),
                      text: t("blog.higiene.daily.step1.text", {
                        defaultValue:
                          "Use pasta com flúor e escova de cerdas macias. Cubra todas as superfícies — externa, interna e mastigatória.",
                      }),
                    },
                    {
                      title: t("blog.higiene.daily.step2.title", {
                        defaultValue: "Limpeza interdental (1× por dia)",
                      }),
                      text: t("blog.higiene.daily.step2.text", {
                        defaultValue:
                          "Use fio dentário ou escovilhões interdentais. Idealmente à noite, antes de escovar.",
                      }),
                    },
                    {
                      title: t("blog.higiene.daily.step3.title", {
                        defaultValue: "Opcional: elixir/colutório",
                      }),
                      text: t("blog.higiene.daily.step3.text", {
                        defaultValue:
                          "Use apenas se recomendado pelo seu dentista. Não substitui escovagem nem limpeza interdental.",
                      }),
                    },
                    {
                      title: t("blog.higiene.daily.step4.title", {
                        defaultValue: "Hidratação e menos açúcar",
                      }),
                      text: t("blog.higiene.daily.step4.text", {
                        defaultValue:
                          "Beba água ao longo do dia. Evite petiscar entre refeições, sobretudo alimentos açucarados.",
                      }),
                    },
                  ].map((step) => (
                    <div
                      key={step.title}
                      className="flex gap-3 rounded-2xl border bg-background p-5 shadow-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">{step.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="technique" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.techniqueTitle", { defaultValue: "Técnica de escovagem (guia rápido)" })}
                </h2>

                <div className="rounded-2xl border bg-background p-6 shadow-sm">
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      <strong>Ângulo:</strong>{" "}
                      {t("blog.higiene.tech1", {
                        defaultValue:
                          "Segure a escova a 45° em relação à linha da gengiva (onde o dente encontra a gengiva).",
                      })}
                    </li>
                    <li>
                      <strong>Movimento:</strong>{" "}
                      {t("blog.higiene.tech2", {
                        defaultValue: "Faça movimentos curtos e suaves — evite escovar com força.",
                      })}
                    </li>
                    <li>
                      <strong>Cobertura:</strong>{" "}
                      {t("blog.higiene.tech3", {
                        defaultValue:
                          "Escove as superfícies externa, interna e mastigatória de todos os dentes.",
                      })}
                    </li>
                    <li>
                      <strong>Língua:</strong>{" "}
                      {t("blog.higiene.tech4", {
                        defaultValue:
                          "Escove suavemente a língua (ou use raspador) para reduzir bactérias e melhorar o hálito.",
                      })}
                    </li>
                  </ul>
                </div>
              </div>

              <div id="floss" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.flossSectionTitle", { defaultValue: "Fio dentário e limpeza interdental" })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.higiene.flossSectionText", {
                    defaultValue:
                      "Cáries e problemas gengivais começam muitas vezes entre os dentes. Se o fio for difícil, os escovilhões interdentais podem ser uma excelente alternativa — peça ao seu dentista o tamanho ideal.",
                  })}
                </p>

                <div className="rounded-2xl border bg-background p-6 shadow-sm">
                  <p className="font-semibold">
                    {t("blog.higiene.flossHowTitle", { defaultValue: "Como usar fio dentário (em 3 passos)" })}
                  </p>
                  <ol className="mt-3 space-y-2 text-muted-foreground list-decimal pl-5">
                    <li>
                      {t("blog.higiene.flossHow1", {
                        defaultValue:
                          "Deslize suavemente entre os dentes e forme um “C” à volta do dente.",
                      })}
                    </li>
                    <li>
                      {t("blog.higiene.flossHow2", {
                        defaultValue:
                          "Faça movimentos para cima e para baixo, limpando ambos os lados do dente.",
                      })}
                    </li>
                    <li>
                      {t("blog.higiene.flossHow3", {
                        defaultValue: "Use uma secção limpa do fio para cada espaço interdental.",
                      })}
                    </li>
                  </ol>
                </div>
              </div>

              <div id="diet" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.dietTitle", { defaultValue: "Alimentação e hábitos" })}
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-2xl border bg-background p-6 shadow-sm">
                    <p className="font-semibold mb-2">
                      {t("blog.higiene.diet.goodTitle", { defaultValue: "Bons hábitos" })}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {t("blog.higiene.diet.good1", { defaultValue: "Beba água ao longo do dia." })}</li>
                      <li>
                        •{" "}
                        {t("blog.higiene.diet.good2", {
                          defaultValue: "Prefira snacks com menos açúcar (frutos secos, queijo, iogurte).",
                        })}
                      </li>
                      <li>
                        •{" "}
                        {t("blog.higiene.diet.good3", {
                          defaultValue:
                            "Mastigue pastilha sem açúcar após as refeições (se for adequado) para estimular a saliva.",
                        })}
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border bg-background p-6 shadow-sm">
                    <p className="font-semibold mb-2">
                      {t("blog.higiene.diet.limitTitle", { defaultValue: "Reduza" })}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        •{" "}
                        {t("blog.higiene.diet.limit1", {
                          defaultValue: "Snacks e bebidas açucaradas frequentes.",
                        })}
                      </li>
                      <li>
                        •{" "}
                        {t("blog.higiene.diet.limit2", {
                          defaultValue:
                            "Beber refrigerantes/sumos aos poucos durante muito tempo (exposição ácida constante).",
                        })}
                      </li>
                      <li>
                        •{" "}
                        {t("blog.higiene.diet.limit3", {
                          defaultValue: "Tabaco (grande risco para doença gengival e manchas).",
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="warning" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.warningTitle", { defaultValue: "Sinais de alerta" })}
                </h2>

                <div className="rounded-2xl border bg-destructive/5 p-6">
                  <p className="font-semibold mb-2">
                    {t("blog.higiene.warningSubtitle", {
                      defaultValue: "Se notar algum destes sinais, considere marcar uma avaliação:",
                    })}
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    {[
                      t("blog.higiene.warning.1", { defaultValue: "Sangramento gengival ao escovar ou usar fio" }),
                      t("blog.higiene.warning.2", { defaultValue: "Mau hálito persistente" }),
                      t("blog.higiene.warning.3", { defaultValue: "Sensibilidade ou dor dentária" }),
                      t("blog.higiene.warning.4", { defaultValue: "Gengivas inchadas ou retração gengival" }),
                      t("blog.higiene.warning.5", { defaultValue: "Dor ao mastigar ou desconforto na mandíbula" }),
                    ].map((x) => (
                      <li key={x} className="flex gap-2">
                        <AlertTriangle className="w-4 h-4 mt-1 text-destructive" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div id="faq" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.faqTitle", { defaultValue: "Mitos e perguntas frequentes" })}
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      q: t("blog.higiene.faq.q1", {
                        defaultValue: "Se as gengivas sangram, devo parar de usar fio dentário?",
                      }),
                      a: t("blog.higiene.faq.a1", {
                        defaultValue:
                          "Geralmente, não. O sangramento é muitas vezes sinal de inflamação. Use fio com suavidade e consistência; se persistir por 1–2 semanas, marque uma avaliação.",
                      }),
                    },
                    {
                      q: t("blog.higiene.faq.q2", {
                        defaultValue: "O elixir/colutório é necessário?",
                      }),
                      a: t("blog.higiene.faq.a2", {
                        defaultValue:
                          "Nem sempre. Pode ajudar em situações específicas (gengivite, alto risco de cárie). A base é escovar + limpeza interdental.",
                      }),
                    },
                    {
                      q: t("blog.higiene.faq.q3", {
                        defaultValue: "Escova elétrica: vale a pena?",
                      }),
                      a: t("blog.higiene.faq.a3", {
                        defaultValue:
                          "Para muitas pessoas, sim — melhora a consistência e a remoção de placa. A técnica continua a ser importante.",
                      }),
                    },
                  ].map((item) => (
                    <div key={item.q} className="rounded-2xl border bg-background p-6 shadow-sm">
                      <p className="font-semibold">{item.q}</p>
                      <p className="mt-2 text-muted-foreground">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border bg-primary text-primary-foreground p-8">
                <p className="text-xl md:text-2xl font-bold">
                  {t("blog.higiene.finalCta.title", {
                    defaultValue: "Quer um plano de higiene oral personalizado?",
                  })}
                </p>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl">
                  {t("blog.higiene.finalCta.text", {
                    defaultValue:
                      "Podemos avaliar a saúde das gengivas, o risco de cárie e recomendar produtos e técnicas ajustadas a si.",
                  })}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button variant="secondary" onClick={handleCTA}>
                    {t("blog.higiene.ctaButton", { defaultValue: "Marcar Consulta" })}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={share}
                    className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    {t("blog.share", { defaultValue: "Partilhar" })}
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <span className="text-muted-foreground">{t("blog.share", { defaultValue: "Partilhar" })}</span>
                <Button
                  variant="outline"
                  size="icon"
                  type="button"
                  onClick={share}
                  aria-label={t("blog.share", { defaultValue: "Partilhar" })}
                >
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

export default HigieneOral;
