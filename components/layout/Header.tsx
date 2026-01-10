import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b-transparent">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-heading font-bold tracking-wider text-white">
                    LEARNEST
                    <span className="text-brand-gold">.</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    {["Home", "News", "Services", "About"].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="text-sm font-medium text-brand-gray-300 hover:text-brand-gold transition-colors duration-200"
                        >
                            {item}
                        </Link>
                    ))}
                    <button className="px-5 py-2 rounded-full border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10 transition-all font-medium text-sm">
                        Get Started
                    </button>
                </nav>
            </div>
        </header>
    );
};
