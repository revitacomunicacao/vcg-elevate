import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FileStack,
  Gavel,
  HeartHandshake,
  Home,
  MessageCircle,
  Phone,
  Route,
  Scale,
  ScrollText,
  Shield,
  Users,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import drVinicius from "@/assets/DrVinicius.jpeg";
import { ADDRESS, DISCLAIMER, IMG, LOGO, TEL, WA } from "./shared";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Referência visual: Inventário (escuro, tipografia forte, timeline, galeria). */
export default function DivorcioPage() {
  const reduce = useReducedMotion();

  useEffect(() => {
    document.title = "Advogado de Divórcio em Uberaba/MG | Consensual e Litigioso";
  }, []);

  const fade = {
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 } as const,
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-[#12141a] text-[#e8eaef]">
      <section className="min-h-[100dvh] grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col px-6 md:px-12 py-8">
          <img src={LOGO} alt="VCG" className="h-11 w-auto self-start" />
          <div className="flex-1 flex flex-col justify-center py-16 max-w-2xl">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#c4a35a] mb-5">
              Famílias · Uberaba/MG
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Divórcio consensual ou litigioso com segurança jurídica
            </h1>
            <p className="mt-6 text-[#9aa3b2] text-lg leading-relaxed max-w-[42ch]">
              Condução do processo de divórcio, em cartório ou judicial, com atenção à partilha de bens, às dívidas do
              casal e ao bem-estar dos filhos durante a transição.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#c4a35a] text-[#12141a] font-semibold px-6 py-3 rounded-md text-sm"
              >
                <WhatsAppIcon className="h-5 w-5" /> Quero conversar agora
              </a>
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3 rounded-md text-sm hover:bg-white/5"
              >
                <Phone className="h-4 w-4" /> Ligar agora
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              {[
                ["+26 anos", "de experiência"],
                ["Uberaba/MG", "presencial e on-line"],
                ["Família", "foco de atuação"],
                ["Direto", "com o advogado"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-serif text-2xl text-[#c4a35a]">{v}</p>
                  <p className="text-xs text-[#7a8494] mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative min-h-[40vh] lg:min-h-full">
          <img src={IMG.familyGathering} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#12141a]/45" />
          <img
            src={drVinicius}
            alt="Dr. Vinicius"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 h-36 w-36 rounded-full object-cover border-4 border-[#c4a35a] shadow-2xl"
          />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fade} className="font-serif text-3xl md:text-5xl font-bold mb-3">
            Você não está sozinho(a) nessa
          </motion.h2>
          <p className="text-[#9aa3b2] mb-12">Dúvidas frequentes de quem está iniciando um processo de divórcio.</p>
          <div className="space-y-0">
            {[
              {
                icon: Route,
                t: "Qual caminho seguir",
                b: "O casal já decidiu se separar, mas não sabe se o divórcio pode ser feito em cartório ou exige processo judicial.",
              },
              {
                icon: Home,
                t: "Divergências sobre bens",
                b: "Não há consenso sobre a partilha de imóveis, veículos, contas ou dívidas contraídas durante o casamento.",
              },
              {
                icon: Users,
                t: "Um dos cônjuges resiste",
                b: "Uma das partes não concorda com o divórcio ou dificulta o andamento do processo.",
              },
              {
                icon: HeartHandshake,
                t: "Pensão e nome de casado",
                b: "Dúvidas sobre pensão entre ex-cônjuges e sobre a manutenção ou retirada do sobrenome de casamento.",
              },
            ].map((item) => (
              <motion.div
                key={item.t}
                {...fade}
                className="grid md:grid-cols-[4rem_1fr_1.2fr] gap-4 md:gap-8 py-8 border-t border-white/10 items-start"
              >
                <item.icon className="h-8 w-8 text-[#c4a35a]" />
                <h3 className="font-serif text-xl md:text-2xl font-semibold">{item.t}</h3>
                <p className="text-[#9aa3b2] leading-relaxed">{item.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-4">
          <img src={IMG.homeKeys} alt="" className="rounded-lg object-cover w-full h-64 md:h-full min-h-[280px]" />
          <div className="grid grid-cols-2 gap-4">
            <img src={IMG.documents} alt="" className="rounded-lg object-cover w-full h-40 md:h-52" />
            <img src={IMG.handshake} alt="" className="rounded-lg object-cover w-full h-40 md:h-52" />
            <div className="col-span-2 rounded-lg bg-[#1a1d26] border border-white/10 p-6 md:p-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Como podemos ajudar</h2>
              <ul className="space-y-3">
                {[
                  "Divórcio extrajudicial (em cartório)",
                  "Divórcio judicial consensual",
                  "Divórcio litigioso",
                  "Partilha de bens e dívidas do casal",
                  "Conversão de separação em divórcio",
                  "Alteração de regime de bens durante o casamento",
                ].map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-[#c5cad3]">
                    <ScrollText className="h-4 w-4 text-[#c4a35a] shrink-0 mt-0.5" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0c0e12]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">Como funciona o atendimento</h2>
          <p className="text-[#9aa3b2] mb-14">Do primeiro contato até o registro do divórcio.</p>
          <div className="relative pl-10 space-y-10 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-[#c4a35a]/40">
            {[
              {
                icon: MessageCircle,
                t: "Atendimento inicial",
                b: "Levantamento da situação conjugal, patrimonial e familiar do casal.",
              },
              {
                icon: FileStack,
                t: "Análise do cenário",
                b: "Verificação de bens, dívidas, filhos menores e nível de consenso entre as partes.",
              },
              {
                icon: Scale,
                t: "Definição da via",
                b: "Indicação entre divórcio extrajudicial (cartório) ou judicial, consensual ou litigioso.",
              },
              {
                icon: Shield,
                t: "Condução até o registro",
                b: "Acompanhamento de todas as etapas até a formalização e o registro do divórcio.",
              },
            ].map((s) => (
              <motion.div key={s.t} {...fade} className="relative">
                <span className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#c4a35a] text-[#12141a]">
                  <s.icon className="h-4 w-4" />
                </span>
                <h3 className="font-serif text-xl font-semibold">{s.t}</h3>
                <p className="mt-1 text-[#9aa3b2] text-sm leading-relaxed">{s.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Gavel className="h-8 w-8 text-[#c4a35a]" />
            <h2 className="font-serif text-3xl font-bold">Dúvidas comuns sobre divórcio</h2>
          </div>
          <Accordion type="single" collapsible className="border-white/10">
            {[
              [
                "Divórcio em cartório é sempre mais rápido?",
                "Em geral sim, mas só é possível quando o casal está de acordo em todos os pontos e não há filhos menores ou incapazes envolvidos.",
              ],
              [
                "Preciso provar culpa para me divorciar?",
                "Não. Desde a Emenda Constitucional 66/2010, o divórcio no Brasil não exige a comprovação de culpa de nenhuma das partes.",
              ],
              [
                "Como fica a partilha de bens adquiridos antes do casamento?",
                "Depende do regime de bens adotado. Em regra, bens anteriores ao casamento não entram na partilha, mas há exceções conforme o regime escolhido.",
              ],
              [
                "Posso me divorciar em cartório se tenho filhos menores?",
                "Sim, é possível, desde que cumpridos os requisitos estabelecidos pelo Conselho Nacional de Justiça (CNJ).",
              ],
              [
                "O divórcio define automaticamente a guarda dos filhos?",
                "A guarda costuma ser tratada dentro do mesmo processo de divórcio judicial, mas pode também ser objeto de ação própria, conforme o caso.",
              ],
            ].map(([q, a], i) => (
              <AccordionItem key={q} value={`d-${i}`} className="border-white/10">
                <AccordionTrigger className="font-serif text-left text-lg text-white hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-[#9aa3b2]">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative py-24">
        <img src={IMG.friendsTalk} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-[#12141a]/85" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Converse com um advogado antes de decidir o caminho do seu divórcio
          </h2>
          <p className="mt-3 text-[#9aa3b2]">Atendimento presencial ou on-line, mediante agendamento prévio.</p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#c4a35a] text-[#12141a] font-semibold px-8 py-3.5 rounded-md"
          >
            <WhatsAppIcon className="h-5 w-5" /> Marcar uma conversa
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 text-center text-[#7a8494] text-xs">
        <p className="font-serif text-white text-base">Advocacia Vinicius Carneiro Gonçalves</p>
        <p className="text-[#c4a35a] mt-1">Direito das Famílias e Sucessões</p>
        <p className="mt-3">{ADDRESS}</p>
        <p className="mt-4 max-w-3xl mx-auto leading-relaxed opacity-80">{DISCLAIMER}</p>
      </footer>
    </div>
  );
}
