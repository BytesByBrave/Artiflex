import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import LiquidEther from "./LiquidEther";

export const Hero = () => {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Initial state hide
      gsap.set([headingRef.current.children, subRef.current, btnRef.current], { 
        opacity: 0, 
        y: 50 
      });

      tl.to(headingRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
        delay: 0.5
      })
      .to(subRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .to(btnRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.6");

      // Subtle float animation for subtext
      gsap.to(subRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <LiquidEther
          colors={['#10367d', '#cdeee7', '#74b4da', '#ebebeb', '#10367d']}
          mouseForce={100}
          cursorSize={120}
          isViscous
          viscous={12}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={1.0}
          isBounce={true}
          autoDemo
          autoSpeed={2}
          autoIntensity={5}
          takeoverDuration={0.3}
          autoResumeDelay={1000}
          autoRampDuration={1}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <h1 
          ref={headingRef}
          className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter mb-8 overflow-hidden flex flex-wrap justify-center gap-x-6 leading-[0.9] text-[#10367d]"
        >
          <span className="block drop-shadow-xl">Unleash</span>
          <span className="block text-gradient drop-shadow-2xl">Dimensions.</span>
        </h1>
        
        <p 
          ref={subRef}
          className="text-xl md:text-3xl text-[#10367d]/80 max-w-3xl mb-12 font-bold uppercase tracking-widest"
        >
          Artiflix: A Premium 3D Motion & Design Powerhouse.
        </p>
        
        <div ref={btnRef} className="flex flex-col sm:flex-row gap-6 pointer-events-auto">
          <button className="group relative px-10 py-5 rounded-full bg-[#10367d] text-white font-black text-xl transition-all hover:scale-110 active:scale-95 shadow-[0_20px_50px_rgba(16,54,125,0.3)] overflow-hidden">
            <span className="relative z-10">EXPLORE WORK</span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button className="px-10 py-5 rounded-full glass hover:bg-white/90 text-[#10367d] font-black text-xl transition-all hover:scale-110 active:scale-95 border-2 border-[#10367d]/5 shadow-xl">
            OUR SERVICES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
