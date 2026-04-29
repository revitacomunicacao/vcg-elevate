export type CmsButton = { texto: string; link: string };

export type CmsCorpoJuridicoResponse = {
  success: boolean;
  data: {
    id: number;
    titulo: string;
    slug: string;
    status: string;
    campos: Array<{
      nome: string;
      identificador: string;
      tipo: string;
      valor: unknown;
    }>;
  };
  message?: string;
};

export type CorpoJuridicoContent = {
  hero: { title: string; description: string };
  professionals: Array<{
    id: string; // anchor id
    name: string;
    role: string;
    photo: string;
    description: string;
    curriculumUrl?: string;
    email?: string;
    honors?: string;
    background: "background" | "muted";
  }>;
  testimonials: {
    sectionLabel: string;
    heading: string;
    items: Array<{ quote: string; name: string }>;
  };
  cta: {
    title: string;
    description: string;
    button: CmsButton;
  };
};

const ENDPOINT = "https://vcg.adv.br/admin/api/pages/corpo-juridico";

function requiredString(value: unknown, fieldId: string): string {
  if (typeof value === "string") return value;
  throw new Error(`Campo '${fieldId}' inválido (esperado texto).`);
}

function requiredButton(value: unknown, fieldId: string): CmsButton {
  if (!value || typeof value !== "object") throw new Error(`Campo '${fieldId}' inválido (esperado botão).`);
  const v = value as Partial<CmsButton>;
  if (typeof v.texto !== "string" || typeof v.link !== "string") {
    throw new Error(`Campo '${fieldId}' inválido (botão incompleto).`);
  }
  return { texto: v.texto, link: v.link };
}

function toKebabId(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function fetchCorpoJuridicoContent(signal?: AbortSignal): Promise<CorpoJuridicoContent> {
  const res = await fetch(ENDPOINT, { signal, headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`Falha ao carregar Corpo Jurídico CMS (HTTP ${res.status}).`);
  const json = (await res.json()) as CmsCorpoJuridicoResponse;
  if (!json?.success || !json.data?.campos) throw new Error("Resposta do CMS inválida.");

  const fieldMap = new Map(json.data.campos.map((c) => [c.identificador, c.valor]));
  const get = (id: string) => fieldMap.get(id);

  const hero = {
    title: requiredString(get("titulo"), "titulo"),
    description: requiredString(get("descricao"), "descricao"),
  };

  const vinicius = {
    name: requiredString(get("nome"), "nome"),
    role: requiredString(get("cargo"), "cargo"),
    description: requiredString(get("descricao-1"), "descricao-1"),
    curriculumUrl: typeof get("curriculo") === "string" ? (get("curriculo") as string) : undefined,
    email: typeof get("email") === "string" ? (get("email") as string) : undefined,
    honors: typeof get("homenagens-recebidas") === "string" ? (get("homenagens-recebidas") as string) : undefined,
  };

  const isabelle = {
    name: requiredString(get("nome-1"), "nome-1"),
    role: requiredString(get("cargo-1"), "cargo-1"),
    description: requiredString(get("descricao-2"), "descricao-2"),
    email: typeof get("email-1") === "string" ? (get("email-1") as string) : undefined,
  };

  // Fotos precisam vir do CMS para cumprir "conteúdo exclusivamente do CMS".
  const viniciusPhoto = get("foto");
  const isabellePhoto = get("foto-1");
  if (typeof viniciusPhoto !== "string" || typeof isabellePhoto !== "string") {
    throw new Error("Fotos ausentes no CMS (campos 'foto' e 'foto-1').");
  }

  const testimonialsRaw = get("depoimentos");
  const testimonialItems =
    Array.isArray(testimonialsRaw)
      ? testimonialsRaw
          .map((t) => {
            const tt = t as { depoimento?: unknown; nome?: unknown };
            return {
              quote: typeof tt.depoimento === "string" ? tt.depoimento : "",
              name: typeof tt.nome === "string" ? tt.nome : "",
            };
          })
          .filter((t) => t.quote && t.name)
      : [];

  return {
    hero,
    professionals: [
      {
        id: toKebabId(vinicius.name),
        name: vinicius.name,
        role: vinicius.role,
        photo: viniciusPhoto,
        description: vinicius.description,
        curriculumUrl: vinicius.curriculumUrl,
        email: vinicius.email,
        honors: vinicius.honors,
        background: "background",
      },
      {
        id: toKebabId(isabelle.name),
        name: isabelle.name,
        role: isabelle.role,
        photo: isabellePhoto,
        description: isabelle.description,
        email: isabelle.email,
        background: "muted",
      },
    ],
    testimonials: {
      sectionLabel: requiredString(get("texto-superior"), "texto-superior"),
      heading: requiredString(get("titulo-1"), "titulo-1"),
      items: testimonialItems,
    },
    cta: {
      title: requiredString(get("titulo-2"), "titulo-2"),
      description: requiredString(get("descricao-3"), "descricao-3"),
      button: requiredButton(get("botao"), "botao"),
    },
  };
}

