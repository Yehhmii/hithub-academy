"use client";

import { motion } from "framer-motion";
import { GraduationCap, FileText } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function JourneyCallToAction() {
    return (
        <section className="relative py-12 px-4 md:px-8 overflow-hidden mb-20">
            <div className="max-w-7xl mx-auto w-full md:w-[90%] relative rounded-[2.5rem] overflow-hidden py-20 md:py-32">
                {/* Dark Blue Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900" />

                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: "40px 40px",
                        }}
                    />
                </div>

                {/* Decorative Gradient Orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Decorative Cross */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.05, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
                >
                    <div className="relative w-64 h-64">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-64 bg-white rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-4 bg-white rounded-full" />
                    </div>
                </motion.div>

                <div className="relative container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            Start your journey today
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
                        >
                            Join a community where FRIENDS thrive. Enroll today for the opportunity
                            academic excellence in our faith-driven environment.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            {/* Apply Now Button */}
                            <Link
                                href="/admissions/apply"
                                className={cn(
                                    "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold",
                                    "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
                                    "hover:from-blue-600 hover:to-blue-700",
                                    "shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40",
                                    "transition-all duration-300 transform hover:scale-105"
                                )}
                            >
                                <GraduationCap className="w-5 h-5" />
                                Apply Now
                            </Link>

                            {/* Download Brochure Button */}
                            <Link
                                href="/brochure"
                                className={cn(
                                    "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold",
                                    "bg-white/10 backdrop-blur-md text-white",
                                    "border-2 border-white/30 hover:bg-white/20 hover:border-white/50",
                                    "transition-all duration-300"
                                )}
                            >
                                <FileText className="w-5 h-5" />
                                Download Brochure
                            </Link>
                        </motion.div>

                        {/* Stats Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
                        >
                            {[
                                { number: "98%", label: "College Acceptance" },
                                { number: "50+", label: "Years Excellence" },
                                { number: "15:1", label: "Student-Teacher Ratio" },
                                { number: "100%", label: "Faith Formation" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm md:text-base text-blue-200 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}