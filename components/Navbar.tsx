"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { User, Menu, X, ArrowRight, ChevronRight, Search } from "lucide-react";
import RheoleLogo from "./logo";

// --- Data Structures ---
const navData = {
  platform: {
    title: "Platform",
    columns: [
      {
        title: "Discover",
        desc: "Find what matters around you.",
        links: ["Places", "Events", "Communities", "Businesses", "New exploration"]
      },
      {
        title: "Navigate",
        desc: "Move with intent.",
        links: ["Smart routing", "Live traffic", "Transit", "Movement"]
      },
      {
        title: "Connect",
        desc: "Bridge physical and digital.",
        links: ["Friends", "Opportunities", "Local groups", "Nearby Presence", "Neighbourhood"]
      },
      {
        title: "Understand",
        desc: "Deep contextual awareness.",
        links: ["User intent", "Contextual intelligence", "Environmental Intelligence", "Curiosity Intelligence", "Personal rhythm"]
      }
    ],
    cta: "Explore the Platform"
  },
  technology: {
    title: "Technology",
    columns: [
      {
        title: "Engineering",
        desc: "The backbone of spatial AI.",
        links: ["AI Architecture", "Spatial Computing", "Privacy Architecture"]
      },
      {
        title: "Developer Platform",
        desc: "Build on Rheole.",
        links: ["SDKs", "REST APIs", "Realtime APIs", "Authentication"]
      },
      {
        title: "Resources",
        desc: "Tools & Documentation.",
        links: ["Status", "Roadmap", "Documentation", "Interactive Playground", "GitHub"]
      }
    ],
    cta: "Build with Rheole"
  },
  research: {
    title: "Research",
    columns: [
      {
        title: "Core Research",
        desc: "Pioneering spatial intelligence.",
        links: ["Spatial Intelligence", "Intent Intelligence", "Context Intelligence", "Urban Computing"]
      },
      {
        title: "Applied AI",
        desc: "Bringing AI to the physical world.",
        links: ["Ambient AI", "Human Mobility", "Environmental Intelligence", "AI Transparency"]
      },
      {
        title: "Publications",
        desc: "Read our latest findings.",
        links: ["Whitepapers", "Case Studies", "Engineering Notes", "Research Blog"]
      }
    ],
    cta: "Explore Research"
  },
  company: {
    title: "Company",
    columns: [
      {
        title: "About",
        desc: "Who we are.",
        links: ["About Us", "Manifesto", "Mission", "Careers"]
      },
      {
        title: "Trust",
        desc: "Your privacy is paramount.",
        links: ["Security", "Trust Center", "Privacy"]
      },
      {
        title: "Connect",
        desc: "Get in touch.",
        links: ["Contact", "Newsroom", "Brand Assets", "Press"]
      }
    ],
    cta: "About Rheole"
  }
};

