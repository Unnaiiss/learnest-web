"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Bot, Workflow, BrainCircuit, Code, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "chatbots",
        icon: Bot,
        title: "AI Chatbots & Assistants",
        shortDesc: "Intelligent conversational agents for 24/7 support.",
        color: "text-blue-400",
        bgColor: "bg-blue-500/20"
    },
    {
        id: "automation",
        icon: Workflow,
        title: "Process Automation",
        shortDesc: "Streamline workflows and reduce manual effort.",
        color: "text-purple-400",
        bgColor: "bg-purple-500/20"
    },
    {
        id: "consulting",
        icon: BrainCircuit,
        title: "Strategic AI Consulting",
        shortDesc: "Expert guidance on AI adoption and strategy.",
        color: "text-green-400",
        bgColor: "bg-green-500/20"
    },
    {
        id: "custom",
        icon: Code,
        title: "Custom AI Development",
        shortDesc: "Bespoke AI solutions for unique challenges.",
        color: "text-orange-400",
        bgColor: "bg-orange-500/20"
    }
];

export const ServicesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % services.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    return (
        <section className="py-32 px-6 relative overflow-hidden bg-brand-black">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-brand-gold font-medium tracking-widest uppercase mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        Solutions that <span className="text-gradient-gold">Scale</span>
                    </h2>
                    <p className="text-xl text-brand-gray-300 max-w-2xl mx-auto">
                        Explore our comprehensive suite of AI services designed to transform your business.
                    </p>
                </div>

                {/* 3D Carousel Container */}
                <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1000px]">
                    <AnimatePresence mode="popLayout">
                        {services.map((service, index) => {
                            // Calculate position relative to current index
                            let position = (index - currentIndex + services.length) % services.length;
                            // Adjust for negative wrapping to keep 3 items centered ideally
                            // We want visual order: ... -1 (left), 0 (center), 1 (right) ...

                            // Simplified logic for 4 items: 
                            // 0 -> Center
                            // 1 -> Right
                            // 2 -> Back/Hidden
                            // 3 -> Left (acting as -1)

                            let visualState = 'hidden';
                            let zIndex = 0;

                            if (index === currentIndex) {
                                visualState = 'center';
                                zIndex = 20;
                            } else if (index === (currentIndex + 1) % services.length) {
                                visualState = 'right';
                                zIndex = 10;
                            } else if (index === (currentIndex - 1 + services.length) % services.length) {
                                visualState = 'left';
                                zIndex = 10;
                            } else {
                                visualState = 'back'; // Or hidden
                                zIndex = 0;
                            }

                            return (
                                <motion.div
                                    key={service.id}
                                    layout
                                    variants={{
                                        center: {
                                            x: 0,
                                            scale: 1,
                                            rotateY: 0,
                                            opacity: 1,
                                            zIndex: 20,
                                            filter: "blur(0px)"
                                        },
                                        left: {
                                            x: -400, // Adjust spacing
                                            scale: 0.8,
                                            rotateY: 25,
                                            opacity: 0.6,
                                            zIndex: 10,
                                            filter: "blur(2px)"
                                        },
                                        right: {
                                            x: 400, // Adjust spacing
                                            scale: 0.8,
                                            rotateY: -25,
                                            opacity: 0.6,
                                            zIndex: 10,
                                            filter: "blur(2px)"
                                        },
                                        back: {
                                            x: 0,
                                            scale: 0.6,
                                            rotateY: 0,
                                            opacity: 0,
                                            zIndex: 0,
                                            filter: "blur(10px)"
                                        }
                                    }}
                                    initial="center"
                                    animate={visualState}
                                    transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                                    className="absolute w-[350px] md:w-[450px] aspect-[4/5] bg-brand-black/90 rounded-3xl border border-white/10 p-8 flex flex-col justify-between shadow-2xl backdrop-blur-xl"
                                    onClick={() => setCurrentIndex(index)}
                                    style={{ cursor: visualState === 'center' ? 'default' : 'pointer' }}
                                >
                                    <div>
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.bgColor} ${service.color}`}>
                                            <service.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-3xl font-heading font-bold text-white mb-4">{service.title}</h3>
                                        <p className="text-brand-gray-300 text-lg leading-relaxed">{service.shortDesc}</p>
                                    </div>

                                    <div className="mt-8">
                                        <Link
                                            href={`/services/${service.id === "custom" ? "custom-development" : service.id === "chatbots" ? "chatbots" : service.id}`} // Adjust linking logic if needed
                                            className="group flex items-center gap-2 text-brand-gold font-bold hover:text-white transition-colors"
                                        >
                                            Explore Service <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>

                                    {/* Glass reflection effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="flex gap-3 mt-12">
                    {services.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-brand-gold w-8" : "bg-brand-gray-700 hover:bg-brand-gray-500"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};
