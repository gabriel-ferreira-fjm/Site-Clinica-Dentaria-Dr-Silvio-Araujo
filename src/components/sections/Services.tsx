import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  Sparkles,
  Shield,
  Heart,
  Smile,
  Baby,
  Activity,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const { t } = useTranslation();

  const categories = [
    {
      icon: Stethoscope,
      title: t('services.categories.consultation.title'),
      description: t('services.categories.consultation.description'),
      services: t('services.categories.consultation.services', {
        returnObjects: true,
      }) as string[],
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      href: '/consulta-diagnostico', // ✅ bate com App.tsx
    },
    {
      icon: Shield,
      title: t('services.categories.prevention.title'),
      description: t('services.categories.prevention.description'),
      services: t('services.categories.prevention.services', {
        returnObjects: true,
      }) as string[],
      color: 'bg-green-50',
      iconColor: 'text-green-600',
      href: '/prevencao-higiene', // ✅
    },
    {
      icon: Sparkles,
      title: t('services.categories.aesthetics.title'),
      description: t('services.categories.aesthetics.description'),
      services: t('services.categories.aesthetics.services', {
        returnObjects: true,
      }) as string[],
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
      href: '/estetica-ortodontia', // ✅
    },
    {
      icon: Heart,
      title: t('services.categories.implants.title'),
      description: t('services.categories.implants.description'),
      services: t('services.categories.implants.services', {
        returnObjects: true,
      }) as string[],
      color: 'bg-red-50',
      iconColor: 'text-red-600',
      href: '/implantes-proteses', // ✅
    },
    {
      icon: Activity,
      title: t('services.categories.specialized.title'),
      description: t('services.categories.specialized.description'),
      services: t('services.categories.specialized.services', {
        returnObjects: true,
      }) as string[],
      color: 'bg-amber-50',
      iconColor: 'text-amber-600',
      href: '/tratamentos-especializados', // ✅
    },
    {
      icon: Baby,
      title: t('services.categories.pediatric.title'),
      description: t('services.categories.pediatric.description'),
      services: t('services.categories.pediatric.services', {
        returnObjects: true,
      }) as string[],
      color: 'bg-pink-50',
      iconColor: 'text-pink-600',
      href: '/odontopediatria', // ✅ (no App.tsx aponta pro OdontopediatriaServico)
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
            {t('services.tag')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('services.title')}{' '}
            <span className="text-primary">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Card = (
              <div
                className="group bg-background rounded-2xl p-6 shadow-sm hover:shadow-dental-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
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
                    <li
                      key={service}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            );

            return (
              <Link
                key={category.title}
                to={category.href}
                className="block h-full focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
                aria-label={category.title}
              >
                {Card}
              </Link>
            );
          })}
        </div>

        {/* Extra Services */}
        <div className="mt-12 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                {t('services.tmj.title')}
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                {t('services.tmj.description')}
              </p>
              <Button variant="cta-outline" size="lg" onClick={scrollToAppointment}>
                {t('services.tmj.learnMore')}
              </Button>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-2">
                    <Clock className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-primary-foreground/80 text-sm">
                    {t('services.tmj.quickConsultations')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-2">
                    <Smile className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-primary-foreground/80 text-sm">
                    {t('services.tmj.guaranteedResults')}
                  </p>
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
