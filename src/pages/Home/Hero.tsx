import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-primary"
    >
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(349_70%_28%),hsl(349_70%_18%))]" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-secondary font-sans text-sm tracking-[0.3em] uppercase">
              Escritório de Advocacia
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Vinicius Carneiro{" "}
            <span className="text-secondary">Gonçalves</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 font-sans leading-relaxed mb-10 max-w-2xl mx-auto">
            Tradição e excelência em Direito Civil, Família e Sucessões.
            Mais de 24 anos defendendo seus direitos em Uberaba/MG.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans text-base px-8"
            >
              <a href="https://wa.me/5534999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Fale Conosco
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-sans text-base px-8"
              onClick={() => document.getElementById("quem-somos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conheça o Escritório
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </section>
  );
};

export default Hero;
