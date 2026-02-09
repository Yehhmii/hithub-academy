"use client";

import { motion } from "framer-motion";
import { FileText, DollarSign, HelpCircle, Calendar } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const quickLinks = [
  {
    title: "Fees & Scholarships",
    description: "Tuition breakdown, payment plans, and financial aid opportunities",
    icon: DollarSign,
    href: "/admissions/fees",
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-50",
  },
  {
    title: "Application Form",
    description: "Submit your application and required documents online",
    icon: FileText,
    href: "/admissions/apply",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
  },
  {
    title: "FAQs",
    description: "Find answers to commonly asked admission questions",
    icon: HelpCircle,
    href: "/admissions/faq",
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50",
  },
  {
    title: "Important Dates",
    description: "Key deadlines and dates for the admission process",
    icon: Calendar,
    href: "/admissions/dates",
    color: "from-yellow-500 to-yellow-700",
    bgColor: "bg-yellow-50",
  },
];

export default function QuickLinks() {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Admissions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about joining St. Augustine
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href={link.href} className="group block h-full">
                <div className={cn(
                  "h-full p-6 rounded-2xl border-2 border-gray-100 hover:border-blue-200",
                  "bg-white hover:shadow-xl transition-all duration-300",
                  "flex flex-col"
                )}>
                  <div className={cn("inline-flex p-3 rounded-xl mb-4 w-fit", link.bgColor)}>
                    <link.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}