import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, Award, Target } from "lucide-react";
import skillDevImg from "@/assets/skill-dev.png";

const SkillDevelopment = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-center">
            Skill Development Programs
          </h1>
          <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Bridging the gap between education and employability. Our vocational training and skill-upgrading initiatives empower the youth and professionals for the future.
          </p>
        </div>
      </div>

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src={skillDevImg} 
                alt="Skill Development" 
                className="w-full h-full object-cover aspect-square md:aspect-video lg:aspect-square"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Empowering Future Leaders</h2>
              <p className="text-muted-foreground text-lg mb-6">
                In alignment with 'Skill India', we offer diverse training modules across various sectors. Our programs are designed with industry inputs to ensure that every trainee gains practical, relevant skills.
              </p>
              <ul className="space-y-4">
                {[
                  "Vocational Training Programs",
                  "Corporate Soft Skills Workshops",
                  "Technical Upskilling (ICT & Digital)",
                  "Government Sponsored Skill Schemes",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Target className="text-accent h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Curriculum Design",
                desc: "Customized training modules developed in collaboration with industry experts.",
                icon: BookOpen,
              },
              {
                title: "Certification",
                desc: "Recognized certifications that add significant value to a professional's portfolio.",
                icon: Award,
              },
              {
                title: "Placement Support",
                desc: "Connecting trained individuals with potential employers through our HR network.",
                icon: Target,
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
            <h2 className="text-3xl font-bold mb-6">Invest in Your Potential</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you are an individual looking to upskill or an organization seeking to train your team, we have the right solutions for you.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => navigate("/#contact")}
              className="px-8 text-lg"
            >
              Explore Training Programs
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default SkillDevelopment;
