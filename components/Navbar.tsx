"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import RheoleLogo from "./logo";

export default function Navbar({ isGlobal = false }: { isGlobal?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Intelligence Mega Menu Structure (Apple Style)
  const intelligenceColumns = [
    {
      title: "Understand",
      items: [
        { name: "Intent Intelligence", path: "/intent-intelligence" },
        { name: "Context Intelligence", path: "/context-intelligence" },
        { name: "Living Conditions", path: "/environmental-intelligence" },
        { name: "Curiosity Intelligence", path: "/curiosity-intelligence" },
        { name: "Rhythm Intelligence", path: "/rhythm-intelligence" },
      ]
    },
    {
      title: "Connect",
      items: [
        { name: "Friends", path: "/friends" },
        { name: "Founders", path: "/founding-access" },
        { name: "Communities", path: "/communities" },
        { name: "Neighbourhoods", path: "/neighbourhood-intelligence" },
      ]
    },
    {
      title: "Navigation",
      items: [
        { name: "Smart Routing", path: "/smart-routing" },
        { name: "Transit", path: "/transit" },
        { name: "Movement Intelligence", path: "/movement-intelligence" },
        { name: "Live Traffic", path: "/live-traffic" },
      ]
    },
    {
      title: "Discover",
      items: [
        { name: "Places", path: "/places" },
        { name: "Events", path: "/events" },
        { name: "Businesses", path: "/businesses" },
        { name: "Exploration", path: "/exploration" },
      ]
    }
  ];

  // Company Mega Menu Structure (Apple Style)
  const companyColumns = [
    {
      title: "About Rheole",
      large: true,
      items: [
        { name: "Founder Letter", path: "/founder-letter" },
        { name: "Careers", path: "/careers" },
      ]
    },
    {
      title: "Support & Contact",
      items: [
        { name: "Contact Us", path: "/contact" },
        { name: "Global Offices", path: "/contact" },
      ]
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
      ]
    }
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const springTransition = { type: "spring" as const, stiffness: 400, damping: 40, mass: 0.8 };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[999] pointer-events-none flex justify-center px-4 pt-4 md:px-8 md:pt-6 transition-all duration-500">
        <motion.div 
          layout
          className={`pointer-events-auto flex items-center justify-between w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative z-[100] rounded-[24px] border ${
            scrolled
              ? "bg-[#030303]/85 backdrop-blur-2xl saturate-150 border-white/[0.08] max-w-[1200px] px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-transparent border-transparent max-w-[1400px] px-2 py-4"
          }`}
        >
          {/* Left: Logo */}
          <div className="flex items-center w-[200px]">
            <Link href="/" className="flex items-center group relative z-10 outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/50 rounded-md">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: mounted ? 1 : 0, scale: scrolled ? 0.95 : 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <RheoleLogo className="h-[20px] w-auto transition-opacity duration-300 group-hover:opacity-80" />
              </motion.div>
            </Link>
          </div>

          {/* Center: Primary Navigation */}
          {/* INCREASED GAP TO gap-8 (was gap-2) */}
          <nav className="hidden lg:flex items-center gap-8" onMouseLeave={() => setActiveDropdown(null)}>
            <Link href="/manifesto" className="nav-text" onMouseEnter={() => setActiveDropdown(null)}>
              Manifesto
            </Link>
            <Link href="/about" className="nav-text" onMouseEnter={() => setActiveDropdown(null)}>
              About
            </Link>
            
            <div className="relative" onMouseEnter={() => setActiveDropdown("intelligence")}>
              <button className={`nav-text ${activeDropdown === "intelligence" ? "text-[#F2F2F0]" : ""}`}>
                Intelligence
              </button>
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown("company")}>
              <button className={`nav-text ${activeDropdown === "company" ? "text-[#F2F2F0]" : ""}`}>
                Company
              </button>
            </div>
          </nav>

          {/* Right: CTA */}
          <div className="flex items-center justify-end w-[200px] gap-4">
            <Link
              href="/founding-access"
              className="hidden md:flex items-center justify-center h-8 px-4 rounded-full border border-white/[0.1] bg-transparent text-[#F2F2F0] text-[12px] font-medium transition-all duration-300 hover:bg-white hover:text-black outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Founding Access
            </Link>

            <button 
              onClick={() => setMenuOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full border border-white/[0.08] bg-[#050505] flex items-center justify-center text-[#F2F2F0] transition-colors hover:bg-white/[0.05] outline-none"
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mega Dropdown Panel */}
          {/* Using fixed positioning to stretch across the entire screen width */}
          <AnimatePresence>
            {activeDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -5, filter: "blur(2px)", transition: { duration: 0.2 } }}
                transition={springTransition}
                onMouseEnter={() => setActiveDropdown(activeDropdown)}
                onMouseLeave={() => setActiveDropdown(null)}
                className="fixed top-[80px] left-0 right-0 w-full bg-[#080808]/95 backdrop-blur-3xl border-t border-b border-white/[0.05] shadow-[0_32px_64px_rgba(0,0,0,0.6)] overflow-hidden pointer-events-auto"
              >
                <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 py-12">
                  
                  {activeDropdown === "intelligence" && (
                    <div className="flex justify-between gap-8">
                      {intelligenceColumns.map((col, i) => (
                        <div key={i} className="flex flex-col gap-5 flex-1">
                          <h4 className="text-[12px] text-[#6A6A6A] font-medium">{col.title}</h4>
                          <ul className="flex flex-col gap-3">
                            {col.items.map((item, j) => (
                              <li key={j}>
                                <Link 
                                  href={item.path} 
                                  onClick={() => setActiveDropdown(null)} 
                                  className="text-[14px] text-[#D0D0D0] hover:text-white transition-colors font-medium block"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeDropdown === "company" && (
                    <div className="flex gap-16">
                      {companyColumns.map((col, i) => (
                        <div key={i} className="flex flex-col gap-5 min-w-[200px]">
                          <h4 className="text-[12px] text-[#6A6A6A] font-medium">{col.title}</h4>
                          <ul className="flex flex-col gap-3">
                            {col.items.map((item, j) => (
                              <li key={j}>
                                <Link 
                                  href={item.path} 
                                  onClick={() => setActiveDropdown(null)} 
                                  className={`${col.large ? 'text-[20px] font-semibold text-[#F2F2F0] hover:text-white' : 'text-[14px] text-[#D0D0D0] hover:text-white font-medium'} transition-colors block`}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </header>

      {/* Full Screen Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[1000] bg-[#030303] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between w-full px-6 py-6 border-b border-white/[0.04]">
              <RheoleLogo className="h-[20px] w-auto opacity-90" />
              <button 
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center text-[#A0A0A0] hover:text-[#F2F2F0] transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-12">
              <div className="flex flex-col gap-12 max-w-[400px] mx-auto">
                <Link href="/manifesto" onClick={() => setMenuOpen(false)} className="text-[28px] font-serif-editorial text-[#F2F2F0] font-light">Manifesto</Link>
                <Link href="/about" onClick={() => setMenuOpen(false)} className="text-[28px] font-serif-editorial text-[#F2F2F0] font-light">About</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .nav-text {
          @apply text-[13px] text-[#8A8A8A] transition-colors duration-300 hover:text-[#F2F2F0] outline-none;
        }
      `}</style>
    </>
  );
}
