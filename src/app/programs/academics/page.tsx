import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AcademicsHero from "@/components/sections/academics/AcademicsHero";
import AcademicPrograms from "@/components/sections/academics/AcademicPrograms";
import JourneyCallToAction from "@/components/sections/academics/JourneyCallToAction";

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AcademicsHero />
      <AcademicPrograms />
      <JourneyCallToAction />
      <Footer />
    </main>
  );
}