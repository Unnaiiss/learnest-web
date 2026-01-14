import { ContactHero } from "@/components/contact/ContactHero";
import { ContactGrid } from "@/components/contact/ContactGrid";
import { ModernContactForm } from "@/components/contact/ModernContactForm";

export const metadata = {
    title: "Contact Us | LEARNEST",
    description: "Get in touch with LEARNEST for AI services and collaboration.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-brand-black overflow-hidden relative">
            {/* Global Background Ambient */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-[50vh] bg-gradient-to-t from-brand-gold/5 to-transparent opacity-30" />
            </div>

            <ContactHero />
            <ContactGrid />
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl glass p-6 md:p-8 rounded-2xl border border-white/10">
                    <ModernContactForm />
                </div>
            </section>
        </div>
    );
}
