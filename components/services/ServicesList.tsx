"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Workflow, BrainCircuit, Code, ChevronRight, CheckCircle2 } from "lucide-react";

const services = [
    {
        id: "chatbots",
        icon: Bot,
        title: "AI Chatbots & Assistants",
        shortDesc: "Intelligent conversational agents for 24/7 support.",
        fullDesc: "Deploy sophisticated AI agents capable of handling complex queries, booking appointments, and integrating directly with your CRM. Not just a script, but a learning assistant.",
        benefits: ["24/7 Availability", "Natural Language Understanding", "Seamless CRM Integration", "Multi-platform Deployment"]
    },
    {
        id: "automation",
        icon: Workflow,
        title: "Process Automation",
        shortDesc: "Streamline workflows and reduce manual effort.",
        fullDesc: "Identify bottlenecks and implement AI-driven automation workflows. From document processing to data entry, let algorithms handle the repetitive tasks.",
        benefits: ["Error Reduction", "Instant Scalability", "Cost Efficiency", "Real-time Operations"]
    },
    {
        id: "consulting",
        icon: BrainCircuit,
        title: "Strategic AI Consulting",
        shortDesc: "Expert guidance on AI adoption and strategy.",
        fullDesc: "Navigating the AI landscape can be overwhelming. We provide roadmap planning, feasibility studies, and ethical implementation strategies tailored to your industry.",
        benefits: ["Tailored Roadmaps", "Risk Assessment", "Tech Stack Selection", "Team Training"]
    },
    {
        id: "custom",
        icon: Code,
        title: "Custom AI Development",
        shortDesc: "Bespoke AI solutions for unique challenges.",
        fullDesc: "When off-the-shelf tools aren't enough, we build custom models and applications. Computer vision, predictive analytics, or proprietary LLMs—built for you.",
        benefits: ["Proprietary Technology", "Competitive Advantage", "Full Ownership", "Scalable Architecture"]
    }
];

export const ServicesList = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            layout
                            className={`
                                cursor-pointer group relative overflow-hidden rounded-3xl p-8 border transition-all duration-500
                                glass border-transparent hover:border-brand-white/10 hover:bg-brand-white/5
                            `}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-4 rounded-2xl transition-colors duration-300 bg-brand-white/5 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <div className="p-2 rounded-full border border-brand-white/10 transition-transform duration-300 group-hover:translate-x-1">
                                    <ChevronRight className="w-5 h-5 text-brand-gray-300" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-heading font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-brand-gray-300 mb-6">{service.shortDesc}</p>

                            <ul className="mb-8 space-y-2">
                                {service.benefits.slice(0, 2).map((benefit) => (
                                    <li key={benefit} className="flex items-center gap-2 text-sm text-brand-gray-300">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href={`/services/${service.id === "custom" ? "custom-development" : service.id === "aimodels" ? "chatbots" : service.id}`} className="block w-full text-center py-3 rounded-xl bg-brand-white/5 hover:bg-brand-gold hover:text-brand-black border border-brand-white/10 hover:border-brand-gold transition-all font-medium text-white text-sm">
                                Learn more about {service.title}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
