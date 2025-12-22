"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Calendar, Users, BookOpen, Cross } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
  icon: any;
  position: "left" | "right";
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "1952",
    title: "The Founding",
    description: "Founded by visionary educators who believed in nurturing both mind and soul through classical education rooted in Catholic tradition.",
    image: "/founding.jpg",
    icon: Cross,
    position: "right",
  },
  {
    id: 2,
    year: "1975",
    title: "Campus Expansion  -",
    description: "Built our iconic chapel and expanded facilities to welcome more students, creating a sanctuary for learning and spiritual growth.",
    image: "/campus.jpg",
    icon: BookOpen,
    position: "left",
  },
  {
    id: 3,
    year: "2005",
    title: "Academic Excellence",
    description: "Recognized nationally for academic achievements and classical curriculum, producing graduates who excel in higher education.",
    image: "/academics1.jpg",
    icon: Users,
    position: "right",
  },
  {
    id: 4,
    year: "Today",
    title: "Future Vision  -",
    description: "Continuing our legacy with cutting-edge facilities while staying true to timeless values, preparing students for tomorrow's challenges.",
    image: "/future.jpg",
    icon: Calendar,
    position: "left",
  },
];

export default function HistorySection() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, { once: false, margin: "-200px" });

  const [flowProgress, setFlowProgress] = useState(0);

  // Animate water flow continuously
  useEffect(() => {
    if (!timelineInView) return;

    const interval = setInterval(() => {
      setFlowProgress((prev) => {
        if (prev >= 100) {
          return 0; // Reset and start again
        }
        return prev + 0.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [timelineInView]);

  return (
    <section className="relative py-20 bg-linear-to-b from-white via-blue-50/20 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(37, 99, 235) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="">
        {/* Inspirational Quote */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-full mx-auto text-center mb-20"
        >
          <div className="relative bg-linear-to-br from-blue-900 to-blue-800 rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
            
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={sectionInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="relative mb-6"
            >
              <Quote className="w-12 h-12 md:w-16 md:h-16 mx-auto text-yellow-400 fill-yellow-400" />
            </motion.div>

            {/* Quote Text */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative text-2xl md:text-3xl lg:text-4xl font-serif italic text-white leading-relaxed mb-6"
            >
              "Faith is the realization of what is hoped for and evidence of things not seen."
            </motion.blockquote>

            {/* Attribution */}
            <motion.cite
              initial={{ opacity: 0 }}
              animate={sectionInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="relative text-blue-200 text-sm md:text-base not-italic font-medium"
            >
              — Hebrews 11:1
            </motion.cite>

            {/* Decorative Cross */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={sectionInView ? { opacity: 0.1, scale: 1 } : {}}
              transition={{ delay: 0.9, duration: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div className="relative w-32 h-32">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-32 bg-white rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-2 bg-white rounded-full" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4">

            {/* Section Header */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mb-16 max-w-4xl mx-auto"
            >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
            >
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
                Our Journey
                </span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
                Our Journey Through Time
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-lg text-gray-600"
            >
                Decades of dedication to forming young minds and hearts in the light of faith and wisdom.
            </motion.p>
            </motion.div>

            {/* Timeline */}
            <div ref={timelineRef} className="relative max-w-6xl mx-auto">
            {/* Center Line with Water Flow Effect */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-linear-to-b from-blue-200 via-blue-300 to-blue-200 hidden md:block">
                {/* Animated water droplets flowing down */}
                <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3"
                style={{
                    top: `${flowProgress}%`,
                }}
                >
                <div className="w-full h-full bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 animate-pulse" />
                </motion.div>

                {/* Water flow gradient overlay */}
                <motion.div
                className="absolute inset-0 bg-linear-to-b from-blue-400/50 to-transparent"
                animate={{
                    y: ["0%", "100%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
                />
            </div>

            {/* Timeline Events */}
            <div className="space-y-16 md:space-y-24">
                {timelineEvents.map((event, index) => (
                <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className={cn(
                    "relative grid md:grid-cols-2 gap-8 items-center",
                    event.position === "left" && "md:direction-rtl"
                    )}
                >
                    {/* Timeline Dot */}
                    <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5, type: "spring" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"
                    >
                    <div className="relative">
                        {/* Outer Ring */}
                        <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/30">
                        {/* Inner Ring */}
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                            <event.icon className="w-7 h-7 text-blue-600" />
                        </div>
                        </div>
                        
                        {/* Pulse Effect */}
                        <motion.div
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-blue-400 rounded-full"
                        />
                    </div>
                    </motion.div>

                    {/* Content */}
                    <div className={cn(
                    "md:direction-ltr",
                    event.position === "right" ? "md:text-left md:pr-16" : "md:text-right md:pl-16"
                    )}>
                    {/* Year Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: event.position === "right" ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                        className={cn(
                        "inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-4",
                        event.position === "right" ? "" : "md:ml-auto"
                        )}
                    >
                        <span className="w-2 h-2 bg-yellow-600 rounded-full" />
                        <span className="text-sm font-bold text-yellow-900 uppercase tracking-wider">
                        {event.year}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                        initial={{ opacity: 0, x: event.position === "right" ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
                    >
                        {event.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, x: event.position === "right" ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.6, duration: 0.6 }}
                        className="text-gray-600 leading-relaxed"
                    >
                        {event.description}
                    </motion.p>
                    </div>

                    {/* Image */}
                    <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                    className="md:direction-ltr"
                    >
                    <div className="relative group">
                        {/* Image Container with unique clip shapes */}
                        <div
                        className={cn(
                            "relative h-64 md:h-80 overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl",
                            index % 2 === 0 ? "rounded-t-[100px] rounded-b-3xl" : "rounded-3xl rounded-br-[100px]"
                        )}
                        >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{
                            backgroundImage: `url(${event.image})`,
                            }}
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Icon overlay on hover */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                        >
                            <event.icon className="w-8 h-8 text-blue-600" />
                        </motion.div>
                        </div>

                        {/* Decorative corner element */}
                        <div className={cn(
                        "absolute w-16 h-16 bg-blue-600/20 blur-xl",
                        index % 2 === 0 ? "-top-4 -left-4" : "-bottom-4 -right-4"
                        )} />
                    </div>
                    </motion.div>
                </motion.div>
                ))}
            </div>
            </div>

            {/* CTA Section - "Be Part of Our History" */}
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-24 max-w-5xl mx-auto"
            >
            <div className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-12 md:p-16 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative text-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Be Part of Our History
                </h3>
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Join a community that has been shaping lives for generations. Your story begins here.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                    href="/apply"
                    className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/30 hover:scale-105"
                    >
                    Apply Now
                    </Link>
                    <Link
                    href="/tour"
                    className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 rounded-full font-semibold text-lg transition-all duration-300"
                    >
                    Book a Tour
                    </Link>
                </div>
                </div>
            </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}