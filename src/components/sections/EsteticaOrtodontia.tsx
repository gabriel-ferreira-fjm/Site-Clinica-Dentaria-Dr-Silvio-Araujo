import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const EsteticaOrtodontia = () => {
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
      title: "Branqueamento Dentário",
      description:
        "Tratamento profissional para clarear os dentes e devolver o brilho ao seu sorriso de forma segura e eficaz.",
      features: ["Até 8 tons mais claro", "Técnica LED avançada", "Sem danos ao esmalte"],
      duration: "1-2 horas",
      tag: "Mais Popular",
    },
    {
      icon: Award,
      title: "Aparelhos Metálicos",
      description:
        "Ortodontia tradicional com brackets metálicos de alta qualidade para correção eficiente do alinhamento dentário.",
      features: [
        "Correção completa",
        "Resistentes e duráveis",
        "Acompanhamento mensal",
        "Resultados definitivos",
      ],
      duration: "12-24 meses",
      tag: "Eficácia Comprovada",
    },
    {
      icon: SmilePlus,
      title: "Ortodontia Invisível",
      description:
        "Alinhadores transparentes removíveis que corrigem o seu sorriso de forma discreta e confortável.",
      features: [
        "Praticamente invisíveis",
        "Removíveis para comer",
        "Sem restrições alimentares",
        "Menos consultas",
      ],
      duration: "6-18 meses",
      tag: "Discreto",
    },
  ];

  const beforeAfter = [
    { before: "Dentes amarelados", after: "Sorriso brilhante e natural" },
    { before: "Dentes desalinhados", after: "Mordida perfeita" },
    { before: "Espaços entre dentes", after: "Sorriso harmonioso" },
    { before: "Dentes apinhados", after: "Alinhamento impecável" },
  ];

  return (
    <>
      <Helmet>
        <title>Estética e Ortodontia | Dr. Sílvio Araújo - Clínica Dentária</title>
        <meta
          name="description"
          content="Branqueamento dentário, aparelhos metálicos e ortodontia invisível. Transforme o seu sorriso na Clínica Dr. Sílvio Araújo."
        />
      </Helmet>

      <Header />

      {/* ✅ sem pt-24 (evita o “vazio” sob o header fixo) */}
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
              Voltar aos Serviços
            </button>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Transforme o Seu Sorriso
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Estética e <span className="text-primary">Ortodontia</span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Dentes mais brancos e perfeitamente alinhados. Descubra as soluções estéticas que vão transformar a sua
                  confiança.
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
                    <p className="font-semibold text-foreground">4.9/5 Avaliação</p>
                    <p className="text-sm text-muted-foreground">+200 sorrisos transformados</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* ✅ botão agora vai pro MESMO lugar que PrevencaoHigiene */}
                  <Button variant="cta" size="lg" onClick={() => scrollToSection("#marcacao")}>
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Avaliação
                  </Button>

                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+351924123784">
                      <Phone className="w-5 h-5 mr-2" />
                      Ligar Agora
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                {/* ✅ Quadrado gigante com a imagem do /public */}
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="/estetica3.png"
                    alt="Consulta odontológica - estética e ortodontia"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* ✅ removido “Resultado em 1 Sessão” */}
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tratamentos Estéticos Disponíveis
              </h2>
              <p className="text-lg text-muted-foreground">
                Escolha o tratamento ideal para alcançar o sorriso dos seus sonhos.
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
                    <p className="text-sm text-primary font-medium">⏱ Duração: {service.duration}</p>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full mt-6 border-primary/20 text-primary hover:bg-blue-50"
                  >
                    <Link to="/#marcacao">Saber Mais</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-700">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformações Reais</h2>
              <p className="text-white/80 text-lg">
                Veja as mudanças que os nossos tratamentos podem proporcionar.
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
                      <p className="text-sm text-white/70 mb-1">Antes</p>
                      <p className="text-white font-medium">{item.before}</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white">↓</span>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <p className="text-sm text-white/70 mb-1">Depois</p>
                      <p className="text-white font-medium">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="bg-gradient-to-br from-blue-50 to-primary/10 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pronto para transformar o seu sorriso?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Agende uma avaliação gratuita e descubra qual o tratamento ideal para si.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {/* ✅ CTA final também vai pro mesmo lugar */}
                <Button variant="cta" size="lg" onClick={() => scrollToSection("#marcacao")}>
                  Avaliação Gratuita
                </Button>

                <Button asChild variant="outline" size="lg">
                  <a href="tel:+351924123784">Ligar: +351 924 123 784</a>
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
