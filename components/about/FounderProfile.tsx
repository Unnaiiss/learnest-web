"use client";

import { motion } from "framer-motion";
import { User, Linkedin, Instagram, Quote } from "lucide-react";
import Link from "next/link";

export const FounderProfile = () => {
    return (
        <section id="founder" className="py-24 px-6 relative">
            {/* Background Accent */}
            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row items-center gap-12">

                        {/* Image Placeholder */}
                        <div className="relative group shrink-0">
                            <div className="absolute inset-0 bg-brand-gold blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-brand-gray border-4 border-brand-white/10 overflow-hidden flex items-center justify-center relative z-10 glass">
                                <User className="w-20 h-20 text-brand-gray-300" />
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <div className="flex flex-col gap-1 mb-6">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Founder Name</h2>
                                <p className="text-brand-gold tracking-wide uppercase text-sm font-medium">Founder & CEO</p>
                            </div>

                            <div className="relative">
                                <Quote className="absolute -top-4 -left-6 w-8 h-8 text-brand-gold/20 rotate-180" />
                                <p className="text-brand-gray-300 text-lg leading-relaxed italic mb-8 relative z-10">
                                    "I started LEARNEST with a simple belief: AI shouldn't be a black box.
                                    It should be a tool that everyone can understand and use.
                                    Our goal is to strip away the complexity and show you the endless possibilities."
                                </p>
                            </div>

                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <Link href="https://www.linkedin.com/company/learnestml/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-brand-white/5 hover:bg-brand-gold hover:text-brand-black transition-all text-white">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                                <Link href="https://www.instagram.com/learnest.in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-brand-white/5 hover:bg-brand-gold hover:text-brand-black transition-all text-white">
                                    <Instagram className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};