const getRoute = (link: string) => {
  const overrides: Record<string, string> = {
    "Places": "/platform/discover/places",
    "Events": "/platform/discover/events",
    "Communities": "/platform/discover/communities",
    "Businesses": "/platform/discover/businesses",
    "New exploration": "/platform/discover/exploration",
    "Smart routing": "/platform/navigation/smart-routing",
    "Live traffic": "/platform/navigation/live-traffic",
    "Transit": "/platform/navigation/transit",
    "Movement": "/platform/navigation/movement-intelligence",
    "Friends": "/platform/connect/friends",
    "Opportunities": "/platform/connect/opportunity-intelligence",
    "Local groups": "/platform/connect/local-coordination",
    "Nearby Presence": "/platform/connect/presence-intelligence",
    "Neighbourhood": "/platform/connect/neighbourhood-intelligence",
    "User intent": "/platform/intelligence/intent-intelligence",
    "Contextual intelligence": "/platform/intelligence/context-intelligence",
    "Curiosity Intelligence": "/platform/intelligence/curiosity-intelligence",
    "Personal rhythm": "/platform/intelligence/rhythm-intelligence",
    // Research
    "Spatial Intelligence": "/research/core-research/spatial-intelligence",
    "Intent Intelligence": "/research/core-research/intent-intelligence",
    "Context Intelligence": "/research/core-research/context-intelligence",
    "Urban Computing": "/research/urban-computing",
    "Ambient AI": "/research/applied-ai/ambient-ai",
    "Human Mobility": "/research/applied-ai/human-mobility",
    "Environmental Intelligence": "/research/applied-ai/environmental-intelligence",
    "AI Transparency": "/research/applied-ai/ai-transparency",
    "Whitepapers": "/research/publications/whitepapers",
    "Case Studies": "/research/case-studies",
    "Engineering Notes": "/research/publications/engineering-notes",
    "Research Blog": "/research/publications/research-blog",
    
    // Technology
    "AI Architecture": "/technology/engineering/ai-architecture",
    "Spatial Computing": "/technology/engineering/spatial-computing",
    "Privacy Architecture": "/technology/engineering/privacy-architecture",
    "SDKs": "/technology/developer-platform/sdks",
    "REST APIs": "/platform/api-references",
    "Realtime APIs": "/technology/developer-platform/realtime-apis",
    "Authentication": "/technology/developer-platform/authentication",
    "Status": "/technology/resources/status",
    "Roadmap": "/technology/resources/roadmap",
    "Documentation": "/technology/resources/documentation",
    "Interactive Playground": "/technology/resources/interactive-playground",
    "GitHub": "https://github.com/rheole",
    
    // Company
    "About Us": "/company/about/about-us",
    "Manifesto": "/company/about/manifesto",
    "Mission": "/company/about/mission",
    "Careers": "/company/about/careers",
    "Security": "/company/trust/security",
    "Trust Center": "/company/trust/trust-center",
    "Privacy": "/company/trust/privacy",
    "Contact": "/company/connect/contact",
    "Newsroom": "/company/connect/newsroom",
    "Brand Assets": "/company/connect/brand-assets",
    "Press": "/company/connect/press",
  };
  return overrides[link] || `/${link.toLowerCase().replace(/\s+/g, '-')}`;
};

