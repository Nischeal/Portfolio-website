import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono, Alex_Brush } from "next/font/google";
import { SeasonProvider } from "@/context/SeasonContext";
import { SeasonalCanvas } from "@/components/canvas/SeasonalCanvas";
import { Navbar } from "@/components/layout/Navbar";
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

export const metadata: Metadata = {
  title: "Nischal Basnet | Full-Stack & Backend Engineer",
  description:
    "Full-Stack Developer and Backend Engineer specializing in Laravel, Livewire, and Python (FastAPI). Focused on clean system design, well-modelled relational databases, and scalable web platforms. Rooted in Kathmandu, Nepal.",
  openGraph: {
    title: "Nischal Basnet | Full-Stack & Backend Engineer",
    description: "Full-Stack & Backend Engineer based in Kathmandu, Nepal.",
    url: "https://www.nischalbasnet10.com.np",
    siteName: "Nischal Basnet",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable} ${alexBrush.variable} antialiased`}
    >
      <body className="bg-page text-body min-h-screen selection:bg-olive/20 selection:text-olive-dark relative overflow-x-hidden">
        <SeasonProvider>
          {/* Ambient Seasonal Background Canvas */}
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
        </SeasonProvider>
      </body>
    </html>
  );
}
