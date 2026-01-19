import { useTranslation } from 'react-i18next';
import { AlertTriangle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Emergency = () => {
  const { t } = useTranslation();

  const emergencySymptoms = [
    t('emergency.symptoms.1', 'Dor de dentes intensa'),
    t('emergency.symptoms.2', 'Inchaço facial'),
    t('emergency.symptoms.3', 'Sangramento que não para'),
    t('emergency.symptoms.4', 'Dente partido ou avulsionado'),
    t('emergency.symptoms.5', 'Abcesso dentário'),
  ];

  return (
    <section id="urgencias" className="py-20 bg-gradient-to-br from-red-600 to-red-700">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <AlertTriangle className="w-16 h-16 mb-6 text-red-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('emergency.title', 'Urgências Dentárias')}
            </h2>
            <p className="text-red-100 text-lg mb-8">
              {t('emergency.subtitle', 'Situações de emergência requerem atenção imediata. Se apresentar algum destes sintomas, contacte-nos de imediato.')}
            </p>

            <ul className="space-y-3 mb-8">
              {emergencySymptoms.map((symptom) => (
                <li key={symptom} className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  {symptom}
                </li>
              ))}
            </ul>

            <Button asChild variant="secondary" size="lg">
              <a href="tel:+351924123784" className="gap-2">
                <Phone className="w-5 h-5" />
                {t('emergency.callNow', 'Ligar Agora: +351 924 123 784')}
              </a>
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6">
              {t('emergency.whatToDo.title', 'O Que Fazer em Caso de Urgência')}
            </h3>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <p className="text-white font-medium">
                    {t('emergency.whatToDo.1.title', 'Mantenha a calma')}
                  </p>
                  <p className="text-red-100 text-sm">
                    {t('emergency.whatToDo.1.subtitle', 'A ansiedade pode piorar a dor')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <p className="text-white font-medium">
                    {t('emergency.whatToDo.2.title', 'Contacte-nos imediatamente')}
                  </p>
                  <p className="text-red-100 text-sm">
                    {t('emergency.whatToDo.2.subtitle', 'Temos slots de urgência reservados')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <p className="text-white font-medium">
                    {t('emergency.whatToDo.3.title', 'Siga as instruções')}
                  </p>
                  <p className="text-red-100 text-sm">
                    {t('emergency.whatToDo.3.subtitle', 'Daremos orientações até chegar')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
