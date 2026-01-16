"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const reviews = [
    {
        id: 1,
        content: "LEARNEST helped us automate our entire customer support workflow. The ROI was immediate and substantial.",
        author: "Sarah Jenkins",
        role: "CTO, TechFlow",
        rating: 5,
        avatar: "SJ"
    },
    {
        id: 2,
        content: "The custom AI model they built for our predictive analytics is a game-changer. Highly recommended.",
        author: "David Chen",
        role: "Head of Data, Innoverse",
        rating: 5,
        avatar: "DC"
    },
    {
        id: 3,
        content: "Professional, fast, and incredibly knowledgeable. They clarified our AI strategy in weeks.",
        author: "Elena Rodriguez",
        role: "CEO, StartUp Inc",
        rating: 4.9,
        avatar: "ER"
    },
    {
        id: 4,
        content: "The best investment we've made this year. Their chatbots are indistinguishable from human agents.",
        author: "Michael Ross",
        role: "Director of Ops, RetailGiant",
        rating: 5,
        avatar: "MR"
    },
    {
        id: 5,
        content: "Incredible attention to detail. The team at LEARNEST truly understands the future of tech.",
        author: "Jessica Wong",
        role: "Founder, AI Ventures",
        rating: 5,
        avatar: "JW"
    },
    {
        id: 6,
        content: "Seamless integration and top-tier support. They made complex AI concepts accessible.",
        author: "Tom Baker",
        role: "Product Manager, SoftSys",
        rating: 5,
        avatar: "TB"
    }
];

// Duplicate for infinite scroll
const scrollingReviews = [...reviews, ...reviews, ...reviews];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="bg-brand-white/5 border border-white/10 rounded-2xl p-5 md:p-6 mb-6 backdrop-blur-sm">
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(review.rating) ? "text-brand-gold fill-brand-gold" : "text-brand-gray-600"}`} />
            ))}
            <span className="text-xs text-brand-gray-400 ml-2 pt-0.5">{review.rating}/5</span>
        </div>
        <p className="text-brand-gray-200 text-sm leading-relaxed mb-6">"{review.content}"</p>
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white font-bold text-xs">
                {review.avatar}
            </div>
            <div>
                <h4 className="text-white font-bold text-sm">{review.author}</h4>
                <p className="text-xs text-brand-gray-400">{review.role}</p>
            </div>
        </div>
    </div>
);

export const ReviewsSection = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-black">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-brand-gray-400 text-sm">See our 50+ reviews on</span>
                            <div className="flex items-center gap-1 text-green-500 font-bold">
                                <Star className="w-4 h-4 fill-current" /> Trustpilot
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            Trusted by <span className="text-gray-500">Visionaries</span> Worldwide
                        </h2>

                        <p className="text-lg text-brand-gray-300 mb-10 max-w-lg leading-relaxed">
                            Thousands of businesses and learners rely on LEARNEST to navigate the AI revolution with confidence and clarity.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all shadow-lg hover:-translate-y-1"
                        >
                            Start Your Success Story <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    {/* Right Scroll Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px] md:h-[600px] overflow-hidden relative mask-gradient-y">
                        {/* Gradient Masks for smooth fade out top/bottom */}
                        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

                        {/* Column 1: Upwards */}
                        <motion.div
                            animate={{ y: [0, -1000] }} // Adjust based on height of items
                            transition={{
                                repeat: Infinity,
                                duration: 20,
                                ease: "linear"
                            }}
                        >
                            {scrollingReviews.map((review, i) => (
                                <ReviewCard key={`col1-${i}`} review={review} />
                            ))}
                        </motion.div>

                        {/* Column 2: Downwards (Hidden on Mobile) */}
                        <motion.div
                            className="hidden md:block -mt-[1000px]" // Start offset for downwards
                            animate={{ y: [0, 1000] }}
                            transition={{
                                repeat: Infinity,
                                duration: 25, // Slightly different speed for variation
                                ease: "linear"
                            }}
                        >
                            {scrollingReviews.map((review, i) => (
                                <ReviewCard key={`col2-${i}`} review={review} />
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
