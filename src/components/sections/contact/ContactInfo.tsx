"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    details: "(619) 392-2184",
    subdetails: "Monday - Friday, 8:00 AM - 4:00 PM",
    href: "tel:+16193922184",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@sths.org",
    subdetails: "We'll respond within 24 hours",
    href: "mailto:info@sths.org",
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-50",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "1260 Nutmeg Street",
    subdetails: "San Diego, CA 92104, United States",
    href: "https://maps.google.com/?q=1260+Nutmeg+Street+San+Diego+CA+92104",
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 4:00 PM" },
  { day: "Saturday", hours: "By Appointment Only" },
  { day: "Sunday", hours: "Closed" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-blue-400" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-600" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "hover:bg-red-600" },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Contact Methods */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Contact Information
        </h2>

        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group block"
            >
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={cn("flex-shrink-0 p-3 rounded-xl", method.bgColor)}>
                  <method.icon className="w-6 h-6 text-blue-600" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    {method.details}
                  </p>
                  <p className="text-sm text-gray-600">
                    {method.subdetails}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Office Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
        </div>

        <div className="space-y-3">
          {officeHours.map((schedule, index) => (
            <motion.div
              key={schedule.day}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="flex items-center justify-between py-3 border-b border-blue-200 last:border-0"
            >
              <span className="font-semibold text-gray-700">{schedule.day}</span>
              <span className="text-blue-600 font-bold">{schedule.hours}</span>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-6 text-sm text-gray-600 italic">
          * During summer break (June-August), hours may vary. Please call ahead.
        </p>
      </motion.div>

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-white rounded-2xl p-8 border-2 border-gray-100"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Connect With Us
        </h3>
        <p className="text-gray-600 mb-6">
          Follow us on social media for daily updates and community highlights
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
              className={cn(
                "w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center",
                "text-gray-600 hover:text-white transition-all duration-300",
                "transform hover:scale-110",
                social.color
              )}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Quick Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-3">
          Prefer to Talk in Person?
        </h3>
        <p className="text-blue-100 mb-6">
          Schedule a campus tour and meet our faculty and students
        </p>
        <a
          href="/admissions/visit"
          className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-full font-bold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <MapPin className="w-5 h-5" />
          Schedule a Visit
        </a>
      </motion.div>
    </motion.div>
  );
}