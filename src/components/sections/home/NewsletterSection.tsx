"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="relative py-20 md:py-32 bg-linear-to-b from-white to-blue-50 overflow-hidden">
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

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Newsletter Card */}
          <div className="relative bg-linear-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-blue-100 overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Content */}
            <div className="relative text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 shadow-lg shadow-blue-600/30"
              >
                <Mail className="w-8 h-8 text-white" />
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              >
                Stay Connected with{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-800">
                  St. Hithub
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                Subscribe to our weekly newsletter for updates on school events,
                student achievements, and community news.
              </motion.p>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              >
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={isSubmitted}
                    className={cn(
                      "w-full px-6 py-4 rounded-full border-2 border-gray-200",
                      "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                      "text-gray-900 placeholder:text-gray-400",
                      "transition-all duration-300",
                      "disabled:bg-gray-100 disabled:cursor-not-allowed"
                    )}
                  />
                  <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted || isLoading}
                  className={cn(
                    "px-8 py-4 rounded-full font-semibold text-white",
                    "bg-linear-to-r from-blue-600 to-blue-700",
                    "hover:from-blue-700 hover:to-blue-800",
                    "hover:shadow-xl hover:shadow-blue-600/30",
                    "transition-all duration-300",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "flex items-center justify-center gap-2 min-w-[140px]",
                    "transform hover:scale-105"
                  )}
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </motion.form>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-green-600 font-medium"
                >
                  ✓ Thank you for subscribing! Check your email for confirmation.
                </motion.div>
              )}

              {/* Privacy Note */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-6 text-sm text-gray-500"
              >
                We respect your privacy. Unsubscribe at any time.
              </motion.p>
            </div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute top-8 right-8 w-24 h-24 pointer-events-none hidden md:block"
            >
              <div className="relative w-full h-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-24 bg-blue-600 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-2 bg-blue-600 rounded-full" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}