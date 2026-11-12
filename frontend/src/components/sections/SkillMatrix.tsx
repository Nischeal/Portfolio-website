import { SkillCategory } from "@/types/portfolio";
import { SystemWindow } from "@/components/ui/SystemWindow";
import { RankBadge } from "@/components/ui/RankBadge";
import { StatBar } from "@/components/ui/StatBar";

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Full-Stack Web Architecture",
    rank: "S",
    proficiency: 95,
    skills: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "RESTful Systems"],
  },
  {
    name: "Backend & Systems Engineering",
    rank: "S",
    proficiency: 92,
    skills: ["Python 3.12+", "FastAPI", "SQLAlchemy", "Async I/O", "Pydantic v2"],
  },
  {
    name: "Database Systems & Caching",
    rank: "A",
    proficiency: 88,
    skills: ["PostgreSQL", "MySQL", "Redis (Rate Limiting & Cache)", "Database Migrations"],
  },
  {
    name: "DevOps, Containerization & Tools",
    rank: "A",
    proficiency: 84,
    skills: ["Docker & Docker Compose", "Git Version Control", "Linux Systems", "Cloudflare Pages"],
  },
];

export function SkillMatrix() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="font-mono text-xs text-cyan-400 tracking-widest mb-1">
            STATUS WINDOW // HUNTER ATTRIBUTES
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-wide">
            SKILL MATRIX
          </h2>
        </div>
        <span className="font-mono text-xs text-slate-400 border border-white/10 px-3 py-1 bg-white/[0.02]">
          TIER: SPECIAL S-RANK
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((cat) => (
          <SystemWindow
            key={cat.name}
            title={cat.name.toUpperCase()}
            statusBadge="ACTIVE"
            glowColor={cat.rank === "S" ? "cyan" : "purple"}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-300 font-semibold">
                  Proficiency Rating
                </span>
                <RankBadge rank={cat.rank} />
              </div>

              <StatBar
                label="Mastery Index"
                value={cat.proficiency}
                color={cat.rank === "S" ? "amber" : "cyan"}
              />

              <div className="border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-2">
                  Key Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs text-slate-300 bg-white/[0.03] border border-white/10 px-2.5 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SystemWindow>
        ))}
      </div>
    </section>
  );
}
