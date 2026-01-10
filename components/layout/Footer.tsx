import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export const Footer = () => {
    return (
        <footer className="w-full py-12 border-t border-brand-white/5 bg-brand-black relative overflow-hidden">
            {/* Gradient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-brand-gold/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <Logo variant="footer" className="mb-4" />
                        <p className="text-brand-gray-300 text-sm">Building the future with AI.</p>
                    </div>

                    <div className="flex gap-8">
                        {["About", "Contact", "Services"].map((item) => (
                            <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm text-brand-gray-300 hover:text-brand-gold transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        {["Twitter", "LinkedIn", "Instagram"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="text-sm font-medium text-brand-gray-300 hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-brand-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-gray-300/50">
                    <p>© {new Date().getFullYear()} LEARNEST. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-brand-gray-300 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-brand-gray-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
