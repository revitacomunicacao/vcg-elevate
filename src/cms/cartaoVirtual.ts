import { cmsUrl } from "./base";

export type CmsCartaoVirtualResponse = {
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

export type CartaoVirtualContent = {
  pdfUrl: string;
};

const ENDPOINT = cmsUrl("/admin/api/pages/cartaovirtual");

function requiredString(value: unknown, fieldId: string): string {
  if (typeof value === "string" && value.trim()) return value.trim();
  throw new Error(`Campo '${fieldId}' inválido (esperado texto).`);
}

export async function fetchCartaoVirtualContent(signal?: AbortSignal): Promise<CartaoVirtualContent> {
  const res = await fetch(ENDPOINT, { signal, headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`Falha ao carregar Cartão Virtual CMS (HTTP ${res.status}).`);
  const json = (await res.json()) as CmsCartaoVirtualResponse;
  if (!json?.success || !json.data?.campos) throw new Error("Resposta do CMS inválida.");

  const fieldMap = new Map(json.data.campos.map((c) => [c.identificador, c.valor]));
  return { pdfUrl: requiredString(fieldMap.get("pdf"), "pdf") };
}
