"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, Sparkles, Wand2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

const GEMINI_API_KEY = "AIzaSyAoD3qoxWPbgUrlaB3dj8CIpwTjnf5Av4M"; // Provided by user

interface Message {
    role: "user" | "model";
    content: string;
}

export function GeminiChat() {
    const [messages, setMessages] = useState<Message[]>([
        { role: "model", content: "Hi there! I'm your AI assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [{ text: input }]
                            }
                        ]
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }

            const data = await response.json();
            const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response.";

            setMessages(prev => [...prev, { role: "model", content: text }]);
        } catch (error) {
            console.error("Gemini API Error:", error);
            setMessages(prev => [...prev, { role: "model", content: "Sorry, something went wrong. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col h-[500px] md:h-[700px] relative">
            {/* Messages Area - Seamless Glass */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 custom-scrollbar bg-white/5 backdrop-blur-xl border border-white/10 rounded-t-3xl shadow-2xl relative z-10">

                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-brand-gray-400 font-medium">
                        <Sparkles className="w-3 h-3 text-brand-gold" />
                        <span>Powered by Gemini Pro</span>
                    </div>
                </div>

                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                        {/* Avatar */}
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-white/10 text-white" : "bg-brand-gold/20 text-brand-gold"
                            }`}>
                            {msg.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-6 h-6" />}
                        </div>

                        {/* Bubble */}
                        <div className={`max-w-[80%] rounded-2xl p-4 md:p-5 shadow-sm ${msg.role === "user"
                            ? "bg-brand-gold text-black rounded-tr-none font-medium"
                            : "bg-white/5 text-slate-200 rounded-tl-none border border-white/5"
                            }`}>
                            {msg.role === "model" ? (
                                <div className="prose prose-invert prose-sm max-w-none">
                                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                                </div>
                            ) : (
                                <p>{msg.content}</p>
                            )}
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                            <Bot className="w-6 h-6 animate-pulse" />
                        </div>
                        <div className="bg-white/5 rounded-2xl rounded-tl-none p-4 flex items-center gap-3">
                            <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                            <span className="text-sm text-brand-gray-400">Thinking...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Seamlessly Attached Bottom */}
            <div className="bg-[#151515] p-4 md:p-6 rounded-b-3xl border-x border-b border-white/10 relative z-20 shadow-xl">
                <div className="relative flex items-center gap-2 bg-[#0A0A0A] rounded-2xl border border-white/10 focus-within:border-brand-gold/40 transition-colors p-1.5">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Message Learnest Assistant..."
                        className="w-full bg-transparent text-white px-4 py-3 focus:outline-none placeholder:text-gray-600 font-medium"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className="p-3 bg-brand-gold text-black rounded-xl hover:bg-brand-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/20"
                    >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    </button>
                </div>
                <div className="flex justify-center mt-3">
                    <p className="text-[10px] text-gray-600">
                        AI can make mistakes. Consider checking important information.
                    </p>
                </div>
            </div>
        </div>
    );
}
