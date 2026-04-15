import AtuacaoLayout from "./AtuacaoLayout";

const Empresarial = () => (
  <AtuacaoLayout
    title="Direito Empresarial"
    subtitle="Assessoria jurídica estratégica para empresas, com atuação preventiva e contenciosa."
  >
    <p>
      A atuação em Direito Empresarial envolve decisões que impactam diretamente a continuidade, a segurança e o crescimento
      do negócio. No escritório VCG Advocacia, oferecemos suporte jurídico para orientar a tomada de decisão, reduzir riscos
      e fortalecer relações contratuais.
    </p>

    <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">Nossos Serviços</h2>
    <ul className="space-y-3 list-none pl-0">
      {[
        "Elaboração, análise e revisão de contratos",
        "Cobranças, negociações e medidas judiciais",
        "Responsabilidade civil e prevenção de litígios",
        "Apoio jurídico em relações comerciais e prestação de serviços",
        "Orientação preventiva e consultoria contínua",
      ].map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">Abordagem</h2>
    <p>
      Priorizamos uma abordagem técnica e objetiva, com foco em soluções práticas, previsibilidade e alinhamento às metas do
      cliente. Sempre que possível, buscamos caminhos preventivos para reduzir custos e evitar disputas desnecessárias.
    </p>
  </AtuacaoLayout>
);

export default Empresarial;

