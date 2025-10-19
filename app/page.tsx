"use client"
import Image from "next/image";
import "./components/border.css";
import GradientBlinds from "./components/GradientBlinds";
import GradualBlur from "./components/GradualBlur";
import StaggeredMenu from "./components/StaggeredMenu";
import HeroSection from "./components/sections/heroSection";
import { Dice1 } from "lucide-react";


const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

export default function Home() {
  return (
    <div>

<StaggeredMenu
     position="right"
     items={menuItems}
     socialItems={socialItems}
     displaySocials={true}
     displayItemNumbering={true}
     menuButtonColor="#fff"
     openMenuButtonColor="#fff"
     changeMenuColorOnOpen={true}
     colors={['#B19EEF', '#5227FF']}
     logoUrl="/path-to-your-logo.svg"
     accentColor="#ff6b6b"
     isFixed={true}
     onMenuOpen={() => console.log('Menu opened')}
     onMenuClose={() => console.log('Menu closed')}
   />
   
      <HeroSection />

      
    </div>
  );
}