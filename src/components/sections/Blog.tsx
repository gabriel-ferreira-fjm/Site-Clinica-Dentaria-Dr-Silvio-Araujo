import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const articles = [
    {
      title: 'Como manter uma boa higiene oral diária',
      excerpt: 'Descubra as melhores práticas para escovar os dentes corretamente e manter a sua boca saudável todos os dias.',
      date: '20 Dez 2024',
      category: 'Higiene Oral',
      readTime: '5 min',
    },
    {
      title: 'Tudo sobre branqueamento dentário',
      excerpt: 'Conheça os diferentes tipos de branqueamento e qual é o mais indicado para o seu caso.',
      date: '15 Dez 2024',
      category: 'Estética',
      readTime: '7 min',
    },
    {
      title: 'Quando levar as crianças ao dentista?',
      excerpt: 'Saiba qual a idade ideal para a primeira consulta e como preparar os mais pequenos para a visita.',
      date: '10 Dez 2024',
      category: 'Odontopediatria',
      readTime: '4 min',
    },
    {
      title: 'Implantes dentários: guia completo',
      excerpt: 'Tudo o que precisa saber sobre implantes dentários, desde o procedimento até à recuperação.',
      date: '5 Dez 2024',
      category: 'Implantes',
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
              Blog
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Dicas de <span className="text-primary">Saúde Oral</span>
            </h2>
          </div>
          <Button variant="outline" className="w-fit">
            Ver Todos os Artigos
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
                  <span>{article.readTime} leitura</span>
                </div>

                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {article.excerpt}
                </p>

                <button className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ler Mais
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
