import { ASSETS } from "@/lib/serger-content";

export default function MeetNicole() {
  return (
    <section
      data-testid="meet-nicole-section"
      className="lys-section"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FCEFEF 60%, #FFFFFF 100%)",
      }}
    >
      <div className="lys-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute -inset-4 rounded-[2.5rem] rotate-2"
                style={{ background: "#F9E8E8" }}
                aria-hidden
              />
              <img
                src={ASSETS.nicole}
                alt="Nicole — your Love Your Serger course tutor"
                className="relative w-full rounded-[2rem] lys-card-shadow border border-[#E8DADA]"
                loading="lazy"
              />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-2.5 lys-card-shadow border border-[#E8DADA]/70 whitespace-nowrap">
                <p className="text-sm font-medium">
                  <em className="italic text-[#C24153]">Hi, I'm Nicole.</em> Your tutor.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="lys-eyebrow">Meet your tutor</span>
            <h2 className="lys-h2 mt-4">
              Patient, kind, and genuinely <em className="italic text-[#C24153]">on your side</em>.
            </h2>
            <div className="mt-6 space-y-5 lys-body">
              <p>
                Nicole has spent years teaching women how to fall back in love
                with their serger machines. She's the kind of teacher you wish
                you'd had the first time — calm, encouraging, and never in a
                rush.
              </p>
              <p>
                Students often say her voice alone makes them want to keep
                sewing. (One even told us she rewinds lessons just to listen
                again.) She doesn't talk down to you, she doesn't skip the
                hard parts, and she doesn't assume you already know the
                "obvious" stuff.
              </p>
              <p>
                Her one goal: that you finish this course truly loving your
                serger — and the things you make with it.
              </p>
              <figure className="mt-8 pl-5 border-l-2 border-[#C24153]/40">
                <blockquote className="font-[Playfair_Display] italic text-xl md:text-2xl text-foreground/90 leading-snug">
                  "I want you to walk up to your serger the way you'd walk up
                  to a good friend — with a smile, not a sigh."
                </blockquote>
                <figcaption className="mt-3 text-sm text-foreground/65">
                  — Nicole, course instructor
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
