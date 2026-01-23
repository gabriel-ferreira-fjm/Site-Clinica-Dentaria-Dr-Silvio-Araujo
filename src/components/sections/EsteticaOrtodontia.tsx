import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  CheckCircle,
  Star,
  Sun,
  SmilePlus,
  Phone,
  Calendar,
  Award,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const EsteticaOrtodontia = () => {
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
      icon: Sun,
      title: t("services.estetica.services.branqueamento.title", {
        defaultValue: "Branqueamento Dentário",
      }),
      description: t("services.estetica.services.branqueamento.description", {
        defaultValue:
          "Tratamento profissional para clarear os dentes e devolver o brilho ao seu sorriso de forma segura e eficaz.",
      }),
      features: [
        t("services.estetica.services.branqueamento.features.1", {
          defaultValue: "Até 8 tons mais claro",
        }),
        t("services.estetica.services.branqueamento.features.2", {
          defaultValue: "Técnica LED avançada",
        }),
        t("services.estetica.services.branqueamento.features.3", {
          defaultValue: "Sem danos ao esmalte",
        }),
      ],
      duration: t("services.estetica.services.branqueamento.duration", {
        defaultValue: "1-2 horas",
      }),
      tag: t("services.estetica.services.branqueamento.tag", {
        defaultValue: "Mais Popular",
      }),
    },
    {
      icon: Award,
      title: t("services.estetica.services.metalicos.title", {
        defaultValue: "Aparelhos Metálicos",
      }),
      description: t("services.estetica.services.metalicos.description", {
        defaultValue:
          "Ortodontia tradicional com brackets metálicos de alta qualidade para correção eficiente do alinhamento dentário.",
      }),
      features: [
        t("services.estetica.services.metalicos.features.1", {
          defaultValue: "Correção completa",
        }),
        t("services.estetica.services.metalicos.features.2", {
          defaultValue: "Resistentes e duráveis",
        }),
        t("services.estetica.services.metalicos.features.3", {
          defaultValue: "Acompanhamento mensal",
        }),
        t("services.estetica.services.metalicos.features.4", {
          defaultValue: "Resultados definitivos",
        }),
      ],
      duration: t("services.estetica.services.metalicos.duration", {
        defaultValue: "12-24 meses",
      }),
      tag: t("services.estetica.services.metalicos.tag", {
        defaultValue: "Eficácia Comprovada",
      }),
    },
    {
      icon: SmilePlus,
      title: t("services.estetica.services.invisivel.title", {
        defaultValue: "Ortodontia Invisível",
      }),
      description: t("services.estetica.services.invisivel.description", {
        defaultValue:
          "Alinhadores transparentes removíveis que corrigem o seu sorriso de forma discreta e confortável.",
      }),
      features: [
        t("services.estetica.services.invisivel.features.1", {
          defaultValue: "Praticamente invisíveis",
        }),
        t("services.estetica.services.invisivel.features.2", {
          defaultValue: "Removíveis para comer",
        }),
        t("services.estetica.services.invisivel.features.3", {
          defaultValue: "Sem restrições alimentares",
        }),
        t("services.estetica.services.invisivel.features.4", {
          defaultValue: "Menos consultas",
        }),
      ],
      duration: t("services.estetica.services.invisivel.duration", {
        defaultValue: "6-18 meses",
      }),
      tag: t("services.estetica.services.invisivel.tag", {
        defaultValue: "Discreto",
      }),
    },
  ];

  const beforeAfter = [
    {
      before: t("services.estetica.beforeAfter.1.before", {
        defaultValue: "Dentes amarelados",
      }),
      after: t("services.estetica.beforeAfter.1.after", {
        defaultValue: "Sorriso brilhante e natural",
      }),
    },
    {
      before: t("services.estetica.beforeAfter.2.before", {
        defaultValue: "Dentes desalinhados",
      }),
      after: t("services.estetica.beforeAfter.2.after", {
        defaultValue: "Mordida perfeita",
      }),
    },
    {
      before: t("services.estetica.beforeAfter.3.before", {
        defaultValue: "Espaços entre dentes",
      }),
      after: t("services.estetica.beforeAfter.3.after", {
        defaultValue: "Sorriso harmonioso",
      }),
    },
    {
      before: t("services.estetica.beforeAfter.4.before", {
        defaultValue: "Dentes apinhados",
      }),
      after: t("services.estetica.beforeAfter.4.after", {
        defaultValue: "Alinhamento impecável",
      }),
    },
  ];

  const emergencySymptoms = [
    t("services.especializados.emergencySymptoms.1", {
      defaultValue: "Dor de dentes intensa",
    }),
    t("services.especializados.emergencySymptoms.2", {
      defaultValue: "Inchaço facial",
    }),
    t("services.especializados.emergencySymptoms.3", {
      defaultValue: "Sangramento que não para",
    }),
    t("services.especializados.emergencySymptoms.4", {
      defaultValue: "Dente partido ou avulsionado",
    }),
    t("services.especializados.emergencySymptoms.5", {
      defaultValue: "Abcesso dentário",
    }),
  ];

  return (
    <>
      <Helmet>
        <title>
          {t("services.estetica.meta.title", {
            defaultValue: "Estética e Ortodontia | Dr. Sílvio Araújo - Clínica Dentária",
          })}
        </title>
        <meta
          name="description"
          content={t("services.estetica.meta.description", {
            defaultValue:
              "Branqueamento dentário, aparelhos metálicos e ortodontia invisível. Transforme o seu sorriso na Clínica Dr. Sílvio Araújo.",
          })}
        />
      </Helmet>

      <Header />

      {/* ✅ sem pt-24 (evita o "vazio" sob o header fixo) */}
      <main className="pb-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-primary/10 py-20 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />

          <div className="container relative">
            {/* ✅ BACK igual ao padrão das outras páginas */}
            <button
              type="button"
              onClick={() => scrollToSection("#servicos")}
              className="inline-flex items-center text-primary hover:underline mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t("services.estetica.hero.backLink", {
                defaultValue: "Voltar aos Serviços",
              })}
            </button>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  {t("services.estetica.hero.badge", {
                    defaultValue: "Transforme o Seu Sorriso",
                  })}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  {t("services.estetica.hero.title.part1", {
                    defaultValue: "Estética e",
                  })}{" "}
                  <span className="text-primary">
                    {t("services.estetica.hero.title.part2", {
                      defaultValue: "Ortodontia",
                    })}
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t("services.estetica.hero.subtitle", {
                    defaultValue:
                      "Dentes mais brancos e perfeitamente alinhados. Descubra as soluções estéticas que vão transformar a sua confiança.",
                  })}
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 border-2 border-white flex items-center justify-center"
                      >
                        <Star className="w-4 h-4 text-white fill-white" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("services.estetica.hero.rating", {
                        defaultValue: "4.9/5 Avaliação",
                      })}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("services.estetica.hero.ratingSubtitle", {
                        defaultValue: "+200 sorrisos transformados",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* ✅ botão agora vai pro MESMO lugar que PrevencaoHigiene */}
                  <Button variant="cta" size="lg" onClick={() => scrollToSection("#marcacao")}>
                    <Calendar className="w-5 h-5 mr-2" />
                    {t("services.estetica.hero.ctaButton", {
                      defaultValue: "Agendar Avaliação",
                    })}
                  </Button>

                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+351924123784">
                      <Phone className="w-5 h-5 mr-2" />
                      {t("services.estetica.hero.callButton", {
                        defaultValue: "Ligar Agora",
                      })}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                {/* ✅ Quadrado gigante com a imagem do /public */}
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="/estetica3.png"
                    alt={t("services.estetica.hero.imageAlt", {
                      defaultValue: "Consulta odontológica - estética e ortodontia",
                    })}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* ✅ removido "Resultado em 1 Sessão" */}
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("services.estetica.servicesSection.title", {
                  defaultValue: "Tratamentos Estéticos Disponíveis",
                })}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("services.estetica.servicesSection.subtitle", {
                  defaultValue: "Escolha o tratamento ideal para alcançar o sorriso dos seus sonhos.",
                })}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-background rounded-3xl p-8 border-2 border-primary/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {service.tag && (
                    <div className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {service.tag}
                    </div>
                  )}

                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>

                  <div className="bg-blue-50 rounded-xl p-3 mb-6 border border-primary/10">
                    <p className="text-sm text-primary font-medium">
                      ⏱ {t("services.estetica.servicesSection.duration", { defaultValue: "Duração" })}:{" "}
                      {service.duration}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* ✅ Removidos os 3 botões "Saber Mais" (apenas os botões) */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-700">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("services.estetica.beforeAfterSection.title", {
                  defaultValue: "Transformações Reais",
                })}
              </h2>
              <p className="text-white/80 text-lg">
                {t("services.estetica.beforeAfterSection.subtitle", {
                  defaultValue: "Veja as mudanças que os nossos tratamentos podem proporcionar.",
                })}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beforeAfter.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-sm text-white/70 mb-1">
                        {t("services.estetica.beforeAfterSection.before", {
                          defaultValue: "Antes",
                        })}
                      </p>
                      <p className="text-white font-medium">{item.before}</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white">↓</span>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <p className="text-sm text-white/70 mb-1">
                        {t("services.estetica.beforeAfterSection.after", {
                          defaultValue: "Depois",
                        })}
                      </p>
                      <p className="text-white font-medium">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Section */}
        <section id="urgencias" className="py-20 bg-gradient-to-br from-red-600 to-red-700">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <AlertTriangle className="w-16 h-16 mb-6 text-red-200" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t("services.especializados.emergency.title", {
                    defaultValue: "Urgências Dentárias",
                  })}
                </h2>
                <p className="text-red-100 text-lg mb-8">
                  {t("services.especializados.emergency.subtitle", {
                    defaultValue:
                      "Situações de emergência requerem atenção imediata. Se apresentar algum destes sintomas, contacte-nos de imediato.",
                  })}
                </p>

                <ul className="space-y-3 mb-8">
                  {emergencySymptoms.map((symptom) => (
                    <li key={symptom} className="flex items-center gap-3 text-white">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      {symptom}
                    </li>
                  ))}
                </ul>

                <Button asChild variant="secondary" size="lg">
                  <a href="tel:+351924123784" className="gap-2">
                    <Phone className="w-5 h-5" />
                    {t("services.especializados.emergency.callNow", {
                      defaultValue: "Ligar Agora: +351 924 123 784",
                    })}
                  </a>
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">
                  {t("services.especializados.emergency.whatToDo.title", {
                    defaultValue: "O Que Fazer em Caso de Urgência",
                  })}
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {t("services.especializados.emergency.whatToDo.1.title", {
                          defaultValue: "Mantenha a calma",
                        })}
                      </p>
                      <p className="text-red-100 text-sm">
                        {t("services.especializados.emergency.whatToDo.1.subtitle", {
                          defaultValue: "A ansiedade pode piorar a dor",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {t("services.especializados.emergency.whatToDo.2.title", {
                          defaultValue: "Contacte-nos imediatamente",
                        })}
                      </p>
                      <p className="text-red-100 text-sm">
                        {t("services.especializados.emergency.whatToDo.2.subtitle", {
                          defaultValue: "Temos slots de urgência reservados",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {t("services.especializados.emergency.whatToDo.3.title", {
                          defaultValue: "Siga as instruções",
                        })}
                      </p>
                      <p className="text-red-100 text-sm">
                        {t("services.especializados.emergency.whatToDo.3.subtitle", {
                          defaultValue: "Daremos orientações até chegar",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="bg-gradient-to-br from-blue-50 to-primary/10 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("services.estetica.finalCta.title", {
                  defaultValue: "Pronto para transformar o seu sorriso?",
                })}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("services.estetica.finalCta.subtitle", {
                  defaultValue: "Agende uma avaliação gratuita e descubra qual o tratamento ideal para si.",
                })}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {/* ✅ CTA final também vai pro mesmo lugar */}
                <Button variant="cta" size="lg" onClick={() => scrollToSection("#marcacao")}>
                  {t("services.estetica.finalCta.ctaButton", {
                    defaultValue: "Avaliação Gratuita",
                  })}
                </Button>

                <Button asChild variant="outline" size="lg">
                  <a href="tel:+351924123784">
                    {t("services.estetica.finalCta.callButton", {
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

export default EsteticaOrtodontia;
