import React from "react";
import Link from "next/link";
import Image from "next/image";

// Simulated chapter database
const CHAPTER_DATA: Record<string, { title: string; subtitle: string; content: string; image: string; bg: string }> = {
  "fragmented-world": {
    title: "Why the world feels fragmented.",
    subtitle: "The Disconnected Reality of Modern Technology",
    content: "We live in an era of unprecedented connectivity, yet we have never felt more disconnected from our immediate surroundings. Our digital lives are siloed across dozens of apps, each serving a single purpose but ignoring the broader context of who we are and where we are. The pieces of the puzzle exist—maps, recommendations, social networks, local news—but they don't talk to each other. This fragmentation forces us to manually synthesize our world, reducing the physical environment to a series of disjointed digital tasks rather than a cohesive, lived experience.",
    image: "/glass_network_1782537362606.png",
    bg: "bg-[#0a0f1c]"
  },
  "contextual-void": {
    title: "Information already exists. Context does not.",
    subtitle: "The Need for Synthesis",
    content: "We are drowning in data but starving for meaning. The internet has solved the problem of access to information; it has failed to solve the problem of relevance. When you stand on a street corner, you don't need a list of ten million web pages about the city. You need to know what matters right here, right now, to you. True utility is not about serving more data; it's about providing the exact right context at the exact right moment, turning the invisible threads of information into a woven tapestry of understanding.",
    image: "/obsidian_ai_1782537375889.png",
    bg: "bg-[#110c14]"
  },
  "understanding-over-search": {
    title: "People shouldn't search. The world should understand them.",
    subtitle: "Moving Beyond the Query",
    content: "The fundamental flaw of the search engine is that it requires intent to be perfectly articulated before it can offer value. It forces humans to speak the language of machines. But the most valuable discoveries in life are serendipitous—they happen when the environment understands you before you even know what you want. We are moving from an era of explicit querying to an era of implicit understanding, where technology anticipates needs based on presence, history, and the invisible rhythms of the world around us.",
    image: "/contextual_landscape_1782537401766.png",
    bg: "bg-[#0b131a]"
  },
  "quiet-ai": {
    title: "AI should become quieter, not louder.",
    subtitle: "The Invisible Orchestrator",
    content: "Artificial Intelligence has become a loud, demanding presence—chatbots screaming for attention, interfaces bombarding us with generated noise. This is a transitional phase. True intelligence is quiet. It operates in the background, smoothing friction, connecting dots, and orchestrating reality without demanding the spotlight. The best AI is the one you don't notice, the one that makes you feel like the world itself has simply become more responsive and alive.",
    image: "/obsidian_ai_1782537375889.png",
    bg: "bg-[#0f1012]"
  },
  "invisible-infrastructure": {
    title: "Communities are invisible infrastructure.",
    subtitle: "The Human Layer",
    content: "When we look at a city, we see buildings, roads, and bridges. But the true infrastructure of any place is the overlapping networks of human connection—the shared interests, the hidden histories, the local knowledge, the unspoken bonds. This social infrastructure is invisible to the naked eye and largely ignored by modern map interfaces. By illuminating this layer, we can transform any physical space from a mere location into a vibrant, interconnected community.",
    image: "/urban_connections_1782537390550.png",
    bg: "bg-[#1c1815]"
  },
  "presence": {
    title: "Presence is more valuable than attention.",
    subtitle: "Reclaiming the Now",
    content: "The modern internet economy is built on capturing and monetizing attention, pulling us away from the physical world and into endless, infinite feeds. But human fulfillment is rooted in presence—being fully engaged with where we are and who we are with. Technology should not be a portal to escape reality; it should be a lens to enhance it. By prioritizing presence over attention, we can build tools that anchor us in the present moment rather than distracting us from it.",
    image: "/glass_network_1782537362606.png",
    bg: "bg-[#0b1715]"
  },
  "privacy": {
    title: "Privacy is not a setting. It is a design principle.",
    subtitle: "Architecture, not Toggles",
    content: "For too long, privacy has been treated as a legal requirement—a series of confusing toggles buried in a settings menu. This is a failure of design. True privacy means trust is built into the very architecture of the product. It means data is minimized by default, context is localized, and the user's agency is paramount. Privacy should not be something you have to opt into; it should be the foundational layer upon which everything else is built.",
    image: "/urban_connections_1782537390550.png",
    bg: "bg-[#111111]"
  },
  "contextual-intelligence": {
    title: "The future belongs to contextual intelligence.",
    subtitle: "The Next Paradigm",
    content: "We are standing at the edge of a fundamental shift in computing. The smartphone era put a supercomputer in every pocket; the next era will embed intelligence into the environment itself. Contextual intelligence means that your devices don't just know where you are; they understand what that location means to you right now. It is the synthesis of spatial computing, local knowledge, and personalized AI, creating a seamless interface between the digital and physical worlds.",
    image: "/contextual_landscape_1782537401766.png",
    bg: "bg-[#0b111e]"
  },
  "intelligence-layer": {
    title: "Rheole becomes the intelligence layer.",
    subtitle: "Weaving the Threads",
    content: "Rheole is not just another app or a disparate service. It is the intelligence layer designed to sit between you and the physical world. It takes the fragmented pieces—location, intent, community, and time—and weaves them together into a unified, contextual understanding. It is the connective tissue that makes the invisible visible, transforming every street, neighborhood, and city into a responsive, intelligent environment.",
    image: "/glass_network_1782537362606.png",
    bg: "bg-[#14100c]"
  },
  "pulse": {
    title: "The Pulse of Your World.",
    subtitle: "Awakening the Environment",
    content: "Ultimately, the goal is not to build better technology, but to build a better experience of reality. When the world is understood contextually, when communities are visible, and when intelligence is quiet, the environment itself begins to feel alive. You are no longer just navigating a map; you are feeling the pulse of your world. Welcome to the next era of discovery.",
    image: "/obsidian_ai_1782537375889.png",
    bg: "bg-[#0a0a0a]"
  }
};

