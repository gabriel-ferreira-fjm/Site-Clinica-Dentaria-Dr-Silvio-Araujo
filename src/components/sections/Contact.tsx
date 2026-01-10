import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address.title'),
      content: t('contact.info.address.content'),
      action: t('contact.info.address.action'),
      href: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0xd1948d9fdd90711:0x73f4b7664e5a18bc?sa=X&ved=1t:8290&ictx=111',
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      content: t('contact.info.phone.content'),
      action: t('contact.info.phone.action'),
      href: 'tel:924 123 784',
    },
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      content: t('contact.info.email.content'),
      action: t('contact.info.email.action'),
      href: 'mailto:geral@silvioaraujo.com',
    },
    {
      icon: Clock,
      title: t('contact.info.schedule.title'),
      content: t('contact.info.schedule.content'),
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
            {t('contact.tag')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('contact.title')} <span className="text-primary">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('contact.description')}
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
                {t('contact.cta.title')}
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                {t('contact.cta.description')}
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
                {t('contact.cta.button')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
