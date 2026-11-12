import { Project } from "@/types/portfolio";
import { SystemWindow } from "@/components/ui/SystemWindow";

const FEATURED_PROJECTS: Project[] = [
  {
    id: "clip-cuisine",
    title: "Clip Cuisine (Ingredient Finder)",
    classification: "COMPUTER VISION // AI RECIPE ENGINE",
    category: "AI & Computer Vision",
    description:
      "Computer vision recipe and ingredient discovery system using YOLO models for real-time ingredient detection from images and clips, backed by PostgreSQL for structured recipe matching.",
    architectureHighlights: [
      "YOLO object detection model for multi-ingredient identification",
      "PostgreSQL relational schema for ingredient-to-recipe mapping",
      "Python pipeline for image pre-processing & inference parsing",
    ],
    techStack: ["Python", "YOLO", "PostgreSQL", "Computer Vision"],
    status: "Completed",
    githubUrl: "https://github.com/Nischeal/Ingredient_finder",
  },
  {
    id: "gym-management",
    title: "Gym Management System",
    classification: "ENTERPRISE CRUD // OPERATIONS ENGINE",
    category: "Full-Stack Web Application",
    description:
      "Complete fitness operations management platform handling member onboarding, membership subscription billing cycles, attendance check-in tracking, and administrative dashboard metrics.",
    architectureHighlights: [
      "Relational schema for members, subscriptions, and logs",
      "Automated subscription status & payment lifecycle tracking",
      "Administrative command center for attendance metrics",
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    status: "Completed",
    githubUrl: "https://github.com/Nischeal/Gym-Management-System",
  },
  {
    id: "autonomous-orchestrator",
    title: "Autonomous Agent & Workflow Orchestrator",
    classification: "CLASS-EX // LOCKED QUEST",
    category: "Autonomous Systems & Generative AI",
    description:
      "Distributed task execution pipeline featuring multi-agent problem decomposition, automated code synthesis, and verification loops.",
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
            statusBadge={project.status === "Locked" ? "LOCKED" : "COMPLETED"}
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
                      className="text-slate-300 hover:text-cyan-400 transition-colors border border-white/10 px-3 py-1 bg-white/[0.02]"
                    >
                      SOURCE CODE ↗
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
