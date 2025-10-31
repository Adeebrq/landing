"use client"
import GradualBlur from "./components/GradualBlur";
import HeroSection from "./components/sections/heroSection";
import { HeroParallaxDemo } from "./components/sections/about";
import ClickSpark from "./components/ClickSpark";


import TrueFocus from './components/TrueFocus';
import {OurOffer } from "./components/sections/offer";
import ProcessScroll from "./components/sections/process";
import PricingSection from "./components/sections/pricing";
import ChatFAQ from "./components/sections/Faq";
import Footer from "./components/sections/footer";
import { ContactUs } from "./components/sections/contact";


export default function Home() {
  return (
    <div>


<ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
   
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <HeroParallaxDemo/>
      </section>
      <section id="process">
        <ProcessScroll/>
      </section>
      <section id="offer">
        <OurOffer/>
      </section>
      <section id="pricing">
        <PricingSection/>
      </section>
      <section id="faq">
        <ChatFAQ/>
      </section>
      <section className="px-9" id="contact">
        <ContactUs/>
      </section>
      <GradualBlur
        target="page"
        position="bottom" 
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
      <section className="px-9 mt-6">
      <Footer/>
        </section>

</ClickSpark>
    </div>
  );
}