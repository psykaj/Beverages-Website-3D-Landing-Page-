"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Droplet, Heart, ShieldCheck, Truck, ThumbsUp } from "lucide-react";

const features = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Sourced directly from organic farms." },
  { icon: Droplet, title: "100% Pure", desc: "No water added, just pure extracted juice." },
  { icon: ShieldCheck, title: "Premium Quality", desc: "Rigorous quality checks at every step." },
  { icon: Heart, title: "Healthy Lifestyle", desc: "Packed with vitamins and antioxidants." },
  { icon: Truck, title: "Fast Delivery", desc: "Cold-chain logistics for maximum freshness." },
  { icon: ThumbsUp, title: "No Artificial Taste", desc: "Zero preservatives or artificial flavors." },
];

export function WhyChooseUs() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="why-jace" ref={containerRef} className="py-32 bg-[var(--color-jace-darker)] relative overflow-hidden">
      
      {/* Background Typography */}
      <motion.div 
        style={{ x: y }} 
        className="absolute top-20 left-0 w-[200%] whitespace-nowrap text-[15vw] font-black text-white/[0.02] select-none pointer-events-none"
      >
        PURE FRESH PREMIUM
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 md:w-2/3">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose Jace?
          </h2>
          <p className="text-xl text-gray-400 font-light">
            We believe that what you drink should be as close to nature as possible. 
            No compromises, just extraordinary taste and health in every bottle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-[var(--color-jace-red)]/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-jace-red)]/20 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-white group-hover:text-[var(--color-jace-red)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
