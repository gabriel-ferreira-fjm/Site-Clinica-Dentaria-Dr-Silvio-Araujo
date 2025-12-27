import { Stethoscope, Sparkles, Shield, Heart, Smile, Baby, Activity, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const categories = [
    {
      icon: Stethoscope,
      title: 'Consulta e Diagnóstico',
      description: 'Avaliação completa da saúde oral',
      services: ['Consulta dentária', 'Radiografias digitais', 'Urgências dentárias'],
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Shield,
      title: 'Prevenção & Higiene',
      description: 'Cuidados preventivos essenciais',
      services: ['Destartarização', 'Polimento dentário', 'Odontologia preventiva'],
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: Sparkles,
      title: 'Estética e Ortodontia',
      description: 'Sorriso perfeito e alinhado',
      services: ['Branqueamento dentário', 'Aparelhos metálicos', 'Ortodontia invisível'],
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: Heart,
      title: 'Implantes e Próteses',
      description: 'Soluções para dentes em falta',
      services: ['Implantes dentários', 'Próteses fixas', 'Próteses removíveis'],
      color: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      icon: Activity,
      title: 'Tratamentos Especializados',
      description: 'Cuidados avançados e específicos',
      services: ['Endodontia', 'Cirurgia oral', 'Periodontologia'],
      color: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      icon: Baby,
      title: 'Odontopediatria',
      description: 'Cuidados dentários para crianças',
      services: ['Consulta pediátrica', 'Selantes', 'Educação para higiene oral'],
      color: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
  ];

  const scrollToAppointment = () => {
    const element = document.querySelector('#marcacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Os Nossos Serviços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tratamentos dentários{' '}
            <span className="text-primary">completos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços dentários para cuidar da saúde oral 
            de toda a sua família, com tecnologia moderna e profissionais qualificados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-background rounded-2xl p-6 shadow-sm hover:shadow-dental-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <category.icon className={`w-7 h-7 ${category.iconColor}`} />
              </div>
              
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {category.description}
              </p>
              
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Extra Services */}
        <div className="mt-12 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Tratamento de Disfunção Temporo-Mandibular
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Tratamento especializado para dores na articulação da mandíbula, 
                dores de cabeça e tensão muscular relacionada com problemas dentários.
              </p>
              <Button
                variant="cta-outline"
                size="lg"
                onClick={scrollToAppointment}
              >
                Saber Mais
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-2">
                    <Clock className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-primary-foreground/80 text-sm">Consultas<br />Rápidas</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-2">
                    <Smile className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-primary-foreground/80 text-sm">Resultados<br />Garantidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
