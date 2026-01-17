import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HRStaffing from "./pages/services/HRStaffing";
import SkillDevelopment from "./pages/services/SkillDevelopment";
import SupplyServices from "./pages/services/SupplyServices";
import DigitalSolutions from "./pages/services/DigitalSolutions";
import Contact from "./pages/Contact";
import PartnerWithUs from "./pages/PartnerWithUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/hr-staffing" element={<HRStaffing />} />
          <Route path="/services/skill-development" element={<SkillDevelopment />} />
          <Route path="/services/supply-services" element={<SupplyServices />} />
          <Route path="/services/digital-solutions" element={<DigitalSolutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
