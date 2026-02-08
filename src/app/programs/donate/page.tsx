import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DonateHero from "@/components/sections/donate/DonateHero";
import DonationPlans from "@/components/sections/donate/DonationPlans";
import ImpactSection from "@/components/sections/donate/ImpactSection";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <DonateHero />
      <DonationPlans />
      <ImpactSection />
      <Footer />
    </main>
  );
}