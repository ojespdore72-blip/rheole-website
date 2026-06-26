"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Section = ({ id, title, summary, children }: any) => (
  <section id={id} className="relative pt-32 -mt-32 mb-24 scroll-mt-32 group">
    <div className="flex flex-col xl:flex-row gap-12">
      <div className="w-full xl:w-1/3">
        <div className="sticky top-40 flex flex-col gap-4">
          <h2 className="text-2xl font-light font-serif-editorial text-brand-blue dark:text-white">{title}</h2>
          <div className="p-6 spatial-glass rounded-2xl border border-brand-blue/10 dark:border-white/10 bg-brand-gold/5 opacity-80 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-brand-gold block mb-2">Plain English</span>
            <p className="text-sm font-light text-brand-blue/70 dark:text-white/70 leading-relaxed">{summary}</p>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-2/3 prose prose-invert max-w-none text-brand-blue/60 dark:text-white/60 font-light text-base md:text-lg leading-relaxed">
        {children}
      </div>
    </div>
  </section>
);

export default function PrivacyPolicy() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toc = [
    { id: "introduction", label: "Introduction" },
    { id: "information-collection", label: "Information We Collect" },
    { id: "data-usage", label: "How We Use Data" },
    { id: "data-sharing", label: "Information Sharing" },
    { id: "security", label: "Data Security" },
    { id: "rights", label: "Your Rights" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-luxury-white dark:bg-[#020205] text-brand-blue dark:text-white font-sans selection:bg-brand-gold/20">
      
      {/* Reading Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand-gold origin-left z-50" style={{ scaleX }} />

      <main className="max-w-screen-2xl mx-auto px-6 lg:px-12 pt-40 pb-32 flex gap-16 relative">
        
        {/* Sticky Table of Contents Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-40 flex flex-col gap-8">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-brand-gold">Contents</span>
            <nav className="flex flex-col gap-4 border-l border-brand-blue/10 dark:border-white/10">
              {toc.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className={`pl-4 text-xs tracking-widest uppercase transition-colors relative ${activeSection === item.id ? 'text-brand-gold' : 'text-brand-blue/40 dark:text-white/40 hover:text-brand-blue dark:hover:text-white'}`}
                >
                  {activeSection === item.id && (
                    <motion.div layoutId="active-toc" className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-brand-gold" />
                  )}
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <article className="flex-grow max-w-4xl">
          <div className="mb-24">
            <h1 className="text-5xl md:text-7xl font-light font-serif-editorial leading-tight mb-6">Privacy Policy</h1>
            <p className="text-sm font-mono text-brand-blue/40 dark:text-white/40 tracking-widest uppercase">Last Updated: October 24, 2024</p>
          </div>

          <Section id="introduction" title="1. Introduction" summary="We care about your privacy. We don't sell your data. This document explains what we collect and why.">
            <p>At Rheole ("we," "us," or "our"), we respect your privacy and are committed to protecting it. This Privacy Policy governs your access to and use of Rheole (the "Platform"). We believe that ambient intelligence requires absolute trust, and we have designed our infrastructure to reflect that belief.</p>
            <p>Please read this policy carefully. By accessing the Platform, you agree to the collection and use of your information in accordance with this policy.</p>
          </Section>

          <Section id="information-collection" title="2. Information We Collect" summary="We collect basic account info, and context like your location when you explicitly use our spatial features.">
            <p>To provide our services, we collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-brand-blue/80 dark:text-white/80">
              <li><strong>Personal Identifiers:</strong> Name, email address, and authentication credentials.</li>
              <li><strong>Spatial Data:</strong> Your geographical location (only when explicit permission is granted) to provide local intelligence and context.</li>
              <li><strong>Behavioral Context:</strong> Interaction metrics and explicit preferences to refine ambient recommendations.</li>
              <li><strong>Technical Data:</strong> Device identifiers, IP addresses, and diagnostic information to ensure platform stability.</li>
            </ul>
          </Section>

          <Section id="data-usage" title="3. How We Use Your Data" summary="Your data is used strictly to make the app work and give you better local recommendations.">
            <p>Your information is used exclusively to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-brand-blue/80 dark:text-white/80">
              <li>Deliver spatial intelligence and contextual recommendations in real time.</li>
              <li>Secure your account and verify interactions.</li>
              <li>Improve and optimize the performance of our distributed systems.</li>
              <li>Communicate essential service updates and policy changes.</li>
            </ul>
            <p className="mt-4 italic">We do not construct persistent profiles for third-party advertising.</p>
          </Section>

          <Section id="data-sharing" title="4. Information Sharing" summary="We never sell your data. We only share it with essential service providers who are contractually bound to keep it secure.">
            <p>We do not monetize your personal information. We may share data only under the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-brand-blue/80 dark:text-white/80">
              <li><strong>Service Providers:</strong> With trusted infrastructure partners (e.g., hosting, email delivery) who operate under strict confidentiality agreements.</li>
              <li><strong>Legal Compliance:</strong> When required by lawful requests from public authorities or to protect our legal rights.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or restructuring, subject to continued privacy protections.</li>
            </ul>
          </Section>

          <Section id="security" title="5. Data Security" summary="We use end-to-end encryption and ephemeral memory to ensure your data stays yours.">
            <p>We implement zero-knowledge architecture principles where feasible. Sensitive spatial computations occur in ephemeral memory enclaves and are destroyed immediately upon resolution.</p>
            <p>While we use commercially reasonable methods to protect your data, no method of transmission over the Internet is entirely secure. We continuously update our security protocols to mitigate emerging threats.</p>
          </Section>

          <Section id="rights" title="6. Your Rights" summary="You have complete control over your data. You can delete it, request it, or modify it at any time.">
            <p>You maintain absolute control over your digital footprint. You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-brand-blue/80 dark:text-white/80">
              <li>Access, modify, or permanently delete your personal data.</li>
              <li>Revoke spatial tracking permissions at any time via device settings.</li>
              <li>Request an export of the data we hold concerning your account.</li>
            </ul>
            <p className="mt-4">To exercise these rights, please contact us at <a href="mailto:privacy@rheole.com" className="text-brand-gold hover:underline">privacy@rheole.com</a>.</p>
          </Section>

        </article>
      </main>
    </div>
  );
}
