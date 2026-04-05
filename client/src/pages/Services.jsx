import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Monitor, PenTool, Box, Zap, Heart, ArrowRight } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import LiquidEther from '../components/LiquidEther';
import ServiceIcon3D from '../components/ServiceIcon3D';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const icon3DRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="glass group p-10 rounded-[3.5rem] border border-white/40 hover:border-accent/40 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(16,54,125,0.15)] flex flex-col h-full relative overflow-hidden"
    >
      {/* 3D Icon Background Decor */}
      <div className="absolute -top-20 -right-20 w-64 h-64 opacity-10 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none">
        <ServiceIcon3D type={service.type} color="#10367d" />
      </div>

      <div className="w-24 h-24 rounded-3xl bg-primary/5 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm overflow-hidden">
        <ServiceIcon3D type={service.type} color="#10367d" />
      </div>
      
      <h3 className="text-3xl font-black text-primary mb-6 tracking-tight uppercase group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      <p className="text-primary/70 font-bold leading-relaxed text-lg mb-10 flex-grow uppercase tracking-tight">
        {service.description}
      </p>
      
      <div className="flex flex-wrap gap-3 mb-8">
        {service.tags.map((tag) => (
          <span key={tag} className="px-5 py-2 bg-accent/10 text-accent text-xs font-black rounded-full uppercase tracking-widest border border-accent/20">
            {tag}
          </span>
        ))}
      </div>

      <button className="flex items-center gap-2 text-primary font-black uppercase text-sm group-hover:gap-4 transition-all">
        Learn More <ArrowRight size={18} />
      </button>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  
  const services = [
    {
      title: "3D Animation",
      description: "Bringing life to your concepts with high-end 3D character animation and product visualization.",
      icon: Box,
      type: "3d",
      tags: ["Modeling", "Rigging", "VFX"],
      image: "/images/services_3d.png"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive interfaces that blend stunning aesthetics with seamless functionality.",
      icon: Monitor,
      type: "uiux",
      tags: ["Prototyping", "Interaction", "Design Systems"],
      image: "/images/services_uiux.png"
    },
    {
      title: "Branding & Identity",
      description: "Crafting a unique voice and visual language for your brand that resonates with your values.",
      icon: PenTool,
      type: "branding",
      tags: ["Logo", "Typography", "Strategy"],
      image: "/images/services_branding.png"
    },
    {
      title: "Motion Graphics",
      description: "Dynamic storytelling through animated graphics and visual effects that give your brand an edge.",
      icon: Zap,
      type: "motion",
      tags: ["Explainer Videos", "Lottie", "2D Animation"],
      image: "/images/services_3d.png"
    },
    {
      title: "Digital Art",
      description: "Bespoke digital illustrations and concept art tailored to your brand's unique character.",
      icon: Layers,
      type: "art",
      tags: ["Vector", "Concept", "Painting"],
      image: "/images/services_branding.png"
    },
    {
      title: "Growth Design",
      description: "Strategic design for marketing campaigns that drive engagement and convert viewers.",
      icon: Heart,
      type: "marketing",
      tags: ["Social", "Ads", "Conversion"],
      image: "/images/services_uiux.png"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-header > *", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 80%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <Navbar />
      
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <LiquidEther colors={['#10367d', '#74b4da', '#cdeee7']} autoIntensity={2} autoSpeed={1} />
      </div>

      <main className="relative z-10 flex-grow pt-40 pb-40">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Section */}
          <section className="services-header mb-32 text-center md:max-w-4xl mx-auto">
            <span className="text-accent font-black tracking-[0.4em] uppercase text-sm mb-6 block">Elite Creative Solutions</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-none text-primary uppercase">
              EXPERT <span className="text-gradient">DESIGN</span><br />SYNTHESIS
            </h1>
            <p className="text-xl md:text-2xl text-primary/60 font-bold max-w-3xl mx-auto uppercase tracking-wide leading-relaxed">
              We blend technical precision with artistic flair to deliver results that transcend the ordinary.
            </p>
          </section>

          {/* Featured Service Detail */}
          <section className="mb-48">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-accent font-black tracking-widest text-xs uppercase mb-4 block">Core Competency</span>
                <h2 className="text-5xl md:text-7xl font-black text-primary mb-10 uppercase tracking-tighter leading-[0.85]">
                  Next-Level <br/><span className="text-gradient">3D Worlds</span>
                </h2>
                <p className="text-xl text-primary/70 mb-12 font-bold uppercase tracking-tight leading-relaxed">
                  Our specialized 3D department pushes the boundaries of digital reality. From photorealistic product renders to complex character animations, we bring a cinematic quality to every frame.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {[
                    { t: 'Photorealistic Rendering', d: 'Industrial grade lighting' },
                    { t: 'Dynamic Particles', d: 'Physics-based simulations' },
                    { t: 'Cinematic Motion', d: 'High-end camera pathing' },
                    { t: 'Material Synthesis', d: 'Complex shader development' }
                  ].map((item) => (
                    <div key={item.t} className="flex gap-4">
                      <div className="w-1.5 h-auto bg-accent rounded-full" />
                      <div>
                        <h4 className="text-primary font-black uppercase text-sm mb-1">{item.t}</h4>
                        <p className="text-primary/50 text-xs font-bold uppercase">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="px-12 py-5 rounded-full bg-primary text-white font-black text-xl hover:bg-accent transition-all hover:scale-110 shadow-2xl shadow-primary/20 uppercase tracking-tight">
                  View Case Studies
                </button>
              </div>
              
              <div className="order-1 lg:order-2 relative aspect-square">
                 <div className="absolute inset-0 bg-accent/20 rounded-[4rem] rotate-6" />
                 <div className="absolute inset-0 bg-primary/10 rounded-[4rem] -rotate-3" />
                 <div className="relative h-full w-full rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/20">
                    <img 
                      src="/images/services_3d.png" 
                      alt="3D Animation Artiflex" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                 </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-48">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-6">Full Spectrum Creation</h2>
              <p className="text-xl text-primary/60 font-bold uppercase tracking-widest">From conceptual spark to final deployment.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="relative py-32 rounded-[5rem] bg-primary text-white overflow-hidden text-center shadow-3xl">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute top-0 right-0 w-96 h-96 opacity-10 blur-3xl bg-accent rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 px-6">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">
                Ignite Your <br/><span className="text-accent underline decoration-white/20">Vision</span>
              </h2>
              <p className="text-xl md:text-3xl text-white/70 max-w-3xl mx-auto mb-16 font-medium uppercase tracking-[0.2em]">
                Join the vanguard of digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <button className="px-16 py-6 rounded-full bg-white text-primary font-black text-2xl hover:bg-accent hover:text-white transition-all hover:-translate-y-2 shadow-2xl">
                  Book a Strategy Call
                </button>
                <button className="px-16 py-6 rounded-full border-4 border-white/20 text-white font-black text-2xl hover:bg-white/10 transition-all uppercase">
                  Our Portfolio
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
