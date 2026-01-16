"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { User, Linkedin } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const leaders = [
    {
        name: "Alice Johnson",
        role: "CEO",
        image: null, // Placeholder
        linkedin: "https://linkedin.com"
    },
    {
        name: "Michael Smith",
        role: "Manager",
        image: null, // Placeholder
        linkedin: "https://linkedin.com"
    },
    {
        name: "James Wilson",
        role: "Tech Lead",
        image: null, // Placeholder
        linkedin: "https://linkedin.com"
    },
    {
        name: "Elena Rodriguez",
        role: "Product Designer",
        image: null, // Placeholder
        linkedin: "https://linkedin.com"
    },
    {
        name: "David Kim",
        role: "Marketing Head",
        image: null, // Placeholder
        linkedin: "https://linkedin.com"
    }
];

export const MeetTeam = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Vertical transformation (Only relevant for Desktop)
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section
            ref={targetRef}
            className={`bg-brand-black relative ${isMobile ? 'h-auto' : 'h-[300vh]'}`}
        >
            <div className={`
                ${isMobile ? 'relative h-auto py-20' : 'sticky top-0 h-screen overflow-hidden'}
            `}>
                <div className="container mx-auto max-w-6xl h-full flex flex-col justify-center px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 w-full h-full lg:items-center">

                        {/* Left Column: Text (Sticky on Desktop, Static on Mobile) */}
                        <div className="flex flex-col justify-center h-full max-h-screen">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-sm font-medium tracking-widest text-brand-gray-300 uppercase mb-4 block">
                                    Our Team
                                </span>
                                <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                                    Our <span className="text-violet-500">leaders</span>
                                </h2>
                                <p className="text-brand-gray-300 text-lg md:text-xl max-w-md leading-relaxed">
                                    Discover the talents behind our innovative solutions.
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Column: Content */}
                        <div className={`
                            ${isMobile ? 'block' : 'h-full flex items-center justify-center relative'}
                        `}>
                            {/* 
                                On Desktop: Motion Div with Y transform.
                                On Mobile: Static Grid.
                            */}
                            {isMobile ? (
                                // MOBILE VIEW
                                <div className="grid gap-12">
                                    {leaders.map((leader) => (
                                        <TeamCard key={leader.name} leader={leader} />
                                    ))}
                                </div>
                            ) : (
                                // DESKTOP VIEW
                                <motion.div style={{ y }} className="w-full flex flex-col gap-24 absolute top-1/3">
                                    {leaders.map((leader) => (
                                        <TeamCard key={leader.name} leader={leader} />
                                    ))}
                                    {/* Buffer for desktop scroll */}
                                    <div className="h-[50vh]" />
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper Component for Card to reduce duplication
const TeamCard = ({ leader }: { leader: any }) => (
    <div className="group w-full max-w-md mx-auto">
        <div className="aspect-[3/4] w-full rounded-3xl bg-brand-white/5 border border-brand-white/10 overflow-hidden relative flex items-center justify-center group-hover:border-violet-500/30 transition-all duration-500">
            {leader.image ? (
                <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            ) : (
                <div className="flex flex-col items-center justify-center text-brand-gray-400">
                    <User className="w-20 h-20 opacity-30 mb-2" />
                </div>
            )}

            {/* Info Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                <div className="transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                        {leader.name}
                    </h3>
                    <div className="flex items-center justify-between">
                        <p className="text-brand-gray-300 font-medium text-lg">
                            {leader.role}
                        </p>
                        <Link
                            href={leader.linkedin}
                            target="_blank"
                            className="text-white bg-violet-600 p-2 rounded-full hover:bg-white hover:text-brand-black transition-all"
                        >
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
