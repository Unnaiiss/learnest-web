"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, BarChart2, MousePointer2 } from "lucide-react";

export const TrustSection = () => {
    return (
        <section className="py-32 px-6 bg-brand-black relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="text-[20vw] font-bold text-white/[0.04] leading-none tracking-tighter whitespace-nowrap">
                    LEARNEST
                </span>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header - Left Aligned */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-20 max-w-3xl"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        Why Choose <span className="text-brand-gold">LEARNEST?</span>
                    </h2>
                    <p className="text-lg text-brand-gray-300 leading-relaxed">
                        We bridge the gap between complex AI technology and practical application.
                        Whether you are a learner or a business leader, we provide the clarity you need.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* 1. Curated AI Knowledge Base */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[450px]"
                    >
                        {/* Visual Area */}
                        <div className="flex-1 flex items-center justify-center relative mb-8">
                            {/* Central Circle */}
                            <div className="w-16 h-16 rounded-full bg-[#6366f1] flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                                <span className="text-2xl font-bold text-white">L</span>
                                {/* Orbiting Badges */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-white/10"
                                />
                            </div>

                            {/* Floating Labels */}
                            <div className="absolute inset-0">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                                    <motion.span
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                                        className="absolute top-[20%] left-[20%] text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-brand-gray-300"
                                    >
                                        ✓ Verified
                                    </motion.span>
                                    <motion.span
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                        className="absolute top-[30%] right-[15%] text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-brand-gray-300"
                                    >
                                        ✓ Recent
                                    </motion.span>
                                    <motion.span
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                                        className="absolute bottom-[30%] left-[10%] text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-brand-gray-300"
                                    >
                                        ✓ Practical
                                    </motion.span>
                                    <motion.span
                                        animate={{ y: [0, 8, 0] }}
                                        transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
                                        className="absolute bottom-[25%] right-[20%] text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-brand-gray-300"
                                    >
                                        ✓ In-depth
                                    </motion.span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="text-2xl font-heading font-medium text-white mb-3">Curated AI Knowledge Base</h3>
                            <p className="text-brand-gray-400 text-sm leading-relaxed">
                                Access a wealth of curated resources designed to help you master AI concepts and tools.
                            </p>
                        </div>
                    </motion.div>


                    {/* 2. Real-world Business Solutions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[450px]"
                    >
                        {/* Visual Area */}
                        <div className="flex-1 flex items-center justify-center relative mb-8">
                            {/* Base Card (Document) */}
                            <div className="w-[180px] h-[140px] bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2 relative transform -rotate-6 scale-90 md:scale-100">
                                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center mb-1">
                                    <span className="text-[10px] text-[#8B5CF6]">ROI</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full" />
                                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                                <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                            </div>

                            {/* Floating Stats Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-6 right-6 w-[120px] bg-[#1a1a1a] border border-white/10 rounded-xl p-3 shadow-xl z-10 transform rotate-3"
                            >
                                <span className="text-[10px] text-brand-gray-400 block mb-1">Efficiency</span>
                                <div className="text-2xl font-bold text-white mb-2">+100%</div>
                                {/* Tiny Graph */}
                                <div className="flex items-end gap-1 h-8">
                                    <div className="w-2 bg-[#8B5CF6]/30 h-[40%] rounded-t-sm" />
                                    <div className="w-2 bg-[#8B5CF6]/50 h-[60%] rounded-t-sm" />
                                    <div className="w-2 bg-[#8B5CF6] h-[100%] rounded-t-sm" />
                                    <div className="w-2 bg-[#8B5CF6]/60 h-[80%] rounded-t-sm" />
                                    <div className="w-2 bg-[#8B5CF6]/40 h-[50%] rounded-t-sm" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="text-2xl font-heading font-medium text-white mb-3">Real-world Business Solutions</h3>
                            <p className="text-brand-gray-400 text-sm leading-relaxed">
                                Implement practical strategies and tools that drive real business growth and efficiency.
                            </p>
                        </div>
                    </motion.div>

                    {/* 3. Future-Ready Tech Insights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ y: -5 }}
                        className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[450px]"
                    >
                        {/* Visual Area */}
                        <div className="flex-1 flex items-center justify-center relative mb-8">
                            {/* Menu Container */}
                            <div className="w-[180px] bg-white rounded-2xl p-2 shadow-2xl relative z-10">
                                {/* Menu Items */}
                                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                    <span className="text-xs font-medium text-gray-400">Automation</span>
                                </div>

                                {/* Selected Item */}
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#ede9fe]">
                                    <div className="w-4 h-4 rounded bg-[#8B5CF6]" />
                                    <span className="text-xs font-bold text-[#8B5CF6]">AI Agents</span>
                                    {/* Mouse Cursor */}
                                    <motion.div
                                        className="absolute -right-2 top-10 pointer-events-none"
                                        animate={{ scale: [1, 0.9, 1] }}
                                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                                    >
                                        <MousePointer2 className="w-5 h-5 fill-[#8B5CF6] text-white drop-shadow-md" />
                                    </motion.div>
                                </div>

                                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                    <span className="text-xs font-medium text-gray-400">Consulting</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                    <span className="text-xs font-medium text-gray-400">Training</span>
                                </div>
                            </div>

                            {/* Background Elements */}
                            <div className="absolute inset-0 flex items-center justify-center -z-10">
                                <div className="w-[200px] h-[200px] bg-gradient-to-tr from-[#8B5CF6]/20 to-transparent blur-3xl rounded-full" />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="text-2xl font-heading font-medium text-white mb-3">Future-Ready Tech Insights</h3>
                            <p className="text-brand-gray-400 text-sm leading-relaxed">
                                Stay ahead of the curve with insights into the latest AI trends and future-proof technologies.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
