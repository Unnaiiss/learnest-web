import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TrustSection } from "@/components/home/TrustSection";
import { FeaturedPreview } from "@/components/home/FeaturedPreview";
import { FounderTeaser } from "@/components/home/FounderTeaser";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-brand-black min-h-screen">
      {/* Global Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-gold/5 blur-[100px] rounded-full opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-gold/5 blur-[100px] rounded-full opacity-20" />
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
