import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Rocket, Building2 } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import LiquidEther from '../components/LiquidEther';

const PricingCard = ({ tier, isPopular }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative glass p-10 rounded-[3rem] border ${isPopular ? 'border-accent shadow-2xl scale-105 z-10 bg-white/90' : 'border-white/20'}`}
    >
      {isPopular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
          Most Popular
        </div>
      )}
      
      <div className="flex items-center gap-4 mb-8">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isPopular ? 'bg-primary text-white' : 'bg-accent/10 text-accent'}`}>
          <tier.icon size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-black text-primary leading-none uppercase">{tier.name}</h3>
          <p className="text-primary/60 font-bold text-xs uppercase mt-1 tracking-widest">{tier.subtitle}</p>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex items-end gap-1">
          <span className="text-5xl font-black text-primary">{tier.price}</span>
          <span className="text-primary/60 font-bold mb-2 uppercase">{tier.period}</span>
        </div>
        <p className="text-primary/50 text-sm mt-3 font-medium">{tier.description}</p>
      </div>
      
      <div className="space-y-4 mb-10">
        {tier.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className="mt-1 bg-green-500/10 p-1 rounded-full">
              <Check size={14} className="text-green-600" strokeWidth={3} />
            </div>
            <span className="text-primary/80 font-bold text-sm tracking-tight">{feature}</span>
          </div>
        ))}
      </div>
      
      <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all hover:scale-[1.02] active:scale-[0.98] ${isPopular ? 'bg-primary text-white shadow-xl shadow-primary/30 hover:bg-accent' : 'bg-accent/10 text-primary hover:bg-accent hover:text-white'}`}>
        Get Started Now
      </button>
    </motion.div>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      subtitle: "For Startups",
      price: "$1,499",
      period: "/ mo",
      description: "Perfect for single project design needs and early-stage startups.",
      icon: Rocket,
      features: [
        "1 design request at a time",
        "Unlimited revisions",
        "Avg. 48 hour delivery",
        "Stock photos included",
        "Design assets included"
      ]
    },
    {
      name: "Professional",
      subtitle: "Best for Scale",
      price: "$2,999",
      period: "/ mo",
      description: "Comprehensive creative support for growing teams and agencies.",
      icon: Zap,
      features: [
        "2 design requests at a time",
        "Priority support",
        "Unlimited revisions",
        "3D elements included",
        "Source files included",
        "Custom animations"
      ]
    },
    {
      name: "Agency",
      subtitle: "Custom Power",
      price: "$5,499",
      period: "/ mo",
      description: "Dedicated creative power for high-volume enterprise needs.",
      icon: Building2,
      features: [
        "Dedicated project manager",
        "Unlimited requests",
        "Same-day turnaround",
        "Full 3D scene creation",
        "Team Slack channel",
        "Strategy consulting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <Navbar />
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <LiquidEther colors={['#74b4da', '#10367d', '#cdeee7']} autoIntensity={3.0} />
      </div>

      <main className="relative z-10 flex-grow pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-primary uppercase mb-6">
              Investment in <span className="text-gradient">Power</span>
            </h1>
            <p className="text-lg md:text-xl text-primary/60 font-bold uppercase tracking-widest max-w-3xl mx-auto">
              Transparent scaling for brands that demand the absolute best in digital design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 px-4">
            {tiers.map((tier, index) => (
              <PricingCard key={tier.name} tier={tier} isPopular={index === 1} />
            ))}
          </div>

          {/* Comparison Section Placeholder */}
          <section className="mt-40 text-left glass p-12 rounded-[3.5rem] border border-white/30">
            <h2 className="text-3xl font-black text-primary uppercase mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {[
                { q: "How does the 'unlimited revisions' work?", a: "We iterate until you are 100% satisfied with the result. There's no cap on how many times we can polish a design." },
                { q: "Can I cancel my subscription anytime?", a: "Yes, our monthly packages are commitment-free. You can pause or cancel at any time through our portal." },
                { q: "What tools do you use for design?", a: "We utilize Figma, Adobe Creative Cloud, Blender, and Cinema 4D primarily, ensuring industry-standard deliverables." },
                { q: "Is 3D design included in all plans?", a: "Basic 3D elements are included in Professional, while full scene environment design is part of the Agency tier." }
              ].map((faq, i) => (
                <div key={i} className="group">
                  <h4 className="text-xl font-black text-primary mb-3 group-hover:text-accent transition-colors uppercase tracking-tight">{faq.q}</h4>
                  <p className="text-primary/70 font-medium leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Banner */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="mt-32 p-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[3rem]"
          >
            <div className="bg-background rounded-[2.9rem] py-16 px-8 text-center border-4 border-white/20">
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase mb-6 tracking-tight">Need a custom enterprise solution?</h2>
              <p className="text-lg text-primary/60 font-bold mb-10 max-w-2xl mx-auto">Contact our sales team for custom volume pricing and dedicated resource allocation.</p>
              <button className="px-14 py-5 rounded-full bg-primary text-white font-black text-xl hover:bg-accent transition-all shadow-2xl shadow-primary/20">
                Talk to Success Manager
              </button>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
