import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import navacharLogo from "@/assets/navachar-logo.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    {
      title: "HR Staffing",
      path: "/services/hr-staffing",
      items: [],
    },
    {
      title: "Skill Development",
      path: "/services/skill-development",
      items: [],
    },
    {
      title: "Supply & Services",
      path: "/services/supply-services",
      items: [
        "General Election Support",
        "Hardware & Software Solutions",
        "ICT Infrastructure",
        "Security & Surveillance",
        "Scan & Digitization",
        "Medical Equipment",
        "Online Services (Hold)",
      ],
    },
    {
      title: "Digital Solutions",
      path: "/services/digital-solutions",
      items: [
        "Website Development",
        "App Development",
        "Company Registration",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/#" + sectionId);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleServiceClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
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
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center"
          >
            <img 
              src={navacharLogo} 
              alt="Navachar Logo" 
              className="h-11 w-auto object-contain md:h-14"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
            >
              Home
            </button>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium outline-none">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-primary border-primary-foreground/10">
                {services.map((service) => (
                  <React.Fragment key={service.title}>
                    {service.items.length === 0 ? (
                      <DropdownMenuItem
                        className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground focus:bg-primary-foreground/10 focus:text-primary-foreground data-[state=open]:bg-primary-foreground/10 data-[state=open]:text-primary-foreground cursor-pointer transition-all duration-200"
                        onClick={() => handleServiceClick(service.path)}
                      >
                        {service.title}
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger 
                          className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground focus:bg-primary-foreground/10 focus:text-primary-foreground data-[state=open]:bg-primary-foreground/10 data-[state=open]:text-primary-foreground cursor-pointer transition-all duration-200"
                          onClick={() => handleServiceClick(service.path)}
                        >
                          {service.title}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent className="w-56 bg-primary border-primary-foreground/10">
                            {service.items.map((item) => (
                              <DropdownMenuItem
                                key={item}
                                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground focus:bg-primary-foreground/10 focus:text-primary-foreground data-[state=open]:bg-primary-foreground/10 data-[state=open]:text-primary-foreground cursor-pointer transition-all duration-200"
                                onClick={() => handleServiceClick(service.path)}
                              >
                                {item}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    )}
                  </React.Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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
              onClick={() => handleServiceClick("/contact")}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              variant="nav"
              size="default"
              onClick={() => handleServiceClick("/partner-with-us")}
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
          <div className="md:hidden absolute top-16 left-0 right-0 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10 shadow-lg animate-fade-in overflow-y-auto max-h-[calc(100vh-4rem)]">
            <div className="flex flex-col p-4 gap-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium py-2 text-left border-b border-primary-foreground/10"
              >
                Home
              </button>

              {/* Mobile Services Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services" className="border-b border-primary-foreground/10">
                  <AccordionTrigger className="text-primary-foreground hover:text-primary-foreground/80 hover:no-underline font-medium py-2">
                    Services
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2 pl-4 pt-2 pb-2">
                    {services.map((service) => (
                      <div key={service.title} className="flex flex-col gap-1">
                        {service.items.length === 0 ? (
                          <button
                            onClick={() => handleServiceClick(service.path)}
                            className="text-primary-foreground/80 hover:text-primary-foreground py-1 text-left text-sm"
                          >
                            {service.title}
                          </button>
                        ) : (
                          <>
                            <button
                              onClick={() => handleServiceClick(service.path)}
                              className="text-primary-foreground font-semibold text-sm pt-2 text-left"
                            >
                              {service.title}
                            </button>
                            {service.items.map((item) => (
                              <button
                                key={item}
                                onClick={() => handleServiceClick(service.path)}
                                className="text-primary-foreground/80 hover:text-primary-foreground py-1 text-left text-sm pl-2"
                              >
                                {item}
                              </button>
                            ))}
                          </>
                        )}
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <button
                onClick={() => scrollToSection("vision-mission")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium py-2 text-left border-b border-primary-foreground/10"
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
                onClick={() => handleServiceClick("/contact")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium py-2 text-left"
              >
                Contact
              </button>
              <Button
                variant="nav"
                size="default"
                onClick={() => handleServiceClick("/partner-with-us")}
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
