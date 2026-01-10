"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "@/components/ui/Logo";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-0",
                    isScrolled ? "top-4" : "top-6"
                )}
            >
                <div
                    className={cn(
                        "mx-auto max-w-5xl rounded-full border transition-all duration-300 flex items-center justify-between px-6",
                        isScrolled
                            ? "bg-brand-black/70 backdrop-blur-md border-brand-white/10 h-14 shadow-lg"
                            : "bg-transparent border-transparent h-16"
                    )}
                >
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Logo className={isScrolled ? "w-60" : "w-72"} />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 bg-brand-white/5 rounded-full px-2 py-1 border border-brand-white/5">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-5 py-1.5 rounded-full text-sm font-medium text-brand-gray-300 hover:text-white hover:bg-brand-white/5 transition-all"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden md:flex bg-brand-gold text-brand-black px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-gold-light transition-colors"
                        >
                            Get Started
                        </Link>

                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden p-2 text-white hover:text-brand-gold transition-colors"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </motion.header>

            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} items={navItems} />
        </>
    );
};
