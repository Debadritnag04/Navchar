import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Code, Smartphone, Globe, Building2, Rocket, Layout, Search } from "lucide-react";

const DigitalSolutions = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-center">
            Digital Solutions
          </h1>
          <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Transforming businesses for the digital age. From custom web and app development to seamless company registration, we provide the tech foundation for your growth.
          </p>
        </div>
      </div>

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-6">Custom Web & App Development</h2>
              <p className="text-muted-foreground text-lg mb-6">
                We build high-performance, scalable digital products that drive results. Our team of expert developers uses the latest technologies to create custom websites and mobile applications tailored to your specific business needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: "Web Apps" },
                  { icon: Smartphone, label: "Mobile Apps" },
                  { icon: Layout, label: "UI/UX Design" },
                  { icon: Search, label: "SEO Optimized" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-primary font-medium">
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-xl">
                <Code className="h-48 w-full text-primary/10" />
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-24 border border-border">
            <div className="max-w-3xl mx-auto text-center">
              <Building2 className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Company Registration Services</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Starting a new venture? We simplify the legal and administrative complexities of company registration. Our experts guide you through every step, ensuring full compliance and a smooth start for your business.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-10">
                {[
                  "PVT LTD Registration",
                  "LLP Formation",
                  "GST Registration",
                  "MSME & Startup India",
                  "Compliance Management",
                  "Trademark Filing",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" onClick={() => navigate("/#contact")}>Talk to a Business Expert</Button>
            </div>
          </div>

          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-6">Let's build your digital future</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              From the first line of code to legal incorporation, we are here to support your journey.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => navigate("/#contact")}
              className="px-8 text-lg"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default DigitalSolutions;
