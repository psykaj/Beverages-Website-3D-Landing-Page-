"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timeline = [
  { step: "01", title: "Organic Farms", desc: "We source our fruits from certified organic farms." },
  { step: "02", title: "Fresh Picking", desc: "Hand-picked at peak ripeness for maximum flavor." },
  { step: "03", title: "Careful Processing", desc: "Cold-pressed to retain all nutrients and vitamins." },
  { step: "04", title: "Quality Check", desc: "Rigorous testing to ensure 100% purity." },
  { step: "05", title: "Premium Packaging", desc: "Sealed in eco-friendly, premium glass bottles." },
  { step: "06", title: "Delivered Fresh", desc: "Cold-chain delivery straight to your doorstep." },
];

export function AboutTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="py-32 bg-black relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Journey of <span className="text-gradient">Purity</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From the fertile soils of our organic farms to the refreshing sip from our premium bottles, every step is a testament to our commitment to quality.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <motion.div 
              className="absolute top-0 w-full bg-[var(--color-jace-red)]"
              style={{ height: lineHeight, originY: 0 }}
            />
          </div>

          <div className="space-y-24 relative">
            {timeline.map((item, i) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-start ${i % 2 === 0 ? "md:flex-row-reverse" : ""} relative`}
              >
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-[var(--color-jace-red)] -translate-x-1/2 mt-1 z-10" />

                <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}>
                  <span className="text-[var(--color-jace-gold)] font-bold text-xl mb-2 block">{item.step}</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
