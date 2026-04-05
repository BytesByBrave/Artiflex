import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebookF, FaTiktok, FaPinterestP, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white pt-32 pb-0 overflow-hidden relative rounded-t-[5rem] mt-[-4rem] z-30 shadow-[0_-20px_100px_rgba(16,54,125,0.2)]">
      <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-white/10 pb-16 mb-20 gap-10">
          <div className="flex flex-col gap-4">
             <div className="text-5xl font-black tracking-tighter flex items-center gap-3">
               <div className="w-12 h-12 bg-accent rounded-2xl rotate-12 flex items-center justify-center shadow-2xl shadow-accent/20">
                 <div className="w-4 h-4 bg-primary rounded-full"></div>
               </div>
               ARTIFLEX
             </div>
             <p className="text-white/40 font-black text-xs uppercase tracking-[0.4em] ml-2">Digital Synthesis Agency</p>
          </div>
          
          <div className="flex items-center gap-4 flex-wrap">
            {[
              { icon: FaLinkedin, label: "LinkedIn" },
              { icon: FaWhatsapp, label: "WhatsApp" },
              { icon: FaInstagram, label: "Instagram" },
              { icon: FaFacebookF, label: "Facebook" },
              { icon: FaTiktok, label: "TikTok" },
              { icon: FaPinterestP, label: "Pinterest" },
              { icon: FaYoutube, label: "YouTube" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href="#"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigation Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-10 mb-32">
          {/* Col 1 */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-black text-accent text-xs uppercase tracking-[0.3em] mb-4">Core Protocols</h4>
            <Link to="/services" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">3D Synthesis</Link>
            <Link to="/services" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">Motion Architect</Link>
            <Link to="/services" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">UI/UX Nexus</Link>
            <Link to="/services" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">Brand Identity</Link>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-black text-accent text-xs uppercase tracking-[0.3em] mb-4">The Collective</h4>
            <Link to="/#about" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">About Us</Link>
            <Link to="/portfolio" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">Portfolio</Link>
            <Link to="/pricing" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">Investment</Link>
            <a href="#" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">Careers</a>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-black text-accent text-xs uppercase tracking-[0.3em] mb-4">Neural Buffer</h4>
            <a href="#" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">Insights</a>
            <a href="#" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">Tutorials</a>
            <a href="#" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">Case Studies</a>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-black text-accent text-xs uppercase tracking-[0.3em] mb-4">Compliance</h4>
            <a href="#" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">Privacy</a>
            <a href="#" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">Terms</a>
            <a href="#" className="text-white/50 hover:text-white transition-all font-bold uppercase text-xs tracking-widest">Cookies</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12 py-10 border-t border-white/5 relative z-10 gap-6">
          <p className="text-white/20 text-[10px] uppercase font-black tracking-[0.5em]">
            &copy;{new Date().getFullYear()} Artiflex Synthesis. All Rights Reserved.
          </p>
          <div className="flex items-center gap-10">
             <span className="text-white/20 text-[10px] uppercase font-black tracking-[0.5em] pb-1 border-b border-white/10 cursor-pointer hover:text-accent hover:border-accent transition-all">Back to apex</span>
          </div>
        </div>

        <div className="w-full pb-64 md:pb-80"></div>
      </div>

      {/* Massive Bottom Text */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none z-0">
        <h1 className="text-[34vw] font-black text-accent/5 leading-none tracking-tighter whitespace-nowrap uppercase">
          artiflex
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
