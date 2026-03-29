import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { AbstractShape } from "./AbstractShape";

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
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
          <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#a855f7" />
          <AbstractShape />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <h1 
          ref={headingRef}
          className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter mb-6 overflow-hidden flex flex-wrap justify-center gap-x-4 leading-tight"
        >
          <span className="block drop-shadow-2xl">Unleash</span>
          <span className="block text-gradient drop-shadow-2xl">Dimensions.</span>
        </h1>
        
        <p 
          ref={subRef}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-10 font-medium drop-shadow-md"
        >
          We are Artiflix, a premium 3D motion and graphic design agency crafting digital experiences that transcend the ordinary.
        </p>
        
        <div ref={btnRef} className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
          <button className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(147,51,234,0.5)]">
            Explore Our Work
          </button>
          <button className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 border border-purple-500/30">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
