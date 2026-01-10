"use client";

import { motion } from "framer-motion";

export const ContactHero = () => {
    return (
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden px-6 pt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center relative z-10"
            >
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                    Let’s Build the <span className="text-brand-gold">Future</span> Together
                </h1>
                <p className="text-xl text-brand-gray-300 max-w-2xl mx-auto">
                    Have a project in mind or just want to explore what AI can do for you?
                    We are here to listen and create.
                </p>
            </motion.div>
        </section>
    );
};
