export const LOCALES = ['ko', 'en', 'ja'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'ko';

/** Locales that get a URL prefix. The default one is served from the root. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

/** Endonyms — a language picker names each language in that language. */
export const LOCALE_NAMES: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
};

/** Short labels for the KO / EN / JA toggle. */
export const LOCALE_SHORT: Record<Locale, string> = {
  ko: 'KO',
  en: 'EN',
  ja: 'JA',
};

/** `lang` attribute and `hreflang` value. */
export const HTML_LANG: Record<Locale, string> = {
  ko: 'ko',
  en: 'en',
  ja: 'ja',
};

/**
 * Routes are keyed rather than parsed out of the pathname. Deriving the key
 * from the URL means stripping a locale prefix that may or may not be there,
 * and getting that wrong silently sends the language toggle to a 404 — so each
 * page states its own key instead.
 */
export type Route = { key: 'home' } | { key: 'brand' } | { key: 'app'; slug: string };

/** Absolute path for a route in a locale, with the trailing slash Astro emits. */
export function localizedPath(route: Route, locale: Locale): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  switch (route.key) {
    case 'home':
      return `${prefix}/`;
    case 'brand':
      return `${prefix}/brand/`;
    case 'app':
      return `${prefix}/apps/${route.slug}/`;
  }
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}
