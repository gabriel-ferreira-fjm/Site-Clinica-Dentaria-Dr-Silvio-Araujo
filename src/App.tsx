import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EmergencyButton from '@/components/EmergencyButton';

// Blog
import HigieneOral from "./components/sections/HigieneOral";
import Estetica from "./components/sections/Estetica";
import Odontopediatria from "./components/sections/Odontopediatria";
import Implantes from "./components/sections/Implantes";

// Services pages
import ConsultaDiagnostico from "./components/sections/ConsultaDiagnostico";
import PrevencaoHigiene from "./components/sections/PrevencaoHigiene";
import EsteticaOrtodontia from "./components/sections/EsteticaOrtodontia";
import ImplantesProteses from "./components/sections/ImplantesProteses";
import TratamentosEspecializados from "./components/sections/TratamentosEspecializados";
import OdontopediatriaServico from "./components/sections/OdontopediatriaServico";

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

            {/* Services */}
            <Route path="/consulta-diagnostico" element={<ConsultaDiagnostico />} />
            <Route path="/prevencao-higiene" element={<PrevencaoHigiene />} />
            <Route path="/estetica-ortodontia" element={<EsteticaOrtodontia />} />
            <Route path="/implantes-proteses" element={<ImplantesProteses />} />
            <Route path="/tratamentos-especializados" element={<TratamentosEspecializados />} />
            <Route path="/odontopediatria" element={<OdontopediatriaServico />} />

            {/* Blog */}
            <Route path="/blog/higiene-oral-diaria" element={<HigieneOral />} />
            <Route path="/blog/estetica-branqueamento" element={<Estetica />} />
            <Route path="/blog/odontopediatria-criancas" element={<Odontopediatria />} />
            <Route path="/blog/implantes-guia-completo" element={<Implantes />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* Botão de Urgências - Renderizado em todas as páginas */}
          <EmergencyButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;