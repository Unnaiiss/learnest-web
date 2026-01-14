"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags?: string[];
    link?: string;
    linkText?: string;
    image?: string; // Optional image prop if we decide to add thumbnails later
    delay?: number;
}

export const ProjectCard = ({ title, description, tags, link, linkText = "View Live Demo", delay = 0 }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl p-8 border border-white/10 bg-brand-white/5 hover:border-brand-gold/30 hover:bg-brand-white/10 transition-all duration-300 flex flex-col h-full"
        >
            <div className="flex-1">
                <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                    {title}
                </h3>
                <p className="text-brand-gray-300 mb-6 leading-relaxed">
                    {description}
                </p>

                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag) => (
                            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-brand-gray-300 bg-black/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {link && (
                <div className="mt-auto pt-6 border-t border-white/5">
                    <Link
                        href={link}
                        target="_blank"
                        className="flex items-center gap-2 text-brand-gold text-sm font-medium hover:text-brand-gold-light transition-colors"
                    >
                        <span>{linkText}</span>
                        <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>
            )}
        </motion.div>
    );
};
