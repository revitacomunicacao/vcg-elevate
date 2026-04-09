import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const AtuacaoLayout = ({ title, subtitle, children }: Props) => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <Link
            to="/"
            className="inline-flex items-center text-primary-foreground/60 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Voltar ao início
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{title}</h1>
          <p className="text-lg text-primary-foreground/80 font-sans max-w-2xl">{subtitle}</p>
        </div>
        <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="prose prose-lg font-sans text-foreground/90 leading-relaxed">
            {children}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-muted rounded-lg text-center border border-border">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
              Precisa de orientação jurídica?
            </h3>
            <p className="text-muted-foreground font-sans mb-6">
              Entre em contato e agende uma consulta. Estamos prontos para ajudar.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-sans"
            >
              <a href="https://wa.me/5534999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AtuacaoLayout;
