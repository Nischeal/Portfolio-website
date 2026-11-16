"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

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
  const reducedMotion = usePrefersReducedMotion();
  const currentText = useTypewriter({ words: roles, enabled: !reducedMotion });

  return (
    <>
      {/* Screen readers get every role once instead of a character-by-character stream */}
      <p className="sr-only">
        {prefix} {roles.join(", ")}.
      </p>
      <div
        aria-hidden="true"
        className={`font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] italic font-normal tracking-tight flex items-center gap-x-2.5 sm:gap-x-3 text-muted leading-tight whitespace-nowrap overflow-hidden select-none min-h-[1.3em] ${className}`}
      >
        <span className="text-muted font-light shrink-0">{prefix}</span>
        <span className="text-olive font-medium inline-flex items-center">
          <span>{currentText || " "}</span>
          {!reducedMotion && (
            <span className="inline-block w-[2px] h-[0.8em] bg-olive ml-1.5 animate-pulse shrink-0" />
          )}
        </span>
      </div>
    </>
  );
}
