"use client";

import { motion } from "framer-motion";
import { Sparkles, Link as LinkIcon, Image as ImageIcon, Mic, ChevronDown, Wand2 } from "lucide-react";
import React from "react";

export function ChatBotHeader() {
    return (
        <section className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center pt-28 pb-12 md:pt-32 md:pb-20 px-6 bg-[#050505] overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-brand-gold/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

            {/* Dotted Border Container (Visual reference) - Dark Version */}
            <div className="absolute inset-4 md:inset-10 top-24 md:top-28 border-2 border-dashed border-white/5 rounded-[2rem] md:rounded-[3rem] pointer-events-none" />

            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-8 md:gap-12">

                {/* Floating Badge 1: Let's get writing (Visible on Desktop only for cleanliness) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute -top-10 right-0 md:-right-8 lg:-right-24 hidden md:flex items-center gap-2"
                >
                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[12px] border-t-[#8B5CF6] border-r-[8px] border-r-transparent transform rotate-[30deg] translate-y-2 opacity-50" />
                    <div className="bg-[#8B5CF6] text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg shadow-indigo-500/20 whitespace-nowrap">
                        Let's get writing!
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <h1 className="text-3xl md:text-6xl font-bold text-white flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center">
                        <span className="relative inline-flex items-center justify-center">
                            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-[#8B5CF6] fill-[#8B5CF6]/20" />
                            <motion.span
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 4, repeatDelay: 2 }}
                                className="absolute -top-1 -right-1"
                            >
                                <Sparkles className="w-3 h-3 md:w-5 md:h-5 text-indigo-400" />
                            </motion.span>
                        </span>
                        <span>Hey, How can I help you?</span>
                    </h1>
                </motion.div>

                {/* Main Input/Search Box Card - Dark Glass */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-black/50 p-5 md:p-8"
                >
                    <div className="relative">
                        <textarea
                            className="w-full min-h-[80px] md:min-h-[120px] text-base md:text-xl text-slate-200 placeholder:text-slate-500 resize-none border-none focus:ring-0 p-0 bg-transparent font-medium custom-scrollbar"
                            placeholder="Create clusters for blogs we can write on the topic 'SaaS Growth Strategies'..."
                            readOnly
                        />
                        <span className="animate-pulse inline-block w-0.5 h-6 bg-[#8B5CF6] align-middle ml-1" />
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between mt-6 md:mt-8 gap-4 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                            <button className="p-2 md:p-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-[#8B5CF6] transition-colors border border-dashed border-white/10 hover:border-[#8B5CF6]/50 shrink-0">
                                <LinkIcon className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                            <button className="p-2 md:p-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-[#8B5CF6] transition-colors border border-dashed border-white/10 hover:border-[#8B5CF6]/50 shrink-0">
                                <ImageIcon className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                            <button className="p-2 md:p-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-[#8B5CF6] transition-colors border border-dashed border-white/10 hover:border-[#8B5CF6]/50 shrink-0">
                                <Mic className="w-4 h-4 md:w-5 md:h-5" />
                            </button>

                            <div className="w-px h-6 bg-white/10 mx-2 hidden md:block" />

                            <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-xs md:text-sm font-medium transition-colors whitespace-nowrap">
                                Blog Post <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                            </button>
                            <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-xs md:text-sm font-medium transition-colors whitespace-nowrap">
                                Templates <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                            </button>
                        </div>

                        <button className="w-full md:w-auto bg-[#8B5CF6] hover:bg-[#7c4dff] text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 transition-all hover:scale-105">
                            <Wand2 className="w-4 h-4" />
                            Generate
                        </button>
                    </div>
                </motion.div>

                {/* Bottom Floating Tags */}
                <div className="w-full relative min-h-[100px]">
                    {/* Floating Badge 2: Upload & go */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute -top-10 left-0 md:-left-8 lg:-left-24 hidden md:flex flex-col items-center"
                    >
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-b-[10px] border-b-[#82aaff] border-r-[6px] border-r-transparent transform -rotate-[30deg] translate-x-4 opacity-50 mb-1" />
                        <div className="bg-[#82aaff] text-white px-4 py-1.5 rounded-lg text-xs font-bold shadow-lg shadow-blue-500/20 whitespace-nowrap">
                            Upload & go!
                        </div>
                    </motion.div>

                    {/* Suggestions Chips - Dark Mode */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-3xl mx-auto">
                        {[
                            "Generate SEO-optimized blog posts \u2192",
                            "Create SaaS case studies \u2192",
                            "Write landing page copy \u2192",
                            "Write engaging product descriptions \u2192",
                            "Optimize onboarding experiences \u2192"
                        ].map((tag, i) => (
                            <motion.button
                                key={tag}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                className="px-3 md:px-5 py-2 md:py-2.5 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs md:text-sm font-medium hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 hover:text-white hover:scale-105 transition-all shadow-sm"
                            >
                                {tag}
                            </motion.button>
                        ))}
                    </div>

                    {/* Floating Badge 3: Quick Start */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-6 right-0 md:-right-8 lg:-right-24 hidden md:flex flex-col items-end"
                    >
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-b-[10px] border-b-[#e084d6] border-r-[6px] border-r-transparent transform rotate-[45deg] -translate-x-4 opacity-50 mb-1" />
                        <div className="bg-[#e084d6] text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-pink-500/20 whitespace-nowrap">
                            Quick Start Options
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
