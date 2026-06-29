"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Plus, Minus, Info } from "lucide-react";

export default function PlacesContentArticle() {
  return (
    <article className="w-full bg-[#030303] text-[#F2F2F0] pb-[160px] flex flex-col items-center">
      
      {/* Chapter 1: What is a Place? */}
      <ChapterSection 
        number="01" 
        title="What Is A Place?"
      >
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="flex-1 flex flex-col gap-6">
            <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
              Today's applications reduce places to static GPS coordinates. A pin on a map. A name. A street address.
            </p>
            <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
              Rheole does not define a place by where it is. We define it as a living environment. A place consists of people, activity, timing, accessibility, communities, atmosphere, events, movement, and context.
            </p>
          </div>
          <div className="flex-1">
            <ComparisonBlock 
              leftTitle="Traditional Maps" 
              leftItems={["Coordinates", "Static addresses", "Business hours", "Average reviews"]}
              rightTitle="Rheole"
              rightItems={["Living environments", "Dynamic atmospheres", "Real-time activity", "Community signals"]}
            />
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 2: Beyond Location */}
      <ChapterSection 
        number="02" 
        title="Beyond Location"
      >
        <div className="flex flex-col gap-12 max-w-[800px] mx-auto">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed text-center">
            Knowing where something is is no longer enough.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#A0A0A0] font-light text-[16px] leading-relaxed">
            <p>
              Distance is relative. A cafe that is one mile away might be a pleasant ten-minute walk through a park, or a frustrating thirty-minute drive through gridlock traffic. Weather, urgency, and purpose completely alter the viability of a location.
            </p>
            <p>
              These variables constantly change. Therefore, recommendations must also change. A perfect location at 9:00 AM on a sunny Tuesday becomes a terrible suggestion during a thunderstorm on a Friday evening.
            </p>
          </div>
          
          <div className="mt-4">
            <Link 
              href="/variables"
              className="w-full px-6 py-5 flex items-center justify-between text-left group border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <span className="text-[14px] uppercase tracking-widest text-[#F2F2F0] font-medium">Learn how variables alter recommendations</span>
              <span className="text-[#6A6A6A] group-hover:text-[#F2F2F0] group-hover:translate-x-1 transition-all">
                →
              </span>
            </Link>
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 3: Understanding Context */}
      <ChapterSection 
        number="03" 
        title="Understanding Context"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 flex flex-col gap-6">
            <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed">
              The same location possesses multiple identities depending on the context of the visitor. Contextual intelligence means understanding these shifting identities.
            </p>
            <PullQuote text="The same café can be perfect for deep work, terrible for investor meetings, and ideal for evening dates. The recommendation changes depending entirely on intent." />
          </div>
          
          <div className="flex-1 w-full flex flex-col gap-4">
            <ContextCard time="Morning" intent="Deep Work" vibe="Quiet, bright, focused" />
            <ContextCard time="Lunch" intent="Networking" vibe="Bustling, energetic, loud" />
            <ContextCard time="Evening" intent="Relaxation" vibe="Dimmed, ambient, intimate" />
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 4: The Layers of a Place */}
      <ChapterSection 
        number="04" 
        title="The Layers of a Place"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LayerCard title="Geographical" desc="The physical coordinates, surrounding terrain, and immediate architectural layout." />
          <LayerCard title="Temporal" desc="How the environment fundamentally shifts between morning, afternoon, and night." />
          <LayerCard title="Social" desc="The types of communities, founders, or creatives that frequent the space." />
          <LayerCard title="Environmental" desc="Real-time factors like natural lighting, temperature, and ambient noise levels." />
          <LayerCard title="Accessibility" desc="Transit proximity, parking availability, and physical accessibility." />
          <LayerCard title="Behavioural" desc="How people actually use the space versus what the business advertises." />
        </div>
      </ChapterSection>

      {/* Chapter 5: Place Intelligence */}
      <ChapterSection 
        number="05" 
        title="Place Intelligence"
      >
        <div className="flex flex-col gap-12 max-w-[800px] mx-auto text-center">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            AI transforms raw environmental data into useful, human-centric decisions.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            We don't rely on static five-star rating systems. Rheole analyzes real-time patterns, relationships, and context signals. We calculate confidence rankings based on exactly what you need in the exact moment you ask for it.
          </p>
          
          <div className="bg-[#4F6EF7]/5 border border-[#4F6EF7]/20 rounded-2xl p-8 flex flex-col gap-4 text-left mt-4">
            <div className="flex items-center gap-3 text-[#4F6EF7]">
              <Info size={18} />
              <span className="text-[12px] uppercase tracking-widest font-medium">Transparent Reasoning</span>
            </div>
            <p className="text-[#F2F2F0] font-light text-[16px]">
              We explain WHY recommendations appear. When we suggest a location, we show you the exact reasoning: "Recommended because walking distance is under eight minutes, power outlets are available, and the atmosphere matches your preference for calm spaces."
            </p>
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 6: Discovery */}
      <ChapterSection 
        number="06" 
        title="Discovery"
      >
        <DiscoveryInteractiveSection />
      </ChapterSection>

      {/* Chapter 7: Connected Places */}
      <ChapterSection 
        number="07" 
        title="Connected Places"
      >
        <div className="flex flex-col gap-12 max-w-[1000px] mx-auto">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Places never exist independently. One place becomes an entry point into an entire local network.
          </p>
          <ConnectedPlacesInteractiveSection />
        </div>
      </ChapterSection>

      {/* Chapter 8: Local Knowledge */}
      <ChapterSection 
        number="08" 
        title="Local Knowledge"
      >
        <LocalKnowledgeSection />
      </ChapterSection>

      {/* Chapter 9: Example Scenarios */}
      <ChapterSection 
        number="09" 
        title="Example Scenarios"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScenarioCard 
            intent="I'm hungry." 
            reason="Rheole assesses your location, checks live restaurant wait times, notes the current weather, and suggests a nearby place matching your historical culinary preferences." 
          />
          <ScenarioCard 
            intent="I need somewhere quiet." 
            reason="We filter out peak-hour cafes and active events, cross-referencing real-time noise levels and community signals to find isolated, focused environments." 
          />
          <ScenarioCard 
            intent="I'm new in Bengaluru." 
            reason="Rheole provides a contextual neighborhood guide, instantly highlighting essential transit routes, safe late-night zones, and local cultural landmarks." 
          />
          <ScenarioCard 
            intent="I have one hour." 
            reason="Calculates exact walking distances and transit times to ensure the recommendation fits perfectly within your strict temporal window." 
          />
          <ScenarioCard 
            intent="I'm searching for startup founders." 
            reason="Analyzes community movement and event schedules to guide you toward coffee shops currently hosting tech mixers or co-working spaces." 
          />
          <ScenarioCard 
            intent="I want live music." 
            reason="Bypasses static venue lists to find acoustic sets happening right now, prioritizing venues with the atmosphere you prefer." 
          />
        </div>
      </ChapterSection>

      {/* Chapter 10: Why This Matters */}
      <ChapterSection 
        number="10" 
        title="Why This Matters"
        isLast
      >
        <div className="flex flex-col gap-10 max-w-[800px] mx-auto text-center">
          <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-snug">
            Cities are becoming more complex. Information grows faster than people can process.
          </p>
          <div className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-6">
            <p>
              Places constantly change. A static map cannot represent a living environment. As our urban centers evolve, navigating them using outdated, directory-based tools creates friction, missed connections, and frustration.
            </p>
            <p>
              Spatial intelligence becomes essential. We built Rheole because understanding your city shouldn't require sifting through thousands of irrelevant reviews. The technology now exists to understand context perfectly.
            </p>
          </div>

          <div className="mt-16 py-16 border-t border-white/[0.06] flex flex-col items-center gap-8">
            <h2 className="text-[clamp(32px,4vw,48px)] font-serif-editorial text-[#F2F2F0] leading-tight">
              The best places were never hidden.<br/>
              <span className="text-[#6A6A6A]">Only disconnected.</span><br/>
              Rheole connects them.
            </h2>
            <button className="mt-8 px-10 h-[56px] bg-[#F2F2F0] text-[#030303] rounded-full text-[13px] font-medium tracking-[0.08em] uppercase transition-transform hover:scale-105">
              Explore Your City
            </button>
          </div>
        </div>
      </ChapterSection>

    </article>
  );
}

