"use client";

import { useSyncExternalStore } from "react";

const format = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kathmandu",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const now = () => format.format(new Date());

// Re-render on every minute change (checked every 15s, so it never lags a whole minute).
function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
}

/** Live Kathmandu time. Not a live region: screen readers read it once, not every minute. */
export function KathmanduClock() {
  const time = useSyncExternalStore(subscribe, now, () => "--:--");
  return (
    <span>
      Kathmandu // <time>{time}</time> GMT+5:45
    </span>
  );
}
