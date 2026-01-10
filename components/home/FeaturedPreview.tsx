"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const featured = [
    { title: "Chatbots", status: "Available" },
    { title: "Automation", status: "Coming Soon" },
    { title: "AI Consulting", status: "Available" },
    { title: "Custom AI Tools", status: "Beta" },
];

export const FeaturedPreview = () => {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="container mx-auto max-w-6xl">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                        Future-Ready <span className="text-brand-gold">Services</span>
                    </h2>
                    <button className="hidden md:flex items-center gap-2 text-brand-gold hover:text-brand-gold-light transition-colors">
                        View All <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featured.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 rounded-xl border border-brand-white/5 flex flex-col justify-between h-40 group hover:bg-brand-white/5 transition-all cursor-pointer"
                        >
                            <div className="flex justify-between items-start">
                                <span className={`text-xs px-2 py-1 rounded-full border ${item.status === 'Available' ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-brand-white/5 border-brand-white/10 text-brand-gray-300'}`}>
                                    {item.status}
                                </span>
                                <ArrowUpRight className="w-5 h-5 text-brand-gray-300 group-hover:text-brand-gold transition-colors" />
                            </div>
                            <h3 className="text-xl font-medium text-white group-hover:text-brand-gold transition-colors">{item.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
