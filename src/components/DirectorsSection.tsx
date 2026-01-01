import { User } from "lucide-react";
import subhajitRoyImg from "@/assets/subhajit-roy.png";
import tamashaChatterjeeImg from "@/assets/tamasha-chatterjee.png";

const directors = [
  {
    name: "RAJKUMAR MISTRI",
    din: "11441616",
    message:
      "Focuses on establishing a robust, compliant, and scalable organizational framework aligned with India's vision of sustainable and self-reliant growth.",
    image: null
  },
  {
    name: "TAMASHA CHATTERJEE",
    din: "11441615",
    message:
      "Oversees human capital and workforce development initiatives, focusing on structured HR solutions, skill development, and inclusive employment.",
    image: tamashaChatterjeeImg
  },
  {
    name: "SUBHAJIT ROY",
    din: "11441614",
    message:
      "Leads technology and innovation initiatives to deliver efficient, scalable, and future-ready digital solutions for enterprises and public institutions.",
    image: subhajitRoyImg
  }
];

const DirectorsSection = () => {
  return (
    <section id="directors" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Board of <span className="text-gradient">Directors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leadership driving innovation and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {directors.map((director, index) => (
            <div
              key={director.din}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/20 card-shadow hover:card-shadow-hover transition-all duration-300 text-center"
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full hero-gradient mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                {director.image ? (
                  <img 
                    src={director.image} 
                    alt={director.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-primary-foreground" />
                )}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {director.name}
              </h3>

              {/* DIN */}
              <p className="text-sm text-muted-foreground mb-4">
                DIN: {director.din}
              </p>

              {/* Separator */}
              <div className="w-12 h-0.5 bg-primary/30 mx-auto mb-4" />

              {/* Message */}
              <p className="text-muted-foreground leading-relaxed text-sm">
                {director.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;
