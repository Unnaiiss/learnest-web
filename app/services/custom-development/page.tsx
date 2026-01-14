"use client";

import { ServiceHero } from "@/components/services/ServiceHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Code, Layers, Eye, Brain, LineChart, Hammer } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeformEmbed } from "@/components/ui/TypeformEmbed";

export default function CustomDevPage() {
    const projects = [
        {
            title: "Predictive Analytics Dashboard",
            description: "A custom React dashboard visualizing sales forcast models, helping a retail client reduce inventory waste by 15%.",
            link: "#",
            tags: ["React", "Python", "Data Viz"]
        },
        {
            title: "AI-Powered Educational Platform",
            description: "Learning management system with an AI tutor that creates custom quizzes and explains complex topics in real-time.",
            link: "#",
            tags: ["Next.js", "OpenAI", "EdTech"]
        },
        {
            title: "Computer Vision Quality Control",
            description: "Automated visual inspection system for a manufacturing line, detecting defects with 99.5% accuracy.",
            link: "#",
            tags: ["PyTorch", "OpenCV", "IoT"]
        }
    ];

    const services = [
        {
            icon: Layers,
            title: "AI SaaS Tools",
            description: "Scalable, multi-tenant applications built from scratch."
        },
        {
            icon: Globe, // Imported below
            title: "AI-Integrated Websites",
            description: "Websites that see, hear, and speak to your users."
        },
        {
            icon: Brain,
            title: "Custom ML Models",
            description: "Fine-tuned models trained specifically on your data."
        },
        {
            icon: Eye,
            title: "Computer Vision",
            description: "Systems that analyze images and video feeds in real-time."
        },
        {
            icon: MessageSquare, // Imported below
            title: "NLP Systems",
            description: "Sentiment analysis, document processing, and more."
        },
        {
            icon: LineChart,
            title: "Intelligent Dashboards",
            description: "Data visualization powered by predictive algorithms."
        }
    ];

    return (
        <div className="min-h-screen bg-brand-black pb-20">
            <ServiceHero
                title="Custom AI Development"
                subtitle="From idea to intelligent deployment. We build bespoke AI solutions to solve your most unique challenges."
                tagline="Build Your AI Product"
            />

            {/* Service Capabilities */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">What We Build</h2>
                        <p className="text-brand-gray-300">Engineering the future, one line of code at a time.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-20">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl glass border border-white/5 hover:border-brand-gold/30 hover:bg-brand-gold/5 transition-all text-center group"
                            >
                                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-brand-white/5 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-sm text-brand-gray-300">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Project Showcase */}
                    <div>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div>
                                <h2 className="text-3xl font-heading font-bold text-white mb-2">Recent Work</h2>
                                <p className="text-brand-gray-300">A glimpse into our engineering capabilities.</p>
                            </div>
                            <Link href="/contact" className="hidden md:block text-brand-gold hover:text-white transition-colors">
                                Start a Project &rarr;
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {projects.map((project, idx) => (
                                <ProjectCard
                                    key={project.title}
                                    {...project}
                                    delay={idx}
                                />
                            ))}
                        </div>
                        <div className="mt-8 text-center md:hidden">
                            <Link href="/contact" className="text-brand-gold hover:text-white transition-colors">
                                Start a Project &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-brand-white/5">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">Have an Idea? Let's Build It.</h2>

                    <div className="glass p-8 rounded-2xl border border-white/10">
                        <TypeformEmbed />
                    </div>
                </div>
            </section>
        </div>
    );
}

// Helper imports for icons used in the array but not in top import
import { Globe, MessageSquare } from "lucide-react";
