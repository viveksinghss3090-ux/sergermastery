import { ASSETS } from "@/lib/serger-content";
import BuyNowButton from "./BuyNowButton";

const Star = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#E5A23A" aria-hidden>
    <path d="M12 2l2.9 6.9L22 9.7l-5.5 4.8L18.1 22 12 18.3 5.9 22l1.6-7.5L2 9.7l7.1-.8L12 2z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FCEFEF 0%, #FFF8F8 55%, #FFFFFF 100%)",
      }}
    >
      <div className="lys-container pt-14 md:pt-20 lg:pt-24 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left copy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="lys-eyebrow">The Serger Course Women Love</span>
              <span className="h-px w-10 bg-[#C24153]/40" />
            </div>

            <h1 className="lys-h1 text-foreground">
              Finally feel <em className="text-[#C24153] not-italic font-medium italic font-[Playfair_Display]">confident</em>{" "}
              at your serger machine —{" "}
              <span className="text-foreground/90">without the threading drama.</span>
            </h1>

            <p className="lys-lead mt-6 max-w-xl">
              The friendly, step-by-step online course that takes your serger
              out of the corner and back to the sewing table — so you can
              create beautiful seams, finished projects, and the kind of work
              you're genuinely proud of.
            </p>

            <ul className="mt-8 space-y-3 text-[17px] text-foreground/85">
              {[
                "Threading mastered in 2 simple methods",
                "All 22 serger stitch types, clearly explained",
                "Watch at your own pace — pause and replay forever",
                "Works with every serger / overlocker brand",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-[#C24153]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
              <BuyNowButton size="xl" testId="hero-buy-now-btn" />
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <div className="flex items-center -space-x-2">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="h-8 w-8 rounded-full border-2 border-white"
                      style={{
                        background: `linear-gradient(135deg, hsl(${
                          340 + n * 4
                        }, 60%, 80%), hsl(${340 + n * 4}, 50%, 70%))`,
                      }}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <p className="leading-tight">
                    Loved by <strong className="text-foreground">12,000+ students</strong>
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-foreground/55">
              Lifetime access &nbsp;·&nbsp; 60-day money-back guarantee &nbsp;·&nbsp; All serger models
            </p>
          </div>

          {/* Right image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div
                className="absolute -inset-4 rounded-[2rem] -z-0"
                style={{ background: "linear-gradient(135deg,#F9E8E8,#FADADD)" }}
                aria-hidden
              />
              <img
                src={ASSETS.heroPrimary}
                alt="A woman sewing confidently on her serger machine"
                className="relative z-10 h-full w-full object-cover rounded-[2rem] lys-card-shadow"
                loading="eager"
              />
              <div className="absolute -bottom-6 -left-4 md:-left-8 z-20 bg-white rounded-2xl px-5 py-4 lys-card-shadow border border-[#E8DADA]/70 w-[14rem]">
                <p className="text-xs uppercase tracking-[0.15em] text-foreground/60">
                  Includes
                </p>
                <p className="font-[Playfair_Display] text-lg leading-snug mt-1">
                  44 HD video lessons
                </p>
                <p className="text-sm text-foreground/70">6+ hours of training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
