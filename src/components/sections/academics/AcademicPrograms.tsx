"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Microscope, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Program {
    id: number;
    title: string;
    phase: "Junior Secondary" | "Senior Secondary" | "Science / Arts / Commercial";
    description: string;
    icon: any;
    color: string;
    bgColor: string;
    href: string;
}

const programs: Program[] = [
    {
        id: 1,
        title: "Junior Secondary",
        phase: "Junior Secondary",
        description: "A foundational learning environment for students in JSS1-JSS3, focusing on critical thinking and problem-solving skills through a balanced curriculum.",
        icon: BookOpen,
        color: "from-blue-500 to-blue-700",
        bgColor: "bg-blue-50",
        href: "/academics/junior-secondary",
    },
    {
        id: 2,
        title: "Senior Secondary",
        phase: "Senior Secondary",
        description: "Rigorous preparation for higher education and professional life, with specialized tracks in Science, Arts, and Commercial streams for SSS1-SSS3 students.",
        icon: GraduationCap,
        color: "from-amber-500 to-amber-700",
        bgColor: "bg-amber-50",
        href: "/academics/senior-secondary",
    },
    {
        id: 3,
        title: "Science / Arts / Commercial",
        phase: "Science / Arts / Commercial",
        description: "Tailored pathways allowing students to specialize in their areas of interest and aptitude, preparing them for diverse career opportunities and university programs.",
        icon: Microscope,
        color: "from-green-500 to-green-700",
        bgColor: "bg-green-50",
        href: "/academics/specializations",
    },
];

export default function AcademicPrograms() {
    const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

    const filteredPrograms = selectedPhase
        ? programs.filter((p) => p.phase === selectedPhase)
        : programs;

    return (
        <section className="relative py-20 md:py-32 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(37, 99, 235) 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
                    >
                        <BookOpen className="w-4 h-4 text-blue-700" />
                        <span className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
                            Our Programs
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Our Academic Programs
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                    >
                        Excellence across all levels, preparing students for success in academics
                        and life.
                    </motion.p>

                    {/* Phase Filter Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        <button
                            onClick={() => setSelectedPhase(null)}
                            className={cn(
                                "px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer",
                                selectedPhase === null
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            )}
                        >
                            All Programs
                        </button>
                        {["Junior Secondary", "Senior Secondary", "Science / Arts / Commercial"].map(
                            (phase) => (
                                <button
                                    key={phase}
                                    onClick={() => setSelectedPhase(phase)}
                                    className={cn(
                                        "px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer",
                                        selectedPhase === phase
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    )}
                                >
                                    {phase}
                                </button>
                            )
                        )}
                    </motion.div>
                </motion.div>

                {/* Program Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredPrograms.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <Link href={program.href}>
                                <div className="group relative h-full bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl overflow-hidden">
                                    {/* Colored Top Border */}
                                    <div className={cn("h-2 w-full", `bg-gradient-to-r ${program.color}`)} />

                                    {/* Card Content */}
                                    <div className="p-8">
                                        {/* Icon */}
                                        <div
                                            className={cn(
                                                "inline-flex p-4 rounded-xl mb-6",
                                                program.bgColor,
                                                "group-hover:scale-110 transition-transform duration-300"
                                            )}
                                        >
                                            <program.icon
                                                className={cn(
                                                    "w-8 h-8",
                                                    program.id === 1 && "text-blue-600",
                                                    program.id === 2 && "text-amber-600",
                                                    program.id === 3 && "text-green-600"
                                                )}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            {program.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {program.description}
                                        </p>

                                        {/* Learn More Link */}
                                        <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all duration-300">
                                            <span>Learn more</span>
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>

                                    {/* Hover Gradient Overlay */}
                                    <div
                                        className={cn(
                                            "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none",
                                            `bg-gradient-to-br ${program.color}`
                                        )}
                                    />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <Link
                        href="/programs"
                        className={cn(
                            "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold",
                            "bg-white text-blue-600 border-2 border-blue-600",
                            "hover:bg-blue-50",
                            "transition-all duration-300 shadow-lg hover:shadow-xl"
                        )}
                    >
                        <BookOpen className="w-5 h-5" />
                        View All Programs
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}