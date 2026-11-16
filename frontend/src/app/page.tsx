import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";

export default function HomePage() {
  return (
    <main>
      {/* The hero fills the first screen (minus the 80px navbar) and centres itself in it */}
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center">
        <HeroSection />
      </div>
      <AboutSection />
      <WorksSection />
      <CapabilitiesSection />
    </main>
  );
}
