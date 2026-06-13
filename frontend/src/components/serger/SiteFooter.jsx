import { ASSETS } from "@/lib/serger-content";

export default function SiteFooter() {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-[#E8DADA] bg-white pb-28 md:pb-12"
    >
      <div className="lys-container py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={ASSETS.logo}
              alt="Love Your Serger"
              className="h-7 w-auto opacity-90"
              loading="lazy"
            />
            <span className="font-[Playfair_Display] italic text-foreground/70">
              Love Your Serger
            </span>
          </div>
          <p className="text-sm text-foreground/55 text-center md:text-right max-w-md">
            © {new Date().getFullYear()} Your Creatory · Love Your Serger.
            Online course · Lifetime access · 60-day money-back guarantee.
            Checkout securely processed by Digistore24.
          </p>
        </div>
      </div>
    </footer>
  );
}
