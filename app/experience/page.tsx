"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import RheoleLogo from "@/components/logo";

interface StepDetail {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  hint: string;
}

const steps: StepDetail[] = [
  {
    number: "00",
    title: "Welcome to Rheole",
    subtitle: "Discover your world.",
    description: "Experience a live preview of how Rheole helps people understand communities, events, places, and local intelligence.",
    ctaText: "Begin Experience",
    hint: "Click the button to start the guided product journey."
  },
  {
    number: "01",
    title: "City Pulse",
    subtitle: "Neighborhood Pulse & Activity Hotspots",
    description: "See the real-time density of local conversations, active meetups, and trending hotspots. Know where the energy is, block by block, before you even leave your door.",
    ctaText: "Continue to Communities",
    hint: "Tap on the glowing hotspots on the phone screen to explore local conversations."
  },
  {
    number: "02",
    title: "Communities",
    subtitle: "Local Circles & Shared Interests",
    description: "Connect with people who share your focus. Explore discussions, active polls, and announcements from local circles in technology, food, fitness, arts, and more.",
    ctaText: "Continue to Events",
    hint: "Select categories on the phone to view feeds. Try tapping 'Join' or 'Participate'."
  },
  {
    number: "03",
    title: "Events",
    subtitle: "Discovery & Gatherings",
    description: "Find workshops, casual meetups, and community gatherings happening around you. Filter by interest or timing to tailor your discovery experience.",
    ctaText: "Continue to Intelligence",
    hint: "Filter the events on the phone. Tapping 'Attend' highlights the app conversion."
  },
  {
    number: "04",
    title: "Intelligence",
    subtitle: "AI-Powered Spatial Reasoning",
    description: "Query Rheole's local engine to answer complex questions about your surroundings. It synthesizes weather, traffic, event density, and community vibes instantly.",
    ctaText: "Continue to Routing",
    hint: "Click one of the suggested query chips on the phone to test the intelligence engine."
  },
  {
    number: "05",
    title: "Routing",
    subtitle: "Activity & Weather-Aware Paths",
    description: "Navigate with awareness. Rheole plots optimal pathways by factoring in active public block festivals, weather hazards, and localized light and sound levels.",
    ctaText: "Continue to Messaging",
    hint: "Toggle routing modes on the phone to see the path dynamic detours in action."
  },
  {
    number: "06",
    title: "Messaging",
    subtitle: "Connected Conversations",
    description: "Coordinate instantly. Share live locations, local discoveries, and plan joint arrivals inside secure, context-aware group or private direct chats.",
    ctaText: "Complete Experience",
    hint: "Preview the community group and direct messaging space on the phone."
  },
  {
    number: "07",
    title: "Get Rheole Now",
    subtitle: "The world is already speaking.",
    description: "Rheole helps you hear it. Download the mobile app today to claim your username, join your local community, and unlock real-time spatial intelligence.",
    ctaText: "Return to Homepage",
    hint: "Select your preferred platform below to claim your access."
  }
];

