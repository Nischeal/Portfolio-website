"use client";

import Link from "next/link";
import { TypewriterRole } from "@/components/ui/TypewriterRole";
import { HeroQuoteCard } from "@/components/ui/HeroQuoteCard";
import { useSeason } from "@/context/SeasonContext";

export function HeroSection() {
  const { season } = useSeason();

  return (
    <section className="pt-16 sm:pt-24 pb-16 sm:pb-24 px-6 max-w-6xl mx-auto w-full">
      {/* Asymmetric Two-Column Editorial Desk */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Typographic Hierarchy & Identity */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Clean Spaced Kicker */}
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-stone-500 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E]" />
            <span>KATHMANDU, NEPAL — FULL-STACK &amp; BACKEND ENGINEER</span>
          </div>

          {/* Grand Typographic Headline Lockup */}
          <div className="space-y-3">
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-[#1C1917] leading-[0.98]">
              Nischal Basnet
            </h1>
            <TypewriterRole
              prefix="Building"
              roles={[
                "Laravel & Livewire Systems",
                "FastAPI & Python Backends",
                "Full-Stack Web Applications",
                "Scalable System Architectures",
              ]}
            />
          </div>

          {/* Grounded Bio Statement */}
          <p className="text-stone-600 text-lg sm:text-xl leading-relaxed max-w-xl font-normal pt-1">
            Full-Stack Developer and Backend Engineer specializing in Laravel, Livewire, and Python (FastAPI). Focused on clean system design, robust database architectures, and scalable web platforms. Rooted in Kathmandu, Nepal.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
            <Link
              href="#work"
              className="bg-[#4A5D4E] hover:bg-[#37463A] text-white px-7 py-3.5 rounded-full tracking-wider transition-all shadow-[0_4px_16px_rgba(74,93,78,0.22)] inline-flex items-center gap-2"
            >
              <span>Explore Selected Work</span>
              <span>↓</span>
            </Link>

            <Link
              href="#inquiry"
              className="border border-[#D6CFC3] hover:border-[#1C1917] text-[#1C1917] px-7 py-3.5 rounded-full tracking-wider transition-all bg-white/60 hover:bg-white inline-flex items-center gap-2 shadow-sm"
            >
              <span>Initiate Inquiry</span>
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Tactile Polaroid Quote Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
          <HeroQuoteCard />
        </div>
      </div>

      {/* Generous Spaced Full-Width Metadata Strip */}
      <div className="mt-14 sm:mt-16 pt-8 border-t border-[#E7E2D8] grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs text-stone-600">
        <div>
          <span className="text-[10px] text-stone-400 block uppercase tracking-widest mb-1">
            LOCATION
          </span>
          <span className="text-stone-800">Kathmandu, NP</span>
        </div>

        <div>
          <span className="text-[10px] text-stone-400 block uppercase tracking-widest mb-1">
            AVAILABILITY
          </span>
          <span className="text-[#37463A] font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E] animate-pulse" />
            Open for Work
          </span>
        </div>

        <div>
          <span className="text-[10px] text-stone-400 block uppercase tracking-widest mb-1">
            SEASONAL AMBIENCE
          </span>
          <span className="text-stone-800 capitalize">
            {season === "autumn" ? "🍂 Autumn Drift" : "❄️ Winter Frost"}
          </span>
        </div>

        <div>
          <span className="text-[10px] text-stone-400 block uppercase tracking-widest mb-1">
            CODE ARCHIVE
          </span>
          <a
            href="https://github.com/Nischeal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4A5D4E] hover:underline"
          >
            github.com/Nischeal ↗
          </a>
        </div>
      </div>
    </section>
  );
}
