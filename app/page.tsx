import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TrustSection } from "@/components/home/TrustSection";
import { FeaturedPreview } from "@/components/home/FeaturedPreview";
import { FounderTeaser } from "@/components/home/FounderTeaser";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-brand-black min-h-screen">
      {/* Global Background Gradient - REMOVED */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Clean background */}
      </div>

      <Hero />

      <ScrollReveal>
        <ServicesGrid />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <TrustSection />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <FeaturedPreview />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <FounderTeaser />
      </ScrollReveal>
    </div>
  );
}
