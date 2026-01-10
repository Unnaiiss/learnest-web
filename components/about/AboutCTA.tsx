"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const AboutCTA = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 md:p-16 rounded-3xl border border-brand-gold/20 relative"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Ready to Shape the Future?
                    </h2>
                    <p className="text-xl text-brand-gray-300 mb-10 max-w-2xl mx-auto">
                        Join our community of innovators, learners, and visionaries.
                        Let's build something extraordinary together.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold text-brand-black font-bold text-lg hover:bg-brand-gold-light transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:scale-105 transform"
                    >
                        Join Our Journey <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
