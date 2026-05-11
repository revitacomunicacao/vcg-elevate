import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  readLgpdConsent,
  writeLgpdConsent,
  type LgpdStoredConsent,
} from "@/lib/lgpdCookieConsent";

type CookieConsentContextValue = {
  consent: LgpdStoredConsent | null;
  /** Indica se o usuário já registrou uma escolha (qualquer uma das três ações principais ou salvar no painel). */
  hasDecided: boolean;
  openCookieSettings: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  saveCustom: (analytics: boolean, preferences: boolean) => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<LgpdStoredConsent | null>(() => readLgpdConsent());

  useEffect(() => {
    const onChange = () => setConsent(readLgpdConsent());
    window.addEventListener("vcg-lgpd-consent-changed", onChange);
    return () => window.removeEventListener("vcg-lgpd-consent-changed", onChange);
  }, []);

  const persist = useCallback((analytics: boolean, preferences: boolean) => {
    setConsent(writeLgpdConsent({ analytics, preferences }));
  }, []);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      consent,
      hasDecided: consent !== null,
      openCookieSettings: () => {
        window.dispatchEvent(new CustomEvent("vcg-lgpd-open-settings"));
      },
      acceptAll: () => persist(true, true),
      rejectNonEssential: () => persist(false, false),
      saveCustom: (analytics, preferences) => persist(analytics, preferences),
    }),
    [consent, persist],
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
}
