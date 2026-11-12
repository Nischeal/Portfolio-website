import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Nischal Basnet | Full-Stack & Systems Engineer",
  description: "Personal engineering portfolio showcasing full-stack web architectures, AI vision pipelines, and systems design.",
  openGraph: {
    title: "Nischal Basnet | Engineering Portfolio",
    description: "Full-Stack & Systems Engineer based in Nepal.",
    url: "https://nischal.info.np",
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
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
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
