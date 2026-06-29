"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import RheoleLogo from "./logo";

export default function Navbar({ isGlobal = false }: { isGlobal?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { name: "Platform", path: "/platform" },
    { name: "Developers", path: "/developers" },
    { name: "Research", path: "/research" },
    { name: "Company", path: "/about" },
  ];

  const menuCategories = [
    {
      title: "Product",
      links: [
        { name: "Platform", path: "/platform" },
        { name: "Models", path: "/models" },
        { name: "Technology", path: "/technology" },
        { name: "Architecture", path: "/architecture" },
      ],
    },
    {
      title: "Developers",
      links: [
        { name: "Docs", path: "/docs" },
        { name: "API Reference", path: "/api-reference" },
        { name: "SDKs", path: "/sdks" },
        { name: "Tutorials", path: "/tutorials" },
        { name: "Integrations", path: "/integrations" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Overview", path: "/solutions" },
        { name: "Industries", path: "/industries" },
        { name: "Case Studies", path: "/case-studies" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", path: "/about" },
        { name: "Manifesto", path: "/manifesto" },
        { name: "Intelligence", path: "/intelligence" },
        { name: "Careers", path: "/careers" },
        { name: "Research", path: "/research" },
        { name: "Blog", path: "/blog" },
        { name: "Press", path: "/press" },
      ],
    },
    {
      title: "Legal & Support",
      links: [
        { name: "Trust Center", path: "/trust-center" },
        { name: "Privacy", path: "/privacy" },
        { name: "Security", path: "/security" },
        { name: "Terms", path: "/terms" },
        { name: "Support", path: "/support" },
      ],
    },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[999] pointer-events-none">
        <motion.div 
          layout
          className={`pointer-events-auto flex items-center justify-between w-full px-6 md:px-12 py-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative z-[100] ${
            scrolled
              ? "bg-[rgba(8,8,8,0.85)] backdrop-blur-[24px] saturate-[180%] border-b border-[rgba(255,255,255,0.05)]"
              : "bg-transparent border-b border-transparent"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group relative z-10 interactive">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: mounted ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <RheoleLogo className="h-[20px] w-auto transition-opacity duration-300 group-hover:opacity-80" />
              </motion.div>
            </Link>
          </div>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`nav-link transition-colors duration-200 interactive ${
                    isActive
                      ? "text-[#F2F2F0]"
                      : "text-[#6A6A6A] hover:text-[#F2F2F0]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <Link
              href="/founding-access"
              className="hidden md:flex items-center justify-center h-10 px-6 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] text-[#F2F2F0] text-[13px] tracking-[0.08em] uppercase transition-all duration-300 hover:border-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.1)] interactive"
            >
              Founding Access
            </Link>

            <button 
              onClick={() => setMenuOpen(true)}
              className="text-[#6A6A6A] hover:text-[#F2F2F0] transition-colors interactive p-1"
              aria-label="Open Menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[1000] bg-[#080808] flex flex-col"
          >
            {/* Overlay Header */}
            <div className="flex items-center justify-between w-full px-6 md:px-12 py-5 border-b border-[rgba(255,255,255,0.05)]">
              <RheoleLogo className="h-[20px] w-auto opacity-50" />
              <button 
                onClick={() => setMenuOpen(false)}
                className="text-[#6A6A6A] hover:text-[#F2F2F0] transition-colors interactive p-1"
                aria-label="Close Menu"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Overlay Content */}
            <div className="flex-1 overflow-y-auto px-6 md:px-12 py-12 md:py-24">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-8">
                {menuCategories.map((category, catIdx) => (
                  <div key={category.title}>
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + (catIdx * 0.05), duration: 0.5 }}
                      className="section-eyebrow mb-8"
                    >
                      {category.title}
                    </motion.h3>
                    <ul className="space-y-6">
                      {category.links.map((link, linkIdx) => (
                        <motion.li 
                          key={link.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (catIdx * 0.05) + (linkIdx * 0.05), duration: 0.4 }}
                        >
                          <Link 
                            href={link.path}
                            onClick={() => setMenuOpen(false)}
                            className="text-xl md:text-2xl font-light text-[#6A6A6A] hover:text-[#F2F2F0] transition-colors interactive"
                          >
                            {link.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Overlay Footer */}
            <div className="px-6 md:px-12 py-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center gap-4">
               <Link
                href="/founding-access"
                onClick={() => setMenuOpen(false)}
                className="flex md:hidden w-full items-center justify-center h-12 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] text-[#F2F2F0] text-[13px] tracking-[0.08em] uppercase transition-all duration-300 interactive"
              >
                Founding Access
              </Link>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#3A3A3A]">
                © 2026 IKHAGA LTD.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
