import AtuacaoLayout from "./AtuacaoLayout";

const Sucessoes = () => (
  <AtuacaoLayout
    title="Direito das Sucessões"
    subtitle="Planejamento e condução segura de inventários e partilhas."
  >
    <p>
      O Direito das Sucessões trata da transmissão dos bens e direitos de uma pessoa
      após seu falecimento. É uma área que demanda conhecimento técnico aprofundado e
      sensibilidade para lidar com famílias em momentos delicados. O escritório VCG
      Advocacia possui larga experiência na condução de inventários e partilhas.
    </p>

    <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">
      Nossos Serviços
    </h2>

    <ul className="space-y-3 list-none pl-0">
      {[
        "Inventário judicial e extrajudicial",
        "Partilha de bens amigável e litigiosa",
        "Testamentos (elaboração e execução)",
        "Planejamento sucessório e patrimonial",
        "Holding familiar",
        "Doação com reserva de usufruto",
        "Ações de petição de herança",
        "Colação de bens",
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
      Orientamos nossos clientes desde o planejamento sucessório preventivo até a
      conclusão do inventário, sempre buscando a economia tributária e a preservação
      do patrimônio familiar. Atuamos tanto na via judicial quanto extrajudicial,
      conforme a necessidade de cada caso.
    </p>
  </AtuacaoLayout>
);

export default Sucessoes;
