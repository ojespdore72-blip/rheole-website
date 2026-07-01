"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const editorialVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  }
};

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <ScrollReveal>
    <section className={`w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-40 flex flex-col ${className}`}>
      {children}
    </section>
  </ScrollReveal>
);

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="flex flex-col gap-4 mb-16 md:mb-24">
    <h2 className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-medium">
      {title}
    </h2>
    {subtitle && (
      <h3 className="text-[28px] md:text-[40px] lg:text-[48px] font-serif-editorial font-light leading-[1.2] text-white tracking-tight max-w-[800px]">
        {subtitle}
      </h3>
    )}
  </div>
);

const Prose = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`text-[16px] md:text-[20px] font-light leading-[1.8] text-[#A0A0A0] max-w-[720px] ${className}`}>
    {children}
  </div>
);

const Blockquote = ({ quote, author }: { quote: React.ReactNode, author?: string }) => (
  <div className="my-24 pl-8 md:pl-12 border-l border-brand-gold/30">
    <p className="text-[24px] md:text-[32px] font-serif-editorial italic font-light leading-relaxed text-white">
      "{quote}"
    </p>
    {author && (
      <p className="mt-8 text-[12px] uppercase tracking-widest text-brand-gold">
        — {author}
      </p>
    )}
  </div>
);

const KnowledgeBlock = ({ title, items }: { title: string, items: { label: string, desc: string }[] }) => (
  <div className="bg-[#0A0A0A] border border-white/5 p-8 md:p-12 my-16">
    <h4 className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-12">{title}</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col gap-3">
          <span className="text-[14px] text-white font-medium">{item.label}</span>
          <p className="text-[13px] text-[#8A8A8A] font-light leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const ConceptCallout = ({ concept, description }: { concept: string, description: React.ReactNode }) => (
  <div className="group relative overflow-hidden bg-white/[0.02] border border-white/[0.05] p-10 hover:bg-white/[0.04] transition-colors duration-500">
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-brand-gold/0 via-brand-gold/30 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    <h5 className="text-[18px] text-white font-medium mb-4">{concept}</h5>
    <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">{description}</p>
  </div>
);

