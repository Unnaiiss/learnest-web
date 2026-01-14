"use client";

import { motion } from "framer-motion";
import { BookOpen, Rss, Bot } from "lucide-react";

const services = [
    {
        icon: BookOpen,
        title: "AI Education",
        description: "Master the fundamentals of Artificial Intelligence with our curated learning paths and resources.",
    },
    {
        icon: Rss,
        title: "Tech Updates",
        description: "Stay ahead of the curve with daily insights into the latest breakthroughs in AI and technology.",
    },
    {
        icon: Bot,
        title: "AI Services",
        description: "Leverage our expert AI consulting and custom solutions to transform your business operations.",
    },
];

export const ServicesGrid = () => {
    return (
        <section className="py-32 px-6 relative z-10">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-3 gap-16 md:gap-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                            className="relative group h-full flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-brand-white/5 flex items-center justify-center mb-8 group-hover:bg-brand-gold/10 transition-all duration-500 scale-90 group-hover:scale-100">
                                <service.icon className="w-8 h-8 text-brand-gold/80" />
                            </div>
                            <h3 className="text-3xl font-heading font-bold text-white mb-6 tracking-tight leading-tight transition-colors group-hover:text-brand-gold">
                                {service.title}
                            </h3>
                            <p className="text-brand-gray-300 leading-relaxed text-lg max-w-xs">
                                {service.description}
                            </p>

                            {/* Modern subtle glow on hover */}
                            <div className="absolute inset-0 -z-10 bg-brand-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
