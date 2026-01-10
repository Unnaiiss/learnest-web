"use client";

import { motion } from "framer-motion";

export const AboutHero = () => {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden px-6 pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center max-w-3xl mx-auto"
            >
                <span className="text-brand-gold font-medium tracking-widest uppercase mb-4 block">Our Story</span>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                    Building the Future <br />
                    <span className="glass px-4 rounded-xl italic font-light text-brand-gold">with AI</span>
                </h1>
                <p className="text-xl text-brand-gray-300 leading-relaxed">
                    We are on a mission to demystify artificial intelligence and empower individual
                    and businesses to thrive in the new era of technology.
                </p>
            </motion.div>
        </section>
    );
};
