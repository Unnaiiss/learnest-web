"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";

export const Hero = () => {
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

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-7xl font-heading font-medium text-white leading-[1.1] mb-8"
                        >
                            Fuel your growth with <br />
                            <span className="text-gray-400">AI-driven</span> digital <br />
                            transformation
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg text-brand-gray-300 mb-10 max-w-lg leading-relaxed"
                        >
                            Over 15 years of transforming businesses into automated powerhouses through smart AI integration, workflow optimization, and data-driven strategies.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap gap-4 mb-16"
                        >
                            {/* Primary Button (White) */}
                            <Link
                                href="/contact"
                                className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black font-semibold text-base md:text-lg hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
                            >
                                Get free audit
                            </Link>

                            {/* Secondary Button (Transparent/Glass) */}
                            <Link
                                href="/services"
                                className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-base md:text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2"
                            >
                                Explore our services
                            </Link>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex items-center gap-6"
                        >
                            {/* Avatars */}
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-black bg-gray-800 overflow-hidden">
                                        {/* Placeholder Avatar - using colored divs or generic images if available. 
                                            For now, gradient placeholders to ensure no broken images. */}
                                        <div className={`w-full h-full bg-gradient-to-br ${i === 1 ? 'from-purple-500 to-blue-500' : i === 2 ? 'from-blue-500 to-green-500' : 'from-orange-500 to-red-500'}`} />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-2 border-brand-black bg-white flex items-center justify-center text-xs font-bold text-black z-10">
                                    99+
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm">Trusted by over 300 clients.</span>
                                <span className="text-brand-gray-400 text-xs text-left">Your brand's success will be our next case study.</span>
                            </div>
                        </motion.div>

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
