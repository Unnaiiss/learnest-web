import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { TeamGrid } from "@/components/about/TeamGrid";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata = {
    title: "About Us | LEARNEST",
    description: "Learn more about our mission to democratize AI education and services.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-brand-black overflow-hidden relative">
            {/* Global Background Ambient */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-brand-gray/10 to-transparent opacity-50" />
            </div>

            <AboutHero />
            <MissionVision />
            <TeamGrid />
            <AboutCTA />
        </div>
    );
}
