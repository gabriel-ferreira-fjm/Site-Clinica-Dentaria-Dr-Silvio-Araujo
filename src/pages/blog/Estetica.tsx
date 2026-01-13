import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Estetica = () => {
  const navigate = useNavigate();

  const handleBackToBlog = () => {
    navigate('/');
    setTimeout(() => {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <Helmet>
        <title>Tudo sobre branqueamento dentário | Dr. Sílvio Araújo</title>
        <meta
          name="description"
          content="Conheça os diferentes tipos de branqueamento dentário e qual é o mais indicado para si. Guia completo sobre estética dentária."
        />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <button
            onClick={handleBackToBlog}
            className="inline-flex items-center text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </button>

          {/* Header */}
          <header className="mb-8">
            <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
              Estética
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Tudo sobre branqueamento dentário
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                15 Dez 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                7 min leitura
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
            <img
              src="/branqueamento.png" 
              alt="Branqueamento Dentário"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              O branqueamento dentário é um dos procedimentos estéticos mais procurados nas clínicas dentárias. Um sorriso mais branco pode aumentar significativamente a autoconfiança e melhorar a aparência geral do rosto.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              O que causa o escurecimento dos dentes?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Os dentes podem escurecer por diversas razões ao longo do tempo. Entender as causas ajuda a prevenir e a escolher o tratamento mais adequado.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li><strong>Alimentos e bebidas:</strong> Café, chá, vinho tinto e refrigerantes com corantes</li>
              <li><strong>Tabaco:</strong> O fumo é uma das principais causas de manchas nos dentes</li>
              <li><strong>Idade:</strong> O esmalte desgasta-se naturalmente, revelando a dentina mais amarelada</li>
              <li><strong>Medicamentos:</strong> Certos antibióticos e tratamentos podem causar descoloração</li>
              <li><strong>Higiene inadequada:</strong> Acumulação de placa e tártaro</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Tipos de branqueamento dentário
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              1. Branqueamento em consultório
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Realizado pelo dentista, utiliza produtos com concentração mais elevada de agentes branqueadores, proporcionando resultados visíveis numa única sessão. É o método mais rápido e eficaz.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Duração: 1 a 2 horas</li>
              <li>Resultados: Até 8 tons mais claro</li>
              <li>Segurança: Monitorizado por profissional</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              2. Branqueamento caseiro supervisionado
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O dentista confeciona moldeiras personalizadas e fornece o gel branqueador para uso em casa. É uma opção mais económica e confortável, embora os resultados demorem mais tempo a aparecer.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Duração: 2 a 4 semanas de tratamento</li>
              <li>Aplicação: Algumas horas por dia ou durante a noite</li>
              <li>Vantagem: Pode retocar quando necessário</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              3. Branqueamento combinado
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Combina uma sessão em consultório com tratamento caseiro de manutenção, oferecendo o melhor dos dois métodos: resultados rápidos e duradouros.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              O branqueamento é seguro?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sim, quando realizado ou supervisionado por um dentista qualificado. Os produtos utilizados em clínicas são seguros e testados. Pode haver alguma sensibilidade temporária, que desaparece após o tratamento.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Cuidados após o branqueamento
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Evite alimentos e bebidas com cor intensa nas primeiras 48 horas</li>
              <li>Não fume durante o período de tratamento</li>
              <li>Mantenha uma boa higiene oral</li>
              <li>Faça visitas regulares ao dentista para manutenção</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Quanto tempo duram os resultados?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Os resultados podem durar de 1 a 3 anos, dependendo dos hábitos alimentares, higiene oral e estilo de vida. Tratamentos de manutenção periódicos ajudam a prolongar o efeito.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
              <p className="text-foreground font-medium mb-2">Quer um sorriso mais branco?</p>
              <p className="text-muted-foreground mb-4">
                Agende uma avaliação para descobrir qual o melhor tipo de branqueamento para si.
              </p>
              <Button
                variant="cta"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const section = document.getElementById('marcacao');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Marcar Consulta
              </Button>
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center gap-4 mt-8 pt-8 border-t">
            <span className="text-muted-foreground">Partilhar:</span>
            <Button variant="outline" size="icon">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default Estetica;
