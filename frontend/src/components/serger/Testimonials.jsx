import { TESTIMONIALS } from "@/lib/serger-content";
import BuyNowButton from "./BuyNowButton";

const Quote = () => (
  <svg
    width="36"
    height="28"
    viewBox="0 0 36 28"
    fill="#F9E8E8"
    aria-hidden
    className="absolute -top-2 -left-1"
  >
    <path d="M0 28V18C0 8.06 6.06 0 16 0v6c-5.52 0-10 4.48-10 10h10v12H0zm20 0V18C20 8.06 26.06 0 36 0v6c-5.52 0-10 4.48-10 10h10v12H20z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="lys-section bg-[#FDFBFB]"
    >
      <div className="lys-container">
        <div className="max-w-3xl">
          <span className="lys-eyebrow">12,000+ happy students</span>
          <h2 className="lys-h2 mt-4">
            What real students say about{" "}
            <em className="italic text-[#C24153]">Love Your Serger</em>
          </h2>
          <p className="lys-lead mt-5">
            These are real reviews from women who were stuck — until they
            weren't.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              data-testid={`testimonial-card-${i + 1}`}
              className="relative bg-white rounded-3xl p-7 md:p-8 border border-[#E8DADA]/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(194,65,83,0.20)]"
            >
              <Quote />
              <blockquote className="relative font-[Playfair_Display] text-lg md:text-xl leading-snug text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold"
                  style={{
                    background: `linear-gradient(135deg, hsl(${
                      340 + i * 8
                    }, 55%, 70%), hsl(${330 + i * 8}, 55%, 60%))`,
                  }}
                  aria-hidden
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-foreground/60">Verified student</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 text-center">
          <BuyNowButton size="lg" testId="testimonials-buy-now-btn" />
        </div>
      </div>
    </section>
  );
}
