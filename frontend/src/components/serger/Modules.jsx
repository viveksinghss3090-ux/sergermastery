import { MODULES } from "@/lib/serger-content";

export default function Modules() {
  return (
    <section
      data-testid="modules-section"
      className="lys-section bg-[#FDFBFB]"
    >
      <div className="lys-container">
        <div className="max-w-3xl">
          <span className="lys-eyebrow">What you'll learn</span>
          <h2 className="lys-h2 mt-4">
            From "what does this dial do?" to{" "}
            <em className="italic text-[#C24153]">"look what I just made."</em>
          </h2>
          <p className="lys-lead mt-5">
            44 short, focused HD video lessons. 6+ hours of teaching. Every
            module is built around one thing: a real, visible result you can
            feel proud of.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
          {MODULES.map((m, i) => (
            <article
              key={m.title}
              data-testid={`module-card-${i + 1}`}
              className="group relative bg-white border border-[#E8DADA]/70 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(194,65,83,0.25)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#F9E8E8]">
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-[Playfair_Display] italic text-[#C24153] text-lg">
                    Module {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-[#E8DADA]" />
                </div>
                <h3 className="font-[Playfair_Display] text-2xl md:text-[1.65rem] leading-snug text-foreground">
                  {m.title}
                </h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">
                  {m.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center text-foreground/70 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.18em]">
            Plus · Cleaning & oiling · Differential feed · Specialty presser feet · Beads & sequins · Wave hem · Gathering & ruffling
          </p>
        </div>
      </div>
    </section>
  );
}
