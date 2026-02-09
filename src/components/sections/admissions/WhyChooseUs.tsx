"use client";
import { motion } from "framer-motion";
import { BookOpen, Users, Heart, Trophy } from "lucide-react";

const reasons = [
  { icon: BookOpen, title: "Academic Excellence", description: "Rigorous classical curriculum preparing students for college success" },
  { icon: Heart, title: "Faith Formation", description: "Daily Mass and integrated Catholic teachings throughout all subjects" },
  { icon: Users, title: "Small Classes", description: "15:1 student-teacher ratio ensures personalized attention" },
  { icon: Trophy, title: "Championship Athletics", description: "Competitive sports programs building character and teamwork" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-12">Why Choose St. Augustine?</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}