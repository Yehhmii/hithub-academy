"use client";

import { motion } from "framer-motion";
import { Award, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const recentDonations = [
  {
    id: 1,
    name: "Anonymous Donor",
    amount: "$10,000",
    purpose: "Scholarship Fund",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "The Johnson Family",
    amount: "$5,000",
    purpose: "New Library Books",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Class of 2010",
    amount: "$15,000",
    purpose: "Athletics Program",
    date: "2 weeks ago",
  },
];

export default function ImpactSection() {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Recent Donations */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-6"
            >
              <Award className="w-4 h-4 text-yellow-700" />
              <span className="text-sm font-semibold text-yellow-900 uppercase tracking-wider">
                Recent Donations
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Your generosity in action
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 mb-8"
            >
              See how our community comes together to support St. Augustine's
              mission and students.
            </motion.p>

            {/* Donation List */}
            <div className="space-y-4">
              {recentDonations.map((donation, index) => (
                <motion.div
                  key={donation.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">
                        {donation.name}
                      </h4>
                      <p className="text-blue-600 font-medium mb-1">
                        {donation.purpose}
                      </p>
                      <p className="text-sm text-gray-500">{donation.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                        {donation.amount}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-sm text-gray-500 mt-6 italic"
            >
              All donations are tax-deductible. St. Augustine is a 501(c)(3)
              non-profit organization.
            </motion.p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            {/* Card */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden relative">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>

              {/* Decorative Cross */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.08, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute top-1/2 right-8 -translate-y-1/2 pointer-events-none"
              >
                <div className="relative w-32 h-32">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-32 bg-white rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-2 bg-white rounded-full" />
                </div>
              </motion.div>

              <div className="relative">
                {/* Heading */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl font-bold text-white mb-6"
                >
                  Questions about giving?
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-blue-100 mb-8"
                >
                  Our team is here to help you make the most impactful donation.
                  Reach out with any questions.
                </motion.p>

                {/* Contact Details */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <MapPin className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-200 mb-1">Address</div>
                      <div className="text-white font-medium">
                        1260 Nutmeg Street<br />
                        San Diego, CA 92104
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Phone className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-200 mb-1">Phone</div>
                      <a
                        href="tel:+16193922184"
                        className="text-white font-medium hover:text-yellow-400 transition-colors"
                      >
                        (619) 392-2184
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Mail className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-200 mb-1">Email</div>
                      <a
                        href="mailto:development@sths.org"
                        className="text-white font-medium hover:text-yellow-400 transition-colors"
                      >
                        development@sths.org
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-8"
                >
                  <a
                    href="tel:+16193922184"
                    className={cn(
                      "block text-center py-4 rounded-full font-bold",
                      "bg-yellow-400 text-gray-900",
                      "hover:bg-yellow-500",
                      "shadow-lg shadow-yellow-400/30 hover:shadow-xl hover:shadow-yellow-500/40",
                      "transition-all duration-300 transform hover:scale-105"
                    )}
                  >
                    Schedule a Call
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}