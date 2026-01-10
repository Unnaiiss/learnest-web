"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User } from "lucide-react";

export const FounderTeaser = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-12 rounded-3xl border border-brand-white/10 relative"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-brand-black border-2 border-brand-gold/30 flex items-center justify-center p-1">
                        <div className="w-full h-full rounded-full bg-brand-gray flex items-center justify-center overflow-hidden">
                            <User className="w-10 h-10 text-brand-gray-300" />
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Visionary Leadership</h2>
                        <p className="text-brand-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                            "At LEARNEST, we believe that understanding AI is no longer a luxury—it's a necessity.
                            Our mission is to democratize this knowledge and provide tools that empower everyone to build the future."
                        </p>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-brand-gold font-bold text-lg tracking-wide">FOUNDER NAME</span>
                            <span className="text-sm text-brand-gray-300 uppercase tracking-widest">Founder & CEO</span>
                            <Link href="/about" className="mt-6 text-sm underline text-white hover:text-brand-gold transition-colors">
                                Read full story
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
