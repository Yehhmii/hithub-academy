"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
    "All Stories",
    "Campus News",
    "Academic Spotlight",
    "Spiritual Life",
    "Student Achievements",
    "Community Events",
];

export default function NewsCategories() {
    const [activeCategory, setActiveCategory] = useState("All Stories");

    return (
        <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4">

                <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "whitespace-nowrap pb-1 border-b-2 transition-all duration-300 font-medium text-sm",
                                activeCategory === category
                                    ? "border-blue-600 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-blue-500"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
