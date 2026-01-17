import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionMission from "@/components/VisionMission";
import CoreObjectives from "@/components/CoreObjectives";
import DirectorsSection from "@/components/DirectorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VisionMission />
      <CoreObjectives />
      <DirectorsSection />
      <Footer />
    </main>
  );
};

export default Index;
