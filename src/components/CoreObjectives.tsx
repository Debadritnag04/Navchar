import { CheckCircle2 } from "lucide-react";

const objectives = [
  "End-to-end HR and manpower services with full statutory compliance.",
  "IT and digital transformation for operational efficiency.",
  "Technology-enabled process optimization for logistics and supply chain.",
  "Strategic consulting and data-driven automation solutions.",
  "Structured services for Govt departments, PSUs, and Private sectors.",
  "Strengthening capabilities through continuous skill development.",
  "Support for Startups, MSMEs, and Enterprises.",
  "Long-term professional engagements based on transparency."
];

const CoreObjectives = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Strategic <span className="text-gradient">Objectives</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Committed to excellence in every aspect of our service delivery
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg hero-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {objective}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreObjectives;
