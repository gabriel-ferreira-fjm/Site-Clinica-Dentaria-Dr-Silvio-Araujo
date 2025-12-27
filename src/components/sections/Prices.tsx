import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Prices = () => {
  const priceItems = [
    {
      service: 'Consulta dentária',
      regular: '30 €',
      member: '0 €',
      popular: false,
    },
    {
      service: 'Destartarização',
      regular: '15 €',
      member: '0 €',
      popular: false,
    },
    {
      service: 'Branqueamento dentário',
      regular: '400 €',
      member: 'desde 180 €',
      popular: true,
    },
    {
      service: 'Aparelho metálico (por arcada)',
      regular: '610 €',
      member: 'desde 256 €',
      popular: true,
    },
    {
      service: 'Implante dentário',
      regular: '750 €',
      member: 'desde 473 €',
      popular: true,
    },
    {
      service: 'Prótese resina acrílica (3 dentes)',
      regular: '225 €',
      member: 'desde 86 €',
      popular: false,
    },
  ];

  const scrollToAppointment = () => {
    const element = document.querySelector('#marcacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="precos" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Tabela de Preços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tratamentos <span className="text-primary">acessíveis</span> para todos
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos preços competitivos e descontos especiais para membros. 
            Cuidar do seu sorriso nunca foi tão acessível.
          </p>
        </div>

        {/* Price Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl shadow-dental-lg overflow-hidden border border-border">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-primary text-primary-foreground">
              <div className="p-4 md:p-6 font-heading font-semibold">Tratamento</div>
              <div className="p-4 md:p-6 text-center font-heading font-semibold">Preço Regular</div>
              <div className="p-4 md:p-6 text-center font-heading font-semibold bg-primary-dark">
                <span className="hidden sm:inline">Preço </span>Membro
              </div>
            </div>

            {/* Table Body */}
            {priceItems.map((item, index) => (
              <div
                key={item.service}
                className={`grid grid-cols-3 items-center border-b border-border last:border-b-0 ${
                  index % 2 === 0 ? 'bg-background' : 'bg-secondary/30'
                }`}
              >
                <div className="p-4 md:p-6 flex items-center gap-2">
                  {item.popular && (
                    <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  )}
                  <span className="text-sm md:text-base text-foreground">{item.service}</span>
                </div>
                <div className="p-4 md:p-6 text-center text-muted-foreground line-through">
                  {item.regular}
                </div>
                <div className="p-4 md:p-6 text-center bg-primary/5">
                  <span className="font-heading font-semibold text-primary">
                    {item.member}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Card */}
          <div className="mt-8 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-primary-foreground">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Torne-se Membro e Poupe
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Com o nosso plano de membro, tem acesso a descontos exclusivos 
                  em todos os tratamentos, consultas gratuitas e prioridade no agendamento.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Consultas de rotina gratuitas',
                    'Descontos até 60% em tratamentos',
                    'Agendamento prioritário',
                    'Pagamento flexível',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <p className="text-primary-foreground/60 text-sm mb-2">A partir de</p>
                <p className="font-heading text-5xl font-bold mb-2">9,90€</p>
                <p className="text-primary-foreground/60 mb-6">por mês</p>
                <Button
                  variant="cta-outline"
                  size="xl"
                  onClick={scrollToAppointment}
                  className="w-full sm:w-auto"
                >
                  Saber Mais
                </Button>
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-muted-foreground text-sm mt-6">
            * Os preços apresentados são indicativos e podem variar conforme a complexidade do tratamento. 
            Consulte-nos para um orçamento personalizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prices;
