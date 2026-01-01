import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionMission from "@/components/VisionMission";
import CoreObjectives from "@/components/CoreObjectives";
import DirectorsSection from "@/components/DirectorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VisionMission />
      <CoreObjectives />
      <DirectorsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
