"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    variant?: "default" | "hero" | "footer";
}

export const Logo = ({ className, variant = "default" }: LogoProps) => {
    const isHero = variant === "hero";
    const sizeClass = isHero ? "w-[500px] h-auto" : "w-72 h-auto";

    return (
        <Link href="/" className={cn("inline-block relative z-10", className)}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }
                }}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                className="relative"
            >
                <Image
                    src="/logo.png"
                    alt="LEARNEST"
                    width={500}
                    height={150}
                    className={cn("object-contain transition-all duration-500", sizeClass)}
                    priority
                />
                {/* Subtle glow behind logo */}
                <div className="absolute inset-0 bg-brand-gold/10 blur-xl rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
        </Link>
    );
};
