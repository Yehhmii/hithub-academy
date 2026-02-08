import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryHero from "@/components/sections/gallery/GalleryHero";
import GalleryGrid from "@/components/sections/gallery/GalleryGrid";
import GalleryCategories from "@/components/sections/gallery/GalleryCategories";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <GalleryHero />
      <GalleryCategories />
      <GalleryGrid />
      <Footer />
    </main>
  );
}