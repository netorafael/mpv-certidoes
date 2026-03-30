import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ExercicioAdvocacia from "./pages/ExercicioAdvocacia.tsx";
import CertidaoNegativaDebitos from "./pages/CertidaoNegativaDebitos.tsx";
import IndisponibilidadeSistemas from "./pages/IndisponibilidadeSistemas.tsx";
import AndamentoProcessual from "./pages/AndamentoProcessual.tsx";
import DistribuicaoFeitos from "./pages/DistribuicaoFeitos.tsx";
import ObjetoPe from "./pages/ObjetoPe.tsx";
import DemaisCertidoes from "./pages/DemaisCertidoes.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/exercicio-advocacia" element={<ExercicioAdvocacia />} />
          <Route path="/certidao-negativa-debitos" element={<CertidaoNegativaDebitos />} />
          <Route path="/indisponibilidade-sistemas" element={<IndisponibilidadeSistemas />} />
          <Route path="/andamento-processual" element={<AndamentoProcessual />} />
          <Route path="/distribuicao-feitos" element={<DistribuicaoFeitos />} />
          <Route path="/objeto-pe" element={<ObjetoPe />} />
          <Route path="/demais-certidoes" element={<DemaisCertidoes />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
