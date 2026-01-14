"use client";

import { motion } from "framer-motion";

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    tagline: string;
}

export const ServiceHero = ({ title, subtitle, tagline }: ServiceHeroProps) => {
    return (
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden px-6 pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center max-w-4xl mx-auto"
            >
                <span className="text-brand-gold font-medium tracking-widest uppercase mb-4 block">
                    {tagline}
                </span>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-brand-gray-300 leading-relaxed max-w-2xl mx-auto">
                    {subtitle}
                </p>
            </motion.div>
        </section>
    );
};
