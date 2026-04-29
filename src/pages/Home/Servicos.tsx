import type { FC } from "react";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { getRegistryIcon } from "@/lib/iconRegistry";

type ServicosContent = {
  sectionLabel: string;
  heading: string;
  description: string;
  blocks: Array<{
    id: string;
    iconKey: string;
    title: string;
    type: "list" | "text";
    items?: string[];
    body?: string;
  }>;
  cta: {
    title: string;
    subtitle: string;
    description: string;
    button: { texto: string; link: string };
  };
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5 },
};

type Props = { content: ServicosContent };

const Servicos: FC<Props> = ({ content }) => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-6">
          <span className="text-secondary font-sans text-sm tracking-[0.2em] uppercase">{content.sectionLabel}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">{content.heading}</h2>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-center text-muted-foreground font-sans max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          {content.description.split(/\r?\n/).map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 ? <br /> : null}
            </span>
          ))}
        </motion.p>

        <div className="max-w-4xl mx-auto space-y-16">
          {content.blocks.map((block, i) => {
            const Icon = getRegistryIcon(block.iconKey);
            return (
              <motion.article
                key={block.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-card rounded-lg border border-border p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                    {Icon ? <Icon className="h-5 w-5 text-primary" aria-hidden /> : null}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground pt-1.5">{block.title}</h3>
                </div>

                {block.type === "list" ? (
                  <ul className="space-y-3 pl-0 list-none">
                    {(block.items ?? []).map((item) => (
                      <li key={item} className="flex gap-3 text-sm md:text-[15px] text-muted-foreground font-sans leading-relaxed">
                        <span className="text-secondary shrink-0 select-none" aria-hidden>
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm md:text-[15px] text-muted-foreground font-sans leading-relaxed pl-1">{block.body ?? ""}</p>
                )}
              </motion.article>
            );
          })}
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mt-16 bg-primary text-primary-foreground rounded-lg p-8 md:p-10 text-center"
        >
          <h3 className="font-serif text-xl md:text-2xl font-semibold mb-2">{content.cta.title}</h3>
          <p className="font-serif text-lg md:text-xl font-medium text-primary-foreground/95 mb-6">{content.cta.subtitle}</p>
          <p className="text-sm md:text-base font-sans text-primary-foreground/85 leading-relaxed max-w-2xl mx-auto space-y-4">
            {content.cta.description.split(/\r?\n/).map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-secondary/90 hover:bg-secondary/90 text-secondary-foreground font-sans text-base px-8"
          >
            <a href={content.cta.button.link} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-5 w-5 mr-2" />
              {content.cta.button.texto}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicos;
