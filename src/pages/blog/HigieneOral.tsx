import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const HigieneOral = () => {
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
        <title>Como manter uma boa higiene oral diária | Dr. Sílvio Araújo</title>
        <meta name="description" content="Descubra as melhores práticas para escovar os dentes corretamente e manter uma higiene oral impecável todos os dias." />
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
              Higiene Oral
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Como manter uma boa higiene oral diária
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                20 Dez 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                5 min leitura
              </span>
            </div>
          </header>
          
          {/* Featured Image */}
          <div className="w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
            <img
              src="/higiene-oral.png" 
              alt="Higiene Oral"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A higiene oral é fundamental para manter dentes e gengivas saudáveis ao longo da vida. Uma rotina adequada de cuidados bucais não só previne cáries e doenças gengivais, como também contribui para a saúde geral do organismo.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Por que a higiene oral é tão importante?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A boca é a porta de entrada para o nosso organismo. Quando negligenciamos a higiene oral, permitimos que bactérias nocivas se acumulem, podendo causar não apenas problemas dentários, mas também complicações de saúde sistémica, incluindo doenças cardiovasculares e diabetes.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Os pilares de uma boa higiene oral</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Escovagem correta</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Escove os dentes pelo menos duas vezes ao dia, durante dois minutos de cada vez. Utilize uma escova de cerdas macias e faça movimentos circulares suaves, cobrindo todas as superfícies dos dentes.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Posicione a escova num ângulo de 45 graus em relação à gengiva</li>
              <li>Escove todas as faces dos dentes: externa, interna e superfície de mastigação</li>
              <li>Não se esqueça de escovar a língua para remover bactérias</li>
              <li>Substitua a escova a cada 3 meses ou quando as cerdas estiverem desgastadas</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Uso do fio dental</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O fio dental é essencial para remover a placa bacteriana e restos de alimentos entre os dentes, onde a escova não consegue alcançar. Utilize-o pelo menos uma vez ao dia, preferencialmente antes de dormir.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Elixir bucal</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O elixir bucal complementa a escovagem e o fio dental, ajudando a eliminar bactérias em áreas de difícil acesso. Opte por produtos com flúor para fortalecer o esmalte dentário.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Dicas adicionais para uma boca saudável</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Limite o consumo de alimentos açucarados e ácidos</li>
              <li>Beba bastante água ao longo do dia</li>
              <li>Evite fumar e consumir álcool em excesso</li>
              <li>Visite o dentista regularmente para check-ups e limpezas profissionais</li>
              <li>Considere o uso de pasta de dentes com flúor</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Conclusão</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Manter uma boa higiene oral é um investimento na sua saúde e bem-estar. Com uma rotina consistente e visitas regulares ao dentista, pode prevenir a maioria dos problemas dentários e manter um sorriso saudável por toda a vida.
            </p>
            
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
              <p className="text-foreground font-medium mb-2">Precisa de orientação personalizada?</p>
              <p className="text-muted-foreground mb-4">
                Agende uma consulta na nossa clínica para uma avaliação completa da sua saúde oral.
              </p>
              <Button 
                variant="cta"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const section = document.getElementById('marcacao');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
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

export default HigieneOral;
