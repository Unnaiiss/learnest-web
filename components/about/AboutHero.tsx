"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutHero = () => {
    return (
        <section className="relative min-h-[850px] flex items-center overflow-hidden bg-brand-black pt-20">

            {/* Background Pattern - Dots */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

                    {/* --- Left Column: Content --- */}
                    <div className="flex flex-col items-start text-left max-w-2xl">

                        {/* Label */}
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-sm font-medium tracking-widest text-violet-500 uppercase mb-6"
                        >
                            Our Story
                        </motion.span>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-heading font-medium text-white leading-[1.1] mb-8"
                        >
                            Building the Future <br />
                            <span className="text-gray-400">with AI</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-brand-gray-300 mb-10 max-w-lg leading-relaxed"
                        >
                            We are on a mission to demystify artificial intelligence and empower individual and businesses to thrive in the new era of technology.
                        </motion.p>
                    </div>


                    {/* --- Right Column: Robot Image --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-full flex items-center justify-center lg:justify-end"
                    >
                        {/* Image Container */}
                        <div className="relative w-full max-w-[600px] aspect-square">
                            <Image
                                src="/hero-robot.png"
                                alt="AI Robot Head"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
