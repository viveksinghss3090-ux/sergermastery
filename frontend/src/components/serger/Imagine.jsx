import { ASSETS } from "@/lib/serger-content";

export default function Imagine() {
  const visions = [
    "Sitting down at your serger without that small knot in your stomach.",
    "Threading it in minutes — and actually enjoying the process.",
    "Watching your stitches form perfectly, every single time.",
    "Finishing a tote bag, a cushion, a dress — and feeling that quiet pride only sewing gives you.",
    "Sewing again on Sunday afternoon, because you want to. Not because you have to prove anything.",
  ];

  return (
    <section
      data-testid="imagine-section"
      className="lys-section relative overflow-hidden"
    >
      <div className="lys-container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <div
                className="absolute -inset-3 rounded-[2.5rem]"
                style={{ background: "linear-gradient(160deg,#FADADD,#F9E8E8)" }}
                aria-hidden
              />
              <img
                src={ASSETS.heroSecondary}
                alt="Beautiful serger threads in soft pastel colours"
                className="relative h-full w-full object-cover rounded-[2.5rem] lys-card-shadow"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="lys-eyebrow">Now imagine…</span>
            <h2 className="lys-h2 mt-4">
              What it feels like when your serger finally{" "}
              <em className="italic text-[#C24153]">makes sense</em>.
            </h2>
            <ul className="mt-8 space-y-5">
              {visions.map((v, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-lg md:text-xl text-foreground/85 leading-relaxed"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#C24153] flex-shrink-0" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 font-[Playfair_Display] italic text-2xl md:text-3xl text-foreground leading-snug">
              "It isn't magic. It's the right teacher, in the right order."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
