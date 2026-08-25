import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Clock,
  FileStack,
  Gavel,
  Landmark,
  ScrollText,
  Shield,
  Users,
  Wallet,
  MessageCircle,
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

/** Layout B: solene escuro - tipografia forte + timeline vertical + biblioteca/documentos. */
export default function InventarioPage() {
  const reduce = useReducedMotion();

  useEffect(() => {
    document.title = "Advogado de Inventário em Uberaba/MG | Extrajudicial e Judicial";
  }, []);

  const fade = {
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 } as const,
    transition: { duration: 0.5 },
  };

  const pains = [
    {
      icon: BookOpen,
      t: "Por onde começar",
      b: "Falecimento de um familiar e nenhuma orientação clara sobre os primeiros passos do inventário.",
    },
    {
      icon: Landmark,
      t: "Cartório ou processo judicial",
      b: "Dúvida se o inventário pode ser feito por escritura pública ou se exige necessariamente um processo judicial.",
    },
    {
      icon: Users,
      t: "Herdeiros em desacordo",
      b: "Divergências entre os herdeiros sobre a forma de partilhar os bens deixados.",
    },
    {
      icon: Clock,
      t: "Prazo se esgotando",
      b: "Receio de multa por atraso na abertura do inventário e no pagamento do imposto (ITCMD).",
    },
  ];

  const steps = [
    {
      icon: MessageCircle,
      t: "Atendimento inicial",
      b: "Levantamento da situação familiar, dos bens deixados e da existência de testamento.",
    },
    {
      icon: FileStack,
      t: "Organização documental",
      b: "Reunião de certidões, documentos dos bens e informações necessárias ao inventário.",
    },
    {
      icon: Gavel,
      t: "Definição da via",
      b: "Avaliação sobre a possibilidade de inventário extrajudicial ou a necessidade de via judicial.",
    },
    {
      icon: Shield,
      t: "Condução até a partilha",
      b: "Acompanhamento de todas as etapas até a formalização da partilha entre os herdeiros.",
    },
  ];

  return (
    <LpShell>
      <div className="min-h-screen bg-[#12141a] text-[#e8eaef]">
        <section className="min-h-[100dvh] grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col px-6 md:px-12 py-8">
            <img src={LOGO} alt="VCG" className="h-11 w-auto self-start" />
            <div className="flex-1 flex flex-col justify-center py-16 max-w-2xl">
              <LpEyebrow>Sucessões · Uberaba/MG</LpEyebrow>
              <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
                Inventário extrajudicial e judicial de bens
              </h1>
              <p className="mt-6 text-[#9aa3b2] text-lg leading-relaxed max-w-[40ch]">
                Condução do inventário e da partilha de bens após o falecimento, buscando o caminho mais ágil e seguro
                para os herdeiros.
              </p>
              <div className="mt-9">
                <LpCtaGroup waLabel="Pedir orientação" />
              </div>
              <Separator className="mt-12 mb-8 bg-white/10" />
              <div className="grid grid-cols-2 gap-6">
                {[
                  ["+26 anos", "de experiência"],
                  ["Uberaba/MG", "presencial e on-line"],
                  ["Sucessões", "foco de atuação"],
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
            <img src={IMG.library} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[#12141a]/40" />
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
            <p className="text-[#9aa3b2] mb-12">Dúvidas comuns de quem precisa abrir um inventário.</p>
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
              <img src={IMG.documents} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4 content-start">
              <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-lg">
                <img src={IMG.justice} alt="" className="h-full w-full object-cover" />
              </AspectRatio>
              <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-lg">
                <img src={IMG.handshake} alt="" className="h-full w-full object-cover" />
              </AspectRatio>
              <div className="col-span-2 rounded-lg border border-white/10 bg-[#1a1d26] p-6 md:p-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-5">Como podemos ajudar</h2>
                <Tabs defaultValue="extra" className="w-full">
                  <TabsList className="bg-white/5 text-[#9aa3b2] h-auto p-1 w-full grid grid-cols-2">
                    <TabsTrigger
                      value="extra"
                      className="data-[state=active]:bg-[#c4a35a] data-[state=active]:text-[#12141a] text-inherit"
                    >
                      Extrajudicial
                    </TabsTrigger>
                    <TabsTrigger
                      value="judicial"
                      className="data-[state=active]:bg-[#c4a35a] data-[state=active]:text-[#12141a] text-inherit"
                    >
                      Judicial
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="extra" className="mt-5">
                    <ul className="space-y-3">
                      {[
                        "Inventário extrajudicial (escritura pública)",
                        "Levantamento e organização de bens e dívidas do espólio",
                        "Orientação sobre cálculo e pagamento do ITCMD",
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
                        "Inventário judicial",
                        "Sobrepartilha de bens descobertos posteriormente",
                        "Alvará judicial para levantamento de valores",
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
            <p className="text-[#9aa3b2] mb-6">Da organização documental até a partilha.</p>
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
              <Wallet className="h-8 w-8 text-[#c4a35a]" />
              <h2 className="font-serif text-3xl font-bold">Dúvidas comuns sobre inventário</h2>
            </div>
            <Accordion type="single" collapsible>
              {[
                [
                  "Qual o prazo para abrir o inventário após o falecimento?",
                  "O prazo geral é de 60 dias a partir do óbito para dar início ao inventário; o atraso pode gerar multa sobre o ITCMD, com percentual variável conforme a legislação estadual.",
                ],
                [
                  "Quando o inventário pode ser feito em cartório?",
                  "Quando todos os herdeiros estão de acordo com a partilha e não há testamento (ou há autorização judicial para tanto, conforme entendimento do caso).",
                ],
                [
                  "O que acontece se os herdeiros não entrarem em acordo?",
                  "Nesse caso, o inventário precisa seguir pela via judicial, onde eventuais divergências serão decididas pelo juiz.",
                ],
                [
                  "É preciso advogado para inventário extrajudicial?",
                  "Sim. A presença de advogado é obrigatória tanto no inventário judicial quanto no extrajudicial, por exigência legal.",
                ],
                [
                  "Como funciona o pagamento do ITCMD?",
                  "É o imposto estadual sobre transmissão causa mortis, calculado sobre o valor dos bens inventariados, com alíquota e regras que variam conforme o estado.",
                ],
              ].map(([q, a], i) => (
                <AccordionItem key={q} value={`i-${i}`} className="border-white/10">
                  <AccordionTrigger className="font-serif text-left text-lg text-white hover:no-underline">{q}</AccordionTrigger>
                  <AccordionContent className="text-[#9aa3b2]">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="relative py-24">
          <img src={IMG.officeModern} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[#12141a]/85" />
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Receba orientação sobre como conduzir o inventário da sua família
            </h2>
            <p className="mt-3 text-[#9aa3b2]">Atendimento presencial ou on-line, mediante agendamento prévio.</p>
            <div className="mt-8 flex justify-center">
              <LpCtaGroup waLabel="Falar com o advogado" telLabel={TEL_LABEL} />
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
