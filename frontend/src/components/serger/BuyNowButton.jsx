import React from "react";
import { CTA_URL } from "@/lib/serger-content";
import { cn } from "@/lib/utils";

/**
 * The ONLY CTA button on the page. Always renders the exact text "BUY NOW".
 * Variants: solid (primary deep-rose pill) | outline (rose outline pill)
 */
const BuyNowButton = React.forwardRef(function BuyNowButton(
  { variant = "solid", size = "lg", className = "", testId, label = "BUY NOW", ...rest },
  ref
) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-wide rounded-full transition-all duration-300 select-none whitespace-nowrap focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C24153]/30 active:scale-[0.98]";

  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-base md:text-lg",
    xl: "px-12 py-6 text-lg md:text-xl",
  };

  const variants = {
    solid:
      "bg-[#C24153] text-white shadow-[0_10px_30px_-8px_rgba(194,65,83,0.55)] hover:bg-[#A73545] hover:shadow-[0_18px_40px_-10px_rgba(194,65,83,0.65)] hover:-translate-y-[2px]",
    outline:
      "bg-white text-[#C24153] border-2 border-[#C24153] hover:bg-[#C24153] hover:text-white hover:-translate-y-[2px]",
    ghost:
      "bg-[#F9E8E8] text-[#A73545] hover:bg-[#F2D3D6] hover:-translate-y-[1px]",
  };

  return (
    <a
      ref={ref}
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={testId}
      aria-label="Buy Now — opens secure checkout in a new tab"
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      <span className="relative inline-flex items-center gap-2">
        {label}
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M13 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  );
});

export default BuyNowButton;
