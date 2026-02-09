"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, User, Mail, Phone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Form Header */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Send Us a Message
        </h2>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitted}
              placeholder="John Doe"
              className={cn(
                "w-full px-4 py-3 pl-12 rounded-xl border-2 border-gray-200",
                "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                "text-gray-900 placeholder:text-gray-400",
                "transition-all duration-300",
                "disabled:bg-gray-100 disabled:cursor-not-allowed"
              )}
            />
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Email & Phone Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitted}
                placeholder="john@example.com"
                className={cn(
                  "w-full px-4 py-3 pl-12 rounded-xl border-2 border-gray-200",
                  "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                  "text-gray-900 placeholder:text-gray-400",
                  "transition-all duration-300",
                  "disabled:bg-gray-100 disabled:cursor-not-allowed"
                )}
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitted}
                placeholder="(555) 123-4567"
                className={cn(
                  "w-full px-4 py-3 pl-12 rounded-xl border-2 border-gray-200",
                  "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                  "text-gray-900 placeholder:text-gray-400",
                  "transition-all duration-300",
                  "disabled:bg-gray-100 disabled:cursor-not-allowed"
                )}
              />
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={isSubmitted}
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 border-gray-200",
              "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
              "text-gray-900",
              "transition-all duration-300",
              "disabled:bg-gray-100 disabled:cursor-not-allowed"
            )}
          >
            <option value="">Select a topic</option>
            <option value="admissions">Admissions Inquiry</option>
            <option value="academics">Academic Programs</option>
            <option value="visit">Schedule a Visit</option>
            <option value="financial">Financial Aid</option>
            <option value="general">General Question</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitted}
              rows={6}
              placeholder="Tell us how we can help you..."
              className={cn(
                "w-full px-4 py-3 pl-12 rounded-xl border-2 border-gray-200",
                "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                "text-gray-900 placeholder:text-gray-400",
                "transition-all duration-300 resize-none",
                "disabled:bg-gray-100 disabled:cursor-not-allowed"
              )}
            />
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className={cn(
            "w-full py-4 rounded-xl font-bold text-lg text-white",
            "bg-gradient-to-r from-blue-600 to-blue-700",
            "hover:from-blue-700 hover:to-blue-800",
            "shadow-lg hover:shadow-xl hover:shadow-blue-600/30",
            "transition-all duration-300 transform hover:scale-[1.02]",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
            "flex items-center justify-center gap-2"
          )}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
              />
              <span>Sending...</span>
            </>
          ) : isSubmitted ? (
            <>
              <Check className="w-6 h-6" />
              <span>Message Sent!</span>
            </>
          ) : (
            <>
              <Send className="w-6 h-6" />
              <span>Send Message</span>
            </>
          )}
        </button>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 border-2 border-green-200 rounded-xl text-center"
          >
            <p className="text-green-700 font-semibold">
              ✓ Thank you! We've received your message and will respond soon.
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}