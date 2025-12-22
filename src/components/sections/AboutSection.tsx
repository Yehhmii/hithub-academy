"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Book, Heart, Users, Cross, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Three main pillars data
const pillarsCards = [
  {
    id: 1,
    title: "ACADEMICS",
    image: "/academics.jpg",
    description: "Excellence in classical education and rigorous scholarship",
    href: "/academics",
    icon: Book,
  },
  {
    id: 2,
    title: "FAITH",
    image: "/faith.jpg",
    description: "Rooted in Catholic traditions and spiritual growth",
    href: "/faith",
    icon: Cross,
    isCenter: true,
  },
  {
    id: 3,
    title: "COMMUNITY",
    image: "/community.jpg",
    description: "Building strong bonds and lifelong friendships",
    href: "/community",
    icon: Users,
  },
];

// Four pillars of excellence data
const excellencePillars = [
  {
    id: 1,
    icon: Book,
    title: "Intellectual",
    description:
      "Rigorous study of the Great Books and classical disciplines to cultivate wisdom and critical thinking.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    icon: Heart,
    title: "Spiritual",
    description:
      "Daily Mass, prayer, and ongoing faith formation rooted in authentic Catholic teaching.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 3,
    icon: Users,
    title: "Human",
    description:
      "Fostering virtue, friendship, and character to cultivate authentic community.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: 4,
    icon: Cross,
    title: "Apostolic",
    description:
      "Service to the community and preparation for leading others to truth and goodness.",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const pillarsRef = useRef(null);
  
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 md:py-0 bg-linear-to-b from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(37, 99, 235) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
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
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
              Excellence Through Faith & Learning
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-gray-900">Faith, Wisdom,</span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-700 to-blue-800 italic">
              and Community
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            A classical education for the modern world, blending ancient tradition
            with future-ready skills in a warm, welcoming environment.
          </motion.p>
        </motion.div>

        {/* Three Pillars Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-7xl mx-auto">
          {pillarsCards.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              className={cn(
                "relative group h-[400px] md:h-[500px]",
                pillar.isCenter && "md:scale-105"
              )}
            >
              <Link href={pillar.href} className="block h-full">
                {/* Card Container with Clip Path */}
                <div
                  className={cn(
                    "relative h-full overflow-hidden transition-all duration-500",
                    "group-hover:scale-[1.02]",
                    // Different clip shapes for variety
                    pillar.id === 1 && "rounded-t-[120px] rounded-b-3xl",
                    pillar.id === 2 && "rounded-t-[80px] rounded-b-[80px]",
                    pillar.id === 3 && "rounded-t-[120px] rounded-b-3xl"
                  )}
                  style={{
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${pillar.image})`,
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent" />

                  {/* Hover Overlay Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-blue-600/20"
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                    {/* Icon */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={cardsInView ? { y: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                      className="mb-4 p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/30"
                    >
                      <pillar.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={cardsInView ? { y: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                      className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wider"
                    >
                      {pillar.title}
                    </motion.h3>

                    {/* Description - Shows on hover */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="text-blue-50 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      {pillar.description}
                    </motion.p>

                    {/* Arrow indicator */}
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="text-white text-2xl">↓</span>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mb-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-3 bg-white rounded-full shadow-lg border border-gray-100"
          >
            <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-blue-600 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Our Pillars of Excellence Section */}
        <motion.div
          ref={pillarsRef}
          initial={{ opacity: 0 }}
          animate={pillarsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={pillarsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-6"
            >
              <span className="text-sm font-semibold text-yellow-900 uppercase tracking-wider">
                ✦ Our Mission
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Pillars of Excellence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Rooted in tradition, we nurture the whole person through four key
              dimensions of formation.
            </motion.p>
          </div>

          {/* Excellence Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
            {excellencePillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "inline-flex p-4 rounded-xl mb-6",
                      pillar.bgColor,
                      "group-hover:shadow-lg transition-shadow duration-300"
                    )}
                  >
                    <pillar.icon
                      className={cn(
                        "w-8 h-8",
                        `bg-clip-text bg-linear-to-br ${pillar.color}`
                      )}
                      style={{
                        filter: `drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))`,
                      }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Decorative Bottom Border */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "absolute bottom-0 left-0 h-1 rounded-b-2xl",
                      `bg-linear-to-r ${pillar.color}`
                    )}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}