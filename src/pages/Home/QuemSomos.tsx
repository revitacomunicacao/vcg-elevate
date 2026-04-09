import { Scale, Shield, Award } from "lucide-react";

const values = [
  { icon: Scale, title: "Ética", desc: "Atuação pautada nos mais altos padrões éticos e de integridade profissional." },
  { icon: Shield, title: "Compromisso", desc: "Dedicação total na defesa dos interesses de cada cliente, com atenção personalizada." },
  { icon: Award, title: "Excelência", desc: "Busca contínua por resultados excepcionais e atualização jurídica permanente." },
];

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary font-sans text-sm tracking-[0.2em] uppercase">Sobre nós</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">Quem Somos</h2>
          <p className="text-muted-foreground font-sans leading-relaxed">
            Fundado em 2000 pelo Dr. Vinicius Carneiro Gonçalves, o escritório VCG Advocacia
            é referência em Direito Civil, Família e Sucessões em Uberaba e região do Triângulo Mineiro.
            Com mais de duas décadas de atuação, oferecemos atendimento boutique, próximo e humanizado,
            tratando cada caso com a atenção e o cuidado que merece.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="text-center p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
