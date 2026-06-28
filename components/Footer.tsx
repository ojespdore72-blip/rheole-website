"use client";

import React from "react";
import Link from "next/link";
import RheoleLogo from "./logo";
import ScrollReveal from "./ScrollReveal";

export default function Footer({ isGlobal = false }: { isGlobal?: boolean }) {
  const footerCategories = [
    {
      title: "Company",
      links: [
        { name: "About", path: "/about" },
        { name: "Manifesto", path: "/manifesto" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Platform",
      links: [
        { name: "How it Works", path: "/how-it-works" },
        { name: "Intelligence", path: "/intelligence" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#080808] border-t border-[rgba(255,255,255,0.02)] pt-24 pb-8 overflow-hidden z-10 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
            
            {/* Brand Column */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <Link href="/" className="interactive flex items-center gap-3 w-max">
                <RheoleLogo className="h-[24px] w-auto opacity-90" />
                <RheoleLogo variant="wordmark" className="h-[20px] w-auto opacity-90" />
              </Link>
              <p className="text-[14px] text-[#6A6A6A] font-light max-w-[280px] leading-relaxed">
                The intelligence layer between people and the physical world.
              </p>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerCategories.map((category) => (
                <div key={category.title} className="flex flex-col gap-6">
                  <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#3A3A3A] font-medium">
                    {category.title}
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {category.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.path}
                          className="text-[14px] text-[#6A6A6A] hover:text-[#F2F2F0] transition-colors duration-150 interactive"
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
        </ScrollReveal>

        {/* Bottom Bar */}
        <ScrollReveal delay={0.2}>
          <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-[#3A3A3A]">
              © {new Date().getFullYear()} Rheole. All rights reserved.
            </p>
            <p className="text-[11px] text-[#3A3A3A] uppercase tracking-[0.1em]">
              A PRODUCT OF IKHAGA LTD.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
