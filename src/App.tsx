import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import Home from "./pages/Home/Index";
import Civil from "./pages/Atuacao/Civil";
import Familia from "./pages/Atuacao/Familia";
import Sucessoes from "./pages/Atuacao/Sucessoes";
import Empresarial from "./pages/Atuacao/Empresarial";
import CorpoJuridico from "./pages/CorpoJuridico/Index";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import CartaoVirtual from "./pages/CartaoVirtual";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <CookieConsentProvider>
          <ScrollToTop />
          <WhatsAppFloatingButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atuacao/civil" element={<Civil />} />
            <Route path="/atuacao/familia" element={<Familia />} />
            <Route path="/atuacao/sucessoes" element={<Sucessoes />} />
            <Route path="/atuacao/empresarial" element={<Empresarial />} />
            <Route path="/corpo-juridico" element={<CorpoJuridico />} />
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/cartaovirtual" element={<CartaoVirtual />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsentBanner />
        </CookieConsentProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
