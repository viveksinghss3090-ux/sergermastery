import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/serger-content";

export default function FAQ() {
  return (
    <section
      data-testid="faq-section"
      className="lys-section bg-[#FDFBFB]"
    >
      <div className="lys-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="lys-eyebrow">Frequently asked</span>
          <h2 className="lys-h2 mt-4">Everything else you might want to know</h2>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-3"
            data-testid="faq-accordion"
          >
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white border border-[#E8DADA] rounded-2xl px-5 md:px-7"
                data-testid={`faq-item-${i + 1}`}
              >
                <AccordionTrigger
                  className="text-left font-[Playfair_Display] text-lg md:text-xl text-foreground hover:no-underline py-5"
                  data-testid={`faq-trigger-${i + 1}`}
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-foreground/80 leading-relaxed pb-6 pr-2">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
