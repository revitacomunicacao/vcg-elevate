import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { DISCLAIMER, TEL, TEL_LABEL, WA } from "./shared";
import drVinicius from "@/assets/DrVinicius.jpeg";

/** Estilos LP (ouro / outline) sobre o Button do shadcn — evita o bordô institucional. */
export const lpBtnGold =
  "bg-[#c4a35a] text-[#12141a] hover:bg-[#d4b56a] hover:text-[#12141a] font-semibold h-auto py-3 px-6 shadow-none";
export const lpBtnOutline =
  "border-white/25 bg-transparent text-inherit hover:bg-white/10 hover:text-inherit h-auto py-3 px-6 shadow-none";

export function LpWaButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Button asChild size="lg" className={cn(lpBtnGold, className)}>
      <a href={WA} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="h-5 w-5" />
        {children}
      </a>
    </Button>
  );
}

export function LpTelButton({
  children = "Ligar agora",
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Button asChild variant="outline" size="lg" className={cn(lpBtnOutline, className)}>
      <a href={TEL}>
        <Phone className="h-4 w-4" />
        {children}
      </a>
    </Button>
  );
}

/** CTAs agrupados (Button Group do shadcn). */
export function LpCtaGroup({
  waLabel,
  telLabel = "Ligar agora",
  className,
  orientation = "horizontal",
}: {
  waLabel: ReactNode;
  telLabel?: ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <ButtonGroup
      aria-label="Contato"
      orientation={orientation}
      className={cn(
        "w-full sm:w-fit flex-col sm:flex-row [&>a]:w-full sm:[&>a]:w-auto [&>*:not(:first-child)]:rounded-l-md [&>*:not(:first-child)]:border-l [&>*:not(:last-child)]:rounded-r-md",
        className,
      )}
    >
      <LpWaButton className="rounded-md">{waLabel}</LpWaButton>
      <LpTelButton className="rounded-md">{telLabel}</LpTelButton>
    </ButtonGroup>
  );
}

export function LpEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "mb-5 border-[#c4a35a]/35 bg-[#c4a35a]/10 text-[#c4a35a] tracking-[0.2em] uppercase text-[11px] font-medium rounded-sm px-3 py-1 hover:bg-[#c4a35a]/10",
        className,
      )}
    >
      {children}
    </Badge>
  );
}

export function LpChip({
  children,
  className,
  tip,
}: {
  children: ReactNode;
  className?: string;
  tip?: string;
}) {
  const chip = (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full border-white/10 bg-white/5 px-4 py-2 text-sm font-normal text-white/85 hover:bg-white/5",
        className,
      )}
    >
      {children}
    </Badge>
  );

  if (!tip) return chip;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-flex cursor-default">{chip}</span>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs border-white/10 bg-[#162033] text-white">
        {tip}
      </TooltipContent>
    </Tooltip>
  );
}

export function LpAvatar({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Avatar className={cn("h-36 w-36 border-4 border-[#c4a35a] shadow-2xl", className)}>
      <AvatarImage src={src} alt={alt} className="object-cover" />
      <AvatarFallback className="bg-[#1a1d26] text-[#c4a35a] font-serif text-lg">VCG</AvatarFallback>
    </Avatar>
  );
}

/** Preview do advogado ao passar o mouse (Hover Card). */
export function LpLawyerHover({
  children,
  area = "Direito das Famílias e Sucessões",
}: {
  children: ReactNode;
  area?: string;
}) {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-80 border-white/10 bg-[#1a1d26] text-[#e8eaef] shadow-xl">
        <div className="flex gap-4">
          <Avatar className="h-14 w-14 border-2 border-[#c4a35a]">
            <AvatarImage src={drVinicius} alt="Dr. Vinicius" className="object-cover" />
            <AvatarFallback>VCG</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="font-serif text-sm font-semibold">Dr. Vinicius Carneiro Gonçalves</p>
            <p className="text-xs text-[#c4a35a]">{area}</p>
            <p className="text-xs text-[#9aa3b2] leading-relaxed">
              Atendimento direto, presencial em Uberaba/MG ou on-line. {TEL_LABEL}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function LpDisclaimer({ className }: { className?: string }) {
  return (
    <Alert className={cn("mt-4 border-white/10 bg-white/[0.03] max-w-3xl mx-auto text-left", className)}>
      <AlertDescription className="text-xs leading-relaxed text-inherit opacity-80">{DISCLAIMER}</AlertDescription>
    </Alert>
  );
}

/** Provider de tooltips para a página. */
export function LpShell({ children }: { children: ReactNode }) {
  return <TooltipProvider delayDuration={200}>{children}</TooltipProvider>;
}
