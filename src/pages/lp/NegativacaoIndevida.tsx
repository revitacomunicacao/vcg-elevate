import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  BadgeCheck,
  Ban,
  BellOff,
  CircleDollarSign,
  FileCheck,
  FileWarning,
  LockKeyhole,
  MessageCircle,
  Phone,
  Scale,
  Shield,
  ShieldAlert,
  ShieldCheck,
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

/** Referência visual: Danos Morais Aéreos (hero full-bleed, chips, cards com foto, scroll). */
export default function NegativacaoIndevidaPage() {
  const reduce = useReducedMotion();

  useEffect(() => {
    document.title = "Advogado para Indenização por Negativação Indevida do Nome | Uberaba/MG";
  }, []);

  const fade = {
    initial: reduce ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 } as const,
    transition: { duration: 0.5 },
  };

  const situations = [
    {
      icon: CircleDollarSign,
      img: IMG.creditStress,
      title: "Dívida já paga",
      body: "Nome permanece negativado mesmo após a quitação do débito, por falha da empresa em atualizar o cadastro.",
    },
    {
      icon: Ban,
      img: IMG.laptop,
      title: "Dívida inexistente ou fraude",
      body: "Cobrança e negativação por dívida que a pessoa nunca contraiu, muitas vezes resultado de fraude ou golpe em seu nome.",
    },
    {
      icon: FileWarning,
      img: IMG.protect,
      title: "Cobrança indevida",
      body: "Valor cobrado é diferente do contratado, já foi contestado ou está prescrito, mas mesmo assim gerou negativação.",
    },
    {
      icon: BellOff,
      img: IMG.documents,
      title: "Ausência de notificação prévia",
      body: "Nome incluído nos órgãos de proteção ao crédito sem o aviso prévio exigido por lei.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1724] text-white">
      <section className="relative min-h-[100dvh] overflow-hidden">
        <img src={IMG.finance} alt="" className="absolute inset-0 h-full w-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1724] via-[#0f1724]/80 to-[#0f1724]/30" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-6 pb-16 min-h-[100dvh] flex flex-col">
          <div className="flex items-center justify-between">
            <img src={LOGO} alt="VCG" className="h-10 w-auto" />
            <ShieldAlert className="h-7 w-7 text-[#c4a35a]" />
          </div>
          <div className="flex-1 flex flex-col justify-end md:justify-center max-w-3xl py-12">
            <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#c4a35a] mb-4">
              <LockKeyhole className="h-4 w-4" /> Direito do Consumidor
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-balance">
              Seu nome foi negativado indevidamente? Você pode ter direito a indenização
            </h1>
            <p className="mt-5 text-white/75 text-lg max-w-[48ch] leading-relaxed">
              Cobrança indevida, dívida já paga ou fraude podem levar seu nome ao SPC ou Serasa sem justa causa.
              Avaliação do seu caso com orientação jurídica clara sobre os próximos passos.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#c4a35a] text-[#0f1724] font-semibold px-6 py-3 rounded-lg text-sm"
              >
                <WhatsAppIcon className="h-5 w-5" /> Verificar meus direitos
              </a>
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3 rounded-lg text-sm hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> Preferir ligar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#162033] border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 py-8 flex flex-wrap gap-4 justify-center md:justify-between">
          {[
            { icon: Scale, t: "+26 anos de experiência" },
            { icon: ShieldCheck, t: "Uberaba/MG presencial e on-line" },
            { icon: AlertTriangle, t: "Foco em Direito do Consumidor" },
            { icon: FileCheck, t: "Atendimento direto com o advogado" },
          ].map(({ icon: Icon, t }) => (
            <div
              key={t}
              className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/85"
            >
              <Icon className="h-4 w-4 text-[#c4a35a]" /> {t}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <motion.div {...fade} className="mb-12 max-w-2xl">
            <h2 className="font-serif text-3xl md:text-5xl font-bold">Situações que geram direito a indenização</h2>
            <p className="mt-3 text-white/60">Casos frequentes de negativação indevida do nome.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {situations.map((s) => (
              <motion.article key={s.title} {...fade} className="group relative min-h-[280px] rounded-2xl overflow-hidden">
                <img
                  src={s.img}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
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

      <section className="py-20 bg-[#162033]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={IMG.meeting} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Como podemos ajudar</h2>
            <p className="mt-2 text-white/60 mb-8">Atuação para exclusão da negativação e reparação dos danos.</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Ação de indenização por danos morais por negativação indevida",
                "Exclusão do nome do SPC e Serasa (baixa da negativação)",
                "Declaração de inexistência de débito",
                "Contestação de dívidas decorrentes de fraude",
                "Revisão de cobranças e valores indevidos",
                "Negociação extrajudicial com credores e instituições financeiras",
              ].map((s) => (
                <li key={s} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-snug flex gap-2">
                  <BadgeCheck className="h-4 w-4 text-[#c4a35a] shrink-0 mt-0.5" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Como funciona o atendimento</h2>
          <p className="mt-2 text-white/60">Da análise do extrato SPC/Serasa até a solução do caso.</p>
        </div>
        <div className="flex gap-5 overflow-x-auto px-5 md:px-10 pb-4 snap-x">
          {[
            {
              icon: MessageCircle,
              t: "Atendimento inicial",
              b: "Conversamos sobre a negativação e reunimos os documentos disponíveis (extrato do SPC/Serasa, comprovantes, contratos).",
            },
            {
              icon: FileCheck,
              t: "Análise documental",
              b: "Levantamento dos fatos à luz do Código de Defesa do Consumidor para verificar a existência e a regularidade da dívida.",
            },
            {
              icon: Scale,
              t: "Estratégia definida",
              b: "Indicação do caminho mais adequado: negociação direta com o credor ou ação judicial, inclusive com pedido de liminar para retirada do nome.",
            },
            {
              icon: ShieldCheck,
              t: "Acompanhamento",
              b: "Condução do processo, no Juizado Especial Cível ou na Justiça Comum, até a decisão ou o acordo final.",
            },
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
                [
                  "Mais de 26 anos de atuação",
                  "Experiência jurídica consolidada, com atuação em causas envolvendo relações de consumo e negativação indevida do nome, em Uberaba e região.",
                ],
                [
                  "Atendimento direto com o advogado",
                  "Você conversa com quem efetivamente conduz o seu caso, sem intermediários, do primeiro contato até a solução.",
                ],
                [
                  "Análise estratégica antes de agir",
                  "Cada caso é estudado com cuidado para indicar o caminho mais adequado: consensual, extrajudicial ou judicial.",
                ],
                [
                  "Atendimento presencial e on-line",
                  "Reuniões no escritório em Uberaba/MG ou por videochamada, conforme a sua disponibilidade.",
                ],
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
          <h2 className="font-serif text-3xl font-bold mb-6">Dúvidas comuns sobre negativação indevida</h2>
          <Accordion type="single" collapsible>
            {[
              [
                "Negativação indevida sempre gera direito a indenização por dano moral?",
                "Em muitos casos sim: a jurisprudência entende que a negativação indevida gera dano moral presumido, dispensando prova do prejuízo, sobretudo quando a dívida é inexistente.",
              ],
              [
                "Meu nome ficou negativado mesmo depois de eu pagar a dívida. O que fazer?",
                "É possível pedir a exclusão do nome dos cadastros de proteção ao crédito e buscar indenização pelo período em que a negativação permaneceu indevidamente.",
              ],
              [
                "Fui vítima de fraude e meu nome foi negativado por uma dívida que não contraí. Tenho direito a algo?",
                "Sim. Nesses casos, é possível pedir a declaração de inexistência do débito, a exclusão da negativação e indenização pelos danos causados.",
              ],
              [
                "É possível pedir a retirada urgente do nome do SPC/Serasa?",
                "Sim, em muitos casos é possível pedir uma liminar para a retirada imediata do nome dos cadastros, antes mesmo do julgamento final da ação.",
              ],
              [
                "Qual o prazo para entrar com ação por negativação indevida?",
                "O prazo de prescrição para ações de reparação civil é, em regra, de 5 anos, contados da data em que a pessoa tomou conhecimento da negativação indevida. É recomendável buscar orientação jurídica assim que possível.",
              ],
            ].map(([q, a], i) => (
              <AccordionItem key={q} value={`n-${i}`} className="border-white/15">
                <AccordionTrigger className="font-serif text-left text-lg text-white hover:no-underline">{q}</AccordionTrigger>
                <AccordionContent className="text-white/65">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative py-24 text-center">
        <img src={IMG.teamWork} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0f1724]/85" />
        <div className="relative z-10 max-w-2xl mx-auto px-5">
          <Shield className="h-10 w-10 text-[#c4a35a] mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Fale com um advogado sobre o seu caso de negativação indevida do nome
          </h2>
          <p className="mt-3 text-white/70">Atendimento presencial ou on-line, mediante agendamento prévio.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#c4a35a] text-[#0f1724] font-semibold px-7 py-3 rounded-lg"
            >
              <WhatsAppIcon className="h-5 w-5" /> Solicitar análise
            </a>
            <a href={TEL} className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-3 rounded-lg">
              <Phone className="h-4 w-4" /> {TEL_LABEL}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a1018] py-10 px-5 text-center text-white/50 text-xs">
        <p className="font-serif text-white text-base">Advocacia Vinicius Carneiro Gonçalves</p>
        <p className="text-[#c4a35a] mt-1">Direito do Consumidor - Negativação Indevida</p>
        <p className="mt-3">{ADDRESS}</p>
        <p className="mt-4 max-w-3xl mx-auto leading-relaxed">{DISCLAIMER}</p>
      </footer>
    </div>
  );
}
