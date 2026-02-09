"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-blue-700" />
            <span className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
              Find Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Campus
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in the heart of San Diego, our campus is easily accessible and
            features state-of-the-art facilities.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.9875842892684!2d-117.12656492379215!3d32.73274897364089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954d3c3c3c3c3%3A0x1234567890abcdef!2s1260%20Nutmeg%20St%2C%20San%20Diego%2C%20CA%2092104!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="St. Augustine Catholic Secondary School Location"
              className="grayscale-0 hover:grayscale-0 transition-all duration-300"
            />

            {/* Overlay Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-white rounded-2xl p-6 shadow-2xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                St. Augustine Catholic Secondary School
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-700 font-medium">
                      1260 Nutmeg Street
                    </p>
                    <p className="text-gray-600 text-sm">
                      San Diego, CA 92104
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-blue-600" />
                  <p className="text-gray-700">
                    <span className="font-medium">15 min</span> from Downtown San Diego
                  </p>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1260+Nutmeg+Street+San+Diego+CA+92104"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </motion.div>
          </div>

          {/* Parking Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Visitor Parking</h4>
              <p className="text-gray-600 text-sm">
                Free parking available in the main lot. Enter from Nutmeg Street.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Navigation className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Public Transit</h4>
              <p className="text-gray-600 text-sm">
                Accessible via MTS bus routes 10 and 11. Stop at Nutmeg & Main.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Main Entrance</h4>
              <p className="text-gray-600 text-sm">
                Check in at the front office. Visitors must sign in upon arrival.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}