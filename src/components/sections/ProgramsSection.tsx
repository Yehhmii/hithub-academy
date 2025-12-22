"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { BookOpen, GraduationCap, Microscope, Palette, Music, Globe, Calculator, Feather } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Program {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: any;
  color: string;
  bgColor: string;
  highlights: string[];
}

const programs: Program[] = [
  {
    id: 1,
    title: "Classical Literature",
    category: "Humanities",
    description: "Deep engagement with timeless texts from Homer to Shakespeare, developing critical thinking and eloquent expression.",
    icon: BookOpen,
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    highlights: ["Great Books", "Critical Analysis", "Essay Writing"],
  },
  {
    id: 2,
    title: "Mathematics & Logic",
    category: "STEM",
    description: "From foundational arithmetic to advanced calculus, building logical reasoning and problem-solving skills.",
    icon: Calculator,
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50",
    highlights: ["Calculus", "Geometry", "Statistics"],
  },
  {
    id: 3,
    title: "Natural Sciences",
    category: "STEM",
    description: "Hands-on exploration of biology, chemistry, and physics, understanding God's creation through scientific inquiry.",
    icon: Microscope,
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-50",
    highlights: ["Lab Work", "Research Projects", "Field Studies"],
  },
  {
    id: 4,
    title: "Theology & Philosophy",
    category: "Faith Formation",
    description: "Study of Catholic doctrine, sacred scripture, and philosophical traditions from Aquinas to modern thinkers.",
    icon: Feather,
    color: "from-amber-500 to-amber-700",
    bgColor: "bg-amber-50",
    highlights: ["Sacred Scripture", "Moral Theology", "Apologetics"],
  },
  {
    id: 5,
    title: "Fine Arts",
    category: "Arts",
    description: "Cultivating creativity through visual arts, drama, and music in the classical tradition.",
    icon: Palette,
    color: "from-pink-500 to-pink-700",
    bgColor: "bg-pink-50",
    highlights: ["Studio Art", "Drama", "Art History"],
  },
  {
    id: 6,
    title: "Music & Liturgy",
    category: "Arts",
    description: "Training in sacred music, choir, and instrumental performance to enhance worship and cultural appreciation.",
    icon: Music,
    color: "from-indigo-500 to-indigo-700",
    bgColor: "bg-indigo-50",
    highlights: ["Choir", "Instrumental", "Music Theory"],
  },
  {
    id: 7,
    title: "Languages",
    category: "Humanities",
    description: "Latin, Greek, and modern languages to connect with classical texts and global communities.",
    icon: Globe,
    color: "from-teal-500 to-teal-700",
    bgColor: "bg-teal-50",
    highlights: ["Latin", "Greek", "Spanish/French"],
  },
  {
    id: 8,
    title: "Rhetoric & Composition",
    category: "Humanities",
    description: "Mastering the art of persuasive communication through classical rhetoric and writing excellence.",
    icon: GraduationCap,
    color: "from-red-500 to-red-700",
    bgColor: "bg-red-50",
    highlights: ["Public Speaking", "Debate", "Composition"],
  },
];

