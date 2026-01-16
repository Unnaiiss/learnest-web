"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Crown, ArrowRight } from "lucide-react";

const ScrollRevealText = ({ text }: { text: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "start 0.2"]
    });

    const words = text.split(" ");

    return (
        <div ref={containerRef} className="flex flex-wrap justify-start gap-[0.3em] text-3xl md:text-5xl font-heading font-medium leading-snug text-left w-full max-w-none">
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                    <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />
                );
            })}
        </div>
    );
};

const Word = ({ word, progress, range }: { word: string, progress: any, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);

    // Highlight specific keywords in lime green
    const highlightWords = ["AI", "necessity.", "future."];
    const isHighlighted = highlightWords.includes(word);

    const color = useTransform(
        progress,
        range,
        isHighlighted ? ["#52525B", "#9ACD32"] : ["#52525B", "#FFFFFF"]
    ); // Gray to Lime Green for highlighted words, Gray to White for others

    return (
        <motion.span style={{ opacity, color }} className="relative transition-colors duration-200">
            {word}
        </motion.span>
    );
};

export const FounderTeaser = () => {
    return (
        <section className="py-20 px-6 relative overflow-hidden bg-black">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto relative z-10 flex flex-col items-start text-left">

                {/* 2. Header Typography */}
                <div className="text-left mb-16">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-8 leading-tight"
                    >
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="text-white inline-block mr-4"
                        >
                            Learn AI ,
                        </motion.span>
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white inline-block"
                        >
                            Build with Ai
                        </motion.span>
                    </motion.h2>
                </div>

                {/* 3. Scroll Reveal Text */}
                <div className="mb-16">
                    <ScrollRevealText text='"At LEARNEST, we believe that understanding AI is no longer a luxury—it&apos;s a necessity. We empower everyone to build the future."' />
                </div>

                {/* 4. CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href="/about"
                        className="w-16 h-16 rounded-full bg-brand-white/5 border border-brand-white/10 hover:bg-brand-gold hover:border-brand-gold transition-all hover:scale-110 backdrop-blur-sm flex items-center justify-center group"
                    >
                        <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:rotate-[-45deg] transition-all duration-300" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};
