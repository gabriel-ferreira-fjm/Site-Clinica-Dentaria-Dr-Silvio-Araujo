import { useTranslation } from 'react-i18next';
import { Wifi, Car, Snowflake, Armchair, Baby, CreditCard, Bus, Accessibility } from 'lucide-react';

const Amenities = () => {
  const { t } = useTranslation();

  const amenities = [
    {
      icon: Wifi,
      title: t('amenities.items.wifi.title'),
      description: t('amenities.items.wifi.description'),
    },
    {
      icon: Car,
      title: t('amenities.items.parking.title'),
      description: t('amenities.items.parking.description'),
    },
    {
      icon: Snowflake,
      title: t('amenities.items.climate.title'),
      description: t('amenities.items.climate.description'),
    },
    {
      icon: Armchair,
      title: t('amenities.items.waitingRoom.title'),
      description: t('amenities.items.waitingRoom.description'),
    },
    {
      icon: Baby,
      title: t('amenities.items.kids.title'),
      description: t('amenities.items.kids.description'),
    },
    {
      icon: CreditCard,
      title: t('amenities.items.card.title'),
      description: t('amenities.items.card.description'),
    },
    {
      icon: Bus,
      title: t('amenities.items.transport.title'),
      description: t('amenities.items.transport.description'),
    },
    {
      icon: Accessibility,
      title: t('amenities.items.accessibility.title'),
      description: t('amenities.items.accessibility.description'),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            {t('amenities.tag')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('amenities.title')} <span className="text-primary">{t('amenities.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('amenities.description')}
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="group bg-secondary/30 rounded-2xl p-6 text-center hover:bg-primary hover:shadow-dental-lg transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <amenity.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                {amenity.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
