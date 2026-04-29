export type CmsIconRef = {
  source: "registry" | string;
  iconKey: string;
  iconSet: string | null;
  iconStyle: string | null;
};

export type CmsButton = { texto: string; link: string };

export type CmsHomeResponse = {
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

export type HomeContent = {
  hero: {
    title: string;
    description: string;
    primaryCta: CmsButton;
    secondaryCta: CmsButton;
  };
  quemSomos: {
    sectionLabel: string;
    heading: string;
    description: string;
    gallery: string[];
    values: Array<{ iconKey: string; title: string; description: string }>;
  };
  equipe: {
    sectionLabel: string;
    heading: string;
    members: Array<{
      name: string;
      role: string;
      oab?: string;
      description: string;
      photo: string;
      link: string;
    }>;
  };
  atuacao: {
    sectionLabel: string;
    heading: string;
    areas: Array<{
      iconKey: string;
      title: string;
      description: string;
      link: string;
      buttonText: string;
    }>;
  };
  servicos: {
    sectionLabel: string;
    heading: string;
    description: string;
    blocks: Array<{
      id: string;
      iconKey: string;
      title: string;
      type: "list" | "text";
      items?: string[];
      body?: string;
    }>;
    cta: {
      title: string;
      subtitle: string;
      description: string;
      button: CmsButton;
    };
  };
  provaSocial: {
    title: string;
    description: string;
    stats: Array<{ target: number; suffix: string; label: string }>;
  };
};

const HOME_ENDPOINT = "https://vcg.adv.br/admin/api/pages/home";

function toLines(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
}

function parseCounter(raw: string): { target: number; suffix: string } {
  const trimmed = raw.trim();
  const suffix = trimmed.slice(-1);
  const numeric = trimmed.slice(0, -1).replace(/[^\d]/g, "");
  const target = Number(numeric);
  return { target: Number.isFinite(target) ? target : 0, suffix };
}

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

export async function fetchHomeContent(signal?: AbortSignal): Promise<HomeContent> {
  const res = await fetch(HOME_ENDPOINT, { signal, headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`Falha ao carregar Home CMS (HTTP ${res.status}).`);

  const json = (await res.json()) as CmsHomeResponse;
  if (!json?.success || !json.data?.campos) throw new Error("Resposta do CMS inválida.");

  const fieldMap = new Map(json.data.campos.map((c) => [c.identificador, c.valor]));
  const get = (id: string) => fieldMap.get(id);

  const hero = {
    title: requiredString(get("titulo"), "titulo"),
    description: requiredString(get("descricao"), "descricao"),
    primaryCta: requiredButton(get("botao-1"), "botao-1"),
    secondaryCta: requiredButton(get("botao-2"), "botao-2"),
  };

  const gallery = get("galeria");
  const galleryUrls = Array.isArray(gallery) ? gallery.filter((u): u is string => typeof u === "string") : [];
  if (galleryUrls.length === 0) throw new Error("Campo 'galeria' vazio/ausente.");

  const valuesRaw = get("valores");
  const values =
    Array.isArray(valuesRaw)
      ? valuesRaw
          .map((v) => {
            const vv = v as {
              icone?: CmsIconRef;
              titulo?: unknown;
              descricao?: unknown;
            };
            return {
              iconKey: typeof vv.icone?.iconKey === "string" ? vv.icone.iconKey : "",
              title: typeof vv.titulo === "string" ? vv.titulo : "",
              description: typeof vv.descricao === "string" ? vv.descricao : "",
            };
          })
          .filter((v) => v.iconKey && v.title && v.description)
      : [];

  const profissionaisRaw = get("profissionais");
  const members =
    Array.isArray(profissionaisRaw)
      ? profissionaisRaw
          .map((p) => {
            const pp = p as {
              nome?: unknown;
              cargo?: unknown;
              oab?: unknown;
              descricao?: unknown;
              botao?: Partial<CmsButton>;
              foto?: unknown;
            };
            const button = pp.botao && typeof pp.botao === "object" ? (pp.botao as Partial<CmsButton>) : undefined;
            return {
              name: typeof pp.nome === "string" ? pp.nome : "",
              role: typeof pp.cargo === "string" ? pp.cargo : "",
              oab: typeof pp.oab === "string" ? pp.oab : undefined,
              description: typeof pp.descricao === "string" ? pp.descricao : "",
              photo: typeof pp.foto === "string" ? pp.foto : "",
              link: typeof button?.link === "string" ? button.link : "",
            };
          })
          .filter((m) => m.name && m.role && m.description && m.photo && m.link)
      : [];

  const areasRaw = get("areas-de-atuacao");
  const areas =
    Array.isArray(areasRaw)
      ? areasRaw
          .map((a) => {
            const aa = a as {
              icone?: CmsIconRef;
              titulo?: unknown;
              descricao?: unknown;
              botao?: Partial<CmsButton>;
            };
            const button = aa.botao && typeof aa.botao === "object" ? (aa.botao as Partial<CmsButton>) : undefined;
            return {
              iconKey: typeof aa.icone?.iconKey === "string" ? aa.icone.iconKey : "",
              title: typeof aa.titulo === "string" ? aa.titulo : "",
              description: typeof aa.descricao === "string" ? aa.descricao : "",
              link: typeof button?.link === "string" ? button.link : "",
              buttonText: typeof button?.texto === "string" ? button.texto : "",
            };
          })
          .filter((a) => a.iconKey && a.title && a.description && a.link && a.buttonText)
      : [];

  const servicosDescription = requiredString(get("descricao-2"), "descricao-2");

  const blocks = [
    {
      id: "acoes",
      iconKey: (get("icone") as CmsIconRef | undefined)?.iconKey ?? "Gavel",
      title: requiredString(get("titulo-5"), "titulo-5"),
      type: "list" as const,
      items: toLines(requiredString(get("descricao-3"), "descricao-3")),
    },
    {
      id: "assessoria",
      iconKey: (get("icone-1") as CmsIconRef | undefined)?.iconKey ?? "Briefcase",
      title: requiredString(get("titulo-6"), "titulo-6"),
      type: "list" as const,
      items: toLines(requiredString(get("descricao-4"), "descricao-4")),
    },
    {
      id: "interacao",
      iconKey: (get("icone-2") as CmsIconRef | undefined)?.iconKey ?? "Monitor",
      title: requiredString(get("titulo-7"), "titulo-7"),
      type: "text" as const,
      body: requiredString(get("descricao-5"), "descricao-5"),
    },
  ];

  const numerosRaw = get("numeros");
  const stats =
    Array.isArray(numerosRaw)
      ? numerosRaw
          .map((n) => {
            const nn = n as { numero?: unknown; descricao?: unknown };
            const rawNumero = typeof nn.numero === "string" ? nn.numero : "";
            const { target, suffix } = parseCounter(rawNumero);
            return {
              target,
              suffix,
              label: typeof nn.descricao === "string" ? nn.descricao : "",
            };
          })
          .filter((s) => s.target > 0 && s.label)
      : [];

  return {
    hero,
    quemSomos: {
      sectionLabel: requiredString(get("titulo-1"), "titulo-1"),
      heading: requiredString(get("texto-superior"), "texto-superior"),
      description: requiredString(get("descricao-1"), "descricao-1"),
      gallery: galleryUrls,
      values,
    },
    equipe: {
      sectionLabel: requiredString(get("texto-superior-1"), "texto-superior-1"),
      heading: requiredString(get("titulo-2"), "titulo-2"),
      members,
    },
    atuacao: {
      sectionLabel: "Especialidades",
      heading: "Áreas de Atuação",
      areas,
    },
    servicos: {
      sectionLabel: requiredString(get("texto-superior-3"), "texto-superior-3"),
      heading: requiredString(get("titulo-4"), "titulo-4"),
      description: servicosDescription,
      blocks,
      cta: {
        title: requiredString(get("texto-superior-4"), "texto-superior-4"),
        subtitle: requiredString(get("texto-inferior"), "texto-inferior"),
        description: requiredString(get("descricao-6"), "descricao-6"),
        button: requiredButton(get("botao"), "botao"),
      },
    },
    provaSocial: {
      title: requiredString(get("titulo-8"), "titulo-8"),
      description: requiredString(get("descricao-7"), "descricao-7"),
      stats,
    },
  };
}

