import BuyNowButton from "./BuyNowButton";

export default function FinalClose() {
  return (
    <section
      data-testid="final-close-section"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F9E8E8 0%, #FCEFEF 60%, #FFFFFF 100%)",
      }}
    >
      <div className="lys-container py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <span className="lys-eyebrow">Today is a good day to start</span>
          <h2 className="lys-h2 mt-5 leading-[1.08]">
            Your serger has been waiting.{" "}
            <em className="italic text-[#C24153]">So have you.</em>
          </h2>

          <div className="mt-8 space-y-5 lys-body text-foreground/85">
            <p>
              You already know how this story ends if nothing changes — the
              machine stays in its corner, the projects stay in your head,
              and another month slips by without that feeling of finishing
              something beautiful.
            </p>
            <p>
              But it doesn't have to be that way. In one quiet evening from
              now, you could be threading your machine without a single
              swear word. In a weekend, you could be holding a tote bag you
              actually sewed yourself.
            </p>
            <p className="font-[Playfair_Display] italic text-xl md:text-2xl text-foreground">
              You don't need a different machine. You just need someone to
              teach you how to use the one you already have.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <BuyNowButton size="xl" testId="final-close-buy-now-btn" />
            <p className="text-sm text-foreground/60">
              Lifetime access · 60-day money-back guarantee · Works with every serger
            </p>
          </div>

          <p className="mt-10 font-[Playfair_Display] italic text-lg md:text-xl text-foreground/75">
            With love, <span className="text-[#C24153]">Nicole</span>
          </p>
        </div>
      </div>
    </section>
  );
}
