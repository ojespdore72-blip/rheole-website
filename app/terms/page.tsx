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
      <div className="w-full xl:w-2/3 prose prose-invert max-w-none text-brand-blue/70 dark:text-white/70 font-light text-base md:text-lg leading-relaxed">
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
                  className={`pl-4 text-xs tracking-widest uppercase transition-colors relative ${activeSection === item.id ? 'text-brand-gold' : 'text-brand-blue/70 dark:text-white/70 hover:text-brand-blue dark:hover:text-white'}`}
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
            <p className="text-sm font-mono text-brand-blue/70 dark:text-white/70 tracking-widest uppercase">Last Updated: October 24, 2024</p>
          </div>

          <Section id="acceptance" title="1. Acceptance of Terms" summary="By using Rheole, you agree to these terms. If you don't agree, please do not use the service.">
            <p>These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Rheole Technologies Private Limited ("Rheole", "we", "us", or "our"). These Terms govern your access to and use of the Rheole website, applications, and all associated infrastructure, products, and services (collectively, the "Platform").</p>
            <p className="mt-4">By registering for an account, accessing, browsing, or in any way utilizing the Platform, you acknowledge that you have read, comprehended, and unconditionally agreed to be bound by these Terms, as well as our Privacy Policy. This forms a legal contract. If you do not agree with all of these Terms, you are expressly prohibited from using the Platform and must discontinue use immediately.</p>
            <p className="mt-4">We reserve the right to make changes or modifications to these Terms at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of these Terms, and you waive any right to receive specific notice of each such change. Your continued use of the Platform after such modifications constitutes your acceptance of the revised Terms.</p>
          </Section>

          <Section id="eligibility" title="2. Eligibility and Registration" summary="You must be at least 13 years old and provide accurate information to use Rheole.">
            <p>To access certain features of the Platform, you may be required to register for an account. By creating an account and agreeing to these Terms, you represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4 text-brand-blue/80 dark:text-white/80">
              <li><strong>Age Requirement:</strong> You are at least 13 years of age. If you are under the age of majority in your jurisdiction (typically 18), you must have the permission of, and be directly supervised by, your parent or guardian to use the Platform.</li>
              <li><strong>Accuracy of Information:</strong> All registration information you submit is truthful, accurate, current, and complete, and you will maintain the accuracy of such information.</li>
              <li><strong>Legal Capacity:</strong> You possess the legal capacity to enter into binding contracts under applicable law.</li>
            </ul>
            <p className="mt-4">You are entirely responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You agree to notify Rheole immediately of any unauthorized use of your account.</p>
          </Section>

          <Section id="platform-usage" title="3. Acceptable Use of the Platform" summary="Use the platform legally and respectfully. Don't hack us, scrape us, or harass others.">
            <p>Subject to your compliance with these Terms, Rheole grants you a personal, worldwide, royalty-free, non-assignable, non-transferable, and non-exclusive license to use the software provided to you as part of the Platform. This license is strictly for your personal, non-commercial use.</p>
            <p className="mt-4">As a condition of use, you explicitly agree <strong>NOT</strong> to engage in any of the following prohibited activities:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4 text-brand-blue/80 dark:text-white/80">
              <li><strong>Illegal Acts:</strong> Using the Platform for any unlawful purpose, or to solicit others to perform or participate in any unlawful acts.</li>
              <li><strong>Reverse Engineering:</strong> Attempting to reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code, underlying ideas, algorithms, or architecture of the Platform.</li>
              <li><strong>Data Extraction:</strong> Deploying automated scripts, spiders, robots, or scrapers to extract, harvest, or datamine spatial intelligence data, user information, or proprietary algorithms from the Platform.</li>
              <li><strong>Interference:</strong> Interfering with, bypassing, or disrupting the security features of the Platform, or placing an unreasonable load on our infrastructure (e.g., Denial of Service attacks).</li>
              <li><strong>Harassment:</strong> Using the platform to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability.</li>
            </ul>
          </Section>

          <Section id="content" title="4. User-Generated Content" summary="You own what you post. But you give us permission to display it on the platform.">
            <p>The Platform may allow you to create, submit, post, display, transmit, or otherwise make available content, including but not limited to text, images, location notes, and feedback (collectively, "User Content").</p>
            <p className="mt-4"><strong>Ownership:</strong> You retain full ownership of all your intellectual property rights in your User Content. Rheole does not claim ownership over what you post.</p>
            <p className="mt-4"><strong>License Granted to Rheole:</strong> However, by submitting User Content to the Platform, you automatically grant Rheole a worldwide, non-exclusive, royalty-free, fully paid, sublicensable, and transferable license to use, host, store, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in connection with operating, providing, and improving the Platform.</p>
            <p className="mt-4"><strong>Responsibility:</strong> You are solely responsible for your User Content and the consequences of posting it. You warrant that you own or have the necessary licenses to use and authorize us to use all intellectual property rights in your User Content. Rheole assumes absolutely no liability for any content posted by you or any third party.</p>
          </Section>

          <Section id="liability" title="5. Disclaimers and Limitation of Liability" summary="Rheole is provided 'as-is'. We aren't liable if things break, or if you rely on our recommendations and incur losses.">
            <p><strong>Disclaimer of Warranties:</strong> THE PLATFORM IS PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. RHEOLE EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. YOU USE THE SPATIAL INTELLIGENCE AND RECOMMENDATIONS AT YOUR OWN RISK.</p>
            <p className="mt-4"><strong>Limitation of Liability:</strong> TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL RHEOLE, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-brand-blue/80 dark:text-white/80">
              <li>YOUR USE OF OR INABILITY TO USE THE PLATFORM;</li>
              <li>ANY CONDUCT, CONTENT, OR ACTIONS OF ANY THIRD PARTY ON THE PLATFORM;</li>
              <li>ANY RELIANCE ON AMBIENT OR SPATIAL DATA OBTAINED FROM THE PLATFORM;</li>
              <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR DATA.</li>
            </ul>
            <p className="mt-4">Notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us during the six (6) month period prior to any cause of action arising.</p>
          </Section>

          <Section id="termination" title="6. Term and Termination" summary="We can suspend or terminate your account if you violate these terms. You can also leave at any time.">
            <p>These Terms shall remain in full force and effect while you use the Platform. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE PLATFORM (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OR OF ANY APPLICABLE LAW OR REGULATION.</p>
            <p className="mt-4">We may terminate your use or participation in the Platform or delete your account and any content or information that you posted at any time, without warning, in our sole discretion.</p>
            <p className="mt-4">You may terminate your agreement to these Terms at any time by completely deactivating your account and ceasing all use of the Platform. Upon termination, provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
          </Section>

        </article>
      </main>
    </div>
  );
}
