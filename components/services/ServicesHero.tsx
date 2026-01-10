"use client";

import { motion } from "framer-motion";

export const ServicesHero = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-6 pt-24 pb-12">
            {/* Ambient Animated Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full animate-pulse-slow mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-white/5 blur-[100px] rounded-full animate-pulse-slow animation-delay-2000 mix-blend-screen" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center relative z-10 max-w-4xl"
            >
                <div className="inline-block mb-4 px-4 py-1 rounded-full border border-brand-white/10 bg-brand-white/5 backdrop-blur-sm">
                    <span className="text-sm font-medium text-brand-gold tracking-widest uppercase">Premium AI Solutions</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tight leading-tight">
                    AI Solutions, <br />
                    <span className="text-brand-gold">Designed for the Future.</span>
                </h1>

                <p className="text-xl text-brand-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Elevate your business with intelligent, bespoke AI services crafted for efficiency, scalability, and impact.
                </p>
            </motion.div>
        </section>
    );
};
