'use client'

import React from 'react'
import { motion } from 'framer-motion'

// --- REUSABLE COMPONENTS ---

function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function JournalDiscovery({ number, title, children, isLast = false }: { number: string, title: string, children: React.ReactNode, isLast?: boolean }) {
  return (
    <section className="w-full relative pt-16 md:pt-24 pb-8">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col items-start gap-8 relative">
        <ScrollReveal className="w-full flex flex-col gap-2 border-b border-[#fbbf24]/20 pb-4">
          <span className="text-[14px] uppercase tracking-[0.2em] text-[#fbbf24] font-medium">
            Discovery {number}
          </span>
          <h2 className="text-[28px] md:text-[36px] font-serif-editorial text-[#F2F2F0] font-light">
            {title}
          </h2>
        </ScrollReveal>

        <div className="w-full flex flex-col gap-6">
          <ScrollReveal delay={0.1}>
            {children}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function ExplorerNote({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="my-8 w-full p-8 md:p-10 rounded-2xl bg-[#fbbf24]/5 border border-[#fbbf24]/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#fbbf24]/10 blur-[60px] pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
      <h4 className="text-[13px] text-[#fbbf24] uppercase tracking-[0.2em] font-medium mb-4">
        Explorer's Notebook — {title}
      </h4>
      <div className="text-[16px] md:text-[18px] text-[#F2F2F0] font-serif-editorial leading-relaxed">
        {children}
      </div>
    </div>
  )
}

function WeeklyChallenge({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex flex-col p-6 rounded-2xl bg-[#080808] border border-white/10 hover:border-[#fbbf24]/40 transition-colors duration-500 group">
      <div className="w-8 h-8 rounded-full bg-[#fbbf24]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <div className="w-2 h-2 rounded-full bg-[#fbbf24]" />
      </div>
      <h3 className="text-[18px] text-[#F2F2F0] font-medium mb-2">{title}</h3>
      <p className="text-[14px] md:text-[15px] text-[#A0A0A0] leading-relaxed">
        {desc}
      </p>
    </div>
  )
}

// --- MAIN ARTICLE ---

export default function ExplorationJournal() {
  return (
    <article className="w-full flex flex-col items-center">
      
      {/* Discovery 01 */}
      <JournalDiscovery number="01" title="Why Do We Stop Exploring?">
        <p className="text-[18px] md:text-[22px] text-[#F2F2F0] font-light leading-relaxed">
          Modern technology meticulously rewards certainty.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
          Search bars assume you already know precisely what you want. Algorithms assume you only want more of what you already like. The digital world is designed to collapse the unknown into a convenient, predictable routine.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
          But reality is deeply different. People rarely know the remarkable experiences waiting silently just around the corner. By optimizing for absolute efficiency, curiosity is becoming a rare and diminishing human trait.
        </p>
        <ExplorerNote title="Curiosity Note">
          "The greatest tragedy of modern maps is not that they show us where everything is, but that they trick us into believing there is nothing left to find."
        </ExplorerNote>
      </JournalDiscovery>

      {/* Discovery 02 */}
      <JournalDiscovery number="02" title="The Invisible City">
        <p className="text-[18px] md:text-[22px] text-[#F2F2F0] font-light leading-relaxed">
          Every neighbourhood breathes with hidden stories.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
          Unknown cafés serving generational recipes. Independent bookstores tucked in alleyways. Weekend art studios opening only on Sundays. Secret gardens, historic buildings, public observatories, tiny niche museums, street performances, and deeply authentic family-run restaurants.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
          These places are structurally invisible to a standard search bar because you wouldn't think to type their names. They exist purely to be stumbled upon.
        </p>
      </JournalDiscovery>

      {/* Discovery 03 */}
      <JournalDiscovery number="03" title="The Opportunities You Never Searched For">
        <p className="text-[18px] md:text-[22px] text-[#F2F2F0] font-light leading-relaxed">
          The goal is not to search. The goal is to encounter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 rounded-xl bg-[#080808] border border-white/5">
            <span className="text-[#fbbf24] font-medium block mb-1">Unexpected Internship</span>
            <span className="text-[#A0A0A0] text-[14px]">Stumbling into a local tech meetup.</span>
          </div>
          <div className="p-4 rounded-xl bg-[#080808] border border-white/5">
            <span className="text-[#fbbf24] font-medium block mb-1">Startup Co-Founder</span>
            <span className="text-[#A0A0A0] text-[14px]">Encountered at a language exchange event.</span>
          </div>
          <div className="p-4 rounded-xl bg-[#080808] border border-white/5">
            <span className="text-[#fbbf24] font-medium block mb-1">Creative Collaboration</span>
            <span className="text-[#A0A0A0] text-[14px]">Formed during a neighborhood photography workshop.</span>
          </div>
          <div className="p-4 rounded-xl bg-[#080808] border border-white/5">
            <span className="text-[#fbbf24] font-medium block mb-1">Life-Changing Mentorship</span>
            <span className="text-[#A0A0A0] text-[14px]">Sparked at a community book launch.</span>
          </div>
        </div>
      </JournalDiscovery>

      {/* Discovery 04 */}
      <JournalDiscovery number="04" title="Micro-Adventures">
        <p className="text-[18px] md:text-[22px] text-[#F2F2F0] font-light leading-relaxed">
          Meaningful exploration does not strictly require travelling thousands of miles.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
          It can be as profound as one new street. One hidden trail. One community event you've never considered. One weekend market you've walked past for years. Rheole encourages the beautiful, sustainable art of exploring close to home.
        </p>
        <ExplorerNote title="Tiny Adventure">
          Tonight, simply take one road you have never taken on your commute home. The brain immediately shifts from autopilot into active observation.
        </ExplorerNote>
      </JournalDiscovery>

      {/* Discovery 05 */}
      <JournalDiscovery number="05" title="Discovering through AI">
        <p className="text-[18px] md:text-[22px] text-[#F2F2F0] font-light leading-relaxed">
          AI should expand curiosity, not replace it.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
          Instead of providing the single most obvious, highest-rated answer, Rheole reveals highly contextual, meaningful possibilities.
        </p>
        <div className="mt-6 flex flex-col gap-4 pl-4 border-l-2 border-[#fbbf24]/30">
          <p className="text-[15px] md:text-[16px] text-[#F2F2F0]">
            "You usually visit cafés on Tuesdays. Today, there is a local poetry reading happening 5 minutes away."
          </p>
          <p className="text-[15px] md:text-[16px] text-[#F2F2F0]">
            "You enjoy cycling. A beautiful sunrise community ride starts in 40 minutes near the river."
          </p>
        </div>
      </JournalDiscovery>

      {/* Discovery 06 */}
      <JournalDiscovery number="06" title="Exploration Changes Every Day">
        <p className="text-[18px] md:text-[22px] text-[#F2F2F0] font-light leading-relaxed">
          Discovery is fundamentally dynamic.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
          Today's serendipitous opportunities will literally disappear tomorrow. Temporary exhibitions appear for an afternoon. Pop-up stores emerge in vacant spaces. Street performances capture a crowd and vanish. Seasonal festivals ignite the city briefly. The map is never static; it breathes.
        </p>
      </JournalDiscovery>

      {/* Discovery 07 */}
      <JournalDiscovery number="07" title="Discovering People">
        <p className="text-[18px] md:text-[22px] text-[#F2F2F0] font-light leading-relaxed">
          People become discoveries, too.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
          Beyond places and events, the most impactful explorations are human. Spontaneously encountering mentors, emerging artists, dedicated researchers, ambitious founders, or seasoned travellers can alter the trajectory of your life in an instant.
        </p>
        <ExplorerNote title="Hidden Story">
          Many of the world's greatest creative partnerships began not with a formal email, but with a chance encounter in a room neither person originally planned to be in.
        </ExplorerNote>
      </JournalDiscovery>

      {/* Discovery 08 */}
      <JournalDiscovery number="08" title="Discovering Your City Again">
        <p className="text-[18px] md:text-[22px] text-[#F2F2F0] font-light leading-relaxed">
          Even lifelong residents rarely know the totality of their own city.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
          Rheole introduces the delicate concept of rediscovery. It strips away the numbness of routine, allowing the profoundly familiar to become beautifully unfamiliar again.
        </p>
      </JournalDiscovery>

      {/* Discovery 09 */}
      <JournalDiscovery number="09" title="The Science of Serendipity">
        <p className="text-[18px] md:text-[22px] text-[#F2F2F0] font-light leading-relaxed">
          Unexpected discoveries create structurally stronger memories.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
          Neurologically, routine places the brain on standby. When you break patterns and encounter novelty, the brain releases dopamine not just as a reward, but as a mechanism to encode new, vivid memories. Exploration isn't just an activity; it is a catalyst for creativity, continuous learning, and a demonstrably happier, richer life.
        </p>
      </JournalDiscovery>

      {/* Discovery 10 */}
      <JournalDiscovery number="10" title="The Future of Exploration" isLast={true}>
        <p className="text-[18px] md:text-[22px] text-[#F2F2F0] font-light leading-relaxed">
          Cities should no longer wait passively to be searched.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
          They should gently reveal themselves to those who are curious. Technology has the immense power to encourage exploration instead of reinforcing rigid routines. Rheole's ultimate philosophy is to transform your everyday physical movement into a journey of continuous, beautiful exploration.
        </p>
      </JournalDiscovery>

      {/* Weekly Exploration Challenges Section */}
      <section className="w-full relative pt-12 pb-24 border-t border-[#fbbf24]/20 mt-12 bg-gradient-to-b from-[#080808] to-[#fbbf24]/5">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col items-center">
          <ScrollReveal className="text-center flex flex-col items-center mb-12">
            <span className="text-[12px] uppercase tracking-[0.2em] text-[#fbbf24] font-medium mb-4">
              Actionable Curiosity
            </span>
            <h2 className="text-[32px] md:text-[40px] font-serif-editorial text-[#F2F2F0] font-light">
              Weekly Exploration Challenges
            </h2>
            <p className="text-[16px] text-[#A0A0A0] max-w-[500px] mt-4 font-light">
              We don't gamify your life. We simply provide small sparks to reignite your innate desire to explore.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <WeeklyChallenge title="The Unseen Path" desc="Visit a neighbourhood you have never walked through." />
            <WeeklyChallenge title="The First Step" desc="Discover one local business you've walked past but never entered." />
            <WeeklyChallenge title="The Paradigm Shift" desc="Attend one event completely outside your normal interests." />
            <WeeklyChallenge title="The New Perspective" desc="Talk to someone with a totally different profession." />
            <WeeklyChallenge title="The Golden Hour" desc="Watch one sunrise from a new physical location." />
            <WeeklyChallenge title="The Hidden Lore" desc="Find one hidden bookstore or library." />
          </ScrollReveal>
        </div>
      </section>

    </article>
  )
}
