import type { ComponentType } from "react";
import {
  Award,
  Briefcase,
  BriefcaseBusiness,
  FileText,
  Gavel,
  Heart,
  Landmark,
  Monitor,
  Scale,
  Shield,
} from "lucide-react";

const REGISTRY: Record<string, ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  Scale,
  Shield,
  Award,
  Landmark,
  Heart,
  FileText,
  BriefcaseBusiness,
  Gavel,
  Briefcase,
  Monitor,
};

export function getRegistryIcon(iconKey: string) {
  return REGISTRY[iconKey];
}

