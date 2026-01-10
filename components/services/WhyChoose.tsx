"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, Globe } from "lucide-react";

const features = [
    { icon: ShieldCheck, title: "Enterprise Grade Security", desc: "Your data is protected by industry-leading encryption and privacy protocols." },
    { icon: Zap, title: "High-Performance AI", desc: "Optimized models that deliver results in milliseconds, not seconds." },
    { icon: Users, title: "Human-Centric Design", desc: "We build tools that empower your team, not replace them." },
    { icon: Globe, title: "Scalable Infrastructure", desc: "Solutions designed to grow effortlessly with your business global reach." },
];

export const WhyChoose = () => {
    return (
        <section className="py-24 px-6 relative bg-brand-black-secondary border-y border-brand-white/5">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Why Choose LEARNEST?</h2>
                    <p className="text-brand-gray-300 max-w-2xl mx-auto">
                        We don't just write code; we engineer future-proof solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-black border border-brand-white/10 flex items-center justify-center mb-6 shadow-lg shadow-brand-gold/5">
                                <feature.icon className="w-8 h-8 text-brand-gold" />
                            </div>
                            <h3 className="text-white font-bold mb-3">{feature.title}</h3>
                            <p className="text-sm text-brand-gray-300 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
