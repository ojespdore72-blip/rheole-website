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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const allLinks = [
    { name: "About", path: "/about" },
    { name: "Manifesto", path: "/manifesto" },
    { name: "Intelligence", path: "/intelligence" },
    { name: "Security Policy", path: "/security" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
    { name: "How it Works", path: "/how-it-works" },
    { name: "Security Architecture", path: "/security-architecture" },
    { name: "Privacy Architecture", path: "/privacy-architecture" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Community Guidelines", path: "/community-guidelines" }
  ];

  const filteredLinks = searchQuery 
    ? allLinks.filter(link => link.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuCategories = [
    {
      title: "Company",
      links: [
        { name: "About", path: "/about" },
        { name: "Manifesto", path: "/manifesto" },
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
        { name: "Security Policy", path: "/security" },
        { name: "Security Architecture", path: "/security-architecture" },
        { name: "Privacy Architecture", path: "/privacy-architecture" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
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
    <>
      <header className="fixed top-0 left-0 right-0 z-[999] pointer-events-none">
        <motion.div 
        layout
        className={`pointer-events-auto flex items-center justify-between w-full px-6 md:px-12 py-4 transition-all duration-500 relative z-[100] ${
          scrolled
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-brand-blue/10 dark:border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
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
                    : "text-brand-blue/70 hover:text-brand-blue dark:text-luxury-white/60 dark:hover:text-luxury-white"
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
          <div className="relative flex items-center">
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="absolute right-full mr-2 overflow-visible"
                >
                  <input
                    type="text"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Navigate..."
                    style={{ outline: 'none', boxShadow: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                    className="w-[200px] bg-transparent !border-t-0 !border-x-0 border-b-2 border-brand-blue/30 dark:border-white/30 !outline-none !ring-0 focus:!ring-0 focus:!outline-none focus:!border-t-0 focus:!border-x-0 focus:border-b-brand-gold text-sm py-1 placeholder:text-brand-blue/40 dark:placeholder:text-white/40 appearance-none"
                  />
                  
                  {/* Suggestions Dropdown */}
                  {searchQuery && (
                    <div className="absolute top-full mt-2 w-full bg-white dark:bg-black border border-brand-blue/10 dark:border-white/10 rounded-lg shadow-xl overflow-hidden py-2 z-[1001]">
                      {filteredLinks.length > 0 ? (
                        filteredLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.path}
                            onClick={() => {
                              setSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="block px-4 py-2 text-sm text-brand-blue/70 dark:text-white/70 hover:bg-brand-blue/5 dark:hover:bg-white/5 hover:text-brand-blue dark:hover:text-white transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-sm text-brand-blue/50 dark:text-white/50">
                          No sections found.
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            <button 
              onClick={() => setSearchOpen(!searchOpen)} 
              className="p-2 hover:bg-brand-blue/5 dark:hover:bg-white/5 rounded-full transition-colors z-10"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </div>
          <Link
            href="/founding-access"
            className="p-2 hover:bg-brand-blue/5 dark:hover:bg-white/5 rounded-full transition-colors"
          >
            <User size={20} />
          </Link>

          <div className="relative flex items-center h-full">
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
                  className="fixed inset-0 top-[70px] md:absolute md:inset-auto md:top-full md:right-0 md:pt-4 z-50"
                >
                  <div className="w-full h-[calc(100vh-70px)] md:w-screen md:h-auto md:max-w-[600px] pointer-events-auto bg-luxury-white/95 dark:bg-luxury-black/95 backdrop-blur-xl border-t md:border border-brand-blue/10 dark:border-white/10 md:rounded-2xl p-6 md:p-8 shadow-2xl overflow-y-auto md:overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pb-24 md:pb-0">
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
    </header>

    </>
  );
}
