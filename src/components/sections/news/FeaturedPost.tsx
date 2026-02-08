"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function FeaturedPost() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full min-w-0"
        >
            <Link href="/news/construction-begins-library" className="group block w-full">
                <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl hover:shadow-3xl transition-all duration-500">
                    {/* Background Image */}
                    <div className="relative h-[400px] md:h-[500px]">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{
                                backgroundImage: "url(/news/library-construction.jpg)",
                            }}
                        />
                        {/* Fallback gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-blue-800/80" />

                        {/* Pattern Overlay */}
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                    backgroundSize: "30px 30px",
                                }}
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-12 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent min-w-0">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 rounded-full text-[10px] md:text-xs font-bold text-gray-900 w-fit mb-3 md:mb-4">
                            <span>FEATURED POST</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight group-hover:text-yellow-300 transition-colors duration-300 line-clamp-3 md:line-clamp-none">
                            Construction Begins on the New Saint Jerome Library
                        </h2>

                        {/* Excerpt */}
                        <p className="text-xs sm:text-base md:text-lg text-blue-50 mb-4 md:mb-6 max-w-2xl line-clamp-2 sm:line-clamp-3">
                            A modern space for literary pursuits and research. An expected 25,000 sq ft space designed to give our students even greater access to a world of knowledge.
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[10px] sm:text-xs md:text-sm text-blue-100 mb-4 md:mb-6">
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <Calendar className="w-3 md:w-4 h-3 md:h-4" />
                                <span>January 15, 2026</span>
                            </div>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <Clock className="w-3 md:w-4 h-3 md:h-4" />
                                <span>5 min read</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-white text-xs sm:text-sm md:text-base font-semibold group-hover:gap-4 transition-all duration-300">
                            <span>Read Full Story</span>
                            <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>


                </div>
            </Link>
        </motion.div>
    );
}