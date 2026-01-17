import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, Briefcase, UserCheck, ShieldCheck } from "lucide-react";
import hrStaffImg from "@/assets/hr_staff.png";

const HRStaffing = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-center">
            HR Staffing Solutions
          </h1>
          <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Empowering organizations with the right talent at the right time. Our staffing solutions are designed to meet the dynamic needs of modern businesses and government institutions.
          </p>
        </div>
      </div>

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Recruitment</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Navachar provides end-to-end recruitment services, from executive search to high-volume staffing for large-scale projects. We leverage our extensive database and deep industry knowledge to find candidates who not only have the skills but also fit your culture.
              </p>
              <ul className="space-y-4">
                {[
                  "Executive Search & Headhunting",
                  "Permanent & Temporary Staffing",
                  "Project-based Manpower Supply",
                  "RPO (Recruitment Process Outsourcing)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <UserCheck className="text-accent h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-2xl overflow-hidden self-center shadow-sm">
              <img 
                src={hrStaffImg} 
                alt="HR Staffing" 
                className="w-full h-auto block"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Expert Screening",
                desc: "Rigorous vetting process ensuring technical proficiency and behavioral alignment.",
                icon: ShieldCheck,
              },
              {
                title: "Government Focus",
                desc: "Specialized in manpower supply for large-scale government and PSU initiatives.",
                icon: Briefcase,
              },
              {
                title: "Seamless Onboarding",
                desc: "Handling all compliance, documentation, and training for quick integration.",
                icon: Users,
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-6">Ready to scale your workforce?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact our staffing experts today to discuss your requirements and find the perfect talent for your team.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => navigate("/#contact")}
              className="px-8 text-lg"
            >
              Consult Our Team
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default HRStaffing;
