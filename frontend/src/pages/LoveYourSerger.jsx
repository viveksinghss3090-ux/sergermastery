import { useEffect } from "react";
import SiteHeader from "@/components/serger/SiteHeader";
import Hero from "@/components/serger/Hero";
import Frustration from "@/components/serger/Frustration";
import Imagine from "@/components/serger/Imagine";
import Introducing from "@/components/serger/Introducing";
import Modules from "@/components/serger/Modules";
import BeforeAfter from "@/components/serger/BeforeAfter";
import Testimonials from "@/components/serger/Testimonials";
import Projects from "@/components/serger/Projects";
import WhyWorks from "@/components/serger/WhyWorks";
import MeetNicole from "@/components/serger/MeetNicole";
import Objections from "@/components/serger/Objections";
import Guarantee from "@/components/serger/Guarantee";
import FAQ from "@/components/serger/FAQ";
import FinalClose from "@/components/serger/FinalClose";
import SiteFooter from "@/components/serger/SiteFooter";
import StickyMobileBar from "@/components/serger/StickyMobileBar";

export default function LoveYourSerger() {
  // Subtle on-scroll fade-up for any element marked with .fade-up
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div data-testid="love-your-serger-page" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Frustration />
        <Imagine />
        <Introducing />
        <Modules />
        <BeforeAfter />
        <Testimonials />
        <Projects />
        <WhyWorks />
        <MeetNicole />
        <Objections />
        <Guarantee />
        <FAQ />
        <FinalClose />
      </main>
      <SiteFooter />
      <StickyMobileBar />
    </div>
  );
}
