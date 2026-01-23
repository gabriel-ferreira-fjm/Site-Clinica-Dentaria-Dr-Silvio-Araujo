import { useTranslation } from 'react-i18next';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Prices = () => {
  const { t } = useTranslation();

  const priceItems = [
    {
      service: t('prices.treatments.consultation'),
      regular: '30 €',
      member: '0 €',
      popular: false,
    },
    {
      service: t('prices.treatments.cleaning'),
      regular: '15 €',
      member: '0 €',
      popular: false,
    },
    {
      service: t('prices.treatments.whitening'),
      regular: '400 €',
      member: '180 €',
      popular: true,
    },
    {
      service: t('prices.treatments.braces'),
      regular: '610 €',
      member: '256 €',
      popular: true,
    },
    {
      service: t('prices.treatments.implant'),
      regular: '750 €',
      member: '473 €',
      popular: true,
    },
    {
      service: t('prices.treatments.prosthesis'),
      regular: '225 €',
      member: '86 €',
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
            {t('prices.tag')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('prices.title')} <span className="text-primary">{t('prices.titleHighlight')}</span> {t('prices.titleEnd')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('prices.description')}
          </p>
        </div>

        {/* Price Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl shadow-dental-lg overflow-hidden border border-border">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-primary text-primary-foreground">
              <div className="p-4 md:p-6 font-heading font-semibold">{t('prices.table.treatment')}</div>
              <div className="p-4 md:p-6 text-center font-heading font-semibold">{t('prices.table.regularPrice')}</div>
              <div className="p-4 md:p-6 text-center font-heading font-semibold bg-primary-dark">
                <span className="hidden sm:inline">{t('prices.table.memberPrice')}</span>
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
                  {t('prices.membership.title')}
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  {t('prices.membership.description')}
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    t('prices.membership.benefits.freeConsultations'),
                    t('prices.membership.benefits.discounts'),
                    t('prices.membership.benefits.priority'),
                    t('prices.membership.benefits.flexiblePayment'),
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
                <p className="text-primary-foreground/60 text-sm mb-2">{t('prices.membership.startingFrom')}</p>
                <p className="font-heading text-5xl font-bold mb-2">9,90€</p>
                <p className="text-primary-foreground/60 mb-6">{t('prices.membership.perMonth')}</p>
                <Button
                  variant="cta-outline"
                  size="xl"
                  onClick={scrollToAppointment}
                  className="w-full sm:w-auto"
                >
                  {t('prices.membership.learnMore')}
                </Button>
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-muted-foreground text-sm mt-6">
            {t('prices.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prices;
