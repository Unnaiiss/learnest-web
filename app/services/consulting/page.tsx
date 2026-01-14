"use client";

import { ServiceHero } from "@/components/services/ServiceHero";
import { CheckCircle2, ArrowRight, Calendar, Mail, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeformEmbed } from "@/components/ui/TypeformEmbed";

export default function ConsultingPage() {
    const processSteps = [
        {
            number: "01",
            title: "Discovery",
            description: "We analyze your current infrastructure, identify bottlenecks, and understand your business goals."
        },
        {
            number: "02",
            title: "Strategy",
            description: "We develop a comprehensive AI roadmap, selecting the right tools and models for your specific needs."
        },
        {
            number: "03",
            title: "Implementation",
            description: "Our team integrates the solutions, ensuring minimal disruption and maximum efficiency."
        },
        {
            number: "04",
            title: "Support",
            description: "Ongoing monitoring, optimization, and training to ensure your team extracts full value."
        }
    ];

    return (
        <div className="min-h-screen bg-brand-black pb-20">
            <ServiceHero
                title="Strategic AI Consulting"
                subtitle="Navigating the complex landscape of Artificial Intelligence with clarity and purpose."
                tagline="Expert guidance on AI adoption and strategy"
            />

            {/* Service Description */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-6">
                                Unlocking Business Potential with AI
                            </h2>
                            <p className="text-brand-gray-300 leading-relaxed mb-6">
                                Adopting AI isn't just about using new tools; it's about fundamentally rethinking how your business operates.
                                We help you identify high-impact opportunities, plan your AI roadmap, and execute with precision.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "AI Opportunity Identification",
                                    "Strategic Roadmap Planning",
                                    "Integration Strategy",
                                    "Cost Optimization & ROI Analysis",
                                    "Scalability Assessment"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-brand-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden glass border border-white/10 hidden md:block">
                            {/* Abstract Visualization Placeholders */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-brand-gold/10 blur-[80px] rounded-full" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-black/50">
                                        <span className="text-brand-gold font-bold text-2xl">AI</span>
                                    </div>
                                    <p className="text-sm text-brand-gray-300 uppercase tracking-widest">Strategic Vision</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Process */}
            <section className="py-20 px-6 bg-brand-white/5">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Our Consulting Process</h2>
                        <p className="text-brand-gray-300">A structured approach to digital transformation.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative p-6 rounded-2xl glass border border-white/10 hover:border-brand-gold/30 transition-colors"
                            >
                                <div className="text-5xl font-bold text-brand-white/5 absolute top-4 right-4">{step.number}</div>
                                <h3 className="text-xl font-bold text-white mb-3 mt-4 relative z-10">{step.title}</h3>
                                <p className="text-sm text-brand-gray-300 relative z-10 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA & Booking */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-brand-gray-300 mb-12 max-w-2xl mx-auto">
                        Book a free consultation to discuss your specific needs and how AI can provide a competitive edge.
                    </p>

                    <div className="glass p-8 rounded-2xl border border-white/10 mb-16">
                        <TypeformEmbed />
                    </div>

                    {/* Contact Channels */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="glass p-6 rounded-xl border border-white/10 flex flex-col items-center gap-3">
                            <Mail className="w-6 h-6 text-brand-gold" />
                            <span className="text-brand-gray-300 text-sm">Email Us</span>
                            <span className="text-white font-medium">learnest.online@gmail.com</span>
                        </div>
                        <div className="glass p-6 rounded-xl border border-white/10 flex flex-col items-center gap-3">
                            <MessageSquare className="w-6 h-6 text-brand-gold" />
                            <span className="text-brand-gray-300 text-sm">WhatsApp</span>
                            <span className="text-white font-medium">+91 907432914</span>
                        </div>
                        <div className="glass p-6 rounded-xl border border-white/10 flex flex-col items-center gap-3">
                            <Phone className="w-6 h-6 text-brand-gold" />
                            <span className="text-brand-gray-300 text-sm">Call Us</span>
                            <span className="text-white font-medium">+91 907432914</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
