"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitted(true);
        setIsLoading(false);
        setEmail("");
        setName("");

        // Reset after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full min-w-0"
        >
            <div className="relative w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl p-6 md:p-8 border-2 border-blue-100 shadow-xl overflow-hidden">

                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-200/20 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 rounded-full text-[10px] md:text-xs font-bold text-white mb-4">
                        <Mail className="w-3 h-3" />
                        <span>MONTHLY NEWSLETTER</span>
                    </div>

                    {/* Heading */}
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-3">
                        Stay Connected with Our Community
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                        Join our monthly digest to receive the latest updates, spiritual reflections, and student achievements from our Catholic community.
                    </p>


                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Input */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your full name"
                                    required
                                    disabled={isSubmitted}
                                    className={cn(
                                        "w-full px-4 py-3 pl-10 rounded-xl border-2 border-gray-200",
                                        "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                                        "text-gray-900 placeholder:text-gray-400",
                                        "transition-all duration-300",
                                        "disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    )}
                                />
                                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    required
                                    disabled={isSubmitted}
                                    className={cn(
                                        "w-full px-4 py-3 pl-10 rounded-xl border-2 border-gray-200",
                                        "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                                        "text-gray-900 placeholder:text-gray-400",
                                        "transition-all duration-300",
                                        "disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    )}
                                />
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitted || isLoading}
                            className={cn(
                                "w-full py-3 rounded-xl font-bold text-white",
                                "bg-gradient-to-r from-blue-600 to-blue-700",
                                "hover:from-blue-700 hover:to-blue-800",
                                "hover:shadow-xl hover:shadow-blue-600/30",
                                "transition-all duration-300",
                                "disabled:opacity-50 disabled:cursor-not-allowed",
                                "flex items-center justify-center gap-2"
                            )}
                        >
                            {isLoading ? (
                                <>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    />
                                    <span>Subscribing...</span>
                                </>
                            ) : isSubmitted ? (
                                <>
                                    <Check className="w-5 h-5" />
                                    <span>Subscribed!</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    <span>Subscribe Now</span>
                                </>
                            )}
                        </button>
                    </form>

                    {/* Success Message */}
                    {isSubmitted && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700 text-center"
                        >
                            ✓ Welcome! Check your email for confirmation.
                        </motion.div>
                    )}

                    {/* Social Proof */}
                    <div className="flex items-center gap-2 mt-6 pt-6 border-t border-gray-200">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"
                                />
                            ))}
                        </div>
                        <p className="text-sm text-gray-600">
                            Join <span className="font-bold text-blue-600">3,500+</span> community members
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}