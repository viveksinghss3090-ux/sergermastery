import { ASSETS } from "@/lib/serger-content";
import BuyNowButton from "./BuyNowButton";

export default function Guarantee() {
  return (
    <section
      data-testid="guarantee-section"
      className="lys-section"
    >
      <div className="lys-container">
        <div className="relative max-w-4xl mx-auto rounded-[2.5rem] border border-[#E8DADA] bg-white p-8 md:p-14 lg:p-16 lys-card-shadow overflow-hidden">
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top right, #F9E8E8 0%, transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-4 flex justify-center">
              <img
                src={ASSETS.guarantee}
                alt="60-day money-back guarantee badge"
                className="w-40 md:w-52 h-auto drop-shadow-[0_8px_20px_rgba(194,65,83,0.25)]"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-8 text-center md:text-left">
              <span className="lys-eyebrow">100% risk-free</span>
              <h2 className="lys-h2 mt-3">
                Try it for <em className="italic text-[#C24153]">60 full days</em>.
              </h2>
              <p className="lys-body mt-5">
                Watch the lessons. Try the techniques. Sew along on your own
                machine. If — for any reason — you don't feel more confident
                with your serger within 60 days, just send a quick email and
                you'll get a full refund.
              </p>
              <p className="lys-body mt-3">
                No forms. No awkward questions. No risk. We can offer this
                because we've already seen what happens when women actually
                give the course a real try — they fall in love with their
                serger.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <BuyNowButton size="lg" testId="guarantee-buy-now-btn" />
                <p className="text-sm text-foreground/60 sm:max-w-xs">
                  Backed by Digistore24 secure checkout — your card details
                  are never shared with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
