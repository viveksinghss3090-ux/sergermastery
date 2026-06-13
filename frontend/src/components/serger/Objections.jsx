import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { OBJECTIONS } from "@/lib/serger-content";

export default function Objections() {
  return (
    <section
      data-testid="objections-section"
      className="lys-section bg-[#FDFBFB]"
    >
      <div className="lys-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="lys-eyebrow">Still wondering?</span>
          <h2 className="lys-h2 mt-4">
            Honest answers to the things{" "}
            <em className="italic text-[#C24153]">you're quietly worried about</em>.
          </h2>
          <p className="lys-lead mt-5">
            We've heard them all — and the answer is almost always the same:
            yes, this is for you.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-3"
            data-testid="objections-accordion"
          >
            {OBJECTIONS.map((o, i) => (
              <AccordionItem
                key={i}
                value={`objection-${i}`}
                className="bg-white border border-[#E8DADA] rounded-2xl px-5 md:px-7"
                data-testid={`objection-item-${i + 1}`}
              >
                <AccordionTrigger
                  className="text-left font-[Playfair_Display] text-lg md:text-xl text-foreground hover:no-underline py-5"
                  data-testid={`objection-trigger-${i + 1}`}
                >
                  {o.q}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-foreground/80 leading-relaxed pb-6 pr-2">
                  {o.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
