import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import logo from "../assets/Artiflex-Design-logo-png.png";
import gsap from "gsap";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled ? "py-4 scale-[0.98]" : "py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav
          ref={navRef}
          className={cn(
            "flex items-center justify-between rounded-[2.5rem] px-8 py-4 transition-all duration-500 border border-transparent",
            isScrolled ? "bg-white/80 backdrop-blur-2xl shadow-2xl border-white/40" : "bg-transparent"
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group relative cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9 }}
              className="relative z-10"
            >
              <img src={logo} alt="Artiflix Designs" className="h-12 w-auto drop-shadow-2xl" />
            </motion.div>
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={cn(
                    "text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 relative group py-2",
                    location.pathname === link.href ? "text-primary" : "text-primary/50 hover:text-primary"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-1 bg-accent transition-all duration-500 rounded-full",
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Call to Action Desktop */}
          <div className="hidden md:flex gap-4">
             <Link to="/contact" className="group">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-black text-xs uppercase tracking-widest hover:bg-accent transition-all shadow-xl shadow-primary/20"
                >
                  Initiate Project <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
             </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary p-3 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 p-6 md:hidden"
          >
            <div className="bg-white/90 backdrop-blur-3xl rounded-[3rem] p-10 flex flex-col gap-8 shadow-3xl border border-white/50">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-3xl font-black uppercase tracking-tighter transition-colors",
                    location.pathname === link.href ? "text-accent" : "text-primary/70"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-primary/5 my-4" />
              <button className="px-10 py-6 w-full rounded-3xl bg-primary text-white font-black text-xl uppercase tracking-tighter hover:bg-accent transition-all shadow-3xl shadow-primary/20">
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
