import { AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EmergencyButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const scrollToEmergency = () => {
    if (location.pathname === '/') {
      const element = document.querySelector('#urgencias');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/');

      setTimeout(() => {
        const element = document.querySelector('#urgencias');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <button
      onClick={scrollToEmergency}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="fixed bottom-6 left-6 z-50 group"
      aria-label={t('emergencyButton.ariaLabel')}
    >
      {/* Tooltip */}
      <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg">
        {t('emergencyButton.tooltip')}
        <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900"></div>
      </div>

      {/* Botão de Urgência */}
      <div className="relative">
        {/* Animação de pulso */}
        <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75"></div>

        {/* Botão principal */}
        <div className="relative w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer">
          <AlertTriangle className="w-8 h-8 text-white" strokeWidth={2.5} />
        </div>
      </div>
    </button>
  );
};

export default EmergencyButton;
