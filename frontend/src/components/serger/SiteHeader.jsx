import { ASSETS } from "@/lib/serger-content";
import BuyNowButton from "./BuyNowButton";

export default function SiteHeader() {
  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-40 w-full border-b border-[#E8DADA]/60 bg-white/85 backdrop-blur-md"
    >
      <div className="lys-container flex items-center justify-between py-3 md:py-4">
        <a
          href="#top"
          data-testid="header-logo-link"
          className="flex items-center gap-3"
          aria-label="Love Your Serger — back to top"
        >
          <img
            src={ASSETS.logo}
            alt="Love Your Serger"
            className="h-8 md:h-9 w-auto"
            loading="eager"
          />
          <span className="hidden md:inline font-[Playfair_Display] text-base text-foreground/80 italic">
            Love Your Serger
          </span>
        </a>
        <div className="hidden md:block">
          <BuyNowButton size="sm" testId="header-buy-now-btn" />
        </div>
      </div>
    </header>
  );
}
