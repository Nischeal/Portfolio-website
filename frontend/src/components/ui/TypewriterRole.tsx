"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

interface TypewriterRoleProps {
  roles?: string[];
  prefix?: string;
  className?: string;
}

const DEFAULT_ROLES = [
  "Laravel & Livewire Systems",
  "FastAPI & Python Backends",
  "Full-Stack Web Applications",
  "Scalable System Architectures",
];

export function TypewriterRole({
  roles = DEFAULT_ROLES,
  prefix = "Building",
  className = "",
}: TypewriterRoleProps) {
  const currentText = useTypewriter({ words: roles });

  return (
    <div
      className={`font-serif text-3xl sm:text-4xl md:text-5xl italic font-normal tracking-tight flex flex-wrap items-center gap-x-3 text-stone-500 leading-tight ${className}`}
    >
      <span className="text-stone-500 font-light">{prefix}</span>
      <span className="text-[#4A5D4E] font-medium min-h-[1.2em] inline-flex items-center">
        {currentText || "\u00A0"}
        <span className="inline-block w-[2px] h-[0.85em] bg-[#4A5D4E] ml-1.5 animate-pulse" />
      </span>
    </div>
  );
}
