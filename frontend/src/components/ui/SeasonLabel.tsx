"use client";

import { useSeason } from "@/context/SeasonContext";

export function SeasonLabel() {
  const { season } = useSeason();
  return <>{season === "autumn" ? "🍂 Autumn Drift" : "❄️ Winter Frost"}</>;
}
