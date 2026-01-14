"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, CheckCircle, Code, Cpu, Globe, Rocket, ShieldCheck, Zap } from "lucide-react";

const FloatingCard = ({ children, className, delay = 0, style }: { children: React.ReactNode, className?: string, delay?: number, style?: any }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
        style={style}
        className={`absolute flex items-center gap-3 p-4 rounded-2xl glass-card backdrop-blur-xl border border-white/10 shadow-2xl 
        opacity-60 blur-[1px] scale-75 z-0 
        md:opacity-100 md:blur-0 md:scale-100 md:z-10 
        ${className}`}
    >
        {children}
    </motion.div>
);

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black px-6 pt-20">

            {/* Background Effects - REMOVED */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Clean Black Background */}
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto h-[600px] flex items-center justify-center">

                {/* --- Left Floating Cards --- */}
                {/* Top Left: Tech Stack */}
                <FloatingCard style={{ y: y1 }} delay={0.5} className="top-[5%] -left-8 md:top-[15%] md:left-[5%] bg-brand-black/40 -rotate-6 md:rotate-0">
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                        <Code className="w-6 h-6" />
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-xs text-brand-gray-300">Technology</p>
                        <p className="text-sm font-bold text-white">Advanced AI</p>
                    </div>
                </FloatingCard>

                {/* Middle Left: Trust Badge */}
                <FloatingCard style={{ y: y2 }} delay={0.7} className="top-[35%] -left-12 md:top-[45%] md:left-[-2%] bg-brand-black/40 rotate-[5deg] md:rotate-0">
                    <div className="p-2 rounded-full bg-green-500/20 text-green-400">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-bold text-white">Enterprise Ready</p>
                        <p className="text-xs text-brand-gray-300">Secure & Scalable</p>
                    </div>
                </FloatingCard>

                {/* Bottom Left: Speed */}
                <FloatingCard style={{ y: y3 }} delay={0.9} className="bottom-[15%] -left-4 md:bottom-[20%] md:left-[8%] bg-brand-black/40 rotate-[10deg] md:rotate-0">
                    <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                        <Zap className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col hidden sm:block">
                        <span className="text-lg font-bold text-white">10x</span>
                        <span className="text-xs text-brand-gray-300">Faster Workflows</span>
                    </div>
                </FloatingCard>


                {/* --- Center Content --- */}
                <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto px-4">


                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-8 mt-12 md:mt-0"
                    >
                        Build the <br className="hidden md:block" />
                        <span className="text-gradient-gold">Extraordinary.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-base sm:text-lg md:text-xl text-brand-gray-300 mb-10 max-w-lg md:max-w-2xl leading-relaxed mx-auto"
                    >
                        Empowering visionaries with next-generation AI solutions.
                        Automate, innovate, and scale with precision.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
                    >
                        <Link
                            href="/services"
                            className="w-full sm:w-auto justify-center px-8 py-3 md:px-10 md:py-4 rounded-full bg-brand-gold text-brand-black font-bold text-base md:text-lg hover:bg-brand-gold-light transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] md:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] hover:scale-105 transform flex items-center gap-2"
                        >
                            Explore Solutions <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto justify-center px-8 py-3 md:px-10 md:py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-base md:text-lg hover:bg-white/10 transition-all hover:scale-105 transform backdrop-blur-sm"
                        >
                            Get Started
                        </Link>
                    </motion.div>
                </div>


                {/* --- Right Floating Cards --- */}

                {/* Top Right: Global Reach */}
                <FloatingCard style={{ y: y2 }} delay={0.6} className="top-[10%] -right-8 md:top-[18%] md:right-[5%] bg-brand-black/40 rotate-[8deg] md:rotate-0">
                    <div className="p-2 rounded-full bg-teal-500/20 text-teal-400">
                        <Globe className="w-6 h-6" />
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-2xl font-bold text-white">Global</p>
                        <p className="text-xs text-brand-gray-300">Client Base</p>
                    </div>
                </FloatingCard>

                {/* Middle Right: Optimization */}
                <FloatingCard style={{ y: y3 }} delay={0.8} className="top-[40%] -right-12 md:top-[50%] md:right-[-1%] bg-brand-black/40 -rotate-[5deg] md:rotate-0">
                    <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                        <Cpu className="w-6 h-6" />
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-bold text-white">AI Optimized</p>
                        <p className="text-xs text-brand-gray-300">Neural Networks</p>
                    </div>
                </FloatingCard>

                {/* Bottom Right: Launch */}
                <FloatingCard style={{ y: y1 }} delay={1.0} className="bottom-[20%] -right-6 md:bottom-[15%] md:right-[8%] bg-brand-black/40 rotate-[12deg] md:rotate-0">
                    <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">
                        <Rocket className="w-6 h-6" />
                    </div>
                    <div className="text-center hidden sm:block">
                        <p className="text-xs text-brand-gray-300 mb-1">Deployment</p>
                        <p className="text-sm font-bold text-white">Instant</p>
                    </div>
                </FloatingCard>

            </div>
        </section>
    );
};
