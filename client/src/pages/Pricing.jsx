import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Zap, Rocket, Building2, Star } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import LiquidEther from '../components/LiquidEther';
import { Canvas } from "@react-three/fiber";
import { AbstractShape } from "../components/AbstractShape";

gsap.registerPlugin(ScrollTrigger);

const PricingCard = ({ tier, isPopular, index }) => {
  const cardRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "expo.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%"
          }
        }
      );
    }, cardRef);
    return () => ctx.revert();
  }, [index]);

  const onMouseMove = (e) => {
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    gsap.to(innerRef.current, {
      rotateY: x * 15,
      rotateX: -y * 15,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const onMouseLeave = () => {
    gsap.to(innerRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative perspective-1000 ${isPopular ? 'z-10' : 'z-0'}`}
    >
      <div 
        ref={innerRef}
        className={`relative glass p-12 rounded-[4rem] border transition-all duration-700 transform-gpu ${isPopular ? 'border-accent shadow-[0_40px_100px_rgba(116,180,218,0.2)] bg-white/95' : 'border-white/30 bg-white/60 hover:bg-white/80'}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {isPopular && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-[0.3em] shadow-2xl flex items-center gap-2">
            <Star size={16} fill="currentColor" /> Recommended
          </div>
        )}
        
        <div className="flex items-center gap-6 mb-12" style={{ transform: "translateZ(40px)" }}>
          <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-lg ${isPopular ? 'bg-primary text-white' : 'bg-accent/10 text-accent'}`}>
            <tier.icon size={32} />
          </div>
          <div>
            <h3 className="text-3xl font-black text-primary leading-none uppercase tracking-tight">{tier.name}</h3>
            <p className="text-primary/50 font-black text-[0.65rem] uppercase mt-2 tracking-[0.25em]">{tier.subtitle}</p>
          </div>
        </div>
        
        <div className="mb-12" style={{ transform: "translateZ(60px)" }}>
          <div className="flex items-end gap-2">
            <span className="text-6xl font-black text-primary tracking-tighter">{tier.price}</span>
            <span className="text-primary/40 font-black mb-2 uppercase text-sm tracking-widest">{tier.period}</span>
          </div>
          <p className="text-primary/60 text-base mt-4 font-bold uppercase tracking-tight leading-relaxed">{tier.description}</p>
        </div>
        
        <div className="space-y-5 mb-14" style={{ transform: "translateZ(30px)" }}>
          {tier.features.map((feature) => (
            <div key={feature} className="flex items-center gap-4">
              <div className="bg-accent/15 p-1 rounded-full border border-accent/20">
                <Check size={14} className="text-accent" strokeWidth={4} />
              </div>
              <span className="text-primary/80 font-black text-xs uppercase tracking-wider">{feature}</span>
            </div>
          ))}
        </div>
        
        <button 
          style={{ transform: "translateZ(50px)" }}
          className={`w-full py-6 rounded-3xl font-black text-xl transition-all shadow-xl uppercase tracking-tighter ${isPopular ? 'bg-primary text-white hover:bg-accent hover:scale-105 active:scale-95 shadow-primary/30' : 'bg-accent/10 text-primary hover:bg-primary hover:text-white hover:scale-105 shadow-accent/10'}`}
        >
          Initialize Plan
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const containerRef = useRef(null);
  
  const tiers = [
    {
      name: "Starter",
      subtitle: "Sprint Protocol",
      price: "$1,499",
      period: "/ month",
      description: "Lean support for specialized design projects and early initiatives.",
      icon: Rocket,
      features: [
        "1 design request at a time",
        "Unlimited iterations",
        "48 hour synthesis cycles",
        "Full design system access",
        "Cloud source files"
      ]
    },
    {
      name: "Professional",
      subtitle: "Scale Engine",
      price: "$2,999",
      period: "/ month",
      description: "Complete creative infrastructure for high-growth global teams.",
      icon: Zap,
      features: [
        "2 design requests at a time",
        "High-priority pipeline",
        "Advanced 3D assets",
        "Interactive prototypes",
        "Full source transparency",
        "Motion guidelines"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Custom Nexus",
      price: "$5,499",
      period: "/ month",
      description: "Infinite creative power for complex multi-disciplinary needs.",
      icon: Building2,
      features: [
        "Dedicated Director",
        "Infinite request buffer",
        "Same-day deployment",
        "Full 3D environment synthesis",
        "Private Slack interface",
        "Strategic consultancy"
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pricing-header > *", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".pricing-header",
          start: "top 80%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <Navbar />
      
      {/* 3D Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LiquidEther colors={['#74b4da', '#10367d', '#cdeee7']} autoIntensity={2} autoSpeed={1.2} />
      </div>

      <div className="fixed top-0 right-0 w-full h-full z-0 opacity-20 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AbstractShape />
        </Canvas>
      </div>

      <main className="relative z-10 flex-grow pt-40 pb-40">
        <div className="max-w-7xl mx-auto px-6">
          
          <section className="pricing-header mb-32 text-center md:max-w-4xl mx-auto">
            <span className="text-accent font-black tracking-[0.4em] uppercase text-sm mb-6 block">Transparent Investment</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-primary uppercase mb-10 leading-[0.85]">
              POWERED BY <br/><span className="text-gradient">VALUES</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary/60 font-bold uppercase tracking-widest max-w-3xl mx-auto leading-relaxed">
              Predictable scaling for brands that demand absolute design superiority.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16 items-center">
            {tiers.map((tier, index) => (
              <PricingCard key={tier.name} tier={tier} isPopular={index === 1} index={index} />
            ))}
          </div>

          {/* FAQ Section */}
          <section className="mt-64 glass p-20 rounded-[4rem] border border-white/40 shadow-3xl overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
            
            <h2 className="text-4xl md:text-6xl font-black text-primary uppercase mb-20 tracking-tighter leading-none">Intelligence Protocol <br/><span className="text-accent">FAQ</span></h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
              {[
                { q: "How does 'Unlimited Iterations' work?", a: "We commit to a zero-compromise policy. We synthesize and refine until your vision is perfectly manifested in the artifact." },
                { q: "Can I terminate my protocol anytime?", a: "Absolute flexibility. Our monthly membership allows you to pause or cancel without technical friction." },
                { q: "Which toolsets do you utilize?", a: "We leverage Figma, Three.js, GSAP, Blender, and the Adobe Suite to ensure industry-leading deliverables." },
                { q: "Is 3D synthesis included in all tiers?", a: "Foundational 3D assets are in Professional. Full environmental world-building is reserved for the Enterprise Nexus." }
              ].map((faq, i) => (
                <div key={i} className="group/faq transform transition-all duration-500 hover:translate-x-2">
                  <h4 className="text-2xl font-black text-primary mb-6 group-hover/faq:text-accent transition-colors uppercase tracking-tight">{faq.q}</h4>
                  <p className="text-primary/70 font-bold leading-relaxed uppercase text-sm tracking-tight">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Banner */}
          <div className="mt-64 relative group border-4 border-white/30 rounded-[5rem] overflow-hidden shadow-3xl bg-white/40 backdrop-blur-3xl hover:border-accent/40 transition-all duration-700">
             <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             <div className="py-24 px-12 text-center relative z-10">
                <span className="text-accent font-black tracking-widest text-xs uppercase mb-8 block">Custom Enterprise Matrix</span>
                <h2 className="text-4xl md:text-7xl font-black text-primary uppercase mb-10 tracking-[0.05em] leading-none">Need a bespoke <br/><span className="text-gradient underline decoration-accent/20">Solution?</span></h2>
                <p className="text-xl md:text-2xl text-primary/60 font-bold mb-16 max-w-3xl mx-auto uppercase tracking-wide">Contact our strategic council for mission-specific resource allocation.</p>
                <button className="px-20 py-8 rounded-full bg-primary text-white font-black text-2xl hover:bg-accent transition-all hover:scale-110 shadow-3xl shadow-primary/40 uppercase tracking-tighter">
                  Initiate Strategic Contact
                </button>
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
