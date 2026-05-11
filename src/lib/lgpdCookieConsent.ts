export const LGPD_COOKIE_CONSENT_KEY = "vcg-lgpd-cookie-consent-v1";

export type LgpdCookieCategories = {
  /** Sempre ativos; necessários ao funcionamento básico do site. */
  essential: true;
  /** Estatísticas e melhoria de desempenho (não essenciais). */
  analytics: boolean;
  /** Personalização de conteúdo e experiência (não essenciais). */
  preferences: boolean;
};

export type LgpdStoredConsent = {
  version: 1;
  updatedAt: string;
  categories: LgpdCookieCategories;
};

export function readLgpdConsent(): LgpdStoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(LGPD_COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as LgpdStoredConsent;
    if (parsed?.version !== 1 || !parsed.categories) return null;
    if (parsed.categories.essential !== true) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeLgpdConsent(categories: Omit<LgpdCookieCategories, "essential">): LgpdStoredConsent {
  const payload: LgpdStoredConsent = {
    version: 1,
    updatedAt: new Date().toISOString(),
    categories: { essential: true, ...categories },
  };
  window.localStorage.setItem(LGPD_COOKIE_CONSENT_KEY, JSON.stringify(payload));
  window.dispatchEvent(new CustomEvent("vcg-lgpd-consent-changed", { detail: payload }));
  return payload;
}

