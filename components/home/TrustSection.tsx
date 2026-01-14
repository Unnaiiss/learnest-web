"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
    "Curated AI Knowledge Base",
    "Real-world Business Solutions",
    "Practical Implementation Guides",
    "Future-Ready Tech Insights",
];

export const TrustSection = () => {
    return (
        <section className="py-32 px-6 bg-brand-black relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16 md:gap-32">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                        Why Choose <br />
                        <span className="text-brand-gold">LEARNEST?</span>
                    </h2>
                    <p className="text-lg text-brand-gray-300 mb-10 max-w-xl leading-relaxed">
                        We bridge the gap between complex AI technology and practical application.
                        Whether you are a learner or a business leader, we provide the clarity you need.
                    </p>

                    <div className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex items-center gap-4 group"
                            >
                                <CheckCircle2 className="w-5 h-5 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                                <span className="text-lg text-white/80 group-hover:text-white transition-colors">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full"
                >
                    <div className="relative flex flex-col items-center md:items-start">
                        <motion.div
                            initial={{ scale: 0.95 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-center md:text-left"
                        >
                            <span className="text-brand-gold font-bold text-8xl md:text-9xl tracking-tighter block mb-4">
                                100+
                            </span>
                            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white/90 tracking-tight">
                                Projects Delivered
                            </h3>
                            <p className="text-brand-gray-400 mt-4 text-lg">
                                Realizing the potential of AI across industries worldwide.
                            </p>
                        </motion.div>

                        {/* Subtle decorative glow */}
                        <div className="absolute -inset-4 bg-brand-gold/5 blur-[100px] -z-10 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
