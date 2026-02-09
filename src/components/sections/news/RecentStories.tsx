"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NewsArticle {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    href: string;
}

const recentArticles: NewsArticle[] = [
    {
        id: "1",
        title: "Winners of the 2024 Latin Oratory Contest Announced",
        excerpt: "Congratulations to our top performers who showcased exceptional skill and passion for classical language.",
        category: "Academics",
        date: "January 10, 2026",
        readTime: "3 min read",
        image: "/news/latin-contest.jpg",
        href: "/news/latin-contest-winners",
    },
    {
        id: "2",
        title: "Summer Service Projects: A Legacy of Love",
        excerpt: "Our students spent their summer break serving the community and making a meaningful impact.",
        category: "Community",
        date: "January 8, 2026",
        readTime: "4 min read",
        image: "/news/summer-service.jpg",
        href: "/news/summer-service-projects",
    },
    {
        id: "3",
        title: "Modern Education Must Embrace Ancient Foundations",
        excerpt: "Exploring how classical education principles remain relevant in today's rapidly changing world.",
        category: "Blog",
        date: "January 5, 2026",
        readTime: "6 min read",
        image: "/news/modern-education.jpg",
        href: "/news/modern-education-ancient-foundations",
    },
    {
        id: "4",
        title: "Lions Football Team Secures Championship Win",
        excerpt: "A thrilling 28-21 victory caps off an undefeated season for our varsity football team.",
        category: "Athletics",
        date: "December 20, 2025",
        readTime: "4 min read",
        image: "/news/football-championship.jpg",
        href: "/news/football-championship",
    },
];

export default function RecentStories() {
    return (
        <div>
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-between mb-8"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Recent Stories
                </h2>
                <Link
                    href="/news/all"
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group"
                >
                    <span>View All</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {recentArticles.map((article, index) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="w-full min-w-0"
                    >
                        <Link href={article.href} className="group block h-full w-full">
                            <div className="h-full w-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    {/* Fallback gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-400" />

                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${article.image})`,
                                        }}
                                    />


                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-blue-600">
                                        {article.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 sm:p-6 min-w-0">
                                    {/* Meta */}
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>{article.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                        {article.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                        {article.excerpt}
                                    </p>

                                    {/* Read More */}
                                    <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold group-hover:gap-4 transition-all duration-300">
                                        <span>Read More</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Load More Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mt-12"
            >
                <button className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Load More Stories
                </button>
            </motion.div>
        </div>
    );
}