import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Search, Target, Palette, TrendingUp } from "lucide-react";

const TiltCard = ({ step, index }) => {
  const ref = useRef(null);
  
  // Mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Transform constraints
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className="w-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative p-10 md:p-14 rounded-[2rem] bg-white group shadow-[0_10px_40px_rgba(16,54,125,0.03)] hover:shadow-[0_20px_50px_rgba(116,180,218,0.2)] transition-shadow duration-500 overflow-hidden flex flex-col items-center h-full"
      >
        {/* Decorative corner glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-bl from-[#cdeee7]/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"></div>

        {/* Number and Icon with Parallax Effect */}
        <div 
          style={{ transform: "translateZ(60px)" }}
          className="flex flex-col items-center justify-center mb-10 mt-4 relative w-full h-20"
        >
          {/* Bold background number */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-[6rem] font-bold text-[#cdeee7]/60 group-hover:text-[#74b4da]/30 transition-colors duration-500 select-none z-0 tracking-tighter">
            0{step.id}
          </div>
          
          {/* Icon Badge */}
          <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(16,54,125,0.08)] flex items-center justify-center relative z-10 border border-[#ebebeb] group-hover:scale-110 transition-transform duration-300">
            {step.icon}
          </div>
        </div>

        {/* Text Content */}
        <div style={{ transform: "translateZ(40px)" }} className="text-center relative z-10">
          <h4 className="text-xl font-black text-[#10367d] mb-4 tracking-wide group-hover:text-[#74b4da] transition-colors duration-500">
            {step.title}
          </h4>
          <p className="text-[#10367d]/70 font-medium leading-relaxed text-sm md:text-base">
            {step.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "BUSINESS UNDERSTANDING",
      description: "First, our graphic designers conduct in-depth research and gather details to understand your company fully. We learn about competitors and buyer personas, making notes about the pain points of the target audience.",
      icon: <Search className="w-8 h-8 text-[#10367d]" />
    },
    {
      id: 2,
      title: "STRATEGIC PLANNING",
      description: "Artiflix is regarded as a top creative agency for its targeted approach. Every aspect of the design, from angles to icons to aesthetics, brings out your brand's unique personality.",
      icon: <Target className="w-8 h-8 text-[#10367d]" />
    },
    {
      id: 3,
      title: "GRAPHICAL IMPLEMENTATION",
      description: "Using top-notch tools and software, we strive to add a blazing flare of creativity to our designs. We ensure to offer a unique and captivating glimpse in every design that captures attention at a glance.",
      icon: <Palette className="w-8 h-8 text-[#10367d]" />
    },
    {
      id: 4,
      title: "RESULT MEASUREMENT",
      description: "For us, it's not only about amusing our clients, but we ponder on the ROI every design generates. That's our real achievement. We make sure our designs prove profitable and productive for your business.",
      icon: <TrendingUp className="w-8 h-8 text-[#10367d]" />
    }
  ];

  return (
    <section className="relative w-full py-32 bg-[#ebebeb] z-20" id="services">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:max-w-4xl mx-auto mb-20"
        >
          <p className="text-[#10367d]/70 font-bold leading-relaxed mb-16 text-lg max-w-3xl mx-auto">
            You know what's the biggest perk of working with one of the most notable design agencies? It's our accuracy, efficient communication, and top-quality services. <span className="text-[#10367d] font-black">Artiflix</span> offers high-quality vector and 3D design services with a sound process to ensure perfection.
          </p>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#10367d] tracking-tight">
              OUR PROCESS
            </h2>
            <h3 className="text-lg md:text-xl text-[#74b4da] font-bold tracking-wide uppercase">
              Turning Your Ideas Into Reality
            </h3>
          </div>
        </motion.div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {steps.map((step, index) => (
            <TiltCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
