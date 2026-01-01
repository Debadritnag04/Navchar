import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";
import navacharLogo from "@/assets/navachar-logo.jpeg";
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
          {/* Left Column: Text Content */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Atmanirbhar Bharat Aligned
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up" style={
              {
                animationDelay: "0.1s"
              }
            }>
              End-to-End HR & Digital Transformation Solutions
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-10 max-w-2xl animate-slide-up" style={
              {
                animationDelay: "0.2s"
              }
            }>
              Aligning with Digital India, Skill India, and Atmanirbhar Bharat to
              empower businesses and government institutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={
              {
                animationDelay: "0.3s"
              }
            }>
              <Button variant="hero" size="lg" onClick={() => scrollToSection("contact")} className="text-lg px-8">
                Partner With Us
              </Button>
              <Button variant="hero-outline" size="lg" onClick={() => scrollToSection("vision-mission")} className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Column: Logo */}
          <div className="flex items-start justify-center mt-16">
            <img 
              src={navacharLogo} 
              alt="Navachar Logo" 
              className="h-56 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default HeroSection;