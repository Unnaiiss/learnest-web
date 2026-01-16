"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const WhyChoose = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-brand-black border-y border-brand-white/5">
            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="text-[20vw] font-bold text-white/[0.04] leading-none tracking-tighter whitespace-nowrap">
                    LEARNEST
                </span>
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                        <span className="text-sm font-medium text-brand-gray-300">The Learnest Difference</span>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-8">
                        <p className="text-3xl md:text-5xl md:leading-tight font-heading font-medium text-white tracking-tight">
                            The best software isn’t hidden behind layers of marketing speak or buried in endless feature lists that nobody actually reads.
                            <span className="text-brand-gray-500"> We stripped away all the unnecessary noise and clutter so you can see what truly matters, understand it quickly, and move on with your day without wasting time deciphering buzzwords or corporate jargon.</span>
                        </p>

                        <div className="pt-8">
                            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-brand-gold transition-colors duration-300 group">
                                <span>Work With Us</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
