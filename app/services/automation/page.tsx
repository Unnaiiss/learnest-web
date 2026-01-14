"use client";

import { ServiceHero } from "@/components/services/ServiceHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Workflow, Zap, Clock, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeformEmbed } from "@/components/ui/TypeformEmbed";

export default function AutomationPage() {
    const automations = [
        {
            title: "Lead Qualification & CRM Sync",
            description: "Automatically qualify leads from Facebook Ads and sync them to HubSpot/Salesforce with instant notification to your sales team.",
            link: "https://n8n.io", // Placeholder for actual n8n link
            linkText: "Use Automation",
            tags: ["n8n", "HubSpot", "Slack"]
        },
        {
            title: "Social Media Content Scheduler",
            description: "Generate content using GPT-4 from a Notion database and auto-post to LinkedIn, Twitter, and Instagram.",
            link: "https://n8n.io",
            linkText: "Use Automation",
            tags: ["OpenAI", "Notion", "Socials"]
        },
        {
            title: "Invoice Processing Pipeline",
            description: "Extract data from invoice PDFs received via email, add to Google Sheets, and create payment drafts in Xero.",
            link: "https://n8n.io",
            linkText: "Use Automation",
            tags: ["Gmail", "PDF.co", "Xero"]
        }
    ];

    const tools = ["n8n", "Zapier", "Make", "OpenAI API", "Google Sheets", "Airtable", "Notion", "Slack", "WhatsApp API", "Stripe"];

    const benefits = [
        {
            icon: Clock,
            title: "Save Time",
            description: "Eliminate hundreds of hours of manual repetitive work every month."
        },
        {
            icon: Zap,
            title: "Reduce Errors",
            description: "Automated workflows follow strict rules, ensuring 100% data accuracy."
        },
        {
            icon: TrendingUp,
            title: "Scale Operations",
            description: "Handle 10x the volume of work without hiring more staff."
        }
    ];

    return (
        <div className="min-h-screen bg-brand-black pb-20">
            <ServiceHero
                title="Process Automation"
                subtitle="Streamline your operations by connecting your favorite tools and removing manual bottlenecks."
                tagline="Work Smarter, Not Harder"
            />

            {/* Service Description & Benefits */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-6">
                                The Engine of Efficient Business
                            </h2>
                            <p className="text-brand-gray-300 leading-relaxed mb-6">
                                We design and build robust automation workflows that act as the glue between your software ecosystem.
                                Whether it's syncing data, triggering notifications, or processing complex documents, we automate
                                the tasks that slow you down.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {tools.map(tool => (
                                    <span key={tool} className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 text-brand-gold bg-brand-white/5">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="grid gap-4">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 p-6 rounded-xl glass border border-white/5"
                                >
                                    <div className="p-3 rounded-lg bg-brand-white/5 text-brand-gold">
                                        <benefit.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">{benefit.title}</h3>
                                        <p className="text-sm text-brand-gray-300">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Automation Showcase */}
                    <div>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-heading font-bold text-white mb-4">Automation Library</h2>
                            <p className="text-brand-gray-300">Examples of powerful workflows we've built.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {automations.map((automation, idx) => (
                                <ProjectCard
                                    key={automation.title}
                                    {...automation}
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">Stop Doing Busy Work</h2>

                    <div className="glass p-8 rounded-2xl border border-white/10">
                        <TypeformEmbed />
                    </div>
                </div>
            </section>
        </div>
    );
}
