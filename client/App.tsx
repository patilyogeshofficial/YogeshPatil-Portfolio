import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { ThemeToggle } from "./components/ThemeToggle";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      <div className="container mx-auto px-6 py-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">{title}</h1>
          <p className="text-muted-foreground">
            This page is under construction. Please check back later!
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/skills"
              element={<PlaceholderPage title="Skills" />}
            />
            <Route
              path="/experience"
              element={<PlaceholderPage title="Experience" />}
            />
            <Route
              path="/certifications"
              element={<PlaceholderPage title="Certifications" />}
            />
            <Route
              path="/achievements"
              element={<PlaceholderPage title="Achievements" />}
            />
            <Route
              path="/projects"
              element={<PlaceholderPage title="Projects" />}
            />
            <Route
              path="/education"
              element={<PlaceholderPage title="Education" />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
