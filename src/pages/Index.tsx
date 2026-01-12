import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Prices from '@/components/sections/Prices';
import Team from '@/components/sections/Team';
import Amenities from '@/components/sections/Amenities';
import Appointment from '@/components/sections/Appointment';
import Testimonials from '@/components/sections/Testimonials';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsappButton from '@/components/WhatsappButton';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Clínica Dentária Dr. Sílvio Araújo | Dentista em Quinta do Conde</title>
        <meta 
          name="description" 
          content="Clínica dentária em Quinta do Conde com tratamentos acessíveis. Ortodontia, implantes, branqueamento e mais. Dentista experiente em Portugal. Marque a sua consulta!" 
        />
        <meta 
          name="keywords" 
          content="clínica dentária Quinta do Conde, dentista experiente Portugal, tratamentos dentários acessíveis, ortodontia, implantes dentários, branqueamento dentário" 
        />
        <link rel="canonical" href="https://wildsmile.pt" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Clínica Dentária Dr. Sílvio Araújo." />
        <meta property="og:description" content="Sorriso saudável, cuidado especializado. Tratamentos dentários de qualidade em Quinta do Conde." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_PT" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Clínica Dentária Dr. Sílvio Araújo",
            "alternateName": "Clínica Dentária Dr. Sílvio Araújo",
            "description": "Clínica dentária em Quinta do Conde com tratamentos acessíveis e equipa especializada.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Quinta do Conde",
              "addressRegion": "Sesimbra",
              "addressCountry": "PT"
            },
            "telephone": "924123784",
            "email": "geral@silvioaraujo.com",
            "openingHours": ["Mo-Fr 09:00-19:00", "Sa 09:00-13:00"],
            "priceRange": "€€",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "5000"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Prices />
          <Team />
          <Amenities />
          <Appointment />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <FloatingCTA />
        <WhatsappButton />
      </div>
    </>
  );
};

export default Index;
