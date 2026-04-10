import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { NAVBAR_OFFSET_PX } from "@/lib/logo";
import drVinicius from "@/assets/DrVinicius.jpeg";
import draIsabelle from "@/assets/DraIsabelle.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6 },
};

const CorpoJuridico = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary" style={{ paddingTop: `${NAVBAR_OFFSET_PX}px` }}>
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <Link
            to="/"
            className="inline-flex items-center text-primary-foreground/60 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Voltar ao início
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Corpo Jurídico</h1>
          <p className="text-lg text-primary-foreground/80 font-sans max-w-2xl">
            Conheça os profissionais que integram nossa equipe, suas formações e trajetórias.
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </section>

      {/* Vinicius */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
            <motion.div {...fadeUp}>
              <img
                src={drVinicius}
                alt="Dr. Vinicius Carneiro Gonçalves"
                className="rounded-xl shadow-lg w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-1">Vinicius Carneiro Gonçalves</h2>
              <p className="text-secondary font-sans font-medium mb-6">Sócio Proprietário</p>

              <div className="space-y-2 text-sm text-muted-foreground font-sans leading-relaxed">
                <p><strong className="text-foreground">Advogado</strong>, inscrito na OAB/MG sob o nº 85.437</p>
                <p>Bacharel em Direito pela Universidade de Uberaba – Uberaba/MG</p>
                <p>Pós-graduado (especialização) em Direito Civil e Direito Processual Civil pela Universidade de Franca – Franca/SP</p>
                <p>Pós-graduado (especialização) em Docência Universitária pela Universidade de Uberaba – Uberaba/MG</p>
                <p>Mestre em Educação pela Universidade de Uberaba – Uberaba/MG</p>
                <p>Professor universitário</p>
                <p>Associado ao IBDFAM – Instituto Brasileiro de Direito de Família</p>
                <p>Exerceu o cargo de 1º Secretário do Núcleo de Uberaba/MG do IBDFAM - Instituto Brasileiro de Direito de Família, de 2010 a 2013</p>
                <p>Associado à AASP - Associação dos Advogados de São Paulo</p>
                <p>Associado ao IBDD - Instituto Brasileiro de Direito Desportivo</p>
                <p>Conselheiro Subseccional da 14ª Subseção da Ordem dos Advogados do Brasil - Uberaba/Minas Gerais (Triênio 2010/2012)</p>
                <p>Membro integrante da Comissão de Ética e Disciplina da OAB/MG no ano de 2009</p>
                <p>Idiomas: Português e Espanhol</p>
                <p>
                  <a href="http://lattes.cnpq.br/4597300390202084" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Acesse aqui o currículo completo
                  </a>
                </p>
                <p>
                  E-mail:{" "}
                  <a href="mailto:vinicius.adv@uol.com.br" className="text-primary hover:underline">
                    vinicius.adv@uol.com.br
                  </a>
                </p>
              </div>

              {/* Homenagens */}
              <div className="mt-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Homenagens recebidas</h3>
                <ul className="space-y-3 text-sm text-muted-foreground font-sans leading-relaxed list-disc list-inside">
                  <li>Diploma de honra ao mérito oferecido pela Diretoria Executiva e pelo Conselho Deliberativo do Uberaba Sport Club, pelos serviços prestados junto ao departamento jurídico da instituição, em 15 de julho de 2005.</li>
                  <li>Professor homenageado como NOME DE TURMA por ocasião da formatura dos alunos do Curso de Direito – Noturno, da Universidade de Uberaba (agosto/2006).</li>
                  <li>Professor homenageado por ocasião da formatura dos alunos do Curso de Direito – Multiperiódico, da Universidade de Uberaba (agosto/2006).</li>
                  <li>Professor homenageado por ocasião da formatura dos alunos do Curso de Direito – Multiperiódico, da Universidade de Uberaba (janeiro/2007).</li>
                  <li>Professor homenageado por ocasião da Formatura dos alunos do Curso de Direito – Multiperiódico, da Universidade de Uberaba (julho/2007).</li>
                  <li>Professor homenageado por ocasião da Formatura dos alunos do Curso de Direito – Noturno, da Universidade de Uberaba (janeiro/2008).</li>
                  <li>Professor homenageado por ocasião da Formatura dos alunos do Curso de Direito – Noturno, da Universidade de Uberaba (julho/2008).</li>
                  <li>NOME DE TURMA na solenidade de entrega de carteiras aos novos advogados e estagiários da 14ª Subseção da Ordem dos Advogados do Brasil – Seção Minas Gerais, em 22 de fevereiro de 2013.</li>
                  <li>Professor homenageado por ocasião da Formatura dos alunos do Curso de Direito – Noturno, da Universidade de Uberaba (julho/2013).</li>
                  <li>Professor homenageado como NOME DE TURMA por ocasião da formatura dos alunos do Curso de Direito – Noturno, da Universidade de Uberaba (janeiro/2014).</li>
                  <li>Professor homenageado como PARANINFO por ocasião da formatura dos alunos do Curso de Direito – Multiperiódico/Noturno, da Universidade de Uberaba (julho/2014).</li>
                  <li>Homenagem da Câmara Municipal de Uberaba (homenagem especial aos maçons), pelos relevantes serviços prestados à comunidade uberabense, em 11 de agosto de 2014.</li>
                  <li>PARANINFO na solenidade de entrega de carteiras aos novos advogados e estagiários da 14ª Subseção da Ordem dos Advogados do Brasil – Seção Minas Gerais, em 08 de outubro de 2015.</li>
                  <li>Título de sócio benemérito outorgado pela Diretoria Executiva e pelo Conselho Deliberativo do Esporte Clube Fabrício, como agradecimento pelos relevantes serviços prestados à instituição, em 18 de novembro de 2019.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Isabelle */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
            <motion.div {...fadeUp}>
              <img
                src={draIsabelle}
                alt="Dra. Isabelle Marlene Simões Araujo"
                className="rounded-xl shadow-lg w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-1">Isabelle Marlene Simões Araujo</h2>
              <p className="text-secondary font-sans font-medium mb-6">Advogada</p>

              <div className="space-y-2 text-sm text-muted-foreground font-sans leading-relaxed">
                <p><strong className="text-foreground">Advogada</strong>, inscrita na OAB/MG sob o nº 204.163</p>
                <p>Bacharel em Direito pela Universidade de Uberaba - Uberaba/MG</p>
                <p>Pós-graduada em Direito do Trabalho e Previdenciário pela PUC Minas - Belo Horizonte/MG</p>
                <p>Pós-graduanda em Direito Processual Civil pela Faculdade Legale - São Paulo/SP</p>
                <p>1º Congresso de Direito do Triângulo Mineiro (2017)</p>
                <p>12ª Ed. Congresso de Direito Processual de Uberaba - MG (2019)</p>
                <p>Palestras Jurídicas: Ética no Ambiente de Trabalho (2016), Mundo Contemporâneo - Colapso na Sociedade de Consumo (2016); Camus e o Surrealismo Jurídico: O Aparente e o Real no ato de Julgar (2019); A Importância do Voto para o Fortalecimento da Democracia (2018) e I Jornada De Direito do Diretório Acadêmico Leopoldino de Oliveira (2019); Direito na Escola - OAB/MG (2022)</p>
                <p>Curso - Ética e Serviço Público (2018)</p>
                <p>Curso On-Line - Introdução à Gestão Socioambiental - 15h - TJMG (2018)</p>
                <p>Curso - Adoção Internacional e o Direito à Convivência Familiar (2018)</p>
                <p>
                  E-mail:{" "}
                  <a href="mailto:isabellesimoes.adv@uol.com.br" className="text-primary hover:underline">
                    isabellesimoes.adv@uol.com.br
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-secondary font-sans text-sm tracking-[0.2em] uppercase">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">O que dizem nossos clientes</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.blockquote
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="bg-muted p-8 rounded-lg border border-border"
            >
              <p className="text-muted-foreground font-sans italic leading-relaxed mb-4">
                "Excelentes profissionais! Extremamente capacitados para todas as situações. Me atrevo a dizer que são os melhores de Uberaba."
              </p>
              <footer className="text-sm font-semibold text-foreground">— G. O., Brasil</footer>
            </motion.blockquote>

            <motion.blockquote
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-muted p-8 rounded-lg border border-border"
            >
              <p className="text-muted-foreground font-sans italic leading-relaxed mb-4">
                "Profissionais altamente gabaritados e preparados, sem contar que o escritório possui uma ótima localização e estrutura física. Super indico!"
              </p>
              <footer className="text-sm font-semibold text-foreground">— Z. L. M., Brasil</footer>
            </motion.blockquote>
          </div>

          {/* CTA */}
          <motion.div {...fadeUp} className="mt-16 p-8 bg-muted rounded-lg text-center border border-border">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
              Precisa de orientação jurídica?
            </h3>
            <p className="text-muted-foreground font-sans mb-6">
              Entre em contato e agende uma consulta. Estamos prontos para ajudar.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-sans"
            >
              <a href="https://wa.me/5534998850315" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5 mr-2" />
                Fale com os Advogados
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorpoJuridico;
