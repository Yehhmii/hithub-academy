"use client";

import { motion } from "framer-motion";
import { ChevronRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
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
          <span className="text-blue-600 font-medium">Contact Us</span>
        </motion.nav>

        {/* Hero Content */}
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
          >
            <MessageCircle className="w-4 h-4 text-blue-700" />
            <span className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
              Get in Touch
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-gray-900">We'd Love to</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 italic">
              Hear From You
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Whether you have questions about admissions, academics, or our community,
            our team is here to help. Reach out and let's start a conversation.
          </motion.p>
        </div>
      </div>
    </section>
  );
}