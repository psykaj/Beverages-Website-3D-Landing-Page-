"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { text: "I absolutely love Jace Pomegranate and Kokum Juice.", name: "Priya S." },
  { text: "The taste is amazing and refreshing.", name: "Rahul M." },
  { text: "Healthy and 100% pure juice.", name: "Amit K." },
  { text: "Everyone should try it.", name: "Neha R." },
  { text: "I keep buying it again and again.", name: "Vikram B." },
  { text: "I absolutely love Jace Pomegranate and Kokum Juice.", name: "Priya S." }, // Duplicate for seamless scroll
  { text: "The taste is amazing and refreshing.", name: "Rahul M." },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-jace-darker)] to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Trusted by <span className="text-gradient">Thousands</span>
        </h2>
        <div className="flex items-center justify-center gap-2 text-[var(--color-jace-gold)]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-current" />
          ))}
          <span className="text-white ml-2 text-xl font-bold">5.0</span>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Gradient fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-6 px-6 w-max"
        >
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="w-[300px] md:w-[400px] flex-shrink-0 glass-card p-8 rounded-3xl"
            >
              <div className="flex gap-1 text-[var(--color-jace-gold)] mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg text-white mb-6 font-light italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-jace-red)] to-purple-600 flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
