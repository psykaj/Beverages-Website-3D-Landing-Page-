"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Globe } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-[var(--color-jace-red)] opacity-20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Big CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-32 pb-16 border-b border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight text-center md:text-left">
            Ready To Refresh Your Business With <span className="text-gradient">Premium Juice?</span>
          </h2>
          <MagneticButton className="bg-[var(--color-jace-red)] text-white hover:bg-red-600 whitespace-nowrap">
            Contact Now
          </MagneticButton>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h1 className="text-3xl font-bold text-white tracking-tighter">
                JACE<span className="text-[var(--color-jace-red)]">.</span>
              </h1>
            </Link>
            <p className="text-gray-400 max-w-sm font-light leading-relaxed mb-8">
              100% Pure, Refreshing, Premium Fruit Juice Crafted For Everyday Wellness. Taste nature's freshness in every sip.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Products', 'Why Jace', 'Reviews', 'About'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-[var(--color-jace-red)] flex-shrink-0" />
                <span>Quantum Towers, 305, Swami Vivekanand Road, Malad West, Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-3 text-[var(--color-jace-red)] flex-shrink-0" />
                <a href="mailto:hello@jacebeverage.com" className="hover:text-white transition-colors">hello@jacebeverage.com</a>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Globe className="w-4 h-4 mr-3 text-[var(--color-jace-red)] flex-shrink-0" />
                <a href="https://jacebeverage.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">jacebeverage.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Jace Beverages. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
