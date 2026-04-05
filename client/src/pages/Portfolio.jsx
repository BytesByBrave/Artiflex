import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Filter, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import LiquidEther from '../components/LiquidEther';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const innerRef = useRef(null);
  const shineRef = useRef(null);

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
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, cardRef);
    return () => ctx.revert();
  }, [project.id]);

  const onMouseMove = (e) => {
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const xPct = (x / width - 0.5) * 2; // -1 to 1
    const yPct = (y / height - 0.5) * 2; // -1 to 1

    gsap.to(innerRef.current, {
      rotateY: xPct * 10,
      rotateX: -yPct * 10,
      duration: 0.5,
      ease: "power2.out"
    });

    gsap.to(shineRef.current, {
      x: xPct * 50 + "%",
      y: yPct * 50 + "%",
      opacity: 0.5,
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
    gsap.to(shineRef.current, {
      opacity: 0,
      duration: 0.5
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative perspective-2000"
    >
      <div 
        ref={innerRef}
        className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden cursor-pointer shadow-xl border border-white/20 transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Shine/Glare Effect */}
        <div 
          ref={shineRef}
          className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 pointer-events-none z-20 mix-blend-overlay"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 overflow-hidden z-10 flex flex-col justify-end p-10">
          <div className="transform translate-y-10 hover:translate-y-0 transition-transform duration-500">
            <span className="text-accent font-black text-xs uppercase tracking-[0.4em] mb-4 block">{project.category}</span>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter leading-none">{project.title}</h3>
            <p className="text-white/70 font-bold mb-8 line-clamp-3 uppercase text-sm tracking-tight">{project.description}</p>
            <div className="flex items-center gap-3 text-white font-black text-sm uppercase group">
              <span>Explore Case Study</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>

        <div className="absolute top-8 right-8 z-30">
          <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white shadow-2xl">
            <ExternalLink size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const containerRef = useRef(null);

  const categories = ['All', '3D Design', 'Branding', 'Web UI/UX', 'Motion'];

  const projects = [
    {
      id: 1,
      title: "Solaris Identity",
      category: "Branding",
      description: "A complete visual language for a sustainable energy pioneer, focusing on fluid forms and solar-inspired palettes.",
      image: "/images/services_branding.png"
    },
    {
      id: 2,
      title: "Aura Concept",
      category: "3D Design",
      description: "Hyper-realistic product visualization for a luxury spirit brand, utilizing complex light refraction and caustics.",
      image: "/images/portfolio_3d.png"
    },
    {
      id: 3,
      title: "Nexus System",
      category: "Web UI/UX",
      description: "A futuristic dashboard interface for high-frequency trading, prioritizing data density and clarity.",
      image: "/images/portfolio_web.png"
    },
    {
      id: 4,
      title: "Ether Series",
      category: "Motion",
      description: "Dynamic typographic motion series exploring the intersection of digital art and physical physics.",
      image: "/images/services_3d.png"
    },
    {
      id: 5,
      title: "Lumina App",
      category: "Web UI/UX",
      description: "Modular design language for a next-gen social platform focused on creator communities.",
      image: "/images/services_uiux.png"
    },
    {
      id: 6,
      title: "Verve Launch",
      category: "Branding",
      description: "Dynamic logo system and marketing assets for a worldwide footwear innovation program.",
      image: "/images/services_branding.png"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-header > *", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".portfolio-header",
          start: "top 80%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <Navbar />
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <LiquidEther colors={['#cdeee7', '#10367d', '#74b4da']} autoIntensity={2} />
      </div>

      <main className="relative z-10 flex-grow pt-40 pb-40">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Section */}
          <section className="portfolio-header mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-16">
            <div className="max-w-3xl">
              <span className="text-accent font-black tracking-[0.4em] uppercase text-sm mb-6 block">Our Creative Archive</span>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-primary uppercase leading-[0.85] mb-8">
                VISUAL <br/><span className="text-gradient">LEGACY</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary/60 font-bold uppercase tracking-widest leading-relaxed">
                A curated selection of our most impactful digital expeditions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:pb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500 ${filter === cat ? 'bg-primary text-white shadow-2xl shadow-primary/30 scale-105' : 'bg-white/50 text-primary border border-primary/10 hover:bg-white hover:scale-105'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Projects Grid */}
          <section className="min-h-[800px]">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
               {filteredProjects.map((project, index) => (
                 <ProjectCard key={project.id} project={project} index={index} />
               ))}
             </div>

             {filteredProjects.length === 0 && (
               <div className="flex flex-col items-center justify-center py-64">
                 <Filter size={64} className="text-primary/10 mb-8 animate-pulse" />
                 <p className="text-primary/30 font-black text-3xl uppercase italic tracking-tighter">No artifacts found.</p>
               </div>
             )}
          </section>

          {/* Big CTA */}
          <section className="mt-64">
            <div className="relative glass p-16 md:p-32 rounded-[5rem] border border-white/50 shadow-3xl overflow-hidden group">
              <div className="absolute top-0 right-0 p-32 opacity-5 -rotate-12 translate-x-12 -translate-y-12">
                <Filter size={600} />
              </div>
              
              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-24 items-center">
                <div className="text-left">
                  <span className="text-accent font-black tracking-widest text-xs uppercase mb-6 block">Future Collaboration</span>
                  <h2 className="text-5xl md:text-8xl font-black text-primary uppercase leading-[0.85] tracking-tighter mb-10">
                    Ready to <br/><span className="text-gradient">Ignite?</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-primary/70 font-bold uppercase tracking-tight leading-relaxed max-w-xl">
                    Whether it's a global brand overhaul or a specialized 3D concept, we have the tools to synthesize your vision.
                  </p>
                </div>
                
                <div className="flex flex-col items-start xl:items-end gap-10">
                  <button className="px-16 py-8 rounded-full bg-primary text-white font-black text-3xl hover:bg-accent transition-all hover:scale-110 shadow-3xl shadow-primary/40 uppercase tracking-tighter">
                    Start a Project
                  </button>
                  <p className="text-primary/40 font-black uppercase tracking-[0.3em] text-xs">Empowering 100+ global brands since 2024.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
