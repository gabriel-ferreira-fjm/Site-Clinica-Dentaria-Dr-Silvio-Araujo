import { useTranslation } from 'react-i18next';
import { CheckCircle2, Award, Users, Heart } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Award,
      title: t('about.features.experience.title'),
      description: t('about.features.experience.description'),
    },
    {
      icon: Users,
      title: t('about.features.team.title'),
      description: t('about.features.team.description'),
    },
    {
      icon: Heart,
      title: t('about.features.care.title'),
      description: t('about.features.care.description'),
    },
  ];

  const highlights = [
    t('about.highlights.technology'),
    t('about.highlights.environment'),
    t('about.highlights.prices'),
    t('about.highlights.family'),
    t('about.highlights.emergency'),
    t('about.highlights.payment'),
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-dental-lg">
                <img 
                  src="/clinica-about.png" 
                  alt="Clínica Dentária Dr. Sílvio Araújo" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              
            {/* Stats card */}
            <div className="absolute -bottom-8 -right-8 bg-background rounded-2xl shadow-dental-lg p-6 hidden md:block">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-primary">+5000</p>
                  <p className="text-sm text-muted-foreground">{t('about.stats.patients')}</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-primary">+15</p>
                  <p className="text-sm text-muted-foreground">{t('about.stats.years')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
                {t('about.tag')}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('about.title')}{' '}
                <span className="text-primary">{t('about.titleHighlight')}</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('about.description')}
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
