import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react"; // 👈 ADD THIS

import Index from "./pages/Index.tsx";
import ShesHired from "./pages/ShesHired.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./components/About.tsx";
import Navbar from "./components/Navbar.tsx";
import Contact from "./components/Contact.tsx";
import ELearningSection from "./components/ELearningSection.tsx";
import ServicesSection from "./components/ServicesSection.tsx";

import ScrollToTop from "./components/ui/ScrollToTop";
import Loader from "./components/Loader.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true); // ✅ FIX

  useEffect(() => {
    const images = Array.from(document.images);

    if (images.length === 0) {
      setLoading(false);
      return;
    }

    let loadedCount = 0;

    const checkDone = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setTimeout(() => setLoading(false), 300);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkDone();
      } else {
        img.addEventListener("load", checkDone);
        img.addEventListener("error", checkDone);
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          {loading && <Loader />} {/* ✅ NOW WORKS */}

          <ScrollToTop />
          <Navbar />

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
};

export default App;