import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  CheckCircle,
  Phone,
  Calendar,
  Wrench,
  Layers,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ImplantesProteses = () => {
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
      icon: Wrench,
      title: t("services.implantes.services.implantes.title", {
        defaultValue: "Implantes Dentários",
      }),
      description: t("services.implantes.services.implantes.description", {
        defaultValue:
          "Solução permanente e natural para substituir dentes perdidos. Os implantes são raízes artificiais de titânio que suportam coroas dentárias.",
      }),
      features: [
        t("services.implantes.services.implantes.features.1", {
          defaultValue: "Durabilidade vitalícia",
        }),
        t("services.implantes.services.implantes.features.2", {
          defaultValue: "Aparência natural",
        }),
        t("services.implantes.services.implantes.features.3", {
          defaultValue: "Preserva o osso",
        }),
        t("services.implantes.services.implantes.features.4", {
          defaultValue: "Função mastigatória completa",
        }),
      ],
      price: t("services.implantes.services.implantes.price", {
        defaultValue: "A partir de €800",
      }),
    },
    {
      icon: Layers,
      title: t("services.implantes.services.fixas.title", {
        defaultValue: "Próteses Fixas",
      }),
      description: t("services.implantes.services.fixas.description", {
        defaultValue:
          "Pontes e coroas fixas cimentadas sobre dentes naturais ou implantes, oferecendo estabilidade e conforto máximo.",
      }),
      features: [
        t("services.implantes.services.fixas.features.1", {
          defaultValue: "Não removíveis",
        }),
        t("services.implantes.services.fixas.features.2", {
          defaultValue: "Alta estética",
        }),
        t("services.implantes.services.fixas.features.3", {
          defaultValue: "Confortáveis",
        }),
        t("services.implantes.services.fixas.features.4", {
          defaultValue: "Resistentes",
        }),
      ],
      price: t("services.implantes.services.fixas.price", {
        defaultValue: "A partir de €400",
      }),
    },
    {
      icon: Award,
      title: t("services.implantes.services.removiveis.title", {
        defaultValue: "Próteses Removíveis",
      }),
      description: t("services.implantes.services.removiveis.description", {
        defaultValue:
          "Soluções removíveis flexíveis e económicas para substituir vários dentes, com materiais de alta qualidade.",
      }),
      features: [
        t("services.implantes.services.removiveis.features.1", {
          defaultValue: "Económicas",
        }),
        t("services.implantes.services.removiveis.features.2", {
          defaultValue: "Fácil higienização",
        }),
        t("services.implantes.services.removiveis.features.3", {
          defaultValue: "Adaptáveis",
        }),
        t("services.implantes.services.removiveis.features.4", {
          defaultValue: "Estéticas",
        }),
      ],
      price: t("services.implantes.services.removiveis.price", {
        defaultValue: "A partir de €300",
      }),
    },
  ];

  const process = [
    {
      step: t("services.implantes.process.01.step", { defaultValue: "01" }),
      title: t("services.implantes.process.01.title", {
        defaultValue: "Avaliação Inicial",
      }),
      description: t("services.implantes.process.01.description", {
        defaultValue:
          "Exame completo com radiografias e TAC para avaliar a estrutura óssea.",
      }),
    },
    {
      step: t("services.implantes.process.02.step", { defaultValue: "02" }),
      title: t("services.implantes.process.02.title", {
        defaultValue: "Planeamento Digital",
      }),
      description: t("services.implantes.process.02.description", {
        defaultValue:
          "Criação de um plano de tratamento personalizado com tecnologia 3D.",
      }),
    },
    {
      step: t("services.implantes.process.03.step", { defaultValue: "03" }),
      title: t("services.implantes.process.03.title", {
        defaultValue: "Cirurgia de Colocação",
      }),
      description: t("services.implantes.process.03.description", {
        defaultValue:
          "Procedimento minimamente invasivo para colocação do implante.",
      }),
    },
    {
      step: t("services.implantes.process.04.step", { defaultValue: "04" }),
      title: t("services.implantes.process.04.title", {
        defaultValue: "Período de Cicatrização",
      }),
      description: t("services.implantes.process.04.description", {
        defaultValue:
          "3-6 meses para osteointegração completa do implante ao osso.",
      }),
    },
    {
      step: t("services.implantes.process.05.step", { defaultValue: "05" }),
      title: t("services.implantes.process.05.title", {
        defaultValue: "Colocação da Coroa",
      }),
      description: t("services.implantes.process.05.description", {
        defaultValue:
          "Instalação da coroa definitiva, personalizada para o seu sorriso.",
      }),
    },
  ];

  const faqs = [
    {
      question: t("services.implantes.faqs.1.q", {
        defaultValue: "Os implantes doem?",
      }),
      answer: t("services.implantes.faqs.1.a", {
        defaultValue:
          "O procedimento é realizado com anestesia local, sendo praticamente indolor. O pós-operatório envolve desconforto leve controlado com medicação.",
      }),
    },
    {
      question: t("services.implantes.faqs.2.q", {
        defaultValue: "Quanto tempo dura um implante?",
      }),
      answer: t("services.implantes.faqs.2.a", {
        defaultValue:
          "Com os cuidados adequados, um implante pode durar toda a vida. A taxa de sucesso é superior a 95%.",
      }),
    },
    {
      question: t("services.implantes.faqs.3.q", {
        defaultValue: "Posso colocar implantes se tenho pouco osso?",
      }),
      answer: t("services.implantes.faqs.3.a", {
        defaultValue:
          "Sim, existem técnicas de enxerto ósseo e implantes especiais para casos de reabsorção óssea.",
      }),
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t("services.implantes.meta.title", {
            defaultValue:
              "Implantes e Próteses Dentárias | Dr. Sílvio Araújo - Clínica Dentária",
          })}
        </title>
        <meta
          name="description"
          content={t("services.implantes.meta.description", {
            defaultValue:
              "Implantes dentários, próteses fixas e removíveis. Soluções completas para dentes em falta na Clínica Dr. Sílvio Araújo.",
          })}
        />
      </Helmet>

      <Header />

      {/* ✅ sem pt-24 */}
      <main className="pb-16">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-primary/10 py-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/30 to-transparent" />

          <div className="container relative">
            {/* ✅ padrão: navega "/" e rola */}
            <button
              type="button"
              onClick={() => scrollToSection("#servicos")}
              className="inline-flex items-center text-primary hover:underline mb-4 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t("services.implantes.hero.backLink", {
                defaultValue: "Voltar aos Serviços",
              })}
            </button>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-3">
                  <Heart className="w-4 h-4" />
                  {t("services.implantes.hero.badge", {
                    defaultValue: "Soluções Definitivas",
                  })}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 leading-tight">
                  {t("services.implantes.hero.title.part1", {
                    defaultValue: "Implantes e ",
                  })}
                  <span className="text-primary">
                    {t("services.implantes.hero.title.part2", {
                      defaultValue: "Próteses",
                    })}
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-5 leading-relaxed">
                  {t("services.implantes.hero.subtitle", {
                    defaultValue:
                      "Recupere a sua capacidade de mastigar, falar e sorrir com confiança. Soluções modernas e duradouras para dentes em falta.",
                  })}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-primary/10">
                    <p className="text-2xl font-bold text-primary">
                      {t("services.implantes.hero.stats.1.value", {
                        defaultValue: "95%",
                      })}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t("services.implantes.hero.stats.1.label", {
                        defaultValue: "Taxa de Sucesso",
                      })}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-primary/10">
                    <p className="text-2xl font-bold text-primary">
                      {t("services.implantes.hero.stats.2.value", {
                        defaultValue: "20+",
                      })}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t("services.implantes.hero.stats.2.label", {
                        defaultValue: "Anos de Experiência",
                      })}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-primary/10">
                    <p className="text-2xl font-bold text-primary">
                      {t("services.implantes.hero.stats.3.value", {
                        defaultValue: "1000+",
                      })}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t("services.implantes.hero.stats.3.label", {
                        defaultValue: "Implantes Colocados",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={() => scrollToSection("#marcacao")}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {t("services.implantes.hero.ctaButton", {
                      defaultValue: "Consulta de Avaliação",
                    })}
                  </Button>

                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+351924123784">
                      <Phone className="w-5 h-5 mr-2" />
                      {t("services.implantes.hero.callButton", {
                        defaultValue: "Ligar Agora",
                      })}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/proteses.png"
                    alt={t("services.implantes.hero.imageAlt", {
                      defaultValue:
                        "Implantes e próteses dentárias na Clínica Dr. Sílvio Araújo",
                    })}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* */}
                <div className="absolute bottom-4 right-4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {t("services.implantes.hero.badge2.title", {
                          defaultValue: "Atendimento Especializado",
                        })}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t("services.implantes.hero.badge2.subtitle", {
                          defaultValue: "Foco no seu conforto",
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
                {t("services.implantes.servicesSection.title", {
                  defaultValue: "Soluções Para Dentes em Falta",
                })}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("services.implantes.servicesSection.subtitle", {
                  defaultValue:
                    "Oferecemos várias opções para restaurar o seu sorriso, adaptadas às suas necessidades.",
                })}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-background rounded-3xl p-8 border-2 border-primary/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-blue-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("services.implantes.processSection.title", {
                  defaultValue: "O Processo de Colocação de Implantes",
                })}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("services.implantes.processSection.subtitle", {
                  defaultValue:
                    "Um tratamento bem planeado para resultados excecionais.",
                })}
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {process.map((item, index) => (
                <div
                  key={item.step}
                  className="relative bg-background rounded-2xl p-6 text-center hover:shadow-xl transition-all border border-primary/10"
                >
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-8 h-0.5 bg-primary/20" />
                    </div>
                  )}
                  <div className="text-3xl font-bold text-primary mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("services.implantes.faqSection.title", {
                  defaultValue: "Perguntas Frequentes",
                })}
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-2xl p-6 border border-primary/10"
                >
                  <h3 className="font-bold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-700">
          <div className="container text-center text-white">
            <Heart className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("services.implantes.finalCta.title", {
                defaultValue: "Recupere o Seu Sorriso Completo",
              })}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {t("services.implantes.finalCta.subtitle", {
                defaultValue:
                  "Agende uma consulta de avaliação gratuita e descubra a melhor solução para o seu caso.",
              })}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("#marcacao")}
              >
                {t("services.implantes.finalCta.ctaButton", {
                  defaultValue: "Agendar Avaliação Gratuita",
                })}
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <a href="tel:+351924123784">
                  {t("services.implantes.finalCta.callButton", {
                    defaultValue: "Ligar: +351 924 123 784",
                  })}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ImplantesProteses;
