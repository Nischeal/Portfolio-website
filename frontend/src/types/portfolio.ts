export interface Project {
  id: string;
  title: string;
  classification: string;
  category: string;
  description: string;
  architectureHighlights: string[];
  techStack: string[];
  status: "Completed" | "Locked" | "In Development";
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  name: string;
  rank: "S" | "A" | "B" | "C" | "D" | "E";
  proficiency: number; // 0 to 100
  skills: string[];
}
