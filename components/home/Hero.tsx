"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
            {/* Background Ambience */}
            {/* Background Ambience */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-gold/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-4xl w-full"
            >
                <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center border border-brand-white/10 relative overflow-hidden">
                    {/* Subtle Glow inside card */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-gold/20 blur-[60px] opacity-50" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-brand-gold/20"
                    >
                        <Sparkles className="w-4 h-4 text-brand-gold" />
                        <span className="text-sm font-medium text-brand-gold tracking-wide uppercase">
                            The Future is Here
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6">
                        LEARNEST<span className="text-brand-gold">.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-brand-gray-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                        Your gateway to <span className="text-white font-medium">AI & Technology</span>.
                        We help you build the future with curated knowledge and premium services.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/explore"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-gold text-brand-black font-semibold text-lg hover:bg-brand-gold-light transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2"
                        >
                            Explore AI
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/services"
                            className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-medium text-lg hover:border-brand-gold/50 transition-all transform hover:scale-105 flex items-center justify-center"
                        >
                            Get Services
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
