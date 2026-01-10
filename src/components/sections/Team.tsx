import { useTranslation } from 'react-i18next';
import { Award, GraduationCap, Heart } from 'lucide-react';

const Team = () => {
  const { t } = useTranslation();

  const achievements = t('team.member.achievements', { returnObjects: true }) as string[];

  return (
    <section id="equipa" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            {t('team.tag')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('team.title')} <span className="text-primary">{t('team.titleHighlight')}</span> {t('team.titleEnd')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('team.description')}
          </p>
        </div>

        {/* Team Member */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-3xl shadow-dental-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image Side */}
              <div className="relative min-h-[400px] overflow-hidden">
                <img 
                  src="/dr-silvio.jpg" 
                  alt={t('team.member.name')}
                  className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
                />
                {/* Overlay com informações */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
                  <h3 className="font-heading text-2xl font-bold mb-1">{t('team.member.name')}</h3>
                  <p className="text-primary-foreground/90 mb-1">{t('team.member.role')}</p>
                  <p className="text-primary-foreground/70 text-sm">{t('team.member.specialty')}</p>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t('team.member.description')}
                </p>

                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
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
                  "{t('team.member.quote')}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
