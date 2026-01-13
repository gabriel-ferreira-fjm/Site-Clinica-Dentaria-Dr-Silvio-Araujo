import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Odontopediatria = () => {
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
        <title>Quando levar as crianças ao dentista? | Dr. Sílvio Araújo</title>
        <meta name="description" content="Saiba qual a idade ideal para a primeira consulta e como preparar os mais pequenos para uma experiência positiva no dentista." />
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
              Odontopediatria
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Quando levar as crianças ao dentista?
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                10 Dez 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                4 min leitura
              </span>
            </div>
          </header>
          
          {/* Featured Image */}
          <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mb-8 flex items-center justify-center">
            <div className="text-primary/30 text-6xl">👶</div>
          </div>
          
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A saúde oral das crianças é fundamental para o seu desenvolvimento. Muitos pais perguntam-se quando devem levar os filhos ao dentista pela primeira vez e como tornar essa experiência positiva.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Qual a idade ideal para a primeira consulta?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A primeira visita ao dentista deve ocorrer quando nasce o primeiro dente ou, no máximo, até ao primeiro aniversário da criança. Esta consulta inicial é essencial para:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Avaliar o desenvolvimento dos dentes e maxilares</li>
              <li>Identificar precocemente possíveis problemas</li>
              <li>Orientar os pais sobre higiene oral infantil</li>
              <li>Criar uma relação positiva entre a criança e o dentista</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Como preparar a criança para a consulta?</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Antes da consulta</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li><strong>Fale positivamente:</strong> Evite usar palavras como "dor", "injeção" ou "arrancar"</li>
              <li><strong>Leia livros:</strong> Existem histórias infantis sobre visitas ao dentista</li>
              <li><strong>Brinque de dentista:</strong> Simule uma consulta em casa com bonecos</li>
              <li><strong>Escolha o horário certo:</strong> Prefira horários em que a criança está descansada</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Durante a consulta</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Mantenha a calma e transmita segurança</li>
              <li>Deixe o dentista comunicar diretamente com a criança</li>
              <li>Evite fazer promessas de recompensas exageradas</li>
              <li>Elogie o comportamento da criança após a consulta</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Problemas dentários comuns em crianças</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Cáries de biberão</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ocorrem quando a criança adormece com o biberão de leite ou sumo na boca. Para prevenir, limpe os dentes após cada mamada e evite bebidas açucaradas no biberão.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Chuchar no dedo</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              É natural nos primeiros anos, mas deve ser desencorajado após os 4 anos para evitar alterações no posicionamento dos dentes e no desenvolvimento da arcada dentária.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Traumatismos dentários</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quedas e acidentes são comuns na infância. Em caso de trauma dentário, procure imediatamente um dentista, mesmo que pareça não haver danos visíveis.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Higiene oral infantil por idade</h2>
            
            <div className="bg-muted/50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-foreground mb-2">0-2 anos</h4>
              <p className="text-muted-foreground">Limpe as gengivas com uma gaze húmida. Quando surgirem os primeiros dentes, use uma escova de bebé com água.</p>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-foreground mb-2">2-6 anos</h4>
              <p className="text-muted-foreground">Use pasta de dentes com flúor (quantidade do tamanho de uma ervilha). Os pais devem supervisionar e ajudar na escovagem.</p>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-foreground mb-2">6+ anos</h4>
              <p className="text-muted-foreground">A criança pode escovar sozinha, mas os pais devem verificar. Introduza o uso de fio dental quando os dentes começarem a tocar-se.</p>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Com que frequência ir ao dentista?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Após a primeira consulta, recomenda-se visitar o dentista a cada 6 meses para check-ups de rotina. Esta frequência permite detetar e tratar problemas precocemente, quando são mais fáceis de resolver.
            </p>
            
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
              <p className="text-foreground font-medium mb-2">Está na hora da primeira consulta do seu filho?</p>
              <p className="text-muted-foreground mb-4">
                A nossa equipa está preparada para receber os mais pequenos com todo o carinho e atenção.
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

export default Odontopediatria;
