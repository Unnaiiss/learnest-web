"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Bot, Workflow, BrainCircuit, Code, ChevronRight, CheckCircle2, MessageSquare, Database, Zap, Globe, Blocks, Laptop, Shield, Search, MousePointer2 } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "chatbots",
        icon: Bot,
        category: "Support & Engagement",
        title: "AI Chatbots & Assistants",
        shortDesc: "Intelligent conversational agents for 24/7 support.",
        fullDesc: "Deploy sophisticated AI agents capable of handling complex queries, booking appointments, and integrating directly with your CRM. Not just a script, but a learning assistant.",
        stats: [
            { label: "Active Conversations", value: "10k+" },
            { label: "Response Time", value: "<1s" }
        ],
        gridIcons: [MessageSquare, Bot, Globe, Zap]
    },
    {
        id: "automation",
        icon: Workflow,
        category: "Efficiency",
        title: "Process Automation",
        shortDesc: "Streamline workflows and reduce manual effort.",
        fullDesc: "Identify bottlenecks and implement AI-driven automation workflows. From document processing to data entry, let algorithms handle the repetitive tasks.",
        stats: [
            { label: "Hours Saved", value: "500+" },
            { label: "Error Reduction", value: "99%" }
        ],
        gridIcons: [Workflow, Database, CheckCircle2, Shield]
    },
    {
        id: "consulting",
        icon: BrainCircuit,
        category: "Strategy",
        title: "Strategic AI Consulting",
        shortDesc: "Expert guidance on AI adoption and strategy.",
        fullDesc: "Navigating the AI landscape can be overwhelming. We provide roadmap planning, feasibility studies, and ethical implementation strategies tailored to your industry.",
        stats: [
            { label: "Strategies Built", value: "50+" },
            { label: "ROI Increase", value: "3x" }
        ],
        gridIcons: [BrainCircuit, Search, Blocks, Laptop]
    },
    {
        id: "custom",
        icon: Code,
        category: "Development",
        title: "Custom AI Development",
        shortDesc: "Bespoke AI solutions for unique challenges.",
        fullDesc: "When off-the-shelf tools aren't enough, we build custom models and applications. Computer vision, predictive analytics, or proprietary LLMs—built for you.",
        stats: [
            { label: "Models Deployed", value: "100+" },
            { label: "Custom App", value: "15+" }
        ],
        gridIcons: [Code, Laptop, Database, Globe]
    }
];

const Card = ({ service, i, progress, range, targetScale }: { service: typeof services[0], i: number, progress: MotionValue<number>, range: number[], targetScale: number }) => {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`
                }}
                className="relative w-full max-w-6xl h-[70vh] md:h-[80vh] origin-top"
            >
                {/* Visual Card Container */}
                <div className="relative w-full h-full bg-[#050505] border border-white/10 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 shadow-2xl overflow-hidden">

                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

                    {/* Left Column: Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-white" />
                            <span className="text-white text-sm font-medium tracking-wide">{service.category}</span>
                        </div>

                        <h3 className="text-4xl md:text-6xl font-heading font-medium text-white mb-6 leading-[1.1] tracking-tight">
                            {service.title}
                        </h3>
                        <p className="text-brand-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                            {service.fullDesc}
                        </p>

                        <Link
                            href={`/services/${service.id === "custom" ? "custom-development" : service.id === "aimodels" ? "chatbots" : service.id}`}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:scale-105 transition-all w-fit mb-auto"
                        >
                            Explore Solution
                        </Link>

                        {/* Bottom Stats */}
                        <div className="mt-12 flex items-center gap-12 border-t border-white/10 pt-8">
                            {service.stats.map((stat, idx) => (
                                <div key={idx}>
                                    <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                                    <p className="text-brand-gray-500 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Icon Grid */}
                    <div className="hidden lg:flex flex-1 items-center justify-center relative">
                        {/* Grid Container */}
                        <div className="w-full aspect-square relative grid grid-cols-4 gap-4 p-8 bg-[#0A0A0A] rounded-[2.5rem] border border-white/5 shadow-inner shadow-black/50">
                            {/* Generate 16 grid slots */}
                            {Array.from({ length: 16 }).map((_, idx) => {
                                // Place icons in specific slots for visual appeal
                                const iconIndex = [5, 6, 9, 10].indexOf(idx);
                                const Icon = iconIndex !== -1 && service.gridIcons ? service.gridIcons[iconIndex] : null;

                                return (
                                    <div
                                        key={idx}
                                        className={`relative rounded-3xl border transition-all duration-500 group
                                            ${Icon
                                                ? "bg-white/5 border-white/10 shadow-lg shadow-black/20"
                                                : "bg-transparent border-transparent"
                                            }
                                        `}
                                    >
                                        {/* Faint placeholder slots */}
                                        {!Icon && (
                                            <div className="w-full h-full rounded-3xl bg-white/[0.02] border border-white/[0.02]" />
                                        )}

                                        {Icon && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 text-brand-gold shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                            </div>
                                        )}

                                        {/* Glow effect */}
                                        {Icon && (
                                            <div className="absolute inset-0 bg-brand-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        )}
                                    </div>
                                );
                            })}

                            {/* Floating Cursor (Animation) */}
                            <motion.div
                                animate={{
                                    x: [0, 80, 80, 0, 0],
                                    y: [0, 0, 80, 80, 0]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[35%] left-[35%] z-20 pointer-events-none"
                            >
                                <MousePointer2 className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] fill-black" />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
}

export const ServicesList = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={container} className="relative bg-brand-black">
            <div className="max-w-7xl mx-auto px-6 pb-[20vh]">
                {services.map((service, i) => {
                    const targetScale = 1 - ((services.length - i) * 0.05);
                    return (
                        <Card
                            key={i}
                            i={i}
                            service={service}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
};
