"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RheoleLogo from "./logo";

export default function Footer({ isGlobal = false }: { isGlobal?: boolean }) {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (isGlobal && (pathname === "/" || pathname === "/about" || pathname === "/intelligence" || pathname === "/experience")) return null;

  return (
    <footer className="w-full border-t border-brand-blue/5 dark:border-luxury-white/5 bg-transparent py-16 px-6 md:px-16 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Brand Column */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <RheoleLogo className="h-7 w-auto md:h-9" />
            <RheoleLogo variant="wordmark" className="h-7 md:h-9 w-auto" />
          </div>
          <p className="text-xs text-brand-blue/50 dark:text-luxury-white/40 max-w-xs leading-relaxed">
            The intelligence layer between people and the physical world.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
          {/* Company */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/30 font-medium">
              Company
            </span>
            <Link
              href="/about"
              className="text-xs uppercase tracking-wider text-brand-blue/70 dark:text-luxury-white/70 hover:text-brand-gold transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/manifesto"
              className="text-xs uppercase tracking-wider text-brand-blue/70 dark:text-luxury-white/70 hover:text-brand-gold transition-colors duration-300"
            >
              Manifesto
            </Link>
            <Link
              href="/founder-letter"
              className="text-xs uppercase tracking-wider text-brand-blue/70 dark:text-luxury-white/70 hover:text-brand-gold transition-colors duration-300"
            >
              Founder Letter
            </Link>
            <Link
              href="/careers"
              className="text-xs uppercase tracking-wider text-brand-blue/70 dark:text-luxury-white/70 hover:text-brand-gold transition-colors duration-300"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-xs uppercase tracking-wider text-brand-blue/70 dark:text-luxury-white/70 hover:text-brand-gold transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/30 font-medium">
              Platform
            </span>
            <Link
              href="/how-it-works"
              className="text-xs uppercase tracking-wider text-brand-blue/70 dark:text-luxury-white/70 hover:text-brand-gold transition-colors duration-300"
            >
              How It Works
            </Link>
            <Link
              href="/intelligence"
              className="text-xs uppercase tracking-wider text-brand-blue/70 dark:text-luxury-white/70 hover:text-brand-gold transition-colors duration-300"
            >
              Intelligence
            </Link>
            <Link
              href="/security"
              className="text-xs uppercase tracking-wider text-brand-blue/70 dark:text-luxury-white/70 hover:text-brand-gold transition-colors duration-300"
            >
              Security Policy
            </Link>
            <Link
              href="/security-architecture"
              className="text-xs uppercase tracking-wider text-brand-blue/70 dark:text-luxury-white/70 hover:text-brand-gold transition-colors duration-300"
            >
              Security Architecture
            </Link>
            <Link
              href="/privacy-architecture"
              className="text-xs uppercase tracking-wider text-brand-blue/70 dark:text-luxury-white/70 hover:text-brand-gold transition-colors duration-300"
            >
              Privacy Architecture
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
            <span className="text-xs uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/30 font-medium">
              Legal
            </span>
            <Link
              href="/privacy"
              className="text-xs uppercase tracking-wider text-brand-blue/70 dark:text-luxury-white/70 hover:text-brand-gold transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs uppercase tracking-wider text-brand-blue/70 dark:text-luxury-white/70 hover:text-brand-gold transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-brand-blue/5 dark:border-luxury-white/5 mt-16 pt-8 gap-4">
        <span className="text-[10px] uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/30">
          © {currentYear} RHEOLE PVT. LTD. ALL RIGHTS RESERVED.
        </span>
        <span className="text-[10px] uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/30">
          A PRODUCT OF IKHAGA LTD.
        </span>
      </div>
    </footer>
  );
}
