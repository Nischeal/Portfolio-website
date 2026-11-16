import Link from "next/link";
import { TypewriterRole } from "@/components/ui/TypewriterRole";
import { HeroQuoteCard } from "@/components/ui/HeroQuoteCard";
import { SeasonLabel } from "@/components/ui/SeasonLabel";
import { INQUIRY_LIVE } from "@/data/site";

export function HeroSection() {
  return (
    <section className="flex flex-col lg:block pt-16 sm:pt-24 pb-16 sm:pb-24 px-6 max-w-6xl mx-auto w-full">
      {/* Asymmetric Two-Column Editorial Desk. Below lg the wrapper dissolves (display: contents) so the
          quote card can follow the meta strip and the first phone screen holds name, bio, button and strip. */}
      <div className="contents lg:grid lg:grid-cols-12 lg:gap-14 lg:items-center">
        {/* Left Column: Typographic Hierarchy & Identity */}
        <div className="order-1 lg:order-none lg:col-span-7 space-y-8 text-left">
          {/* Clean Spaced Kicker */}
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-olive" />
            <span>KATHMANDU, NEPAL — FULL-STACK &amp; BACKEND ENGINEER</span>
          </div>

          {/* Grand Typographic Headline Lockup */}
          <div className="space-y-3">
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-headline leading-[0.98]">
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
          <p className="text-body text-lg sm:text-xl leading-relaxed max-w-xl font-normal pt-1">
            Full-Stack Developer and Backend Engineer specializing in Laravel, Livewire, and Python (FastAPI). Focused on clean system design, robust database architectures, and scalable web platforms. Rooted in Kathmandu, Nepal.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
            <Link
              href="#work"
              className="bg-olive hover:bg-olive-dark text-white px-7 py-3.5 rounded-full tracking-wider transition-all shadow-[0_4px_16px_rgba(74,93,78,0.22)] inline-flex items-center gap-2"
            >
              <span>Explore Selected Work</span>
              <span>↓</span>
            </Link>

            {INQUIRY_LIVE && (
            <Link
              href="#inquiry"
              className="border border-border-muted hover:border-headline text-headline px-7 py-3.5 rounded-full tracking-wider transition-all bg-card/60 hover:bg-card inline-flex items-center gap-2 shadow-sm"
            >
              <span>Initiate Inquiry</span>
              <span>↗</span>
            </Link>
            )}
          </div>
        </div>

        {/* Right Column: Tactile Polaroid Quote Card */}
        <div className="order-3 lg:order-none lg:col-span-5 flex justify-center lg:justify-end mt-14 lg:mt-0">
          <HeroQuoteCard />
        </div>
      </div>

      {/* Generous Spaced Full-Width Metadata Strip */}
      <div className="order-2 lg:order-none mt-14 sm:mt-16 pt-8 border-t border-hairline grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs text-body">
        <div>
          <span className="text-xs text-muted block uppercase tracking-widest mb-1">
            LOCATION
          </span>
          <span className="text-headline">Kathmandu, NP</span>
        </div>

        <div>
          <span className="text-xs text-muted block uppercase tracking-widest mb-1">
            AVAILABILITY
          </span>
          <span className="text-olive-dark font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-olive motion-safe:animate-pulse" />
            Open for Work
          </span>
        </div>

        <div>
          <span className="text-xs text-muted block uppercase tracking-widest mb-1">
            SEASONAL AMBIENCE
          </span>
          <span className="text-headline capitalize">
            <SeasonLabel />
          </span>
        </div>

        <div>
          <span className="text-xs text-muted block uppercase tracking-widest mb-1">
            CODE ARCHIVE
          </span>
          <a
            href="https://github.com/Nischeal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-olive hover:underline"
          >
            github.com/Nischeal ↗
          </a>
        </div>
      </div>
    </section>
  );
}
