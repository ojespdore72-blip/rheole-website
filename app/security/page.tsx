"use client";

import React from "react";
import { motion } from "framer-motion";

interface SecurityBlock {
  title: string;
  points: string[];
  statement: string;
}

export default function Security() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  const sections: SecurityBlock[] = [
    {
      title: "Account Protection",
      points: [
        "Multi-factor authentication support",
        "Device verification",
        "Suspicious activity detection",
        "Secure sign-in protections",
        "Session management"
      ],
      statement: "Your account should remain yours. Our systems continuously work to help identify unusual activity and reduce unauthorized access."
    },
    {
      title: "Privacy & Data Protection",
      points: [
        "Data minimization principles",
        "Permission-based access",
        "User-controlled privacy settings",
        "Protected account information",
        "Secure data handling practices"
      ],
      statement: "Privacy and security work together. Users should always understand and control how their information is used."
    },
    {
      title: "Message Security",
      points: [
        "Private conversations",
        "Secure communication channels",
        "Integrity protection",
        "Account-based access controls",
        "Continuous security improvements"
      ],
      statement: "Communication is personal. We design our systems with privacy, security, and trust in mind."
    },
    {
      title: "Location Safety",
      points: [
        "Permission-based location access",
        "User-controlled location settings",
        "Granular controls",
        "Security-focused processing",
        "Privacy-conscious design"
      ],
      statement: "Location information powers discovery. Users remain in control of how location information is shared and used."
    }
  ];

  return (
    <div className="w-full min-h-screen py-32 px-6 md:px-12 max-w-4xl mx-auto flex flex-col gap-16 md:gap-24 selection:bg-brand-gold/20">
      
      {/* Title */}
      <motion.div {...fadeInUp} className="flex flex-col gap-4 border-b border-brand-blue/15 dark:border-luxury-white/10 pb-8">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
          SECURITY
        </h1>
        <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
          Designed to protect people, communities, conversations, and trust.
        </p>
      </motion.div>

      {/* Opening Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="flex flex-col gap-8 text-brand-blue/80 dark:text-luxury-white/80 font-light text-md md:text-lg leading-relaxed"
      >
        <p className="font-serif-editorial italic text-xl md:text-3xl text-brand-blue dark:text-luxury-white leading-relaxed">
          &ldquo;Security is not a feature added later. It is a foundation built from the beginning.&rdquo;
        </p>

        <p className="text-brand-blue/70 dark:text-luxury-white/70">
          Rheole is designed to help people connect with communities, events, places, and local intelligence. Protecting those experiences is one of our most important responsibilities.
        </p>
      </motion.div>

      {/* Section 1-4 Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="flex flex-col gap-12 mt-8 border-t border-brand-blue/15 dark:border-luxury-white/10 pt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-16">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-5 border-l border-brand-blue/10 dark:border-luxury-white/10 pl-6 text-left">
              <h3 className="text-lg md:text-xl font-medium text-brand-blue dark:text-luxury-white uppercase tracking-wider">
                {section.title}
              </h3>
              
              <ul className="flex flex-col gap-1.5 mt-2">
                {section.points.map((point, idx) => (
                  <li key={idx} className="text-xs text-brand-blue/60 dark:text-luxury-white/50 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs italic text-brand-blue/70 dark:text-luxury-white/70 leading-relaxed pt-2 border-t border-brand-blue/5 dark:border-luxury-white/5 mt-2">
                {section.statement}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Section 5: Security Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="border-t border-brand-blue/15 dark:border-luxury-white/10 pt-16 mt-8 flex flex-col gap-8 text-center"
      >
        <span className="text-[10px] tracking-widest uppercase text-brand-gold font-semibold">
          Security Principles
        </span>
        <div className="flex flex-col gap-4 text-3xl md:text-6xl font-light tracking-[0.1em] uppercase leading-tight font-serif-editorial">
          <p className="opacity-30">Never Trust.</p>
          <p className="opacity-50">Always Verify.</p>
          <p className="opacity-70">Protect User Control.</p>
          <p className="opacity-90">Minimize Data Exposure.</p>
          <p className="text-brand-gold">Continuously Improve.</p>
        </div>
      </motion.div>

      {/* Section 6: Platform Monitoring */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="border-t border-brand-blue/15 dark:border-luxury-white/10 pt-16 mt-8 flex flex-col md:flex-row gap-8 items-start"
      >
        <div className="flex flex-col gap-4 border-l border-brand-blue/10 dark:border-luxury-white/10 pl-6 text-left w-full md:w-1/2">
          <h3 className="text-lg md:text-xl font-medium text-brand-blue dark:text-luxury-white uppercase tracking-wider">
            Platform Protection
          </h3>
          <p className="text-xs italic text-brand-blue/70 dark:text-luxury-white/70 leading-relaxed mt-2">
            Security is an ongoing process. Our systems continuously evolve to improve protection and resilience.
          </p>
        </div>

        <div className="w-full md:w-1/2 text-left">
          <ul className="flex flex-col gap-3 font-sans text-xs">
            {[
              "Threat monitoring",
              "Abuse detection",
              "Account protection systems",
              "Security reviews",
              "Platform integrity measures"
            ].map((item, idx) => (
              <li key={idx} className="border border-brand-blue/5 dark:border-luxury-white/5 rounded-xl p-3 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01] flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-gold" />
                <span className="text-brand-blue/75 dark:text-luxury-white/75">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Section 7: Responsible Disclosure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="border-t border-brand-blue/15 dark:border-luxury-white/10 pt-16 mt-8 text-center flex flex-col gap-4 max-w-xl mx-auto"
      >
        <h3 className="text-lg font-medium text-brand-blue dark:text-luxury-white uppercase tracking-wider">
          Help us improve.
        </h3>
        <p className="text-xs text-brand-blue/60 dark:text-luxury-white/60 leading-relaxed font-sans">
          Security researchers and responsible reporters play an important role in making technology safer. If you believe you have identified a security issue, please contact:
        </p>
        <a
          href="mailto:security@rheole.com"
          className="inline-block mx-auto text-xs uppercase tracking-[0.25em] font-medium border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold rounded-full px-8 py-4 transition-all duration-300 text-brand-blue dark:text-luxury-white mt-2 font-mono"
        >
          security@rheole.com
        </a>
        <p className="text-[10px] text-brand-blue/40 dark:text-luxury-white/40 mt-1 uppercase tracking-widest">
          We appreciate responsible disclosure and review legitimate reports promptly.
        </p>
      </motion.div>

      {/* Section 8: Our Commitment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="border-t border-brand-blue/15 dark:border-luxury-white/10 pt-16 mt-8 text-center flex flex-col gap-6"
      >
        <span className="text-[10px] tracking-widest uppercase text-brand-gold font-semibold">
          Our Commitment
        </span>
        <div className="flex flex-col gap-3 text-3xl md:text-5xl font-light font-serif-editorial uppercase tracking-widest text-brand-blue dark:text-luxury-white leading-tight">
          <p className="opacity-40">Trust is earned.</p>
          <p className="opacity-60">Every day.</p>
          <p className="opacity-75">With every interaction.</p>
          <p className="opacity-90">With every conversation.</p>
          <p className="opacity-95">With every community.</p>
          <p className="text-brand-gold">With every event.</p>
        </div>
      </motion.div>

    </div>
  );
}
