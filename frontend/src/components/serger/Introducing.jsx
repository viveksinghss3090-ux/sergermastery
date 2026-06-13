import { ASSETS } from "@/lib/serger-content";
import BuyNowButton from "./BuyNowButton";

export default function Introducing() {
  return (
    <section
      data-testid="introducing-section"
      className="lys-section bg-gradient-to-b from-white via-[#FDF6F6] to-white"
    >
      <div className="lys-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="lys-eyebrow">Introducing</span>
          <h2 className="lys-h2 mt-4">
            <em className="italic font-medium">Love</em> Your Serger
          </h2>
          <p className="lys-lead mt-5">
            A complete, step-by-step online course that turns confused serger
            owners into confident sewists. Taught by Nicole — already trusted
            by more than 12,000 women just like you.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2rem] -rotate-1"
                style={{ background: "#F9E8E8" }}
                aria-hidden
              />
              <img
                src={ASSETS.threadTension}
                alt="Thread tension masterclass — Love Your Serger"
                className="relative w-full rounded-[1.75rem] lys-card-shadow border border-[#E8DADA]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <h3 className="lys-h3 text-foreground">
              Why <em className="italic text-[#C24153]">this</em> course actually works
            </h3>
            <ul className="mt-6 space-y-5">
              {[
                {
                  t: "It's taught in the right order.",
                  d: "Most YouTube videos jump straight to fancy stitches. Nicole starts where you actually are — and builds your confidence from there.",
                },
                {
                  t: "It's slow when it needs to be slow.",
                  d: "The hardest moments (threading, tension, troubleshooting) get the most patience. Nothing is glossed over.",
                },
                {
                  t: "It's hands-on, not theoretical.",
                  d: "You sew along, lesson by lesson, with two real bonus projects at the end. Your hands learn alongside your eyes.",
                },
                {
                  t: "It works with your machine.",
                  d: "Every brand, every model. The dials may sit in different places — the techniques don't change.",
                },
              ].map((row) => (
                <li key={row.t} className="flex gap-4">
                  <div className="mt-1 h-7 w-7 rounded-full bg-[#F9E8E8] text-[#C24153] flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[Playfair_Display] text-lg md:text-xl text-foreground">{row.t}</p>
                    <p className="text-foreground/75 mt-1">{row.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <BuyNowButton size="lg" testId="introducing-buy-now-btn" />
              <p className="mt-3 text-sm text-foreground/60">
                Secure checkout · Lifetime access · 60-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
