import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerSection from "@/components/PartnerSection";

const PartnerWithUs = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-center">
            Partner With Us
          </h1>
          <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Empowering organizations with structured solutions. Join forces with Navachar for end-to-end HR and technology transformation.
          </p>
        </div>
      </div>
      <PartnerSection />
      <Footer />
    </main>
  );
};

export default PartnerWithUs;
