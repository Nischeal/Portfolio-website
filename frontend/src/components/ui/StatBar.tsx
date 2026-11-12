interface StatBarProps {
  label: string;
  value: number; // 0 to 100
  color?: "cyan" | "green" | "amber" | "purple";
  className?: string;
}

export function StatBar({
  label,
  value,
  color = "cyan",
  className = "",
}: StatBarProps) {
  const colorMap = {
    cyan: "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]",
    green: "bg-emerald-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]",
    amber: "bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)]",
    purple: "bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]",
  };

  return (
    <div className={`space-y-1.5 ${className}`}>
      <div className="flex justify-between items-center font-mono text-xs">
        <span className="text-slate-300">{label}</span>
        <span className="text-slate-400">{value}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[1px]">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${colorMap[color]}`}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}
