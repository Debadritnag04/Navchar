import { Target, Rocket } from "lucide-react";

const VisionMission = () => {
  return (
    <section id="vision-mission" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Purpose</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Driving India's growth through innovative solutions and skilled workforce
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div className="group bg-card rounded-2xl p-8 lg:p-10 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary/20">
            <div className="w-16 h-16 rounded-xl hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To contribute to a modern, self-reliant, and digitally empowered India by enabling businesses and institutions through innovative technology, skilled human capital, and efficient operational solutions.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-card rounded-2xl p-8 lg:p-10 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary/20">
            <div className="w-16 h-16 rounded-xl hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To support India's growth journey by delivering technology-driven HR, digital, and operational services that foster entrepreneurship, enhance employability, strengthen organizations, and promote sustainable economic development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
