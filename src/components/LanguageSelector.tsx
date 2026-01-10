import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState } from 'react';

const languages = [
  { code: 'pt', name: 'Português', flag: 'https://flagcdn.com/w20/pt.png' },
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
  { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w20/es.png' },
  { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <Globe className="w-4 h-4" />
        <img src={currentLanguage.flag} alt={currentLanguage.name} className="w-5 h-auto" />
        <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <>
          {/* Overlay para fechar ao clicar fora */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-40 bg-background border border-border rounded-xl shadow-dental-lg z-50 overflow-hidden animate-scale-in">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-accent transition-colors ${
                  i18n.language === lang.code ? 'bg-primary/10 text-primary' : 'text-foreground'
                }`}
              >
                <img src={lang.flag} alt={lang.name} className="w-5 h-auto" />
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;
