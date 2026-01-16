"use client";

import { AutomationHero } from "@/components/services/AutomationHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Workflow, Zap, Clock, TrendingUp, GitBranch, CheckCircle2, Settings, ArrowDown, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TypeformEmbed } from "@/components/ui/TypeformEmbed";
import Link from "next/link"; // Added missing import

export default function AutomationPage() {
    const automations = [
        {
            title: "Lead Qualification & CRM Sync",
            description: "Automatically qualify leads from Facebook Ads and sync them to HubSpot/Salesforce with instant notification to your sales team.",
            link: "https://n8n.io",
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
            description: "Eliminate hundreds of hours of manual repetitive work every month.",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20"
        },
        {
            icon: Zap,
            title: "Reduce Errors",
            description: "Automated workflows follow strict rules, ensuring 100% data accuracy.",
            color: "text-purple-400",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20"
        },
        {
            icon: TrendingUp,
            title: "Scale Operations",
            description: "Handle 10x the volume of work without hiring more staff.",
            color: "text-green-400",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/20"
        }
    ];

    return (
        <div className="min-h-screen bg-brand-black text-white selection:bg-brand-gold/30 selection:text-brand-gold">
            <AutomationHero />

            {/* Connecting Line Container */}
            <div className="relative max-w-7xl mx-auto px-6">

                {/* Vertical Workflow Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-brand-gold/50 to-white/20 hidden md:block" />

                {/* Section: The Engine (Benefits as Workflow Nodes) */}
                <section className="py-20 relative">
                    {/* Node Connector */}
                    <div className="absolute left-1/2 -top-10 -translate-x-1/2 w-4 h-4 bg-brand-black border border-white/20 rounded-full z-10 hidden md:flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-right md:pr-12">
                            <h2 className="text-3xl font-heading font-bold text-white mb-6">
                                The Engine of <br /> <span className="text-brand-gold">Efficient Business</span>
                            </h2>
                            <p className="text-brand-gray-300 leading-relaxed mb-8">
                                We design and build robust automation workflows that act as the glue between your software ecosystem.
                                Whether it's syncing data, triggering notifications, or processing complex documents, we automate
                                the tasks that slow you down.
                            </p>

                            {/* Integrations Chips */}
                            <div className="flex flex-wrap gap-2 justify-end">
                                {tools.map(tool => (
                                    <span key={tool} className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 text-brand-gray-300 bg-[#111] hover:border-brand-gold/50 transition-colors">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits as Workflow Steps */}
                        <div className="space-y-6 md:pl-12 relative">
                            {/* Mobile Vertical Line */}
                            <div className="absolute left-9 top-0 bottom-0 w-px bg-white/10 md:hidden" />

                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative z-10"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Node Icon */}
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border backdrop-blur-md z-20 ${benefit.bgColor} ${benefit.color} ${benefit.borderColor}`}>
                                            <benefit.icon className="w-5 h-5" />
                                        </div>

                                        {/* Node Card */}
                                        <div className="flex-1 bg-[#111] border border-white/10 rounded-2xl p-5 hover:border-brand-gold/30 transition-colors group">
                                            <h3 className="text-white font-bold mb-1 group-hover:text-brand-gold transition-colors">{benefit.title}</h3>
                                            <p className="text-sm text-brand-gray-400">{benefit.description}</p>
                                        </div>
                                    </div>

                                    {/* Connection Line Fragment (Desktop) */}
                                    {idx !== benefits.length - 1 && (
                                        <div className="absolute left-6 top-12 bottom-[-24px] w-px bg-white/10 md:hidden" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section: Automation Library (Hanging Tree Layout) */}
                <section className="py-32 relative">
                    {/* Center Connector Label */}
                    <div className="flex justify-center mb-0 relative z-10">
                        <div className="bg-[#111] border border-white/10 px-6 py-2 rounded-full inline-flex items-center gap-2 shadow-2xl">
                            <GitBranch className="w-4 h-4 text-brand-gold" />
                            <span className="text-sm font-bold text-white uppercase tracking-wider">Automation Library</span>
                        </div>
                    </div>

                    {/* Hanging Cards Container */}
                    <div className="relative mt-16 max-w-6xl mx-auto px-4">
                        {/* SVG Connecting Lines */}
                        <svg className="absolute top-[-64px] left-0 w-full h-[120px] pointer-events-none z-0 overflow-visible hidden md:block">
                            {/* Branch to Left */}
                            <path d="M 50% 0 C 50% 50, 16.66% 50, 16.66% 100" stroke="url(#gradient-line)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                            <circle cx="16.66%" cy="100" r="4" fill="#E86C3E" />

                            {/* Branch to Center */}
                            <path d="M 50% 0 L 50% 100" stroke="url(#gradient-line)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                            <circle cx="50%" cy="100" r="4" fill="#A855F7" />

                            {/* Branch to Right */}
                            <path d="M 50% 0 C 50% 50, 83.33% 50, 83.33% 100" stroke="url(#gradient-line)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                            <circle cx="83.33%" cy="100" r="4" fill="#22C55E" />

                            <defs>
                                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                                    <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="grid md:grid-cols-3 gap-8">

                            {/* Card 1: Purple Gradient (Lead Qual) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-[2rem] p-8 h-[420px] flex flex-col justify-between text-white shadow-2xl relative overflow-hidden transition-transform hover:-translate-y-2 duration-500">
                                    {/* Decorative Circles */}
                                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-black/10 rounded-full blur-2xl" />

                                    <div>
                                        <div className="flex items-center gap-2 mb-6">
                                            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">CRM Sync</span>
                                            <Star className="w-4 h-4 fill-white text-white" />
                                            <span className="text-sm font-bold">4.9/5</span>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-2">10k+ Leads</h3>
                                        <p className="text-purple-100 mb-4">Automatically Qualified</p>
                                    </div>

                                    <div>
                                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-4 border border-white/10">
                                            <p className="text-sm font-medium opacity-90 mb-2">"Syncs Facebook leads to HubSpot instantly."</p>
                                            <div className="flex gap-2">
                                                <span className="text-[10px] bg-black/20 px-2 py-1 rounded text-white/80">HubSpot</span>
                                                <span className="text-[10px] bg-black/20 px-2 py-1 rounded text-white/80">Slack</span>
                                            </div>
                                        </div>
                                        <Link href="https://n8n.io" className="inline-flex items-center gap-2 text-sm font-bold hover:underline">
                                            View Workflow <ArrowDown className="w-4 h-4 -rotate-90" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: Dark Minimal (Social Media) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="bg-[#0f172a] border border-white/10 rounded-[2rem] p-8 h-[420px] flex flex-col justify-between text-white shadow-2xl relative overflow-hidden transition-transform hover:-translate-y-2 duration-500">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                                    <div>
                                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-2xl">⚡</div>
                                        <blockquote className="text-xl font-medium leading-relaxed mb-4 text-gray-200">
                                            "Generates & posts content to LinkedIn & Twitter automatically."
                                        </blockquote>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400" />
                                            <div className="text-sm">
                                                <div className="font-bold">GPT-4 Agent</div>
                                                <div className="text-gray-500">Content Engine</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="flex mb-4 -space-x-2">
                                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px] border-2 border-[#0f172a]">Li</div>
                                            <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-[10px] border-2 border-[#0f172a]">Tw</div>
                                            <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-[10px] border-2 border-[#0f172a]">Ig</div>
                                        </div>
                                        <Link href="https://n8n.io" className="block w-full text-center bg-white/5 hover:bg-white/10 py-3 rounded-xl text-sm font-bold transition-colors">
                                            Try Content Scheduler
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 3: Light Glass (Invoice Processing) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="bg-white text-black rounded-[2rem] p-8 h-[420px] flex flex-col justify-between shadow-2xl relative overflow-hidden transition-transform hover:-translate-y-2 duration-500">
                                    <div className="absolute -right-10 top-10 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-60" />

                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 leading-tight">Zero Manual Data Entry.</h3>
                                        <p className="text-gray-500 text-sm">Invoice Processing Pipeline</p>
                                    </div>

                                    <div className="relative h-40">
                                        {/* Floating Tags */}
                                        <div className="absolute top-0 left-0 bg-[#dcfce7] text-[#166534] px-4 py-2 rounded-lg text-sm font-bold transform -rotate-6 shadow-sm">
                                            PDF Extraction
                                        </div>
                                        <div className="absolute top-8 right-0 bg-[#fef9c3] text-[#854d0e] px-4 py-2 rounded-lg text-sm font-bold transform rotate-3 shadow-sm">
                                            Xero Sync
                                        </div>
                                        <div className="absolute bottom-4 left-4 bg-[#f3f4f6] text-gray-700 px-4 py-2 rounded-lg text-sm font-bold transform rotate-2 shadow-sm">
                                            Gmail Trigger
                                        </div>
                                    </div>

                                    <Link href="https://n8n.io" className="flex items-center justify-between bg-black text-white px-6 py-4 rounded-xl font-bold">
                                        View Pipeline
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* Section: CTA (Final Action Node) */}
                <section className="py-20 relative pb-32">
                    {/* Final Connector Arrow */}
                    <div className="flex justify-center mb-0 relative z-10">
                        <ArrowDown className="w-6 h-6 text-white/20 animate-bounce" />
                    </div>

                    <div className="container mx-auto max-w-4xl relative mt-8">
                        {/* Visual Node Container */}
                        <div className="bg-[#111] border border-white/10 rounded-3xl p-1">
                            <div className="border border-dashed border-white/10 rounded-[1.3rem] p-8 md:p-12 text-center bg-brand-black/50 backdrop-blur-sm relative overflow-hidden">
                                {/* Background Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-brand-gold/10 blur-[80px] rounded-full pointer-events-none" />

                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 relative z-10">
                                    Ready to <span className="text-brand-gold">Automate?</span>
                                </h2>

                                {/* Two Column Contact Form */}
                                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">

                                    {/* Left: Newsletter */}
                                    <div className="text-left">
                                        <h3 className="text-2xl font-bold text-white mb-3">Join Our Newsletter</h3>
                                        <p className="text-brand-gray-400 mb-6">Get the latest automation insights & exclusive deals.</p>

                                        <form className="flex gap-3">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                            />
                                            <button
                                                type="submit"
                                                className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-brand-gold transition-colors"
                                            >
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>

                                    {/* Right: Affiliate */}
                                    <div className="text-left">
                                        <h3 className="text-2xl font-bold text-white mb-3">🚀 For Innovators</h3>
                                        <p className="text-brand-gray-400 mb-6">Are you an automation enthusiast, content creator, or tech influencer? Join our affiliate program and earn while sharing the power of automation!</p>

                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 w-full md:w-auto justify-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-gold/50 text-white rounded-xl font-bold transition-all group"
                                        >
                                            Become an Affiliate
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
