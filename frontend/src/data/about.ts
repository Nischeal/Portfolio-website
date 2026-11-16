// Approved copy (docs/portfolio-v1/plan.md, Phase 1 M0). Change only with the user's approval.

import type { AboutBlock } from "@/types/portfolio";

export const ABOUT_HEADING = "About me";

export const ABOUT_BLOCKS: AboutBlock[] = [
  {
    label: "Background",
    text: "I'm a full-stack developer based in Kathmandu, Nepal, in my final year of a BCA at Pascal National College. I work across the whole stack, from the database schema to the screen a person actually touches.",
  },
  {
    label: "What I build",
    text: "Most of what I build is backend: platforms in Laravel and FastAPI, with data modelled in PostgreSQL and MySQL. Alongside that I explore computer vision, building with YOLO models in Python, like the ingredient detection behind Clip Cuisine, and I use Next.js with TypeScript when a project needs a modern web interface.",
  },
  {
    label: "How I work",
    text: "I care about the parts nobody sees: clean, readable code and database schemas that still make sense a year later. I try to build software the way a good tailor makes a suit: measured carefully, fitted properly, made to last.",
  },
];
