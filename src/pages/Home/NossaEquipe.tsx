import { User } from "lucide-react";

const team = [
  {
    name: "Vinicius Carneiro Gonçalves",
    role: "Sócio Fundador",
    oab: "OAB/MG nº 5.217",
    desc: "Advogado com mais de 24 anos de experiência, especialista em Direito Civil, Família e Sucessões.",
  },
  {
    name: "Isabelle Araujo",
    role: "Advogada",
    oab: "",
    desc: "Atuação focada em Direito de Família e Sucessões, com atendimento humanizado e dedicado.",
  },
];

const NossaEquipe = () => {
  return (
    <section id="equipe" className="py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-sans text-sm tracking-[0.2em] uppercase">Profissionais</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Nossa Equipe</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-card rounded-lg border border-border p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                <User className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-secondary font-sans text-sm font-medium mb-1">{member.role}</p>
              {member.oab && (
                <p className="text-muted-foreground text-xs mb-4">{member.oab}</p>
              )}
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NossaEquipe;
