import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Have a question or want to learn more about our services? Reach out to us today.
          </p>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Contact;
