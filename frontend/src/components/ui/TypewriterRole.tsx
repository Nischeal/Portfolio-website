"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

interface TypewriterRoleProps {
  roles?: string[];
  prefix?: string;
}

const DEFAULT_ROLES = [
  "Full-Stack Systems",
  "AI & Scalable Backends",
  "Interactive Web Applications",
  "High-Performance APIs",
];

export function TypewriterRole({
  roles = DEFAULT_ROLES,
  prefix = "I build",
}: TypewriterRoleProps) {
  const currentText = useTypewriter({ words: roles });

  return (
    <div className="font-mono text-base md:text-xl flex items-center gap-2">
      <span className="text-slate-400">{prefix}</span>
      <span className="text-cyan-400 glow-cyan font-semibold min-h-[1.5em] inline-flex items-center">
        {currentText || "\u00A0"}
        <span className="inline-block w-[2px] h-5 bg-cyan-400 ml-1 animate-pulse" />
      </span>
    </div>
  );
}
