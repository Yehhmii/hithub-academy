import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import ProgramsSection from "@/components/sections/home/ProgramsSection";
import HistorySection from "@/components/sections/home/HistorySection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import NewsletterSection from "@/components/sections/home/NewsletterSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <HistorySection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}