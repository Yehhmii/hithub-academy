"use client";

import { motion } from "framer-motion";
import { ChevronRight, Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DonateHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/donate-hero.jpg)",
          }}
        />
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90" />
        
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
      </div>

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
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link
            href="/"
            className="text-blue-200 hover:text-white transition-colors"
          >
            Programs
          </Link>
          <ChevronRight className="w-4 h-4 text-blue-300" />
          <span className="text-white font-medium">Donate</span>
        </motion.nav>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-8 shadow-xl shadow-yellow-400/30"
          >
            <Heart className="w-10 h-10 text-white fill-white" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Support the Mission.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
              Shape the Future.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Your generosity provides essential support to our students and strengthens our faith-based education. Join us in the noble mission of nurturing young minds and hearts.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="#donate-plans"
              className={cn(
                "inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-lg",
                "bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900",
                "hover:from-yellow-500 hover:to-yellow-600",
                "shadow-2xl shadow-yellow-400/40 hover:shadow-yellow-500/50",
                "transition-all duration-300 transform hover:scale-105"
              )}
            >
              <Heart className="w-6 h-6" />
              Donate Now
            </a>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        >
          <div className="relative w-96 h-96">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-96 bg-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-4 bg-white rounded-full" />
          </div>
        </motion.div>
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