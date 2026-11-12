import React from "react";

export type RankTier = "S" | "A" | "B" | "C" | "D" | "E";

interface RankBadgeProps {
  rank: RankTier;
  className?: string;
  showLabel?: boolean;
}

const RANK_CONFIG: Record<
  RankTier,
  { label: string; border: string; text: string; bg: string; glow: string }
> = {
  S: {
    label: "S-RANK",
    border: "border-amber-400",
    text: "text-amber-400",
    bg: "bg-amber-400/10",
    glow: "shadow-[0_0_12px_rgba(245,158,11,0.4)]",
  },
  A: {
    label: "A-RANK",
    border: "border-cyan-400",
    text: "text-cyan-400",
    bg: "bg-cyan-400/10",
    glow: "shadow-[0_0_10px_rgba(34,211,238,0.35)]",
  },
  B: {
    label: "B-RANK",
    border: "border-emerald-400",
    text: "text-emerald-400",
    bg: "bg-emerald-400/10",
    glow: "shadow-[0_0_8px_rgba(34,197,94,0.3)]",
  },
  C: {
    label: "C-RANK",
    border: "border-blue-400",
    text: "text-blue-400",
    bg: "bg-blue-400/10",
    glow: "shadow-[0_0_8px_rgba(59,130,246,0.3)]",
  },
  D: {
    label: "D-RANK",
    border: "border-slate-400",
    text: "text-slate-400",
    bg: "bg-slate-400/10",
    glow: "",
  },
  E: {
    label: "E-RANK",
    border: "border-slate-600",
    text: "text-slate-500",
    bg: "bg-slate-600/10",
    glow: "",
  },
};

export function RankBadge({ rank, className = "", showLabel = true }: RankBadgeProps) {
  const config = RANK_CONFIG[rank];

  return (
    <span
      className={`font-mono text-xs font-bold px-2 py-0.5 border ${config.border} ${config.text} ${config.bg} ${config.glow} tracking-wider inline-flex items-center gap-1 ${className}`}
    >
      {showLabel ? config.label : rank}
    </span>
  );
}
