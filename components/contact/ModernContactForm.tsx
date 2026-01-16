"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, MapPin, Phone, Mail } from "lucide-react";

export const ModernContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        agree: false
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.agree) {
            setErrorMessage("Please agree to the data collection policy.");
            setStatus("error");
            return;
        }

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
            setFormData({ name: "", email: "", phone: "", message: "", agree: false });

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

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            agree: e.target.checked
        }));
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">

                {/* LEFT COLUMN: Contact Info */}
                <div className="space-y-12">
                    <div>
                        <span className="text-sm font-bold tracking-widest text-brand-gray-400 uppercase mb-4 block">
                            Common Questions
                        </span>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            Got questions? <br />
                            <span className="text-white">Contact us!</span>
                        </h1>
                        <p className="text-brand-gray-300 text-lg leading-relaxed max-w-md">
                            We are here to help you with any inquiries or issues you may have.
                            Don't hesitate to reach out to us at any time.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Address */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-brand-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-colors">
                                <MapPin className="w-5 h-5 text-brand-gray-400 group-hover:text-brand-gold transition-colors" />
                            </div>
                            <span className="text-brand-gray-300 mt-2">
                                Kerala, India
                            </span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-brand-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-colors">
                                <Phone className="w-5 h-5 text-brand-gray-400 group-hover:text-brand-gold transition-colors" />
                            </div>
                            <span className="text-brand-gray-300 mt-2">
                                +91 907432914
                            </span>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-brand-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-colors">
                                <Mail className="w-5 h-5 text-brand-gray-400 group-hover:text-brand-gold transition-colors" />
                            </div>
                            <span className="text-brand-gray-300 mt-2">
                                learnest.online@gmail.com
                            </span>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-white ml-1">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={status === "loading"}
                                className="w-full px-4 py-3 bg-brand-white/5 border border-white/10 rounded-xl text-white placeholder-brand-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition-all font-light"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-white ml-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status === "loading"}
                                className="w-full px-4 py-3 bg-brand-white/5 border border-white/10 rounded-xl text-white placeholder-brand-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition-all font-light"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    {/* Row 2: Phone */}
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-white ml-1">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={status === "loading"}
                            className="w-full px-4 py-3 bg-brand-white/5 border border-white/10 rounded-xl text-white placeholder-brand-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition-all font-light"
                            placeholder="Enter your number"
                        />
                    </div>

                    {/* Row 3: Message */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-white ml-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={status === "loading"}
                            rows={6}
                            className="w-full px-4 py-3 bg-brand-white/5 border border-white/10 rounded-xl text-white placeholder-brand-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition-all font-light resize-none"
                            placeholder="Enter your message"
                        />
                    </div>

                    {/* Row 4: Checkbox */}
                    <div className="flex items-start gap-3 pt-2">
                        <div className="relative flex items-center">
                            <input
                                type="checkbox"
                                id="agree"
                                name="agree"
                                checked={formData.agree}
                                onChange={handleCheckboxChange}
                                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-white/20 bg-brand-white/5 transition-all hover:border-brand-gold checked:border-brand-gold checked:bg-brand-gold"
                            />
                            <CheckCircle2 className="pointer-events-none absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 transition-opacity peer-checked:opacity-100" />
                        </div>
                        <label htmlFor="agree" className="text-sm text-brand-gray-400 cursor-pointer select-none leading-tight">
                            I agree that my submitted data is being <span className="text-brand-gold/80 hover:underline">collected and stored</span>.
                        </label>
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
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="px-10 py-4 bg-[#D97757] hover:bg-[#c66a4b] text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-lg shadow-[#D97757]/20"
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <span>Send Message</span>
                            )}
                        </button>
                    </div>

                </motion.form>
            </div>
        </div>
    );
};
