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
    "Full-Stack Developer and Backend Engineer specializing in Laravel, Livewire, and Python (FastAPI). Focused on clean system design, robust database architectures, and scalable web platforms. Rooted in Kathmandu, Nepal.",
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
      <body className="bg-[var(--bg-page)] text-[var(--text-body)] min-h-screen selection:bg-[#4A5D4E]/20 selection:text-[#37463A] relative overflow-x-hidden">
        <SeasonProvider>
          {/* Ambient Seasonal Background Canvas */}
          <SeasonalCanvas />

          {/* Sticky Editorial Navbar */}
          <Navbar />

          {/* Page Content Layer */}
          <div className="relative z-10">{children}</div>
        </SeasonProvider>
      </body>
    </html>
  );
}
