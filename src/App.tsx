import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HigieneOral from "./pages/blog/HigieneOral";
import Estetica from "./pages/blog/Estetica";
import Odontopediatria from "./pages/blog/Odontopediatria";
import Implantes from "./pages/blog/Implantes";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Blog Routes */}
            <Route path="/blog/higiene-oral-diaria" element={<HigieneOral />} />
            <Route path="/blog/estetica-branqueamento" element={<Estetica />} />
            <Route path="/blog/odontopediatria-criancas" element={<Odontopediatria />} />
            <Route path="/blog/implantes-guia-completo" element={<Implantes />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
