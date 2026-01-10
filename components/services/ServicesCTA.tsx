"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ServicesCTA = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 md:p-16 rounded-[2.5rem] relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-brand-gold/5 group-hover:bg-brand-gold/10 transition-colors duration-500" />

                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 relative z-10">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-brand-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                        Let's discuss how customized AI solutions can drive growth and efficiency for your organization.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full bg-brand-gold text-brand-black font-bold text-lg hover:bg-brand-gold-light transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transform flex items-center gap-2"
                        >
                            Book a Consultation <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/about"
                            className="px-8 py-4 rounded-full bg-transparent border border-brand-white/10 text-white font-bold text-lg hover:bg-brand-white/5 transition-all hover:scale-105 transform"
                        >
                            Explore Our Vision
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
