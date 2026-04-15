import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import Home from "./pages/Home/Index";
import Civil from "./pages/Atuacao/Civil";
import Familia from "./pages/Atuacao/Familia";
import Sucessoes from "./pages/Atuacao/Sucessoes";
import Empresarial from "./pages/Atuacao/Empresarial";
import CorpoJuridico from "./pages/CorpoJuridico/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <ScrollToTop />
        <WhatsAppFloatingButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atuacao/civil" element={<Civil />} />
          <Route path="/atuacao/familia" element={<Familia />} />
          <Route path="/atuacao/sucessoes" element={<Sucessoes />} />
          <Route path="/atuacao/empresarial" element={<Empresarial />} />
          <Route path="/corpo-juridico" element={<CorpoJuridico />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
