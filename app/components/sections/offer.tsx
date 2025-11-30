"use client";

import React, { useEffect, useRef } from "react";
import {
  Code2,
  Palette,
  Search,
  Server,
  Smartphone,
  Brush,
  Globe,
} from "lucide-react";

import { GlowingEffect } from "../glowing-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TrueFocus from "../TrueFocus";
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger);

export function OurOffer() {
  const whatWeOfferRef = useRef<HTMLDivElement>(null);
  const gridItemRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    // Check if we're on iOS/mobile
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isMobile = window.innerWidth < 768;
    const timers: NodeJS.Timeout[] = [];

    // Animate "What we offer" first, no delay
    if (whatWeOfferRef.current) {
      // Set initial state - visible on iOS/mobile, hidden on desktop for animation
      const initialOpacity = isIOS || isMobile ? 1 : 0;
      const initialY = isIOS || isMobile ? 0 : 50;
      gsap.set(whatWeOfferRef.current, { opacity: initialOpacity, y: initialY });
      
      // Only animate on desktop, iOS/mobile shows immediately
      if (!isIOS && !isMobile) {
        gsap.to(whatWeOfferRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whatWeOfferRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    }

    // Animate each grid item
    gridItemRefs.current.forEach((el) => {
      if (!el) return;
      const icon = el.querySelector("svg");
      const title = el.querySelector("h3");
      const desc = el.querySelector("p");

      [icon, title, desc].forEach((elem) => {
        if (!elem) return;
        // Set initial state - visible on iOS/mobile, hidden on desktop for animation
        const initialOpacity = isIOS || isMobile ? 1 : 0;
        const initialY = isIOS || isMobile ? 0 : 20;
        gsap.set(elem, { opacity: initialOpacity, y: initialY });
        
        // Only animate on desktop, iOS/mobile shows immediately
        if (!isIOS && !isMobile) {
          gsap.to(elem, {
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
          });
        }
      });
    });

    // Cleanup function
    return () => {
      timers.forEach(timer => clearTimeout(timer));
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
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
          icon={<Image src="/dev.svg" width={10} height={10} className="h-5 w-5 text-white dark:text-neutral-400" alt="Development icon"/>}
          title="Development"
          description="Web applications built with both no-code and code platforms, everything engineered for scalability and speed."
        />
        <GridItem
          ref={(el) => setGridItemRef(el, 1)}
          area="sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2"
          icon={
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              className="h-5 w-5 text-white dark:text-neutral-400"
            >
              <title>code-editor</title>
              <g fill="none">
                <path d="M9.42383 3.39355C8.55717 3.61022 8.12343 3.71934 7.80078 3.96094C7.51632 4.17406 7.29393 4.45941 7.15625 4.78711C7.00022 5.15863 7 5.60513 7 6.49805V17.502C7 18.3949 7.00022 18.8414 7.15625 19.2129C7.29393 19.5406 7.51632 19.8259 7.80078 20.0391C8.12343 20.2807 8.55716 20.3898 9.42383 20.6064L11 21H7.40039C5.16018 21 4.03924 21.0004 3.18359 20.5645C2.43109 20.181 1.81902 19.5689 1.43555 18.8164C0.999573 17.9608 1 16.8398 1 14.5996V9.40039C1 7.16018 0.999573 6.03924 1.43555 5.18359C1.81902 4.43109 2.43109 3.81902 3.18359 3.43555C4.03924 2.99957 5.16018 3 7.40039 3H11L9.42383 3.39355ZM15 15.5C15.8284 15.5 16.5 16.1716 16.5 17C16.5 17.8284 15.8284 18.5 15 18.5H13C12.1716 18.5 11.5 17.8284 11.5 17C11.5 16.1716 12.1716 15.5 13 15.5H15ZM20 12C20.8284 12 21.5 12.6716 21.5 13.5C21.5 14.3284 20.8284 15 20 15H15C14.1716 15 13.5 14.3284 13.5 13.5C13.5 12.6716 14.1716 12 15 12H20ZM16 8.5C16.8284 8.5 17.5 9.17157 17.5 10C17.5 10.8284 16.8284 11.5 16 11.5H13C12.1716 11.5 11.5 10.8284 11.5 10C11.5 9.17157 12.1716 8.5 13 8.5H16ZM10.1533 5.50781C10.9097 5.58461 11.5 6.22334 11.5 7C11.5 7.77666 10.9097 8.41539 10.1533 8.49219L10 8.5H9C8.17157 8.5 7.5 7.82843 7.5 7C7.5 6.17157 8.17157 5.5 9 5.5H10L10.1533 5.50781Z" fill="url(#code-editor-gradient-0)" data-glass="origin" mask="url(#code-editor-mask)"></path>
                <path d="M9.42383 3.39355C8.55717 3.61022 8.12343 3.71934 7.80078 3.96094C7.51632 4.17406 7.29393 4.45941 7.15625 4.78711C7.00022 5.15863 7 5.60513 7 6.49805V17.502C7 18.3949 7.00022 18.8414 7.15625 19.2129C7.29393 19.5406 7.51632 19.8259 7.80078 20.0391C8.12343 20.2807 8.55716 20.3898 9.42383 20.6064L11 21H7.40039C5.16018 21 4.03924 21.0004 3.18359 20.5645C2.43109 20.181 1.81902 19.5689 1.43555 18.8164C0.999573 17.9608 1 16.8398 1 14.5996V9.40039C1 7.16018 0.999573 6.03924 1.43555 5.18359C1.81902 4.43109 2.43109 3.81902 3.18359 3.43555C4.03924 2.99957 5.16018 3 7.40039 3H11L9.42383 3.39355ZM15 15.5C15.8284 15.5 16.5 16.1716 16.5 17C16.5 17.8284 15.8284 18.5 15 18.5H13C12.1716 18.5 11.5 17.8284 11.5 17C11.5 16.1716 12.1716 15.5 13 15.5H15ZM20 12C20.8284 12 21.5 12.6716 21.5 13.5C21.5 14.3284 20.8284 15 20 15H15C14.1716 15 13.5 14.3284 13.5 13.5C13.5 12.6716 14.1716 12 15 12H20ZM16 8.5C16.8284 8.5 17.5 9.17157 17.5 10C17.5 10.8284 16.8284 11.5 16 11.5H13C12.1716 11.5 11.5 10.8284 11.5 10C11.5 9.17157 12.1716 8.5 13 8.5H16ZM10.1533 5.50781C10.9097 5.58461 11.5 6.22334 11.5 7C11.5 7.77666 10.9097 8.41539 10.1533 8.49219L10 8.5H9C8.17157 8.5 7.5 7.82843 7.5 7C7.5 6.17157 8.17157 5.5 9 5.5H10L10.1533 5.50781Z" fill="url(#code-editor-gradient-0)" data-glass="clone" filter="url(#code-editor-filter)" clipPath="url(#code-editor-clipPath)"></path>
                <path d="M16.5996 3C18.8398 3 19.9608 2.99957 20.8164 3.43555C21.5689 3.81902 22.181 4.43109 22.5645 5.18359C23.0004 6.03924 23 7.16018 23 9.40039V14.5996C23 16.8398 23.0004 17.9608 22.5645 18.8164C22.181 19.5689 21.5689 20.181 20.8164 20.5645C19.9608 21.0004 18.8398 21 16.5996 21H11.4004C9.16018 21 8.03924 21.0004 7.18359 20.5645C6.43109 20.181 5.81902 19.5689 5.43555 18.8164C4.99957 17.9608 5 16.8398 5 14.5996V9.40039C5 7.16018 4.99957 6.03924 5.43555 5.18359C5.81902 4.43109 6.43109 3.81902 7.18359 3.43555C8.03924 2.99957 9.16018 3 11.4004 3H16.5996ZM13 16C12.4477 16 12 16.4477 12 17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H13ZM15 12.5C14.4477 12.5 14 12.9477 14 13.5C14 14.0523 14.4477 14.5 15 14.5H20C20.5523 14.5 21 14.0523 21 13.5C21 12.9477 20.5523 12.5 20 12.5H15ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11H16C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9H13ZM9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8H10C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6H9Z" fill="url(#code-editor-gradient-1)" data-glass="blur"></path>
                <path d="M16.5996 3C18.8398 3 19.9608 2.99957 20.8164 3.43555C21.5689 3.81902 22.181 4.43109 22.5645 5.18359C23.0004 6.03924 23 7.16018 23 9.40039V14.5996C23 16.8398 23.0004 17.9608 22.5645 18.8164C22.181 19.5689 21.5689 20.181 20.8164 20.5645C19.9608 21.0004 18.8398 21 16.5996 21H11.4004C9.16018 21 8.03924 21.0004 7.18359 20.5645C6.43109 20.181 5.81902 19.5689 5.43555 18.8164C4.99957 17.9608 5 16.8398 5 14.5996V9.40039C5 7.16018 4.99957 6.03924 5.43555 5.18359C5.81902 4.43109 6.43109 3.81902 7.18359 3.43555C8.03924 2.99957 9.16018 3 11.4004 3H16.5996ZM11.4004 3.75C10.268 3.75 9.4636 3.75045 8.83398 3.80176C8.2133 3.85235 7.8287 3.94856 7.52441 4.10352C6.913 4.41508 6.41508 4.913 6.10352 5.52441C5.94856 5.8287 5.85235 6.2133 5.80176 6.83398C5.75045 7.4636 5.75 8.268 5.75 9.40039V14.5996C5.75 15.732 5.75045 16.5364 5.80176 17.166C5.85235 17.7867 5.94856 18.1713 6.10352 18.4756C6.41508 19.087 6.913 19.5849 7.52441 19.8965C7.8287 20.0514 8.2133 20.1476 8.83398 20.1982C9.4636 20.2495 10.268 20.25 11.4004 20.25H16.5996C17.732 20.25 18.5364 20.2495 19.166 20.1982C19.7867 20.1476 20.1713 20.0514 20.4756 19.8965C21.087 19.5849 21.5849 19.087 21.8965 18.4756C22.0514 18.1713 22.1476 17.7867 22.1982 17.166C22.2495 16.5364 22.25 15.732 22.25 14.5996V9.40039C22.25 8.268 22.2495 7.4636 22.1982 6.83398C22.1476 6.2133 22.0514 5.8287 21.8965 5.52441C21.5849 4.913 21.087 4.41508 20.4756 4.10352C20.1713 3.94856 19.7867 3.85235 19.166 3.80176C18.5364 3.75045 17.732 3.75 16.5996 3.75H11.4004Z" fill="url(#code-editor-gradient-2)"></path>
                <defs>
                  <linearGradient id="code-editor-gradient-0" x1="11.25" y1="3" x2="11.25" y2="21" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#575757"></stop>
                    <stop offset="1" stopColor="#151515"></stop>
                  </linearGradient>
                  <linearGradient id="code-editor-gradient-1" x1="14" y1="3" x2="14" y2="21" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E3E3E5" stopOpacity=".6"></stop>
                    <stop offset="1" stopColor="#BBBBC0" stopOpacity=".6"></stop>
                  </linearGradient>
                  <linearGradient id="code-editor-gradient-2" x1="14" y1="3" x2="14" y2="13.424" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                  </linearGradient>
                  <filter id="code-editor-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                  </filter>
                  <clipPath id="code-editor-clipPath">
                    <path d="M16.5996 3C18.8398 3 19.9608 2.99957 20.8164 3.43555C21.5689 3.81902 22.181 4.43109 22.5645 5.18359C23.0004 6.03924 23 7.16018 23 9.40039V14.5996C23 16.8398 23.0004 17.9608 22.5645 18.8164C22.181 19.5689 21.5689 20.181 20.8164 20.5645C19.9608 21.0004 18.8398 21 16.5996 21H11.4004C9.16018 21 8.03924 21.0004 7.18359 20.5645C6.43109 20.181 5.81902 19.5689 5.43555 18.8164C4.99957 17.9608 5 16.8398 5 14.5996V9.40039C5 7.16018 4.99957 6.03924 5.43555 5.18359C5.81902 4.43109 6.43109 3.81902 7.18359 3.43555C8.03924 2.99957 9.16018 3 11.4004 3H16.5996ZM13 16C12.4477 16 12 16.4477 12 17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H13ZM15 12.5C14.4477 12.5 14 12.9477 14 13.5C14 14.0523 14.4477 14.5 15 14.5H20C20.5523 14.5 21 14.0523 21 13.5C21 12.9477 20.5523 12.5 20 12.5H15ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11H16C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9H13ZM9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8H10C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6H9Z" fill="url(#code-editor-gradient-1)"></path>
                  </clipPath>
                  <mask id="code-editor-mask">
                    <rect width="100%" height="100%" fill="#FFF"></rect>
                    <path d="M16.5996 3C18.8398 3 19.9608 2.99957 20.8164 3.43555C21.5689 3.81902 22.181 4.43109 22.5645 5.18359C23.0004 6.03924 23 7.16018 23 9.40039V14.5996C23 16.8398 23.0004 17.9608 22.5645 18.8164C22.181 19.5689 21.5689 20.181 20.8164 20.5645C19.9608 21.0004 18.8398 21 16.5996 21H11.4004C9.16018 21 8.03924 21.0004 7.18359 20.5645C6.43109 20.181 5.81902 19.5689 5.43555 18.8164C4.99957 17.9608 5 16.8398 5 14.5996V9.40039C5 7.16018 4.99957 6.03924 5.43555 5.18359C5.81902 4.43109 6.43109 3.81902 7.18359 3.43555C8.03924 2.99957 9.16018 3 11.4004 3H16.5996ZM13 16C12.4477 16 12 16.4477 12 17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H13ZM15 12.5C14.4477 12.5 14 12.9477 14 13.5C14 14.0523 14.4477 14.5 15 14.5H20C20.5523 14.5 21 14.0523 21 13.5C21 12.9477 20.5523 12.5 20 12.5H15ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11H16C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9H13ZM9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8H10C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6H9Z" fill="#000"></path>
                  </mask>
                </defs>
              </g>
            </svg>
          }
          title="Web Design"
          description="Responsive websites and landing pages, designed for performance and clarity."
        />
        <GridItem
          ref={(el) => setGridItemRef(el, 2)}
          area="sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2"
          icon={<Image src="/res.svg" width={10} height={10} className="h-5 w-5 text-white dark:text-neutral-400" alt="Responsive icon" />}
          title="Responsive"
          description="Pixel‑perfect layouts that adapt beautifully across every screen and device."
        />
        <GridItem
          ref={(el) => setGridItemRef(el, 3)}
          area="sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3"
          icon={<Image src="/seo.svg" width={10} height={10} className="h-5 w-5 text-white dark:text-neutral-400" alt="SEO icon" />}
          title="SEO"
          description="Smart SEO that attracts the right audience and turns visitors into customers."
        />

        {/* Center cell with ref for separate animation */}
        <li className="list-none sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 flex items-center justify-center">
          <div
            ref={whatWeOfferRef}
            className="font-lt-cushion h-44 w-full md:h-56 rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-semibold text-white"
            style={{ 
              opacity: 1,
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
          >
            What we offer
          </div>
        </li>

        <GridItem
          ref={(el) => setGridItemRef(el, 4)}
          area="sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3"
          icon={<Image src="/uiux.svg" width={10} height={10} className="h-5 w-5 text-white dark:text-neutral-400" alt="UI-UX icon"/>}
          title="UI/UX"
          description="Clean, intuitive user experiences. We craft modern interfaces focusing on flow, emotion, and accessibility."
        />
        <GridItem
          ref={(el) => setGridItemRef(el, 5)}
          area="sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4"
          icon={<Image src="/fullstack.svg" width={10} height={10} className="h-5 w-5 text-white dark:text-neutral-400" alt="Full-stack app icon" />}
          title="Full-Stack Applications"
          description="Comprehensive development of full-stack applications, delivering robust front-end and back-end solutions tailored to your business needs."
        />
        <GridItem
          ref={(el) => setGridItemRef(el, 6)}
          area="sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4"
          icon={<Image src="/branding.svg" width={10} height={10} className="h-5 w-5 text-white dark:text-neutral-400" alt="Branding icon" />}
          title="Branding"
          description="Strong brand identities and custom visuals that tell your story across all platforms."
        />
        <GridItem
          ref={(el) => setGridItemRef(el, 7)}
          area="sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-4"
          icon={<Image src="/satis.svg" width={10} height={10} className="h-5 w-5 text-white dark:text-neutral-400" alt="Satisfaction icon"  />}
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
                <h3 
                  className="font-lt-cushion text-lg md:text-xl font-semibold text-white"
                  style={{ 
                    opacity: 1,
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  {title}
                </h3>
                <p 
                  className="font-lt-cushion text-sm text-neutral-400"
                  style={{ 
                    opacity: 1,
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
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
