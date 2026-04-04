import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import LiquidEther from '../components/LiquidEther';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden cursor-pointer"
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tighter">{project.title}</h3>
          <p className="text-white/70 font-medium mb-6 line-clamp-2">{project.description}</p>
          <div className="flex items-center gap-2 text-white font-black text-sm uppercase">
            <span>View Case Study</span>
            <ExternalLink size={16} />
          </div>
        </div>
      </div>
      
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
        <div className="p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white">
          <ExternalLink size={20} />
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', '3D Design', 'Branding', 'Web UI/UX', 'Motion'];

  const projects = [
    {
      id: 1,
      title: "Solaris Brand Identity",
      category: "Branding",
      description: "A complete visual system for a sustainable energy pioneer, focusing on fluid forms and solar-inspired palettes.",
      image: "/images/services_branding.png"
    },
    {
      id: 2,
      title: "Aura Premium Concept",
      category: "3D Design",
      description: "Hyper-realistic product visualization for a luxury spirit brand, utilizing complex light refraction and caustics.",
      image: "/images/portfolio_3d.png"
    },
    {
      id: 3,
      title: "Nexus Crypto Ecosystem",
      category: "Web UI/UX",
      description: "A futuristic dashboard interface for high-frequency trading, prioritizing data density and clarity.",
      image: "/images/portfolio_web.png"
    },
    {
      id: 4,
      title: "Ether Animated Series",
      category: "Motion",
      description: "Dynamic typographic motion series exploring the intersection of digital art and physical physics.",
      image: "/images/services_3d.png"
    },
    {
      id: 5,
      title: "Lumina App Interface",
      category: "Web UI/UX",
      description: "Modular design language for a next-gen social platform focused on creator communities.",
      image: "/images/services_uiux.png"
    },
    {
      id: 6,
      title: "Verve Global Launch",
      category: "Branding",
      description: "Dynamic logo system and marketing assets for a worldwide footwear innovation program.",
      image: "/images/services_branding.png"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <Navbar />
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <LiquidEther colors={['#cdeee7', '#10367d', '#74b4da']} autoIntensity={2.5} />
      </div>

      <main className="relative z-10 flex-grow pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Section */}
          <section className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-none mb-6">
                Our Visual <br/><span className="text-gradient">Legacy</span>
              </h1>
              <p className="text-xl text-primary/60 font-bold uppercase tracking-widest leading-relaxed">
                A curation of our most impactful creative work across multiple disciplines.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all ${filter === cat ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-white/50 text-primary border border-primary/10 hover:bg-white'}`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </section>

          {/* Projects Grid */}
          <section className="min-h-[600px]">
             <motion.div 
               layout
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
             >
               <AnimatePresence mode="popLayout">
                 {filteredProjects.map((project) => (
                   <ProjectCard key={project.id} project={project} />
                 ))}
               </AnimatePresence>
             </motion.div>

             {filteredProjects.length === 0 && (
               <div className="flex flex-col items-center justify-center py-40">
                 <Filter size={48} className="text-primary/20 mb-6" />
                 <p className="text-primary/40 font-black text-2xl uppercase italic">No projects found in this category.</p>
               </div>
             )}
          </section>

          {/* Big CTA */}
          <section className="mt-40">
            <div className="glass p-12 md:p-20 rounded-[4rem] border border-white/40 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-20 opacity-5 -rotate-12 translate-x-12 -translate-y-12">
                <Filter size={400} />
              </div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="text-left">
                  <h2 className="text-4xl md:text-6xl font-black text-primary uppercase leading-tight tracking-tighter mb-6">
                    Have a vision <br/><span className="text-gradient">ready to ignite?</span>
                  </h2>
                  <p className="text-xl text-primary/70 font-medium max-w-xl">
                    Whether it's a complete brand overhaul or a specialized 3D concept, we have the tools and talent to bring it to life.
                  </p>
                </div>
                
                <div className="flex flex-col items-start lg:items-end gap-8">
                  <button className="px-16 py-6 rounded-full bg-primary text-white font-black text-2xl hover:bg-accent transition-all hover:scale-105 shadow-2xl shadow-primary/30 uppercase tracking-tight">
                    Start a Project
                  </button>
                  <p className="text-primary/50 font-bold uppercase tracking-widest text-sm">Join the 100+ brands we've empowered.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof Footer Spacing */}
          <div className="mt-32 text-center">
            <p className="text-primary/30 font-black text-sm uppercase tracking-[0.5em] mb-12">Trusted Worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
               {/* Replace with actual partner logos or abstract icons */}
               <div className="text-2xl font-black text-primary italic uppercase tracking-tighter flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-primary" />
                 LUMINA
               </div>
               <div className="text-2xl font-black text-primary tracking-tighter flex items-center gap-2">
                 <div className="w-8 h-8 rotate-45 border-2 border-primary" />
                 AXIS
               </div>
               <div className="text-2xl font-black text-primary tracking-tight underline decoration-primary/50">
                 KINETIC
               </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
