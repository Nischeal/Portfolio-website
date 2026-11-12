import { HeroSection } from "@/components/sections/HeroSection";

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-80px)] flex flex-col justify-center">
      {/* Split Editorial Hero Section */}
      <HeroSection />
    </main>
  );
}
