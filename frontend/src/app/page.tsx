import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ArmorySection } from "@/components/sections/ArmorySection";
import { SkillMatrix } from "@/components/sections/SkillMatrix";
import { ContactQuest } from "@/components/sections/ContactQuest";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A14] text-[#E2E8F0] relative overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background ambient light */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/[0.03] blur-[150px] pointer-events-none rounded-full" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[400px] bg-purple-500/[0.03] blur-[140px] pointer-events-none rounded-full" />

      {/* Top Navigation */}
      <Navbar />

      {/* Landing Main Container */}
      <main className="flex-1 flex flex-col items-center">
        <HeroSection />
        <ArmorySection />
        <SkillMatrix />
        <ContactQuest />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
