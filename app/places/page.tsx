"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlacesHeroSection from "@/components/places/PlacesHeroSection";
import PlacesContentArticle from "@/components/places/PlacesContentArticle";

export default function PlacesExperiencePage() {
  return (
    <main className="min-h-screen bg-[#030303] text-[#F2F2F0] font-sans selection:bg-[#4F6EF7]/30 selection:text-white">
      <Navbar />
      
      {/* Chapter 1: Hero */}
      <PlacesHeroSection />

      {/* Chapters 1-10 Editorial Content */}
      <PlacesContentArticle />

      <Footer />
    </main>
  );
}
