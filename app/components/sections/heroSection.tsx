"use client"
import GradientBlinds from "../GradientBlinds";
import GradualBlur from "../GradualBlur";
import StaggeredMenu from "../StaggeredMenu";

import img from "../../assets/logo.png"

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home section', link: '#home' },
  { label: 'About', ariaLabel: 'Go to about section', link: '#about' },
  { label: 'Process', ariaLabel: 'Go to process section', link: '#process' },
  { label: 'Services', ariaLabel: 'View our services', link: '#offer' },
  { label: 'Pricing', ariaLabel: 'Go to pricing section', link: '#pricing' },
  { label: 'FAQ', ariaLabel: 'Go to faq section', link: '#faq' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' },
]

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

function heroSection() {
  const scrollToPricing = () => {
    const element = document.querySelector('#pricing');
    if (element && 'scrollIntoView' in element) {
      (element as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="z-50 h-screen w-full relative">


<StaggeredMenu
     position="right"
     items={menuItems}
     socialItems={socialItems}
     displayItemNumbering={true}
     menuButtonColor="#fff"
     openMenuButtonColor="#fff"
     changeMenuColorOnOpen={true}
     colors={['#B19EEF', '#5227FF']}
     logoUrl="../../assets/logo.png"
     accentColor="#2600ff"
     isFixed={true}
     onMenuOpen={() => console.log('Menu opened')}
     onMenuClose={() => console.log('Menu closed')}
   />
   
      
      <GradientBlinds
        gradientColors={["#2600ff", "#3186ff"]}
        angle={127}
        noise={0.3}
        blindCount={64}
        blindMinWidth={65}
        mouseDampening={0.21}
        mirrorGradient={false}
        spotlightRadius={0.4}
        spotlightSoftness={1}
        spotlightOpacity={1}
        distortAmount={0}
        shineDirection="right"
        mixBlendMode="lighten"
      />

      <div className=" text-white absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 pointer-events-none">
      <div className="mb-4 sm:mb-5 md:mb-6 pointer-events-auto relative animate-slideUp" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
  {/* Gradient border container */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3186ff] via-white/10 to-white/10 p-[3px] sm:p-[4px]">
    <div className="w-full h-full rounded-full bg-black"></div>
  </div>
  
  <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm relative z-10 rounded-full border border-gray-700  text-white/80 text-xs sm:text-sm md:text-base">
    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-blink"></span>
    Creating top 1% Websites
  </span>
</div>
        <style jsx>{`
          @keyframes blink {
            0%, 49% {
              background-color: rgb(34, 197, 94);
              box-shadow: 0 0 20px rgba(34, 197, 94, 0.8), 0 0 30px rgba(34, 197, 94, 0.4);
            }
            50%, 100% {
              background-color: rgb(21, 128, 61);
              box-shadow: 0 0 5px rgba(21, 128, 61, 0.3);
            }
          }
          
          .animate-blink {
            animation: blink 2s step-end infinite;
          }

          @keyframes border-spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          
          .animate-border-spin {
            animation: border-spin 3s linear infinite;
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slideUp {
            opacity: 0;
            animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>
        
        <h1 className="py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl gap-0 font-light mb-1 leading-[0.85] sm:leading-[0.8]">
  <span className="font-lt-cushion block mb-0 animate-slideUp bg-gradient-to-t from-white via-gray-200 to-gray-400 text-transparent bg-clip-text pt-1 sm:pt-1.5" style={{ animationDelay: '0.6s' }}>The <span className="bg-gradient-to-tr from-[#3186ff] via-gray-200 to-gray-400 text-transparent bg-clip-text">Frontier</span> of</span>
  <span className="font-happy block mb-0 animate-slideUp bg-gradient-to-t from-white via-gray-200 to-gray-400 text-transparent bg-clip-text" style={{ animationDelay: '0.8s' }}>Web <span className="font-lt-cushion bg-gradient-to-tr from-[#3186ff] via-gray-200 to-gray-400 text-transparent bg-clip-text">Innovation</span></span>
  <span className="font-lt-cushion block mb-0 animate-slideUp bg-gradient-to-t from-white via-gray-200 to-gray-400 text-transparent bg-clip-text pb-1 sm:pb-1.5 px-1 sm:px-1.5" style={{ animationDelay: '1.0s' }}>& Digital <span className="font-happy bg-gradient-to-tr from-[#3186ff] via-gray-200 to-gray-400 text-transparent bg-clip-text">Solutions</span></span>
</h1>


        <p className="font-lt-cushion text-white/80 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mb-4 sm:mb-5 md:mb-6 animate-slideUp px-2" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
        We craft the DNA for intuitive websites that turn visitors into loyal<br className="hidden sm:block" />
          customers, predictably and steadily.
        </p>


<button onClick={scrollToPricing} className="z-50 relative px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-black/80 text-white rounded-xl sm:rounded-2xl hover:bg-black/90 hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base md:text-lg pointer-events-auto overflow-visible group cursor-pointer animate-slideUp" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
  <span className="relative z-10">Get more info</span>
  
  {/* Gradient border overlay */}
  <span className="absolute inset-0 rounded-xl sm:rounded-2xl p-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(to bottom right, #2600ff 0%, transparent 50%, #3186ff 100%)'}}>
    <span className="flex h-full w-full items-center justify-center rounded-xl sm:rounded-2xl bg-black/80 group-hover:bg-black/90"></span>
  </span>
  
  {/* Glow effects inside button */}
  <span className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full blur-xl opacity-60 group-hover:opacity-100 group-hover:blur-3xl transition-all duration-300" style={{backgroundColor: '#2600ff40'}}></span>
  <span className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full blur-xl opacity-60 group-hover:opacity-100 group-hover:blur-3xl transition-all duration-300" style={{backgroundColor: '#3186ff40'}}></span>
  
  {/* Background glow effects behind button */}
  <span className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full blur-2xl sm:blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-300 -z-10" style={{backgroundColor: '#2600ff'}}></span>
  <span className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full blur-2xl sm:blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-300 -z-10" style={{backgroundColor: '#3186ff'}}></span>
</button>
      </div>      
    </div>
  );
}

export default heroSection;