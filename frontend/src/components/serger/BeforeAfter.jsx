export default function BeforeAfter() {
  const before = [
    "Confused by the manual",
    "Afraid to thread the machine",
    "Frustrated with broken threads",
    "Skipped stitches & wavy seams",
    "Serger living in the corner",
    "Avoiding sewing altogether",
  ];
  const after = [
    "Confident at every dial",
    "Threads it in minutes",
    "Knows exactly how to fix tension",
    "Beautiful, even, professional stitches",
    "Serger out, plugged in, in use",
    "Sewing for the joy of it again",
  ];

  return (
    <section
      data-testid="before-after-section"
      className="lys-section"
    >
      <div className="lys-container">
        <div className="max-w-3xl">
          <span className="lys-eyebrow">The transformation</span>
          <h2 className="lys-h2 mt-4">
            Before the course · After the course
          </h2>
          <p className="lys-lead mt-5">
            Same machine. Same fabric. Completely different sewist.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          <div
            data-testid="before-card"
            className="rounded-3xl border border-[#E8DADA] bg-white p-7 md:p-9"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-8 w-8 rounded-full bg-foreground/5 text-foreground/50 flex items-center justify-center text-sm font-semibold">
                A
              </span>
              <p className="text-sm uppercase tracking-[0.18em] text-foreground/60">
                Before
              </p>
            </div>
            <h3 className="lys-h3 text-foreground/90 mb-5">
              The way it was
            </h3>
            <ul className="space-y-3">
              {before.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-foreground/70 line-through decoration-[#C24153]/40 decoration-2"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/30" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-testid="after-card"
            className="relative rounded-3xl p-7 md:p-9 text-foreground overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, #F9E8E8 0%, #FDF1F2 60%, #FFFFFF 100%)",
              border: "1px solid #E8DADA",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-8 w-8 rounded-full bg-[#C24153] text-white flex items-center justify-center text-sm font-semibold">
                B
              </span>
              <p className="text-sm uppercase tracking-[0.18em] text-[#C24153]">
                After
              </p>
            </div>
            <h3 className="lys-h3 mb-5">
              The way it <em className="italic text-[#C24153]">will be</em>
            </h3>
            <ul className="space-y-3">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1.5 h-5 w-5 rounded-full bg-white text-[#C24153] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span className="font-medium">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
