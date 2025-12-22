"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Faith, Hope",
    subtitle: "Leading the future",
    description:
      "A classical education for the modern world, blending ancient tradition with future-ready skills in a warm, welcoming environment.",
    image: "/hero-1.jpg",
    primaryCTA: { text: "Enroll Today", href: "/admissions" },
    secondaryCTA: { text: "Virtual Tour", href: "/tour" },
  },
  {
    id: 2,
    title: "Excellence in",
    subtitle: "Catholic Education",
    description:
      "Nurturing minds and spirits through rigorous academics, strong values, and a supportive community dedicated to student success.",
    image: "/hero-2.jpg",
    primaryCTA: { text: "Explore Programs", href: "/programs" },
    secondaryCTA: { text: "Learn More", href: "/about" },
  },
  {
    id: 3,
    title: "Building Tomorrow's",
    subtitle: "Leaders",
    description:
      "Empowering students with knowledge, character, and faith to become compassionate leaders who make a positive impact on the world.",
    image: "/hero-3.jpg",
    primaryCTA: { text: "Apply Now", href: "/apply" },
    secondaryCTA: { text: "Meet Our Faculty", href: "/faculty" },
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 }
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Manual autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-50">
      {/* Background Pattern - Subtle Cross/Religious Motif */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(37, 99, 235) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Carousel Container */}
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className="embla__slide relative h-full flex-[0_0_100%]">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                />
                {/* Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
                
                {/* Animated light effect */}
                <motion.div
                  className="absolute top-0 -left-1/4 w-1/2 h-full bg-linear-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ["0%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative h-full container mx-auto px-4 flex items-center">
                <div className="max-w-3xl">
                  <AnimatePresence mode="wait">
                    {currentIndex === index && (
                      <motion.div
                        key={slide.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        {/* Badge */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/90 backdrop-blur-sm rounded-full mb-6"
                        >
                          <span className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse" />
                          <span className="text-sm font-semibold text-gray-900">
                            Accepting Applications for Fall 2025
                          </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.8 }}
                          className="text-5xl md:text-7xl font-bold mb-4"
                        >
                          <span className="text-white block leading-tight">
                            {slide.title}
                          </span>
                          <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-500 italic block leading-tight">
                            {slide.subtitle}
                          </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                          className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl leading-relaxed"
                        >
                          {slide.description}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7, duration: 0.8 }}
                          className="flex flex-wrap gap-4"
                        >
                          <a
                            href={slide.primaryCTA.href}
                            className={cn(
                              "group px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg",
                              "hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/50",
                              "transition-all duration-300 transform hover:scale-105",
                              "flex items-center gap-2"
                            )}
                          >
                            {slide.primaryCTA.text}
                            <motion.span
                              animate={{ x: [0, 5, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              →
                            </motion.span>
                          </a>

                          {slide.secondaryCTA && (
                            <a
                              href={slide.secondaryCTA.href}
                              className={cn(
                                "group px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg",
                                "border-2 border-white/30 hover:bg-white/20 hover:border-white/50",
                                "transition-all duration-300",
                                "flex items-center gap-2"
                              )}
                            >
                              <Play className="w-5 h-5" />
                              {slide.secondaryCTA.text}
                            </a>
                          )}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Decorative Cross Element - Subtle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.05, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute top-1/2 right-[10%] -translate-y-1/2 hidden xl:block"
              >
                <div className="relative w-64 h-64">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-64 bg-white rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-4 bg-white rounded-full" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between max-w-3xl">
            {/* Carousel Indicators */}
            <div className="flex gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className="group relative"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={cn(
                      "w-12 h-1.5 rounded-full transition-all duration-300",
                      currentIndex === index
                        ? "bg-yellow-400"
                        : "bg-white/30 group-hover:bg-white/50"
                    )}
                  />
                  {currentIndex === index && (
                    <motion.div
                      className="absolute inset-0 w-12 h-1.5 bg-yellow-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className={cn(
                  "p-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full",
                  "hover:bg-white/20 transition-all duration-300",
                  "text-white"
                )}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={scrollNext}
                className={cn(
                  "p-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full",
                  "hover:bg-white/20 transition-all duration-300",
                  "text-white"
                )}
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Clipper */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 md:h-32 fill-white"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
}