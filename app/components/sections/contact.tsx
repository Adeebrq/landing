import React, { useEffect, useRef } from "react";
import { BackgroundGradientAnimation } from "../../components/background-gradient-animation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLParagraphElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out", duration: 0.8 }
    });

    tl.from(headingRef.current, { opacity: 0, y: 24, immediateRender: false })
      .from(subRef.current, { opacity: 0, y: 20, immediateRender: false }, "-=0.4")
      .from(ctaRef.current, { opacity: 0, y: 18, scale: 0.98, immediateRender: false }, "-=0.4");

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const openCal = () => {
    window.open('https://cal.com/4mulate/30min', '_blank', 'noopener,noreferrer');
  };

  return (
    <BackgroundGradientAnimation
      containerClassName="h-[600px] w-full rounded-3xl relative font-lt-cushion"
    >
      <div ref={sectionRef} className="flex flex-col h-full rounded-2xl items-center justify-center text-white font-bold px-4 text-center">
        <p ref={headingRef} className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-3xl md:text-4xl lg:text-7xl py-6 pb-3">
          Enough scrolling, let&apos;s talk :)
        </p>
        <p ref={subRef} className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-sm md:text-base lg:text-lg -mt-2">
          You&apos;ve seen what we&apos;re about, now its time to see what we can do.
        </p>
        <button
          ref={ctaRef}
          type="button"
          onClick={openCal}
          className="cursor-pointer group mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] border border-gray-700 text-white font-semibold shadow-[inset_0_0_12px_0_rgba(255,255,255,0.05),inset_0_0_6px_0_rgba(200,200,200,0.15)] transition-all duration-300 hover:from-[#3a3a3a] hover:to-[#2a2a2a] hover:scale-105 hover:-translate-y-0.5"
        >
          <span className="relative overflow-hidden">
            <span className="inline-block transition-all duration-300 group-hover:translate-y-[-100%] group-hover:opacity-0">
              Book a call
            </span>
            <span className="absolute left-0 top-0 inline-block translate-y-[100%] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Let&apos;s talk
            </span>
          </span>
        </button>
      </div>
    </BackgroundGradientAnimation>
  );
}
