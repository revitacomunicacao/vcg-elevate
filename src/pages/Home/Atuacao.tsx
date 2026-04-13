import { Link } from "react-router-dom";
import { Landmark, Heart, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const areas = [
  {
    icon: Landmark,
    title: "Direito Civil",
    desc: "Contratos, responsabilidade civil, direito do consumidor, cobranças e execuções, ações indenizatórias e questões patrimoniais.",
    link: "/atuacao/civil",
  },
  {
    icon: Heart,
    title: "Direito de Família",
    desc: "Divórcio, guarda de filhos, pensão alimentícia, união estável, reconhecimento de paternidade e adoção.",
    link: "/atuacao/familia",
  },
  {
    icon: FileText,
    title: "Direito das Sucessões",
    desc: "Inventário judicial e extrajudicial, testamentos, partilha de bens, planejamento sucessório e herança.",
    link: "/atuacao/sucessoes",
  },
];

const Atuacao = () => {
  return (
    <section id="atuacao" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-sans text-sm tracking-[0.2em] uppercase">Especialidades</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Áreas de Atuação</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-card rounded-lg border border-border p-8 hover:shadow-xl hover:border-primary/30 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6">
                <area.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{area.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">{area.desc}</p>
              <Button
                asChild
                variant="ghost"
                className="text-primary hover:text-white hover:bg-primary px-3 py-2 h-auto font-sans rounded-md transition-colors"
              >
                <Link to={area.link}>
                  Saiba mais <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Atuacao;
