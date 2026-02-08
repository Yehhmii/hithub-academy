"use client";

import { motion } from "framer-motion";
import { Heart, Check, Sparkles, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface DonationPlan {
  id: number;
  badge?: string;
  title: string;
  amount: string;
  frequency: string;
  description: string;
  benefits: string[];
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  featured?: boolean;
}

const donationPlans: DonationPlan[] = [
  {
    id: 1,
    title: "One-time donation",
    amount: "Any",
    frequency: "amount",
    description: "Make a single contribution to support our mission and students.",
    benefits: [
      "Support present school needs",
      "Tax-deductible receipt",
      "Put the funds to use today"
    ],
    icon: Heart,
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 2,
    badge: "POPULAR",
    title: "Monthly support",
    amount: "$25",
    frequency: "/ month",
    description: "Become a sustaining partner with ongoing monthly contributions.",
    benefits: [
      "Consistent ongoing impact",
      "Easy recurring donations",
      "Annual donor recognition"
    ],
    icon: TrendingUp,
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-300",
    featured: true,
  },
  {
    id: 3,
    title: "Sponsor a student",
    amount: "$500",
    frequency: "/ one-time",
    description: "Directly impact a student's education and future success.",
    benefits: [
      "Direct scholarship impact",
      "Support student progress",
      "Fulfillable by student's family"
    ],
    icon: Sparkles,
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
];

export default function DonationPlans() {
  return (
    <section id="donate-plans" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
          >
            <Heart className="w-4 h-4 text-blue-700" />
            <span className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
              Ways to Give
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Choose Your Impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Every contribution makes a difference in our students' lives
          </motion.p>
        </motion.div>

        {/* Donation Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto cursor-pointer">
          {donationPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className={cn(
                "relative group",
                plan.featured && "md:-mt-4"
              )}
            >
              <div
                className={cn(
                  "relative h-full bg-white rounded-3xl border-2 overflow-hidden",
                  "transition-all duration-500",
                  plan.featured 
                    ? "border-yellow-300 shadow-2xl shadow-yellow-200/50 hover:shadow-yellow-300/60" 
                    : `${plan.borderColor} shadow-lg hover:shadow-xl`,
                  "hover:-translate-y-2"
                )}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute top-6 right-6 z-10">
                    <div className="px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full shadow-lg">
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Colored Top Section */}
                <div className={cn("relative p-8 pb-6", plan.bgColor)}>
                  {/* Icon */}
                  <div
                    className={cn(
                      "inline-flex p-4 rounded-2xl mb-4 shadow-lg",
                      `bg-gradient-to-br ${plan.color}`
                    )}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {plan.title}
                  </h3>

                  {/* Amount */}
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.amount}
                    </span>
                    <span className="text-xl text-gray-600 mb-2">
                      {plan.frequency}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Benefits Section */}
                <div className="p-8 pt-6">
                  <ul className="space-y-4 mb-8">
                    {plan.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={cn(
                            "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5",
                            plan.featured ? "bg-yellow-400" : plan.bgColor
                          )}
                        >
                          <Check className={cn("w-4 h-4", plan.featured ? "text-gray-900" : "text-blue-600")} />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={cn(
                      "w-full py-4 rounded-full font-bold text-lg",
                      "transition-all duration-300 transform hover:scale-105 cursor-pointer",
                      plan.featured
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 shadow-lg shadow-yellow-400/30 hover:shadow-xl hover:shadow-yellow-500/40"
                        : `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl`
                    )}
                  >
                    {plan.id === 2 ? "Start Monthly" : "Give Now"}
                  </button>
                </div>

                {/* Hover Gradient Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none",
                    `bg-gradient-to-br ${plan.color}`
                  )}
                />
              </div>

              {/* Decorative shadow for featured card */}
              {plan.featured && (
                <div className="absolute -bottom-6 left-4 right-4 h-full bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl -z-10 opacity-20 blur-xl" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}