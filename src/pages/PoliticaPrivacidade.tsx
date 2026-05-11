import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NAVBAR_OFFSET_PX } from "@/lib/logo";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-background" style={{ paddingTop: `${NAVBAR_OFFSET_PX}px` }}>
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground text-sm font-sans mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Voltar ao início
          </Link>

          <article className="font-sans text-foreground/90 text-[15px] md:text-base leading-relaxed">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS
            </h1>

            <p className="leading-relaxed mb-8">
              A presente Política de Privacidade tem por objetivo reafirmar o compromisso da Advocacia Vinicius Carneiro
              Gonçalves com a segurança, a transparência e o respeito no tratamento das informações de nossos usuários e
              clientes.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">
              1. INFORMAÇÕES GERAIS E CONTROLADOR
            </h2>
            <p className="leading-relaxed mb-4">O controlador dos dados pessoais coletados através deste site é:</p>
            <ul className="list-none pl-0 space-y-3 mb-6">
              <li>
                <strong className="text-foreground">Nome:</strong> Advocacia Vinicius Carneiro Gonçalves
              </li>
              <li>
                <strong className="text-foreground">Endereço:</strong> Avenida Maranhão, 1.373 — Universitário, CEP
                38.050-470 — Uberaba/MG.
              </li>
              <li>
                <strong className="text-foreground">E-mail de contato:</strong>{" "}
                <a href="mailto:vinicius.adv@uol.com.br" className="text-primary hover:underline">
                  vinicius.adv@uol.com.br
                </a>
              </li>
            </ul>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">
              2. COLETA DE DADOS PESSOAIS
            </h2>
            <p className="leading-relaxed mb-4">Coletamos informações de duas formas principais:</p>
            <p className="leading-relaxed mb-4">
              <strong className="text-foreground">Dados fornecidos voluntariamente:</strong> Ao utilizar nossos canais
              de contato (formulários, WhatsApp ou e-mail), você pode nos fornecer dados como nome, e-mail, telefone e
              informações sobre o seu caso jurídico.
            </p>
            <p className="leading-relaxed mb-6">
              <strong className="text-foreground">Dados de navegação (Cookies):</strong> Coletamos dados técnicos
              automaticamente, como endereço IP, tipo de navegador e páginas visitadas, com a finalidade de melhorar a
              performance do site e a experiência do usuário.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">
              3. FINALIDADE DO TRATAMENTO
            </h2>
            <p className="leading-relaxed mb-4">Os dados coletados são utilizados para:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Responder a consultas, dúvidas e solicitações de orçamentos.</li>
              <li>Prestação de serviços jurídicos contratados.</li>
              <li>Cumprimento de obrigações legais e regulatórias.</li>
            </ul>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">4. COOKIES</h2>
            <p className="leading-relaxed mb-6">
              Utilizamos cookies para personalizar conteúdos e analisar nosso tráfego. Você pode gerenciar suas
              preferências de cookies através do banner de consentimento em nossa página inicial. A recusa de cookies
              não essenciais pode afetar algumas funcionalidades do site.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">
              5. COMPARTILHAMENTO DE DADOS
            </h2>
            <p className="leading-relaxed mb-4">
              A Advocacia Vinicius Carneiro Gonçalves não comercializa dados pessoais. O compartilhamento ocorre apenas:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                Com provedores de tecnologia estritamente necessários para a operação (hospedagem e e-mail).
              </li>
              <li>Por determinação judicial ou para cumprimento de obrigações perante autoridades públicas.</li>
              <li>Para o exercício regular de direitos em processos judiciais, administrativos ou arbitrais.</li>
            </ul>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">
              6. SEGURANÇA DOS DADOS
            </h2>
            <p className="leading-relaxed mb-6">
              Adotamos medidas técnicas e administrativas para proteger os dados pessoais de acessos não autorizados e
              de situações acidentais ou ilícitas de destruição, perda ou alteração. Utilizamos protocolos de segurança
              (HTTPS/SSL) em nosso site.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">
              7. DIREITOS DO TITULAR
            </h2>
            <p className="leading-relaxed mb-4">De acordo com a LGPD, o usuário tem o direito de, a qualquer momento:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Confirmar a existência de tratamento de seus dados.</li>
              <li>Acessar seus dados pessoais.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar a anonimização ou eliminação de dados desnecessários.</li>
              <li>Revogar o consentimento previamente fornecido.</li>
            </ul>
            <p className="leading-relaxed mb-6">
              Para exercer esses direitos, entre em contato através do e-mail:{" "}
              <a href="mailto:vinicius.adv@uol.com.br" className="text-primary hover:underline">
                vinicius.adv@uol.com.br
              </a>
              .
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">
              8. ALTERAÇÕES NESTA POLÍTICA
            </h2>
            <p className="leading-relaxed mb-6">
              O escritório reserva-se o direito de atualizar esta Política de Privacidade periodicamente para refletir
              mudanças legislativas ou melhorias em nossos processos.
            </p>

            <p className="text-sm text-muted-foreground mt-10">Última atualização: Maio de 2024.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
