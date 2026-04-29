import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { getRegistryIcon } from "@/lib/iconRegistry";

type QuemSomosContent = {
  sectionLabel: string;
  heading: string;
  description: string;
  gallery: string[];
  values: Array<{ iconKey: string; title: string; description: string }>;
};

const QuemSomos = ({ content }: { content: QuemSomosContent }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbApi, setThumbApi] = useState<CarouselApi>();

  const galleryImages: { src: string; alt: string }[] = content.gallery.map((src, i) => ({
    src,
    alt: `Galeria do escritório VCG Advocacia (${i + 1})`,
  }));

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
            <span className="text-secondary font-sans text-sm tracking-[0.2em] uppercase">{content.sectionLabel}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">{content.heading}</h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              {content.description
                .split(/\r?\n\r?\n/)
                .map((p) => p.trim())
                .filter(Boolean)
                .map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
            </div>
          </motion.div>
        </div>

        {/* Values cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.values.map((v, i) => {
            const Icon = getRegistryIcon(v.iconKey);
            return (
              <motion.div
                key={`${v.title}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-5">
                  {Icon ? <Icon className="h-6 w-6 text-primary" /> : null}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{v.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
