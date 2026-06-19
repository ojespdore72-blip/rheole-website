"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Manifesto() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  const sections = [
    {
      title: "THE PARADOX",
      content: [
        "We know what is happening across continents.",
        "We often do not know what is happening around the corner.",
        "We can discover global trends in seconds.",
        "Yet we miss the communities beside us.",
        "We navigate the world with unprecedented technology.",
        "Yet remain disconnected from our immediate surroundings.",
        "This is not a technology problem.",
        "It is an awareness problem.",
      ],
    },
    {
      title: "WHAT WE BELIEVE",
      content: [
        "We believe the future does not need more information.",
        "The future needs better understanding.",
        "We believe discovery should be meaningful.",
        "We believe communities should be easier to find.",
        "We believe local knowledge should not be hidden.",
        "We believe people should understand the places they inhabit.",
      ],
    },
    {
      title: "THE INVISIBLE LAYER",
      content: [
        "Every city has a rhythm.",
        "Every neighborhood has a pulse.",
        "Every community has a story.",
        "Every event creates a moment.",
        "Every conversation creates connection.",
        "Most of it exists unseen.",
        "Not because it is unimportant.",
        "Because the systems around us were never designed to reveal it.",
      ],
    },
    {
      title: "WHY RHEOLE EXISTS",
      content: [
        "Rheole exists to make the invisible visible.",
        "Not through noise.",
        "Not through endless feeds.",
        "Not through information overload.",
        "But through context.",
        "Awareness.",
        "Understanding.",
        "Rheole is being built to help people better understand the world immediately around them.",
      ],
    },
    {
      title: "OUR VIEW OF THE FUTURE",
      content: [
        "The future is not virtual.",
        "The future is not distant.",
        "The future is local.",
        "More connected.",
        "More intelligent.",
        "More aware.",
        "Technology should not pull people away from the real world.",
        "It should help them engage with it more deeply.",
      ],
    },
    {
      title: "OUR RESPONSIBILITY",
      content: [
        "Trust is earned.",
        "Privacy matters.",
        "Security matters.",
        "Communities matter.",
        "People matter.",
        "Every decision we make should strengthen those principles.",
        "Growth without trust is not progress.",
        "Technology without responsibility is not innovation.",
      ],
    },
    {
      title: "WHAT WE ARE BUILDING",
      content: [
        "Not another social platform.",
        "Not another map.",
        "Not another messaging application.",
        "Not another feed.",
        "We are building a new layer of understanding between people and the world around them.",
      ],
    },
    {
      title: "THE DECLARATION",
      content: [
        "The world is already speaking.",
        "Through places.",
        "Through communities.",
        "Through events.",
        "Through movement.",
        "Through people.",
        "Rheole exists to help people hear it.",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen py-32 px-6 md:px-12 max-w-4xl mx-auto flex flex-col gap-24 md:gap-32">
      {/* Title */}
      <motion.div
        {...fadeInUp}
        viewport={{ once: true }}
        className="flex flex-col gap-6 border-b border-brand-blue/15 dark:border-luxury-white/10 pb-12"
      >
        <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
          MANIFESTO
        </h1>
        <p className="text-xl md:text-2xl text-brand-blue/60 dark:text-luxury-white/60 font-serif-editorial italic">
          A declaration for a more visible world.
        </p>
      </motion.div>

      {/* Opening Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="flex flex-col gap-12 text-brand-blue/80 dark:text-luxury-white/80 font-light text-lg md:text-xl leading-relaxed"
      >
        <div className="font-serif-editorial italic text-2xl md:text-4xl text-brand-blue dark:text-luxury-white leading-relaxed flex flex-col gap-6">
          <p>The world has never been more connected.</p>
          <p>Yet much of what matters remains invisible.</p>
          <p>Not because it does not exist.</p>
          <p>Because it cannot be easily seen.</p>
        </div>

        <div className="flex flex-col gap-3 font-serif-editorial text-xl md:text-2xl text-brand-blue/70 dark:text-luxury-white/70">
          <p>Communities.</p>
          <p>Moments.</p>
          <p>Opportunities.</p>
          <p>Conversations.</p>
          <p>Places.</p>
          <p>People.</p>
        </div>

        <div className="font-serif-editorial italic text-2xl md:text-4xl text-brand-blue dark:text-luxury-white leading-relaxed pt-4">
          <p>The signals are everywhere.</p>
          <p>Understanding is not.</p>
        </div>
      </motion.div>

      {/* Narrative Sections */}
      <div className="flex flex-col gap-24 border-t border-brand-blue/15 dark:border-luxury-white/10 pt-24 mt-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            className="flex flex-col gap-8"
          >
            <h2 className="text-lg md:text-xl font-medium text-brand-blue dark:text-luxury-white uppercase tracking-widest border-b border-brand-blue/5 dark:border-luxury-white/5 pb-4 inline-block">
              {section.title}
            </h2>
            <div className="flex flex-col gap-4">
              {section.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-md md:text-lg text-brand-blue/70 dark:text-luxury-white/70 leading-relaxed font-light"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Final Statement & CTA */}
      <motion.div
        {...fadeInUp}
        className="flex flex-col items-center justify-center text-center gap-16 pt-32 pb-16 border-t border-brand-blue/15 dark:border-luxury-white/10"
      >
        <div className="flex flex-col gap-6 font-serif-editorial italic text-3xl md:text-5xl text-brand-blue dark:text-luxury-white leading-relaxed">
          <p>The future belongs to those who understand their world.</p>
          <p className="text-brand-gold">Welcome to Rheole.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
          <Link
            href="/experience"
            className="text-xs uppercase tracking-[0.25em] font-medium border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold rounded-full px-8 py-4 transition-all duration-300 text-brand-blue dark:text-luxury-white"
          >
            Experience Rheole
          </Link>
          <span className="text-xs uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/40 font-serif-editorial italic">
            or
          </span>
          <Link
            href="/experience#waitlist"
            className="text-xs uppercase tracking-[0.25em] font-medium border border-brand-gold bg-brand-gold/5 hover:bg-brand-gold/10 text-brand-gold rounded-full px-8 py-4 transition-all duration-300"
          >
            Request Early Access
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
