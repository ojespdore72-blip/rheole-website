"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RheoleLogo from "./logo";

export default function Navbar({ isGlobal = false }: { isGlobal?: boolean }) {
  const pathname = usePathname();

  if (isGlobal && (pathname === "/" || pathname === "/about" || pathname === "/intelligence" || pathname === "/experience")) return null;
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Manifesto", path: "/manifesto" },
    { name: "Security", path: "/security" },
    { name: "Developer", path: "/developer" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 bg-transparent">
        <Link href="/" className="flex items-center gap-3 group">
          <RheoleLogo className="h-5 w-auto md:h-6 transition-transform duration-500 group-hover:rotate-180" />
          <RheoleLogo variant="wordmark" className="h-5 md:h-6 w-auto" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
                  isActive
                    ? "text-brand-gold font-medium"
                    : "text-brand-blue/70 dark:text-luxury-white/70 hover:text-brand-blue dark:hover:text-luxury-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Small CTA / Waitlist Shortcut */}
        <div className="flex items-center gap-4">
          <Link
            href="/founding-access"
            className="hidden sm:inline-flex text-xs uppercase tracking-widest font-medium border border-brand-blue/20 dark:border-luxury-white/20 hover:border-brand-gold/75 rounded-full px-5 py-2 transition-all duration-300 text-brand-blue dark:text-luxury-white hover:text-brand-gold"
          >
            Join the Future
          </Link>
          
          {/* Mobile menu trigger - very minimal */}
          <Link
            href="/founding-access"
            className="md:hidden text-xs uppercase tracking-widest text-brand-gold font-medium"
          >
            Join
          </Link>
        </div>
      </div>
    </header>
  );
}
