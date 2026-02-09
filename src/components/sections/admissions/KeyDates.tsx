"use client";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const dates = [
  { date: "January 15", event: "Application Opens" },
  { date: "March 1", event: "Application Deadline" },
  { date: "March 15", event: "Entrance Exams" },
  { date: "April 1", event: "Decisions Released" },
];

export default function KeyDates() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-8">Key Admission Dates</motion.h2>
        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {dates.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="font-bold text-blue-600 mb-1">{item.date}</div>
              <div className="text-gray-700">{item.event}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}