import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono, Alex_Brush } from "next/font/google";
import { SeasonProvider } from "@/context/SeasonContext";
import { SeasonalCanvas } from "@/components/canvas/SeasonalCanvas";
import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MonarchMode } from "@/components/ui/MonarchMode";
import { MonarchAura } from "@/components/ui/MonarchAura";
import { MonarchGlitch } from "@/components/ui/MonarchGlitch";
import { GITHUB_URL, SITE_URL } from "@/data/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const TITLE = "Nischal Basnet | Full-Stack & Backend Engineer";
const SHARE_DESCRIPTION = "Full-Stack & Backend Engineer based in Kathmandu, Nepal.";

// Share card rendered at build by app/og.png/route.tsx.
const SHARE_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Nischal Basnet, Full-Stack & Backend Engineer in Kathmandu, Nepal",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description:
    "Full-stack and backend engineer in Kathmandu, Nepal, building Laravel, Livewire and FastAPI systems with clean, well-modelled databases.",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: TITLE,
    description: SHARE_DESCRIPTION,
    url: "/",
    siteName: "Nischal Basnet",
    locale: "en_US",
    type: "website",
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SHARE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

// Browser chrome colour on phones: the linen page ground (--bg-page).
export const viewport: Viewport = { themeColor: "#F9F6F0" };

// Structured data for search engines: only facts already published on the site (ADR 002/008).
const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nischal Basnet",
  url: SITE_URL,
  jobTitle: "Full-Stack & Backend Engineer",
  address: { "@type": "PostalAddress", addressLocality: "Kathmandu", addressCountry: "NP" },
  sameAs: [GITHUB_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Monarch mode sets data-theme on <html> after hydration
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable} ${alexBrush.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="bg-page text-body min-h-screen selection:bg-olive/20 selection:text-olive-dark relative overflow-x-hidden">
        <SeasonProvider>
          {/* Monarch only: the breathing shadow vignette (under the canvas, so the motes rise over it) */}
          <MonarchAura />

          {/* Ambient Seasonal Background Canvas: leaves / snow, or rising motes in Monarch */}
          <SeasonalCanvas />

          {/* Keyboard skip link: first Tab stop, visible only on focus */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-olive focus:px-5 focus:py-3 focus:font-mono focus:text-xs focus:tracking-wider focus:text-white focus:outline-2 focus:outline-offset-2 focus:outline-olive-dark"
          >
            Skip to content
          </a>

          {/* Sticky Editorial Navbar */}
          <Navbar />

          {/* Page Content Layer */}
          <div className="relative z-10">{children}</div>

          {/* Footer: espresso band (footer-dark recipe, ADR 032) */}
          <SiteFooter />

          {/* Hidden dark mode: M key / footer signature, plus its status pill */}
          <MonarchMode />

          {/* Monarch switch: the ring on the ripple's edge and a short colour glitch */}
          <MonarchGlitch />
        </SeasonProvider>
      </body>
    </html>
  );
}
