import type { Locale } from '../i18n/config';
import { leafyrics } from './apps/leafyrics';
import { layerdeck } from './apps/layerdeck';
import type { ProductType } from './product-types';

export type Localized = Record<Locale, string>;

export type AppStatus = 'in-development' | 'released';

export interface App {
  /** Stable URL segment under /apps/, including products classified as tools. */
  slug: string;
  name: string;
  productType: ProductType;
  /** Rounded-tile artwork in public/apps/. */
  icon: string;
  tagline: Localized;
  summary: Localized;
  /** Listing copy stays separate from the full detail-page description. */
  card: {
    headline?: Localized;
    description: Localized;
    compactDescription?: Localized;
    category: Localized;
  };
  description: Localized;
  features: { title: Localized; body: Localized }[];
  platforms: string[];
  status: AppStatus;
  license?: string;
  category?: Localized;
  downloadNote?: Localized;
  downloads?: { label: Localized; url: string }[];
  /**
   * Only public URLs. A link to a private repository 404s for every visitor, so
   * leave these out until the destination is public — the page hides the button.
   */
  homepage?: string;
  github?: string;
}

export const APPS: App[] = [
  leafyrics,
  layerdeck,
];

export function getApp(slug: string): App | undefined {
  return APPS.find((a) => a.slug === slug);
}
