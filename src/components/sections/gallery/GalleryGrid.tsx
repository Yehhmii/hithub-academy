"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download, Heart, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories } from "./GalleryCategories";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  date: string;
  description?: string;
  tall?: boolean;
  wide?: boolean;
}

// Sample gallery images
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/academics-1.jpg",
    title: "Science Laboratory",
    category: "academics",
    date: "March 2024",
    description: "Students conducting chemistry experiments",
    tall: true,
  },
  {
    id: 2,
    src: "/gallery/athletics-1.jpg",
    title: "Basketball Championship",
    category: "athletics",
    date: "February 2024",
    description: "Winning the district finals",
  },
  {
    id: 3,
    src: "/gallery/faith-1.jpg",
    title: "Morning Mass",
    category: "faith",
    date: "January 2024",
    description: "Daily spiritual formation",
    wide: true,
  },
  {
    id: 4,
    src: "/gallery/arts-1.jpg",
    title: "Spring Concert",
    category: "arts",
    date: "March 2024",
    description: "Annual music performance",
  },
  {
    id: 5,
    src: "/gallery/campus-1.jpg",
    title: "Campus Grounds",
    category: "campus",
    date: "April 2024",
    description: "Beautiful spring day",
    tall: true,
  },
  {
    id: 6,
    src: "/gallery/events-1.jpg",
    title: "Graduation 2024",
    category: "events",
    date: "May 2024",
    description: "Celebrating our graduates",
  },
  {
    id: 7,
    src: "/gallery/science-1.jpg",
    title: "Biology Class",
    category: "science",
    date: "February 2024",
    description: "Hands-on learning",
  },
  {
    id: 8,
    src: "/gallery/athletics-2.jpg",
    title: "Track & Field",
    category: "athletics",
    date: "March 2024",
    description: "Regional championships",
    wide: true,
  },
  // Add more images as needed
];

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const toggleLike = (imageId: number) => {
    setLiked((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(imageId)) {
        newSet.delete(imageId);
      } else {
        newSet.add(imageId);
      }
      return newSet;
    });
  };

  const currentImage = filteredImages.find((img) => img.id === selectedImage);

  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Pills - Integrated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300",
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                )}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid - Masonry Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className={cn(
                  "break-inside-avoid mb-6 group cursor-pointer",
                  image.tall && "row-span-2",
                  image.wide && "col-span-2"
                )}
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-auto">
                    <div
                      className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${image.src})`,
                        minHeight: image.tall ? "600px" : "300px",
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-blue-200 text-sm mb-3">{image.date}</p>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(image.id);
                        }}
                        className="flex items-center gap-1 text-white hover:text-red-400 transition-colors"
                      >
                        <Heart
                          className={cn(
                            "w-5 h-5",
                            liked.has(image.id) && "fill-red-400 text-red-400"
                          )}
                        />
                      </button>
                      <button className="flex items-center gap-1 text-white hover:text-blue-300 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {categories.find((c) => c.id === image.category)?.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Load More Photos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {currentImage.title}
                </h3>
                <p className="text-blue-300 mb-2">{currentImage.date}</p>
                {currentImage.description && (
                  <p className="text-gray-300">{currentImage.description}</p>
                )}

                {/* Actions */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    onClick={() => toggleLike(currentImage.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                  >
                    <Heart
                      className={cn(
                        "w-5 h-5",
                        liked.has(currentImage.id) && "fill-red-400 text-red-400"
                      )}
                    />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}