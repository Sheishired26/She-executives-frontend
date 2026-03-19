import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ShesHired from "./pages/ShesHired.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./components/About.tsx";
import Navbar from "./components/Navbar.tsx";
import Contact from "./components/Contact.tsx";
import ELearningSection from "./components/ELearningSection.tsx";
import ServicesSection from "./components/ServicesSection.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar/> {/* 👈 ADD HERE */}

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shes-hired" element={<ShesHired />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/elearning" element={<ELearningSection />} />
          <Route path="/service" element={<ServicesSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
