"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import RheoleLogo from "./logo";
export default function Navbar({ isGlobal = false }: { isGlobal?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global Navbar will always render
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Manifesto", path: "/manifesto" },
    { name: "Intelligence", path: "/intelligence" },
    { name: "Security", path: "/security" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 pointer-events-none"
    >
      <motion.div 
        layout
        className="pointer-events-auto flex items-center justify-between w-full px-6 md:px-12 py-4 spatial-glass transition-spring border-b border-brand-blue/5 dark:border-white/5"
        style={{
          boxShadow: scrolled ? "0 10px 30px -10px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <Link href="/" className="flex items-center gap-2 group haptic-press relative z-10">
          <RheoleLogo className="h-6 w-auto md:h-7 transition-spring group-hover:scale-105 group-hover:rotate-[360deg] drop-shadow-md" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            const isHovered = hovered === link.path;
            
            return (
              <Link
                key={link.name}
                href={link.path}
                onMouseEnter={() => setHovered(link.path)}
                onMouseLeave={() => setHovered(null)}
                className={`relative px-4 py-2 text-sm tracking-wide transition-spring z-10 ${
                  isActive || isHovered
                    ? "text-brand-blue font-medium dark:text-luxury-white"
                    : "text-brand-blue/60 hover:text-brand-blue dark:text-luxury-white/60 dark:hover:text-luxury-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-brand-gold/10 dark:bg-brand-gold/20 border border-brand-gold/20 dark:border-brand-gold/30 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4 pl-2 pr-1">
          <Link
            href="/founding-access"
            className="text-xs uppercase tracking-widest font-medium bg-brand-blue text-white dark:bg-luxury-white dark:text-brand-blue rounded-full px-5 py-2.5 haptic-press relative overflow-hidden group shadow-[0_0_20px_rgba(10,37,64,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10 transition-colors duration-300">Early Access</span>
            <div className="absolute inset-0 bg-brand-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}
