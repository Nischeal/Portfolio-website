import { TypewriterRole } from "@/components/ui/TypewriterRole";
import { SystemWindow } from "@/components/ui/SystemWindow";

export function HeroSection() {
  return (
    <section id="profile" className="pt-28 pb-16 px-4 sm:px-6 max-w-5xl mx-auto w-full">
      <SystemWindow
        title="HUNTER IDENTITY CARD"
        subtitle="CLASS: FULL-STACK ENGINEER"
        statusBadge="ONLINE"
        glowColor="cyan"
      >
        <div className="space-y-6">
          {/* Main Title & Role */}
          <div>
            <div className="font-mono text-xs text-cyan-400 tracking-wider mb-2">
              S-RANK CAPABILITY // REGISTERED
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
              NISCHAL BASNET
            </h1>

            {/* Dynamic Typewriter headline */}
            <TypewriterRole
              prefix="Specializing in"
              roles={[
                "Full-Stack Web Systems",
                "Scalable Python & FastAPI APIs",
                "Next.js & React Architectures",
                "High-Performance Cloud Databases",
              ]}
            />
          </div>

          {/* Bio text */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            Passionate software engineer focused on building robust, maintainable full-stack systems and high-throughput backends. Balancing aesthetic precision with architectural rigor.
          </p>

          {/* Status HUD Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-2">
            <div className="p-3 border border-white/10 bg-white/[0.02]">
              <span className="text-slate-500 block text-[10px]">LOCATION</span>
              <span className="text-slate-200">Nepal // Remote</span>
            </div>
            <div className="p-3 border border-white/10 bg-white/[0.02]">
              <span className="text-slate-500 block text-[10px]">CURRENT FOCUS</span>
              <span className="text-cyan-300">Modern Web &amp; AI</span>
            </div>
            <div className="p-3 border border-white/10 bg-white/[0.02]">
              <span className="text-slate-500 block text-[10px]">CORE STACK</span>
              <span className="text-slate-200">TS, Next.js, Python</span>
            </div>
            <div className="p-3 border border-white/10 bg-white/[0.02]">
              <span className="text-slate-500 block text-[10px]">AVAILABILITY</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Open for Hire
              </span>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
            <a
              href="#contact"
              className="bg-cyan-500/10 border border-cyan-400 text-cyan-300 px-5 py-2.5 hover:bg-cyan-500/20 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
              [ INITIATE QUEST // CONTACT ]
            </a>
            <a
              href="#projects"
              className="border border-white/20 text-slate-300 px-5 py-2.5 hover:border-white/40 hover:text-white transition-all"
            >
              [ VIEW ARMORY // PROJECTS ]
            </a>
          </div>
        </div>
      </SystemWindow>
    </section>
  );
}
