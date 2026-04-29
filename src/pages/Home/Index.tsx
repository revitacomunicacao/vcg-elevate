import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "./Hero";
import QuemSomos from "./QuemSomos";
import NossaEquipe from "./NossaEquipe";
import Atuacao from "./Atuacao";
import Servicos from "./Servicos";
import ProvaSocial from "./ProvaSocial";
import { fetchHomeContent, type HomeContent } from "@/cms/home";

const Home = () => {
  const [content, setContent] = useState<HomeContent | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchHomeContent(controller.signal)
      .then(setContent)
      .catch(() => setContent(null));
    return () => controller.abort();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {content ? (
        <>
          <Hero content={content.hero} />
          <QuemSomos content={content.quemSomos} />
          <NossaEquipe content={content.equipe} />
          <Atuacao content={content.atuacao} />
          <Servicos content={content.servicos} />
          <ProvaSocial content={content.provaSocial} />
        </>
      ) : null}
      <Footer />
    </div>
  );
};

export default Home;
