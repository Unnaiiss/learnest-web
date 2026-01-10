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
        <section className="py-24 px-6 relative z-10">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="glass p-8 rounded-2xl border border-brand-white/10 hover:border-brand-gold/30 hover:bg-brand-white/5 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-brand-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
                                <service.icon className="w-7 h-7 text-brand-gold" />
                            </div>
                            <h3 className="text-2xl font-heading font-semibold text-white mb-4 group-hover:text-brand-gold transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-brand-gray-300 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
