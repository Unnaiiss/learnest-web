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
        <section className="py-24 px-6 bg-brand-black relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xsl flex flex-col md:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Why Choose <br />
                        <span className="text-gradient-gold">LEARNEST?</span>
                    </h2>
                    <p className="text-lg text-brand-gray-300 mb-8 max-w-xl">
                        We bridge the gap between complex AI technology and practical application.
                        Whether you are a learner or a business leader, we provide the clarity you need.
                    </p>

                    <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0" />
                                <span className="text-lg text-white font-medium">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full"
                >
                    <div className="relative aspect-square md:aspect-video w-full glass-card rounded-2xl overflow-hidden flex items-center justify-center border border-brand-white/10">
                        <div className="text-center p-8">
                            <p className="text-brand-gold font-bold text-6xl mb-2">100+</p>
                            <p className="text-white text-xl">Projects Delivered</p>
                        </div>
                        {/* Abstract geometric overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
