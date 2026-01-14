"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

export const MissionVision = () => {
    return (
        <section className="py-32 px-6 relative z-10">
            <div className="container mx-auto max-w-6xl relative">
                {/* Subtle Divider Line (Desktop only) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent -translate-x-1/2" />

                <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-start">
                    {/* Mission Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="mb-8 inline-flex items-center gap-3 text-brand-gold">
                            <Target className="w-5 h-5" />
                            <span className="text-xs uppercase tracking-[0.2em] font-medium">Mission</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
                            To bridge the gap between <span className="text-brand-gold">AI innovation</span> and reality.
                        </h2>
                        <p className="text-brand-gray-300 leading-relaxed text-lg max-w-lg">
                            We provide accessible, high-quality AI education and cutting-edge solutions
                            that ensure no one is left behind in the AI revolution. Our mission is to democratize
                            access to the tools of the future.
                        </p>
                    </motion.div>

                    {/* Vision Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="mb-8 inline-flex items-center gap-3 text-white/50">
                            <Lightbulb className="w-5 h-5" />
                            <span className="text-xs uppercase tracking-[0.2em] font-medium">Vision</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
                            Amplifying <span className="opacity-50">human potential</span> through intelligence.
                        </h2>
                        <p className="text-brand-gray-300 leading-relaxed text-lg max-w-lg">
                            A world where technology amplifies human potential. We envision LEARNEST as the
                            global standard for AI literacy and a trusted partner for businesses navigating
                            digital transformation.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
