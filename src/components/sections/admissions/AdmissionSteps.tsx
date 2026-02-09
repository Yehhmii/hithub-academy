"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  ClipboardCheck, 
  Users, 
  CheckCircle,
  Calendar,
  DollarSign
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Submit Application",
    description: "Complete our online application form and submit required documents including transcripts and recommendations.",
    icon: FileText,
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    title: "Entrance Assessment",
    description: "Schedule and complete the entrance exam to assess academic readiness and placement.",
    icon: ClipboardCheck,
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50",
  },
  {
    id: 3,
    title: "Family Interview",
    description: "Meet with our admissions team to discuss your family's goals and our school's mission and values.",
    icon: Users,
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-50",
  },
  {
    id: 4,
    title: "Admission Decision",
    description: "Receive your admission decision and welcome packet with enrollment information.",
    icon: CheckCircle,
    color: "from-yellow-500 to-yellow-700",
    bgColor: "bg-yellow-50",
  },
  {
    id: 5,
    title: "Enrollment & Payment",
    description: "Complete enrollment paperwork and submit deposit to secure your child's place.",
    icon: DollarSign,
    color: "from-red-500 to-red-700",
    bgColor: "bg-red-50",
  },
  {
    id: 6,
    title: "Welcome Orientation",
    description: "Attend new student orientation to meet teachers, tour campus, and prepare for the school year.",
    icon: Calendar,
    color: "from-indigo-500 to-indigo-700",
    bgColor: "bg-indigo-50",
  },
];

export default function AdmissionSteps() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
          >
            <ClipboardCheck className="w-4 h-4 text-blue-700" />
            <span className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
              Admission Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Your Path to St. Augustine
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-600"
          >
            Follow these simple steps to join our faith-centered community of learners.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.id}
                </div>

                {/* Icon */}
                <div
                  className={cn(
                    "inline-flex p-4 rounded-2xl mb-6",
                    step.bgColor,
                    "group-hover:scale-110 transition-transform duration-300"
                  )}
                >
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative Bottom Border */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    `bg-gradient-to-r ${step.color}`
                  )}
                />
              </div>

              {/* Connecting Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to get started?
          </p>
          <a
            href="/admissions/apply"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <FileText className="w-5 h-5" />
            Start Your Application
          </a>
        </motion.div>
      </div>
    </section>
  );
}