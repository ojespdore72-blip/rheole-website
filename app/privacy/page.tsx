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
            <h1 className="text-5xl md:text-7xl font-light font-serif-editorial leading-tight mb-6">Privacy Policy</h1>
            <p className="text-sm font-mono text-brand-blue/70 dark:text-white/70 tracking-widest uppercase">Last Updated: October 24, 2024</p>
          </div>

          <Section id="introduction" title="1. Introduction" summary="We care about your privacy. We don't sell your data. This document explains what we collect and why.">
            <p>At Rheole ("we," "us," or "our"), we respect your privacy and are deeply committed to protecting it. This comprehensive Privacy Policy governs your access to and use of Rheole, including our website, mobile applications, and all associated infrastructure (collectively, the "Platform").</p>
            <p className="mt-4">We believe that ambient intelligence requires absolute trust. Our entire infrastructure is designed around the principle that your data belongs to you. We do not engage in the business of selling user data, nor do we construct profiles for third-party advertising. This policy outlines exactly what we collect, how it is processed, and the extensive measures we take to ensure its security.</p>
            <p className="mt-4">Please read this policy carefully. By accessing the Platform, creating an account, or interacting with our services, you acknowledge that you have read, understood, and agreed to the collection and use of your information in strict accordance with this policy. If you do not agree with any part of this policy, you must immediately cease using the Platform.</p>
          </Section>

          <Section id="information-collection" title="2. Information We Collect" summary="We collect basic account info, and context like your location when you explicitly use our spatial features.">
            <p>To provide our advanced spatial intelligence services, we strictly collect only the data necessary to function. The types of information we collect include:</p>
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-lg font-medium text-brand-blue dark:text-white mb-2">A. Personal Identifiers</h4>
                <p className="text-brand-blue/80 dark:text-white/80">When you register for an account, we collect basic identifying information such as your name, email address, username, and encrypted authentication credentials. This is solely to establish and maintain your secure account.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-brand-blue dark:text-white mb-2">B. Spatial and Location Data</h4>
                <p className="text-brand-blue/80 dark:text-white/80">Because Rheole is built on ambient intelligence, location context is crucial. We collect your precise geographical location (GPS, Wi-Fi triangulation) <strong>only when you grant explicit permission</strong> via your device settings. This data is used to provide hyper-local recommendations and spatial awareness. You can revoke this access at any time.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-brand-blue dark:text-white mb-2">C. Behavioral Context</h4>
                <p className="text-brand-blue/80 dark:text-white/80">We monitor interaction metrics—such as which features you use, your search queries on the platform, and explicit preferences you set. This data allows our algorithms to refine and personalize the ambient recommendations you receive, making the intelligence more relevant to your habits.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-brand-blue dark:text-white mb-2">D. Technical and Device Data</h4>
                <p className="text-brand-blue/80 dark:text-white/80">To ensure platform stability and security, we automatically collect technical metadata. This includes your IP address, device type, operating system, browser type, crash reports, and performance diagnostics. This information helps us detect bugs, prevent fraud, and optimize our distributed systems.</p>
              </div>
            </div>
          </Section>

          <Section id="data-usage" title="3. How We Use Your Data" summary="Your data is used strictly to make the app work and give you better local recommendations.">
            <p>We are completely transparent about how your information is utilized. Your data is used exclusively for the following operational purposes:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4 text-brand-blue/80 dark:text-white/80">
              <li><strong>Service Delivery:</strong> To deliver real-time spatial intelligence, contextual recommendations, and core functionalities of the Rheole platform.</li>
              <li><strong>Security and Verification:</strong> To authenticate your logins, secure your account against unauthorized access, and verify the integrity of your interactions.</li>
              <li><strong>System Optimization:</strong> To analyze performance metrics, troubleshoot errors, and improve the underlying architecture of our distributed systems.</li>
              <li><strong>Essential Communication:</strong> To send you critical service updates, security alerts, and notifications regarding changes to our policies.</li>
              <li><strong>Personalization:</strong> To tailor the ambient intelligence to your specific environment and explicit preferences, ensuring high-quality, relevant outputs.</li>
            </ul>
            <div className="mt-6 p-4 border-l-2 border-brand-gold bg-brand-gold/5">
              <p className="italic font-medium text-brand-gold">Crucial Guarantee: We do not construct persistent behavioral profiles for the purpose of third-party advertising, nor do we monetize your attention through ad-tracking.</p>
            </div>
          </Section>

          <Section id="data-sharing" title="4. Information Sharing" summary="We never sell your data. We only share it with essential service providers who are contractually bound to keep it secure.">
            <p>Rheole operates on a strict non-monetization policy regarding personal data. We will never sell, rent, or trade your personal information. We only disclose data under these highly restricted circumstances:</p>
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-lg font-medium text-brand-blue dark:text-white mb-2">A. Trusted Service Providers</h4>
                <p className="text-brand-blue/80 dark:text-white/80">We partner with top-tier infrastructure providers (e.g., cloud hosting, secure email delivery, authentication services) to run the platform. These providers are granted access only to the data absolutely necessary to perform their functions. They operate under strict, legally binding confidentiality agreements and cannot use your data for any independent purposes.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-brand-blue dark:text-white mb-2">B. Legal and Safety Compliance</h4>
                <p className="text-brand-blue/80 dark:text-white/80">We may disclose information if we determine it is reasonably necessary to comply with a valid legal process (such as a subpoena or court order), to protect the safety of any person, to address severe fraud or security issues, or to protect Rheole's legal rights and property.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-brand-blue dark:text-white mb-2">C. Business Transfers</h4>
                <p className="text-brand-blue/80 dark:text-white/80">In the event that Rheole is involved in a merger, acquisition, bankruptcy, or sale of assets, your information may be transferred as part of that transaction. However, the promises made in this Privacy Policy will continue to apply to your data under the new entity.</p>
              </div>
            </div>
          </Section>

          <Section id="security" title="5. Data Security" summary="We use end-to-end encryption and ephemeral memory to ensure your data stays yours.">
            <p>We approach security with an uncompromising standard. We implement zero-knowledge architecture principles wherever feasible across our network.</p>
            <p className="mt-4"><strong>Ephemeral Memory Enclaves:</strong> Highly sensitive data, particularly real-time spatial computations and exact coordinates, are processed in temporary, secure enclaves. Once the computation is complete and the recommendation is delivered, the precise data is immediately destroyed from memory. It is not written to a permanent database where it could be vulnerable to breaches.</p>
            <p className="mt-4"><strong>Encryption protocols:</strong> All data transmitted between your device and our servers is protected using industry-standard Transport Layer Security (TLS) encryption. Data at rest is secured using AES-256 encryption.</p>
            <p className="mt-4">While we deploy state-of-the-art security measures, it is important to acknowledge that no method of digital transmission or storage is 100% secure. We continuously audit our systems and update our protocols to defend against emerging threats, but we cannot guarantee absolute, impenetrable security.</p>
          </Section>

          <Section id="rights" title="6. Your Rights and Controls" summary="You have complete control over your data. You can delete it, request it, or modify it at any time.">
            <p>We believe your digital footprint belongs to you. You are granted absolute control over your personal data with the following rights:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4 text-brand-blue/80 dark:text-white/80">
              <li><strong>Right to Access:</strong> You may request a complete export of all personal data we hold associated with your account in a machine-readable format.</li>
              <li><strong>Right to Rectification:</strong> You can update, correct, or modify your personal information directly within your account settings at any time.</li>
              <li><strong>Right to Erasure (Right to be Forgotten):</strong> You have the right to permanently delete your account and all associated personal data from our active servers. Once deleted, this action is irreversible.</li>
              <li><strong>Right to Restrict Processing:</strong> You can instantly revoke our access to your spatial/location data via your device's operating system settings, effectively halting all location-based intelligence processing.</li>
            </ul>
            <p className="mt-6">To exercise any of these rights, or if you have any questions regarding this Privacy Policy, please contact our Data Protection Officer directly at <a href="mailto:privacy@rheole.com" className="text-brand-gold hover:underline font-medium">privacy@rheole.com</a>. We are committed to responding to all privacy requests promptly.</p>
          </Section>

        </article>
      </main>
    </div>
  );
}
