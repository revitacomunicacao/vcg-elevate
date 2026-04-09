import AtuacaoLayout from "./AtuacaoLayout";

const Familia = () => (
  <AtuacaoLayout
    title="Direito de Família"
    subtitle="Acolhimento e orientação jurídica para questões familiares."
  >
    <p>
      As questões de Direito de Família envolvem aspectos emocionais e pessoais que exigem
      sensibilidade e profissionalismo. No escritório VCG Advocacia, tratamos cada caso
      com acolhimento e discrição, buscando soluções que preservem o bem-estar de todos
      os envolvidos, especialmente crianças e adolescentes.
    </p>

    <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">
      Nossos Serviços
    </h2>

    <ul className="space-y-3 list-none pl-0">
      {[
        "Divórcio consensual e litigioso",
        "Guarda de filhos (compartilhada e unilateral)",
        "Pensão alimentícia (fixação, revisão e execução)",
        "Reconhecimento e dissolução de união estável",
        "Investigação e reconhecimento de paternidade",
        "Adoção",
        "Alienação parental",
        "Regime de bens e pacto antenupcial",
      ].map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">
      Abordagem
    </h2>
    <p>
      Acreditamos que o diálogo é o melhor caminho para resolver conflitos familiares.
      Por isso, sempre que possível, incentivamos a mediação e a conciliação, preservando
      os vínculos afetivos e garantindo o melhor interesse das partes envolvidas.
    </p>
  </AtuacaoLayout>
);

export default Familia;
