"use client";

import { motion } from "framer-motion";
import { ChevronRight, FileDown, BookOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AcademicsHero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(37, 99, 235) 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Breadcrumb */}
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 text-sm mb-8"
                >
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Programs
                    </Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-blue-600 font-medium">Academics</span>
                </motion.nav>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content - Slides in from left */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
                        >
                            <BookOpen className="w-4 h-4 text-blue-700" />
                            <span className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
                                Our Curriculum
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            <span className="text-gray-900">Academic</span>
                            <br />
                            <span className="text-gray-900">excellence</span>
                            <br />
                            <span className="text-gray-900">grounded in </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 italic">
                                faith
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 italic">
                                and discipline
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                        >
                            Empowering students through a rigorous curriculum inspired by classical
                            Roman Catholic traditions. Our approach develops critical thinking,
                            virtue, and a lifelong love of learning.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex flex-wrap gap-4 "
                        >
                            <Link
                                href="/admissions/apply"
                                className={cn(
                                    "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold cursor-pointer",
                                    "bg-gradient-to-r from-blue-600 to-blue-700 text-white",
                                    "hover:from-blue-700 hover:to-blue-800",
                                    "shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40",
                                    "transition-all duration-300 transform hover:scale-105"
                                )}
                            >
                                <BookOpen className="w-5 h-5" />
                                View Curriculum
                            </Link>

                            <Link
                                href="/academics/pathways"
                                className={cn(
                                    "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold cursor-pointer",
                                    "bg-white text-blue-600 border-2 border-blue-600",
                                    "hover:bg-blue-50",
                                    "transition-all duration-300"
                                )}
                            >
                                <FileDown className="w-5 h-5" />
                                IB+ Pathways
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Image - Slides in from right with angled pop effect */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative"
                    >
                        <motion.div
                            initial={{ scale: 0.9, rotate: 0 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 100 }}
                            className="relative"
                        >
                            {/* Main Image Container with Angled Clip */}
                            <div
                                className="relative overflow-hidden shadow-2xl"
                                style={{
                                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                                    borderRadius: "24px 24px 0 0",
                                }}
                            >
                                {/* Image */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-blue-200 to-blue-400"
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{
                                            backgroundImage: "url(/academics-hero.jpg)",
                                        }}
                                    />
                                    {/* Fallback gradient if no image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                                </motion.div>

                                {/* Decorative Overlay Pattern */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative Accent - Bottom Right Corner */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 -z-10"
                                style={{
                                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                                }}
                            />

                            {/* Stats Card - Floating */}
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <BookOpen className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-blue-600">98%</div>
                                        <div className="text-sm text-gray-600">College Ready</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Background Shape */}
                            <div className="absolute top-0 right-0 w-full h-full -z-20">
                                <motion.div
                                    animate={{
                                        rotate: [0, 5, 0],
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}