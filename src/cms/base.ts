export function getCmsOrigin() {
  // Sempre usa a mesma origem do site (evita CORS entre www e sem-www).
  if (typeof window !== "undefined" && window.location?.origin) return window.location.origin;
  // Fallback seguro para ambientes sem window (build/test).
  return "https://vcg.adv.br";
}

export function cmsUrl(pathname: string) {
  return new URL(pathname, getCmsOrigin()).toString();
}

