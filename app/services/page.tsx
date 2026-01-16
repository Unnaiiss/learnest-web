import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesList } from "@/components/services/ServicesList";
import { WhyChoose } from "@/components/services/WhyChoose";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "AI Services | LEARNEST",
    description: "Explore our premium AI services: Chatbots, Automation, Consulting, and Custom Development.",
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-brand-black relative">
            {/* Global Background Ambient */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-full h-[50vh] bg-gradient-to-r from-brand-gold/5 via-transparent to-brand-gold/5 opacity-20" />
            </div>

            <ServicesHero />

            <ScrollReveal delay={0.1}>
                <ServicesList />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
                <WhyChoose />
            </ScrollReveal>


        </div>
    );
}
