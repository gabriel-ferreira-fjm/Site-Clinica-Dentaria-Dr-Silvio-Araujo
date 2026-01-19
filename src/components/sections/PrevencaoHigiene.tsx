import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  CheckCircle,
  Sparkles,
  Droplets,
  Heart,
  Clock,
  Phone,
  Calendar,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PrevencaoHigiene = () => {
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
      icon: Sparkles,
      title: t("services.prevencao.services.destartarizacao.title", {
        defaultValue: "Destartarização",
      }),
      description: t("services.prevencao.services.destartarizacao.description", {
        defaultValue:
          "Remoção profissional de tártaro e placa bacteriana acumulada, essencial para prevenir doenças gengivais.",
      }),
      benefits: [
        t("services.prevencao.services.destartarizacao.benefits.1", {
          defaultValue: "Remove tártaro endurecido",
        }),
        t("services.prevencao.services.destartarizacao.benefits.2", {
          defaultValue: "Previne gengivite",
        }),
        t("services.prevencao.services.destartarizacao.benefits.3", {
          defaultValue: "Melhora o hálito",
        }),
        t("services.prevencao.services.destartarizacao.benefits.4", {
          defaultValue: "Deixa os dentes mais brilhantes",
        }),
      ],
    },
    {
      icon: Droplets,
      title: t("services.prevencao.services.polimento.title", {
        defaultValue: "Polimento Dentário",
      }),
      description: t("services.prevencao.services.polimento.description", {
        defaultValue:
          "Tratamento que deixa a superfície dos dentes lisa e brilhante, dificultando a aderência de placa bacteriana.",
      }),
      benefits: [
        t("services.prevencao.services.polimento.benefits.1", {
          defaultValue: "Superfície mais lisa",
        }),
        t("services.prevencao.services.polimento.benefits.2", {
          defaultValue: "Dentes mais brilhantes",
        }),
        t("services.prevencao.services.polimento.benefits.3", {
          defaultValue: "Reduz manchas",
        }),
        t("services.prevencao.services.polimento.benefits.4", {
          defaultValue: "Sensação de limpeza profunda",
        }),
      ],
    },
    {
      icon: Heart,
      title: t("services.prevencao.services.preventiva.title", {
        defaultValue: "Odontologia Preventiva",
      }),
      description: t("services.prevencao.services.preventiva.description", {
        defaultValue:
          "Conjunto de práticas e tratamentos focados em prevenir problemas dentários antes que ocorram.",
      }),
      benefits: [
        t("services.prevencao.services.preventiva.benefits.1", {
          defaultValue: "Aplicação de flúor",
        }),
        t("services.prevencao.services.preventiva.benefits.2", {
          defaultValue: "Selantes dentários",
        }),
        t("services.prevencao.services.preventiva.benefits.3", {
          defaultValue: "Educação em higiene oral",
        }),
        t("services.prevencao.services.preventiva.benefits.4", {
          defaultValue: "Check-ups regulares",
        }),
      ],
    },
  ];

  const preventionTips = [
    {
      title: t("services.prevencao.tips.escovagem.title", {
        defaultValue: "Escovagem Regular",
      }),
      description: t("services.prevencao.tips.escovagem.description", {
        defaultValue:
          "Escove os dentes pelo menos 2 vezes ao dia, durante 2 minutos",
      }),
      icon: "🪥",
    },
    {
      title: t("services.prevencao.tips.fio.title", {
        defaultValue: "Fio Dental Diário",
      }),
      description: t("services.prevencao.tips.fio.description", {
        defaultValue:
          "Use fio dental uma vez ao dia para limpar entre os dentes",
      }),
      icon: "🧵",
    },
    {
      title: t("services.prevencao.tips.elixir.title", {
        defaultValue: "Elixir Bucal",
      }),
      description: t("services.prevencao.tips.elixir.description", {
        defaultValue: "Complete a higiene com um elixir antibacteriano",
      }),
      icon: "💧",
    },
    {
      title: t("services.prevencao.tips.consultas.title", {
        defaultValue: "Consultas Regulares",
      }),
      description: t("services.prevencao.tips.consultas.description", {
        defaultValue:
          "Visite o dentista a cada 6 meses para limpeza profissional",
      }),
      icon: "📅",
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
          {t("services.prevencao.meta.title", {
            defaultValue:
              "Prevenção e Higiene Oral | Dr. Sílvio Araújo - Clínica Dentária",
          })}
        </title>
        <meta
          name="description"
          content={t("services.prevencao.meta.description", {
            defaultValue:
              "Serviços de prevenção e higiene oral incluindo destartarização, polimento dentário e odontologia preventiva.",
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
            {/* ✅ BACK (corrigido: navega para "/" e rola até #servicos) */}
            <button
              type="button"
              onClick={() => scrollToSection("#servicos")}
              className="inline-flex items-center text-primary hover:underline mb-3 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t("services.prevencao.hero.backLink", {
                defaultValue: "Voltar à página de Serviços",
              })}
            </button>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-3">
                  <Shield className="w-4 h-4" />
                  {t("services.prevencao.hero.badge", {
                    defaultValue: "Cuidados Preventivos",
                  })}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                  {t("services.prevencao.hero.title.part1", {
                    defaultValue: "Prevenção",
                  })}{" "}
                  &{" "}
                  <span className="text-primary">
                    {t("services.prevencao.hero.title.part2", {
                      defaultValue: "Higiene",
                    })}
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-5 leading-relaxed">
                  {t("services.prevencao.hero.subtitle", {
                    defaultValue:
                      "A melhor forma de tratamento é a prevenção. Mantenha a sua saúde oral em dia com cuidados especializados.",
                  })}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={() => scrollToSection("#marcacao")}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {t("services.prevencao.hero.ctaButton", {
                      defaultValue: "Agendar Limpeza",
                    })}
                  </Button>

                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+351924123784">
                      <Phone className="w-5 h-5 mr-2" />
                      {t("services.prevencao.hero.callButton", {
                        defaultValue: "Ligar Agora",
                      })}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/limpeza.png"
                    alt={t("services.prevencao.hero.imageAlt", {
                      defaultValue:
                        "Higienista dental realizando limpeza profissional em paciente na Clínica Dentária Dr. Sílvio Araújo",
                    })}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                    <span className="text-primary font-semibold text-sm">
                      ✓{" "}
                      {t("services.prevencao.hero.badge2", {
                        defaultValue: "100% Indolor",
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
                        {t("services.prevencao.hero.duration", {
                          defaultValue: "30–45 min",
                        })}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t("services.prevencao.hero.durationLabel", {
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
                {t("services.prevencao.servicesSection.title", {
                  defaultValue: "Serviços de Higiene Profissional",
                })}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("services.prevencao.servicesSection.subtitle", {
                  defaultValue:
                    "Tratamentos essenciais para manter a sua saúde oral.",
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

        {/* PREVENTION TIPS */}
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {preventionTips.map((tip) => (
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

        {/* CTA */}
        <section className="py-20">
          <div className="container">
            <div className="bg-gradient-to-br from-blue-50 to-primary/10 rounded-3xl p-12 text-center border border-primary/10">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("services.prevencao.finalCta.title", {
                  defaultValue: "Previna Problemas Futuros",
                })}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("services.prevencao.finalCta.subtitle", {
                  defaultValue:
                    "A prevenção é o melhor investimento na sua saúde oral.",
                })}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => scrollToSection("#marcacao")}
                >
                  {t("services.prevencao.finalCta.ctaButton", {
                    defaultValue: "Agendar Limpeza",
                  })}
                </Button>

                <Button asChild variant="outline" size="lg">
                  <a href="tel:+351924123784">
                    {t("services.prevencao.finalCta.callButton", {
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

export default PrevencaoHigiene;