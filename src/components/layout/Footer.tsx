"use client";

import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  GraduationCap
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = {
  ourSchool: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Staff Directory", href: "/staff" },
    { label: "Careers", href: "/careers" },
    { label: "Alumni", href: "/alumni" },
  ],
  admissions: [
    { label: "How to Apply", href: "/admissions/apply" },
    { label: "Tuition & Aid", href: "/admissions/tuition" },
    { label: "Visit Campus", href: "/admissions/visit" },
    { label: "Parent Portal", href: "/portal" },
    { label: "Athletics", href: "/athletics" },
  ],
  quickLinks: [
    { label: "Calendar", href: "/calendar" },
    { label: "News & Events", href: "/news" },
    { label: "Gallery", href: "/gallery" },
    { label: "Resources", href: "/resources" },
    { label: "Support Us", href: "/donate" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-blue-400" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-600" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "hover:bg-red-600" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-b from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-16 md:h-20 fill-blue-50"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C240,64 480,64 720,32 C960,0 1200,0 1440,32 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* School Info - Spans 4 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            {/* Logo/Name */}
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">St. Hithub</h3>
                <p className="text-blue-200 text-sm">Truth. Service.</p>
              </div>
            </Link>

            {/* Description */}
            <p className="text-blue-100 mb-6 leading-relaxed">
              Rooted in tradition, looking toward the future. We empower students to
              lead with faith, integrity, and intellectual curiosity.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-blue-100 hover:text-white transition-colors group"
              >
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 group-hover:text-yellow-400 transition-colors" />
                <span className="text-sm">
                  1260 Nutmeg Street<br />
                  Abuja FCT, CA 92104<br />
                  Nigeria.
                </span>
              </a>

              <a
                href="tel:+16193922184"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
                <span className="text-sm">(619) 392-2184</span>
              </a>

              <a
                href="mailto:info@sths.org"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
                <span className="text-sm">info@sths.org</span>
              </a>
            </div>
          </motion.div>

          {/* Our School Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Our School</h3>
            <ul className="space-y-3">
              {footerLinks.ourSchool.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Admissions Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Admissions</h3>
            <ul className="space-y-3">
              {footerLinks.admissions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <Link
            href="/admissions/visit"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold",
              "bg-yellow-400 text-gray-900 hover:bg-yellow-500",
              "shadow-lg shadow-yellow-400/30 hover:shadow-xl hover:shadow-yellow-400/40",
              "transition-all duration-300 transform hover:scale-105"
            )}
          >
            <GraduationCap className="w-5 h-5" />
            Schedule a Visit
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-blue-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-blue-200 text-sm text-center md:text-left"
          >
            © {currentYear} St. Hithub Academy. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={cn(
                  "w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center",
                  "hover:text-white transition-all duration-300 transform hover:scale-110",
                  social.color
                )}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm"
          >
            {legalLinks.map((link, index) => (
              <span key={link.label} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="text-blue-600">•</span>
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}