export default function ProgramsSection() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(true);
      
      // Close book after 2 seconds
      setTimeout(() => {
        setIsOpen(false);
        
        // Move to next book after closing
        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % programs.length);
        }, 500);
      }, 2000);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const activeProgram = programs[activeIndex];

  return (
    <section className="relative py-20 bg-linear-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
          >
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
              Academic Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-gray-900">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-700 to-blue-800 italic">
              Programs
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            A comprehensive curriculum rooted in the classical tradition, preparing students for academic excellence and virtuous living.
          </motion.p>
        </motion.div>

        {/* Books Animation Area */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Book Animation */}
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Books coming from right */}
              <div className="absolute inset-0 flex items-center justify-end overflow-hidden">
                {programs.map((program, index) => {
                  const isActive = index === activeIndex;
                  const isPrev = index === (activeIndex - 1 + programs.length) % programs.length;
                  const isNext = index === (activeIndex + 1) % programs.length;
                  const isNextNext = index === (activeIndex + 2) % programs.length;

                  let position = "hidden";
                  let translateX = "100%";
                  let delay = 0;

                  if (isActive) {
                    position = "active";
                    translateX = "0%";
                  } else if (isPrev) {
                    position = "prev";
                    translateX = "-120%";
                  } else if (isNext) {
                    position = "next";
                    translateX = "60%";
                    delay = 0.2;
                  } else if (isNextNext) {
                    position = "nextNext";
                    translateX = "120%";
                    delay = 0.4;
                  }

                  return (
                    <motion.div
                      key={program.id}
                      className="absolute"
                      initial={{ x: "200%", rotateY: 0 }}
                      animate={{
                        x: translateX,
                        rotateY: isActive && isOpen ? -25 : 0,
                        scale: isActive ? 1 : 0.8,
                        opacity: position === "hidden" ? 0 : 1,
                        zIndex: isActive ? 10 : 1,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: delay,
                        ease: "easeInOut",
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      {/* Book */}
                      <div className="relative" style={{ transformStyle: "preserve-3d" }}>
                        {/* Book Spine & Cover */}
                        <div
                          className={cn(
                            "w-64 h-80 rounded-r-lg shadow-2xl transition-all duration-500",
                            `bg-linear-to-br ${program.color}`,
                            "flex flex-col items-center justify-center p-6 relative overflow-hidden"
                          )}
                          style={{
                            boxShadow: isActive
                              ? "20px 20px 60px rgba(0,0,0,0.3), -5px 0 20px rgba(0,0,0,0.1)"
                              : "10px 10px 30px rgba(0,0,0,0.2)",
                          }}
                        >
                          {/* Book Texture Overlay */}
                          <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: `repeating-linear-gradient(
                              90deg,
                              transparent,
                              transparent 2px,
                              rgba(255,255,255,0.1) 2px,
                              rgba(255,255,255,0.1) 4px
                            )`
                          }} />

                          {/* Spine Decoration */}
                          <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/20" />
                          
                          {/* Book Content */}
                          <div className="relative z-10 text-center text-white">
                            <program.icon className="w-16 h-16 mx-auto mb-4 drop-shadow-lg" />
                            <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                            <p className="text-sm opacity-90 font-medium">{program.category}</p>
                          </div>

                          {/* Book Pages (visible when open) */}
                          <AnimatePresence>
                            {isActive && isOpen && (
                              <motion.div
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                exit={{ scaleX: 0, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute left-0 top-0 bottom-0 w-full bg-linear-to-br from-amber-50 to-yellow-50 origin-left shadow-inner"
                                style={{
                                  transformStyle: "preserve-3d",
                                  transform: "translateZ(-10px)",
                                  boxShadow: "-10px 0 20px rgba(0,0,0,0.15), inset 2px 0 10px rgba(0,0,0,0.05)",
                                }}
                              >
                                {/* Page Content */}
                                <div className="h-full p-6 overflow-hidden relative">
                                  {/* Page header line */}
                                  <div className="border-b-2 border-blue-200 mb-4 pb-2">
                                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                                      {program.category}
                                    </div>
                                  </div>

                                  {/* Page content - simulated text lines */}
                                  <div className="space-y-2">
                                    {program.highlights.map((highlight, idx) => (
                                      <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                        className="flex items-start gap-2"
                                      >
                                        <span className="text-blue-600 font-bold text-sm">•</span>
                                        <span className="text-xs text-gray-700 font-medium leading-relaxed">
                                          {highlight}
                                        </span>
                                      </motion.div>
                                    ))}
                                  </div>

                                  {/* Decorative page number */}
                                  <div className="absolute bottom-4 right-6 text-xs text-gray-400 font-serif italic">
                                    {program.id}
                                  </div>

                                  {/* Decorative corner bookmark */}
                                  <div 
                                    className="absolute top-0 right-0 w-0 h-0 border-t-40px border-r-40px opacity-30"
                                    style={{
                                      borderTopColor: program.color.includes('blue') ? '#3b82f6' : 
                                                     program.color.includes('purple') ? '#a855f7' :
                                                     program.color.includes('green') ? '#10b981' :
                                                     program.color.includes('amber') ? '#f59e0b' :
                                                     program.color.includes('pink') ? '#ec4899' :
                                                     program.color.includes('indigo') ? '#6366f1' :
                                                     program.color.includes('teal') ? '#14b8a6' : '#ef4444',
                                      borderRightColor: 'transparent',
                                    }}
                                  />

                                  {/* Page lines texture */}
                                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                                    backgroundImage: `repeating-linear-gradient(
                                      0deg,
                                      transparent,
                                      transparent 22px,
                                      rgba(59, 130, 246, 0.3) 22px,
                                      rgba(59, 130, 246, 0.3) 23px
                                    )`,
                                    backgroundPosition: '0 40px',
                                  }} />

                                  {/* Left margin line */}
                                  <div className="absolute left-8 top-0 bottom-0 w-px bg-red-200 opacity-40" />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Program Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProgram.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Category Badge */}
                  <div className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full", activeProgram.bgColor)}>
                    <activeProgram.icon className="w-4 h-4" />
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      {activeProgram.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                    {activeProgram.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {activeProgram.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProgram.highlights.map((highlight, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm"
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/programs"
                    className={cn(
                      "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white",
                      `bg-linear-to-r ${activeProgram.color}`,
                      "hover:shadow-xl hover:scale-105 transition-all duration-300"
                    )}
                  >
                    Explore Program
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="flex gap-2 pt-8">
                {programs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      index === activeIndex ? "w-12 bg-blue-600" : "w-6 bg-gray-300 hover:bg-gray-400"
                    )}
                    aria-label={`Go to program ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* View All Programs CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-16"
          >
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              <BookOpen className="w-5 h-5" />
              View All Programs
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}