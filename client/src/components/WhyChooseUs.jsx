import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, RefreshCcw, ShieldCheck, Sparkles, FileArchive, Eye, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ feature, index }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        cardRef.current,
        { 
          y: 60, 
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "expo.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  const onMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -15,
      scale: 1.02,
      boxShadow: "0 30px 60px rgba(16,54,125,0.12)",
      duration: 0.4,
      ease: "power2.out"
    });
    gsap.to(iconRef.current, {
      rotate: 15,
      scale: 1.1,
      duration: 0.4,
      ease: "back.out(2)"
    });
  };

  const onMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      boxShadow: "0 10px 40px rgba(16,54,125,0.03)",
      duration: 0.4,
      ease: "power2.inOut"
    });
    gsap.to(iconRef.current, {
      rotate: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.inOut"
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative p-10 rounded-[3rem] bg-white group border border-primary/5 transition-colors hover:border-accent/20 flex flex-col items-center text-center h-full ${feature.centered ? 'lg:col-start-2' : ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />
      
      <div 
        ref={iconRef}
        className="relative z-10 w-24 h-24 rounded-[2rem] bg-primary/5 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm"
      >
        <feature.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
      </div>

      <div className="relative z-10">
        <h4 className="text-2xl font-black text-primary mb-5 tracking-tight uppercase leading-tight group-hover:text-accent transition-colors">
          {feature.title}
        </h4>
        <p className="text-primary/60 font-bold leading-relaxed text-base md:text-lg">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  
  const features = [
    {
      title: "Fast Turnaround",
      description: "Our elite team guarantees initial concepts within 48 hours, ensuring your momentum never falters while maintaining absolute creative precision.",
      icon: Clock
    },
    {
      title: "Unlimited Iterations",
      description: "We don't stop until it's perfect. Your satisfaction is the only metric of success we care about, offering limitless revisions on every project.",
      icon: RefreshCcw
    },
    {
      title: "Atomic Transparency",
      description: "No hidden fees, no complex jargon. Our crystal-clear pricing and process roadmaps ensure you're always in control of your investment.",
      icon: ShieldCheck
    },
    {
      title: "Unique DNA",
      description: "We don't do templates. Every design is surgically crafted to reflect your brand's unique soul and capture your audience's gaze instantly.",
      icon: Sparkles
    },
    {
      title: "Complete Ownership",
      description: "Full source files and intellectual property rights are delivered upon completion, providing you with high-resolution assets for any future use.",
      icon: FileArchive
    },
    {
      title: "Bespoke Communication",
      description: "A dedicated creative director is assigned to your account, ensuring a seamless bridge between your vision and our implementation.",
      icon: Eye
    },
    {
      title: "24/7 Synergy",
      description: "Global support and uninterrupted communication channels keep you connected to your project's heartbeat, no matter the time zone.",
      icon: MessageSquare,
      centered: true
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-header > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-header",
          start: "top 85%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-40 bg-background overflow-hidden" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="why-header text-center md:max-w-4xl mx-auto mb-32">
          <span className="text-accent font-black tracking-[0.4em] uppercase text-sm mb-6 block">The Artiflex Advantage</span>
          <h2 className="text-5xl md:text-8xl font-black text-primary tracking-tighter mb-10 leading-[0.85]">
            WHY <span className="text-gradient">COUNT</span> ON US?
          </h2>
          <p className="text-xl md:text-2xl text-primary/60 font-bold max-w-3xl mx-auto uppercase tracking-wide leading-relaxed">
            A collective of visionaries dedicated to pushing the boundaries of what's possible in digital design.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 pb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
