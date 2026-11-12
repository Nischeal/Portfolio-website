import { Project } from "@/types/portfolio";
import { SystemWindow } from "@/components/ui/SystemWindow";

const FEATURED_PROJECTS: Project[] = [
  {
    id: "project-01",
    title: "HRM & Enterprise Workforce Engine",
    classification: "CLASS-S // DISTRIBUTED ARCHITECTURE",
    category: "Full-Stack Enterprise System",
    description:
      "Enterprise HR platform featuring tenant isolation, automated payroll calculation, dynamic attendance tracking, and fine-grained role-based permission gates.",
    architectureHighlights: [
      "Multi-tenant database connection resolver",
      "Strict Service-Repository layered backend",
      "High-concurrency time-tracking workflows",
    ],
    techStack: ["Laravel", "Livewire", "Tailwind CSS", "MySQL", "Docker"],
    status: "Completed",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: "project-02",
    title: "The Shadow Academic (Portfolio & Systems Hub)",
    classification: "CLASS-S // PRODUCTION HUB",
    category: "Full-Stack Web & AI Interface",
    description:
      "High-performance engineering portfolio fusing modern App Router capabilities, custom canvas particle systems, interactive terminal emulator, and editorial typography.",
    architectureHighlights: [
      "Next.js 15 App Router & React 19 Client Leaves",
      "Custom zero-dependency typewriter & HUD engine",
      "Tailwind design token mapping with zero CLS",
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "FastAPI (Roadmap)"],
    status: "Completed",
    githubUrl: "https://github.com",
    liveUrl: "https://nischal.info.np",
  },
  {
    id: "project-03",
    title: "Autonomous Agent & Workflow Orchestrator",
    classification: "CLASS-EX // LOCKED QUEST",
    category: "Autonomous Systems & Generative AI",
    description:
      "Distributed task pipeline executing multi-agent problem decomposition, automated code synthesis, and verification loops.",
    architectureHighlights: [
      "Vector memory retrieval & state machines",
      "Streaming tool execution & sandboxed runs",
      "Self-healing error correction loops",
    ],
    techStack: ["Python", "FastAPI", "Redis", "LangGraph", "Docker"],
    status: "Locked",
  },
];

export function ArmorySection() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="font-mono text-xs text-cyan-400 tracking-widest mb-1">
            INVENTORY // COMPLETED CONQUESTS
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-wide">
            THE ARMORY
          </h2>
        </div>
        <span className="font-mono text-xs text-slate-400 border border-white/10 px-3 py-1 bg-white/[0.02]">
          SLOTS: 02 / 03
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_PROJECTS.map((project) => (
          <SystemWindow
            key={project.id}
            title={project.id.toUpperCase()}
            statusBadge={project.status === "Locked" ? "LOCKED" : "DEPLOYED"}
            glowColor={project.status === "Locked" ? "purple" : "cyan"}
            className="flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[10px] text-cyan-300/80 block mb-1">
                {project.classification}
              </span>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="border-t border-white/10 pt-3 mb-4 space-y-1">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">
                  Key Architecture:
                </span>
                {project.architectureHighlights.map((hl, i) => (
                  <div key={i} className="font-mono text-[11px] text-slate-400 flex items-start gap-1.5">
                    <span className="text-cyan-400">▹</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer / Tech Stack */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] bg-white/[0.04] text-slate-300 border border-white/10 px-2 py-0.5 rounded-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.status === "Locked" ? (
                <div className="w-full text-center py-2 border border-purple-500/30 bg-purple-500/10 font-mono text-xs text-purple-300">
                  [ QUEST IN PROGRESS // LOCKED ]
                </div>
              ) : (
                <div className="flex items-center gap-3 font-mono text-xs">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      LIVE DEMO ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      SOURCE ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </SystemWindow>
        ))}
      </div>
    </section>
  );
}
