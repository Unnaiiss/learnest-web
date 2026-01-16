"use client";

import { motion } from "framer-motion";
import { Zap, GitBranch, Bell, CheckCircle2, Star, Settings } from "lucide-react";
import Link from "next/link";

export const AutomationHero = () => {
    return (
        <section className="min-h-screen bg-brand-black text-white pt-32 pb-20 px-6 relative overflow-hidden flex items-center">
            {/* Background Grid - subtle */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]" style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "24px 24px"
            }}></div>

            <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Column: Text Content */}
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-4">
                        <div className="flex text-green-500">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                        </div>
                        <span className="text-sm font-medium text-gray-300">Trustpilot Excellent 4.9/5</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                        <span className="inline-flex items-center justify-center bg-[#E86C3E] text-white px-6 py-1 rounded-2xl mr-3 mb-2 transform -rotate-1">
                            Automate
                        </span>
                        <span>Your</span>
                        <br />

                        <span>Workflow</span>
                        <span className="inline-flex mx-3 align-middle bg-white/10 border border-white/10 rounded-full px-3 py-1 shadow-sm">
                            <GitBranch className="w-6 h-6 text-green-400 transform rotate-90" />
                        </span>
                        <span>Save</span>
                        <br />

                        <span>Time</span>
                        <span className="inline-flex mx-3 align-middle bg-purple-500/20 border border-purple-500/20 rounded-full px-3 py-1">
                            <Zap className="w-6 h-6 text-purple-400" />
                        </span>
                        <span>Effortlessly</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-lg">
                        No-Code AI-powered automation for businesses of all sizes.
                    </p>

                    <div className="flex items-center gap-6 pt-4">
                        <Link href="/contact" className="group flex items-center gap-2 bg-brand-gold text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-xl">
                            Get Started
                            <Zap className="w-4 h-4 fill-black" />
                        </Link>
                        <button className="text-white font-medium hover:text-brand-gold hover:underline underline-offset-4">
                            See How It Works
                        </button>
                    </div>
                </div>

                {/* Right Column: Workflow Visualization */}
                <div className="relative h-[600px] w-full hidden lg:block">
                    {/* SVG Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
                        {/* Line from Trigger to Condition */}
                        <path d="M 350 120 L 350 200" stroke="white" strokeWidth="2" fill="none" />

                        {/* Line from Condition to Branch Split */}
                        <path d="M 350 320 L 350 360" stroke="white" strokeWidth="2" fill="none" />

                        {/* Branch Split */}
                        <path d="M 350 360 C 350 390, 200 390, 200 420" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M 350 360 C 350 390, 500 390, 500 420" stroke="white" strokeWidth="2" fill="none" />

                        {/* Line to Progress Check */}
                        <path d="M 200 540 C 200 580, 350 580, 400 620" stroke="white" strokeWidth="2" fill="none" />
                    </svg>

                    {/* Node 1: Trigger */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 bg-[#111] rounded-2xl shadow-2xl border border-white/10 p-4 z-10">
                        <div className="flex items-center gap-3 mb-3 border-b border-white/10 pb-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                                <Settings className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-white">Trigger</span>
                            <div className="ml-auto flex gap-1">
                                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                                    <GitBranch className="w-3 h-3 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                New Task Created in ClickUp
                            </div>
                            <div className="flex gap-2 mt-2">
                                <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-xs border border-blue-500/20">ClickUp</span>
                                <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded text-xs border border-red-500/20">Asana</span>
                                <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-xs border border-blue-500/20">Trello</span>
                            </div>
                        </div>
                    </div>

                    {/* Node 2: Condition */}
                    <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-80 bg-[#111] rounded-2xl shadow-2xl border border-white/10 p-4 z-10">
                        <div className="flex items-center gap-3 mb-3 border-b border-white/10 pb-3">
                            <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500">
                                <GitBranch className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-white">Condition</span>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                Task Priority Check
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="text-gray-500 text-xs">If Priority:</span>
                                <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded text-xs font-bold border border-red-500/20">Urgent</span>
                                <span className="bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded text-xs font-bold border border-yellow-500/20">High</span>
                            </div>
                        </div>
                    </div>

                    {/* Node 3: Action 1 (Left) */}
                    <div className="absolute top-[420px] left-[10px] w-72 bg-[#111] rounded-2xl shadow-2xl border border-white/10 p-4 z-10">
                        <div className="flex items-center gap-3 mb-3 border-b border-white/10 pb-3">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                <Zap className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-white">Action 1</span>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                High Priority
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                Assign Task to <span className="bg-purple-500/10 text-purple-400 px-1.5 rounded text-xs font-medium border border-purple-500/20">Senior PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Node 4: Action 2 (Right) */}
                    <div className="absolute top-[420px] right-[10px] w-72 bg-[#111] rounded-2xl shadow-2xl border border-white/10 p-4 z-10">
                        <div className="flex items-center gap-3 mb-3 border-b border-white/10 pb-3">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                <Zap className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-white">Action 2</span>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                Medium Priority
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                Assign Task to <span className="bg-white/10 text-gray-300 px-1.5 rounded text-xs font-medium border border-white/5">Team Member</span>
                            </div>
                        </div>
                    </div>

                    {/* Node 5: Progress Check (Bottom) */}
                    <div className="absolute top-[620px] left-1/2 -translate-x-1/2 w-64 bg-[#111] rounded-2xl shadow-2xl border border-white/10 p-3 z-10 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                            <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-white">Progress Check</span>
                    </div>

                </div>
            </div>
        </section>
    );
};
