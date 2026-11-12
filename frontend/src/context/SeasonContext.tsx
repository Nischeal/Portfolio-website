"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Season = "autumn" | "winter";

interface SeasonContextType {
  season: Season;
  setSeason: (season: Season) => void;
  toggleSeason: () => void;
}

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

export function SeasonProvider({ children }: { children: React.ReactNode }) {
  const [season, setSeason] = useState<Season>("autumn");

  useEffect(() => {
    // Detect calendar month:
    // Dec (11), Jan (0), Feb (1) -> Winter
    // All other months (e.g. Sept, Oct, Nov) -> Autumn
    const month = new Date().getMonth();
    if (month === 11 || month === 0 || month === 1) {
      setSeason("winter");
    } else {
      setSeason("autumn");
    }
  }, []);

  const toggleSeason = () => {
    setSeason((prev) => (prev === "autumn" ? "winter" : "autumn"));
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
