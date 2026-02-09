"use client";

import { motion } from "framer-motion";
import { ChevronRight, GraduationCap, FileText, Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AdmissionsHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

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
            className="text-blue-200 hover:text-white transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-blue-300" />
          <span className="text-white font-medium">Admissions</span>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 rounded-full mb-6"
            >
              <GraduationCap className="w-4 h-4 text-gray-900" />
              <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Now Enrolling for 2026-2027
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Begin Your Journey at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 italic">
                St. Augustine
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Join a community where faith, academics, and character formation come
              together. We're excited to welcome your family to our tradition of
              excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/admissions/apply"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg",
                  "bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900",
                  "hover:from-yellow-500 hover:to-yellow-600",
                  "shadow-2xl shadow-yellow-400/40 hover:shadow-yellow-500/50",
                  "transition-all duration-300 transform hover:scale-105"
                )}
              >
                <FileText className="w-5 h-5" />
                Apply Now
              </Link>

              <Link
                href="/admissions/visit"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg",
                  "bg-white/10 backdrop-blur-md text-white border-2 border-white/30",
                  "hover:bg-white/20 hover:border-white/50",
                  "transition-all duration-300"
                )}
              >
                <GraduationCap className="w-5 h-5" />
                Schedule a Visit
              </Link>
            </motion.div>
          </div>

          {/* Right Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: "98%", label: "College Acceptance" },
                  { number: "15:1", label: "Student-Teacher Ratio" },
                  { number: "50+", label: "Years of Excellence" },
                  { number: "100%", label: "Faith Formation" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-blue-200 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Download Brochure */}
              <Link
                href="/brochure.pdf"
                className={cn(
                  "flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold",
                  "bg-white/20 text-white border border-white/30",
                  "hover:bg-white/30 transition-all duration-300"
                )}
              >
                <Download className="w-5 h-5" />
                Download Admissions Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-16 md:h-24 fill-white"
          preserveAspectRatio="none"
        >
          <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}