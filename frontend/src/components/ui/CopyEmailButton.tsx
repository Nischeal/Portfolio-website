"use client";

import { useEffect, useRef, useState } from "react";

interface CopyEmailButtonProps {
  email: string;
  label: string;
  copiedLabel: string;
  className?: string;
}

/** Copies the address to the clipboard (with a fallback for older browsers) and confirms for 2s. */
export function CopyEmailButton({ email, label, copiedLabel, className = "" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      if (!navigator.clipboard) throw new Error("no clipboard API");
      // Some browsers leave the promise pending while they wait on permission; don't wait forever.
      await Promise.race([
        navigator.clipboard.writeText(email),
        new Promise((_, reject) => window.setTimeout(() => reject(new Error("clipboard timeout")), 1000)),
      ]);
    } catch {
      // Fallback: a temporary, off-screen textarea and the legacy copy command
      const area = document.createElement("textarea");
      area.value = email;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button type="button" onClick={copy} className={className}>
        {copied ? copiedLabel : label}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </>
  );
}
