import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/vcg-fullbanner.jpg.jpeg";
import { NAVBAR_OFFSET_PX } from "@/lib/logo";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-0 md:min-h-screen bg-primary overflow-hidden md:!mt-12"
      style={{ marginTop: NAVBAR_OFFSET_PX }}
    >
      {/*
        Mobile: texto abaixo da foto (fluxo normal), para não estourar para cima com items-end e ficar sob o header fixo.
        md+: texto sobre a imagem, alinhado na base.
        marginTop mobile = NAVBAR_OFFSET_PX; em md+, md:!mt-12 sobrescreve o inline.
      */}
      <img src={heroBg} alt="" className="w-full h-auto block select-none pointer-events-none" />

      <div className="relative z-10 w-full md:absolute md:inset-0 md:flex md:items-end md:justify-center px-4 pb-4 pt-3 sm:pb-8 sm:pt-4 md:px-0 md:pb-12 md:pt-0 lg:pb-14">
        <div className="w-full container mx-auto px-0 md:px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block text-secondary font-sans text-sm tracking-[0.3em] uppercase mb-3 md:mb-6"
          >
            Escritório de Advocacia
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-3 md:mb-6"
          >
            Vinicius Carneiro{" "}
            <span className="text-secondary">Gonçalves</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 font-sans leading-relaxed mb-5 md:mb-10 max-w-2xl mx-auto"
          >
            Tradição e excelência em Direito Civil, Família e Sucessões.
            Mais de 24 anos defendendo seus direitos em Uberaba/MG.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary/90 hover:bg-secondary/90 text-secondary-foreground font-sans text-base px-8"
            >
              <a href="https://wa.me/5534998850315" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5 mr-2" />
                Fale com os Advogados
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-sans text-base px-8"
              onClick={() => document.getElementById("quem-somos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conheça o Escritório
            </Button>
          </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
