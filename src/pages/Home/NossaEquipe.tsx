import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import drVinicius from "@/assets/DrVinicius.jpeg";
import draIsabelle from "@/assets/DraIsabelle.jpeg";

const team = [
  {
    name: "Vinicius Carneiro Gonçalves",
    role: "Sócio Fundador",
    oab: "OAB/MG nº 5.217",
    desc: "Advogado com mais de 26 anos de experiência, especialista em Direito Civil, Família e Sucessões.",
    photo: drVinicius,
    anchorId: "vinicius-carneiro-goncalves",
  },
  {
    name: "Isabelle Araujo",
    role: "Advogada",
    oab: "OAB/MG nº 204.163",
    desc: "Atuação focada em Direito de Família e Sucessões, com atendimento humanizado e dedicado.",
    photo: draIsabelle,
    anchorId: "isabelle-marlene-simoes-araujo",
  },
];

const NossaEquipe = () => {
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
          <span className="text-secondary font-sans text-sm tracking-[0.2em] uppercase">Profissionais</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Corpo Jurídico</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, i) => (
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
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{member.desc}</p>
                <div className="mt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white font-sans"
                  >
                    <Link to={`/corpo-juridico#${member.anchorId}`}>Conheça mais</Link>
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
