import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Implantes = () => {
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
        <title>Implantes dentários: guia completo | Dr. Sílvio Araújo</title>
        <meta name="description" content="Tudo o que precisa saber sobre implantes dentários, desde o procedimento até à recuperação. Guia completo sobre implantologia." />
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
              Implantes
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Implantes dentários: guia completo
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                5 Dez 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 min leitura
              </span>
            </div>
          </header>
          
          {/* Featured Image */}
          <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mb-8 flex items-center justify-center">
            <div className="text-primary/30 text-6xl">🔧</div>
          </div>
          
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Os implantes dentários são a solução mais moderna e eficaz para substituir dentes perdidos. Funcionam como raízes artificiais que suportam coroas, pontes ou próteses, proporcionando resultados naturais e duradouros.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">O que é um implante dentário?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Um implante dentário é um pequeno parafuso de titânio que é inserido cirurgicamente no osso maxilar ou mandibular. O titânio é um material biocompatível, o que significa que o corpo o aceita e o osso cresce à sua volta, criando uma base sólida para o novo dente.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🔩</div>
                <h4 className="font-semibold text-foreground">Implante</h4>
                <p className="text-sm text-muted-foreground">Parafuso de titânio inserido no osso</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🔗</div>
                <h4 className="font-semibold text-foreground">Pilar</h4>
                <p className="text-sm text-muted-foreground">Peça de ligação entre implante e coroa</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">👑</div>
                <h4 className="font-semibold text-foreground">Coroa</h4>
                <p className="text-sm text-muted-foreground">Dente artificial visível</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Vantagens dos implantes dentários</h2>
            <div className="space-y-3 mb-6">
              {[
                "Aspeto e sensação natural",
                "Durabilidade - podem durar toda a vida com cuidados adequados",
                "Preservam o osso maxilar",
                "Não afetam os dentes adjacentes",
                "Permitem comer e falar normalmente",
                "Não requerem remoção para limpeza",
                "Melhoram a autoestima e qualidade de vida"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Quem pode fazer implantes?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A maioria dos adultos com boa saúde geral pode receber implantes dentários. No entanto, é necessária uma avaliação cuidadosa para determinar se é um bom candidato.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fatores que podem afetar a elegibilidade incluem:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Quantidade e qualidade do osso disponível</li>
              <li>Saúde geral e condições médicas (diabetes, osteoporose)</li>
              <li>Hábitos como fumar</li>
              <li>Higiene oral</li>
              <li>Medicamentos em uso</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Como é o procedimento?</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Fase 1: Avaliação e planeamento</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O dentista realiza exames clínicos e radiográficos detalhados, incluindo TAC 3D, para avaliar o osso e planear a posição ideal do implante.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Fase 2: Colocação do implante</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sob anestesia local, o implante é inserido no osso. O procedimento é geralmente indolor. Pode ser colocado um dente provisório no mesmo dia (carga imediata) em casos selecionados.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Fase 3: Osteointegração</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Durante 3 a 6 meses, o osso integra-se com o implante. Este período é crucial para o sucesso a longo prazo.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Fase 4: Colocação da coroa definitiva</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Após a cicatrização, é colocado o pilar e a coroa definitiva, feita à medida para combinar perfeitamente com os seus dentes naturais.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Recuperação e cuidados</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A recuperação inicial dura alguns dias a uma semana. Durante este período:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Pode haver algum inchaço e desconforto leve</li>
              <li>Tome a medicação prescrita conforme indicado</li>
              <li>Evite alimentos duros na zona operada</li>
              <li>Mantenha uma boa higiene oral</li>
              <li>Evite fumar e álcool</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Taxa de sucesso</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Os implantes dentários têm uma taxa de sucesso superior a 95% quando colocados por profissionais experientes e com cuidados adequados. Com manutenção regular, podem durar toda a vida.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Quanto custam os implantes?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              O custo varia dependendo do número de implantes, tipo de coroa e procedimentos adicionais necessários (como enxerto ósseo). Oferecemos opções de financiamento para tornar o tratamento acessível.
            </p>
            
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
              <p className="text-foreground font-medium mb-2">Quer recuperar o seu sorriso?</p>
              <p className="text-muted-foreground mb-4">
                Agende uma avaliação gratuita para saber se os implantes dentários são a solução ideal para si.
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

export default Implantes;
