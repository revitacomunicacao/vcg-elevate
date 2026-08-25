import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FileStack,
  Gavel,
  HeartHandshake,
  Home,
  MessageCircle,
  Route,
  Scale,
  ScrollText,
  Shield,
  Users,
} from "lucide-react";
import drVinicius from "@/assets/DrVinicius.jpeg";
import { ADDRESS, IMG, LOGO, TEL_LABEL } from "./shared";
import {
  LpCtaGroup,
  LpDisclaimer,
  LpEyebrow,
  LpLawyerHover,
  LpShell,
} from "./LpUi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  const pains = [
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
  ];

  const steps = [
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
  ];

  return (
    <LpShell>
      <div className="min-h-screen bg-[#12141a] text-[#e8eaef]">
        <section className="min-h-[100dvh] grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col px-6 md:px-12 py-8">
            <img src={LOGO} alt="VCG" className="h-11 w-auto self-start" />
            <div className="flex-1 flex flex-col justify-center py-16 max-w-2xl">
              <LpEyebrow>Famílias · Uberaba/MG</LpEyebrow>
              <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
                Divórcio consensual ou litigioso com segurança jurídica
              </h1>
              <p className="mt-6 text-[#9aa3b2] text-lg leading-relaxed max-w-[42ch]">
                Condução do processo de divórcio, em cartório ou judicial, com atenção à partilha de bens, às dívidas do
                casal e ao bem-estar dos filhos durante a transição.
              </p>
              <div className="mt-9">
                <LpCtaGroup waLabel="Quero conversar agora" />
              </div>
              <Separator className="mt-12 mb-8 bg-white/10" />
              <div className="grid grid-cols-2 gap-6">
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
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <LpLawyerHover>
                <button type="button" className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4a35a]">
                  <img
                    src={drVinicius}
                    alt="Dr. Vinicius"
                    className="h-36 w-36 rounded-full object-cover border-4 border-[#c4a35a] shadow-2xl"
                  />
                </button>
              </LpLawyerHover>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2 {...fade} className="font-serif text-3xl md:text-5xl font-bold mb-3">
              Você não está sozinho(a) nessa
            </motion.h2>
            <p className="text-[#9aa3b2] mb-12">Dúvidas frequentes de quem está iniciando um processo de divórcio.</p>
            <ItemGroup className="gap-0">
              {pains.map((item) => (
                <motion.div key={item.t} {...fade}>
                  <Item variant="outline" className="border-white/10 bg-transparent rounded-none border-x-0 border-t-0 first:border-t py-6 md:py-8">
                    <ItemMedia variant="icon" className="bg-[#c4a35a]/15 border-[#c4a35a]/30 text-[#c4a35a] size-10">
                      <item.icon className="h-5 w-5" />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle className="font-serif text-xl md:text-2xl text-white">{item.t}</ItemTitle>
                      <ItemDescription className="text-[#9aa3b2] text-base line-clamp-none">{item.b}</ItemDescription>
                    </ItemContent>
                  </Item>
                </motion.div>
              ))}
            </ItemGroup>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-4 items-stretch">
            <div className="relative min-h-[280px] overflow-hidden rounded-lg bg-[#1a1d26] lg:min-h-0">
              <img src={IMG.homeKeys} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4 content-start">
              <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-lg">
                <img src={IMG.documents} alt="" className="h-full w-full object-cover" />
              </AspectRatio>
              <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-lg">
                <img src={IMG.handshake} alt="" className="h-full w-full object-cover" />
              </AspectRatio>
              <div className="col-span-2 rounded-lg border border-white/10 bg-[#1a1d26] p-6 md:p-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-5">Como podemos ajudar</h2>
                <Tabs defaultValue="cartorio" className="w-full">
                  <TabsList className="bg-white/5 text-[#9aa3b2] h-auto p-1 w-full grid grid-cols-2">
                    <TabsTrigger
                      value="cartorio"
                      className="data-[state=active]:bg-[#c4a35a] data-[state=active]:text-[#12141a] text-inherit"
                    >
                      Cartório
                    </TabsTrigger>
                    <TabsTrigger
                      value="judicial"
                      className="data-[state=active]:bg-[#c4a35a] data-[state=active]:text-[#12141a] text-inherit"
                    >
                      Judicial
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="cartorio" className="mt-5">
                    <ul className="space-y-3">
                      {[
                        "Divórcio extrajudicial (em cartório)",
                        "Partilha de bens e dívidas do casal",
                        "Alteração de regime de bens durante o casamento",
                      ].map((s) => (
                        <li key={s} className="flex gap-2 text-sm text-[#c5cad3]">
                          <ScrollText className="h-4 w-4 text-[#c4a35a] shrink-0 mt-0.5" /> {s}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="judicial" className="mt-5">
                    <ul className="space-y-3">
                      {[
                        "Divórcio judicial consensual",
                        "Divórcio litigioso",
                        "Conversão de separação em divórcio",
                      ].map((s) => (
                        <li key={s} className="flex gap-2 text-sm text-[#c5cad3]">
                          <ScrollText className="h-4 w-4 text-[#c4a35a] shrink-0 mt-0.5" /> {s}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#0c0e12]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">Como funciona o atendimento</h2>
            <p className="text-[#9aa3b2] mb-6">Do primeiro contato até o registro do divórcio.</p>
            <Progress value={100} className="h-1.5 mb-14 bg-white/10 [&>div]:bg-[#c4a35a]" />
            <div className="relative pl-10 space-y-10 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-[#c4a35a]/40">
              {steps.map((s, i) => (
                <motion.div key={s.t} {...fade} className="relative">
                  <span className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#c4a35a] text-[#12141a]">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <p className="text-[11px] uppercase tracking-widest text-[#c4a35a]/80 mb-1">
                    Etapa {i + 1} de {steps.length}
                  </p>
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
            <Accordion type="single" collapsible>
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
            <div className="mt-8 flex justify-center">
              <LpCtaGroup waLabel="Marcar uma conversa" telLabel={TEL_LABEL} />
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-10 px-6 text-center text-[#7a8494] text-xs">
          <p className="font-serif text-white text-base">Advocacia Vinicius Carneiro Gonçalves</p>
          <p className="text-[#c4a35a] mt-1">Direito das Famílias e Sucessões</p>
          <p className="mt-3">{ADDRESS}</p>
          <LpDisclaimer />
        </footer>
      </div>
    </LpShell>
  );
}
