import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdmissionsHero from "@/components/sections/admissions/AdmissionsHero";
import AdmissionSteps from "@/components/sections/admissions/AdmissionSteps";
import KeyDates from "@/components/sections/admissions/KeyDates";
import QuickLinks from "@/components/sections/admissions/QuickLinks";
import WhyChooseUs from "@/components/sections/admissions/WhyChooseUs";
import AdmissionsCTA from "@/components/sections/admissions/AdmissionsCTA";

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AdmissionsHero />
      <AdmissionSteps />
      <QuickLinks />
      <KeyDates />
      <WhyChooseUs />
      <AdmissionsCTA />
      <Footer />
    </main>
  );
}