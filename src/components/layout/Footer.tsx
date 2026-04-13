import { MapPin, Phone, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import logoFooter from "@/assets/logo-vinicius-carneiro-goncalves-advocacia-footer.png";
import { LOGO_INTRINSIC_HEIGHT, LOGO_INTRINSIC_WIDTH } from "@/lib/logo";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4" style={{ lineHeight: 0 }}>
              <img
                src={logoFooter}
                alt="Advocacia Vinicius Carneiro Gonçalves"
                width={LOGO_INTRINSIC_WIDTH}
                height={LOGO_INTRINSIC_HEIGHT}
                className="h-auto w-auto max-w-[220px] sm:max-w-[260px]"
                decoding="async"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Advocacia Vinicius Carneiro Gonçalves. Tradição, ética e compromisso
              com a excelência na defesa dos seus direitos.
            </p>
            <p className="mt-4 text-primary-foreground/60 text-xs">OAB/MG nº 5.217</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <a href="tel:+553433227473" className="flex items-center gap-3 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4 shrink-0" />
                (34) 3322-7473
              </a>
              <a href="https://wa.me/5534998850315" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-secondary transition-colors">
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                (34) 99885-0315
              </a>
              <a href="mailto:vinicius.adv@uol.com.br" className="flex items-center gap-3 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4 shrink-0" />
                vinicius.adv@uol.com.br
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Endereço</h4>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <p>
                Avenida Maranhão, 1.373 — Universitário<br />
                CEP 38.050-470 — Uberaba/MG
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} VCG Advocacia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
