"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

interface TypewriterRoleProps {
  roles: string[];
  prefix?: string;
  className?: string;
}

export function TypewriterRole({
  roles,
  prefix = "Building",
  className = "",
}: TypewriterRoleProps) {
  const currentText = useTypewriter({ words: roles });

  return (
    <div
      className={`font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] italic font-normal tracking-tight flex items-center gap-x-2.5 sm:gap-x-3 text-muted leading-tight whitespace-nowrap overflow-hidden select-none min-h-[1.3em] ${className}`}
    >
      <span className="text-muted font-light shrink-0">{prefix}</span>
      <span className="text-olive font-medium inline-flex items-center">
        <span>{currentText || "\u00A0"}</span>
        <span className="inline-block w-[2px] h-[0.8em] bg-olive ml-1.5 animate-pulse shrink-0" />
      </span>
    </div>
  );
}
