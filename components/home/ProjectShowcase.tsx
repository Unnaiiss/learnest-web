"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Workflow, BrainCircuit, Code, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: "chatbots",
        icon: Bot,
        title: "AI Chatbots & Assistants",
        desc: "Intelligent conversational agents for 24/7 support.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        id: "automation",
        icon: Workflow,
        title: "Process Automation",
        desc: "Streamline workflows and reduce manual effort.",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        id: "consulting",
        icon: BrainCircuit,
        title: "Strategic AI Consulting",
        desc: "Expert guidance on AI adoption and strategy.",
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
    },
    {
        id: "custom-development",
        icon: Code,
        title: "Custom AI Development",
        desc: "Bespoke AI solutions for unique challenges.",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    }
];

const ProjectCard = ({ project, position }: { project: typeof projects[0], position: "left" | "center" | "right" | "hidden" }) => {
    const Icon = project.icon;

    // Responsive variants for mobile and desktop
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const variants = {
        center: {
            x: 0,
            y: 0,
            scale: 1,
            rotateY: 0,
            opacity: 1,
            z: 0,
            zIndex: 30
        },
        left: {
            x: isMobile ? -200 : -320,
            y: 0,
            scale: isMobile ? 0.7 : 0.8,
            rotateY: 25,
            opacity: 0.5,
            z: -200,
            zIndex: 10
        },
        right: {
            x: isMobile ? 200 : 320,
            y: 0,
            scale: isMobile ? 0.7 : 0.8,
            rotateY: -25,
            opacity: 0.5,
            z: -200,
            zIndex: 10
        },
        hidden: {
            x: 0,
            y: 0,
            scale: 0.5,
            opacity: 0,
            z: -500,
            zIndex: 0
        }
    };

    return (
        <motion.div
            variants={variants}
            animate={position}
            transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 20 }}
            className="absolute w-[300px] h-[400px] md:w-[400px] md:h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transformStyle: "preserve-3d" }}
        >
            <Link href={`/services/${project.id}`} className="block w-full h-full group perspective-1000">
                {/* Card Container */}
                <div className={`w-full h-full rounded-[2rem] bg-[#0A0A0A] border ${project.border} relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)]`}>

                    {/* Inner Gradient Spot */}
                    <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${project.bg.replace('bg-', 'from-').replace('/10', '/20')} to-transparent opacity-30 blur-[80px] group-hover:opacity-50 transition-opacity duration-500`} />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col p-8 md:p-10">

                        {/* Icon Box */}
                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${project.bg} border ${project.border} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                            <Icon className={`w-8 h-8 md:w-10 md:h-10 ${project.color}`} />
                        </div>

                        {/* Text */}
                        <h3 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight group-hover:text-brand-gold transition-colors duration-300">
                            {project.title}
                        </h3>

                        <p className="text-brand-gray-400 text-sm md:text-lg leading-relaxed mb-auto">
                            {project.desc}
                        </p>

                        {/* Action Area */}
                        <div className="flex items-center gap-3 mt-8">
                            <span className={`text-sm md:text-base font-bold ${project.color} tracking-wide uppercase`}>
                                Explore Solution
                            </span>
                            <div className={`w-10 h-10 rounded-full border ${project.border} flex items-center justify-center group-hover:bg-white/10 transition-colors`}>
                                <ArrowRight className={`w-5 h-5 ${project.color}`} />
                            </div>
                        </div>

                    </div>

                    {/* Glass Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
            </Link>
        </motion.div>
    );
};

export const ProjectShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 5000); // Slower rotation
        return () => clearInterval(interval);
    }, []);

    const getPosition = (index: number) => {
        const diff = (index - currentIndex + projects.length) % projects.length;

        if (diff === 0) return "center";
        if (diff === 1 || diff === -3) return "right";
        if (diff === 3 || diff === -1) return "left";
        return "hidden";
    };

    return (
        <section id="work" className="py-32 px-6 relative overflow-hidden bg-black">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-7xl">

                {/* Header */}
                <div className="text-center mb-24">
                    <span className="text-brand-gold font-medium tracking-widest uppercase mb-4 block">Our Expertise</span>
                    <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                        Why We <span className="text-brand-gold">Lead</span>
                    </h2>
                </div>

                {/* 3D Carousel Container */}
                <div className="relative w-full h-[450px] md:h-[600px] flex items-center justify-center" style={{ perspective: "1500px" }}>
                    <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                position={getPosition(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-16">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? "bg-brand-gold w-12" : "bg-brand-gray-800 w-4 hover:bg-brand-gray-600"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};
