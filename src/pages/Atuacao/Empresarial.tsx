import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AtuacaoLayout from "./AtuacaoLayout";
import { fetchAtuacaoContent, type AtuacaoContent } from "@/cms/atuacao";

const Empresarial = () => {
  const [content, setContent] = useState<AtuacaoContent | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchAtuacaoContent("direito-empresarial", controller.signal)
      .then(setContent)
      .catch(() => setContent(null));
    return () => controller.abort();
  }, []);

  if (!content) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <Footer />
      </div>
    );
  }

  return (
    <AtuacaoLayout title={content.hero.title} subtitle={content.hero.subtitle} cta={content.cta}>
      <p>{content.body.description}</p>

      <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">
        {content.body.servicesTitle}
      </h2>
      <ul className="space-y-3 list-none pl-0">
        {content.body.services.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">
        {content.body.approachTitle}
      </h2>
      <p>{content.body.approach}</p>
    </AtuacaoLayout>
  );
};

export default Empresarial;

