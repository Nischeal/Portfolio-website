import React from "react";

interface SystemWindowProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  statusBadge?: string;
  className?: string;
  glowColor?: "cyan" | "purple";
}

export function SystemWindow({
  children,
  title,
  subtitle,
  statusBadge = "ONLINE",
  className = "",
  glowColor = "cyan",
}: SystemWindowProps) {
  const cornerBorderColor =
    glowColor === "purple" ? "border-purple-400" : "border-cyan-400";

  return (
    <div
      className={`relative w-full border border-white/10 bg-[var(--bg-panel)] backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 hover:border-white/20 ${className}`}
    >
      {/* Precision corner brackets */}
      <div
        className={`absolute -top-[1px] -left-[1px] w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 ${cornerBorderColor}`}
      />
      <div
        className={`absolute -top-[1px] -right-[1px] w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 ${cornerBorderColor}`}
      />
      <div
        className={`absolute -bottom-[1px] -left-[1px] w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 ${cornerBorderColor}`}
      />
      <div
        className={`absolute -bottom-[1px] -right-[1px] w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 ${cornerBorderColor}`}
      />

      {/* Optional window top-bar */}
      {(title || statusBadge) && (
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400 tracking-wider">
              {statusBadge}
            </span>
            {title && (
              <span className="font-mono text-xs text-slate-300 ml-2 font-medium">
                // {title}
              </span>
            )}
          </div>
          {subtitle && (
            <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">
              {subtitle}
            </span>
          )}
        </div>
      )}

      {children}
    </div>
  );
}
