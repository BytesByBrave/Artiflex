import React from "react";
import { MessageSquare, Camera, Video, Globe, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#051126] text-white pt-24 pb-0 overflow-hidden relative rounded-t-[3rem] mt-[-2rem] z-30">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-10 mb-16">
          <div className="text-4xl font-black tracking-tighter mb-8 md:mb-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-[#cdeee7] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-[#051126] rounded-full"></div>
            </div>
            ARTIFLIX
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-white hover:scale-110 transition-all">
              <MessageSquare className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white hover:scale-110 transition-all">
              <Camera className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white hover:scale-110 transition-all">
              <Video className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white hover:scale-110 transition-all">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white hover:scale-110 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-32 text-sm">
          {/* Col 1 */}
          <div className="flex flex-col space-y-5">
            <h4 className="font-bold text-white mb-2 tracking-wide">Services</h4>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">3D Animation</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Motion Graphics</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">UI/UX Design</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Branding</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Illustration</a>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col space-y-5">
            <h4 className="font-bold text-white mb-2 tracking-wide">Company</h4>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">About Us</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Our Process</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Portfolio</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Careers</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">FAQ</a>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col space-y-5">
            <h4 className="font-bold text-white mb-2 tracking-wide">Resources</h4>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Blog</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Design Assets</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Tutorials</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Case Studies</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Community</a>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col space-y-5">
            <h4 className="font-bold text-white mb-2 tracking-wide">Legal</h4>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-[#cdeee7] transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between items-center border-t border-white/10 pt-8 pb-48 md:pb-64 relative z-10">
          <p className="text-white/40 text-xs w-full text-center md:text-right">
            © {new Date().getFullYear()} Artiflix. All Rights Reserved
          </p>
        </div>
      </div>

      {/* Massive Bottom Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none z-0 translate-y-[20%]">
        <h1 className="text-[32vw] md:text-[28vw] font-black text-[#cdeee7] leading-[0.75] tracking-tighter whitespace-nowrap">
          artiflix
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
