import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import LiquidEther from "./LiquidEther";

export const Hero = () => {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      headingRef.current.children,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out", delay: 0.2 }
    )
    .fromTo(
      subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(
      btnRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.5)" },
      "-=0.5"
    );
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center pt-20">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <LiquidEther
          colors={['#10367d', '#10367d', '#74b4da', '#10367d']}
          mouseForce={30}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <h1 
          ref={headingRef}
          className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter mb-6 overflow-hidden flex flex-wrap justify-center gap-x-4 leading-tight text-[#10367d]"
        >
          <span className="block drop-shadow-sm">Unleash</span>
          <span className="block text-gradient drop-shadow-sm">Dimensions.</span>
        </h1>
        
        <p 
          ref={subRef}
          className="text-lg md:text-2xl text-[#10367d]/80 max-w-2xl mb-10 font-bold"
        >
          We are Artiflix, a premium 3D motion and graphic design agency crafting digital experiences that transcend the ordinary.
        </p>
        
        <div ref={btnRef} className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
          <button className="px-8 py-4 rounded-full bg-[#10367d] hover:bg-accent text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(16,54,125,0.25)]">
            Explore Our Work
          </button>
          <button className="px-8 py-4 rounded-full glass hover:bg-white/80 text-[#10367d] font-bold text-lg transition-all hover:scale-105 active:scale-95 border border-[#10367d]/10 shadow-sm">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
