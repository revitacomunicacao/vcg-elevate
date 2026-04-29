import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type NossaEquipeContent = {
  sectionLabel: string;
  heading: string;
  members: Array<{
    name: string;
    role: string;
    oab?: string;
    description: string;
    photo: string;
    link: string;
  }>;
};

function toInternalLink(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname === "vcg.adv.br") return `${u.pathname}${u.hash}`;
  } catch {
    // ignore
  }
  return url;
}

const NossaEquipe = ({ content }: { content: NossaEquipeContent }) => {
  return (
    <section id="equipe" className="py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-sans text-sm tracking-[0.2em] uppercase">{content.sectionLabel}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">{content.heading}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {content.members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center bg-muted/50 p-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="max-w-full max-h-[min(70vh,28rem)] w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-secondary font-sans text-sm font-medium mb-1">{member.role}</p>
                {member.oab && (
                  <p className="text-muted-foreground text-xs mb-3">{member.oab}</p>
                )}
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{member.description}</p>
                <div className="mt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white font-sans"
                  >
                    <Link to={toInternalLink(member.link)}>Conheça mais</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NossaEquipe;
