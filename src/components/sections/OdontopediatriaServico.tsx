import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Baby,
  CheckCircle,
  Heart,
  Star,
  Shield,
  Phone,
  Calendar,
  Smile,
  BookOpen,
  Sparkles,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const OdontopediatriaServico = () => {
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
      icon: Smile,
      title: t("services.odontopediatria.services.consulta.title", {
        defaultValue: "Consulta Pediátrica",
      }),
      description: t("services.odontopediatria.services.consulta.description", {
        defaultValue:
          "Primeira consulta especial para crianças, focada em criar uma experiência positiva e estabelecer confiança com o dentista.",
      }),
      features: [
        t("services.odontopediatria.services.consulta.features.1", {
          defaultValue: "Ambiente acolhedor",
        }),
        t("services.odontopediatria.services.consulta.features.2", {
          defaultValue: "Exame suave e divertido",
        }),
        t("services.odontopediatria.services.consulta.features.3", {
          defaultValue: "Orientação aos pais",
        }),
        t("services.odontopediatria.services.consulta.features.4", {
          defaultValue: "Sem traumas",
        }),
      ],
    },
    {
      icon: Shield,
      title: t("services.odontopediatria.services.selantes.title", {
        defaultValue: "Selantes Dentários",
      }),
      description: t("services.odontopediatria.services.selantes.description", {
        defaultValue:
          "Aplicação de selantes protetores nos sulcos dos dentes para prevenir cáries, especialmente nos molares definitivos.",
      }),
      features: [
        t("services.odontopediatria.services.selantes.features.1", {
          defaultValue: "Proteção duradoura",
        }),
        t("services.odontopediatria.services.selantes.features.2", {
          defaultValue: "Procedimento indolor",
        }),
        t("services.odontopediatria.services.selantes.features.3", {
          defaultValue: "Aplicação rápida",
        }),
        t("services.odontopediatria.services.selantes.features.4", {
          defaultValue: "Prevenção de cáries",
        }),
      ],
    },
    {
      icon: BookOpen,
      title: t("services.odontopediatria.services.educacao.title", {
        defaultValue: "Educação para Higiene Oral",
      }),
      description: t("services.odontopediatria.services.educacao.description", {
        defaultValue:
          "Programa educativo divertido para ensinar às crianças a importância da escovagem e cuidados com os dentes.",
      }),
      features: [
        t("services.odontopediatria.services.educacao.features.1", {
          defaultValue: "Técnicas de escovagem",
        }),
        t("services.odontopediatria.services.educacao.features.2", {
          defaultValue: "Alimentação saudável",
        }),
        t("services.odontopediatria.services.educacao.features.3", {
          defaultValue: "Material educativo",
        }),
        t("services.odontopediatria.services.educacao.features.4", {
          defaultValue: "Envolvimento dos pais",
        }),
      ],
    },
  ];

  const ageGuide = [
    {
      age: t("services.odontopediatria.ageGuide.infant.age", {
        defaultValue: "0-2 anos",
      }),
      title: t("services.odontopediatria.ageGuide.infant.title", {
        defaultValue: "Primeira Infância",
      }),
      tips: [
        t("services.odontopediatria.ageGuide.infant.tips.1", {
          defaultValue: "Primeira visita ao 1º ano",
        }),
        t("services.odontopediatria.ageGuide.infant.tips.2", {
          defaultValue: "Limpeza com gaze húmida",
        }),
        t("services.odontopediatria.ageGuide.infant.tips.3", {
          defaultValue: "Evitar açúcar no biberão",
        }),
      ],
    },
    {
      age: t("services.odontopediatria.ageGuide.preschool.age", {
        defaultValue: "3-5 anos",
      }),
      title: t("services.odontopediatria.ageGuide.preschool.title", {
        defaultValue: "Pré-escolar",
      }),
      tips: [
        t("services.odontopediatria.ageGuide.preschool.tips.1", {
          defaultValue: "Escovagem supervisionada",
        }),
        t("services.odontopediatria.ageGuide.preschool.tips.2", {
          defaultValue: "Pasta com flúor (grão de arroz)",
        }),
        t("services.odontopediatria.ageGuide.preschool.tips.3", {
          defaultValue: "Visitas semestrais",
        }),
      ],
    },
    {
      age: t("services.odontopediatria.ageGuide.school.age", {
        defaultValue: "6-12 anos",
      }),
      title: t("services.odontopediatria.ageGuide.school.title", {
        defaultValue: "Idade Escolar",
      }),
      tips: [
        t("services.odontopediatria.ageGuide.school.tips.1", {
          defaultValue: "Aplicação de selantes",
        }),
        t("services.odontopediatria.ageGuide.school.tips.2", {
          defaultValue: "Ortodontia preventiva",
        }),
        t("services.odontopediatria.ageGuide.school.tips.3", {
          defaultValue: "Independência na escovagem",
        }),
      ],
    },
    {
      age: t("services.odontopediatria.ageGuide.teen.age", {
        defaultValue: "13+ anos",
      }),
      title: t("services.odontopediatria.ageGuide.teen.title", {
        defaultValue: "Adolescência",
      }),
      tips: [
        t("services.odontopediatria.ageGuide.teen.tips.1", {
          defaultValue: "Cuidados com aparelhos",
        }),
        t("services.odontopediatria.ageGuide.teen.tips.2", {
          defaultValue: "Prevenção de traumas",
        }),
        t("services.odontopediatria.ageGuide.teen.tips.3", {
          defaultValue: "Estética do sorriso",
        }),
      ],
    },
  ];

  const funFacts = [
    {
      emoji: "🦷",
      text: t("services.odontopediatria.funFacts.1", {
        defaultValue: "As crianças têm 20 dentes de leite",
      }),
    },
    {
      emoji: "⏰",
      text: t("services.odontopediatria.funFacts.2", {
        defaultValue: "Escovar 2 minutos, 2 vezes ao dia",
      }),
    },
    {
      emoji: "🧀",
      text: t("services.odontopediatria.funFacts.3", {
        defaultValue: "Queijo e leite fortalecem os dentes",
      }),
    },
    {
      emoji: "💧",
      text: t("services.odontopediatria.funFacts.4", {
        defaultValue: "Água é a melhor bebida para os dentes",
      }),
    },
  ];

  const parentTips = [
    {
      icon: Sparkles,
      title: t("services.odontopediatria.parentTips.fun.title", {
        defaultValue: "Tornar a escovagem divertida",
      }),
      description: t("services.odontopediatria.parentTips.fun.description", {
        defaultValue:
          "Use músicas, aplicações ou escovas coloridas para tornar a rotina mais apelativa.",
      }),
    },
    {
      icon: Heart,
      title: t("services.odontopediatria.parentTips.example.title", {
        defaultValue: "Dar o exemplo",
      }),
      description: t("services.odontopediatria.parentTips.example.description", {
        defaultValue:
          "Escove os dentes com o seu filho para que ele aprenda a importância da higiene oral.",
      }),
    },
    {
      icon: Shield,
      title: t("services.odontopediatria.parentTips.fears.title", {
        defaultValue: "Evitar medos",
      }),
      description: t("services.odontopediatria.parentTips.fears.description", {
        defaultValue:
          "Não use o dentista como ameaça. Fale positivamente sobre as visitas ao consultório.",
      }),
    },
    {
      icon: Star,
      title: t("services.odontopediatria.parentTips.rewards.title", {
        defaultValue: "Recompensar bons hábitos",
      }),
      description: t("services.odontopediatria.parentTips.rewards.description", {
        defaultValue:
          "Crie um quadro de recompensas para motivar a escovagem regular.",
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
          {t("services.odontopediatria.meta.title", {
            defaultValue:
              "Odontopediatria - Dentista para Crianças | Dr. Sílvio Araújo - Clínica Dentária",
          })}
        </title>
        <meta
          name="description"
          content={t("services.odontopediatria.meta.description", {
            defaultValue:
              "Odontopediatria especializada para crianças. Consultas pediátricas, selantes e educação para higiene oral na Clínica Dr. Sílvio Araújo.",
          })}
        />
      </Helmet>

      <Header />

      {/* ✅ sem pt-16 aqui (evita o “vazio” sob o header fixo) */}
      <main className="pb-16">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-primary/10 py-6 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

          <div className="container relative">
            {/* ✅ BACK (padrão: navega "/" e rola até #servicos) */}
            <button
              type="button"
              onClick={() => scrollToSection("#servicos")}
              className="inline-flex items-center text-primary hover:underline mb-3 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t("services.odontopediatria.hero.backLink", {
                defaultValue: "Voltar à página de Serviços",
              })}
            </button>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-3">
                  <Baby className="w-4 h-4" />
                  {t("services.odontopediatria.hero.badge", {
                    defaultValue: "Para os Mais Pequenos",
                  })}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                  {t("services.odontopediatria.hero.title.part1", {
                    defaultValue: "Odonto",
                  })}
                  <span className="text-primary">
                    {t("services.odontopediatria.hero.title.part2", {
                      defaultValue: "pediatria",
                    })}
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-5 leading-relaxed">
                  {t("services.odontopediatria.hero.subtitle", {
                    defaultValue:
                      "Cuidados dentários especiais para crianças, num ambiente acolhedor e divertido. Criamos sorrisos felizes desde cedo!",
                  })}
                </p>

                <div className="flex items-center gap-4 mb-5 bg-blue-50 p-4 rounded-2xl border border-primary/10">
                  <div className="flex -space-x-2">
                    {["😊", "😄", "🤗", "😁"].map((emoji, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center text-xl"
                      >
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("services.odontopediatria.hero.stats.number", {
                        defaultValue: "+500 crianças atendidas",
                      })}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("services.odontopediatria.hero.stats.description", {
                        defaultValue: "Todas adoram vir ao dentista!",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* ✅ AGENDAR (padrão: navigate "/" + scroll) */}
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={() => scrollToSection("#marcacao")}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {t("services.odontopediatria.hero.ctaButton", {
                      defaultValue: "Marcar Consulta",
                    })}
                  </Button>

                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+351924123784">
                      <Phone className="w-5 h-5 mr-2" />
                      {t("services.odontopediatria.hero.callButton", {
                        defaultValue: "Ligar Agora",
                      })}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/estetica2.png"
                    alt="Consulta odontológica com paciente (Odontopediatria) na Clínica Dr. Sílvio Araújo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-primary/10">
                  <p className="text-2xl">🎈</p>
                  <p className="text-xs font-medium text-primary">
                    {t("services.odontopediatria.hero.badge2.text", {
                      defaultValue: "Ambiente Divertido",
                    })}
                  </p>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {t("services.odontopediatria.hero.badge3.title", {
                          defaultValue: "Acompanhamento",
                        })}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t("services.odontopediatria.hero.badge3.subtitle", {
                          defaultValue: "com carinho e paciência",
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
                {t("services.odontopediatria.servicesSection.title", {
                  defaultValue: "Serviços para Crianças",
                })}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("services.odontopediatria.servicesSection.subtitle", {
                  defaultValue:
                    "Tratamentos especializados e adaptados para cada fase da infância.",
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
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* ✅ se quiser um botão “Saber mais/Marcar” aqui também no padrão */}
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      className="w-full border-primary/20 text-primary hover:bg-blue-50"
                      onClick={() => scrollToSection("#marcacao")}
                    >
                      {t("services.odontopediatria.servicesSection.cta", {
                        defaultValue: "Marcar Consulta",
                      })}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AGE GUIDE */}
        <section className="py-20 bg-blue-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("services.odontopediatria.ageGuideSection.title", {
                  defaultValue: "Guia por Idade",
                })}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("services.odontopediatria.ageGuideSection.subtitle", {
                  defaultValue:
                    "Cuidados recomendados para cada fase do crescimento.",
                })}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ageGuide.map((guide) => (
                <div
                  key={guide.age}
                  className="bg-background rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                    {guide.age}
                  </div>
                  <h3 className="font-bold mb-4">{guide.title}</h3>
                  <ul className="space-y-2">
                    {guide.tips.map((tip) => (
                      <li
                        key={tip}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <Heart className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FUN FACTS */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-700">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("services.odontopediatria.funFactsSection.title", {
                  defaultValue: "Sabia que... 🤔",
                })}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <div className="text-5xl mb-4">{fact.emoji}</div>
                  <p className="text-white font-medium">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARENT TIPS */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("services.odontopediatria.parentTipsSection.title", {
                  defaultValue: "Dicas para os Pais",
                })}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {parentTips.map((tip) => (
                <div
                  key={tip.title}
                  className="bg-blue-50 rounded-2xl p-6 border border-primary/10"
                >
                  <tip.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm">
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
        <section className="py-20 bg-blue-50">
          <div className="container">
            <div className="bg-gradient-to-br from-blue-50 to-primary/10 rounded-3xl p-12 text-center border border-primary/10">
              <Baby className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("services.odontopediatria.finalCta.title", {
                  defaultValue: "O primeiro passo para um sorriso saudável! 😊",
                })}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("services.odontopediatria.finalCta.subtitle", {
                  defaultValue:
                    "Agende a primeira consulta do seu filho e deixe-nos cuidar do sorriso dele desde cedo.",
                })}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {/* ✅ CTA final (padrão: navigate "/" + scroll) */}
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => scrollToSection("#marcacao")}
                >
                  {t("services.odontopediatria.finalCta.ctaButton", {
                    defaultValue: "Marcar Consulta Pediátrica",
                  })}
                </Button>

                <Button asChild variant="outline" size="lg">
                  <a href="tel:+351924123784">
                    {t("services.odontopediatria.finalCta.callButton", {
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

export default OdontopediatriaServico;