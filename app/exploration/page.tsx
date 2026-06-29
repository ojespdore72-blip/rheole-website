import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ExplorationJournal from '@/components/exploration/ExplorationJournal'

export const metadata = {
  title: 'New Exploration - Rheole',
  description: 'The world\'s best experiences are rarely searched for. They are discovered.',
}

export default function ExplorationPage() {
  return (
    <main className="min-h-screen bg-[#080808] flex flex-col font-sans-primary selection:bg-[#fbbf24]/30 selection:text-white">
      
      {/* Editorial Header */}
      <section className="w-full pt-48 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fbbf24]/10 via-[#080808]/0 to-[#080808] pointer-events-none" />
        <h1 className="text-[48px] md:text-[72px] text-[#F2F2F0] font-light tracking-tight max-w-[1200px] leading-[1.15] z-10">
          The world's best experiences are rarely searched for. <br />
          <span className="font-serif-editorial text-[#fbbf24]">They are discovered.</span>
        </h1>
        <p className="mt-8 text-[18px] md:text-[22px] text-[#A0A0A0] font-light max-w-[600px] leading-relaxed z-10">
          Searching begins with knowing. Exploration begins with curiosity. Rheole exists to reveal the experiences you never thought to search for.
        </p>
      </section>

      {/* Main Content Article (Journal) */}
      <ExplorationJournal />

      {/* Spacing before footer */}
      <div className="py-24" />

    </main>
  )
}
