import AtuacaoLayout from "./AtuacaoLayout";

const Civil = () => (
  <AtuacaoLayout
    title="Direito Civil"
    subtitle="Proteção dos seus direitos nas relações civis e patrimoniais."
  >
    <p>
      O Direito Civil é o ramo que regula as relações entre particulares, abrangendo desde
      contratos e obrigações até questões patrimoniais e de responsabilidade civil. No escritório
      VCG Advocacia, contamos com ampla experiência para atuar em diversas demandas civis.
    </p>

    <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">
      Nossos Serviços
    </h2>

    <ul className="space-y-3 list-none pl-0">
      {[
        "Elaboração e revisão de contratos",
        "Ações de cobrança e execuções",
        "Responsabilidade civil e indenizações",
        "Direito do consumidor",
        "Questões imobiliárias e de propriedade",
        "Usucapião e regularização fundiária",
        "Ações possessórias",
        "Mediação e resolução de conflitos",
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
      Priorizamos sempre a resolução consensual, buscando acordos que atendam aos interesses
      de nossos clientes. Quando necessário, atuamos com firmeza na esfera judicial para
      garantir a proteção integral dos seus direitos.
    </p>
  </AtuacaoLayout>
);

export default Civil;
