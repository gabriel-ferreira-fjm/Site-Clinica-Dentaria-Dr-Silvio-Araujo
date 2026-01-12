import { useTranslation } from 'react-i18next';

const WhatsAppButton = () => {
  const { t } = useTranslation();
  
  const whatsappNumber = '351924123784';
  
  const getWhatsAppMessage = () => {
    const messages = {
      pt: 'Olá! 😊 Vim pelo site e gostaria de falar com a clínica. Podem responder por aqui para me ajudarem a marcar e/ou receber informação?',
      en: 'Hello! 😊 I came through the website and would like to speak with the clinic. Can you reply here to help me schedule and/or receive information?',
      es: '¡Hola! 😊 Vine a través del sitio web y me gustaría hablar con la clínica. ¿Pueden responder por aquí para ayudarme a programar y/o recibir información?',
      fr: 'Bonjour ! 😊 Je suis arrive par le site web et je voudrais parler avec la clinique. Pouvez-vous repondre ici pour me aider a prendre rendez-vous et/ou recevoir des informations?'
    };
    
    const currentLang = localStorage.getItem('i18nextLng') || 'pt';
    const lang = currentLang.split('-')[0] as keyof typeof messages;
    return messages[lang] || messages.pt;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(getWhatsAppMessage());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Contactar via WhatsApp"
    >
      <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg">
        {t('whatsapp.tooltip', 'Fale connosco no WhatsApp')}
        <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900"></div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer">
          <svg 
            viewBox="0 0 32 32" 
            className="w-10 h-10"
            fill="white"
          >
            <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.924 0-7.435 6.050-13.485 13.485-13.485s13.485 6.050 13.485 13.485c0 7.435-6.050 13.485-13.485 13.485zM21.960 18.653c-0.322-0.161-1.905-0.939-2.201-1.047s-0.511-0.161-0.726 0.161c-0.215 0.322-0.833 1.047-1.020 1.262s-0.376 0.241-0.698 0.080c-0.322-0.161-1.359-0.501-2.588-1.596-0.957-0.853-1.603-1.907-1.790-2.229s-0.020-0.496 0.141-0.657c0.145-0.145 0.322-0.376 0.483-0.564s0.215-0.322 0.322-0.537c0.107-0.215 0.054-0.403-0.027-0.564s-0.726-1.748-0.995-2.393c-0.262-0.628-0.527-0.543-0.726-0.553-0.188-0.009-0.403-0.011-0.618-0.011s-0.564 0.080-0.860 0.403c-0.295 0.322-1.127 1.102-1.127 2.688s1.154 3.118 1.315 3.333c0.161 0.215 2.275 3.472 5.510 4.87 0.770 0.333 1.371 0.532 1.840 0.681 0.773 0.246 1.476 0.211 2.032 0.128 0.620-0.093 1.905-0.779 2.174-1.531s0.269-1.398 0.188-1.531c-0.080-0.134-0.295-0.215-0.618-0.376z"/>
          </svg>
        </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;