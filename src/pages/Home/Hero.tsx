import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero_bg.jpg";
import fachadaImg from "@/assets/fachada_escritorio.webp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block text-secondary font-sans text-sm tracking-[0.3em] uppercase mb-6"
            >
              Escritório de Advocacia
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Vinicius Carneiro{" "}
              <span className="text-secondary">Gonçalves</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground/80 font-sans leading-relaxed mb-10 max-w-xl lg:mx-0 mx-auto"
            >
              Tradição e excelência em Direito Civil, Família e Sucessões.
              Mais de 24 anos defendendo seus direitos em Uberaba/MG.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
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
            </motion.div>
          </motion.div>

          {/* Facade image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-2xl" />
              <img
                src={fachadaImg}
                alt="Fachada do escritório VCG Advocacia em Uberaba/MG"
                className="relative rounded-xl shadow-2xl w-full object-cover border-2 border-secondary/20"
                width={800}
                height={400}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </section>
  );
};

export default Hero;
