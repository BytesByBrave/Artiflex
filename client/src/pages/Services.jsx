import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Monitor, PenTool, Box, Zap, Heart } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import LiquidEther from '../components/LiquidEther';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 group border border-white/20 relative overflow-hidden h-full flex flex-col"
    >
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <service.icon size={120} />
      </div>
      
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <service.icon size={32} />
      </div>
      
      <h3 className="text-2xl font-black text-primary mb-4">{service.title}</h3>
      <p className="text-primary/70 font-medium leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "3D Animation",
      description: "Bringing life to your concepts with high-end 3D character animation and product visualization that captivates your audience.",
      icon: Box,
      tags: ["Modeling", "Rigging", "Rendering", "VFX"],
      image: "/images/services_3d.png"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive, user-centric interfaces that blend stunning aesthetics with seamless functionality for web and mobile apps.",
      icon: Monitor,
      tags: ["Wireframing", "Prototyping", "Interaction", "Testing"],
      image: "/images/services_uiux.png"
    },
    {
      title: "Branding & Identity",
      description: "Crafting a unique voice and visual language for your brand that resonates with your values and stands out in the marketplace.",
      icon: PenTool,
      tags: ["Logo", "Typography", "Strategy", "Guidelines"],
      image: "/images/services_branding.png"
    },
    {
      title: "Motion Graphics",
      description: "Dynamic storytelling through animated graphics, typography, and visual effects that give your brand a modern edge.",
      icon: Zap,
      tags: ["Explainer Videos", "Lottie", "Title Design"],
      image: "/images/services_3d.png" // Reusing or could use another
    },
    {
      title: "Artistic Illustration",
      description: "Bespoke digital illustrations tailored to your brand's unique character, from editorial pieces to custom character designs.",
      icon: Layers,
      tags: ["Vector Art", "Concept Art", "Digital Painting"],
      image: "/images/services_branding.png"
    },
    {
      title: "Digital Marketing",
      description: "Strategic design for social media and advertising campaigns that drive engagement and convert viewers into loyal customers.",
      icon: Heart,
      tags: ["Social Content", "Ads", "Email Design"],
      image: "/images/services_uiux.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <Navbar />
      
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <LiquidEther colors={['#10367d', '#74b4da', '#cdeee7']} />
      </div>

      <main className="relative z-10 flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Hero Section */}
          <section className="mb-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-primary uppercase">
                Expert <span className="text-gradient">Design</span><br />Solutions
              </h1>
              <p className="text-xl md:text-2xl text-primary/60 font-medium max-w-3xl mx-auto leading-relaxed uppercase tracking-wide">
                We blend technical precision with artistic flair to deliver designs that don't just look good, but drive results.
              </p>
            </motion.div>
          </section>

          {/* Featured Service Detail */}
          <section className="mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
              >
                <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 uppercase tracking-tighter leading-none">
                  Next-Level <br/><span className="text-accent">3D Experiences</span>
                </h2>
                <p className="text-lg md:text-xl text-primary/70 mb-8 font-medium">
                  Our specialized 3D department pushes the boundaries of digital reality. From photorealistic product renders to complex character animations, we bring a cinematic quality to every frame.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Photorealistic Texturing', 'Dynamic Particle Systems', 'Cinematic Camera Work'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-primary font-bold">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="px-10 py-4 rounded-full bg-primary text-white font-black text-lg hover:bg-accent transition-all hover:scale-105 shadow-xl shadow-primary/20">
                  View Case Studies
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                   <img 
                    src="/images/services_3d.png" 
                    alt="3D Animation Artiflex" 
                    className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">Full Service Creative Agency</h2>
                <p className="text-lg text-primary/60 font-bold mt-4 uppercase">From Concept to Creation, we've got you covered.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="relative py-24 rounded-[4rem] bg-primary text-white overflow-hidden text-center">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10 px-6">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                Start Your <br/>Digital Transformation
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 font-medium">
                Join forces with Artiflex and let's create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-12 py-5 rounded-full bg-white text-primary font-black text-xl hover:bg-accent hover:text-white transition-all hover:-translate-y-1">
                  Book a Strategy Call
                </button>
                <button className="px-12 py-5 rounded-full border-2 border-white/30 text-white font-black text-xl hover:bg-white/10 transition-all">
                  Download Broadsheet
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
