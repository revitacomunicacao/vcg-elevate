import { Scale, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";
import fachadaImg from "@/assets/fachada_escritorio.webp";

const values = [
  { icon: Scale, title: "Ética", desc: "Atuação pautada nos mais altos padrões éticos e de integridade profissional." },
  { icon: Shield, title: "Compromisso", desc: "Dedicação total na defesa dos interesses de cada cliente, com atenção personalizada." },
  { icon: Award, title: "Excelência", desc: "Busca contínua por resultados excepcionais e atualização jurídica permanente." },
];

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
              src={quemSomosBg}
              alt="Escritório de advocacia"
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">Quem Somos</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              Fundado em 2000 pelo Dr. Vinicius Carneiro Gonçalves, o escritório VCG Advocacia
              é referência em Direito Civil, Família e Sucessões em Uberaba e região do Triângulo Mineiro.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Com mais de duas décadas de atuação, oferecemos atendimento boutique, próximo e humanizado,
              tratando cada caso com a atenção e o cuidado que merece.
            </p>
          </motion.div>
        </div>

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
