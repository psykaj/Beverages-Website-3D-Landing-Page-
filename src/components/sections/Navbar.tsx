"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "../ui/MagneticButton";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Why Jace", href: "#why-jace" },
  { name: "Reviews", href: "#reviews" },
  { name: "About", href: "#about" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav py-4 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <h1 className="text-2xl font-bold text-white tracking-tighter">
            JACE<span className="text-[var(--color-jace-red)]">.</span>
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-jace-red)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <MagneticButton className="hidden md:block bg-white text-black hover:bg-gray-100 text-sm">
            Contact Now
          </MagneticButton>
          
          <button className="md:hidden flex flex-col gap-1.5 z-10">
            <span className="w-6 h-[2px] bg-white block" />
            <span className="w-6 h-[2px] bg-white block" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
