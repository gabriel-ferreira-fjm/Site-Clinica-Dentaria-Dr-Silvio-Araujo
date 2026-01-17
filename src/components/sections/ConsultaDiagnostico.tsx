import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Stethoscope,
  ScanLine,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Phone,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ConsultaDiagnostico = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToSection = (selector: string) => {
    // navega para a Home (onde estão as seções)
    navigate("/");

    // tenta rolar algumas vezes (mais robusto que só 100ms)
    let attempts = 0;
    const maxAttempts = 20; // ~2s total
    const interval = setInterval(() => {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        clearInterval(interval);
      } else {
        attempts += 1;
        if (attempts >= maxAttempts) clearInterval(interval);
      }
    }, 100);
  };

  const services = [
    {
      icon: Stethoscope,
      title: t("consultadiagnostico.consultation.title", {
        defaultValue: "Consulta Dentária",
      }),
      description: t("consultadiagnostico.consultation.description", {
        defaultValue:
          "Avaliação completa da sua saúde oral com diagnóstico preciso e plano de tratamento personalizado.",
      }),
      benefits: [
        t("consultadiagnostico.consultation.benefits.1", {
          defaultValue: "Exame clínico completo",
        }),
        t("consultadiagnostico.consultation.benefits.2", {
          defaultValue: "Diagnóstico detalhado",
        }),
        t("consultadiagnostico.consultation.benefits.3", {
          defaultValue: "Plano de tratamento personalizado",
        }),
        t("consultadiagnostico.consultation.benefits.4", {
          defaultValue: "Esclarecimento de dúvidas",
        }),
      ],
    },
    {
      icon: ScanLine,
      title: t("consultadiagnostico.radiology.title", {
        defaultValue: "Radiografias Digitais",
      }),
      description: t("consultadiagnostico.radiology.description", {
        defaultValue:
          "Tecnologia de ponta para diagnóstico preciso com menor exposição à radiação.",
      }),
      benefits: [
        t("consultadiagnostico.radiology.benefits.1", {
          defaultValue: "Imagens de alta qualidade",
        }),
        t("consultadiagnostico.radiology.benefits.2", {
          defaultValue: "Menor radiação",
        }),
        t("consultadiagnostico.radiology.benefits.3", {
          defaultValue: "Resultados imediatos",
        }),
        t("consultadiagnostico.radiology.benefits.4", {
          defaultValue: "Diagnóstico mais preciso",
        }),
      ],
    },
    {
      icon: AlertTriangle,
      title: t("consultadiagnostico.emergency.title", {
        defaultValue: "Urgências Dentárias",
      }),
      description: t("consultadiagnostico.emergency.description", {
        defaultValue:
          "Atendimento rápido para situações de emergência dentária, aliviando dor e resolvendo problemas urgentes.",
      }),
      benefits: [
        t("consultadiagnostico.emergency.benefits.1", {
          defaultValue: "Atendimento prioritário",
        }),
        t("consultadiagnostico.emergency.benefits.2", {
          defaultValue: "Alívio imediato da dor",
        }),
        t("consultadiagnostico.emergency.benefits.3", {
          defaultValue: "Disponibilidade alargada",
        }),
        t("consultadiagnostico.emergency.benefits.4", {
          defaultValue: "Resolução rápida",
        }),
      ],
    },
  ];

  const diagnosisTips = [
    {
      title: t("consultadiagnostico.tips.regular.title", {
        defaultValue: "Check-ups Regulares",
      }),
      description: t("consultadiagnostico.tips.regular.description", {
        defaultValue:
          "Visite o dentista a cada 6 meses para prevenção e diagnóstico precoce",
      }),
      icon: "📅",
    },
    {
      title: t("consultadiagnostico.tips.symptoms.title", {
        defaultValue: "Atenção aos Sintomas",
      }),
      description: t("consultadiagnostico.tips.symptoms.description", {
        defaultValue:
          "Não ignore dor, sangramento ou sensibilidade nos dentes",
      }),
      icon: "⚠️",
    },
    {
      title: t("consultadiagnostico.tips.history.title", {
        defaultValue: "Histórico Médico",
      }),
      description: t("consultadiagnostico.tips.history.description", {
        defaultValue: "Informe o dentista sobre condições de saúde e medicamentos",
      }),
      icon: "📋",
    },
    {
      title: t("consultadiagnostico.tips.questions.title", {
        defaultValue: "Tire Dúvidas",
      }),
      description: t("consultadiagnostico.tips.questions.description", {
        defaultValue:
          "Não hesite em perguntar sobre seu diagnóstico e tratamento",
      }),
      icon: "💬",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t("consultadiagnostico.meta.title", {
            defaultValue:
              "Consulta e Diagnóstico | Dr. Sílvio Araújo - Clínica Dentária",
          })}
        </title>
        <meta
          name="description"
          content={t("consultadiagnostico.meta.description", {
            defaultValue:
              "Consultas dentárias completas, radiografias digitais e atendimento de urgências dentárias com diagnóstico preciso.",
          })}
        />
      </Helmet>

      <Header />

      <main className="pb-16">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-primary/10 py-6 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

          <div className="container relative">
            {/* BACK */}
            <button
              type="button"
              onClick={() => scrollToSection("#servicos")}
              className="inline-flex items-center text-primary hover:underline mb-3 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t("consultadiagnostico.hero.backLink", {
                defaultValue: "Voltar à página de Serviços",
              })}
            </button>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-3">
                  <Stethoscope className="w-4 h-4" />
                  {t("consultadiagnostico.hero.badge", {
                    defaultValue: "Diagnóstico Profissional",
                  })}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                  {t("consultadiagnostico.hero.title.part1", {
                    defaultValue: "Consulta",
                  })}{" "}
                  &{" "}
                  <span className="text-primary">
                    {t("consultadiagnostico.hero.title.part2", {
                      defaultValue: "Diagnóstico",
                    })}
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-5 leading-relaxed">
                  {t("consultadiagnostico.hero.subtitle", {
                    defaultValue:
                      "Diagnóstico preciso e plano de tratamento personalizado para cuidar da sua saúde oral.",
                  })}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={() => scrollToSection("#marcacao")}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {t("consultadiagnostico.hero.ctaButton", {
                      defaultValue: "Marcar Consulta",
                    })}
                  </Button>

                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+351924123784">
                      <Phone className="w-5 h-5 mr-2" />
                      {t("consultadiagnostico.hero.callButton", {
                        defaultValue: "Ligar Agora",
                      })}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/Consulta.png"
                    alt={t("consultadiagnostico.hero.imageAlt", {
                      defaultValue:
                        "Médico dentista realizando consulta de diagnóstico na Clínica Dentária Dr. Sílvio Araújo",
                    })}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                    <span className="text-primary font-semibold text-sm">
                      ✓{" "}
                      {t("consultadiagnostico.hero.badge2", {
                        defaultValue: "Diagnóstico Preciso",
                      })}
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl shadow-xl border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">
                        {t("consultadiagnostico.hero.duration", {
                          defaultValue: "45–60 min",
                        })}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t("consultadiagnostico.hero.durationLabel", {
                          defaultValue: "Tempo médio",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("consultadiagnostico.servicesSection.title", {
                  defaultValue: "Serviços de Consulta e Diagnóstico",
                })}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("consultadiagnostico.servicesSection.subtitle", {
                  defaultValue:
                    "Avaliação completa para identificar e tratar problemas dentários.",
                })}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-gradient-to-br from-background to-blue-50/40 rounded-3xl p-8 border border-primary/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10" />

                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIAGNOSIS TIPS */}
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {diagnosisTips.map((tip) => (
                <div
                  key={tip.title}
                  className="bg-background rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="text-5xl mb-4">{tip.icon}</div>
                  <h3 className="font-bold mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container">
            <div className="bg-gradient-to-br from-blue-50 to-primary/10 rounded-3xl p-12 text-center border border-primary/10">
              <Stethoscope className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("consultadiagnostico.finalCta.title", {
                  defaultValue: "Cuide da Sua Saúde Oral",
                })}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("consultadiagnostico.finalCta.subtitle", {
                  defaultValue:
                    "Agende a sua consulta e obtenha um diagnóstico completo.",
                })}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => scrollToSection("#marcacao")}
                >
                  {t("consultadiagnostico.finalCta.ctaButton", {
                    defaultValue: "Marcar Consulta",
                  })}
                </Button>

                <Button asChild variant="outline" size="lg">
                  <a href="tel:+351924123784">
                    {t("consultadiagnostico.finalCta.callButton", {
                      defaultValue: "Ligar: +351 924 123 784",
                    })}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ConsultaDiagnostico;