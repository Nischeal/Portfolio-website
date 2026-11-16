import type { Project } from "@/types/portfolio";

interface DossierCardProps {
  project: Project;
  number: string;
}

/** Archival "project file" card, styled like the hero quote card: white paper, linen tab, hairline ledger. */
export function DossierCard({ project, number }: DossierCardProps) {
  const inProgress = project.status === "in-progress";

  return (
    <div className="relative h-full">
      {/* Linen corner tab with the file number (decorative) */}
      <div
        aria-hidden="true"
        className="absolute -top-3.5 -left-3.5 z-10 h-10 w-12 rounded-[2px] bg-subtle border border-border-muted shadow-[0_4px_12px_rgba(28,25,23,0.1)] -rotate-6 flex items-center justify-center font-mono text-xs text-olive-dark"
      >
        {number}
      </div>

      <div
        className={`h-full flex flex-col rounded-[3px] border bg-card p-6 sm:p-9 shadow-[0_18px_44px_rgba(28,25,23,0.08)] ${
          inProgress ? "border-dashed border-border-muted" : "border-hairline"
        }`}
      >
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
          {inProgress ? project.label : "Project file"}
        </p>
        <h3 className="mt-3 font-serif text-3xl sm:text-[2.6rem] font-semibold tracking-tight text-headline leading-[1.05]">
          {project.title}
        </h3>
        <p className="mt-4 text-body text-lg leading-relaxed">{project.summary}</p>

        <dl className="mt-auto pt-8">
          {project.facts.map((fact) => (
            <div
              key={fact.label}
              className="grid grid-cols-[6.5rem_1fr] sm:grid-cols-[8rem_1fr] gap-x-4 py-2.5 border-t border-hairline last:border-b"
            >
              <dt className="font-mono text-[11px] uppercase tracking-widest text-muted pt-0.5">{fact.label}</dt>
              <dd className="text-headline">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
