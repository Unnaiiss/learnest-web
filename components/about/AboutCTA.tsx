"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const AboutCTA = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            {/* Ambient Background Glow - REMOVED */}

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tight">
                        Ready to <span className="text-gradient-gold">Shape the Future?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-brand-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Join our community of innovators, learners, and visionaries.
                        Let's build something extraordinary together.
                    </p>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-8 py-3 md:px-10 md:py-4 rounded-full bg-brand-gold text-brand-black font-bold text-base md:text-lg hover:bg-brand-gold-light transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] hover:scale-105 transform"
                    >
                        Join Our Journey <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