export default function CompanyPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#030303] text-neutral-200 selection:bg-brand-gold/20 selection:text-white font-sans overflow-hidden">
      
      {/* 1. BEGINNING */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-24">
        <motion.div 
          variants={editorialVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[900px] flex flex-col items-center gap-12"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-brand-gold">
            The Company
          </span>
          <h1 className="text-[40px] md:text-[64px] lg:text-[80px] font-serif-editorial font-light leading-[1.1] text-white tracking-tight">
            Every meaningful company begins with a question.
          </h1>
          <Prose className="text-center md:text-[22px]">
            Rheole began with a simple observation: The physical world contains extraordinary amounts of knowledge, yet people constantly struggle to access it naturally. We exist to close that gap.
          </Prose>
        </motion.div>
      </section>

      {/* 2. WHO WE ARE */}
      <Section>
        <SectionHeader 
          title="Who We Are" 
          subtitle="Innovation happens where disciplines overlap." 
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <Prose>
            Rheole is a multidisciplinary company. We are not simply a software engineering firm or an artificial intelligence laboratory. We are a collection of thinkers drawn from entirely different backgrounds, united by a singular purpose: to make the physical world more legible.
            <br /><br />
            To build systems that truly understand human intent and physical reality, we had to tear down the walls between disciplines. We cannot solve spatial intelligence with code alone. It requires an understanding of how humans move, how cities breathe, and how design shapes behavior.
          </Prose>
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-y-6 text-[15px] font-medium text-white/90">
              <span className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />Artificial Intelligence</span>
              <span className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />Design</span>
              <span className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />Engineering</span>
              <span className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />Urban Thinking</span>
              <span className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />Behavioural Science</span>
              <span className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />Spatial Computing</span>
              <span className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />Privacy</span>
              <span className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />Research</span>
              <span className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />Product Design</span>
              <span className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />Human-Centered Tech</span>
            </div>
          </div>
        </div>
        
        <KnowledgeBlock 
          title="People & Craft" 
          items={[
            { label: "The Artisan Approach", desc: "Every engineer is a designer. Every designer is an engineer. We believe in end-to-end ownership of the craft, resulting in products that feel cohesive rather than assembled." },
            { label: "Radical Multidisciplinarity", desc: "We hire urban planners to inform our routing algorithms and behavioural scientists to shape our user interfaces. Perspective is our greatest asset." }
          ]} 
        />
      </Section>

      {/* 3. WHY WE EXIST */}
      <Section className="bg-white/[0.01] border-y border-white/[0.03]">
        <SectionHeader 
          title="Why We Exist" 
          subtitle="Technology has demanded our attention for too long. It is time it quietly helped." 
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <div className="md:col-span-7 flex flex-col gap-8">
            <Prose>
              Look at your phone. Your maps, your messages, your events, your communities, and your recommendations all live inside separate, isolated silos. They don't talk to each other. They don't know where you are, who you are with, or what you actually need right now.
            </Prose>
            <Prose>
              This fragmentation has led to an era of information overload and decision fatigue. Our digital world is overflowing with data, yet our physical cities remain disconnected. We sit in crowded rooms, staring at screens, entirely unaware of the hidden opportunities, people, and experiences passing by. We have traded human connection for digital engagement.
            </Prose>
            <Prose>
              Rheole was created to reverse this trend. We exist to simplify everyday interaction with the physical world, bringing the digital and physical into harmony. We want technology to recede into the background, empowering you rather than distracting you.
            </Prose>
          </div>
          <div className="md:col-span-5">
            <div className="sticky top-32 flex flex-col gap-6">
              <h4 className="text-[14px] text-white font-medium border-b border-white/10 pb-4">The Symptoms of a Broken Ecosystem</h4>
              <ul className="flex flex-col gap-5 text-[14px] text-[#8A8A8A]">
                <li className="flex items-start gap-4"><span className="text-brand-gold mt-0.5">01</span> Information overload without actionable context.</li>
                <li className="flex items-start gap-4"><span className="text-brand-gold mt-0.5">02</span> Fragmented applications fighting for the same screen time.</li>
                <li className="flex items-start gap-4"><span className="text-brand-gold mt-0.5">03</span> Decision fatigue driven by overwhelming, unfiltered choices.</li>
                <li className="flex items-start gap-4"><span className="text-brand-gold mt-0.5">04</span> Disconnected cities where communities remain isolated.</li>
                <li className="flex items-start gap-4"><span className="text-brand-gold mt-0.5">05</span> Technology demanding attention instead of quietly assisting.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* UNIQUE CONCEPTS BREAK */}
      <Section>
        <SectionHeader title="Rheole Concepts" subtitle="The philosophies that define our work." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ConceptCallout 
            concept="Human-First Engineering™" 
            description="Technology begins with human needs rather than technical possibilities. If a feature does not directly serve the human experience, it is not built." 
          />
          <ConceptCallout 
            concept="Quiet Intelligence™" 
            description="The belief that the best technology helps without demanding attention. Systems should anticipate needs and act invisibly, reducing cognitive load." 
          />
          <ConceptCallout 
            concept="Living Craft™" 
            description="Products are never finished; they are continuously refined. We view software as a living organism that evolves, adapts, and matures over time." 
          />
          <ConceptCallout 
            concept="Spatial Thinking™" 
            description="Every digital experience must understand the physical world in which it exists. Digital boundaries should dissolve into physical environments." 
          />
          <ConceptCallout 
            concept="Long Horizon™" 
            description="A commitment to building systems that remain valuable for decades, ignoring the allure of short-term trends that fade within months." 
          />
        </div>
      </Section>

      {/* 4. OUR BELIEFS */}
      <Section className="bg-black border-y border-white/[0.05]">
        <SectionHeader title="Our Beliefs" subtitle="Great companies are remembered for the ideas they introduce into the world." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          <div className="flex flex-col gap-16">
            <div>
              <h4 className="text-[20px] text-white font-medium mb-4">Technology should explain itself.</h4>
              <p className="text-[15px] text-[#8A8A8A] leading-relaxed">Complexity is a failure of design. Users should never need a manual to understand how to interact with their environment. If an interface requires explanation, it requires refinement.</p>
            </div>
            <div>
              <h4 className="text-[20px] text-white font-medium mb-4">Privacy is fundamental.</h4>
              <p className="text-[15px] text-[#8A8A8A] leading-relaxed">Privacy is not a feature; it is a human right. Spatial intelligence requires profound trust, and that trust is earned by building systems that protect user data at an architectural level.</p>
            </div>
            <div>
              <h4 className="text-[20px] text-white font-medium mb-4">Intelligence should remain transparent.</h4>
              <p className="text-[15px] text-[#8A8A8A] leading-relaxed">Black boxes create anxiety. AI should be a tool that humans can understand, direct, and audit. We build transparent models that explain their reasoning.</p>
            </div>
            <div>
              <h4 className="text-[20px] text-white font-medium mb-4">People should stay in control.</h4>
              <p className="text-[15px] text-[#8A8A8A] leading-relaxed">Technology is an amplifier of human agency, not a replacement for it. Our systems suggest, illuminate, and guide, but the final decision always rests with the human.</p>
            </div>
            <div>
              <h4 className="text-[20px] text-white font-medium mb-4">Cities deserve better tools.</h4>
              <p className="text-[15px] text-[#8A8A8A] leading-relaxed">Urban spaces are the engines of civilization, yet they are navigated using antiquated, static tools. We believe cities can become beautifully legible with the right intelligence layer.</p>
            </div>
          </div>

          <div className="flex flex-col gap-16">
            <div>
              <h4 className="text-[20px] text-white font-medium mb-4">Curiosity should be encouraged.</h4>
              <p className="text-[15px] text-[#8A8A8A] leading-relaxed">Exploration is a deeply human instinct. Our products are designed to reward curiosity, uncovering the serendipitous moments and hidden histories around us.</p>
            </div>
            <div>
              <h4 className="text-[20px] text-white font-medium mb-4">Technology should reduce complexity.</h4>
              <p className="text-[15px] text-[#8A8A8A] leading-relaxed">The physical world is chaotic. Software should not add to the noise. We ruthlessly edit our features until only the essential remains.</p>
            </div>
            <div>
              <h4 className="text-[20px] text-white font-medium mb-4">Design should disappear into the experience.</h4>
              <p className="text-[15px] text-[#8A8A8A] leading-relaxed">When design is perfect, it becomes invisible. Users should not notice our typography or layouts; they should only notice how effortlessly they achieved their goal.</p>
            </div>
            <div>
              <h4 className="text-[20px] text-white font-medium mb-4">Long-term thinking beats short-term trends.</h4>
              <p className="text-[15px] text-[#8A8A8A] leading-relaxed">We are immune to hype cycles. We optimize for what will remain true and valuable in thirty years, rather than what will generate engagement this quarter.</p>
            </div>
            <div>
              <h4 className="text-[20px] text-white font-medium mb-4">Human wellbeing matters more than engagement.</h4>
              <p className="text-[15px] text-[#8A8A8A] leading-relaxed">We do not track "time in app" as a metric of success. If our product helps you find what you need and then allows you to put your phone away, we have succeeded.</p>
            </div>
          </div>

        </div>

        <KnowledgeBlock 
          title="Company Principles" 
          items={[
            { label: "Integrity Over Growth", desc: "We will never compromise our principles to achieve artificial scale. Sustainable, trust-based growth is the only kind that lasts." },
            { label: "Obsessive Craftsmanship", desc: "We care about the pixels you don't see and the milliseconds you don't notice. Excellence is a habit, not an event." }
          ]} 
        />
      </Section>

      {/* 5. HOW WE BUILD */}
      <Section>
        <SectionHeader title="How We Build" subtitle="Our product philosophy is a reflection of our patience and precision." />
        <div className="flex flex-col gap-24">
          <Prose>
            Great products are not hacked together; they are cultivated. We approach engineering and design with a methodology that prioritizes depth over speed. We believe that to build something enduring, you must be willing to do the hard, unglamorous work of understanding the problem completely before writing a single line of code.
          </Prose>

          <div className="relative border-l border-white/10 pl-8 md:pl-16 flex flex-col gap-16 py-8">
            <div className="relative">
              <span className="absolute -left-[37px] md:-left-[69px] top-1.5 w-2 h-2 rounded-full bg-brand-gold" />
              <h5 className="text-[18px] text-white font-medium mb-3">Observe first.</h5>
              <p className="text-[15px] text-[#A0A0A0] max-w-[500px]">We spend weeks studying how people interact with their physical environments before deciding if a digital solution is even necessary.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[37px] md:-left-[69px] top-1.5 w-2 h-2 rounded-full bg-brand-gold" />
              <h5 className="text-[18px] text-white font-medium mb-3">Research deeply.</h5>
              <p className="text-[15px] text-[#A0A0A0] max-w-[500px]">Our research teams publish papers and collaborate with universities to ensure our foundational models are rooted in rigorous science.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[37px] md:-left-[69px] top-1.5 w-2 h-2 rounded-full bg-brand-gold" />
              <h5 className="text-[18px] text-white font-medium mb-3">Prototype carefully.</h5>
              <p className="text-[15px] text-[#A0A0A0] max-w-[500px]">We build hundreds of disposable prototypes to test physical interactions, discarding 99% of them until we find the one that feels natural.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[37px] md:-left-[69px] top-1.5 w-2 h-2 rounded-full bg-brand-gold" />
              <h5 className="text-[18px] text-white font-medium mb-3">Design patiently.</h5>
              <p className="text-[15px] text-[#A0A0A0] max-w-[500px]">Design is how it works, not just how it looks. We labor over the typography, the motion curves, and the blank spaces until the interface feels effortless.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[37px] md:-left-[69px] top-1.5 w-2 h-2 rounded-full bg-brand-gold" />
              <h5 className="text-[18px] text-white font-medium mb-3">Engineer responsibly.</h5>
              <p className="text-[15px] text-[#A0A0A0] max-w-[500px]">We write performant, sustainable code that respects the user's battery, data, and privacy. Architecture is designed to last years, not months.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[37px] md:-left-[69px] top-1.5 w-2 h-2 rounded-full bg-brand-gold" />
              <h5 className="text-[18px] text-white font-medium mb-3">Validate continuously.</h5>
              <p className="text-[15px] text-[#A0A0A0] max-w-[500px]">We test our assumptions in the real world constantly, adjusting our models based on physical truth rather than digital simulations.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[37px] md:-left-[69px] top-1.5 w-2 h-2 rounded-full bg-brand-gold" />
              <h5 className="text-[18px] text-white font-medium mb-3">Improve relentlessly.</h5>
              <p className="text-[15px] text-[#A0A0A0] max-w-[500px]">Launch is merely the beginning. We polish and refine our products daily, treating software as an ever-evolving craft.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[37px] md:-left-[69px] top-1.5 w-2 h-2 rounded-full bg-brand-gold" />
              <h5 className="text-[18px] text-white font-medium mb-3">Never compromise trust.</h5>
              <p className="text-[15px] text-[#A0A0A0] max-w-[500px]">If a decision risks the trust of our users, we do not make it. Trust is the currency of spatial intelligence.</p>
            </div>
          </div>
        </div>

        <KnowledgeBlock 
          title="Engineering Values" 
          items={[
            { label: "Simplicity is Complex", desc: "Making something simple requires deeply understanding the underlying complexity and hiding it completely from the user." },
            { label: "Performance is Accessibility", desc: "A slow application is an exclusionary application. We engineer for speed to ensure our tools are accessible to everyone, regardless of hardware." }
          ]} 
        />
      </Section>

      {/* 6. OUR CULTURE */}
      <Section className="bg-white/[0.01]">
        <SectionHeader title="Our Culture" subtitle="A culture of thoughtful builders, not frantic scalers." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 mt-8">
          <Prose className="md:col-span-2 mb-8">
            We actively reject the frantic, "move fast and break things" ethos of the startup world. When you are building systems that integrate with the physical world and handle spatial data, breaking things is not acceptable. We are thoughtful builders. Our culture is defined by intent, respect, and a quiet dedication to mastery.
          </Prose>

          <div className="flex flex-col gap-3">
            <h5 className="text-[16px] text-white font-medium">Curiosity</h5>
            <p className="text-[14px] text-[#8A8A8A] leading-relaxed">We ask 'why' relentlessly. We are fascinated by how cities work, how people behave, and how technology can bridge the two.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-[16px] text-white font-medium">Craftsmanship</h5>
            <p className="text-[14px] text-[#8A8A8A] leading-relaxed">We take immense pride in the details. The elegance of a codebase and the smoothness of an animation matter equally.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-[16px] text-white font-medium">Ownership</h5>
            <p className="text-[14px] text-[#8A8A8A] leading-relaxed">We do not pass blame. We take full responsibility for our work, from the initial concept to the final deployment.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-[16px] text-white font-medium">Humility</h5>
            <p className="text-[14px] text-[#8A8A8A] leading-relaxed">We leave our egos at the door. The best idea wins, regardless of who proposed it. We listen more than we speak.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-[16px] text-white font-medium">Collaboration</h5>
            <p className="text-[14px] text-[#8A8A8A] leading-relaxed">Silos destroy innovation. We work cross-functionally, knowing that diverse perspectives solve complex problems.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-[16px] text-white font-medium">Scientific thinking</h5>
            <p className="text-[14px] text-[#8A8A8A] leading-relaxed">We form hypotheses and test them rigorously. We follow the data, even when it contradicts our initial assumptions.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-[16px] text-white font-medium">Empathy</h5>
            <p className="text-[14px] text-[#8A8A8A] leading-relaxed">We build for real humans with real anxieties and needs. We put ourselves in their shoes with every decision we make.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-[16px] text-white font-medium">Design excellence</h5>
            <p className="text-[14px] text-[#8A8A8A] leading-relaxed">We believe aesthetics and function are inseparable. Beautiful tools command respect and inspire delight.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-[16px] text-white font-medium">Long-term learning</h5>
            <p className="text-[14px] text-[#8A8A8A] leading-relaxed">We are lifelong students. We invest heavily in our team's growth, knowing that the field of spatial computing is still in its infancy.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-[16px] text-white font-medium">Respect</h5>
            <p className="text-[14px] text-[#8A8A8A] leading-relaxed">We respect our users' time and privacy. We respect our colleagues' boundaries. We respect the environments we operate in.</p>
          </div>
        </div>
      </Section>

      {/* 7. LONG-TERM THINKING */}
      <Section>
        <SectionHeader title="Long-Term Thinking" subtitle="Building for decades, rather than product cycles." />
        <Prose className="mb-16">
          The technology industry is addicted to the ephemeral. Companies pivot yearly, chasing the latest buzzword. Rheole operates on a different frequency. We are building foundational infrastructure for how humanity will interact with physical space. This is not a project that is completed in a quarter; it is a vision that unfolds over decades.
        </Prose>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-[20px] text-white font-serif-editorial mb-6 border-b border-white/10 pb-4">Cities & Communities</h3>
            <p className="text-[15px] text-[#8A8A8A] leading-relaxed">
              We envision a future where cities are natively readable by both humans and machines, creating environments that dynamically adapt to the needs of their inhabitants. We are building tools that strengthen local communities, making local coordination as effortless as sending a text.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] text-white font-serif-editorial mb-6 border-b border-white/10 pb-4">Artificial Intelligence</h3>
            <p className="text-[15px] text-[#8A8A8A] leading-relaxed">
              Our long-term AI strategy is not to replace human thought, but to augment human perception. We are developing spatial reasoning models that understand physical context with unprecedented nuance, ensuring AI serves as a quiet co-pilot in the real world.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] text-white font-serif-editorial mb-6 border-b border-white/10 pb-4">Spatial Computing</h3>
            <p className="text-[15px] text-[#8A8A8A] leading-relaxed">
              As hardware evolves from screens to ambient spatial interfaces, Rheole will provide the intelligence layer. We are preparing for a world where computing fades entirely into the background, and information is layered naturally onto our physical surroundings.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] text-white font-serif-editorial mb-6 border-b border-white/10 pb-4">Sustainability & Mobility</h3>
            <p className="text-[15px] text-[#8A8A8A] leading-relaxed">
              Efficient routing and deep environmental intelligence are crucial for sustainable urban futures. By optimizing how people and goods move through physical space, we are contributing to the reduction of global carbon footprints over the long horizon.
            </p>
          </div>
        </div>

        <Blockquote 
          quote="Enduring ideas matter infinitely more than rapid feature expansion. We are not in a rush to be everything to everyone; we are taking our time to be essential."
        />
      </Section>

      {/* 8. THE FUTURE WE'RE BUILDING */}
      <Section className="bg-[#020202] border-t border-white/[0.05] pb-32">
        <SectionHeader title="The Future We're Building" subtitle="Imagine a world where technology understands context." />
        
        <div className="flex flex-col gap-10 max-w-[800px] mb-20">
          <p className="text-[20px] md:text-[24px] text-white font-light leading-relaxed">Imagine a world where cities become effortlessly understandable. Where you never feel lost, not just geographically, but contextually.</p>
          <p className="text-[20px] md:text-[24px] text-white font-light leading-relaxed">Imagine a world where people discover more. Where hidden opportunities, serendipitous encounters, and vibrant local events reveal themselves to you exactly when you are open to them.</p>
          <p className="text-[20px] md:text-[24px] text-white font-light leading-relaxed">Imagine a world where movement becomes effortless. Where routing algorithms understand your personal rhythm, the nuances of the environment, and the flow of the city.</p>
          <p className="text-[20px] md:text-[24px] text-white font-light leading-relaxed">Imagine a world where communities become stronger. Where technology bridges the gap between strangers, facilitating real-world connection rather than digital isolation.</p>
          <p className="text-[20px] md:text-[24px] text-white font-light leading-relaxed">Imagine a world where Artificial Intelligence becomes trustworthy. Where it operates transparently, respects your privacy unequivocally, and serves only to amplify your own agency.</p>
          <p className="text-[20px] md:text-[24px] text-white font-light leading-relaxed text-brand-gold">Imagine a world where computing fades entirely into the background, and the physical world becomes easier to understand.</p>
        </div>

        <Prose>
          This is not a utopian fantasy; it is an engineering challenge. It requires immense technical rigor, profound design empathy, and an unwavering commitment to our core philosophy.
          <br /><br />
          We are Rheole. And this is the future we are building.
        </Prose>

        <KnowledgeBlock 
          title="Our Commitments" 
          items={[
            { label: "Transparency", desc: "We will always be transparent about what data we use, how our models work, and why we make the design choices we make." },
            { label: "Human Agency", desc: "We will never build systems that coerce, manipulate, or override human choice. You remain in control." }
          ]} 
        />
      </Section>

    </div>
  );
}
