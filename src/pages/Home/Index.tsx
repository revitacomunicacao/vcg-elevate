import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "./Hero";
import QuemSomos from "./QuemSomos";
import NossaEquipe from "./NossaEquipe";
import Atuacao from "./Atuacao";
import Servicos from "./Servicos";
import ProvaSocial from "./ProvaSocial";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <QuemSomos />
      <NossaEquipe />
      <Atuacao />
      <Servicos />
      <ProvaSocial />
      <Footer />
    </div>
  );
};

export default Home;
