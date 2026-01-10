import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const { t } = useTranslation();

  const articles = [
    {
      title: t('blog.articles.article1.title'),
      excerpt: t('blog.articles.article1.excerpt'),
      date: '20 Dez 2024',
      category: t('blog.articles.article1.category'),
      readTime: '5 min',
    },
    {
      title: t('blog.articles.article2.title'),
      excerpt: t('blog.articles.article2.excerpt'),
      date: '15 Dez 2024',
      category: t('blog.articles.article2.category'),
      readTime: '7 min',
    },
    {
      title: t('blog.articles.article3.title'),
      excerpt: t('blog.articles.article3.excerpt'),
      date: '10 Dez 2024',
      category: t('blog.articles.article3.category'),
      readTime: '4 min',
    },
    {
      title: t('blog.articles.article4.title'),
      excerpt: t('blog.articles.article4.excerpt'),
      date: '5 Dez 2024',
      category: t('blog.articles.article4.category'),
      readTime: '10 min',
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              {t('blog.tag')}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {t('blog.title')} <span className="text-primary">{t('blog.titleHighlight')}</span>
            </h2>
          </div>
          <Button variant="outline" className="w-fit">
            {t('blog.viewAll')}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-dental transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl">📖</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span>{article.readTime} {t('blog.readTime')}</span>
                </div>

                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {article.excerpt}
                </p>

                <button className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t('blog.readMore')}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
