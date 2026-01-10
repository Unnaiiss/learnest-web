"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

const team = [
    { name: "Alex Morgan", role: "Head of AI Research", bio: "Ph.D. in Machine Learning with a passion for ethical AI." },
    { name: "Sarah Chen", role: "Lead Developer", bio: "Building scalable tech solutions for the future web." },
    { name: "Jordan Lee", role: "Content Director", bio: "Translating complex tech into clear, engaging stories." },
];

export const TeamGrid = () => {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Meet Our Team</h2>
                    <p className="text-brand-gray-300">The minds behind the mission.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl text-center hover:bg-brand-white/5 transition-colors group"
                        >
                            <div className="w-24 h-24 mx-auto rounded-full bg-brand-black border border-brand-white/10 flex items-center justify-center mb-6 group-hover:border-brand-gold/30 transition-colors overflow-hidden">
                                <User className="w-10 h-10 text-brand-gray-300" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-sm text-brand-gold mb-4 uppercase tracking-wider">{member.role}</p>
                            <p className="text-brand-gray-300 text-sm leading-relaxed">
                                {member.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
