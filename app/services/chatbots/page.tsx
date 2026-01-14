"use client";

import { ServiceHero } from "@/components/services/ServiceHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Bot, MessageSquare, Zap, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";
import { TypeformEmbed } from "@/components/ui/TypeformEmbed";

export default function ChatbotsPage() {
    const projects = [
        {
            title: "Customer Support Agent 2.0",
            description: "A fine-tuned LLM capable of handling 80% of support tickets automatically with human-like empathy.",
            link: "#",
            tags: ["Support", "NLP", "Integration"]
        },
        {
            title: "Real Estate Lead Gen Bot",
            description: "WhatsApp bot that qualifies leads, schedules viewings, and syncs data to CRM instantly.",
            link: "#",
            tags: ["WhatsApp", "Sales", "Automation"]
        },
        {
            title: "E-commerce Shopping Assistant",
            description: "Personalized product recommendations and instant checkout assistance embedded on the website.",
            link: "#",
            tags: ["E-commerce", "Recommendation", "Web"]
        }
    ];

    const features = [
        {
            icon: Zap,
            title: "Instant Response",
            description: "Zero wait times for your customers, 24/7/365."
        },
        {
            icon: Globe,
            title: "Multi-Channel",
            description: "Deploy on Web, WhatsApp, Telegram, and Social Media."
        },
        {
            icon: Bot,
            title: "Custom Personality",
            description: "Trained to speak strictly in your brand's voice and tone."
        }
    ];

    return (
        <div className="min-h-screen bg-brand-black pb-20">
            <ServiceHero
                title="AI Chatbots & Assistants"
                subtitle="Intelligent conversational agents that work while you sleep."
                tagline="24/7 Customer Engagement"
            />

            {/* Service & Features */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-6">
                                More Than Just a Chat Bubble
                            </h2>
                            <p className="text-brand-gray-300 leading-relaxed mb-6">
                                Modern AI chatbots go beyond simple FAQs. We build intelligent agents that understand context,
                                remember past interactions, and can take actions on behalf of users—booking appointments,
                                updating records, or guiding complex purchases.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-brand-gold font-medium hover:text-brand-gold-light transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Get a Custom Chatbot
                            </Link>
                        </div>
                        <div className="grid gap-6">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-4 p-4 rounded-xl glass border border-white/5 hover:border-brand-gold/20 transition-colors">
                                    <div className="w-12 h-12 rounded-lg bg-brand-white/5 flex items-center justify-center shrink-0 text-brand-gold">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                                        <p className="text-sm text-brand-gray-300">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Project Showcase */}
                    <div>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-heading font-bold text-white mb-4">Featured Projects</h2>
                            <p className="text-brand-gray-300">See our intelligent agents in action.</p>
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
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-brand-white/5">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">Ready to Automate Support?</h2>

                    <div className="glass p-8 rounded-2xl border border-white/10">
                        <TypeformEmbed />
                    </div>
                </div>
            </section>
        </div>
    );
}
