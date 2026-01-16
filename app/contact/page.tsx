import { ModernContactForm } from "@/components/contact/ModernContactForm";

export const metadata = {
    title: "Contact Us | LEARNEST",
    description: "Get in touch with LEARNEST for AI services and collaboration.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-brand-black overflow-hidden relative flex items-center justify-center pt-40 pb-20">
            {/* Global Background Ambient */}
            <div className="fixed inset-0 pointer-events-none">
                {/* Clean background */}
            </div>

            <ModernContactForm />
        </div>
    );
}
