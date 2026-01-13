import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: t('header.home') },
    { href: '#sobre', label: t('header.about') },
    { href: '#servicos', label: t('header.services') },
    { href: '#precos', label: t('header.prices') },
    { href: '#blog', label: t('header.blog') },
    { href: '#contactos', label: t('header.contacts') },
  ];

  const services = [
    t('footer.servicesList.consultation'),
    t('footer.servicesList.orthodontics'),
    t('footer.servicesList.implants'),
    t('footer.servicesList.whitening'),
    t('footer.servicesList.cleaning'),
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo-clinica.png" 
                alt="Logo Clínica Dentária Dr. Sílvio Araújo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-sm text-background/60">Dr. Sílvio Araújo</h3>
                <p className="text-sm text-background/60">Clínica Dentária</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1AFgDBR4vv/?mibextid=wwXIfr"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/clinicasilvioaraujo?igsh=bDZhNHhmZDVlamxm"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/silvio-ara%C3%BAjo-b6592b167?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">{t('footer.contacts')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Rua D Sebastião 2050, Quinta do Conde, Sesimbra<br />Portugal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:924 123 784" className="text-background/70 hover:text-primary text-sm transition-colors">
                  924 123 784
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:geral@silvioaraujo.com" className="text-background/70 hover:text-primary text-sm transition-colors">
                  geral@silvioaraujo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  {t('header.schedule')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm text-center md:text-left">
            © {currentYear} {t('footer.copyright')}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
