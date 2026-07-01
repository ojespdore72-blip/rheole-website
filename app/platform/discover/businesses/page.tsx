import BusinessesContentArticle from '@/components/businesses/BusinessesContentArticle'

export const metadata = {
  title: 'Businesses & Startups - Rheole',
  description: 'Discover the right business at the right moment. Explore local ecosystems, startups, and innovation with Rheole.',
}

export default function BusinessesPage() {
  return (
    <main className="min-h-screen bg-[#080808] flex flex-col font-sans-primary selection:bg-[#f97316]/30 selection:text-white">
      
      {/* Editorial Header */}
      <section className="w-full pt-48 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#f97316]/10 via-[#080808]/0 to-[#080808] pointer-events-none" />
        <h1 className="text-[48px] md:text-[80px] text-[#F2F2F0] font-light tracking-tight max-w-[1000px] leading-[1.1] z-10">
          Businesses are <span className="font-serif-editorial text-[#f97316]">living ecosystems.</span>
        </h1>
        <p className="mt-8 text-[18px] md:text-[22px] text-[#A0A0A0] font-light max-w-[600px] leading-relaxed z-10">
          Rheole helps you discover the right business for the right purpose at the exact right moment.
        </p>
      </section>

      {/* Main Content Article */}
      <BusinessesContentArticle />

      {/* Spacing before footer */}
      <div className="py-24" />

    </main>
  )
}
