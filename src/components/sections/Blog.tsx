import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const { t } = useTranslation();

  const articles = [
  {
    title: t('blog.articles.article1.title'),
    excerpt: t('blog.articles.article1.excerpt'),
    category: t('blog.articles.article1.category'),
    readTime: '5 min',
    link: '/blog/higiene-oral-diaria',
    image: '/higiene-oral.png',
  },
  {
    title: t('blog.articles.article2.title'),
    excerpt: t('blog.articles.article2.excerpt'),
    category: t('blog.articles.article2.category'),
    readTime: '7 min',
    link: '/blog/estetica-branqueamento',
    image: '/branqueamento.png',
  },
  {
    title: t('blog.articles.article3.title'),
    excerpt: t('blog.articles.article3.excerpt'),
    category: t('blog.articles.article3.category'),
    readTime: '4 min',
    link: '/blog/odontopediatria-criancas',
    image: '/criancas.png',
  },
  {
    title: t('blog.articles.article4.title'),
    excerpt: t('blog.articles.article4.excerpt'),
    category: t('blog.articles.article4.category'),
    readTime: '10 min',
    link: '/blog/implantes-guia-completo',
    image: '/implantes.png',
  },
];



  return (
    <section id="blog" className="py-24 bg-secondary/30">
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
          {articles.map((article) => (
            <Link
              key={article.title}
              to={article.link}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-dental transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Categoria por cima da imagem */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full shadow">
                    {article.category}
                  </span>
                </div>

                {/* Overlay suave */}
                <div className="absolute inset-0 bg-black/10" />
              </div>


              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{article.readTime} {t('blog.readTime')}</span>
                </div>

                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {article.excerpt}
                </p>

                <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t('blog.readMore')}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
