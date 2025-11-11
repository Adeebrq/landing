"use client";
import React, { useEffect, useRef } from "react";
import { HeroParallax } from "../hero-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";





export function HeroParallaxDemo() {
  return (
    <>
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
    title: "Gotham - custom chat room",
    link: "https://gotham.4mulate.tech/",
    thumbnail: "/gotham.webp",
  },
  {
    title: "DigiHub - Digital marketing",
    link: "https://placid-emoji-894267.framer.app/",
    thumbnail: "/framer.webp",
  },
  {
    title: "saroscope - Liquidity pool checker",
    link: "https://saroscope.4mulate.tech",
    thumbnail: "/saroscope.webp",
  },
  {
    title: "4mulate - Agency landing page",
    link: "https://www.4mulate.tech/",
    thumbnail: "/mulate.webp",
  },
  {
    title: "Subzero - Cryptocurrency trading platform",
    link: "http://subzero.4mulate.tech/",
    thumbnail: "/subzero.webp"
  },
  {
    title: "Crypto Chain - Cryptocurrency AI Saas",
    link: "https://peaceful-operators-619463.framer.app/",
    thumbnail: "/cryptochain.webp"
  },
  {
    title: "The pod - Event Hosting",
    link: "https://pod.4mulate.tech/",
    thumbnail: "/thepod.webp"
  },
  {
    title: "DigiHub- Digital marketing",
    link: "https://placid-emoji-894267.framer.app/",
    thumbnail: "/framer.webp",
  },
  {
    title: "Gotham - custom chat room",
    link: "https://gotham.4mulate.tech/",
    thumbnail: "/gotham.webp",
  },
  {
    title: "saroscope - Liquidity pool checker",
    link: "https://saroscope.4mulate.tech",
    thumbnail: "/saroscope.webp",
  },
  {
    title: "4mulate - Agency landing page",
    link: "https://www.4mulate.tech/",
    thumbnail: "/mulate.webp",
  },
  {
    title: "Subzero - Cryptocurrency trading platform",
    link: "http://subzero.4mulate.tech/",
    thumbnail: "/subzero.webp"
  },
  {
    title: "Crypto Chain - Cryptocurrency AI Saas",
    link: "https://peaceful-operators-619463.framer.app/",
    thumbnail: "/cryptochain.webp"
  },
  {
    title: "saroscope - Liquidity pool checker",
    link: "https://saroscope.4mulate.tech",
    thumbnail: "/saroscope.webp",
  },
  {
    title: "DigiHub - Digital marketing",
    link: "https://placid-emoji-894267.framer.app/",
    thumbnail: "/framer.webp",
  },
  {
    title: "saroscope - Liquidity pool checker",
    link: "https://saroscope.4mulate.tech",
    thumbnail: "/saroscope.webp",
  },
];