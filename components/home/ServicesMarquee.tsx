"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, BrainCircuit, Code, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const serviceItems = [
    {
        id: "chatbots",
        title: "AI Chatbots",
        icon: Bot,
        desc: "24/7 Intelligent Support",
        link: "/services/chatbots",
        color: "text-blue-400",
        borderColor: "border-blue-500/20",
        bgHover: "hover:bg-blue-500/10"
    },
    {
        id: "automation",
        title: "Process Automation",
        icon: Workflow,
        desc: "Streamline Operations",
        link: "/services/automation",
        color: "text-purple-400",
        borderColor: "border-purple-500/20",
        bgHover: "hover:bg-purple-500/10"
    },
    {
        id: "consulting",
        title: "AI Consulting",
        icon: BrainCircuit,
        desc: "Strategic Implementation",
        link: "/services/consulting",
        color: "text-green-400",
        borderColor: "border-green-500/20",
        bgHover: "hover:bg-green-500/10"
    },
    {
        id: "custom",
        title: "Custom Development",
        icon: Code,
        desc: "Tailored AI Solutions",
        link: "/services/custom-development",
        color: "text-orange-400",
        borderColor: "border-orange-500/20",
        bgHover: "hover:bg-orange-500/10"
    }
];

// Duplicate for infinite scroll - repeat 4 times to ensure smooth loop
const marqueeItems = [...serviceItems, ...serviceItems, ...serviceItems, ...serviceItems];

const ServiceCard = ({ item }: { item: typeof serviceItems[0] }) => (
    <Link
        href={item.link}
        className={`block min-w-[240px] p-5 rounded-2xl bg-brand-white/5 border border-white/5 ${item.bgHover} transition-all group relative flex flex-col justify-between hover:border-brand-gold/30 hover:scale-[1.02] duration-300`}
    >
        <div className="flex justify-between items-start mb-3">
            <div className={`p-2.5 rounded-xl bg-white/5 ${item.color}`}>
                <item.icon className="w-5 h-5" />
            </div>
            <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-brand-gold group-hover:text-black transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
        </div>

        <div>
            <h3 className="text-lg font-heading font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">
                {item.title}
            </h3>
            <p className="text-xs text-brand-gray-400">{item.desc}</p>
        </div>
    </Link>
);

export const ServicesMarquee = () => {
    return (
        <section className="py-24 px-0 relative overflow-hidden bg-brand-black border-none">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Header Content */}
            <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
                <div className="text-left">
                    <span className="text-brand-gold font-medium tracking-widest uppercase mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">
                        Solutions that <span className="text-gradient-gold">Scale</span>
                    </h2>
                </div>

                <Link href="/services" className="inline-flex items-center gap-2 text-white bg-white/5 px-6 py-3 rounded-full hover:bg-brand-gold hover:text-black transition-all font-medium border border-white/10">
                    View All Services <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Marquee Rows */}
            <div className="flex flex-col gap-6">

                {/* Row 1: Moves Right (As requested: "one line goes to right") */}
                <div className="flex overflow-hidden relative mask-gradient-x">
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-6 pl-6"
                        initial={{ x: "-50%" }}
                        animate={{ x: "0%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 60,
                            ease: "linear"
                        }}
                    >
                        {marqueeItems.map((item, idx) => (
                            <ServiceCard key={`r1-${idx}`} item={item} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Moves Left (As requested: "second line goes to left") */}
                <div className="flex overflow-hidden relative mask-gradient-x">
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-6 pl-6"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 70, // Slightly different speed for organic feel
                            ease: "linear"
                        }}
                    >
                        {marqueeItems.map((item, idx) => (
                            <ServiceCard key={`r2-${idx}`} item={item} />
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
