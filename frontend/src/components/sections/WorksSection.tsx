import { ProjectDeck } from "@/components/ui/ProjectDeck";
import { PROJECTS, WORKS_HEADING } from "@/data/projects";

export function WorksSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="px-6 max-w-6xl mx-auto w-full pt-12 sm:pt-16 pb-24 sm:pb-32"
    >
      <ProjectDeck
        projects={PROJECTS}
        heading={
          <div className="space-y-5">
            <p
              aria-hidden="true"
              className="flex items-center gap-2.5 font-mono text-[11px] text-muted tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-olive" />
              <span>03 // Selected Works</span>
            </p>
            <h2
              id="work-heading"
              className="font-serif text-5xl sm:text-6xl font-semibold tracking-tight text-headline leading-[1.02]"
            >
              {WORKS_HEADING}
            </h2>
          </div>
        }
      />
    </section>
  );
}
