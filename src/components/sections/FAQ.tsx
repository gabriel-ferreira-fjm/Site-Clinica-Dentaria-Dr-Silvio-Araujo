import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

  const whatsappNumber = "351924123784";
  const whatsappMessage = encodeURIComponent(t("whatsapp.message"));
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Keys estáveis para i18n (evita traduzir texto diretamente no array)
  const faqs = [
    { key: "hours" },
    { key: "appointment" },
    { key: "payments" },
    { key: "insurance" },
    { key: "routine_duration" },
    { key: "pain" },
    { key: "kids_first_visit" },
    { key: "implant_duration" },
    { key: "whitening" },
    { key: "booking" },
  ];

  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            <HelpCircle className="w-4 h-4" />
            {t("faq.badge")}
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("faq.title.before")}{" "}
            <span className="text-primary">{t("faq.title.highlight")}</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.key}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border/50 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {t(`faq.items.${faq.key}.q`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {t(`faq.items.${faq.key}.a`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">{t("faq.cta.text")}</p>
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
