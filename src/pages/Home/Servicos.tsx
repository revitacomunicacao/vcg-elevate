import { motion } from "framer-motion";
import { Gavel, Briefcase, Monitor } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";

/** Conteúdo alinhado a https://vcg.adv.br/serviços */
const acoesItems = [
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
];

const assessoriaItems = [
  "Atuação preventiva e contenciosa",
  "Elaboração e análise de contratos",
  "Direito das famílias: divórcio, aconselhamento para elaboração de pacto antenupcial e escritura de união estável, conversão de separação em divórcio, restabelecimento de sociedade conjugal, reconhecimento e dissolução de união estável, partilha de bens, ações anulatórias e revisionais, alimentos, execuções e cumprimentos de sentença de alimentos, guarda de menores, direito de convivência (visitas), modificação de cláusulas, alienação parental, indenização por abandono afetivo, adoção, curatela (interdição), tomada de decisão apoiada, tutela, investigação de paternidade, negatória de paternidade, reconhecimento de filiação socioafetiva, contrato de namoro, direitos homoafetivo e sistêmico",
  "Direito das sucessões: inventários (judicial e extrajudicial), partilha, orientação sobre planejamento sucessório, testamento e doação",
  "Propriedade e posse: compra e venda, ações possessórias, reintegração de posse, reivindicatória, imissão na posse e usucapião",
  "Direito do consumidor: ações revisionais de contratos (cobrança abusiva), indenizações por negativação indevida junto aos órgãos de proteção ao crédito, restituição de quantias pagas indevidamente, propaganda enganosa, cobrança indevida, vícios e defeitos em produtos, indenizações por atraso de voo e extravio de bagagem",
  "Direito imobiliário: lei de locações e condomínio (despejo, renovatória de contrato, execução, elaboração e análise de contratos)",
  "Acompanhamento de processos diversos",
];

const interacaoDigital =
  "Nossa equipe está apta a realizar atendimentos presenciais e remotos, ampliando a área de cobertura para além das comarcas do Triângulo Mineiro, abrangendo todo o território nacional.";

const sections = [
  { id: "acoes", icon: Gavel, title: "Ações", type: "list" as const, items: acoesItems },
  {
    id: "assessoria",
    icon: Briefcase,
    title: "Assessoria e consultoria jurídicas",
    type: "list" as const,
    items: assessoriaItems,
  },
  { id: "interacao", icon: Monitor, title: "Interação digital", type: "text" as const, body: interacaoDigital },
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Atuação</h2>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-center text-muted-foreground font-sans max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Atuamos há mais de 26 anos em diversas áreas do Direito, aliando o conhecimento à experiência para prestar um
          serviço de excelência aos nossos clientes.<br />
          A atuação concentra-se no Direito das Famílias, Sucessões, Empresarial e Civil, com especial enfoque em demandas que exigem abordagem técnica apurada, sensibilidade jurídica e compreensão aprofundada das dinâmicas pessoais e patrimoniais envolvidas.
        </motion.p>

        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((block, i) => {
            const Icon = block.icon;
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
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground pt-1.5">{block.title}</h3>
                </div>

                {block.type === "list" ? (
                  <ul className="space-y-3 pl-0 list-none">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm md:text-[15px] text-muted-foreground font-sans leading-relaxed">
                        <span className="text-secondary shrink-0 select-none" aria-hidden>
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm md:text-[15px] text-muted-foreground font-sans leading-relaxed pl-1">{block.body}</p>
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
          <h3 className="font-serif text-xl md:text-2xl font-semibold mb-2">Precisa de nossos serviços?</h3>
          <p className="font-serif text-lg md:text-xl font-medium text-primary-foreground/95 mb-6">Estamos aqui para ajudá-lo.</p>
          <p className="text-sm md:text-base font-sans text-primary-foreground/85 leading-relaxed max-w-2xl mx-auto space-y-4">
            <span className="block">
              Queremos saber qual é exatamente a sua necessidade. Assim poderemos entender e apresentar uma possível
              solução.
            </span>
            <span className="block">Conte-nos e faremos o melhor por você.</span>
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-secondary/90 hover:bg-secondary/90 text-secondary-foreground font-sans text-base px-8"
          >
            <a href="https://wa.me/5534998850315" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-5 w-5 mr-2" />
              Agende sua consulta jurídica
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicos;
