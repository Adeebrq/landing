"use client";
import React, { useEffect, useRef } from "react";
import { HeroParallax } from "../hero-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeroParallaxDemo() {
  return (
    <>
      {/* <AboutUs /> */}
      <HeroParallax products={products} />
    </>
  );
}

const AboutUs = () => {
  const headingRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);

  useEffect(() => {
    // Dynamically import GSAP and ScrollTrigger
    const loadGSAP = async () => {
      gsap.registerPlugin(ScrollTrigger);

      // Animate heading
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.6,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate first paragraph with delay
      gsap.fromTo(
        para1Ref.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: para1Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate second paragraph with delay
      gsap.fromTo(
        para2Ref.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: para2Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    };

    loadGSAP();
  }, []);

  return (
    <div className="max-w-7xl relative mx-auto pt-16 px-4 w-full left-0 top-0">
      <h1
        ref={headingRef}
        className="text-2xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-600 text-transparent bg-clip-text"
      >
        Why 4mulate?
      </h1>
      <p
        ref={para1Ref}
        className="max-w-2xl text-base font-bold md:text-xl mt-8 bg-gradient-to-tr from-white to-gray-200 text-transparent bg-clip-text"
      >
        We build scalable, SEO-optimized websites that transform your site
        into a smooth, eye-catching platform, turning your boring website into
        the front page of your digital presence that actually converts. High-impact, highly optimized digital experiences that captivate
        visitors and drive real results.
      </p>
      <p
        ref={para2Ref}
        className="max-w-2xl text-base md:text-xl mt-6 bg-gradient-to-l from-white to-gray-400 text-transparent bg-clip-text font-semibold"
      >
        Check out our previous works &darr;
      </p>
    </div>
  );
};

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];