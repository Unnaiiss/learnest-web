"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export const ModernContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to send message");
            }

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
        >
            {/* Name Field */}
            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-brand-gray-300">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full px-6 py-4 bg-brand-white/5 border border-white/10 rounded-xl text-white placeholder-brand-gray-400 focus:outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/20 transition-all backdrop-blur-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-brand-gray-300">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full px-6 py-4 bg-brand-white/5 border border-white/10 rounded-xl text-white placeholder-brand-gray-400 focus:outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/20 transition-all backdrop-blur-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="john@example.com"
                />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-brand-gray-300">
                    Your Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    rows={6}
                    className="w-full px-6 py-4 bg-brand-white/5 border border-white/10 rounded-xl text-white placeholder-brand-gray-400 focus:outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/20 transition-all backdrop-blur-xl resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell us about your project, ideas, or how we can help..."
                />
            </div>

            {/* Status Messages */}
            {status === "success" && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400"
                >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
            )}

            {status === "error" && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400"
                >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm">{errorMessage}</span>
                </motion.div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-black font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                    </>
                ) : (
                    <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>
        </motion.form>
    );
};
