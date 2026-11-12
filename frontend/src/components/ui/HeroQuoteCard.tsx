"use client";

import React from "react";

export function HeroQuoteCard() {
  return (
    <div className="relative group w-full max-w-[340px] sm:max-w-[370px] mx-auto lg:mx-0">
      {/* Organic Tilted Polaroid Frame */}
      <div className="relative bg-white border border-[#E7E2D8] rounded-[3px] p-5 sm:p-6 pb-10 sm:pb-12 shadow-[0_16px_40px_rgba(28,25,23,0.07)] rotate-1 sm:rotate-2 group-hover:rotate-0 group-hover:shadow-[0_22px_50px_rgba(28,25,23,0.12)] transition-all duration-500 ease-out">
        {/* Corner Tactile Paper Tag with Serif Quotation Mark */}
        <div
          aria-hidden="true"
          className="absolute -top-3.5 -left-3.5 w-9 h-9 rounded-[2px] bg-[#F4EFE6] border border-[#DFD8CA] shadow-[0_4px_12px_rgba(28,25,23,0.12)] -rotate-6 flex items-center justify-center select-none group-hover:scale-105 transition-transform duration-300"
        >
          <span className="font-serif text-[#4A5D4E] text-2xl font-bold leading-none translate-y-0.5">
            &ldquo;
          </span>
        </div>

        {/* Interior Archival Window */}
        <div className="bg-[#FAF8F5] border border-[#EFEAE1] rounded-[2px] p-5 sm:p-6 flex flex-col justify-between min-h-[210px]">
          <p className="font-serif italic text-[#1C1917] text-base sm:text-[17px] leading-relaxed font-normal">
            &ldquo;I believe an engineer should have a life outside the terminal — nature, quiet walks, and seasonal stillness make you a sharper, more thoughtful builder.&rdquo;
          </p>

          <div className="pt-4 mt-2 border-t border-[#EFEAE1]/60 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400">
              WORLDVIEW // CRAFT
            </span>
            <span className="font-serif italic text-xs text-stone-500">
              &mdash; Nischal Basnet
            </span>
          </div>
        </div>

        {/* Clean Polaroid bottom margin — kept completely pure per user directive */}
      </div>
    </div>
  );
}
