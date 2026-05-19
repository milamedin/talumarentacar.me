/*
 * Design: Montenegrin Trust & Warmth
 * FAQ: Accordion with smooth animations, forest green accents
 */
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const { t } = useLanguage();

  // Indices 1..14 minus 9 (SIM card / internet question removed).
  const faqs = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14].map((i) => ({
    q: t(`faq.q${i}`),
    a: t(`faq.a${i}`),
  }));

  return (
    <section id="faq" className="py-20 lg:py-28 bg-cream">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-forest mb-4">
            {t("faq.title")}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-forest py-5 text-base [&[data-state=open]]:text-forest">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
