export type CmsButton = { texto: string; link: string };

export type CmsAtuacaoResponse = {
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

export type AtuacaoContent = {
  hero: { title: string; subtitle: string };
  body: {
    description: string;
    servicesTitle: string;
    services: string[];
    approachTitle: string;
    approach: string;
  };
  cta: { title: string; description: string; button: CmsButton };
};

type AtuacaoKey = "direito-civil" | "direito-das-familias" | "direito-das-sucessoes" | "direito-empresarial";

const ENDPOINTS: Record<AtuacaoKey, string> = {
  "direito-civil": "https://vcg.adv.br/admin/api/pages/direito-civil",
  "direito-das-familias": "https://vcg.adv.br/admin/api/pages/direito-das-familias",
  "direito-das-sucessoes": "https://vcg.adv.br/admin/api/pages/direito-das-sucessoes",
  "direito-empresarial": "https://vcg.adv.br/admin/api/pages/direito-empresarial",
};

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

function toLines(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
}

export async function fetchAtuacaoContent(key: AtuacaoKey, signal?: AbortSignal): Promise<AtuacaoContent> {
  const url = ENDPOINTS[key];
  const res = await fetch(url, { signal, headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`Falha ao carregar Atuação '${key}' (HTTP ${res.status}).`);
  const json = (await res.json()) as CmsAtuacaoResponse;
  if (!json?.success || !json.data?.campos) throw new Error("Resposta do CMS inválida.");

  const fieldMap = new Map(json.data.campos.map((c) => [c.identificador, c.valor]));
  const get = (id: string) => fieldMap.get(id);

  const hero = {
    title: requiredString(get("titulo"), "titulo"),
    subtitle: requiredString(get("descricao"), "descricao"),
  };

  const body = {
    description: requiredString(get("descricao-1"), "descricao-1"),
    servicesTitle: "Nossos Serviços",
    services: toLines(requiredString(get("nossos-servicos"), "nossos-servicos")),
    approachTitle: "Abordagem",
    approach: requiredString(get("abordagem"), "abordagem"),
  };

  const cta = {
    title: requiredString(get("titulo-1"), "titulo-1"),
    description: requiredString(get("descricao-2"), "descricao-2"),
    button: requiredButton(get("botao"), "botao"),
  };

  if (body.services.length === 0) throw new Error("Campo 'nossos-servicos' vazio/ausente.");

  return { hero, body, cta };
}

