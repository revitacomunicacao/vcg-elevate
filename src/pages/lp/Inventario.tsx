import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Clock,
  FileStack,
  Gavel,
  Landmark,
  Phone,
  MessageCircle,
  ScrollText,
  Shield,
  Users,
  Wallet,
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

  return (
    <div className="min-h-screen bg-[#12141a] text-[#e8eaef]">
      {/* Hero tipográfico com imagem lateral estreita */}
      <section className="min-h-[100dvh] grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col px-6 md:px-12 py-8">
          <img src={LOGO} alt="VCG" className="h-11 w-auto self-start" />
          <div className="flex-1 flex flex-col justify-center py-16 max-w-2xl">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#c4a35a] mb-5">Sucessões · Uberaba/MG</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Inventário extrajudicial e judicial de bens
            </h1>
            <p className="mt-6 text-[#9aa3b2] text-lg leading-relaxed max-w-[40ch]">
              Condução do inventário e da partilha de bens após o falecimento, buscando o caminho mais ágil e seguro
              para os herdeiros.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#c4a35a] text-[#12141a] font-semibold px-6 py-3 rounded-md text-sm">
                <WhatsAppIcon className="h-5 w-5" /> Pedir orientação
              </a>
              <a href={TEL} className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3 rounded-md text-sm hover:bg-white/5">
                <Phone className="h-4 w-4" /> Ligar agora
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
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
          <img src={drVinicius} alt="Dr. Vinicius" className="absolute bottom-8 left-1/2 -translate-x-1/2 h-36 w-36 rounded-full object-cover border-4 border-[#c4a35a] shadow-2xl" />
        </div>
      </section>

      {/* Dores em lista densa com ícones */}
      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fade} className="font-serif text-3xl md:text-5xl font-bold mb-3">
            Você não está sozinho(a) nessa
          </motion.h2>
          <p className="text-[#9aa3b2] mb-12">Dúvidas comuns de quem precisa abrir um inventário.</p>
          <div className="space-y-0">
            {[
              { icon: BookOpen, t: "Por onde começar", b: "Falecimento de um familiar e nenhuma orientação clara sobre os primeiros passos do inventário." },
              { icon: Landmark, t: "Cartório ou processo judicial", b: "Dúvida se o inventário pode ser feito por escritura pública ou se exige necessariamente um processo judicial." },
              { icon: Users, t: "Herdeiros em desacordo", b: "Divergências entre os herdeiros sobre a forma de partilhar os bens deixados." },
              { icon: Clock, t: "Prazo se esgotando", b: "Receio de multa por atraso na abertura do inventário e no pagamento do imposto (ITCMD)." },
            ].map((item, i) => (
              <motion.div key={item.t} {...fade} className="grid md:grid-cols-[4rem_1fr_1.2fr] gap-4 md:gap-8 py-8 border-t border-white/10 items-start">
                <item.icon className="h-8 w-8 text-[#c4a35a]" />
                <h3 className="font-serif text-xl md:text-2xl font-semibold">{item.t}</h3>
                <p className="text-[#9aa3b2] leading-relaxed">{item.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria visual + serviços */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-4">
          <img src={IMG.documents} alt="" className="rounded-lg object-cover w-full h-64 md:h-full min-h-[280px]" />
          <div className="grid grid-cols-2 gap-4">
            <img src={IMG.justice} alt="" className="rounded-lg object-cover w-full h-40 md:h-52" />
            <img src={IMG.handshake} alt="" className="rounded-lg object-cover w-full h-40 md:h-52" />
            <div className="col-span-2 rounded-lg bg-[#1a1d26] border border-white/10 p-6 md:p-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Como podemos ajudar</h2>
              <ul className="space-y-3">
                {[
                  "Inventário extrajudicial (escritura pública)",
                  "Inventário judicial",
                  "Levantamento e organização de bens e dívidas do espólio",
                  "Orientação sobre cálculo e pagamento do ITCMD",
                  "Sobrepartilha de bens descobertos posteriormente",
                  "Alvará judicial para levantamento de valores",
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

      {/* Timeline vertical sticky */}
      <section className="py-20 md:py-28 bg-[#0c0e12]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">Como funciona o atendimento</h2>
          <p className="text-[#9aa3b2] mb-14">Da organização documental até a partilha.</p>
          <div className="relative pl-10 space-y-10 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-[#c4a35a]/40">
            {[
              { icon: MessageCircle, t: "Atendimento inicial", b: "Levantamento da situação familiar, dos bens deixados e da existência de testamento." },
              { icon: FileStack, t: "Organização documental", b: "Reunião de certidões, documentos dos bens e informações necessárias ao inventário." },
              { icon: Gavel, t: "Definição da via", b: "Avaliação sobre a possibilidade de inventário extrajudicial ou a necessidade de via judicial." },
              { icon: Shield, t: "Condução até a partilha", b: "Acompanhamento de todas as etapas até a formalização da partilha entre os herdeiros." },
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
            <Wallet className="h-8 w-8 text-[#c4a35a]" />
            <h2 className="font-serif text-3xl font-bold">Dúvidas comuns sobre inventário</h2>
          </div>
          <Accordion type="single" collapsible className="border-white/10">
            {[
              ["Qual o prazo para abrir o inventário após o falecimento?", "O prazo geral é de 60 dias a partir do óbito para dar início ao inventário; o atraso pode gerar multa sobre o ITCMD, com percentual variável conforme a legislação estadual."],
              ["Quando o inventário pode ser feito em cartório?", "Quando todos os herdeiros estão de acordo com a partilha e não há testamento (ou há autorização judicial para tanto, conforme entendimento do caso)."],
              ["O que acontece se os herdeiros não entrarem em acordo?", "Nesse caso, o inventário precisa seguir pela via judicial, onde eventuais divergências serão decididas pelo juiz."],
              ["É preciso advogado para inventário extrajudicial?", "Sim. A presença de advogado é obrigatória tanto no inventário judicial quanto no extrajudicial, por exigência legal."],
              ["Como funciona o pagamento do ITCMD?", "É o imposto estadual sobre transmissão causa mortis, calculado sobre o valor dos bens inventariados, com alíquota e regras que variam conforme o estado."],
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Receba orientação sobre como conduzir o inventário da sua família</h2>
          <p className="mt-3 text-[#9aa3b2]">Atendimento presencial ou on-line, mediante agendamento prévio.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-[#c4a35a] text-[#12141a] font-semibold px-8 py-3.5 rounded-md">
            <WhatsAppIcon className="h-5 w-5" /> Falar com o advogado
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
