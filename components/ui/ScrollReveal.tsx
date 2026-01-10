"use client";

import { motion } from "framer-motion";
import { scrollReveal } from "@/lib/motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    threshold?: number;
}

export const ScrollReveal = ({
    children,
    className,
    delay = 0,
    threshold = 0.1
}: ScrollRevealProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: threshold }}
            variants={{
                hidden: { opacity: 0, y: 50, filter: "blur(5px)" },
                visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.9, ease: "easeOut", delay }
                }
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};