// --- SUB-COMPONENTS --- //

function ChapterSection({ number, title, children, isLast = false }: { number: string, title: string, children: React.ReactNode, isLast?: boolean }) {
  return (
    <ScrollReveal className="w-full max-w-[1200px] px-6 pt-[120px] md:pt-[160px] flex flex-col gap-16">
      <div className="flex flex-col md:flex-row md:items-end gap-6 border-b border-white/[0.06] pb-8">
        <span className="text-[48px] md:text-[64px] font-serif-editorial text-[#4F6EF7] leading-none opacity-50">
          {number}
        </span>
        <h2 className="text-[32px] md:text-[40px] font-light text-[#F2F2F0] tracking-wide pb-2">
          {title}
        </h2>
      </div>
      <div className={isLast ? "" : "pb-[40px]"}>
        {children}
      </div>
    </ScrollReveal>
  );
}

function ComparisonBlock({ leftTitle, leftItems, rightTitle, rightItems }: any) {
  return (
    <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
      <div className="bg-[#0A0A0A] p-6 lg:p-10 flex flex-col gap-6">
        <span className="text-[#6A6A6A] text-[12px] uppercase tracking-widest font-medium">{leftTitle}</span>
        <ul className="flex flex-col gap-4">
          {leftItems.map((item: string, i: number) => (
            <li key={i} className="text-[#A0A0A0] font-light text-[15px] flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-[#333]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#0A0A0A] p-6 lg:p-10 flex flex-col gap-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F6EF7]/5 to-transparent pointer-events-none" />
        <span className="text-[#4F6EF7] text-[12px] uppercase tracking-widest font-medium relative z-10">{rightTitle}</span>
        <ul className="flex flex-col gap-4 relative z-10">
          {rightItems.map((item: string, i: number) => (
            <li key={i} className="text-[#F2F2F0] font-light text-[15px] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F6EF7]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ExpandableInsight({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.02]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
      >
        <span className="text-[14px] uppercase tracking-widest text-[#F2F2F0] font-medium">{title}</span>
        <span className="text-[#6A6A6A] group-hover:text-[#F2F2F0] transition-colors">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PullQuote({ text }: { text: string }) {
  return (
    <div className="border-l-[2px] border-[#4F6EF7] pl-8 py-2 my-4">
      <p className="text-[22px] md:text-[28px] font-serif-editorial text-[#F2F2F0] leading-snug">
        "{text}"
      </p>
    </div>
  );
}

function ContextCard({ time, intent, vibe }: { time: string, intent: string, vibe: string }) {
  return (
    <div className="flex items-center justify-between p-5 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
      <div className="flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-widest text-[#6A6A6A]">{time}</span>
        <span className="text-[16px] text-[#F2F2F0] font-light">{intent}</span>
      </div>
      <div className="text-right flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-widest text-[#4F6EF7]">Atmosphere</span>
        <span className="text-[14px] text-[#A0A0A0] font-light">{vibe}</span>
      </div>
    </div>
  );
}

function LayerCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex flex-col gap-4">
      <h4 className="text-[18px] text-[#F2F2F0] font-medium tracking-wide">{title}</h4>
      <p className="text-[14px] text-[#A0A0A0] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function DiscoveryInteractiveSection() {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const types = [
    { 
      title: "Intentional", 
      short: "Finding precisely what you need when you have a specific goal.", 
      explanation: "Intentional discovery occurs when you have a clear objective—like finding a quiet café for a zoom call or a romantic restaurant for an anniversary. Rheole filters out the noise, using real-time context to match your strict criteria rather than just showing what's geographically closest." 
    },
    { 
      title: "Unexpected", 
      short: "Stumbling upon something brilliant you didn't know you wanted.", 
      explanation: "The best parts of a city are often the ones you weren't looking for. Unexpected discovery is driven by serendipity. Rheole understands your overarching tastes and occasionally surfaces hidden gems that fall just outside your usual patterns, encouraging true exploration." 
    },
    { 
      title: "Community", 
      short: "Discovering where your tribe is currently gathering.", 
      explanation: "Cities are defined by their subcultures. Whether you're a startup founder, an artist, or a marathon runner, Community discovery highlights the spaces where your specific tribe is active right now. It's about finding people, not just places." 
    },
    { 
      title: "Hidden", 
      short: "Unearthing local secrets invisible to traditional tourists.", 
      explanation: "Hidden discovery brings you to the speakeasies, the unmarked art galleries, and the underground music venues. These are the places that don't rely on massive street signage or SEO optimization. Rheole surfaces them based on local signals and community curation." 
    }
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-[24px] font-serif-editorial text-[#F2F2F0] mb-4">Types of Discovery</h3>
      {types.map((type, idx) => {
        const isActive = activeTab === idx;
        return (
          <div key={idx} className={`flex flex-col border transition-all duration-300 rounded-2xl overflow-hidden ${isActive ? 'bg-[#0A0A0A] border-white/[0.08]' : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.02]'}`}>
            <button 
              onClick={() => setActiveTab(isActive ? null : idx)}
              className="flex flex-col gap-1 p-6 text-left w-full"
            >
              <div className="flex justify-between items-center w-full mb-1">
                <span className={`text-[18px] font-medium tracking-wide transition-colors ${isActive ? 'text-[#F2F2F0]' : 'text-[#A0A0A0]'}`}>{type.title}</span>
                <span className="text-[#6A6A6A]">{isActive ? <Minus size={18}/> : <Plus size={18}/>}</span>
              </div>
              <span className="text-[14px] text-[#6A6A6A] font-light leading-relaxed pr-8">{type.short}</span>
            </button>
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-white/[0.04] mx-6 mb-4 mt-2">
                    <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed mt-4">
                      {type.explanation}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  );
}

function NetworkNode({ text }: { text: string }) {
  return (
    <div className="px-6 py-3 rounded-full border border-[#4F6EF7]/30 bg-[#4F6EF7]/5 text-[#F2F2F0] text-[14px] font-light relative z-10 backdrop-blur-md">
      {text}
    </div>
  );
}

function LocalKnowledgeSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Neighborhood Personalities",
      description: (
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0]">
              Rheole builds high-dimensional semantic embeddings of spatial environments by continually ingesting heterogeneous data streams—such as localized Wi-Fi density, aggregate mobility patterns, acoustic signatures, and zoning API updates. By utilizing advanced graph neural networks (GNNs), the system maps the relationships between spatial nodes to dynamically classify the overarching "personality" of a neighborhood in real time, accounting for granular shifts that static maps ignore.
            </p>
          </div>
          <div>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0]">
              In simple terms, Rheole doesn't just know that a street has five restaurants; it understands the <em>vibe</em> of that street right now. It can distinguish between a neighborhood that is currently acting as a quiet Sunday morning retreat for remote workers, versus one that has transformed into a bustling, high-energy nightlife hub. When you ask Rheole for a place to focus, it inherently understands which neighborhoods match that energy.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Peak Hours",
      description: (
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0]">
              Through temporal density clustering and predictive time-series analysis (utilizing ARIMA and LSTM models) applied over historical and real-time geospatial telemetry, Rheole calculates precise foot-traffic anomalies. It cross-references this with merchant transaction velocity and localized device density to establish highly accurate, micro-level peak hour predictions that dynamically adjust to weather, holidays, and localized events.
            </p>
          </div>
          <div>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0]">
              Traditional maps give you a static, generalized bar chart of when a place is busy. Rheole gives you the actual present reality. It knows if your favorite cafe is currently flooded with a sudden influx of college students escaping a rainy day, or if a usually busy gym is surprisingly empty right now. It saves you the trip by forecasting the exact crowd level before you even leave your door.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Temporary Experiences",
      description: (
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0]">
              Rheole employs continuous spatial anomaly detection algorithms to monitor deviations from baseline environmental states. By processing unstructured data from social media firehoses, local event registries, and sudden spikes in micro-mobility (like scooter drop-offs), the platform can instantly instantiate temporary nodes within its knowledge graph. These ephemeral nodes are given a calculated decay rate based on the event's projected lifespan.
            </p>
          </div>
          <div>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0]">
              The best things in a city are often temporary—a weekend street food festival, a pop-up thrift market, or an impromptu acoustic set in the park. Because these events aren't permanent businesses, they don't exist on traditional maps. Rheole spots these fleeting experiences the moment they start drawing a crowd and surfaces them to you, ensuring you never miss out on the spontaneous pulse of the city.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Cultural Significance",
      description: (
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0]">
              To understand the heritage of a coordinate, Rheole utilizes Natural Language Processing (NLP) and Large Language Models (LLMs) to parse historical archives, local journalism, architectural databases, and community forums. It performs entity extraction and sentiment analysis to build a rich metadata layer of cultural context, weighting locations not just by commercial value, but by their historical resonance and community importance.
            </p>
          </div>
          <div>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0]">
              A building is more than its address. It might be the site of a historic civil rights movement, a legendary music venue from the 90s, or a culturally significant gathering space for a local community. Rheole brings this rich history to the surface, transforming a simple walk down the street into a deeply educational and immersive experience. It proposes destinations based on the stories they hold, not just the services they sell.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col gap-8 max-w-[1000px] mx-auto text-center w-full">
      <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed max-w-[800px] mx-auto">
        Every city contains deep knowledge utterly unavailable to traditional maps. Neighbourhood personalities, community habits, peak hours, and temporary seasonal experiences. Rheole continuously understands this changing knowledge.
      </p>
      
      <div className="flex flex-col mt-6 w-full relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full items-start">
          {items.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={idx}
                className={`flex flex-col items-center justify-center text-center p-6 rounded-xl border transition-all cursor-pointer h-32 md:h-40 ${
                  isActive 
                    ? 'border-[#4F6EF7]/50 bg-[#4F6EF7]/5' 
                    : 'border-white/[0.04] bg-white/[0.01] hover:border-white/[0.1]'
                }`}
                onClick={() => setActiveIndex(isActive ? null : idx)}
              >
                <span className="text-[14px] md:text-[15px] text-[#F2F2F0] font-medium mb-4">{item.title}</span>
                {isActive ? (
                  <Minus className="w-4 h-4 text-[#4F6EF7]" />
                ) : (
                  <Plus className="w-4 h-4 text-[#A0A0A0]" />
                )}
              </div>
            );
          })}
        </div>
        
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full overflow-hidden mt-4"
            >
              <div className="p-8 md:p-12 rounded-2xl border border-[#4F6EF7]/20 bg-[#0A0A0A] text-left relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#4F6EF7]" />
                <h4 className="text-[20px] md:text-[24px] text-[#F2F2F0] font-medium mb-4">
                  {items[activeIndex].title}
                </h4>
                <div className="text-[15px] md:text-[16px] text-[#A0A0A0] font-light leading-relaxed max-w-[1000px]">
                  {items[activeIndex].description}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ScenarioCard({ intent, reason }: { intent: string, reason: string }) {
  return (
    <div className="p-8 rounded-2xl border border-white/[0.06] bg-[#0A0A0A] flex flex-col gap-6 relative overflow-hidden group hover:border-white/[0.12] transition-colors">
      <span className="text-[20px] font-serif-editorial text-[#F2F2F0]">{intent}</span>
      <div className="w-8 h-[1px] bg-[#4F6EF7]/50" />
      <p className="text-[14px] text-[#A0A0A0] font-light leading-relaxed">{reason}</p>
    </div>
  );
}

function ConnectedPlacesInteractiveSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const nodes = [
    { name: "Cubbon Park", summary: "A sprawling 300-acre oasis in the heart of the city. The starting point for morning energy and calm reflection." },
    { name: "Morning Runners", summary: "The athletic community converging before the city wakes up, setting the pace for the day." },
    { name: "Photography Community", summary: "Creatives capturing the golden hour light filtering through the ancient bamboo groves." },
    { name: "Breakfast Cafés", summary: "The natural post-run destination. A hub for spontaneous conversations over hot filter coffee." },
    { name: "Metro Station", summary: "The vital transit artery seamlessly connecting the morning quiet to the bustling workday ahead." },
    { name: "Startup Meetup", summary: "Founders and engineers crossing paths on their morning commute, unexpectedly sparking new ideas." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nodes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <div className="flex flex-col md:flex-row gap-12 lg:gap-24 min-h-[400px]">
      <div className="flex-1 relative flex flex-col gap-6 py-8">
        <div className="absolute top-0 bottom-0 left-[23px] w-[2px] bg-gradient-to-b from-[#4F6EF7]/0 via-[#4F6EF7]/20 to-[#4F6EF7]/0" />
        {nodes.map((node, i) => {
          const isActive = activeIndex === i;
          const isPast = i < activeIndex;
          
          return (
            <div key={i} className="relative z-10 flex items-center gap-6 group cursor-pointer" onClick={() => setActiveIndex(i)}>
              <div className={`w-3 h-3 rounded-full transition-all duration-500 flex-shrink-0 ml-[18px] ${isActive ? 'bg-[#4F6EF7]' : isPast ? 'bg-[#4F6EF7]/50' : 'bg-[#333]'}`} />
              <div className={`px-6 py-3 rounded-full border transition-all duration-500 backdrop-blur-md ${isActive ? 'border-[#4F6EF7]/50 bg-[#4F6EF7]/10 text-[#F2F2F0]' : isPast ? 'border-white/[0.04] bg-white/[0.01] text-[#A0A0A0]' : 'border-white/[0.02] bg-transparent text-[#6A6A6A]'}`}>
                {node.name}
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex-1 flex flex-col justify-center relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4 pl-0 md:pl-12 border-l-0 md:border-l border-white/[0.06]"
          >
            <h4 className="text-[28px] md:text-[36px] font-serif-editorial text-[#F2F2F0] leading-snug">{nodes[activeIndex].name}</h4>
            <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
              {nodes[activeIndex].summary}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
