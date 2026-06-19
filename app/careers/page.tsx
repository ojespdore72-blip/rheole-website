"use client";

import React from "react";
import { motion } from "framer-motion";

interface Position {
  title: string;
  location: string;
  responsibilities: string[];
  idealCandidate: string[];
}

export default function Careers() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  const roles: Position[] = [
    {
      title: "Founding Full Stack Engineer",
      location: "Remote / Hybrid",
      responsibilities: [
        "Build core platform experiences",
        "Develop scalable architecture",
        "Improve performance and reliability",
        "Work across frontend and backend systems"
      ],
      idealCandidate: [
        "React / Next.js",
        "TypeScript",
        "PostgreSQL",
        "Supabase",
        "Product-focused mindset"
      ]
    },
    {
      title: "Founding Mobile Engineer",
      location: "Remote / Hybrid",
      responsibilities: [
        "Build premium mobile experiences",
        "Optimize Android and iOS performance",
        "Deliver smooth user interactions",
        "Improve platform stability"
      ],
      idealCandidate: [
        "Flutter",
        "React Native",
        "Mobile performance optimization",
        "Strong UI craftsmanship"
      ]
    },
    {
      title: "Product Designer",
      location: "Remote",
      responsibilities: [
        "Shape the visual future of Rheole",
        "Design elegant interfaces",
        "Create world-class user experiences",
        "Maintain design consistency"
      ],
      idealCandidate: [
        "Figma",
        "Interaction Design",
        "Motion Design",
        "Systems Thinking"
      ]
    },
    {
      title: "Community Operations Lead",
      location: "Remote",
      responsibilities: [
        "Support communities",
        "Improve user engagement",
        "Monitor platform health",
        "Assist with moderation initiatives"
      ],
      idealCandidate: [
        "Strong communication skills",
        "Community management experience",
        "Problem solving mindset"
      ]
    },
    {
      title: "Trust & Safety Associate",
      location: "Remote",
      responsibilities: [
        "Review reports",
        "Improve platform safety",
        "Help enforce community standards",
        "Support user trust initiatives"
      ],
      idealCandidate: [
        "Strong judgment",
        "Attention to detail",
        "Community safety experience"
      ]
    },
    {
      title: "Local Intelligence Analyst",
      location: "Remote",
      responsibilities: [
        "Improve locality insights",
        "Evaluate recommendation quality",
        "Support routing and discovery systems",
        "Analyze platform trends"
      ],
      idealCandidate: [
        "Analytical mindset",
        "Data interpretation skills",
        "Interest in cities and communities"
      ]
    },
    {
      title: "Growth & Partnerships Lead",
      location: "Remote",
      responsibilities: [
        "Build local partnerships",
        "Support launch initiatives",
        "Develop growth strategies",
        "Expand community reach"
      ],
      idealCandidate: [
        "Partnership experience",
        "Startup mindset",
        "Strong communication skills"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen py-32 px-6 md:px-12 max-w-4xl mx-auto flex flex-col gap-16 md:gap-24">
      {/* Title */}
      <motion.div {...fadeInUp} className="flex flex-col gap-4 border-b border-brand-blue/15 dark:border-luxury-white/10 pb-8">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
          Careers
        </h1>
        <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
          Build the intelligence layer between people and the world around them.
        </p>
      </motion.div>

      {/* Narrative Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="flex flex-col gap-10 text-brand-blue/80 dark:text-luxury-white/80 font-light text-md md:text-lg leading-relaxed"
      >
        <p className="font-serif-editorial italic text-xl md:text-2xl text-brand-blue dark:text-luxury-white leading-relaxed">
          &ldquo;We are not building another social network. We are building a new way for people to understand the places around them.&rdquo;
        </p>

        <p className="text-sm tracking-wide uppercase text-brand-blue/60 dark:text-luxury-white/60">
          Communities. Events. Discovery. Local intelligence. Real-world awareness.
        </p>
        <p>
          If that excites you, we'd love to hear from you.
        </p>
      </motion.div>

      {/* Values & Culture Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="flex flex-col gap-6 border-t border-brand-blue/15 dark:border-luxury-white/10 pt-12"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[10px] tracking-widest uppercase text-brand-gold font-semibold">Culture</span>
          <h3 className="text-xl font-medium text-brand-blue dark:text-luxury-white uppercase tracking-wider">
            Why Work at Rheole
          </h3>
        </div>
        <p className="text-sm text-brand-blue/70 dark:text-luxury-white/70 leading-relaxed">
          We are intentionally building a small team of exceptional people driven by craftsmanship, ownership, and long-term thinking. We care deeply about details, quality of code, user experience, and the real-world impact of our spatial infrastructure.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {[
            { title: "Craftsmanship", desc: "Attention to detail." },
            { title: "Ownership", desc: "Autonomous execution." },
            { title: "Long-term thinking", desc: "Build to persist." },
            { title: "Mission-driven", desc: "Restore real connection." }
          ].map((val, i) => (
            <div key={i} className="border border-brand-blue/5 dark:border-luxury-white/5 rounded-xl p-4 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01] flex flex-col gap-1 text-center">
              <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">{val.title}</span>
              <span className="text-[10px] text-brand-blue/40 dark:text-luxury-white/40">{val.desc}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Open Roles list */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="flex flex-col gap-12 mt-8 border-t border-brand-blue/15 dark:border-luxury-white/10 pt-12"
      >
        <div className="flex flex-col gap-12">
          {roles.map((role, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 border-b border-brand-blue/5 dark:border-luxury-white/5 pb-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg md:text-xl font-medium text-brand-blue dark:text-luxury-white uppercase tracking-wider">
                    {role.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/40">
                    Location: {role.location}
                  </span>
                </div>

                <a
                  href="mailto:careers@rheole.com"
                  className="text-[10px] tracking-widest uppercase border border-brand-blue/20 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold px-5 py-2 rounded-full transition-all duration-300 self-start md:self-center"
                >
                  Apply
                </a>
              </div>

              {/* Responsibilities & Ideal Candidate details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 text-xs">
                <div className="flex flex-col gap-2">
                  <span className="uppercase tracking-widest font-semibold text-brand-blue/50 dark:text-luxury-white/50 text-[10px]">
                    Responsibilities
                  </span>
                  <ul className="list-disc list-inside flex flex-col gap-1 text-brand-blue/70 dark:text-luxury-white/70">
                    {role.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="uppercase tracking-widest font-semibold text-brand-blue/50 dark:text-luxury-white/50 text-[10px]">
                    Ideal Candidate
                  </span>
                  <ul className="list-disc list-inside flex flex-col gap-1 text-brand-blue/70 dark:text-luxury-white/70">
                    {role.idealCandidate.map((cand, i) => (
                      <li key={i}>{cand}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="flex flex-col gap-8 text-center border-t border-brand-blue/15 dark:border-luxury-white/10 pt-16 mt-8"
      >
        <h2 className="text-xl md:text-3xl font-light uppercase tracking-widest text-brand-blue dark:text-luxury-white leading-relaxed">
          Join us in building the future of local intelligence.
        </h2>
        <a
          href="mailto:careers@rheole.com"
          className="inline-block mx-auto text-xs uppercase tracking-[0.25em] font-medium border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold rounded-full px-8 py-4 transition-all duration-300 text-brand-blue dark:text-luxury-white"
        >
          careers@rheole.com
        </a>

        {/* Footer Note */}
        <p className="text-xs text-brand-blue/45 dark:text-luxury-white/45 italic leading-relaxed max-w-xl mx-auto mt-4">
          We hire for talent, curiosity, and craftsmanship. Even if you do not see a role that matches your experience, we welcome exceptional people to reach out.
        </p>
      </motion.div>
    </div>
  );
}
