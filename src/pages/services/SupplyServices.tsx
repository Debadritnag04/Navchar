import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Truck, Server, Shield, Monitor, FileSearch, Activity, Smartphone } from "lucide-react";

const SupplyServices = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-center">
            Supply & Services
          </h1>
          <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            A comprehensive partner for infrastructure and operational needs. From ICT infrastructure to security and medical equipment, we supply the tools for success.
          </p>
        </div>
      </div>

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "ICT Infrastructure",
                desc: "Complete setup and maintenance of Information and Communication Technology systems.",
                icon: Server,
              },
              {
                title: "Security & Surveillance",
                desc: "State-of-the-art security solutions, including CCTV systems and access control.",
                icon: Shield,
              },
              {
                title: "Hardware & Software",
                desc: "Supplying premium hardware and customized software solutions for diverse needs.",
                icon: Monitor,
              },
              {
                title: "Scan & Digitization",
                desc: "Transforming physical records into secure digital assets for efficient management.",
                icon: FileSearch,
              },
              {
                title: "Medical Equipment",
                desc: "Reliable supply of specialized medical tools and technology for healthcare facilities.",
                icon: Activity,
              },
              {
                title: "Online Services",
                desc: "Supporting digital initiatives and citizen-centric online service delivery.",
                icon: Smartphone,
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-muted/50 rounded-3xl p-8 md:p-12 border border-border">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gradient">General Election Support</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Navachar has specialized expertise in providing logistical and technical support for election processes. We ensure smooth operations through dedicated manpower and reliable equipment supply.
              </p>
              <Button onClick={() => navigate("/#contact")}>Learn About Election Support</Button>
            </div>
            <div className="flex justify-center">
              <Truck className="h-40 w-40 text-primary/20" />
            </div>
          </div>

          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-6">Need a reliable supply partner?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our robust supply chain and technical expertise make us the ideal partner for your infrastructure and equipment needs.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => navigate("/#contact")}
              className="px-8 text-lg"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default SupplyServices;
