"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import RheoleLogo from "./logo";

export default function Navbar({ isGlobal = false }: { isGlobal?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isGlobal && (pathname === "/" || pathname === "/about" || pathname === "/intelligence" || pathname === "/experience")) return null;
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Manifesto", path: "/manifesto" },
    { name: "Security", path: "/security" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${scrolled ? "pt-4 px-4" : "pt-8 px-6 md:px-12"}`}
    >
      <motion.div 
        layout
        className="w-full max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-3 spatial-glass rounded-full transition-spring"
      >
        <Link href="/" className="flex items-center gap-4 group haptic-press">
          <RheoleLogo className="h-6 w-auto md:h-7 transition-spring group-hover:scale-110 group-hover:rotate-180 drop-shadow-md" />
          <RheoleLogo variant="wordmark" className="h-5 w-auto md:h-6 transition-spring group-hover:scale-105 drop-shadow-md" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm tracking-widest uppercase transition-spring relative group ${
                  isActive
                    ? "text-brand-blue font-medium"
                    : "text-brand-blue/70 hover:text-brand-blue"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-brand-gold transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} origin-left`} />
              </Link>
            );
          })}
        </nav>

        {/* Small CTA / Waitlist Shortcut */}
        <div className="flex items-center gap-4">
          <Link
            href="/founding-access"
            className="hidden sm:inline-flex text-xs uppercase tracking-widest font-medium border border-brand-blue/20 hover:border-brand-gold rounded-full px-5 py-2 haptic-press relative overflow-hidden group"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Join the Future</span>
            <div className="absolute inset-0 bg-brand-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </Link>
          
          {/* Mobile menu trigger */}
          <Link
            href="/founding-access"
            className="md:hidden text-xs uppercase tracking-widest text-brand-gold font-medium haptic-press"
          >
            Join
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}
