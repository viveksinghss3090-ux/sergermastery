import BuyNowButton from "./BuyNowButton";

export default function StickyMobileBar() {
  return (
    <div
      data-testid="sticky-mobile-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-md border-t border-[#E8DADA] shadow-[0_-10px_30px_rgba(0,0,0,0.08)]"
    >
      <BuyNowButton
        size="lg"
        className="w-full"
        testId="sticky-mobile-buy-now-btn"
      />
    </div>
  );
}
