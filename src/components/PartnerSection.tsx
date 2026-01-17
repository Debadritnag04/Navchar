import { useState } from "react";
import { Mail, Phone, MapPin, Send, Building2, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface PartnerFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  partnerType: string;
  message: string;
}

const PartnerSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<PartnerFormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    partnerType: "",
    message: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, partnerType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Partnership Proposal Received!",
      description: "Our strategic alliance team will review your proposal and contact you soon."
    });
    setFormData({ name: "", email: "", phone: "", organization: "", partnerType: "", message: "" });
    setIsSubmitting(false);
  };

  const partnerTypes = [
    "Strategic Partner",
    "Technology Partner",
    "Manpower Partner",
    "Government Relations Partner",
    "Vendor / Supplier",
    "Other"
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Partnership Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Partner with <span className="text-gradient">Navachar</span>?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe in creating synergies that drive national growth. By partnering with Navachar, you gain access to our extensive network, technical expertise, and deep understanding of government and industrial landscapes.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "HQ Address", content: "Tamluk Maniktola, Millennium Court Building, Bar Padumbasan, Pin - 721636" },
                { icon: Phone, title: "Strategic Desk", content: "+91 8420806236" },
                { icon: Mail, title: "Alliances Email", content: "partners@navachar.com" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Form */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Handshake className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Partnership Proposal</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <Input id="email" name="email" type="email" placeholder="email@org.com" value={formData.email} onChange={handleInputChange} required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                  <Input id="phone" name="phone" placeholder="10-digit number" value={formData.phone} onChange={handleInputChange} required maxLength={10} />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">Organization Name *</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="organization" name="organization" className="pl-10" placeholder="Company/Entity Name" value={formData.organization} onChange={handleInputChange} required />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="partnerType" className="block text-sm font-medium text-foreground mb-2">Partnership Type *</label>
                <Select value={formData.partnerType} onValueChange={handleTypeChange} required>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select interest area" />
                  </SelectTrigger>
                  <SelectContent>
                    {partnerTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Proposal / Message *</label>
                <Textarea id="message" name="message" placeholder="Describe how we can collaborate..." value={formData.message} onChange={handleInputChange} required rows={4} className="bg-background resize-none" />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Submit Proposal"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
