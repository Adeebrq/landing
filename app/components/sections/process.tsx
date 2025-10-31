import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlowingEffect } from '../../components/glowing-effect';

gsap.registerPlugin(ScrollTrigger);

const ProcessScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const processes = [
    {
      number: '1',
      title: 'Research',
      description: 'Deep dive into your needs, market trends, and competitive landscape to inform our strategy.'
    },
    {
      number: '2',
      title: 'Design',
      description: 'Craft intuitive interfaces and seamless experiences that delight users and meet objectives.'
    },
    {
      number: '3',
      title: 'Develop',
      description: 'Build robust, scalable solutions using cutting-edge technologies and best practices.'
    },
    {
      number: '4',
      title: 'Launch',
      description: 'Deploy your product to the world with comprehensive testing and ongoing support.'
    }
  ];

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollRef.current;

    // Kill previous triggers when switching modes
    ScrollTrigger.getAll().forEach(t => t.kill());

    if (!container || !scrollContainer) return;

    if (isMobile) {
      // No pin/scroll animation on mobile
      gsap.set(scrollContainer, { clearProps: 'x' });
      return;
    }

    const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.to(scrollContainer, {
      x: -scrollWidth,
      ease: 'none'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  return (
    <div className="font-lt-cushion bg-black text-white ">
      {/* Horizontal scroll section (desktop), stacked (mobile) */}
      <div ref={containerRef} className="overflow-hidden relative md:h-screen pt-12">
        {/* Header */}
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4">Our Process</h1>
          <p className="text-base md:text-xl text-slate-400">Discover the journey from your first idea to a polished product.</p>
        </div>

        <div className="flex md:items-center md:h-[calc(100vh-200px)] mt-8 md:mt-0">
          <div ref={scrollRef} className="flex flex-col md:flex-row items-stretch md:items-center gap-6 md:gap-44 px-4 md:px-8">
            {processes.map((process, index) => (
              <div
                key={index}
                className="process-box flex-shrink-0"
              >
                <div className="relative w-[92vw] max-w-[520px] md:w-[500px] h-[320px] md:h-[400px] rounded-2xl mx-auto">
                  <div className="absolute inset-0 rounded-2xl">
                    <GlowingEffect
                      blur={0}
                      borderWidth={3}
                      spread={60}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                    />
                  </div>
                  
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <div
                      className="absolute inset-0 rounded-2xl h-full transition-all duration-600 ease-in-out"
                    style={{
                      backgroundImage: 'url(/bghover2.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundImage = 'url(/bghover.png)';
                      e.currentTarget.style.backgroundSize = 'cover';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundImage = 'url(/bghover2.png)';
                      e.currentTarget.style.backgroundSize = 'cover';
                    }}
                  >
                    <div className="absolute inset-0 p-6 md:p-12 flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
                      <div className="flex flex-col justify-center max-w-[90%] md:max-w-[280px] text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6">{process.title}</h2>
                        <p className="text-base md:text-xl text-slate-400 leading-relaxed">
                          {process.description}
                        </p>
                      </div>
                      <div className="text-[96px] md:text-[180px] font-bold text-blue-500/30 leading-none">
                        {process.number}
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessScroll;