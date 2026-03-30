import React from "react";
import { motion } from "framer-motion";
import { Search, Target, Palette, TrendingUp } from "lucide-react";

const ProcessStep = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Text Content */}
      <div className="flex-1 w-full flex-col">
        <div className="flex flex-col mb-6 relative">
          <div className="text-7xl md:text-[8rem] font-bold text-[#cdeee7]/60 leading-none select-none tracking-tighter absolute -top-10 -left-6 z-0 mix-blend-multiply">
            0{step.id}
          </div>
          <div className="flex items-center gap-4 relative z-10 mt-6 md:mt-10">
            <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(16,54,125,0.08)] flex items-center justify-center border border-background shrink-0">
              {step.icon}
            </div>
            <h4 className="text-2xl md:text-3xl font-black text-[#10367d] tracking-wide uppercase">
              {step.title}
            </h4>
          </div>
        </div>
        <p className="text-[#10367d]/70 font-medium leading-relaxed text-lg md:text-xl max-w-xl">
          {step.description}
        </p>
      </div>

      {/* Image Content */}
      <div className="flex-1 w-full">
        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(16,54,125,0.1)] group">
          <div className="absolute inset-0 bg-[#000000]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
          <img 
            src={step.image} 
            alt={step.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
          />
        </div>
      </div>
    </motion.div>
  );
};

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "BUSINESS UNDERSTANDING",
      description: "First, our graphic designers conduct in-depth research and gather details to understand your company fully. We learn about competitors and buyer personas, making notes about the pain points of the target audience.",
      icon: <Search className="w-8 h-8 text-[#10367d]" />,
      image: "/images/process_business_understanding_1774860111607.png"
    },
    {
      id: 2,
      title: "STRATEGIC PLANNING",
      description: "Artiflix is regarded as a top creative agency for its targeted approach. Every aspect of the design, from angles to icons to aesthetics, brings out your brand's unique personality.",
      icon: <Target className="w-8 h-8 text-[#10367d]" />,
      image: "/images/process_strategic_planning_1774860128575.png"
    },
    {
      id: 3,
      title: "GRAPHICAL IMPLEMENTATION",
      description: "Using top-notch tools and software, we strive to add a blazing flare of creativity to our designs. We ensure to offer a unique and captivating glimpse in every design that captures attention at a glance.",
      icon: <Palette className="w-8 h-8 text-[#10367d]" />,
      image: "/images/process_graphical_implementation_1774860144546.png"
    },
    {
      id: 4,
      title: "RESULT MEASUREMENT",
      description: "For us, it's not only about amusing our clients, but we ponder on the ROI every design generates. That's our real achievement. We make sure our designs prove profitable and productive for your business.",
      icon: <TrendingUp className="w-8 h-8 text-[#10367d]" />,
      image: "/images/process_result_measurement_1774860161925.png"
    }
  ];

  return (
    <section className="relative w-full py-32 bg-background z-20" id="services">
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
            <h3 className="text-lg md:text-xl text-accent font-bold tracking-wide uppercase">
              Turning Your Ideas Into Reality
            </h3>
          </div>
        </motion.div>

        {/* Process Steps Loop */}
        <div className="flex flex-col space-y-24 md:space-y-32 w-full mt-24">
          {steps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
