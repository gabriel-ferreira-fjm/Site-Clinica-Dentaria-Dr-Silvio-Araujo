import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Morada',
      content: 'Quinta do Conde, Sesimbra, Portugal',
      action: 'Ver no Mapa',
      href: 'https://maps.google.com/?q=Quinta+do+Conde+Sesimbra+Portugal',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+351 210 851 266',
      action: 'Ligar Agora',
      href: 'tel:+351210851266',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@wildsmile.pt',
      action: 'Enviar Email',
      href: 'mailto:info@wildsmile.pt',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg-Sex: 9h-19h | Sáb: 9h-13h',
      action: null,
      href: null,
    },
  ];

  return (
    <section id="contactos" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Contactos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Venha <span className="text-primary">visitar-nos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos localizados na Quinta do Conde, com fácil acesso e estacionamento próximo. 
            Entre em contacto connosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-dental-lg h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24954.84563654082!2d-9.015!3d38.565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1936f5d1c5c4c5%3A0x5c5c5c5c5c5c5c5c!2sQuinta%20do%20Conde%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1703123456789!5m2!1spt-PT!2spt"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica Dentária Dr. Sílvio Araújo"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-secondary/30 rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{item.content}</p>
                  {item.action && item.href && (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                    >
                      {item.action}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-heading text-xl font-bold mb-3">
                Marque a sua Consulta Hoje!
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Não espere mais para cuidar do seu sorriso. 
                A nossa equipa está pronta para recebê-lo.
              </p>
              <Button
                variant="cta-outline"
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#marcacao');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Marcar Consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
