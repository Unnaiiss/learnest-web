"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, ArrowRight } from "lucide-react";

export const FounderTeaser = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Founder Icon - Minimal approach */}
                    <div className="inline-block relative mb-12">
                        <div className="w-20 h-20 rounded-full bg-brand-white/5 border border-brand-gold/20 flex items-center justify-center p-1 relative z-10">
                            <div className="w-full h-full rounded-full bg-brand-gray flex items-center justify-center overflow-hidden">
                                <User className="w-8 h-8 text-brand-gray-300" />
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-brand-gold/20 blur-2xl rounded-full scale-150 opacity-30" />
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Visionary Leadership</h2>
                        <blockquote className="text-3xl md:text-4xl font-heading font-medium text-white mb-12 leading-snug">
                            "At LEARNEST, we believe that understanding AI is no longer a luxury—it's a necessity. We empower everyone to build the future."
                        </blockquote>

                        <div className="flex flex-col items-center gap-1">
                            <span className="text-white font-bold text-xl tracking-tight">FOUNDER NAME</span>
                            <span className="text-xs text-brand-gray-400 uppercase tracking-widest font-medium">Founder & CEO</span>

                            <Link
                                href="/about"
                                className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-gold transition-colors px-8 py-3 rounded-full border border-white/10 hover:border-brand-gold/30 bg-white/5"
                            >
                                Read our full story
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
