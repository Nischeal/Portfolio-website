import { TypewriterRole } from "@/components/ui/TypewriterRole";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />
      
      {/* Centered System Frame Card */}
      <div className="relative z-10 max-w-2xl w-full border border-white/10 bg-[var(--bg-panel)] backdrop-blur-md p-8 md:p-12 shadow-2xl">
        {/* Subtle corner accents */}
        <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

        {/* Top Status Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400 tracking-wider">SYSTEM ACTIVE</span>
          </div>
          <span className="font-mono text-xs text-slate-400">STATUS // INITIALIZED</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-wide text-white mb-3">
          NISCHAL BASNET
        </h1>

        {/* Dynamic Typewriter Role Rotator */}
        <div className="mb-6">
          <TypewriterRole
            prefix="I build"
            roles={[
              "Full-Stack Systems",
              "AI & Scalable Backends",
              "Interactive Web Applications",
              "High-Performance APIs",
            ]}
          />
        </div>

        {/* Subtitle / Focus */}
        <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed">
          Full-Stack &amp; Systems Engineer crafting robust web architectures, scalable services, and interactive user experiences.
        </p>

        {/* Interests & Capabilities Preview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs mb-8">
          <div className="p-3 border border-white/5 bg-white/[0.02]">
            <span className="text-slate-500 block text-[10px]">FOCUS</span>
            <span className="text-cyan-300">Web Systems</span>
          </div>
          <div className="p-3 border border-white/5 bg-white/[0.02]">
            <span className="text-slate-500 block text-[10px]">STACK</span>
            <span className="text-slate-200">Next.js &amp; Python</span>
          </div>
          <div className="p-3 border border-white/5 bg-white/[0.02]">
            <span className="text-slate-500 block text-[10px]">INTEREST</span>
            <span className="text-amber-400">AI &amp; Interactive UI</span>
          </div>
        </div>

        {/* Terminal Hint */}
        <div className="border border-white/5 bg-black/40 p-3 rounded font-mono text-xs text-slate-400 flex items-center justify-between">
          <span>Phase 0 Foundation Complete</span>
          <span className="text-cyan-400/80">Press Ctrl+K (Soon)</span>
        </div>
      </div>
    </main>
  );
}
