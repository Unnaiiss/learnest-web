"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-brand-black flex items-center justify-center overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex flex-col items-center justify-center p-8"
            >
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-brand-gold/5 blur-[100px] rounded-full animate-pulse-slow" />

                {/* Logo with Shimmer Overlay */}
                <div className="relative w-64 h-auto overflow-hidden rounded-lg">
                    <Image
                        src="/logo.png"
                        alt="Loading..."
                        width={256}
                        height={80}
                        className="object-contain relative z-10 w-full h-full"
                        priority
                    />

                    {/* Shimmer Effect */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                            repeatDelay: 0.5
                        }}
                        className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent skew-x-12"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 flex gap-2"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 animate-bounce"></span>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
