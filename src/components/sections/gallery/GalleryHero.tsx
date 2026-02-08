"use client";

import { motion } from "framer-motion";
import { ChevronRight, Camera, Images } from "lucide-react";
import Link from "next/link";

export default function GalleryHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-blue-50 via-white to-transparent overflow-hidden">
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

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
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
            className="ttext-gray-600 hover:text-blue-600 transition-colors"
          >
            Programs
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-blue-600 font-medium">Gallery</span>
        </motion.nav>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mb-8 shadow-xl shadow-blue-600/30"
          >
            <Camera className="w-10 h-10 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-gray-900">Capturing</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 italic">
              Life at St. Augustine
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Explore the vibrant moments, cherished memories, and inspiring experiences
            that make our school community special.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { icon: Images, number: "500+", label: "Photos" },
              { icon: Camera, number: "50+", label: "Events" },
              { icon: ChevronRight, number: "10+", label: "Categories" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}