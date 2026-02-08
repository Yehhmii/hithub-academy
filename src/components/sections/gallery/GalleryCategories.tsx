"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  Church, 
  Trophy, 
  Music, 
  Beaker,
  BookOpen,
  Heart,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryCategory {
  id: string;
  name: string;
  icon: any;
  count: number;
}

export const categories: GalleryCategory[] = [
  { id: "all", name: "All Photos", icon: Sparkles, count: 524 },
  { id: "academics", name: "Academics", icon: BookOpen, count: 87 },
  { id: "athletics", name: "Athletics", icon: Trophy, count: 112 },
  { id: "faith", name: "Faith & Service", icon: Church, count: 65 },
  { id: "arts", name: "Arts & Music", icon: Music, count: 73 },
  { id: "science", name: "Science", icon: Beaker, count: 45 },
  { id: "events", name: "Events", icon: Users, count: 98 },
  { id: "campus", name: "Campus Life", icon: Heart, count: 44 },
];

interface GalleryCategoriesProps {
  selectedCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
}

export default function GalleryCategories({
  selectedCategory = "all",
  onCategoryChange,
}: GalleryCategoriesProps) {
  return (
    <section className="relative py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Explore by Category
          </h2>
          <p className="text-gray-600">
            Filter photos by different aspects of school life
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category, index) => {
            const isSelected = selectedCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryChange?.(category.id)}
                className={cn(
                  "group flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300",
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                )}
              >
                <category.icon 
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    isSelected ? "text-white" : "text-blue-600",
                    "group-hover:rotate-12"
                  )} 
                />
                <span>{category.name}</span>
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-blue-100 text-blue-700"
                  )}
                >
                  {category.count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}