import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Target, Palette, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ProcessStep = ({ step, index }) => {
  const isEven = index % 2 === 0;
  const stepRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animation
      gsap.fromTo(
        [textRef.current, imageRef.current],
        { 
          y: 100, 
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: stepRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Number floating animation
      gsap.to(numberRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, stepRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={stepRef}
      className={`flex flex-col md:flex-row items-center gap-10 md:gap-24 w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Text Content */}
      <div ref={textRef} className="flex-1 w-full flex-col relative z-10">
        <div className="flex flex-col mb-8 relative">
          <div 
            ref={numberRef}
            className="text-[10rem] md:text-[14rem] font-black text-primary/5 leading-none select-none tracking-tighter absolute -top-24 -left-12 z-0"
          >
            0{step.id}
          </div>
          <div className="flex items-center gap-6 relative z-10 mt-12">
            <div className="w-20 h-20 rounded-3xl bg-white shadow-2xl flex items-center justify-center border border-primary/5 shrink-0 transition-transform hover:rotate-6">
              {step.icon}
            </div>
            <h4 className="text-3xl md:text-4xl font-black text-primary tracking-tight uppercase leading-none">
              {step.title}
            </h4>
          </div>
        </div>
        <p className="text-primary/70 font-bold leading-relaxed text-xl md:text-2xl max-w-xl pl-2">
          {step.description}
        </p>
      </div>

      {/* Image Content */}
      <div ref={imageRef} className="flex-1 w-full perspective-1000">
        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white/20">
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
          <img 
            src={step.image} 
            alt={step.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  const containerRef = useRef(null);
  
  const steps = [
    {
      id: 1,
      title: "Discovery",
      description: "We dive deep into your brand's DNA, researching competitors and target demographics to find the unique angle that sets you apart.",
      icon: <Search className="w-10 h-10 text-primary" />,
      image: "/images/process_business_understanding_1774860111607.png"
    },
    {
      id: 2,
      title: "Strategy",
      description: "Every pixel serves a purpose. We map out a meticulous visual strategy that aligns your brand identity with market triggers.",
      icon: <Target className="w-10 h-10 text-primary" />,
      image: "/images/process_strategic_planning_1774860128575.png"
    },
    {
      id: 3,
      title: "Creation",
      description: "Using world-class 3D and graphic tools, we mold your vision into a tangible digital masterpiece with unrivaled precision.",
      icon: <Palette className="w-10 h-10 text-primary" />,
      image: "/images/process_graphical_implementation_1774860144546.png"
    },
    {
      id: 4,
      title: "Results",
      description: "Success is measured in impact. We ensure our designs don't just look stunning, but drive engagement and measurable ROI.",
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      image: "/images/process_result_measurement_1774860161925.png"
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-40 bg-background overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center md:max-w-4xl mx-auto mb-32">
          <span className="text-accent font-black tracking-[0.3em] uppercase text-sm mb-4 block">Engineered for Excellence</span>
          <h2 className="text-5xl md:text-8xl font-black text-primary tracking-tighter mb-10 leading-none">
            OUR <span className="text-gradient">PROCESS</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary/60 font-bold max-w-3xl mx-auto uppercase tracking-wide">
            A meticulous journey from conceptual spark to digital reality.
          </p>
        </div>

        {/* Process Steps Loop */}
        <div className="flex flex-col space-y-40 md:space-y-64 w-full">
          {steps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
