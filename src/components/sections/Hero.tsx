"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import { HeroScene } from "../3d/HeroScene";

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <HeroScene />

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-300">
            Premium FMCG Experience
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 max-w-5xl"
        >
          Taste Nature's <br className="hidden md:block" />
          <span className="text-gradient">Freshness</span> In Every Sip
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mb-12"
        >
          100% Pure &bull; Refreshing &bull; Premium Fruit Juice Crafted For Everyday Wellness
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <MagneticButton className="bg-[var(--color-jace-red)] text-white hover:bg-red-600 shadow-[0_0_30px_rgba(230,57,70,0.4)]">
            Explore Products
          </MagneticButton>
          <MagneticButton className="bg-transparent border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
            Become Distributor
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-700 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-[var(--color-jace-red)] absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