export default function ExperiencePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Experience 1: City Pulse State
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>("SOMA Sound Lab");
  
  // Experience 2: Communities State
  const [activeCommunityTab, setActiveCommunityTab] = useState<string>("Technology");
  
  // Experience 3: Events State
  const [eventFilter, setEventFilter] = useState<string>("All");
  
  // Experience 4: Intelligence State
  const [chatQuery, setChatQuery] = useState<string>("");
  const [chatAnswer, setChatAnswer] = useState<string>("");
  const [chatMetadata, setChatMetadata] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  
  // Experience 5: Routing State
  const [routingMode, setRoutingMode] = useState<string>("Event-aware");

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      window.location.href = "/";
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Trigger intelligence response animation
  const handleQuerySelect = (queryText: string) => {
    if (isTyping) return;
    setChatQuery(queryText);
    setChatAnswer("");
    setChatMetadata([]);
    setIsTyping(true);

    let answerText = "";
    let meta: string[] = [];

    if (queryText.includes("nearby")) {
      answerText = "Analyzing SOMA sector. Found 3 active hotspots: Vinyl session at Sound Labs (moderate noise, 120m), Local Gallery Opening on 4th Ave (high density, 450m), and Community Garden Meetup (quiet, 800m).";
      meta = ["3 Active hubs", "SOMA Sector", "1.2km radius"];
    } else if (queryText.includes("tonight")) {
      answerText = "Recommending Sunset Acoustical Suite (8:00 PM) at Highline Crest. Wind levels are low (4mph) with 95% sky clarity. Follow this with the Digital Vernacular workshop (Central Hall).";
      meta = ["Peak Clarity", "Temp: 68°F", "No entry fee"];
    } else if (queryText.includes("active")) {
      answerText = "Central Plaza area has peak density. Street festival active until 10 PM. Pedestrian count is 4.2x above average baseline. Ambient light levels are high.";
      meta = ["Peak Density", "Pedestrian Zone", "Until 10 PM"];
    } else {
      answerText = "Top spatial cohorts: Local Tech Builders (14 active threads), Culinary Discoveries (8 meets scheduled this week), and Central Run Club (runs every Tue/Thu).";
      meta = ["Recommended", "High engagement", "Joinable"];
    }

    setTimeout(() => {
      setIsTyping(false);
      setChatAnswer(answerText);
      setChatMetadata(meta);
    }, 1200);
  };

  // Reset states on step changes
  useEffect(() => {
    if (currentStep !== 4) {
      setChatQuery("");
      setChatAnswer("");
      setChatMetadata([]);
      setIsTyping(false);
    }
  }, [currentStep]);

  return (
    <div className="w-full min-h-screen bg-white text-brand-blue relative overflow-hidden flex flex-col justify-between selection:bg-brand-gold/20">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-brand-gold/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-indigo/5 blur-[120px] animate-pulse-slow" />
      </div>

      {/* Top Header Navigation */}
      <header className="relative z-10 w-full px-6 md:px-12 py-6 flex items-center justify-between border-b border-brand-blue/5 bg-white/35 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <RheoleLogo className="h-5 w-auto md:h-6" />
          <span className="text-xs uppercase tracking-widest text-brand-blue/40 font-mono hidden sm:inline-block">Interactive Preview</span>
        </Link>
        <Link 
          href="/" 
          className="text-xs uppercase tracking-widest text-brand-blue/60 hover:text-brand-gold transition-colors duration-300 border border-brand-blue/10 hover:border-brand-gold rounded-full px-4 py-2"
        >
          Exit Preview
        </Link>
      </header>

      {/* Main Experience Layout */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-6 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Editorial narrative column */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-brand-gold uppercase">Step {steps[currentStep].number}</span>
            <div className="h-[1px] w-12 bg-brand-gold/30" />
            <span className="text-[10px] font-mono tracking-widest text-brand-blue/30 uppercase">Interactive Demo</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4"
            >
              <h1 className="text-3xl md:text-5xl font-light font-serif-editorial uppercase tracking-wide leading-tight text-brand-blue">
                {steps[currentStep].title}
              </h1>
              <h2 className="text-sm font-medium uppercase tracking-widest text-brand-gold">
                {steps[currentStep].subtitle}
              </h2>
              <p className="text-brand-blue/70 text-sm md:text-base leading-relaxed max-w-md font-sans">
                {steps[currentStep].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Guide hints & action controls */}
          <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-brand-blue/5">
            <p className="text-[11px] font-mono tracking-wider text-brand-blue/40 italic">
              * Hint: {steps[currentStep].hint}
            </p>

            <div className="flex items-center gap-4 mt-2">
              {currentStep > 0 && (
                <button
                  onClick={prevStep}
                  className="text-xs uppercase tracking-widest border border-brand-blue/20 hover:border-brand-blue/50 text-brand-blue/80 rounded-full px-6 py-3.5 transition-all duration-300"
                >
                  Previous
                </button>
              )}

              <button
                onClick={nextStep}
                className="text-xs uppercase tracking-widest bg-brand-gold hover:bg-brand-gold-glow text-brand-blue font-semibold rounded-full px-8 py-3.5 transition-all duration-300 shadow-lg shadow-brand-gold/10 flex-1 sm:flex-initial text-center"
              >
                {steps[currentStep].ctaText}
              </button>
            </div>
          </div>

          {/* Stepper progress dots indicator */}
          <div className="flex items-center gap-2 mt-8">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentStep(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentStep === i ? "w-8 bg-brand-gold" : "w-1.5 bg-brand-blue/20 hover:bg-brand-blue/40"
                }`}
                aria-label={`Go to step ${i}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: The Premium Floating CSS Device Mockup */}
        <div className="lg:col-span-6 flex justify-center items-center relative py-6">
          <div className="absolute inset-0 bg-brand-gold/5 blur-[80px] rounded-full scale-75 pointer-events-none" />
          
          {/* Phone Shell */}
          <div className="relative w-[280px] h-[570px] md:w-[310px] md:h-[630px] rounded-[48px] border-[10px] border-luxury-white/10 dark:border-luxury-white/10 bg-luxury-black shadow-2xl overflow-hidden p-3.5 ring-1 ring-luxury-white/20 flex flex-col justify-between selection:bg-brand-gold/10">
            
            {/* Phone Screen Internal Body */}
            <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-luxury-black border border-luxury-white/5 flex flex-col justify-between text-xs">
              
              {/* Dynamic Island Notch */}
              <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-28 h-5 rounded-full bg-black z-30 flex items-center justify-between px-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-gold/60" />
                <div className="h-1 w-8 rounded-full bg-luxury-white/10" />
              </div>

              {/* Mobile Screen Header */}
              <div className="pt-8 px-4 pb-2 flex items-center justify-between text-[10px] text-luxury-white/40 font-mono select-none border-b border-luxury-white/5">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <span>5G</span>
                  <div className="h-3 w-5 border border-luxury-white/30 rounded-sm p-0.5 flex items-center">
                    <div className="h-full w-3.5 bg-brand-gold rounded-xs" />
                  </div>
                </div>
              </div>

              {/* Dynamic Content based on Active Step */}
              <div className="flex-1 overflow-y-auto px-4 py-3 relative">
                <AnimatePresence mode="wait">
                  
                  {/* Step 0: Splash Welcome */}
                  {currentStep === 0 && (
                    <motion.div
                      key="step0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col justify-center items-center text-center gap-6"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="p-1 rounded-full border border-brand-gold/30"
                      >
                        <RheoleLogo className="h-16 w-auto" />
                      </motion.div>
                      <div>
                        <h3 className="font-serif-editorial text-lg italic text-brand-gold font-light">R H E O L E</h3>
                        <p className="text-[10px] tracking-widest text-luxury-white/40 uppercase mt-1">Spatial Cohorts & Intelligence</p>
                      </div>
                      <button
                        onClick={nextStep}
                        className="text-[9px] uppercase tracking-widest border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-blue rounded-full px-4 py-2 mt-4 transition-all duration-300"
                      >
                        Launch Preview
                      </button>
                    </motion.div>
                  )}

                  {/* Step 1: City Pulse simulated map */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-luxury-white/5">
                        <span className="font-medium uppercase tracking-wider text-[10px] text-brand-gold">City Pulse</span>
                        <span className="text-[9px] text-luxury-white/30 uppercase font-mono">SOMA Sector</span>
                      </div>

                      {/* Map Vector Mockup */}
                      <div className="relative flex-1 my-3 rounded-xl border border-luxury-white/5 bg-[#07070F] overflow-hidden flex items-center justify-center">
                        {/* Map Grid Gridlines */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:14px_14px]" />
                        
                        {/* Dot Radar Circles */}
                        <div className="absolute h-32 w-32 rounded-full border border-brand-gold/5 animate-ping duration-3000" />
                        <div className="absolute h-48 w-48 rounded-full border border-brand-indigo/5 animate-ping duration-4000" />

                        {/* Hotspot 1: SOMA Sound Lab */}
                        <button
                          onClick={() => {
                            setSelectedHotspot("SOMA Sound Lab");
                            showToast("Selected: SOMA Sound Lab");
                          }}
                          className="absolute top-1/3 left-1/4 flex flex-col items-center group cursor-pointer"
                        >
                          <span className="h-3 w-3 rounded-full bg-brand-gold flex items-center justify-center shadow-lg shadow-brand-gold/50">
                            <span className="h-1.5 w-1.5 rounded-full bg-luxury-white animate-pulse" />
                          </span>
                          <span className="text-[8px] bg-luxury-black/90 text-luxury-white/80 border border-luxury-white/10 px-1 rounded-sm mt-1 select-none font-mono">Sound Lab</span>
                        </button>

                        {/* Hotspot 2: Highline Crest */}
                        <button
                          onClick={() => {
                            setSelectedHotspot("Highline Crest");
                            showToast("Selected: Highline Crest");
                          }}
                          className="absolute bottom-1/3 right-1/4 flex flex-col items-center group cursor-pointer"
                        >
                          <span className="h-3 w-3 rounded-full bg-brand-indigo flex items-center justify-center shadow-lg shadow-brand-indigo/50">
                            <span className="h-1.5 w-1.5 rounded-full bg-luxury-white animate-pulse" />
                          </span>
                          <span className="text-[8px] bg-luxury-black/90 text-luxury-white/80 border border-luxury-white/10 px-1 rounded-sm mt-1 select-none font-mono">Highline</span>
                        </button>

                        {/* Hotspot 3: Central Park Meet */}
                        <button
                          onClick={() => {
                            setSelectedHotspot("Central Plaza");
                            showToast("Selected: Central Plaza");
                          }}
                          className="absolute top-2/3 left-1/2 flex flex-col items-center group cursor-pointer"
                        >
                          <span className="h-3 w-3 rounded-full bg-brand-gold flex items-center justify-center shadow-lg shadow-brand-gold/50">
                            <span className="h-1.5 w-1.5 rounded-full bg-luxury-white animate-pulse" />
                          </span>
                          <span className="text-[8px] bg-luxury-black/90 text-luxury-white/80 border border-luxury-white/10 px-1 rounded-sm mt-1 select-none font-mono">Central Plaza</span>
                        </button>
                      </div>

                      {/* Local Info display from clicked hotspot */}
                      <div className="p-2.5 rounded-xl border border-brand-gold/10 bg-brand-gold/[0.02]">
                        <span className="text-[9px] uppercase tracking-widest text-brand-gold font-medium">Selected Cluster</span>
                        <h4 className="font-semibold text-luxury-white text-xs mt-0.5">{selectedHotspot || "Select a Hotspot"}</h4>
                        <p className="text-[10px] text-luxury-white/60 mt-1 italic leading-relaxed">
                          {selectedHotspot === "SOMA Sound Lab" && '"A quiet local vinyl session at Horizon Sound Labs. Moderate audio levels."'}
                          {selectedHotspot === "Highline Crest" && '"Direct view of sunset. Light levels decreasing. Best spatial visibility."'}
                          {selectedHotspot === "Central Plaza" && '"Active spatial community gathering. High local chatter."'}
                        </p>
                      </div>

                      <div className="text-center text-[9px] text-brand-gold font-mono py-1 uppercase tracking-widest mt-2">
                        This is a preview.
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Communities exploration */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-luxury-white/5">
                          <span className="font-medium uppercase tracking-wider text-[10px] text-brand-gold">Communities</span>
                          <span className="text-[9px] text-luxury-white/30 uppercase font-mono">Circles</span>
                        </div>

                        {/* Category Selector Chips */}
                        <div className="flex gap-1.5 overflow-x-auto py-2 my-1.5 border-b border-luxury-white/5 scrollbar-none">
                          {["Technology", "Food", "Fitness", "Arts"].map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setActiveCommunityTab(cat)}
                              className={`px-2.5 py-1 rounded-full text-[9px] uppercase tracking-widest font-mono shrink-0 transition-colors border ${
                                activeCommunityTab === cat
                                  ? "bg-brand-gold text-brand-blue border-brand-gold"
                                  : "bg-luxury-white/[0.02] border-luxury-white/5 text-luxury-white/50 hover:text-luxury-white"
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>

                        {/* Community Feed content card */}
                        <div className="flex flex-col gap-2.5 mt-2">
                          <div className="p-3 rounded-xl border border-luxury-white/5 bg-luxury-white/[0.01] flex flex-col gap-1.5 text-left">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-luxury-white"># {activeCommunityTab} Builders</span>
                              <span className="text-[8px] text-brand-gold font-mono">Active</span>
                            </div>
                            <p className="text-[10px] text-luxury-white/70 leading-relaxed">
                              {activeCommunityTab === "Technology" && "Anyone attending the Spatial Intelligence workshop in SOMA tomorrow? Setting up build clusters."}
                              {activeCommunityTab === "Food" && "Best artisanal bakery discovered on 12th St. Croissants are fresh out of the oven right now."}
                              {activeCommunityTab === "Fitness" && "Sunrise Central Park jog tomorrow. Weather looks clear. Meeting by the south gate at 6:15 AM."}
                              {activeCommunityTab === "Arts" && "Pop-up projection mapping gallery is live near 4th Ave. Highly recommended for spatial design students."}
                            </p>
                            <div className="flex items-center justify-between pt-1 border-t border-luxury-white/5 text-[9px] text-luxury-white/40">
                              <span>12 replies</span>
                              <span>2m ago</span>
                            </div>
                          </div>

                          {/* Poll Card */}
                          <div className="p-3 rounded-xl border border-luxury-white/5 bg-luxury-white/[0.01] flex flex-col gap-2 text-left">
                            <span className="text-[8px] uppercase tracking-widest text-luxury-white/40 font-mono">Community Poll</span>
                            <p className="font-medium text-luxury-white leading-normal">
                              {activeCommunityTab === "Technology" && "Which platform do you target?"}
                              {activeCommunityTab === "Food" && "Best cuisine category in SOMA?"}
                              {activeCommunityTab === "Fitness" && "Preferred weekly mileage?"}
                              {activeCommunityTab === "Arts" && "Favorite art medium?"}
                            </p>
                            <div className="flex flex-col gap-1">
                              <button 
                                onClick={() => showToast("Download Rheole to participate.")}
                                className="w-full text-left p-1.5 rounded-md border border-luxury-white/5 bg-luxury-white/[0.02] text-luxury-white/60 hover:text-luxury-white flex justify-between"
                              >
                                <span>Option A</span>
                                <span>65%</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer blocked CTA */}
                      <button
                        onClick={() => showToast("Download Rheole to participate.")}
                        className="w-full py-2.5 mt-3 rounded-xl border border-dashed border-brand-gold/30 hover:border-brand-gold text-center text-brand-gold font-mono uppercase tracking-widest text-[9px] transition-colors"
                      >
                        Download Rheole to participate
                      </button>
                    </motion.div>
                  )}

                  {/* Step 3: Events exploration */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-luxury-white/5">
                          <span className="font-medium uppercase tracking-wider text-[10px] text-brand-gold">Events</span>
                          <span className="text-[9px] text-luxury-white/30 uppercase font-mono">Nearby</span>
                        </div>

                        {/* Event filter tabs */}
                        <div className="flex gap-1.5 py-2 my-1 border-b border-luxury-white/5 overflow-x-auto scrollbar-none">
                          {["All", "Meetups", "Workshops"].map((filter) => (
                            <button
                              key={filter}
                              onClick={() => setEventFilter(filter)}
                              className={`px-2 py-0.5 rounded-full text-[9px] uppercase tracking-widest font-mono shrink-0 transition-colors border ${
                                eventFilter === filter
                                  ? "bg-brand-gold text-brand-blue border-brand-gold"
                                  : "bg-luxury-white/[0.02] border-luxury-white/5 text-luxury-white/50"
                              }`}
                            >
                              {filter}
                            </button>
                          ))}
                        </div>

                        {/* List of event cards */}
                        <div className="flex flex-col gap-2 mt-2 max-h-[260px] overflow-y-auto pr-1">
                          {[
                            {
                              title: "Digital Vernacular Workshop",
                              type: "Workshops",
                              time: "7:00 PM Tonight",
                              loc: "Central Hall",
                              host: "Spatial Cohort"
                            },
                            {
                              title: "Sunset Acoustical Suite",
                              type: "Meetups",
                              time: "8:00 PM Tonight",
                              loc: "Highline Crest",
                              host: "Horizon Labs"
                            },
                            {
                              title: "Starlight Observation Gathering",
                              type: "Meetups",
                              time: "11:00 PM Tonight",
                              loc: "Observatory Slope",
                              host: "Local Astronomy"
                            }
                          ]
                            .filter(ev => eventFilter === "All" || ev.type === eventFilter)
                            .map((ev, index) => (
                              <div key={index} className="p-2.5 rounded-lg border border-luxury-white/5 bg-luxury-white/[0.01] flex flex-col gap-1.5 text-left">
                                <div className="flex justify-between items-start">
                                  <h4 className="font-medium text-luxury-white leading-snug">{ev.title}</h4>
                                  <span className="text-[7px] uppercase tracking-widest bg-brand-gold/10 text-brand-gold px-1 rounded-sm font-mono shrink-0">{ev.type}</span>
                                </div>
                                <div className="flex justify-between text-[8px] text-luxury-white/40 font-mono">
                                  <span>{ev.time}</span>
                                  <span>{ev.loc}</span>
                                </div>
                                <button
                                  onClick={() => showToast("Download Rheole to unlock full event participation.")}
                                  className="w-full text-center py-1 mt-1 rounded bg-brand-gold/10 hover:bg-brand-gold text-brand-gold hover:text-brand-blue text-[8px] font-mono uppercase tracking-widest transition-colors"
                                >
                                  Attend Event
                                </button>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="text-center text-[8px] text-brand-gold font-mono uppercase tracking-widest pt-2 border-t border-luxury-white/5 mt-2">
                        Download Rheole to unlock full participation
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: AI local intelligence query preview */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between pb-2 border-b border-luxury-white/5">
                          <span className="font-medium uppercase tracking-wider text-[10px] text-brand-gold">Intelligence</span>
                          <span className="text-[9px] text-luxury-white/30 uppercase font-mono">AI Engine</span>
                        </div>

                        {/* Input Box Mockup */}
                        <div className="w-full p-2.5 rounded-xl border border-luxury-white/10 bg-luxury-white/[0.02] flex items-center justify-between font-mono text-[9px] text-luxury-white/40">
                          <span className="truncate">{chatQuery || "Select a query below..."}</span>
                          {isTyping && <span className="animate-pulse text-brand-gold">●</span>}
                        </div>

                        {/* Suggestions Chips */}
                        {!chatQuery && (
                          <div className="flex flex-col gap-1.5 mt-2">
                            <span className="text-[8px] uppercase tracking-widest text-luxury-white/40 font-mono">Ask Rheole Engine:</span>
                            {[
                              "What's happening nearby?",
                              "What should I do tonight?",
                              "Which area is most active?"
                            ].map((q, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleQuerySelect(q)}
                                className="w-full text-left p-2 rounded-lg border border-luxury-white/5 bg-luxury-white/[0.01] hover:border-brand-gold/30 hover:bg-brand-gold/[0.02] text-luxury-white/70 hover:text-brand-gold transition-colors text-[9px] font-mono uppercase tracking-wider"
                              >
                                → {q}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Response Animation Box */}
                        {chatQuery && (
                          <div className="mt-3 p-3 rounded-xl border border-brand-gold/20 bg-brand-gold/[0.02] flex flex-col gap-2 text-left animate-fade-in">
                            <div className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-ping" />
                              <span className="text-[8px] uppercase tracking-widest text-brand-gold font-mono">Rheole Local Engine</span>
                            </div>

                            {isTyping ? (
                              <p className="text-[10px] text-luxury-white/40 font-mono italic animate-pulse">Resolving spatial clusters...</p>
                            ) : (
                              <div className="flex flex-col gap-2.5">
                                <p className="text-[10px] text-luxury-white/90 italic leading-relaxed font-serif-editorial">
                                  &ldquo;{chatAnswer}&rdquo;
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1 pt-1 border-t border-luxury-white/5">
                                  {chatMetadata.map((m, i) => (
                                    <span key={i} className="text-[7px] uppercase tracking-widest font-mono bg-luxury-white/[0.04] text-luxury-white/40 px-1.5 py-0.5 rounded-sm">
                                      {m}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {chatQuery && !isTyping && (
                        <button
                          onClick={() => {
                            setChatQuery("");
                            setChatAnswer("");
                            setChatMetadata([]);
                          }}
                          className="w-full py-1 text-center text-[8px] font-mono uppercase tracking-widest text-brand-gold hover:text-luxury-white mt-2"
                        >
                          Reset Query
                        </button>
                      )}

                      <div className="text-center text-[8px] text-brand-gold font-mono uppercase tracking-widest border-t border-luxury-white/5 pt-2 mt-2">
                        Unlock full Intelligence in the Rheole App
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Routing dynamic paths */}
                  {currentStep === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between pb-2 border-b border-luxury-white/5">
                          <span className="font-medium uppercase tracking-wider text-[10px] text-brand-gold">Routing</span>
                          <span className="text-[9px] text-luxury-white/30 uppercase font-mono">Map Detour</span>
                        </div>

                        {/* Mode selectors */}
                        <div className="grid grid-cols-3 gap-1 my-1">
                          {["Standard", "Event-aware", "Weather-aware"].map((mode) => (
                            <button
                              key={mode}
                              onClick={() => setRoutingMode(mode)}
                              className={`py-1 rounded text-[7px] uppercase tracking-widest font-mono border text-center transition-colors ${
                                routingMode === mode
                                  ? "bg-brand-gold text-brand-blue border-brand-gold font-semibold"
                                  : "bg-luxury-white/[0.02] border-luxury-white/5 text-luxury-white/40"
                              }`}
                            >
                              {mode.split("-")[0]}
                            </button>
                          ))}
                        </div>

                        {/* Vector path map */}
                        <div className="relative h-44 rounded-xl border border-luxury-white/5 bg-[#05050C] overflow-hidden flex items-center justify-center">
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:10px_10px]" />
                          
                          {/* Standard route path */}
                          <svg className="absolute inset-0 h-full w-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            {/* Congestion block area */}
                            {routingMode === "Event-aware" && (
                              <g>
                                <circle cx="150" cy="90" r="24" fill="rgba(239, 68, 68, 0.08)" stroke="rgba(239, 68, 68, 0.3)" strokeDasharray="2,2" />
                                <text x="150" y="93" fill="rgba(239, 68, 68, 0.7)" fontSize="6" fontFamily="monospace" textAnchor="middle" letterSpacing="1">FESTIVAL BLOCK</text>
                              </g>
                            )}

                            {routingMode === "Weather-aware" && (
                              <g>
                                <circle cx="120" cy="70" r="28" fill="rgba(79, 70, 229, 0.08)" stroke="rgba(79, 70, 229, 0.3)" strokeDasharray="2,2" />
                                <text x="120" y="73" fill="rgba(129, 140, 248, 0.7)" fontSize="6" fontFamily="monospace" textAnchor="middle" letterSpacing="1">FLOOD SIGNAL</text>
                              </g>
                            )}

                            {/* Start Pin */}
                            <circle cx="50" cy="140" r="3" fill="#C5A880" />
                            <text x="50" y="152" fill="#C5A880" fontSize="6" fontFamily="monospace" textAnchor="middle">START</text>

                            {/* End Pin */}
                            <circle cx="210" cy="40" r="3" fill="#FAF9F6" />
                            <text x="210" y="32" fill="#FAF9F6" fontSize="6" fontFamily="monospace" textAnchor="middle">END</text>

                            {/* Render different paths based on routingMode */}
                            {routingMode === "Standard" && (
                              <path d="M 50 140 L 150 90 L 210 40" fill="none" stroke="#C5A880" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                            )}

                            {routingMode === "Event-aware" && (
                              <path d="M 50 140 L 90 140 L 140 140 L 190 110 L 210 40" fill="none" stroke="#C5A880" strokeWidth="2" strokeLinecap="round" strokeDasharray="1,1" opacity="0.8" />
                            )}

                            {routingMode === "Weather-aware" && (
                              <path d="M 50 140 L 50 80 L 100 40 L 170 40 L 210 40" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                            )}
                          </svg>

                          <div className="absolute top-2 right-3 text-[7px] text-luxury-white/40 font-mono bg-luxury-black/80 px-1 border border-luxury-white/5 rounded-xs">
                            {routingMode === "Standard" && "EST TIME: 12 MIN"}
                            {routingMode === "Event-aware" && "Bypassing festival: +3 MIN"}
                            {routingMode === "Weather-aware" && "Bypassing flood zone: +5 MIN"}
                          </div>
                        </div>
                      </div>

                      <div className="text-center text-[8px] text-brand-gold font-mono uppercase tracking-widest pt-2 border-t border-luxury-white/5 mt-2">
                        Download Rheole for real-time routing
                      </div>
                    </motion.div>
                  )}

                  {/* Step 6: Messaging conversation mockup */}
                  {currentStep === 6 && (
                    <motion.div
                      key="step6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between pb-2 border-b border-luxury-white/5">
                          <span className="font-medium uppercase tracking-wider text-[10px] text-brand-gold">Messaging</span>
                          <span className="text-[9px] text-luxury-white/30 uppercase font-mono">Central Cohort</span>
                        </div>

                        {/* Messaging Thread Mockup */}
                        <div className="flex flex-col gap-2 mt-2 h-48 overflow-y-auto pr-1 text-[9px] font-sans">
                          {/* Message 1 */}
                          <div className="flex flex-col gap-1 items-start max-w-[80%]">
                            <span className="text-[8px] text-luxury-white/40 font-mono">Ojes P Dore</span>
                            <div className="p-2 rounded-lg bg-luxury-white/[0.04] text-luxury-white/80 leading-normal border border-luxury-white/5">
                              Are we meeting at Highline Crest for the acoustical suite? Setting up coordinate pins now.
                            </div>
                          </div>

                          {/* Message 2 */}
                          <div className="flex flex-col gap-1 items-end max-w-[80%] self-end">
                            <span className="text-[8px] text-brand-gold font-mono">You (Preview)</span>
                            <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold leading-normal border border-brand-gold/20">
                              Yes, just bypass the street festival. Rheole routed me around it perfectly.
                            </div>
                          </div>

                          {/* Message 3 */}
                          <div className="flex flex-col gap-1 items-start max-w-[80%]">
                            <span className="text-[8px] text-luxury-white/40 font-mono">Ojes P Dore</span>
                            <div className="p-2 rounded-lg bg-luxury-white/[0.04] text-luxury-white/80 leading-normal border border-luxury-white/5">
                              Perfect. See you there. Just shared my active coordinate stream.
                            </div>
                          </div>

                          {/* Typing indicator */}
                          <div className="flex items-center gap-1.5 text-luxury-white/30 italic text-[8px] font-mono mt-1">
                            <span className="h-1 w-1 bg-luxury-white/45 rounded-full animate-bounce" />
                            <span className="h-1 w-1 bg-luxury-white/45 rounded-full animate-bounce delay-100" />
                            <span className="h-1 w-1 bg-luxury-white/45 rounded-full animate-bounce delay-200" />
                            <span>Ojes is typing</span>
                          </div>
                        </div>
                      </div>

                      {/* Disabled Message Input Box */}
                      <div className="w-full p-2.5 rounded-xl border border-dashed border-luxury-white/10 bg-luxury-white/[0.01] flex items-center justify-center font-mono text-[8px] text-brand-gold uppercase tracking-widest text-center mt-2">
                        Download Rheole to start conversations
                      </div>
                    </motion.div>
                  )}

                  {/* Step 7: Final Screen badges and actions */}
                  {currentStep === 7 && (
                    <motion.div
                      key="step7"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col justify-center items-center text-center gap-6"
                    >
                      <span className="text-[8px] uppercase tracking-widest text-brand-gold font-mono bg-brand-gold/5 border border-brand-gold/20 px-2.5 py-1 rounded-full">
                        Demo Complete
                      </span>

                      <div className="flex flex-col gap-2">
                        <h4 className="font-serif-editorial text-sm italic text-luxury-white">Unlock the full experience</h4>
                        <p className="text-[9px] text-luxury-white/40 uppercase tracking-widest">Connect with your world</p>
                      </div>

                      {/* Store Badges mockup */}
                      <div className="flex flex-col gap-2 w-full max-w-[160px]">
                        <button
                          onClick={() => showToast("Downloading iOS App Store package...")}
                          className="w-full py-2 bg-luxury-white/5 border border-luxury-white/10 hover:border-brand-gold hover:text-brand-gold rounded-full text-[9px] font-mono uppercase tracking-widest text-luxury-white transition-all"
                        >
                          App Store
                        </button>
                        <button
                          onClick={() => showToast("Downloading Android APK package...")}
                          className="w-full py-2 bg-luxury-white/5 border border-luxury-white/10 hover:border-brand-gold hover:text-brand-gold rounded-full text-[9px] font-mono uppercase tracking-widest text-luxury-white transition-all"
                        >
                          Google Play
                        </button>
                      </div>

                      {/* Waitlist Form Inside Phone */}
                      <div className="w-full mt-2 pt-2 border-t border-luxury-white/5">
                        <input
                          type="email"
                          placeholder="ENTER EMAIL FOR EARLY ACCESS"
                          className="w-full py-1.5 px-3 rounded bg-luxury-white/[0.02] border border-luxury-white/10 text-[8px] font-mono text-center focus:outline-none focus:border-brand-gold placeholder-luxury-white/20 uppercase"
                        />
                        <button
                          onClick={() => showToast("Early Access request registered!")}
                          className="w-full mt-1.5 py-1.5 bg-brand-gold text-brand-blue font-semibold rounded text-[8px] font-mono uppercase tracking-widest"
                        >
                          Request Access
                        </button>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Mobile Screen Home Bar */}
              <div className="pb-2.5 pt-1.5 flex justify-center items-center select-none">
                <div className="h-1 w-24 rounded-full bg-luxury-white/20" />
              </div>

            </div>

          </div>

        </div>

      </main>

      {/* Persistent Bottom Status Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-brand-gold text-brand-blue text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-full shadow-2xl border border-brand-gold-glow/20"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer copyright */}
      <footer className="relative z-10 w-full px-6 py-4 border-t border-brand-blue/5 flex flex-col sm:flex-row items-center justify-between text-[10px] text-brand-blue/30 uppercase tracking-widest font-mono">
        <span>© 2026 RHEOLE PVT. LTD. ALL RIGHTS RESERVED.</span>
        <span className="mt-1 sm:mt-0">A PRODUCT OF IKHAGA LTD.</span>
      </footer>

    </div>
  );
}