export default function ChapterDetail({ params }: { params: { chapterId: string } }) {
  const chapter = CHAPTER_DATA[params.chapterId];

  if (!chapter) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-serif-editorial">Chapter not found.</h1>
        <Link href="/manifesto" className="ml-8 text-brand-gold hover:underline">Return to Manifesto</Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${chapter.bg} text-white selection:bg-brand-gold/30 font-sans`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
        <Link href="/manifesto" className="text-sm font-mono uppercase tracking-widest text-gray-300 hover:text-white transition-colors flex items-center gap-2">
          <span>&larr;</span> Back to Manifesto
        </Link>
        <span className="text-brand-gold font-serif-editorial text-xl">{chapter.subtitle}</span>
      </nav>

      <main className="max-w-5xl mx-auto px-8 pt-40 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Content Column */}
          <div className="flex flex-col gap-10">
            <h1 className="text-5xl md:text-7xl font-serif-editorial leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              {chapter.title}
            </h1>
            
            <div className="w-16 h-[1px] bg-brand-gold/50" />
            
            <div className="prose prose-invert prose-lg md:prose-xl font-light text-gray-300 leading-relaxed">
              <p>{chapter.content}</p>
            </div>

            <div className="pt-12">
              <Link href="/manifesto" className="inline-flex items-center gap-4 group">
                 <span className="text-sm font-semibold uppercase tracking-widest text-white group-hover:text-brand-gold transition-colors">
                   Continue Exploring
                 </span>
                 <div className="w-8 h-[1px] bg-white group-hover:bg-brand-gold transition-colors group-hover:w-12 duration-300" />
              </Link>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
             <Image 
               src={chapter.image} 
               alt={chapter.title}
               fill
               className="object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-multiply" />
          </div>

        </div>
      </main>
    </div>
  );
}
