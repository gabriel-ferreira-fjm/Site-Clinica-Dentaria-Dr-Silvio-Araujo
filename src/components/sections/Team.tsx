import { Award, GraduationCap, Heart } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Sílvio Araújo',
      role: 'Diretor Clínico',
      specialty: 'Odontologia Geral e Ortodontia',
      description: 'Especialista em odontologia geral e ortodontia, com vasta experiência e dedicação ao cuidado de cada paciente. Formado pela Faculdade de Medicina Dentária, lidera a equipa com profissionalismo e empatia.',
      image: '/dr-silvio.jpg',
      achievements: [
        'Membro da Ordem dos Médicos Dentistas',
        'Especialização em Ortodontia',
        'Formação contínua em implantologia',
      ],
    },
  ];

  return (
    <section id="equipa" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            A Nossa Equipa
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Profissionais <span className="text-primary">dedicados</span> ao seu sorriso
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça a equipa que cuida de si e da sua família com profissionalismo, 
            experiência e um toque de carinho.
          </p>
        </div>

        {/* Team Member */}
        <div className="max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-background rounded-3xl shadow-dental-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative min-h-[400px] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
                  />
                  {/* Overlay com informações */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
                    <h3 className="font-heading text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary-foreground/90 mb-1">{member.role}</p>
                    <p className="text-primary-foreground/70 text-sm">{member.specialty}</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {member.description}
                  </p>

                  <div className="space-y-4">
                    {member.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {index === 0 && <Award className="w-4 h-4 text-primary" />}
                          {index === 1 && <GraduationCap className="w-4 h-4 text-primary" />}
                          {index === 2 && <Heart className="w-4 h-4 text-primary" />}
                        </div>
                        <span className="text-sm text-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-8 pl-4 border-l-4 border-primary italic text-muted-foreground">
                    "O nosso compromisso é proporcionar o melhor cuidado dentário, 
                    com tecnologia avançada e um atendimento humano e personalizado."
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;