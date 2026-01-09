import { CheckCircle2, Award, Users, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Mais de 15 anos de dedicação à saúde oral',
    },
    {
      icon: Users,
      title: 'Equipa Especializada',
      description: 'Profissionais qualificados e em constante formação',
    },
    {
      icon: Heart,
      title: 'Cuidado Personalizado',
      description: 'Tratamentos adaptados às necessidades de cada paciente',
    },
  ];

  const highlights = [
    'Tecnologia de última geração',
    'Ambiente acolhedor e moderno',
    'Preços acessíveis',
    'Atendimento para toda a família',
    'Urgências dentárias',
    'Facilidades de pagamento',
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-dental-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary-dark" />
              
              {/* Overlay content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C10.8 2 9.7 2.4 8.8 3.1C8.1 3.6 7.5 4.3 7.1 5.1C6.4 4.5 5.5 4.2 4.5 4.5C3.1 4.9 2 6.2 2 7.8C2 9.1 2.6 10.3 3.5 11.2C4.3 12 5.4 12.5 6.5 12.5C6.8 12.5 7 12.5 7.3 12.4C7.1 13.4 7 14.5 7 15.5C7 18.5 8.3 21 10.5 22.4C11 22.8 11.5 23 12 23C12.5 23 13 22.8 13.5 22.4C15.7 21 17 18.5 17 15.5C17 14.5 16.9 13.4 16.7 12.4C17 12.5 17.2 12.5 17.5 12.5C18.6 12.5 19.7 12 20.5 11.2C21.4 10.3 22 9.1 22 7.8C22 6.2 20.9 4.9 19.5 4.5C18.5 4.2 17.6 4.5 16.9 5.1C16.5 4.3 15.9 3.6 15.2 3.1C14.3 2.4 13.2 2 12 2Z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-2">Clínica Dentária Dr. Sílvio Araújo</h3>
                  <p className="text-primary-foreground/80">A sua clínica de confiança</p>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div className="absolute -bottom-8 -right-8 bg-background rounded-2xl shadow-dental-lg p-6 hidden md:block">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-primary">+5000</p>
                  <p className="text-sm text-muted-foreground">Pacientes</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-primary">+15</p>
                  <p className="text-sm text-muted-foreground">Anos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
                Sobre Nós
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Cuidamos do seu sorriso com{' '}
                <span className="text-primary">dedicação</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A Clínica Dentária Dr. Sílvio Araújo combina experiência, tecnologia moderna 
                e atenção personalizada para oferecer o melhor cuidado dentário. Liderada pelo 
                Dr. Sílvio Araújo, a nossa equipa garante tratamentos eficazes e acessíveis 
                para toda a família.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
