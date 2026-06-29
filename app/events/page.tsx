import React from "react";
import EventsContentArticle from "@/components/events/EventsContentArticle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events Intelligence | Rheole",
  description: "Discover moments that matter. Understand how Rheole maps real-time relationships between people, places, and events.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#080808] flex flex-col font-sans-primary selection:bg-[#4F6EF7]/30 selection:text-white">
      
      {/* Editorial Header */}
      <section className="w-full pt-48 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4F6EF7]/10 via-[#080808]/0 to-[#080808] pointer-events-none" />
        <h1 className="text-[48px] md:text-[80px] text-[#F2F2F0] font-light tracking-tight max-w-[1000px] leading-[1.1] z-10">
          Events are <span className="font-serif-editorial text-[#4F6EF7]">living moments.</span>
        </h1>
        <p className="mt-8 text-[18px] md:text-[22px] text-[#A0A0A0] font-light max-w-[600px] leading-relaxed z-10">
          Rheole does not help people find events. Rheole helps people discover moments that matter.
        </p>
      </section>

      <EventsContentArticle />
      
    </main>
  );
}
