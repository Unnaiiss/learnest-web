"use client";

import { ChatBotHeader } from "@/components/services/ChatBotHeader";
import { GeminiChat } from "@/components/services/GeminiChat";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Bot, Zap, Globe, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { TypeformEmbed } from "@/components/ui/TypeformEmbed";
import { motion } from "framer-motion";

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
        <div className="min-h-screen bg-[#050505] pb-20">
            {/* NEW Header Style */}
            <ChatBotHeader />

            {/* Live Demo Section */}
            <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-gold/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Left Column: Chatbot (First on Mobile too) */}
                        <div className="order-1 relative">
                            {/* Decorative backdrop for chat */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/10 to-transparent rounded-[3rem] blur-xl opacity-30" />
                            <GeminiChat />
                        </div>

                        {/* Right Column: Graphic Text */}
                        <div className="order-2 text-left mt-8 lg:mt-0">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-semibold tracking-wide uppercase mb-6 md:mb-8">
                                    <Sparkles className="w-4 h-4" /> Live Demo
                                </span>

                                <h2 className="text-3xl md:text-6xl font-heading font-black text-white leading-tight mb-6 md:mb-8">
                                    Experience <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold animate-gradient-x">
                                        Next-Gen AI
                                    </span>
                                </h2>

                                <p className="text-lg md:text-xl text-brand-gray-300 leading-relaxed max-w-xl mb-8 md:mb-10">
                                    Stop relying on static FAQs. Deploy an intelligent agent that understands <span className="text-white font-semibold">nuance</span>, <span className="text-white font-semibold">context</span>, and <span className="text-white font-semibold">intent</span>.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "Natural Language Processing", desc: "Understands slang, typos, and complex queries." },
                                        { title: "24/7 Availability", desc: "Never misses a lead, even at 3 AM." },
                                        { title: "Instant Integration", desc: "Connects with your existing CRM and database." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-brand-gold">
                                                <Zap className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                                <p className="text-brand-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service & Features */}
            <section className="py-24 px-6 relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                                More Than Just a <span className="text-brand-gold">Chat Bubble</span>
                            </h2>
                            <p className="text-brand-gray-300 leading-relaxed mb-8 text-lg">
                                Modern AI chatbots go beyond simple FAQs. We build intelligent agents that understand context,
                                remember past interactions, and can take actions on behalf of users—booking appointments,
                                updating records, or guiding complex purchases.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-white bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 hover:border-brand-gold/50 transition-all group"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:text-brand-gold transition-colors" />
                                Get a Custom Chatbot
                            </Link>
                        </div>
                        <div className="grid gap-6">
                            {features.map((feature, idx) => (
                                <div key={feature.title} className="flex gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-brand-gold/20 transition-all hover:-translate-y-1">
                                    <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0 text-brand-gold border border-brand-gold/20">
                                        <feature.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-2 text-lg">{feature.title}</h3>
                                        <p className="text-brand-gray-400 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Project Showcase */}
                    <div className="border-t border-white/5 pt-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Featured Projects</h2>
                            <p className="text-brand-gray-400 text-lg">See our intelligent agents in action.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
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
            <section className="py-24 px-6">
                <div className="container mx-auto text-center max-w-4xl">
                    <div className="p-1 rounded-3xl bg-gradient-to-br from-brand-gold/20 to-transparent">
                        <div className="bg-[#0A0A0A] rounded-[22px] p-8 md:p-12 border border-white/5 overflow-hidden relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-gold/5 blur-[80px] pointer-events-none" />

                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 relative z-10">
                                Ready to Automate Your Support?
                            </h2>

                            <div className="relative z-10 bg-white/5 p-2 rounded-2xl border border-white/10">
                                <TypeformEmbed />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
