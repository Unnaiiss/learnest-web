"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, Phone } from "lucide-react";

const links = [
    { icon: Mail, label: "Email Us", value: "learnest.online@gmail.com", href: "mailto:learnest.online@gmail.com" },
    { icon: Phone, label: "Call Us", value: "+91 907432914", href: "tel:+91907432914" },
    { icon: Linkedin, label: "LinkedIn", value: "LEARNEST", href: "https://www.linkedin.com/company/learnestml/" },
    { icon: Instagram, label: "Instagram", value: "@learnest.in", href: "https://www.instagram.com/learnest.in" },
];

export const ContactGrid = () => {
    return (
        <section className="px-6 relative z-10 -mt-6 md:-mt-10">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {links.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (index * 0.1) }}
                            className="glass p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-brand-white/10 transition-all border border-brand-white/10 hover:border-brand-gold/30 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <link.icon className="w-5 h-5 text-brand-gold" />
                            </div>
                            <h3 className="text-white font-medium mb-1">{link.label}</h3>
                            <p className="text-brand-gray-300 text-sm break-all md:break-normal">{link.value}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
