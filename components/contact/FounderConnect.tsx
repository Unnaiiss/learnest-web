"use client";

import { motion } from "framer-motion";
import { User, MessageCircle } from "lucide-react";

export const FounderConnect = () => {
    return (
        <section className="pb-24 px-6">
            <div className="container mx-auto max-w-md">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-2xl flex items-center gap-4 border border-brand-gold/10 bg-brand-gold/5"
                >
                    <div className="w-16 h-16 rounded-full bg-brand-black flex items-center justify-center shrink-0 border border-brand-white/10">
                        <User className="w-8 h-8 text-brand-gold" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold">Founder Name</h3>
                        <p className="text-brand-gray-300 text-sm mb-1">Founder & CEO</p>
                        <span className="inline-flex items-center gap-1 text-xs text-brand-gold">
                            <MessageCircle className="w-3 h-3" /> Connect directly
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
