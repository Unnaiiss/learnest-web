"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { HeroCanvas } from "./HeroCanvas";
import { HeroOverlay } from "./HeroOverlay";

export const HomeHero = () => {
    // 500vh scroll track
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative h-[500vh] bg-brand-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <HeroCanvas />
                <HeroOverlay scrollYProgress={scrollYProgress} />

                {/* Optional: Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 text-xs tracking-widest uppercase animate-pulse">
                    Scroll to explore
                </div>
            </div>
        </section>
    );
};
