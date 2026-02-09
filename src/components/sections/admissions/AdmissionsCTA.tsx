"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function AdmissionsCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 w-[80%] mx-auto rounded-2xl mb-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-white mb-6">Have Questions?</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Our admissions team is here to help guide you through the process</motion.p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-white"><Phone className="w-5 h-5" /><span>(619) 392-2184</span></div>
          <div className="flex items-center gap-2 text-white"><Mail className="w-5 h-5" /><span>admissions@sths.org</span></div>
        </div>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 rounded-full font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-xl">Contact Admissions</Link>
      </div>
    </section>
  );
}