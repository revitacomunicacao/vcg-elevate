import { useEffect, useState } from "react";
import { Scale, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";
import vcgFoto01 from "@/assets/vcg-foto01.jpg.jpeg";
import vcgFoto02 from "@/assets/vcg-foto02.jpg.jpeg";
import vcgFoto03 from "@/assets/vcg-foto03.jpg.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const values = [
  { icon: Scale, title: "Ética", desc: "Atuação pautada nos mais altos padrões éticos e de integridade profissional." },
  { icon: Shield, title: "Compromisso", desc: "Dedicação total na defesa dos interesses de cada cliente, com atenção personalizada." },
  { icon: Award, title: "Excelência", desc: "Busca contínua por resultados excepcionais e atualização jurídica permanente." },
];

const galleryImages: { src: string; alt: string }[] = [
  { src: vcgFoto01, alt: "Recepção do escritório VCG Advocacia" },
  { src: vcgFoto02, alt: "Ambiente e identidade visual — VCG Advocacia" },
  { src: vcgFoto03, alt: "Obra decorativa no escritório VCG Advocacia" },
];

const QuemSomos = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbApi, setThumbApi] = useState<CarouselApi>();

  const selected = galleryImages[selectedIndex] ?? galleryImages[0];

  useEffect(() => {
    thumbApi?.scrollTo(selectedIndex);
  }, [selectedIndex, thumbApi]);

  return (
    <section id="quem-somos" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Coluna esquerda — foto em destaque + carrossel de miniaturas (substitui a fachada fixa) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative lg:sticky lg:top-28 space-y-4"
          >
            <div className="relative rounded-xl overflow-hidden border border-border shadow-lg bg-muted/30">
              <img
                key={selectedIndex}
                src={selected.src}
                alt={selected.alt}
                className="w-full h-64 md:h-80 object-cover transition-opacity duration-300"
                loading="lazy"
              />
            </div>

            <div className="relative px-10 md:px-12">
              <Carousel
                setApi={setThumbApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-3">
                  {galleryImages.map((img, i) => (
                    <CarouselItem key={i} className="pl-2 md:pl-3 basis-1/3">
                      <button
                        type="button"
                        onClick={() => setSelectedIndex(i)}
                        className={cn(
                          "relative w-full rounded-lg overflow-hidden aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-shadow",
                          i === selectedIndex
                            ? "ring-2 ring-primary ring-offset-2 ring-offset-background shadow-md"
                            : "ring-1 ring-border opacity-90 hover:opacity-100",
                        )}
                        aria-label={`Ver foto ${i + 1} em destaque`}
                        aria-current={i === selectedIndex ? "true" : undefined}
                      >
                        <img src={img.src} alt="" className="w-full h-full object-cover" loading="lazy" />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 h-9 w-9" />
                <CarouselNext className="right-0 h-9 w-9" />
              </Carousel>
            </div>
          </motion.div>

          {/* Coluna direita — texto */}
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
                O escritório foi fundado no ano de 2000 pelo advogado Vinicius Carneiro Gonçalves que, desde então, tem como
                meta precípua a prestação de serviços de excelência.
              </p>
              <p>
                Adotamos o formato europeu denominado &quot;escritório boutique&quot;, também utilizado nos grandes centros do
                Brasil.
              </p>
              <p>
                Esse novo modelo tem como característica a atuação de sua equipe em determinados ramos do Direito, permitindo
                que seus integrantes sejam altamente especializados, atualizados e experientes no que fazem.
              </p>
              <p>
                Esse novo conceito é marcado também por um atendimento profissional e personalizado, o que valoriza a
                individualidade dos clientes, sejam eles pessoas físicas ou jurídicas.
              </p>
              <p>
                O nosso escritório está localizado no bairro Universitário, na cidade de Uberaba/MG, a 200 metros do Fórum
                da Justiça Estadual.
              </p>
              <p>Dedicação, honestidade, ética e compromisso são alguns de nossos principais valores.</p>
              <p>
                O escritório está registrado na Ordem dos Advogados do Brasil - Seção Minas Gerais, sob o nº 5217.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
