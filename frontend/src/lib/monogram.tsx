import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Favicon: the "NB" serif monogram in espresso on linen inside an olive hairline ring
// (ADR 049; hex copies of --bg-page, --text-headline, --accent-olive). Rendered at build.
/** `square`: full linen square (Apple touch icon; iOS fills transparent corners black and rounds them itself). */
export async function monogram(px: number, square = false) {
  const cormorant = await readFile(join(process.cwd(), "assets/og/cormorant-garamond-latin-600-normal.woff"));
  const ring = Math.max(2, Math.round(px * 0.06));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F9F6F0",
          borderRadius: square ? 0 : "50%",
          border: square ? "none" : `${ring}px solid #4A5D4E`,
          fontFamily: "Cormorant Garamond",
          fontSize: px * 0.56,
          letterSpacing: "-0.04em",
          color: "#1C1917",
          paddingBottom: px * 0.04,
        }}
      >
        NB
      </div>
    ),
    {
      width: px,
      height: px,
      fonts: [{ name: "Cormorant Garamond", data: cormorant, weight: 600, style: "normal" }],
    },
  );
}