export default function Navbar({ isGlobal = false }: { isGlobal?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileMenuOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent scrolling when overlays are open
  useEffect(() => {
    if (searchOpen || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [searchOpen, mobileMenuOpen]);

  const transitionSpring = { type: "spring" as const, stiffness: 400, damping: 40, mass: 0.8 };

  return (
    <>
      <header 
        onMouseLeave={() => setActiveMenu(null)}
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-300 ease-out border-b ${
          scrolled
            ? "bg-[#030303]/80 backdrop-blur-2xl saturate-[1.2] border-white/[0.08]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-[48px] md:h-[56px] flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-1 lg:flex-none flex items-center">
            <Link href="/" className="group outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: mounted ? 1 : 0 }} transition={{ duration: 0.8 }}>
                <RheoleLogo className="h-[18px] w-auto transition-all duration-300 group-hover:opacity-70" />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {Object.keys(navData).map((key) => (
              <Link
                key={key}
                href={key === "platform" ? "/platform" : key === "technology" ? "/technology" : key === "research" ? "/research" : key === "company" ? "/company/about" : "#"}
                onMouseEnter={() => setActiveMenu(key)}
                className="relative group outline-none"
              >
                <span className={`text-[12px] font-medium tracking-wide transition-colors duration-300 ${activeMenu === key ? "text-white" : "text-[#A0A0A0] group-hover:text-[#F2F2F0]"}`}>
                  {navData[key as keyof typeof navData].title}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex-1 lg:flex-none flex items-center justify-end gap-4 md:gap-6">
            <Link
              href="/founding-access"
              className="relative hidden md:flex items-center justify-center h-[28px] px-4 rounded-full border border-white/[0.12] bg-white/[0.02] text-[#F2F2F0] text-[11px] font-medium tracking-wide transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.3] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Founding Access
            </Link>

            <div className="flex items-center gap-4">
              <button className="hidden md:block text-[#A0A0A0] hover:text-white transition-colors outline-none">
                <User size={16} strokeWidth={1.5} />
              </button>
              <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-[#A0A0A0] hover:text-white transition-colors outline-none">
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5, transition: { duration: 0.15 } }}
              transition={transitionSpring}
              className="absolute top-[56px] left-0 right-0 w-full bg-[#030303]/95 backdrop-blur-3xl border-b border-white/[0.08] shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="max-w-[1440px] mx-auto px-8 py-12">
                <div className="grid grid-cols-4 gap-12">
                  {navData[activeMenu as keyof typeof navData].columns.map((col, i) => (
                    <div key={i} className="flex flex-col gap-6">
                      <div>
                        <h4 className="text-[14px] text-white font-medium mb-1">{col.title}</h4>
                        <p className="text-[12px] text-[#6A6A6A] font-light">{col.desc}</p>
                      </div>
                      <ul className="flex flex-col gap-4">
                        {col.links.map((link, j) => {
                          const route = getRoute(link);
                          const isExternal = route.startsWith("http");
                          return (
                            <li key={j}>
                              <Link 
                                href={route}
                                target={isExternal ? "_blank" : undefined}
                                prefetch={!isExternal ? false : undefined}
                                className="group inline-flex items-center text-[13px] text-[#A0A0A0] hover:text-white transition-colors"
                                onClick={() => setActiveMenu(null)}
                              >
                                {link}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
                
                {/* Mega Menu Footer CTA */}
                <div className="mt-12 pt-6 border-t border-white/[0.05] flex items-center">
                  <Link 
                    href={activeMenu === "platform" ? "/platform" : activeMenu === "technology" ? "/technology" : activeMenu === "research" ? "/research" : activeMenu === "company" ? "/company/about" : "#"} 
                    prefetch={false}
                    className="group flex items-center gap-2 text-[13px] text-white font-medium"
                    onClick={() => setActiveMenu(null)}
                  >
                    {navData[activeMenu as keyof typeof navData].cta}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] bg-[#000000]/40 backdrop-blur-md flex justify-center items-start pt-[10vh] px-4"
          >
            <div className="absolute inset-0" onClick={() => setSearchOpen(false)} />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="relative w-full max-w-[640px] bg-[#0A0A0A] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center px-6 h-16 border-b border-white/[0.08]">
                <Search size={18} className="text-[#6A6A6A]" />
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Search Rheole..." 
                  className="flex-1 bg-transparent border-none text-[16px] text-white px-4 outline-none placeholder:text-[#4A4A4A]"
                />
                <button onClick={() => setSearchOpen(false)} className="text-[12px] bg-white/[0.05] px-2 py-1 rounded text-[#8A8A8A] border border-white/[0.1]">ESC</button>
              </div>
              <div className="p-6">
                <h5 className="text-[11px] uppercase tracking-wider text-[#6A6A6A] font-medium mb-4">Quick Links</h5>
                <div className="flex flex-col gap-2">
                  {["Intent Intelligence", "Developer SDKs", "Spatial Computing", "Careers"].map((item, i) => (
                    <button key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.03] transition-colors text-left group outline-none">
                      <span className="text-[14px] text-[#A0A0A0] group-hover:text-white transition-colors">{item}</span>
                      <ArrowRight size={14} className="text-[#4A4A4A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Sheet Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="fixed inset-0 z-[1000] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 300, mass: 0.8 }}
              className="absolute bottom-0 left-0 right-0 h-[85vh] bg-[#050505] rounded-t-[32px] border-t border-white/[0.08] shadow-[0_-20px_60px_rgba(0,0,0,0.6)] flex flex-col"
            >
              {/* Drag Handle Area */}
              <div className="w-full flex justify-center pt-4 pb-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-12 h-1.5 bg-white/[0.2] rounded-full" />
              </div>

              {/* Header */}
              <div className="px-6 pb-6 flex items-center justify-between border-b border-white/[0.05]">
                <span className="text-[20px] font-medium text-white">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-[#A0A0A0]">
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-10">
                {Object.keys(navData).map((key) => {
                  const section = navData[key as keyof typeof navData];
                  return (
                    <div key={key} className="flex flex-col gap-6">
                      <h3 className="text-[28px] font-light text-white tracking-tight">{section.title}</h3>
                      <div className="flex flex-col gap-8">
                        {section.columns.map((col, cIdx) => (
                          <div key={cIdx} className="flex flex-col gap-4">
                            <h4 className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium">{col.title}</h4>
                            {col.links.map((link, i) => {
                              const route = getRoute(link);
                              const isExternal = route.startsWith("http");
                              return (
                              <Link 
                                key={i} 
                                href={route} 
                                target={isExternal ? "_blank" : undefined}
                                className="flex items-center justify-between text-[16px] text-[#A0A0A0] hover:text-white" 
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {link}
                                <ChevronRight size={16} className="text-[#4A4A4A]" />
                              </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
