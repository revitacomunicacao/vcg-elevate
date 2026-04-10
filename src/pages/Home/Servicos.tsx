import { motion } from "framer-motion";
import { Gavel, Briefcase, Heart, ScrollText, Home, ShoppingCart, Building2, Monitor, CheckCircle } from "lucide-react";

const categories = [
  {
    icon: Gavel,
    title: "Ações",
    items: [
      "Cobrança e monitória",
      "Acidentes de trânsito (reparação de danos)",
      "Seguros diversos",
      "Defesa em execuções fiscais",
      "Defesas cíveis judiciais e administrativas",
      "Reclamações e defesas trabalhistas",
      "Títulos de crédito: execuções de cheque, nota promissória, duplicata, contratos e demais títulos cambiais",
      "Responsabilidade civil: ações indenizatórias, como danos morais, danos materiais, danos estéticos e lucros cessantes",
      "Retificação de registros públicos: alteração de nome, gênero e idade, retificação de áreas (urbana e rural)",
      "Obrigações de fazer e de não fazer",
    ],
  },
  {
    icon: Briefcase,
    title: "Assessoria e consultoria jurídicas",
    items: [
      "Atuação preventiva e contenciosa",
      "Elaboração e análise de contratos",
    ],
  },
  {
    icon: Heart,
    title: "Direito das famílias",
    items: [
      "Divórcio, aconselhamento para elaboração de pacto antenupcial e escritura de união estável",
      "Conversão de separação em divórcio, restabelecimento de sociedade conjugal",
      "Reconhecimento e dissolução de união estável, partilha de bens",
      "Ações anulatórias e revisionais, alimentos, execuções e cumprimentos de sentença de alimentos",
      "Guarda de menores, direito de convivência (visitas), modificação de cláusulas",
      "Alienação parental, indenização por abandono afetivo",
      "Adoção, curatela (interdição), tomada de decisão apoiada, tutela",
      "Investigação de paternidade, negatória de paternidade, reconhecimento de filiação socioafetiva",
      "Contrato de namoro, direitos homoafetivo e sistêmico",
    ],
  },
  {
    icon: ScrollText,
    title: "Direito das sucessões",
    items: [
      "Inventários (judicial e extrajudicial), partilha",
      "Orientação sobre planejamento sucessório",
      "Testamento e doação",
    ],
  },
  {
    icon: Home,
    title: "Propriedade e posse",
    items: [
      "Compra e venda",
      "Ações possessórias, reintegração de posse, reivindicatória",
      "Imissão na posse e usucapião",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Direito do consumidor",
    items: [
      "Ações revisionais de contratos (cobrança abusiva)",
      "Indenizações por negativação indevida junto aos órgãos de proteção ao crédito",
      "Restituição de quantias pagas indevidamente, propaganda enganosa, cobrança indevida",
      "Vícios e defeitos em produtos",
      "Indenizações por atraso de voo e extravio de bagagem",
    ],
  },
  {
    icon: Building2,
    title: "Direito imobiliário",
    items: [
      "Lei de locações e condomínio (despejo, renovatória de contrato, execução)",
      "Elaboração e análise de contratos",
    ],
  },
  {
    icon: Briefcase,
    title: "Acompanhamento",
    items: [
      "Acompanhamento de processos diversos",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5 },
};

const Servicos = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-6">
          <span className="text-secondary font-sans text-sm tracking-[0.2em] uppercase">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Atuação Completa</h2>
        </motion.div>

        <motion.p {...fadeUp} className="text-center text-muted-foreground font-sans max-w-2xl mx-auto mb-16">
          Atuamos há mais de 25 anos em diversas áreas do Direito, aliando o conhecimento à experiência para prestar um serviço de excelência aos nossos clientes.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <cat.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground font-sans">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Interação digital */}
        <motion.div
          {...fadeUp}
          className="mt-16 bg-card border border-border rounded-lg p-8 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 shrink-0">
            <Monitor className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Interação digital</h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Nossa equipe está apta a realizar atendimentos presenciais e remotos, ampliando a área de cobertura para além das comarcas do Triângulo Mineiro, abrangendo todo o território nacional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicos;
