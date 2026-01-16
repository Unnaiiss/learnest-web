import { HomeHero } from "./_components/HeroScroll";
import { ServicesMarquee } from "@/components/home/ServicesMarquee";
import { TrustSection } from "@/components/home/TrustSection";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { FounderTeaser } from "@/components/home/FounderTeaser";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <div className="relative bg-brand-black min-h-screen">
      {/* Global Background Gradient - REMOVED */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Clean background */}
      </div>

      <HomeHero />

      <ScrollReveal>
        <FounderTeaser />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ServicesMarquee />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ProjectShowcase />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <TrustSection />
      </ScrollReveal>
    </div>
  );
}
