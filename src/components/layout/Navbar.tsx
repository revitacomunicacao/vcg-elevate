import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-vinicius-carneiro-goncalves-advocacia.jpg.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHome) {
      const base = import.meta.env.BASE_URL;
      window.location.href = `${base}#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Início", action: () => scrollToSection("hero") },
    { label: "Quem Somos", action: () => scrollToSection("quem-somos") },
    { label: "Corpo Jurídico", action: () => scrollToSection("equipe") },
    { label: "Atuação", action: () => scrollToSection("atuacao") },
    { label: "Contato", action: () => scrollToSection("contato") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logoFull}
              alt="Advocacia Vinicius Carneiro Gonçalves"
              className="h-9 sm:h-10 md:h-12 w-auto max-w-[min(100%,220px)] sm:max-w-[260px] md:max-w-none object-contain object-left"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-secondary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.label}
              </button>
            ))}
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white gap-2"
              size="sm"
            >
              <a href="https://wa.me/5534999999999" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                Fale com os Advogados
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              asChild
              className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
            >
              <a href="https://wa.me/5534999999999" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                Fale com os Advogados
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
