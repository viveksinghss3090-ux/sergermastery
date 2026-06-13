import { ASSETS } from "@/lib/serger-content";

export default function Projects() {
  // Mix project gallery + module carousel for a rich showcase
  const gallery = [
    { src: ASSETS.projects[0], label: "Andrea's first tote bag" },
    { src: ASSETS.projects[4], label: "Hand-stitched bag with hotel closure" },
    { src: ASSETS.projects[2], label: "Andrea's finished garment" },
    { src: ASSETS.projects[5], label: "Jacqueline's overlock dress" },
    { src: ASSETS.projects[6], label: "Yvonne's cushion cover" },
    { src: ASSETS.projects[8], label: "Sabine's decorative project" },
    { src: ASSETS.projects[1], label: "Andrea's serger seam study" },
    { src: ASSETS.projects[7], label: "Yvonne's second project" },
    { src: ASSETS.projects[9], label: "Sabine's finished piece" },
  ];

  return (
    <section
      data-testid="projects-section"
      className="lys-section"
    >
      <div className="lys-container">
        <div className="max-w-3xl">
          <span className="lys-eyebrow">Made by real students</span>
          <h2 className="lys-h2 mt-4">
            Projects sewn by women who once felt{" "}
            <em className="italic text-[#C24153]">exactly like you do now</em>.
          </h2>
          <p className="lys-lead mt-5">
            Tote bags, cushion covers, garments, decorative stitches, home
            décor. Every piece below was made by a Love Your Serger student —
            many of them total beginners just a few weeks earlier.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {gallery.map((g, i) => (
            <figure
              key={i}
              data-testid={`project-image-${i + 1}`}
              className="group relative overflow-hidden rounded-2xl bg-[#F9E8E8] aspect-[4/5]"
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/55 via-black/15 to-transparent">
                <p className="text-white text-sm font-medium drop-shadow-sm">
                  {g.label}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
