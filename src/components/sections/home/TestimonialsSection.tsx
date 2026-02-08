"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, GraduationCap, Heart, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  year: string;
  quote: string;
  image: string;
  rating: number;
  icon: any;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Gonzalez",
    role: "Parent",
    year: "Class of 2024",
    quote: "This blend of academic rigor and spiritual guidance has been a delight and a revelation for our daughter. She's blossomed into a confident, faithful young woman.",
    image: "/testimonial-1.jpg",
    rating: 5,
    icon: Heart,
    color: "from-rose-500 to-pink-600",
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Alumni",
    year: "Class of 2020",
    quote: "The classical education I received prepared me not just for college, but for life. The values and critical thinking skills are invaluable.",
    image: "/testimonial-2.jpg",
    rating: 5,
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    name: "Sarah O'Connor",
    role: "Current Student",
    year: "Junior",
    quote: "I love how our teachers genuinely care about each student. The small class sizes mean I get individual attention and support in my faith journey.",
    image: "/testimonial-3.png",
    rating: 3,
    icon: Users,
    color: "from-green-500 to-teal-600",
  },
  {
    id: 4,
    name: "David Martinez",
    role: "Parent",
    year: "Class of 2025",
    quote: "The community here is extraordinary. Parents, teachers, and students all work together to create an environment where children thrive spiritually and academically.",
    image: "/testimonial-4.jpg",
    rating: 5,
    icon: Heart,
    color: "from-purple-500 to-violet-600",
  },
  {
    id: 5,
    name: "Emily Chen",
    role: "Alumni",
    year: "Class of 2018",
    quote: "St. Augustine gave me a foundation in faith and wisdom that guides me every day. The friendships I made here are lifelong.",
    image: "/testimonial-5.jpg",
    rating: 4,
    icon: GraduationCap,
    color: "from-amber-500 to-orange-600",
  },
];

export default function TestimonialsSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotateCards = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-20 md:py-32 bg-linear-to-b from-white via-blue-50/30 to-white overflow-hidden">
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

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-6"
          >
            <Quote className="w-4 h-4 text-yellow-700" />
            <span className="text-sm font-semibold text-yellow-900 uppercase tracking-wider">
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-gray-900">What Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-700 to-blue-800 italic">
              Community Says
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Hear from parents, students, and alumni about their experiences at St. Augustine.
          </motion.p>
        </motion.div>

        {/* Stacking Cards - Centered */}
        <div className="relative max-w-2xl mx-auto mb-20">
          <div 
            className="relative h-[550px] flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {testimonials.map((testimonial, index) => {
              const position = (index - currentIndex + testimonials.length) % testimonials.length;
              const isVisible = position < 3;
              
              return (
                <motion.div
                  key={testimonial.id}
                  className="absolute"
                  initial={false}
                  animate={{
                    y: isHovered ? position * 120 : position * 10,
                    scale: isHovered ? 1 : 1 - position * 0.03,
                    rotate: isHovered ? 0 : position % 2 === 0 ? -1 : 1,
                    opacity: isVisible ? 1 : 0,
                    zIndex: testimonials.length - position,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                  }}
                  onClick={() => position === 0 && rotateCards()}
                >
                  <div className="relative mx-4 md:mx-0 cursor-pointer">
                    <div
                      className={cn(
                        "relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
                      )}
                    >
                      <div className={cn("h-2 w-full", `bg-linear-to-r ${testimonial.color}`)} />

                      <div className="p-8 md:p-10">
                        <div className="flex items-start gap-6 mb-6">
                          <div className="relative shrink-0">
                            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                              <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${testimonial.image})` }}
                              />
                              <div className={cn("absolute inset-0", `bg-linear-to-br ${testimonial.color}`)} />
                            </div>
                            <div className={cn("absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg", `bg-linear-to-br ${testimonial.color}`)}>
                              <testimonial.icon className="w-5 h-5 text-white" />
                            </div>
                          </div>

                          <div className="flex-1 pt-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                            <p className="text-gray-600 font-medium mb-1">{testimonial.role}</p>
                            <p className="text-sm text-gray-500">{testimonial.year}</p>
                          </div>

                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-gray-400">{index + 1}</span>
                          </div>
                        </div>

                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>

                        <div className="flex items-center gap-2">
                          <div className={cn("h-1 flex-1 rounded-full", `bg-linear-to-r ${testimonial.color}`)} />
                          <div className={cn("w-2 h-2 rounded-full", `bg-linear-to-br ${testimonial.color}`)} />
                          <div className={cn("w-2 h-2 rounded-full", `bg-linear-to-br ${testimonial.color}`)} />
                          <div className={cn("w-2 h-2 rounded-full", `bg-linear-to-br ${testimonial.color}`)} />
                        </div>
                      </div>
                    </div>

                    <div
                      className={cn("absolute -bottom-4 left-4 right-4 h-full rounded-3xl -z-10 opacity-30", `bg-linear-to-br ${testimonial.color}`)}
                      style={{ filter: "blur(20px)" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            className="text-center text-gray-500 text-sm mt-6"
          >
            Hover to expand • Click to rotate
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Families" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "50+", label: "Years of Excellence" },
              { number: "100%", label: "College Acceptance" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Want to share your experience?</p>
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Quote className="w-5 h-5" />
            Submit Your Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}