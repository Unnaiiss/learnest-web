"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number; // Kept for compatibility, though scroll drives the timing now
    threshold?: number;
}

export const ScrollReveal = ({
    children,
    className
}: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // 0 = Top of element enters bottom of viewport
    // 1 = Bottom of element leaves top of viewport

    // Opacity: Fade in (0-0.2), Stay visible (0.2-0.8), Fade out (0.8-1)
    const opacity = useTransform(scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0]
    );

    // Blur: Blur in -> Clear -> Blur out
    const filter = useTransform(scrollYProgress,
        [0, 0.2, 0.8, 1],
        ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
    );

    // Scale: Slight zoom in -> Normal -> Slight zoom out
    const scale = useTransform(scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0.9, 1, 1, 0.9]
    );

    return (
        <motion.div
            ref={ref}
            style={{ opacity, filter, scale }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};
