import React from "react";
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebookF, FaTiktok, FaPinterestP, FaWhatsapp } from "react-icons/fa6";

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
            <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-white hover:scale-110 transition-all">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-white/60 hover:text-white hover:scale-110 transition-all">
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white hover:scale-110 transition-all">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/60 hover:text-white hover:scale-110 transition-all">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" aria-label="TikTok" className="text-white/60 hover:text-white hover:scale-110 transition-all">
              <FaTiktok className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Pinterest" className="text-white/60 hover:text-white hover:scale-110 transition-all">
              <FaPinterestP className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube" className="text-white/60 hover:text-white hover:scale-110 transition-all">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-12 md:mb-20 text-sm">
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
        <div className="flex justify-end items-center w-full mb-6 ml-4 relative z-10">
          <p className="text-white/50 text-[11px] md:text-xs tracking-wide">
            &copy;{new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* Bottom Divider spacing */}
        <div className="w-full border-t border-white/10 pt-48 md:pt-64 relative z-10"></div>
      </div>

      {/* Massive Bottom Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none z-0 translate-y-[20%]">
        <h1 className="text-[32vw] md:text-[28vw] font-black text-[#cdeee7] leading-[0.75] tracking-tight whitespace-nowrap">
          artiflix
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
