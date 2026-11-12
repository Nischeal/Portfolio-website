"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

interface TypewriterRoleProps {
  roles?: string[];
  prefix?: string;
}

const DEFAULT_ROLES = [
  "Full-Stack Web Systems",
  "AI & Vision Pipelines",
  "Scalable Backend Services",
  "Interactive Web Experiences",
];

export function TypewriterRole({
  roles = DEFAULT_ROLES,
  prefix = "Crafting",
}: TypewriterRoleProps) {
  const currentText = useTypewriter({ words: roles });

  return (
    <div className="font-mono text-sm sm:text-base md:text-lg flex items-center gap-2 text-stone-600">
      <span className="font-normal">{prefix}</span>
      <span className="text-[#4A5D4E] font-medium min-h-[1.5em] inline-flex items-center">
        {currentText || "\u00A0"}
        <span className="inline-block w-[1.5px] h-4 sm:h-5 bg-[#4A5D4E] ml-1 animate-pulse" />
      </span>
    </div>
  );
}
