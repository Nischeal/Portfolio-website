"use client";

import React, { createContext, useContext, useState, useSyncExternalStore } from "react";

export type Season = "autumn" | "winter";

interface SeasonContextType {
  season: Season;
  setSeason: (season: Season) => void;
  toggleSeason: () => void;
}

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

// Dec (11), Jan (0), Feb (1) -> winter; every other month -> autumn.
function getSeasonFromDate(): Season {
  const month = new Date().getMonth();
  return month === 11 || month === 0 || month === 1 ? "winter" : "autumn";
}

// The date never "changes" while the page is open, so there is nothing to subscribe to.
const subscribe = () => () => {};

export function SeasonProvider({ children }: { children: React.ReactNode }) {
  // The static build is pre-rendered as "autumn"; the browser then reads the real
  // month during hydration without a mismatch or an extra setState-in-effect render.
  const detectedSeason = useSyncExternalStore(subscribe, getSeasonFromDate, () => "autumn" as Season);
  const [manualSeason, setSeason] = useState<Season | null>(null);
  const season = manualSeason ?? detectedSeason;

  const toggleSeason = () => {
    setSeason(season === "autumn" ? "winter" : "autumn");
  };

  return (
    <SeasonContext.Provider value={{ season, setSeason, toggleSeason }}>
      {children}
    </SeasonContext.Provider>
  );
}

export function useSeason() {
  const context = useContext(SeasonContext);
  if (!context) {
    throw new Error("useSeason must be used within a SeasonProvider");
  }
  return context;
}
