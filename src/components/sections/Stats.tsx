"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring } from "framer-motion";

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}
      {value % 1 !== 0 && display === Math.floor(value) ? value.toFixed(1) : display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 5.0, suffix: "★", label: "Premium Customer Rating", isFloat: true },
  { value: 100, suffix: "%", label: "Pure Juice" },
  { value: 10, suffix: "+", label: "Fresh Ingredients" },
  { value: 1, prefix: "#", label: "Premium Quality" },
];

export function Stats() {
  return (
    <section className="py-24 bg-[var(--color-jace-red)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-black text-white mb-2 font-sans tracking-tighter">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-white/80 font-medium text-sm md:text-base uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
