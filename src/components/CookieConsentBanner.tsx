import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { readLgpdConsent } from "@/lib/lgpdCookieConsent";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const CookieConsentBanner = () => {
  const { hasDecided, acceptAll, rejectNonEssential, saveCustom } = useCookieConsent();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(false);

  const syncDraftFromStorage = useCallback(() => {
    const stored = readLgpdConsent();
    if (!stored) {
      setAnalytics(false);
      setPreferences(false);
      return;
    }
    setAnalytics(Boolean(stored.categories.analytics));
    setPreferences(Boolean(stored.categories.preferences));
  }, []);

  useEffect(() => {
    const open = () => {
      syncDraftFromStorage();
      setSettingsOpen(true);
    };
    window.addEventListener("vcg-lgpd-open-settings", open);
    return () => window.removeEventListener("vcg-lgpd-open-settings", open);
  }, [syncDraftFromStorage]);

  const openSettingsFromBanner = () => {
    syncDraftFromStorage();
    setSettingsOpen(true);
  };

  const handleSaveSettings = () => {
    saveCustom(analytics, preferences);
    setSettingsOpen(false);
  };

  const showMainBanner = !hasDecided;

  return (
    <>
      {showMainBanner ? (
        <div
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
          role="region"
          aria-label="Consentimento de cookies e privacidade"
        >
          <div className="mx-auto max-w-4xl pointer-events-auto rounded-xl border border-border/70 bg-background/70 backdrop-blur-md shadow-lg px-5 py-5 md:px-7 md:py-6 text-foreground">
            <h2 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-3">
              Valorizamos sua privacidade
            </h2>
            <p className="text-sm md:text-[15px] text-muted-foreground font-sans leading-relaxed mb-5">
              Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência de navegação, analisar o
              tráfego do site e personalizar conteúdo, de acordo com a nossa{" "}
              <Link
                to="/politica-de-privacidade"
                className="text-primary underline underline-offset-2 hover:text-primary/90 font-medium"
              >
                Política de Privacidade
              </Link>
              . Ao clicar em &quot;Aceitar todos&quot;, você concorda com o uso de todas as categorias de cookies.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3 sm:justify-end">
              <Button type="button" className="font-sans w-full sm:w-auto bg-primary hover:bg-primary/90" onClick={acceptAll}>
                Aceitar todos
              </Button>
              <Button type="button" variant="secondary" className="font-sans w-full sm:w-auto" onClick={openSettingsFromBanner}>
                Configurações de Cookies
              </Button>
              <Button type="button" variant="outline" className="font-sans w-full sm:w-auto" onClick={rejectNonEssential}>
                Rejeitar não essenciais
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="max-w-md sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif">Configurações de Cookies</DialogTitle>
            <DialogDescription className="text-left font-sans text-sm">
              Escolha quais categorias de cookies deseja permitir. Cookies estritamente necessários permanecem ativos
              para o funcionamento básico do site.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-2">
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border bg-muted/30 p-4">
              <div className="space-y-1">
                <Label className="text-base font-semibold text-foreground">Estritamente necessários</Label>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Essenciais à segurança e ao funcionamento do site. Não podem ser desativados.
                </p>
              </div>
              <Switch checked disabled className="shrink-0 opacity-70" aria-label="Sempre ativos" />
            </div>

            <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
              <div className="space-y-1 pr-2">
                <Label htmlFor="cookie-analytics" className="text-base font-semibold text-foreground cursor-pointer">
                  Análise e desempenho
                </Label>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Permitem entender como o site é utilizado (por exemplo, páginas visitadas) para melhorar a
                  experiência. Não são essenciais.
                </p>
              </div>
              <Switch id="cookie-analytics" checked={analytics} onCheckedChange={setAnalytics} className="shrink-0" />
            </div>

            <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
              <div className="space-y-1 pr-2">
                <Label htmlFor="cookie-preferences" className="text-base font-semibold text-foreground cursor-pointer">
                  Preferências e personalização
                </Label>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Permitem lembrar escolhas e personalizar conteúdo conforme o uso do site. Não são essenciais.
                </p>
              </div>
              <Switch id="cookie-preferences" checked={preferences} onCheckedChange={setPreferences} className="shrink-0" />
            </div>
          </div>

          <DialogFooter className="flex-col-reverse sm:flex-row sm:justify-end gap-2">
            <Button type="button" variant="outline" className="font-sans" onClick={() => setSettingsOpen(false)}>
              Cancelar
            </Button>
            <Button type="button" className="font-sans bg-primary hover:bg-primary/90" onClick={handleSaveSettings}>
              Salvar preferências
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsentBanner;
