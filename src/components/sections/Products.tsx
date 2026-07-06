"use client";

import { motion } from "framer-motion";
import { TiltCard } from "../ui/TiltCard";
import { Droplet, Leaf, Sparkles } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

const products = [
  {
    name: "Pomegranate + Kokum",
    desc: "A rich blend of antioxidants and traditional Indian cooling spices.",
    color: "#800020",
    gradient: "from-[#800020] to-[#E63946]",
    features: ["Antioxidant Rich", "Heart Healthy", "Natural Cooling"],
  },
  {
    name: "Guava Chilli",
    desc: "Sweet, tangy pink guava perfectly balanced with a kick of chilli.",
    color: "#2A9D8F",
    gradient: "from-[#2A9D8F] to-[#264653]",
    features: ["Immunity Boost", "Vitamin C", "Spicy Kick"],
  }
];

export function Products() {
  return (
    <section id="products" className="py-32 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            The <span className="text-gradient">Fresh Fruit</span> Collection
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Experience our signature blends, crafted with 100% pure fruits, zero artificial flavors, and unparalleled taste.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {products.map((product, i) => (
            <TiltCard key={product.name} className="w-full relative group perspective-[1000px]">
              <div 
                className={`relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden p-8 flex flex-col justify-end bg-gradient-to-br ${product.gradient} border border-white/10`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Abstract Bottle Placeholder */}
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ transform: "translateZ(80px)" }}
                >
                  <div className="w-24 h-64 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="w-4 h-full bg-white/20 absolute left-4 rounded-full mix-blend-overlay blur-sm" />
                  </div>
                </div>

                <div 
                  className="relative z-10 glass-card p-6 rounded-3xl"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 text-sm mb-6">{product.desc}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {product.features.map(f => (
                      <li key={f} className="flex items-center text-xs text-white/80 font-medium">
                        <Sparkles className="w-3 h-3 mr-2 text-[var(--color-jace-gold)]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <MagneticButton className="w-full bg-white text-black py-4 hover:bg-gray-100">
                    Buy Now
                  </MagneticButton>
                </div>

                {/* Floating Elements */}
                <Leaf 
                  className="absolute top-10 left-10 text-white/30 w-8 h-8"
                  style={{ transform: "translateZ(100px) rotate(-15deg)" }}
                />
                <Droplet 
                  className="absolute top-20 right-10 text-white/30 w-6 h-6"
                  style={{ transform: "translateZ(120px) rotate(15deg)" }}
                />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
