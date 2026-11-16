// Shared content types for the portfolio sections. Data lives in src/data/*.ts.

export interface AboutBlock {
  label: string;
  text: string;
}

/** One row of a project card's fact ledger, e.g. { label: "Model", value: "Pretrained YOLO" }. */
export interface ProjectFact {
  label: string;
  value: string;
}

/** A finished project with a full case study (opens the drawer). */
export interface ShippedProject {
  status: "shipped";
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  problem: string;
  solution: string;
  challenges: string[];
  sourceUrl: string;
  /** Key facts shown on the card's ledger. */
  facts: ProjectFact[];
}

/** A project that isn't public yet: shown as a sealed dossier with no case study. */
export interface InProgressProject {
  status: "in-progress";
  slug: string;
  label: string;
  title: string;
  summary: string;
  facts: ProjectFact[];
}

export type Project = ShippedProject | InProgressProject;

/** One tool in the Capabilities stack marquee (ADR 030). */
export interface StackItem {
  name: string;
  /** Which band it drifts in: 1 = backend + data, 2 = AI + frontend. */
  row: 1 | 2;
  /** Brand colour, shown on hover only. */
  brand: string;
  /** Simple Icons path data, 24×24 viewBox. */
  path: string;
}
