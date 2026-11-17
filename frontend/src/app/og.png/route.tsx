import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { GITHUB_URL } from "@/data/site";

// Share card (Phase 7 M1, "Masthead" layout): mirrors the hero in the light theme tokens.
// A static GET route (not the opengraph-image convention, which exports without a file
// extension), so the build writes out/og.png and GitHub Pages serves it as image/png.
// layout.tsx points openGraph/twitter images at it.

export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

// Hex copies of the light tokens in globals.css (Satori can't read CSS variables).
const PAGE = "#F9F6F0";
const HEADLINE = "#1C1917";
const BODY = "#44403C";
const MUTED = "#736C67";
const OLIVE = "#4A5D4E";
const HAIRLINE = "#E7E2D8";

const font = (file: string) => readFile(join(process.cwd(), "assets/og", file));

export async function GET() {
  const [cormorant, inter, interMedium, mono] = await Promise.all([
    font("cormorant-garamond-latin-600-normal.woff"),
    font("inter-latin-400-normal.woff"),
    font("inter-latin-500-normal.woff"),
    font("jetbrains-mono-latin-500-normal.woff"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAGE,
          padding: "72px 84px 60px",
          fontFamily: "Inter",
        }}
      >
        {/* Kicker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily: "JetBrains Mono",
            fontSize: 26,
            letterSpacing: "0.14em",
            color: MUTED,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: 999, background: OLIVE }} />
          <span>KATHMANDU, NEPAL</span>
        </div>

        {/* Name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: 148,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: HEADLINE,
            }}
          >
            Nischal Basnet
          </div>
          <div style={{ marginTop: 28, fontSize: 38, fontWeight: 500, color: BODY }}>
            Full-Stack &amp; Backend Engineer
          </div>
          <div style={{ marginTop: 12, fontSize: 28, color: OLIVE }}>
            Laravel · Livewire · Python (FastAPI)
          </div>
        </div>

        {/* Hairline + footer line */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: 2, background: HAIRLINE, marginBottom: 26 }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "JetBrains Mono",
              fontSize: 26,
              letterSpacing: "0.08em",
              color: MUTED,
            }}
          >
            <span>nischalbasnet10.com.np</span>
            <span>{GITHUB_URL.replace("https://", "")}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant Garamond", data: cormorant, weight: 600, style: "normal" },
        { name: "Inter", data: inter, weight: 400, style: "normal" },
        { name: "Inter", data: interMedium, weight: 500, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
