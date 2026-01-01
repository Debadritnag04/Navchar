import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10 shadow-sm"
          : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Text */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors font-semibold text-lg tracking-wide"
          >
            NAVACHAR HR & Technology
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("vision-mission")}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
            >
              Vision & Mission
            </button>
            <button
              onClick={() => scrollToSection("directors")}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
            >
              Directors
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              variant="nav"
              size="default"
              onClick={() => scrollToSection("contact")}
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10 shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("vision-mission")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium py-2 text-left"
              >
                Vision & Mission
              </button>
              <button
                onClick={() => scrollToSection("directors")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium py-2 text-left"
              >
                Directors
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium py-2 text-left"
              >
                Contact
              </button>
              <Button
                variant="nav"
                size="default"
                onClick={() => scrollToSection("contact")}
                className="w-full"
              >
                Partner With Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
