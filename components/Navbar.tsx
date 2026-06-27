"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User } from "lucide-react";
import RheoleLogo from "./logo";

export default function Navbar({ isGlobal = false }: { isGlobal?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuCategories = [
    {
      title: "Company",
      links: [
        { name: "About Manifesto", path: "/manifesto" },
        { name: "Intelligence", path: "/intelligence" },
        { name: "Security", path: "/security" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Platform",
      links: [
        { name: "How it Works", path: "/how-it-works" },
        { name: "Intelligence", path: "/intelligence" },
        { name: "Security Policy", path: "/security-policy" },
        { name: "Security Architecture", path: "/security-architecture" },
        { name: "Privacy Architecture", path: "/privacy-architecture" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Community Guidelines", path: "/community-guidelines" },
      ],
    },
  ];

  // Old navLinks left for desktop if needed, or we can hide them and only use hamburger
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
        className="pointer-events-auto flex items-center justify-between w-full px-6 md:px-12 py-4 spatial-glass transition-spring border-b border-brand-blue/5 dark:border-white/5 relative"
        style={{
          boxShadow: scrolled ? "0 10px 30px -10px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group haptic-press relative z-10">
            <RheoleLogo className="h-6 w-auto md:h-7 transition-spring group-hover:scale-105 group-hover:rotate-[360deg] drop-shadow-md" />
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-2 relative">
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

        {/* Action Button & Search */}
        <div className="flex items-center gap-2 md:gap-4 pl-2 pr-1 text-brand-blue dark:text-luxury-white">
          <button className="p-2 hover:bg-brand-blue/5 dark:hover:bg-white/5 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <Link
            href="/founding-access"
            className="p-2 hover:bg-brand-blue/5 dark:hover:bg-white/5 rounded-full transition-colors"
          >
            <User size={20} />
          </Link>

          <div 
            className="relative flex items-center h-full"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-brand-blue dark:text-luxury-white hover:opacity-70 transition-opacity z-50 relative p-1"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Hamburger Dropdown Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute top-full right-0 pt-4 z-50"
                >
                  <div className="w-screen max-w-[600px] pointer-events-auto bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-brand-blue/10 dark:border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                      {menuCategories.map((category) => (
                        <div key={category.title}>
                          <h3 className="text-sm font-semibold tracking-widest uppercase text-brand-gold mb-4">
                            {category.title}
                          </h3>
                          <ul className="space-y-3">
                            {category.links.map((link) => (
                              <li key={link.name}>
                                <Link 
                                  href={link.path}
                                  onClick={() => setMenuOpen(false)}
                                  className="text-brand-blue/70 hover:text-brand-blue dark:text-luxury-white/70 dark:hover:text-luxury-white text-sm transition-colors block"
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
