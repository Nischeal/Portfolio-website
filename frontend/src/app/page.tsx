import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
