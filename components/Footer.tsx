"use client";

import React from "react";
import Link from "next/link";
import RheoleLogo from "./logo";
import ScrollReveal from "./ScrollReveal";

export default function Footer({ isGlobal = false }: { isGlobal?: boolean }) {
  const footerCategories = [
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
      title: "Support",
      links: [
        { name: "Trust Center", path: "/trust-center" },
        { name: "Privacy", path: "/privacy" },
        { name: "Security", path: "/security" },
        { name: "Terms", path: "/terms" },
        { name: "Contact", path: "/support" },
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
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-8">
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
