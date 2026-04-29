import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { NAVBAR_OFFSET_PX } from "@/lib/logo";
import { fetchCorpoJuridicoContent, type CorpoJuridicoContent } from "@/cms/corpoJuridico";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6 },
};

const CorpoJuridico = () => {
  const location = useLocation();
  const [content, setContent] = useState<CorpoJuridicoContent | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchCorpoJuridicoContent(controller.signal)
      .then(setContent)
      .catch(() => setContent(null));
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!content) return;
    const id = location.hash?.replace("#", "");
    if (!id) return;

    // Aguarda o render (e imagens) para garantir que o elemento exista no DOM.
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET_PX - 16;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(t);
  }, [location.hash, content]);

  function renderProfileLines(text: string) {
    const lines = text
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    return lines.map((line, idx) => {
      if (idx === 0) {
        const m = line.match(/^([^,]+),(.*)$/);
        if (m) {
          return (
            <p key={idx}>
              <strong className="text-foreground">{m[1]}</strong>,{m[2]}
            </p>
          );
        }
      }
      return <p key={idx}>{line}</p>;
    });
  }

  function renderHonors(text: string) {
    return text
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l, idx) => <li key={idx}>{l}</li>);
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {content ? (
        <>
          {/* Hero */}
          <section className="bg-primary" style={{ paddingTop: `${NAVBAR_OFFSET_PX}px` }}>
            <div className="container mx-auto px-4 lg:px-8 py-20">
              <Link
                to="/"
                className="inline-flex items-center text-primary-foreground/60 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> Voltar ao início
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{content.hero.title}</h1>
              <p className="text-lg text-primary-foreground/80 font-sans max-w-2xl">
                {content.hero.description}
              </p>
            </div>
            <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          </section>

          {content.professionals.map((p) => (
            <section
              key={p.id}
              id={p.id}
              className={`py-20 ${p.background === "muted" ? "bg-muted" : "bg-background"}`}
            >
              <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
                  <motion.div {...fadeUp}>
                    <img
                      src={p.photo}
                      alt={p.name.startsWith("Vinicius") ? `Dr. ${p.name}` : `Dra. ${p.name}`}
                      className="rounded-xl shadow-lg w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </motion.div>

                  <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-1">{p.name}</h2>
                    <p className="text-secondary font-sans font-medium mb-6">{p.role}</p>

                    <div className="space-y-2 text-sm text-muted-foreground font-sans leading-relaxed">
                      {renderProfileLines(p.description)}
                      {p.curriculumUrl ? (
                        <p>
                          <a
                            href={p.curriculumUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Acesse aqui o currículo completo
                          </a>
                        </p>
                      ) : null}
                      {p.email ? (
                        <p>
                          E-mail:{" "}
                          <a href={`mailto:${p.email}`} className="text-primary hover:underline">
                            {p.email}
                          </a>
                        </p>
                      ) : null}
                    </div>

                    {p.honors ? (
                      <div className="mt-8">
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Homenagens recebidas</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground font-sans leading-relaxed list-disc list-inside">
                          {renderHonors(p.honors)}
                        </ul>
                      </div>
                    ) : null}
                  </motion.div>
                </div>
              </div>
            </section>
          ))}

          {/* Depoimentos */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
              <motion.div {...fadeUp} className="text-center mb-12">
                <span className="text-secondary font-sans text-sm tracking-[0.2em] uppercase">{content.testimonials.sectionLabel}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">{content.testimonials.heading}</h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {content.testimonials.items.slice(0, 2).map((t, idx) => (
                  <motion.blockquote
                    key={t.name}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-muted p-8 rounded-lg border border-border"
                  >
                    <p className="text-muted-foreground font-sans italic leading-relaxed mb-4">
                      "{t.quote}"
                    </p>
                    <footer className="text-sm font-semibold text-foreground">— {t.name}</footer>
                  </motion.blockquote>
                ))}
              </div>

              {/* CTA */}
              <motion.div {...fadeUp} className="mt-16 p-8 bg-muted rounded-lg text-center border border-border">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {content.cta.title}
                </h3>
                <p className="text-muted-foreground font-sans mb-6">
                  {content.cta.description}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary/90 hover:bg-secondary/90 text-secondary-foreground font-sans"
                >
                  <a href={content.cta.button.link} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-5 w-5 mr-2" />
                    {content.cta.button.texto}
                  </a>
                </Button>
              </motion.div>
            </div>
          </section>
        </>
      ) : null}

      <Footer />
    </div>
  );
};

export default CorpoJuridico;
