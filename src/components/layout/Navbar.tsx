import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Início", action: () => scrollToSection("hero") },
    { label: "Quem Somos", action: () => scrollToSection("quem-somos") },
    { label: "Equipe", action: () => scrollToSection("equipe") },
    { label: "Atuação", action: () => scrollToSection("atuacao") },
    { label: "Contato", action: () => scrollToSection("contato") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-primary tracking-tight">VCG</span>
            <span className="hidden sm:inline text-sm text-muted-foreground font-sans">Advocacia</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
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
                <MessageCircle className="h-4 w-4" />
                WhatsApp
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
          <div className="md:hidden pb-6 space-y-4">
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
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
