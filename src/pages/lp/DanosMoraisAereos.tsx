import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  BaggageClaim,
  CalendarX,
  Plane,
  PlaneTakeoff,
  Phone,
  FileCheck,
  MessageCircle,
  Scale,
  ShieldCheck,
  Ticket,
  Timer,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import drVinicius from "@/assets/DrVinicius.jpeg";
import { ADDRESS, DISCLAIMER, IMG, LOGO, TEL, TEL_LABEL, WA } from "./shared";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Layout C: visual aéreo - slate + ouro, mosaico de fotos de viagem, ícones fortes. */
export default function DanosMoraisAereosPage() {
  const reduce = useReducedMotion();

  useEffect(() => {
    document.title = "Advogado para Indenização por Danos Morais em Problemas Aéreos | Uberaba/MG";
  }, []);

  const fade = {
    initial: reduce ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 } as const,
    transition: { duration: 0.5 },
  };

  const situations = [
    { icon: Timer, img: IMG.airport, title: "Atraso ou cancelamento de voo", body: "Voo atrasado por horas ou cancelado sem a assistência devida da companhia aérea (alimentação, hospedagem, transporte)." },
    { icon: Ticket, img: IMG.terminal, title: "Overbooking (recusa de embarque)", body: "Passageiro impedido de embarcar mesmo com passagem confirmada, por venda de assentos além da capacidade da aeronave." },
    { icon: BaggageClaim, img: IMG.luggage, title: "Extravio ou avaria de bagagem", body: "Mala extraviada, danificada ou com itens faltando, sem solução satisfatória por parte da companhia aérea." },
    { icon: CalendarX, img: IMG.planeWing, title: "Perda de compromisso importante", body: "Atraso ou cancelamento que resultou em perda de conexão, evento, compromisso de trabalho ou viagem programada." },
  ];

  return (
    <div className="min-h-screen bg-[#0f1724] text-white">
      {/* Hero diagonal */}
      <section className="relative min-h-[100dvh] overflow-hidden">
        <img src={IMG.airport} alt="" className="absolute inset-0 h-full w-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1724] via-[#0f1724]/80 to-[#0f1724]/30" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-6 pb-16 min-h-[100dvh] flex flex-col">
          <div className="flex items-center justify-between">
            <img src={LOGO} alt="VCG" className="h-10 w-auto" />
            <Plane className="h-7 w-7 text-[#c4a35a]" />
          </div>
          <div className="flex-1 flex flex-col justify-end md:justify-center max-w-3xl py-12">
            <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#c4a35a] mb-4">
              <PlaneTakeoff className="h-4 w-4" /> Direito do Consumidor
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-balance">
              Problemas com voo? Você pode ter direito a indenização por danos morais
            </h1>
            <p className="mt-5 text-white/75 text-lg max-w-[48ch] leading-relaxed">
              Atraso, cancelamento, overbooking ou extravio de bagagem podem gerar direito a indenização. Avaliação do
              seu caso com orientação jurídica clara sobre os próximos passos.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#c4a35a] text-[#0f1724] font-semibold px-6 py-3 rounded-lg text-sm">
                <WhatsAppIcon className="h-5 w-5" /> Avaliar meu caso
              </a>
              <a href={TEL} className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3 rounded-lg text-sm hover:bg-white/10">
                <Phone className="h-4 w-4" /> Preferir ligar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de stats com ícones em chips */}
      <section className="bg-[#162033] border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 py-8 flex flex-wrap gap-4 justify-center md:justify-between">
          {[
            { icon: Scale, t: "+26 anos de experiência" },
            { icon: ShieldCheck, t: "Uberaba/MG presencial e on-line" },
            { icon: AlertTriangle, t: "Foco em Direito do Consumidor" },
            { icon: FileCheck, t: "Atendimento direto com o advogado" },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/85">
              <Icon className="h-4 w-4 text-[#c4a35a]" /> {t}
            </div>
          ))}
        </div>
      </section>

      {/* Situações: cards com foto de fundo */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <motion.div {...fade} className="mb-12 max-w-2xl">
            <h2 className="font-serif text-3xl md:text-5xl font-bold">Situações que geram direito a indenização</h2>
            <p className="mt-3 text-white/60">Problemas comuns em viagens aéreas que podem justificar reparação.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {situations.map((s) => (
              <motion.article key={s.title} {...fade} className="group relative min-h-[280px] rounded-2xl overflow-hidden">
                <img src={s.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1724] via-[#0f1724]/70 to-[#0f1724]/20" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                  <s.icon className="h-8 w-8 text-[#c4a35a] mb-3" />
                  <h3 className="font-serif text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed">{s.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços + foto */}
      <section className="py-20 bg-[#162033]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={IMG.planeWing} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Como podemos ajudar</h2>
            <p className="mt-2 text-white/60 mb-8">Atuação em causas envolvendo viagens aéreas e relações de consumo.</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Ação de indenização por danos morais e materiais decorrentes de problemas aéreos",
                "Ressarcimento por atraso ou cancelamento de voo",
                "Indenização por overbooking (recusa de embarque)",
                "Reparação por extravio, avaria ou perda de bagagem",
                "Reembolso de despesas extras (hospedagem, alimentação, transporte alternativo)",
                "Negociação extrajudicial e ação em Juizado Especial Cível contra companhias aéreas",
              ].map((s) => (
                <li key={s} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-snug flex gap-2">
                  <PlaneTakeoff className="h-4 w-4 text-[#c4a35a] shrink-0 mt-0.5" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Processo horizontal scroll */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Como funciona o atendimento</h2>
          <p className="mt-2 text-white/60">Da análise dos documentos até o acordo ou a decisão.</p>
        </div>
        <div className="flex gap-5 overflow-x-auto px-5 md:px-10 pb-4 snap-x">
          {[
            { icon: MessageCircle, t: "Atendimento inicial", b: "Conversamos sobre o ocorrido durante a viagem e reunimos os documentos disponíveis (passagem, comprovantes, protocolos)." },
            { icon: FileCheck, t: "Análise documental", b: "Levantamento dos fatos à luz do Código de Defesa do Consumidor e das normas da ANAC aplicáveis ao caso." },
            { icon: Scale, t: "Estratégia definida", b: "Indicação do caminho mais adequado: negociação direta com a companhia aérea ou ação judicial." },
            { icon: ShieldCheck, t: "Acompanhamento", b: "Condução do processo, no Juizado Especial Cível ou na Justiça Comum, até a decisão ou o acordo final." },
          ].map((s, i) => (
            <div key={s.t} className="snap-start shrink-0 w-[300px] rounded-2xl bg-[#162033] border border-white/10 p-6">
              <div className="flex items-center justify-between mb-6">
                <s.icon className="h-8 w-8 text-[#c4a35a]" />
                <span className="font-serif text-3xl text-white/20">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-5 bg-[#162033]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[280px_1fr] gap-10 items-start">
          <img src={drVinicius} alt="Dr. Vinicius" className="rounded-2xl object-cover w-full aspect-square max-w-[280px]" />
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">Por que escolher a Advocacia Vinicius Carneiro Gonçalves</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                ["Mais de 26 anos de atuação", "Experiência jurídica consolidada, com atuação em causas envolvendo relações de consumo e problemas em viagens aéreas, em Uberaba e região."],
                ["Atendimento direto com o advogado", "Você conversa com quem efetivamente conduz o seu caso, sem intermediários, do primeiro contato até a solução."],
                ["Análise estratégica antes de agir", "Cada caso é estudado com cuidado para indicar o caminho mais adequado: consensual, extrajudicial ou judicial."],
                ["Atendimento presencial e on-line", "Reuniões no escritório em Uberaba/MG ou por videochamada, conforme a sua disponibilidade."],
              ].map(([t, b]) => (
                <div key={t} className="rounded-xl border border-white/10 p-5">
                  <h3 className="font-serif font-semibold text-lg text-[#c4a35a]">{t}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-6">Dúvidas comuns sobre indenização por problemas aéreos</h2>
          <Accordion type="single" collapsible>
            {[
              ["Voo atrasado dá direito a indenização por dano moral?", "Em muitos casos sim, especialmente quando o atraso é significativo e a companhia aérea não presta a assistência devida (alimentação, hospedagem, comunicação), causando transtorno relevante ao passageiro."],
              ["Cancelamento de voo gera direito a indenização?", "Pode gerar, a depender das circunstâncias e da falha na prestação de assistência ou informação ao passageiro, além do reembolso ou reacomodação a que ele tem direito."],
              ["O que fazer em caso de overbooking (recusa de embarque)?", "O passageiro deve exigir da companhia aérea a assistência devida (reacomodação, reembolso, alimentação e hospedagem, quando aplicável) e reunir provas do ocorrido, como cartão de embarque e comunicações."],
              ["Extravio de bagagem gera direito a indenização?", "Sim, o extravio, avaria ou perda de bagagem pode gerar direito a indenização por danos materiais e, dependendo do caso, também por danos morais."],
              ["Qual o prazo para entrar com ação contra a companhia aérea?", "O prazo de prescrição pode variar conforme a natureza do transporte (nacional ou internacional) e do pedido. É recomendável buscar orientação jurídica assim que possível para não perder o prazo aplicável ao caso."],
            ].map(([q, a], i) => (
              <AccordionItem key={q} value={`a-${i}`} className="border-white/15">
                <AccordionTrigger className="font-serif text-left text-lg text-white hover:no-underline">{q}</AccordionTrigger>
                <AccordionContent className="text-white/65">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative py-24 text-center">
        <img src={IMG.luggage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0f1724]/85" />
        <div className="relative z-10 max-w-2xl mx-auto px-5">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Fale com um advogado sobre o seu caso envolvendo problemas em viagem aérea</h2>
          <p className="mt-3 text-white/70">Atendimento presencial ou on-line, mediante agendamento prévio.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#c4a35a] text-[#0f1724] font-semibold px-7 py-3 rounded-lg">
              <WhatsAppIcon className="h-5 w-5" /> Quero orientação
            </a>
            <a href={TEL} className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-3 rounded-lg">
              <Phone className="h-4 w-4" /> {TEL_LABEL}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a1018] py-10 px-5 text-center text-white/50 text-xs">
        <p className="font-serif text-white text-base">Advocacia Vinicius Carneiro Gonçalves</p>
        <p className="text-[#c4a35a] mt-1">Direito do Consumidor - Viagens Aéreas</p>
        <p className="mt-3">{ADDRESS}</p>
        <p className="mt-4 max-w-3xl mx-auto leading-relaxed">{DISCLAIMER}</p>
      </footer>
    </div>
  );
}
