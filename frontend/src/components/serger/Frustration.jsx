export default function Frustration() {
  const pains = [
    {
      title: "The threading hour",
      body:
        "You sit down to sew, and an hour later you're still squinting at coloured loops, holding tweezers, on the verge of giving up.",
    },
    {
      title: "Tension you can't trust",
      body:
        "Your seams look fine on one side, terrible on the other — and you have no idea which dial actually fixes it.",
    },
    {
      title: "Threads that snap mid-seam",
      body:
        "Right when the project was looking beautiful. And now you have to start over. Again.",
    },
    {
      title: "Skipped stitches & ugly hems",
      body:
        "You watched a YouTube video. You read the manual. Nothing matches what's happening on your machine.",
    },
    {
      title: "A manual that helps no one",
      body:
        "Three pages of small print, zero clarity, and somehow it makes you feel even less confident than before.",
    },
    {
      title: "A serger collecting dust",
      body:
        "It cost real money. It was supposed to change your sewing. Instead, it's sitting in the corner, judging you.",
    },
  ];

  return (
    <section
      data-testid="frustration-section"
      className="lys-section bg-[#FDFBFB] relative"
    >
      <div className="lys-container">
        <div className="max-w-3xl">
          <span className="lys-eyebrow">If this sounds familiar…</span>
          <h2 className="lys-h2 mt-4 text-foreground">
            You didn't buy a serger to feel{" "}
            <em className="italic font-medium text-[#C24153]">frustrated</em>.
          </h2>
          <p className="lys-lead mt-6">
            And yet — somehow — that's exactly where most serger owners end up.
            Not because the machine is bad, and not because you're not smart
            enough. Sergers just aren't taught the way they should be.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {pains.map((p) => (
            <div
              key={p.title}
              data-testid={`frustration-card-${p.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className="bg-white rounded-2xl p-6 md:p-7 border border-[#E8DADA]/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(194,65,83,0.18)]"
            >
              <div className="h-9 w-9 rounded-full bg-[#F9E8E8] text-[#C24153] flex items-center justify-center mb-4 font-[Playfair_Display] text-lg">
                ·
              </div>
              <h3 className="font-[Playfair_Display] text-xl text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 md:mt-14 text-center text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          You're not alone. And you are{" "}
          <em className="italic text-[#C24153]">absolutely</em> not the
          problem.
        </p>
      </div>
    </section>
  );
}
