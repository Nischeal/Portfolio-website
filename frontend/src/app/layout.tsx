import type { Metadata } from "next";
import { Cinzel, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nischal Basnet | Full-Stack & Systems Developer",
  description: "Personal engineering portfolio showcasing projects, technical expertise, and systems design.",
  openGraph: {
    title: "Nischal Basnet | Engineering Portfolio",
    description: "Explore projects, systems architecture, and technical capabilities.",
    url: "https://nischal.info.np",
    siteName: "Nischal Basnet Portfolio",
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
      className={`${cinzel.variable} ${jetbrainsMono.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-[var(--bg-void)] text-[var(--text-primary)] min-h-screen selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
