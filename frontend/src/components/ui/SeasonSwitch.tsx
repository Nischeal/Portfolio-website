"use client";

import { useSeason, type Season } from "@/context/SeasonContext";

const OPTIONS: { value: Season; label: string }[] = [
  { value: "autumn", label: "🍂 Autumn" },
  { value: "winter", label: "❄️ Winter" },
];

/** Two-button switch for the seasonal canvas (leaves / snow). The pressed one is the current season. */
export function SeasonSwitch() {
  const { season, setSeason } = useSeason();
  return (
    <div role="group" aria-label="Season" className="inline-flex rounded-full border border-page/20 p-1">
      {OPTIONS.map((option) => {
        const active = season === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => setSeason(option.value)}
            className={`inline-flex items-center min-h-11 rounded-full px-4 font-mono text-xs tracking-wider transition-colors cursor-pointer focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-page ${
              active ? "bg-page text-headline" : "text-page/65 hover:text-page"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
