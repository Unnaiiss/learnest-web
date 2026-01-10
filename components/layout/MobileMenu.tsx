"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    items: { name: string; href: string }[];
}

export const MobileMenu = ({ isOpen, onClose, items }: MobileMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[60] bg-brand-black/90 flex flex-col items-center justify-center"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 p-2 text-brand-gray-300 hover:text-white transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <nav className="flex flex-col items-center gap-8">
                        {items.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="text-4xl font-heading font-bold text-white hover:text-brand-gold transition-colors"
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                        >
                            <Link
                                href="/contact"
                                onClick={onClose}
                                className="px-8 py-4 rounded-full bg-brand-gold text-brand-black font-bold text-lg"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
