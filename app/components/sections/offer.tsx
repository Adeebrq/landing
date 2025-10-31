"use client";

import React, { useEffect, useRef } from "react";
import {
  Code2,
  Palette,
  Search,
  Server,
  Smartphone,
  Brush,
  Layout,
  Globe,
} from "lucide-react";
import { GlowingEffect } from "../glowing-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TrueFocus from "../TrueFocus";

gsap.registerPlugin(ScrollTrigger);

export function OurOffer() {
  const whatWeOfferRef = useRef<HTMLDivElement>(null);
  const gridItemRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    // Animate "What we offer" first, no delay
    if (whatWeOfferRef.current) {
      gsap.fromTo(
        whatWeOfferRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whatWeOfferRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate each grid item with a delay of 0.5s after the "What we offer"
    gridItemRefs.current.forEach((el) => {
      if (!el) return;
      const icon = el.querySelector("svg");
      const title = el.querySelector("h3");
      const desc = el.querySelector("p");

      [icon, title, desc].forEach((elem) => {
        if (!elem) return;
        gsap.fromTo(
          elem,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            delay: 0.5,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });
  }, []);

  // Corrected setGridItemRef with proper typing returning void and null check
  const setGridItemRef = (el: HTMLLIElement | null, index: number): void => {
    if (el) {
      gridItemRefs.current[index] = el;
    }
  };

  return (
    <div>
        <TrueFocus
sentence='Design, Develop, Repeat.'
manualMode={false}
blurAmount={5}
borderColor="blue"
animationDuration={0.5}
pauseBetweenAnimations={1}
/>

      <ul className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 sm:grid-rows-3 sm:place-items-stretch">
        <GridItem
          ref={(el) => setGridItemRef(el, 0)}
          area="sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2"
          icon={<Code2 className="h-5 w-5 text-white dark:text-neutral-400" />}
          title="Development"
          description="Web applications built with both no-code and code platforms, everything engineered for scalability and speed."
        />
        <GridItem
          ref={(el) => setGridItemRef(el, 1)}
          area="sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2"
          icon={<Layout className="h-5 w-5 text-white dark:text-neutral-400" />}
          title="Web Design"
          description="Responsive websites and landing pages, designed for performance and clarity."
        />
        <GridItem
          ref={(el) => setGridItemRef(el, 2)}
          area="sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2"
          icon={<Smartphone className="h-5 w-5 text-white dark:text-neutral-400" />}
          title="Responsive"
          description="Pixel‑perfect layouts that adapt beautifully across every screen and device."
        />
        <GridItem
          ref={(el) => setGridItemRef(el, 3)}
          area="sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3"
          icon={<Search className="h-5 w-5 text-white dark:text-neutral-400" />}
          title="SEO"
          description="Smart SEO that attracts the right audience and turns visitors into customers."
        />

        {/* Center cell with ref for separate animation */}
        <li className="list-none sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 flex items-center justify-center">
          <div
            ref={whatWeOfferRef}
            className="font-lt-cushion h-44 w-full md:h-56 rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-semibold text-white"
          >
            What we offer
          </div>
        </li>

        <GridItem
          ref={(el) => setGridItemRef(el, 4)}
          area="sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3"
          icon={<Palette className="h-5 w-5 text-white dark:text-neutral-400" />}
          title="UI/UX"
          description="Clean, intuitive user experiences. We craft modern interfaces focusing on flow, emotion, and accessibility."
        />
        <GridItem
          ref={(el) => setGridItemRef(el, 5)}
          area="sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4"
          icon={<Server className="h-5 w-5 text-white dark:text-neutral-400" />}
          title="Full-Stack Applications"
          description="Comprehensive development of full-stack applications, delivering robust front-end and back-end solutions tailored to your business needs."
        />
        <GridItem
          ref={(el) => setGridItemRef(el, 6)}
          area="sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4"
          icon={<Brush className="h-5 w-5 text-white dark:text-neutral-400" />}
          title="Branding"
          description="Strong brand identities and custom visuals that tell your story across all platforms."
        />
        <GridItem
          ref={(el) => setGridItemRef(el, 7)}
          area="sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-4"
          icon={<Globe className="h-5 w-5 text-white dark:text-neutral-400" />}
          title="100% Satisfaction Guarantee"
          description="We stand by our work with a full satisfaction guarantee. If you're unhappy, we'll revise until it meets your expectations, no questions asked."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area?: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = React.forwardRef<HTMLLIElement, GridItemProps>(
  ({ area = "", icon, title, description }, ref) => {
    return (
      <li
        ref={ref}
        className={`min-h-[10rem] md:min-h-[12rem] list-none ${area}`}
      >
        <div className="relative h-full rounded-2xl border border-amber-50/20 p-3 md:p-4">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={60}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="flex flex-col gap-3">
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                {icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-lt-cushion text-lg md:text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="font-lt-cushion text-sm text-neutral-400">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
);
GridItem.displayName = "GridItem";
