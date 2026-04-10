import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import drVinicius from "@/assets/dr_vinicius.webp";
import draIsabelle from "@/assets/dra_isabelle.webp";

const team = [
  {
    name: "Vinicius Carneiro Gonçalves",
    role: "Sócio Fundador",
    oab: "OAB/MG nº 5.217",
    desc: "Advogado com mais de 24 anos de experiência, especialista em Direito Civil, Família e Sucessões.",
    photo: drVinicius,
  },
  {
    name: "Isabelle Araujo",
    role: "Advogada",
    oab: "",
    desc: "Atuação focada em Direito de Família e Sucessões, com atendimento humanizado e dedicado.",
    photo: draIsabelle,
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
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild variant="ghost" className="text-primary hover:text-primary/80 font-sans text-base">
            <Link to="/corpo-juridico">
              Ver currículo completo da equipe <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NossaEquipe;
