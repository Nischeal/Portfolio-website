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
