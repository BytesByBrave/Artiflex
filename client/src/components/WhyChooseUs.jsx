import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Clock, RefreshCcw, ShieldCheck, Sparkles, FileArchive, Eye, MessageSquare } from "lucide-react";

const TiltFeatureCard = ({ feature, index }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

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
    <div style={{ perspective: "1000px" }} className={`w-full ${feature.centered ? 'lg:col-start-2' : ''}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative p-8 md:p-10 rounded-[2.5rem] bg-white group shadow-[0_10px_40px_rgba(16,54,125,0.03)] hover:shadow-[0_20px_50px_rgba(116,180,218,0.15)] transition-shadow duration-500 overflow-hidden flex flex-col items-center text-center h-full border border-gray-50"
      >
        {/* Decorative corner glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-linear-to-bl from-[#cdeee7]/60 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"></div>

        <div style={{ transform: "translateZ(50px)" }} className="relative z-10 w-16 h-16 rounded-2xl bg-[#10367d]/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#10367d]/10 transition-all duration-300">
          <feature.icon className="w-8 h-8 text-[#10367d]" />
        </div>

        <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex-1 flex flex-col">
          <h4 className="text-xl font-black text-[#10367d] mb-4 tracking-wide group-hover:text-accent transition-colors duration-500 uppercase">
            {feature.title}
          </h4>
          <p className="text-[#10367d]/70 font-medium leading-relaxed text-sm md:text-base">
            {feature.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "FAST TURNAROUND TIME",
      description: "The experts of our graphic design firm guarantee to deliver a design within the first 48 hours. We ensure to fulfill the needs of our clients and drive creativity in every design. Every aspect of the visual resonates with the customer's brand identity.",
      icon: Clock,
      centered: false
    },
    {
      title: "UNLIMITED REVISIONS",
      description: "We work till our clients are fully satisfied. So, do not worry about revisions. We value your sentiments and are committed to driving a positive change in your company's success through our services. So, feel free to share your feedback.",
      icon: RefreshCcw,
      centered: false
    },
    {
      title: "NO HIDDEN CHARGES",
      description: "Our tailored packages have descriptive details of our services and we do not cause inconvenience to our people. We have pre-defined roadmaps and process plans to keep our clients connected to what they will get and at what cost.",
      icon: ShieldCheck,
      centered: false
    },
    {
      title: "UNIQUE DESIGNS",
      description: "Every design has its unique identity and creative appeal. We ensure to bring out the appeal in the brand. The dedicated designers in our company are committed and passionate. They know how to incorporate a striking appeal in the design.",
      icon: Sparkles,
      centered: false
    },
    {
      title: "COMPLETE SOURCE FILES",
      description: "Being the owner of the design, you get the complete source file at the time of project submission. We will submit files in your desired formats to avoid causing any inconvenience for future use. You can even share your submission needs.",
      icon: FileArchive,
      centered: false
    },
    {
      title: "100% TRANSPARENCY",
      description: "With us, you get to experience 100% transparency and sincerity. We keep our clients connected throughout the design journey. Discussing the aesthetics, sharing ideas, and bringing their vision to reality is our foremost goal.",
      icon: Eye,
      centered: false
    },
    {
      title: "UNINTERRUPTED COMMUNICATION",
      description: "We ensure to keep a sound communication with our clients. And for that we assign a dedicated designer and project manager on the project. Our clients get to interact and discuss their needs with the professionals without any barrier.",
      icon: MessageSquare,
      centered: true
    }
  ];

  return (
    <section className="relative w-full py-32 bg-background z-20" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:max-w-4xl mx-auto mb-20"
        >
          <div className="space-y-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-black text-[#10367d] tracking-tight uppercase">
              WHY COUNT ON ARTIFLIX?
            </h2>
          </div>
          <p className="text-[#10367d]/70 font-medium leading-relaxed text-lg max-w-3xl mx-auto">
            <span className="text-[#10367d] font-bold">Artiflix</span> is a hub of competent and elite graphic designers. With our comprehensive range of 3D and graphic design services, we help brands with noteworthy conceptualisation and appeal. Here are some of the many reasons we can help you grow with impeccable designs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => (
            <TiltFeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
