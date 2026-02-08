"use client";

import { motion } from "framer-motion";
import { ChevronRight, Newspaper } from "lucide-react";
import Link from "next/link";

export default function NewsHero() {
    return (
        <section className="relative w-full pt-28 pb-10 md:pt-40 md:pb-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(37, 99, 235) 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4">
                {/* Breadcrumb */}
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 text-xs md:text-sm mb-6 md:mb-8 overflow-hidden"
                >
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap"
                    >
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-blue-600 font-medium truncate">News & Updates</span>
                </motion.nav>

                {/* Title */}
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full mb-4 md:mb-6"
                    >
                        <Newspaper className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-700" />
                        <span className="text-[10px] md:text-sm font-semibold text-blue-900 uppercase tracking-wider">
                            Chronicles of the Community
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
                    >
                        News & Updates
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl"
                    >
                        Highlighting news, the academic spotlight, and our evolving legacy in service of our students in the community of St. Pete.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}