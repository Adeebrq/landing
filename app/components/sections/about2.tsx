import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface StepData {
  id: string;
  number: string;
  title: string;
  description: string;
  rotation: string;
}

const steps: StepData[] = [
  {
    id: "01",
    number: "01",
    title: "Project introduction",
    description: "We discuss goals, tasks, and the future website structure to understand the scope and strategy.",
    rotation: "-rotate-2",
  },
  {
    id: "02",
    number: "02",
    title: "50% upfront payment",
    description: "The deposit confirms the project start and reserves time specifically for your project.",
    rotation: "rotate-1",
  },
  {
    id: "03",
    number: "03",
    title: "Analysis & research",
    description: "I study the niche, competitors, and audience needs. I create a prototype based on this analysis.",
    rotation: "-rotate-1",
  },
  {
    id: "04",
    number: "04",
    title: "Design",
    description: "I create the visual style, then design all website pages and adapt them for different devices.",
    rotation: "rotate-2",
  },
  {
    id: "05",
    number: "05",
    title: "Development & project handoff",
    description: "I build the website, set up all features, forms, and integrations, optimize it, and deliver the finished project.",
    rotation: "-rotate-1",
  },
];

const Workflow = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "back.out(1.4)", duration: 0.8 } });

      // 1. Reveal Title
      tl.from(".workflow-title", {
        y: -20,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      // 2. Animate SVG Line
      const path = document.querySelector(".connection-line path") as SVGPathElement;
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        tl.to(path, {
          strokeDashoffset: 0,
          duration: 2.0,
          ease: "power1.inOut",
        }, "-=0.4");
      }

      // 3. Reveal Cards
      tl.from(".workflow-card", {
        y: 50,
        autoAlpha: 0, 
        scale: 0.9,
        stagger: 0.2,
      }, "-=1.5");

      // 4. Reveal Folder
      tl.from(".workflow-folder", {
        scale: 0,
        autoAlpha: 0,
        rotation: -10,
      }, "-=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen bg-[#F3F4F7] flex flex-col items-center justify-center py-20 relative overflow-hidden"
      style={{
        backgroundImage: "repeating-linear-gradient(#F3F4F7 0px, #F3F4F7 24px, #E5E7EB 25px)",
        backgroundSize: "100% 25px"
      }}
    >
      <h2 className="workflow-title text-3xl font-bold text-gray-800 mb-16 relative z-20">Step-by-Step Workflow</h2>

      <div className="relative w-full max-w-6xl px-4">
        
        {/* SVG Background Line */}
        <svg 
          className="connection-line absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block" 
          viewBox="0 0 1100 600" 
          preserveAspectRatio="none"
          style={{ overflow: 'visible' }}
        >
          <path 
            d="M 180 150 C 350 150, 400 130, 550 140 C 750 150, 800 160, 920 180 C 1050 200, 1050 350, 920 380 C 700 420, 400 380, 200 400 C 100 410, 50 450, 180 480 C 400 520, 600 480, 800 480"
            fill="none" 
            stroke="#9CA3AF" 
            strokeWidth="2" 
            strokeDasharray="6 6"
          />
        </svg>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 relative z-20">
          
          {steps.slice(0, 3).map((step) => (
            <div key={step.id} className="flex justify-center">
              <StickyCard step={step} />
            </div>
          ))}

          <div className="flex justify-center md:mt-12">
            <StickyCard step={steps[3]} />
          </div>

          <div className="flex justify-center md:mt-12">
             <StickyCard step={steps[4]} />
          </div>

          <div className="flex justify-center items-center md:mt-12">
            <div className="workflow-folder flex flex-col items-center group cursor-pointer relative z-30">
              <div className="relative w-64 h-48 bg-[#1A1E29] rounded-xl shadow-2xl flex items-center justify-center transform rotate-2 group-hover:scale-105 group-hover:rotate-0 transition-all duration-300">
                <div className="absolute -top-4 left-0 w-24 h-8 bg-[#1A1E29] rounded-t-lg"></div>
                
                <div className="absolute top-2 left-4 bg-white/90 w-16 h-8 rounded-sm shadow-md flex items-center justify-center backdrop-blur-sm">
                   <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                   <div className="w-8 h-1 bg-gray-200 rounded"></div>
                </div>
                
                <div className="absolute top-0 right-8 translate-y-[-5px]">
                    <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 24 24" 
                        fill="white" 
                        className="drop-shadow-lg"
                    >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
              </div>
              <p className="mt-6 font-bold text-gray-800 text-lg group-hover:text-black transition-colors">Ready-to-launch website</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const StickyCard = ({ step }: { step: StepData }) => {
  return (
    <div 
      className={`workflow-card relative w-full max-w-sm bg-white rounded-3xl p-2 shadow-xl ${step.rotation} z-30 hover:z-40 hover:scale-105 transition-all duration-300`}
    >
      {/* Pin Element */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-50">
         <div className="relative w-6 h-6 rounded-full bg-gray-800 shadow-md">
            <div className="absolute top-1 left-1 w-2 h-2 bg-gray-600 rounded-full opacity-50"></div>
         </div>
      </div>

      <div className="bg-[#F0F2F5] rounded-2xl p-6 h-full min-h-[240px] flex flex-col">
        <span className="text-4xl text-gray-400 font-bold mb-2 opacity-60" style={{ fontFamily: 'cursive' }}>
          {step.number}
        </span>
        
        <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-tight">
          {step.title}
        </h3>
        
        <p className="text-sm text-gray-600 leading-relaxed font-medium">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default Workflow;