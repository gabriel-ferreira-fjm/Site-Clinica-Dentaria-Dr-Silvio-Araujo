import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HigieneOral from "./components/sections/HigieneOral";
import Estetica from "./components/sections/Estetica";
import Odontopediatria from "./components/sections/Odontopediatria";
import Implantes from "./components/sections/Implantes";
import ConsultaDiagnostico from "./components/sections/ConsultaDiagnostico"; // ✅ NOVO

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

            {/* Pages */}
            <Route
              path="/ConsultaDiagnostico"
              element={<ConsultaDiagnostico />}
            />

            {/* Blog Routes */}
            <Route path="/blog/higiene-oral-diaria" element={<HigieneOral />} />
            <Route path="/blog/estetica-branqueamento" element={<Estetica />} />
            <Route
              path="/blog/odontopediatria-criancas"
              element={<Odontopediatria />}
            />
            <Route
              path="/blog/implantes-guia-completo"
              element={<Implantes />}
            />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
