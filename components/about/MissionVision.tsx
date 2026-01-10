"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

export const MissionVision = () => {
    return (
        <section className="py-20 px-6 relative z-10">
            <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-10 rounded-3xl"
                >
                    <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center mb-6">
                        <Target className="w-6 h-6 text-brand-gold" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">Our Mission</h2>
                    <p className="text-brand-gray-300 leading-relaxed text-lg">
                        To provide accessible, high-quality AI education and cutting-edge technological solutions
                        that bridge the gap between innovation and practical application. We exist to ensure
                        that no one is left behind in the AI revolution.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass p-10 rounded-3xl border border-brand-white/5 bg-brand-white/5"
                >
                    <div className="w-12 h-12 rounded-full bg-brand-white/10 flex items-center justify-center mb-6">
                        <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">Our Vision</h2>
                    <p className="text-brand-gray-300 leading-relaxed text-lg">
                        A world where technology amplifies human potential. We envision LEARNEST as the
                        global standard for AI literacy and a trusted partner for businesses navigating
                        digital transformation.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
