import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PresenceIntelligenceArticle from '@/components/connect/PresenceIntelligenceArticle'

export const metadata = {
  title: 'Friends - Rheole Connect',
  description: 'The people who matter are often closer than you think. Rheole quietly restores awareness without creating noise.',
}

export default function FriendsPage() {
  return (
    <main className="min-h-screen bg-[#080808] flex flex-col font-sans-primary selection:bg-[#4F6EF7]/30 selection:text-white">
      
      {/* Editorial Header */}
      <section className="w-full pt-48 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4F6EF7]/10 via-[#080808]/0 to-[#080808] pointer-events-none" />
        
        {/* Subtle technical accent */}
        <div className="mb-8 font-mono text-[11px] text-[#4F6EF7] tracking-[0.2em] uppercase border border-[#4F6EF7]/30 bg-[#4F6EF7]/5 px-4 py-1.5 rounded-full z-10">
          Connect Architecture — 01
        </div>

        <h1 className="text-[48px] md:text-[80px] text-[#F2F2F0] font-light tracking-tight max-w-[1000px] leading-[1.1] z-10">
          The people who matter are often <br className="hidden md:block" />
          <span className="font-serif-editorial text-[#4F6EF7]">closer than you think.</span>
        </h1>
        <p className="mt-8 text-[18px] md:text-[22px] text-[#A0A0A0] font-light max-w-[700px] leading-relaxed z-10">
          Redefining how you discover trusted human presence around you. Not tracking. Not coordinates. Just calm, private, and contextual awareness.
        </p>
      </section>

      {/* Main Content Article (Presence Intelligence) */}
      <PresenceIntelligenceArticle />

      {/* Spacing before footer */}
      <div className="py-24" />

    </main>
  )
}
