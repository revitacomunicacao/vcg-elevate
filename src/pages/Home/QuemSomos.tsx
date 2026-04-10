import { Scale, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";
import fachadaImg from "@/assets/fachada_escritorio.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const values = [
  { icon: Scale, title: "Ética", desc: "Atuação pautada nos mais altos padrões éticos e de integridade profissional." },
  { icon: Shield, title: "Compromisso", desc: "Dedicação total na defesa dos interesses de cada cliente, com atenção personalizada." },
  { icon: Award, title: "Excelência", desc: "Busca contínua por resultados excepcionais e atualização jurídica permanente." },
];

const carouselImages = Array(5).fill(fachadaImg);

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl" />
            <img
              src={fachadaImg}
              alt="Fachada do escritório VCG Advocacia"
              className="relative rounded-xl shadow-lg w-full object-cover h-80"
              loading="lazy"
              width={1920}
              height={800}
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-secondary font-sans text-sm tracking-[0.2em] uppercase">Sobre nós</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">Bem-vindo ao nosso escritório virtual!</h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                O escritório foi fundado no ano de 2000 pelo advogado Vinicius Carneiro Gonçalves que, desde então, tem como meta precípua a prestação de serviços de excelência.
              </p>
              <p>
                Adotamos o formato europeu denominado "escritório boutique", também utilizado nos grandes centros do Brasil.
              </p>
              <p>
                Esse novo modelo tem como característica a atuação de sua equipe em determinados ramos do Direito, permitindo que seus integrantes sejam altamente especializados, atualizados e experientes no que fazem.
              </p>
              <p>
                Esse novo conceito é marcado também por um atendimento profissional e personalizado, o que valoriza a individualidade dos clientes, sejam eles pessoas físicas ou jurídicas.
              </p>
              <p>
                O nosso escritório está localizado no bairro Universitário, na cidade de Uberaba/MG, a 200 metros do Fórum da Justiça Estadual.
              </p>
              <p>
                Dedicação, honestidade, ética e compromisso são alguns de nossos principais valores.
              </p>
              <p>
                O escritório está registrado na Ordem dos Advogados do Brasil - Seção Minas Gerais, sob o nº 5217.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {carouselImages.map((src, i) => (
                <CarouselItem key={i}>
                  <img
                    src={src}
                    alt={`Escritório VCG Advocacia - Foto ${i + 1}`}
                    className="rounded-xl w-full h-64 md:h-80 object-cover"
                    loading="lazy"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        {/* Values cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-5">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
