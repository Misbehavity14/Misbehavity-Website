import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { LogoIntroSection } from "@/components/LogoIntroSection";
import { MisbehaveSection } from "@/components/MisbehaveSection";
import { ParticleBackground } from "@/components/ParticleBackground";
import { PastSection } from "@/components/PastSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <ParticleBackground />
      <div className="relative z-10">
        <HeroSection />
        <LogoIntroSection />
        <MisbehaveSection />
        <PastSection />
        <CaseStudyGrid />
        <ContactSection />
      </div>
    </main>
  );
}
