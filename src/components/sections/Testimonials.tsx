import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t('testimonials.reviews.review1.name'),
      role: t('testimonials.reviews.review1.role'),
      rating: 5,
      text: t('testimonials.reviews.review1.text'),
      initials: 'MS',
    },
    {
      name: t('testimonials.reviews.review2.name'),
      role: t('testimonials.reviews.review2.role'),
      rating: 5,
      text: t('testimonials.reviews.review2.text'),
      initials: 'JF',
    },
    {
      name: t('testimonials.reviews.review3.name'),
      role: t('testimonials.reviews.review3.role'),
      rating: 5,
      text: t('testimonials.reviews.review3.text'),
      initials: 'AC',
    },
    {
      name: t('testimonials.reviews.review4.name'),
      role: t('testimonials.reviews.review4.role'),
      rating: 5,
      text: t('testimonials.reviews.review4.text'),
      initials: 'PO',
    },
    {
      name: t('testimonials.reviews.review5.name'),
      role: t('testimonials.reviews.review5.role'),
      rating: 5,
      text: t('testimonials.reviews.review5.text'),
      initials: 'SM',
    },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            {t('testimonials.tag')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('testimonials.title')} <span className="text-primary">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('testimonials.description')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-dental transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-heading font-semibold text-primary">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More testimonials - smaller cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {testimonials.slice(3).map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-secondary/30 rounded-2xl p-6 flex gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-semibold text-primary">
                  {testimonial.initials}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '4.9', label: t('testimonials.stats.averageRating'), suffix: '/5' },
            { value: '5000', label: t('testimonials.stats.happyPatients'), suffix: '+' },
            { value: '98', label: t('testimonials.stats.satisfactionRate'), suffix: '%' },
            { value: '15', label: t('testimonials.stats.yearsExperience'), suffix: '+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl md:text-5xl font-bold text-primary">
                {stat.value}<span className="text-2xl">{stat.suffix}</span>
              </p>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
