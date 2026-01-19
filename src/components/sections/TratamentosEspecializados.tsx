import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Activity,
  CheckCircle,
  Zap,
  Scissors,
  Leaf,
  Phone,
  Calendar,
  AlertTriangle,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TratamentosEspecializados = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToSection = (selector: string) => {
    navigate("/");

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
      icon: Zap,
      title: t("services.especializados.services.endodontia.title", {
        defaultValue: "Endodontia",
      }),
      description: t("services.especializados.services.endodontia.description", {
        defaultValue:
          "Tratamento de canal radicular para salvar dentes com polpa dentária infetada ou danificada, eliminando dor e preservando o dente natural.",
      }),
      symptoms: [
        t("services.especializados.services.endodontia.symptoms.1", {
          defaultValue: "Dor intensa e persistente",
        }),
        t("services.especializados.services.endodontia.symptoms.2", {
          defaultValue: "Sensibilidade ao quente/frio",
        }),
        t("services.especializados.services.endodontia.symptoms.3", {
          defaultValue: "Inchaço na gengiva",
        }),
        t("services.especializados.services.endodontia.symptoms.4", {
          defaultValue: "Escurecimento do dente",
        }),
      ],
      features: [
        t("services.especializados.services.endodontia.features.1", {
          defaultValue: "Técnicas microscópicas",
        }),
        t("services.especializados.services.endodontia.features.2", {
          defaultValue: "Anestesia avançada",
        }),
        t("services.especializados.services.endodontia.features.3", {
          defaultValue: "Alta taxa de sucesso",
        }),
        t("services.especializados.services.endodontia.features.4", {
          defaultValue: "Preservação do dente",
        }),
      ],
    },
    {
      icon: Scissors,
      title: t("services.especializados.services.cirurgia.title", {
        defaultValue: "Cirurgia Oral",
      }),
      description: t("services.especializados.services.cirurgia.description", {
        defaultValue:
          "Procedimentos cirúrgicos especializados incluindo extrações complexas, remoção de dentes do siso e cirurgias corretivas.",
      }),
      symptoms: [
        t("services.especializados.services.cirurgia.symptoms.1", {
          defaultValue: "Dentes impactados",
        }),
        t("services.especializados.services.cirurgia.symptoms.2", {
          defaultValue: "Dentes do siso problemáticos",
        }),
        t("services.especializados.services.cirurgia.symptoms.3", {
          defaultValue: "Quistos ou lesões",
        }),
        t("services.especializados.services.cirurgia.symptoms.4", {
          defaultValue: "Preparação para implantes",
        }),
      ],
      features: [
        t("services.especializados.services.cirurgia.features.1", {
          defaultValue: "Técnicas minimamente invasivas",
        }),
        t("services.especializados.services.cirurgia.features.2", {
          defaultValue: "Sedação disponível",
        }),
        t("services.especializados.services.cirurgia.features.3", {
          defaultValue: "Recuperação rápida",
        }),
        t("services.especializados.services.cirurgia.features.4", {
          defaultValue: "Equipa experiente",
        }),
      ],
    },
    {
      icon: Leaf,
      title: t("services.especializados.services.periodontologia.title", {
        defaultValue: "Periodontologia",
      }),
      description: t(
        "services.especializados.services.periodontologia.description",
        {
          defaultValue:
            "Tratamento especializado de doenças das gengivas, desde gengivite leve até periodontite avançada.",
        }
      ),
      symptoms: [
        t("services.especializados.services.periodontologia.symptoms.1", {
          defaultValue: "Gengivas vermelhas ou inchadas",
        }),
        t("services.especializados.services.periodontologia.symptoms.2", {
          defaultValue: "Sangramento ao escovar",
        }),
        t("services.especializados.services.periodontologia.symptoms.3", {
          defaultValue: "Mau hálito persistente",
        }),
        t("services.especializados.services.periodontologia.symptoms.4", {
          defaultValue: "Retração gengival",
        }),
      ],
      features: [
        t("services.especializados.services.periodontologia.features.1", {
          defaultValue: "Raspagem e alisamento radicular",
        }),
        t("services.especializados.services.periodontologia.features.2", {
          defaultValue: "Cirurgia periodontal",
        }),
        t("services.especializados.services.periodontologia.features.3", {
          defaultValue: "Regeneração óssea",
        }),
        t("services.especializados.services.periodontologia.features.4", {
          defaultValue: "Manutenção preventiva",
        }),
      ],
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
          {t("services.especializados.meta.title", {
            defaultValue:
              "Tratamentos Especializados | Dr. Sílvio Araújo - Clínica Dentária",
          })}
        </title>
        <meta
          name="description"
          content={t("services.especializados.meta.description", {
            defaultValue:
              "Endodontia, cirurgia oral e periodontologia. Tratamentos avançados e especializados na Clínica Dr. Sílvio Araújo.",
          })}
        />
      </Helmet>

      <Header />

      {/* ✅ padrão igual às outras páginas */}
      <main className="pb-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-primary/10 py-12 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
          </div>

          <div className="container relative">
            {/* ✅ menos espaço, igual às outras */}
            <button
              type="button"
              onClick={() => scrollToSection("#servicos")}
              className="inline-flex items-center text-primary hover:underline mb-4 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t("services.especializados.hero.backLink", {
                defaultValue: "Voltar aos Serviços",
              })}
            </button>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-3">
                  <Activity className="w-4 h-4" />
                  {t("services.especializados.hero.badge", {
                    defaultValue: "Cuidados Avançados",
                  })}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 leading-tight">
                  {t("services.especializados.hero.title.part1", {
                    defaultValue: "Tratamentos",
                  })}{" "}
                  <span className="text-primary">
                    {t("services.especializados.hero.title.part2", {
                      defaultValue: "Especializados",
                    })}
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-5 leading-relaxed">
                  {t("services.especializados.hero.subtitle", {
                    defaultValue:
                      "Quando o problema é mais complexo, a nossa equipa especializada está pronta para oferecer soluções avançadas e eficazes.",
                  })}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={() => scrollToSection("#marcacao")}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {t("services.especializados.hero.ctaButton", {
                      defaultValue: "Marcar Consulta",
                    })}
                  </Button>

                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+351924123784">
                      <Phone className="w-5 h-5 mr-2" />
                      {t("services.especializados.hero.urgencyButton", {
                        defaultValue: "Urgências",
                      })}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/tratamento.png"
                    alt={t("services.especializados.hero.imageAlt", {
                      defaultValue:
                        "Tratamentos dentários especializados na Clínica Dr. Sílvio Araújo.",
                    })}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl shadow-xl border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {t("services.especializados.hero.badge2.title", {
                          defaultValue: "Especialistas",
                        })}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t("services.especializados.hero.badge2.subtitle", {
                          defaultValue: "Equipa qualificada",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("services.especializados.servicesSection.title", {
                  defaultValue: "Especialidades Disponíveis",
                })}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("services.especializados.servicesSection.subtitle", {
                  defaultValue:
                    "Tratamentos avançados para resolver os problemas mais complexos.",
                })}
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group bg-gradient-to-r from-background to-blue-50/30 rounded-3xl p-8 lg:p-12 border border-primary/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-3">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-lg mb-6">
                            {service.description}
                          </p>

                          <div className="grid sm:grid-cols-2 gap-3">
                            {service.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-center gap-3 text-sm"
                              >
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-primary" />
                        {t("services.especializados.servicesSection.alerts", {
                          defaultValue: "Sinais de Alerta",
                        })}
                      </h4>
                      <ul className="space-y-2">
                        {service.symptoms.map((symptom) => (
                          <li
                            key={symptom}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Section - ⚠️ ADICIONADO id="urgencias" AQUI */}
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

        {/* CTA Section (igual ao original, mas azul padrão e redirecionamento correto) */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="bg-gradient-to-br from-blue-50 to-primary/10 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
              <Activity className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("services.especializados.finalCta.title", {
                  defaultValue: "Precisa de Tratamento Especializado?",
                })}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("services.especializados.finalCta.subtitle", {
                  defaultValue:
                    "A nossa equipa de especialistas está pronta para o ajudar. Agende uma consulta de avaliação.",
                })}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => scrollToSection("#marcacao")}
                >
                  {t("services.especializados.finalCta.ctaButton", {
                    defaultValue: "Marcar Consulta",
                  })}
                </Button>

                <Button asChild variant="outline" size="lg">
                  <a href="tel:+351924123784">
                    {t("services.especializados.finalCta.callButton", {
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

export default TratamentosEspecializados;