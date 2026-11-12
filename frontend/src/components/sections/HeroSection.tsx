"use client";

import Link from "next/link";
import { TypewriterRole } from "@/components/ui/TypewriterRole";

export function HeroSection() {
  return (
    <section className="pt-16 pb-24 px-6 max-w-5xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Typographic Introduction */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Subtle horology counter & Kicker */}
          <div className="flex items-center gap-2 font-mono text-xs text-stone-500 tracking-wider">
            <span>01 // PORTFOLIO</span>
            <span className="text-[#E7E2D8]">|</span>
            <span>KATHMANDU, NP</span>
          </div>

          {/* Authoritative Display Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#1C1917] leading-[1.05]">
            Nischal Basnet
          </h1>

          {/* Dynamic Olive Typewriter Rotator */}
          <div className="pt-1">
            <TypewriterRole
              prefix="Crafting"
              roles={[
                "Full-Stack Web Systems",
                "AI & Vision Pipelines",
                "Scalable Backend Services",
                "Interactive Web Experiences",
              ]}
            />
          </div>

          {/* Concise Bio Statement */}
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal pt-1">
            Full-Stack &amp; Systems Engineer exploring the intersection of distributed web architectures, computer vision, and timeless tailoring aesthetics. Engineering with architectural rigor and quiet luxury restraint.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
            <Link
              href="#work"
              className="bg-[#4A5D4E] hover:bg-[#37463A] text-white px-6 py-3 rounded-full tracking-wider transition-all shadow-[0_4px_16px_rgba(74,93,78,0.25)] inline-flex items-center gap-2"
            >
              <span>Explore Work</span>
              <span>↓</span>
            </Link>

            <Link
              href="#inquiry"
              className="border border-[#D6CFC3] hover:border-[#1C1917] text-[#1C1917] px-6 py-3 rounded-full tracking-wider transition-all bg-white/40 hover:bg-white inline-flex items-center gap-2"
            >
              <span>Initiate Inquiry</span>
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Framed Botanical Artwork Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl bg-white border border-[#E7E2D8] p-8 shadow-[0_20px_50px_-15px_rgba(28,25,23,0.08)] flex flex-col justify-between overflow-hidden group">
            {/* Top Card Kicker */}
            <div className="flex items-center justify-between font-mono text-[10px] text-stone-400 tracking-widest uppercase">
              <span>NATURE // AUTUMN MOTIF</span>
              <span>FIG. 01</span>
            </div>

            {/* Botanical Watercolor Illustration (David Whyte inspired) */}
            <div className="relative flex-1 flex items-center justify-center py-4">
              <svg
                viewBox="0 0 240 240"
                className="w-48 h-48 transition-transform duration-700 ease-out group-hover:scale-105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Soft foliage watercolor gradients */}
                  <radialGradient id="foliage-green" cx="50%" cy="45%" r="50%">
                    <stop offset="0%" stopColor="#7E9675" stopOpacity="0.85" />
                    <stop offset="65%" stopColor="#4A5D4E" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#37463A" stopOpacity="0.5" />
                  </radialGradient>
                  <radialGradient id="foliage-amber" cx="40%" cy="40%" r="50%">
                    <stop offset="0%" stopColor="#E0A96D" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="#C88A42" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#8A5A2B" stopOpacity="0.4" />
                  </radialGradient>
                  <radialGradient id="soft-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#F4EFEA" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ambient backdrop glow circle */}
                <circle cx="120" cy="120" r="95" fill="url(#soft-glow)" />

                {/* Tree Trunk & Organic Branches */}
                <path
                  d="M120 200 L120 135 M120 155 Q105 140 95 125 M120 145 Q135 130 145 118 M120 135 Q115 110 110 95 M120 135 Q125 112 132 96"
                  stroke="#5C4D3C"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Organic Watercolor Foliage Clusters */}
                <ellipse cx="120" cy="90" rx="42" ry="38" fill="url(#foliage-green)" />
                <ellipse cx="95" cy="110" rx="34" ry="30" fill="url(#foliage-amber)" />
                <ellipse cx="145" cy="110" rx="34" ry="30" fill="url(#foliage-green)" />
                <ellipse cx="120" cy="120" rx="48" ry="32" fill="url(#foliage-amber)" opacity="0.75" />
                <circle cx="85" cy="100" r="22" fill="url(#foliage-green)" opacity="0.65" />
                <circle cx="155" cy="100" r="22" fill="url(#foliage-amber)" opacity="0.65" />
                <circle cx="120" cy="70" r="26" fill="url(#foliage-green)" opacity="0.7" />

                {/* Small drifting leaf accents */}
                <circle cx="75" cy="140" r="3" fill="#C88A42" opacity="0.6" />
                <circle cx="165" cy="135" r="3.5" fill="#6E7F66" opacity="0.6" />
                <circle cx="150" cy="165" r="2.5" fill="#C88A42" opacity="0.5" />
              </svg>
            </div>

            {/* Overlaid Live Availability Pill */}
            <div className="pt-2 flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4A5D4E]/10 border border-[#4A5D4E]/20 text-[#37463A] font-mono text-[11px] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E] animate-pulse" />
                <span className="font-medium tracking-wide">Available for Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
