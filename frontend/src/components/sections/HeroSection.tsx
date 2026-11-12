"use client";

import Link from "next/link";
import { TypewriterRole } from "@/components/ui/TypewriterRole";
import { useSeason } from "@/context/SeasonContext";

export function HeroSection() {
  const { season } = useSeason();

  return (
    <section className="pt-20 sm:pt-28 pb-20 sm:pb-28 px-6 max-w-4xl mx-auto w-full">
      <div className="space-y-8 text-left">
        {/* Clean Spaced Kicker */}
        <div className="flex items-center gap-2.5 font-mono text-[11px] text-stone-500 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E]" />
          <span>KATHMANDU, NEPAL — FULL-STACK &amp; SYSTEMS ENGINEER</span>
        </div>

        {/* Grand Typographic Headline Lockup */}
        <div className="space-y-3">
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-[#1C1917] leading-[0.98]">
            Nischal Basnet
          </h1>
          <TypewriterRole
            prefix="Architecting"
            roles={[
              "AI Vision Pipelines",
              "Full-Stack Web Systems",
              "Scalable Backend Services",
              "Interactive Web Experiences",
            ]}
          />
        </div>

        {/* Grounded Bio Statement */}
        <p className="text-stone-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal pt-2">
          Software engineer focused on clean architectural design, computer vision pipelines, and high-performance backend systems. Building with structural rigor and quiet aesthetic restraint.
        </p>

        {/* Action Button Row */}
        <div className="flex flex-wrap items-center gap-4 pt-3 font-mono text-xs">
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

        {/* Generous Spaced Metadata Strip */}
        <div className="mt-14 pt-8 border-t border-[#E7E2D8] grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs text-stone-600">
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
      </div>
    </section>
  );
}
