import type { Service } from "./types";
import { addictionRecovery } from "./addiction-recovery";
import { autismSpecialNeeds } from "./autism-special-needs";
import { mentalHealth } from "./mental-health";
import { employmentStability } from "./employment-stability";
import { youthFamily } from "./youth-family";
import { homelessnessPrevention } from "./homelessness-prevention";
import { healthWellness } from "./health-wellness";

/** Display order across the site: listing page, home grid, sitemap, schema. */
export const SERVICES: Service[] = [
  addictionRecovery,
  mentalHealth,
  autismSpecialNeeds,
  employmentStability,
  youthFamily,
  homelessnessPrevention,
  healthWellness,
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export type { Service } from "./types";
export { serviceFaqs } from "./types";
