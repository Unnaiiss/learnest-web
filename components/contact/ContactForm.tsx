"use client";

import { motion } from "framer-motion";

export const ContactForm = () => {
    return (
        <section className="py-24 px-6">
            <div className="container mx-auto max-w-2xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-3xl"
                >
                    <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Send us a Message</h2>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-brand-gray-300 ml-1">Name</label>
                                <input type="text" className="w-full bg-brand-black/50 border border-brand-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all placeholder:text-brand-gray-300/30" placeholder="Your name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-brand-gray-300 ml-1">Email</label>
                                <input type="email" className="w-full bg-brand-black/50 border border-brand-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all placeholder:text-brand-gray-300/30" placeholder="your@email.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-brand-gray-300 ml-1">Message</label>
                            <textarea rows={4} className="w-full bg-brand-black/50 border border-brand-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all placeholder:text-brand-gray-300/30 resize-none" placeholder="Tell us about your project..." />
                        </div>

                        <button type="submit" className="w-full bg-brand-gold text-brand-black font-bold py-4 rounded-xl hover:bg-brand-gold-light transition-colors transform hover:scale-[1.02] active:scale-[0.98]">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
