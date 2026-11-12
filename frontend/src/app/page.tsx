import { TypewriterRole } from "@/components/ui/TypewriterRole";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 max-w-4xl mx-auto">
      {/* Refined Minimalist Editorial Intro */}
      <div className="w-full space-y-6 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] font-mono text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E] animate-pulse" />
          <span>Available for Engineering &amp; Projects</span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#1C1917] leading-[1.1]">
          Nischal Basnet
        </h1>

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

        <p className="text-stone-600 text-base sm:text-lg max-w-2xl leading-relaxed pt-2">
          Full-Stack &amp; Systems Engineer focused on clean architecture, high-performance backends, and elegant interfaces. Rooted in Kathmandu, Nepal.
        </p>
      </div>
    </main>
  );
}
