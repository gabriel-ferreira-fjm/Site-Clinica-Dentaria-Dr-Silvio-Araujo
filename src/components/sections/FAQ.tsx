import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {

  const { t } = useTranslation();

  const whatsappNumber = "351924123784";
  const whatsappMessage = encodeURIComponent(t("whatsapp.message"));

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const faqs = [
    {
      question: "Qual é o horário de funcionamento da clínica?",
      answer: "A nossa clínica está aberta de Segunda a Sexta das 9h às 19h, e aos Sábados das 9h às 13h. Estamos encerrados aos Domingos e Feriados."
    },
    {
      question: "É necessário marcar consulta?",
      answer: "Sim, recomendamos sempre a marcação prévia para garantir o melhor atendimento. No entanto, em casos de urgência, faremos o possível para atendê-lo no próprio dia."
    },
    {
      question: "Quais são as formas de pagamento aceites?",
      answer: "Aceitamos pagamento em dinheiro, Multibanco, MBWay e transferência bancária. Também oferecemos facilidades de pagamento e financiamento para tratamentos mais extensos."
    },
    {
      question: "A clínica trabalha com seguros de saúde?",
      answer: "Sim, trabalhamos com a maioria dos seguros de saúde e subsistemas. Consulte-nos para verificar se o seu seguro está incluído na nossa lista de convenções."
    },
    {
      question: "Quanto tempo dura uma consulta de rotina?",
      answer: "Uma consulta de rotina, incluindo check-up e destartarização, dura aproximadamente 45 minutos a 1 hora, dependendo das necessidades de cada paciente."
    },
    {
      question: "Os tratamentos são dolorosos?",
      answer: "Utilizamos técnicas modernas e anestesia local para garantir o máximo conforto durante todos os procedimentos. A maioria dos pacientes não sente dor durante os tratamentos."
    },
    {
      question: "A partir de que idade as crianças devem ir ao dentista?",
      answer: "Recomendamos a primeira visita ao dentista por volta do primeiro ano de idade ou quando nascem os primeiros dentes. Consultas regulares ajudam a prevenir problemas futuros."
    },
    {
      question: "Quanto tempo dura um implante dentário?",
      answer: "Com os cuidados adequados, um implante dentário pode durar toda a vida. É fundamental manter uma boa higiene oral e realizar consultas de controlo regulares."
    },
    {
      question: "O branqueamento dentário danifica os dentes?",
      answer: "Não, quando realizado por profissionais qualificados com produtos adequados, o branqueamento é seguro e não danifica o esmalte dentário."
    },
    {
      question: "Como posso marcar uma consulta?",
      answer: "Pode marcar a sua consulta através do telefone 924 123 784, por email para geral@silvioaraujo.com, ou através do formulário de marcação aqui no nosso site."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            <HelpCircle className="w-4 h-4" />
            Dúvidas Frequentes
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reunimos as perguntas mais comuns dos nossos pacientes. Se não encontrar a resposta que procura, não hesite em contactar-nos.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border/50 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Estamos aqui para ajudar!
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            {t("whatsapp.cta")}
          </a>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
