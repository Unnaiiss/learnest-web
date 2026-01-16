"use client";

import { motion } from "framer-motion";
import { Sparkles, PenTool } from "lucide-react";

export const ServicesHero = () => {
    return (
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20">
            {/* Top/Bottom Dashed Borders to match reference */}
            <div className="absolute top-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent dashed-line" />

            {/* Ambient Animated Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full animate-pulse-slow mix-blend-screen" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center relative z-10 max-w-5xl"
            >
                {/* Main Heading Group */}
                <div className="flex flex-col items-center">

                    {/* Line 1: Supercharge */}
                    <h1 className="text-6xl md:text-8xl font-heading font-medium text-white mb-2 md:mb-4 tracking-tight leading-none">
                        Supercharge
                    </h1>

                    {/* Line 2: Highlighted Block + Standard Text */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 relative">
                        {/* Pencil Icon (Decor) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, rotate: -45 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="hidden md:block absolute -left-12 top-2 text-white/50"
                        >
                            <PenTool className="w-8 h-8 -rotate-90" />
                        </motion.div>

                        {/* Highlighted Block */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#8B5CF6]/20 -skew-x-6 rounded-lg md:rounded-xl blur-[1px]" />
                            <div className="relative px-6 py-1 md:py-2">
                                <span className="text-6xl md:text-8xl font-heading font-bold text-[#A78BFA] leading-none tracking-tight">
                                    Your Business
                                </span>
                            </div>
                            {/* Accent Line */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#8B5CF6] rounded-full" />
                        </div>

                        {/* Standard Text "with AI" */}
                        <div className="flex items-center gap-4">
                            <span className="text-6xl md:text-8xl font-heading font-medium text-white leading-none tracking-tight">
                                with AI
                            </span>

                            {/* Sparkles */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                            >
                                <Sparkles className="w-10 h-10 md:w-14 md:h-14 text-[#A78BFA]" fill="currentColor" fillOpacity={0.2} />
                            </motion.div>
                        </div>
                    </div>
                </div>

                <p className="mt-12 text-xl md:text-2xl text-brand-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Generate high-converting results in seconds—ads, emails, blogs, and more. <br className="hidden md:block" />
                    <span className="text-brand-gray-400">AI-powered, lightning-fast, and tailored to your brand voice.</span>
                </p>
            </motion.div>
        </section>
    );
};
