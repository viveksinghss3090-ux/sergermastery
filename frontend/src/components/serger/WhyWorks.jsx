export default function WhyWorks() {
  const reasons = [
    {
      icon: "M4 6h16M4 12h16M4 18h16",
      title: "Step-by-step instruction",
      body: "Lessons follow a tested order — you build skill on skill, not chaos on chaos.",
    },
    {
      icon: "M12 14c2.5 0 4-1.5 4-4s-1.5-4-4-4-4 1.5-4 4 1.5 4 4 4zm0 0v6m-4 0h8",
      title: "Made for beginners",
      body: "Zero sewing background required. Plain language, gentle pace, no jargon.",
    },
    {
      icon: "M12 8v8m4-4H8",
      title: "Learn at your own pace",
      body: "Five minutes a day or two hours on a Sunday — it's entirely up to you.",
    },
    {
      icon: "M6 5h12v14H6z M9 9l6 3-6 3V9z",
      title: "Pause & replay anytime",
      body: "Stuck on a tricky moment? Rewind it. As many times as you like. Forever.",
    },
    {
      icon: "M12 2l9 4-9 4-9-4 9-4zm0 8v10M3 6v10l9 4 9-4V6",
      title: "Lifetime access",
      body: "Pay once. Watch forever. Across every device you own.",
    },
    {
      icon: "M3 12h18M12 3v18",
      title: "Works with every serger",
      body: "Brother, Janome, Singer, Bernina, Juki, Pfaff — every model, every brand.",
    },
  ];

  return (
    <section
      data-testid="why-works-section"
      className="lys-section bg-[#FDFBFB]"
    >
      <div className="lys-container">
        <div className="max-w-3xl">
          <span className="lys-eyebrow">Why this course works</span>
          <h2 className="lys-h2 mt-4">
            Everything you need.{" "}
            <em className="italic text-[#C24153]">Nothing in the way.</em>
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              data-testid={`why-works-card-${i + 1}`}
              className="bg-white rounded-2xl p-7 border border-[#E8DADA]/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(194,65,83,0.18)]"
            >
              <div className="h-12 w-12 rounded-2xl bg-[#F9E8E8] text-[#C24153] flex items-center justify-center mb-5">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d={r.icon} />
                </svg>
              </div>
              <h3 className="font-[Playfair_Display] text-xl text-foreground mb-2">
                {r.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
