import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { MeetTeam } from "@/components/about/MeetTeam";
import { ReviewsSection } from "@/components/about/ReviewsSection";

export const metadata = {
    title: "About Us | LEARNEST",
    description: "Learn more about our mission to democratize AI education and services.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-brand-black relative">
            {/* Global Background Ambient */}
            <div className="fixed inset-0 pointer-events-none">
            </div>

            <AboutHero />
            <MissionVision />
            <MeetTeam />
            <ReviewsSection />
        </div>
    );
}
