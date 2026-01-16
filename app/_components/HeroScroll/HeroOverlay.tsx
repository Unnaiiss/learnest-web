"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface HeroOverlayProps {
    scrollYProgress: MotionValue<number>;
}

export const HeroOverlay = ({ scrollYProgress }: HeroOverlayProps) => {

    // Animation Ranges
    // 0-20%: Intro "My Name"
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
    const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 1.1]);

    // 30-50%: "I build..."
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.3, 0.5], [50, -50]); // Parallax slide

    // 60-80%: "Bridging..."
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
    const scale3 = useTransform(scrollYProgress, [0.6, 0.8], [0.9, 1.2]); // Zoom in

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center mix-blend-difference text-white">
            <div className="w-full max-w-6xl px-6 text-center">

                {/* 1. Intro */}
                <motion.div style={{ opacity: opacity1, scale: scale1 }} className="absolute inset-0 flex items-center justify-center">
                    <div>
                        <h1 className="text-5xl md:text-8xl font-heading font-bold tracking-tighter mb-4">
                            LEARNEST<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">.</span>
                        </h1>
                        <p className="text-xl md:text-3xl font-light tracking-[0.2em] text-brand-gray-300 uppercase">
                            AI & Automation
                        </p>
                    </div>
                </motion.div>

                {/* 2. Slide */}
                <motion.div style={{ opacity: opacity2, x: x2 }} className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-4xl md:text-7xl font-heading font-bold leading-tight">
                        Fuel your growth with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">
                            AI-driven transformation.
                        </span>
                    </h2>
                </motion.div>

                {/* 3. Scale */}
                <motion.div style={{ opacity: opacity3, scale: scale3 }} className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-4xl md:text-7xl font-light tracking-wide leading-relaxed max-w-4xl">
                        Automating <span className="font-bold underline decoration-brand-gold underline-offset-8">businesses</span> <br />
                        for the <span className="italic font-serif">future</span>.
                    </h2>
                </motion.div>

            </div>
        </div>
    );
};
