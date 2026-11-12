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
      className={`font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] italic font-normal tracking-tight flex items-center gap-x-2.5 sm:gap-x-3 text-stone-500 leading-tight whitespace-nowrap overflow-hidden select-none min-h-[1.3em] ${className}`}
    >
      <span className="text-stone-500 font-light shrink-0">{prefix}</span>
      <span className="text-[#4A5D4E] font-medium inline-flex items-center">
        <span>{currentText || "\u00A0"}</span>
        <span className="inline-block w-[2px] h-[0.8em] bg-[#4A5D4E] ml-1.5 animate-pulse shrink-0" />
      </span>
    </div>
  );
}
