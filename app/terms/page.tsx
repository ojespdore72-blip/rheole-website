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

export default function TermsOfService() {
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
    { id: "acceptance", label: "Acceptance of Terms" },
    { id: "eligibility", label: "Eligibility" },
    { id: "platform-usage", label: "Use of the Platform" },
    { id: "content", label: "User Content" },
    { id: "liability", label: "Limitation of Liability" },
    { id: "termination", label: "Termination" },
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
            <h1 className="text-5xl md:text-7xl font-light font-serif-editorial leading-tight mb-6">Terms of Service</h1>
            <p className="text-sm font-mono text-brand-blue/40 dark:text-white/40 tracking-widest uppercase">Last Updated: October 24, 2024</p>
          </div>

          <Section id="acceptance" title="1. Acceptance of Terms" summary="By using Rheole, you agree to these terms. If you don't agree, please do not use the service.">
            <p>These Terms of Service ("Terms") dictate your access to and use of Rheole and its associated infrastructure (collectively, the "Platform"), operated by Rheole Technologies Private Limited ("Rheole", "we", "us", or "our").</p>
            <p>By registering, accessing, or utilizing the Platform, you acknowledge that you have read, comprehended, and agreed to be legally bound by these Terms. If you do not agree, you must immediately cease all use of the Platform.</p>
          </Section>

          <Section id="eligibility" title="2. Eligibility" summary="You must be at least 13 years old to use Rheole.">
            <p>You must be at least 13 years of age (or the age of digital consent in your jurisdiction, whichever is greater) to use the Platform. By agreeing to these Terms, you represent and warrant that you meet these age requirements and possess the legal capacity to enter into a binding contract.</p>
          </Section>

          <Section id="platform-usage" title="3. Use of the Platform" summary="Use the platform legally and respectfully. Don't hack us, scrape us, or harass others.">
            <p>We grant you a personal, worldwide, royalty-free, non-assignable, and non-exclusive license to use the software provided to you as part of the Platform. This license is for the sole purpose of enabling you to use and enjoy the benefit of the Platform as provided by Rheole, in the manner permitted by these Terms.</p>
            <p>You explicitly agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-brand-blue/80 dark:text-white/80">
              <li>Use the Platform for any unlawful purpose or for the promotion of illegal activities.</li>
              <li>Attempt to reverse engineer, decompile, or extract the source code of the Platform.</li>
              <li>Scrape, datamine, or deploy automated scripts to extract spatial intelligence data.</li>
              <li>Interfere with or disrupt the access of any user, host, or network.</li>
            </ul>
          </Section>

          <Section id="content" title="4. User Content" summary="You own what you post. But you give us permission to display it on the platform.">
            <p>You retain your rights to any content you submit, post, or display on or through the Platform. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content in any and all media or distribution methods.</p>
            <p>You are solely responsible for your use of the Platform, for any content you provide, and for any consequences thereof. Rheole assumes no liability for content posted by users.</p>
          </Section>

          <Section id="liability" title="5. Limitation of Liability" summary="Rheole is provided 'as is'. We aren't liable if things break, or if you rely on our recommendations and get lost.">
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, RHEOLE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-brand-blue/80 dark:text-white/80">
              <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE PLATFORM.</li>
              <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE PLATFORM.</li>
              <li>ANY CONTENT OBTAINED FROM THE PLATFORM.</li>
              <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.</li>
            </ul>
          </Section>

          <Section id="termination" title="6. Termination" summary="We can suspend or terminate your account if you violate these terms.">
            <p>We may suspend or terminate your account or cease providing you with all or part of the Platform at any time for any or no reason, including, but not limited to, if we reasonably believe you have violated these Terms.</p>
            <p>You may end your legal agreement with us at any time by deactivating your account and discontinuing your use of the Platform.</p>
          </Section>

        </article>
      </main>
    </div>
  );
}
