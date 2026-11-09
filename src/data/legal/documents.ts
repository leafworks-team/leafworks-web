import type { MarkdownInstance } from 'astro';
import { DEFAULT_LOCALE, type Locale } from '../../i18n/config';

/**
 * Legal documents (terms of service, privacy policy, security reporting), kept per app as dated versions.
 *
 * Open source licenses are not here: the app's own license screen already lists every package
 * together with the engine's notices, which would run to megabytes on a web page.
 *
 * Each version is a self-contained Markdown file named `<app>/<document>/<effective date>.<locale>.md`
 * (for example `geonneolkka/privacy-policy/2026-11-16.ko.md`). A published version is never edited:
 * a change becomes a new file with a new date, so every older version keeps reading exactly as it
 * did when it was in force. That is also why the parts every document repeats (contact, rights) are
 * not a live component: changing one would silently rewrite every old version. Copy them from the
 * previous version instead.
 *
 * `/legal/<app>/<document>/` shows the newest version and is the URL that goes into the app and
 * the store listings. The same page holds the older versions and shows one when the URL ends in
 * `?date=YYYY-MM-DD`.
 */

/** Apps that have legal documents, in the order the index lists them. */
export const LEGAL_APPS = [{ slug: 'geonneolkka', name: { ko: '건널까', en: 'Geonneolkka', ja: 'コンノルカ' } }] as const;

export type LegalApp = (typeof LEGAL_APPS)[number];

/** Document kinds in the order an app's list shows them. An app only lists the ones it has. */
export const DOCUMENT_KINDS = ['terms-of-service', 'privacy-policy', 'refund-policy', 'security'] as const;

export type DocumentKind = (typeof DOCUMENT_KINDS)[number];

type Frontmatter = {
  /** Not yet in force. The page shows a banner so nobody mistakes it for the version in force. */
  draft?: boolean;
  /** One or two lines on what changed from the previous version. */
  changes?: string;
};

export type DocumentVersion = {
  app: string;
  kind: DocumentKind;
  /** Effective date, `YYYY-MM-DD`. */
  date: string;
  locale: Locale;
  draft: boolean;
  changes?: string;
  Content: MarkdownInstance<Frontmatter>['Content'];
};

const FILE = /\/([^/]+)\/([^/]+)\/(\d{4}-\d{2}-\d{2})\.(ko|en|ja)\.md$/;

function isKind(value: string): value is DocumentKind {
  return (DOCUMENT_KINDS as readonly string[]).includes(value);
}

const VERSIONS: DocumentVersion[] = Object.entries(
  import.meta.glob<MarkdownInstance<Frontmatter>>('./*/*/*.md', { eager: true }),
).map(([path, file]) => {
  const match = path.match(FILE);
  if (!match) throw new Error(`Legal document file name must be <app>/<document>/<YYYY-MM-DD>.<locale>.md: ${path}`);
  const [, app, kind, date, locale] = match;
  if (!isKind(kind)) throw new Error(`Unknown legal document "${kind}" in ${path}. Known: ${DOCUMENT_KINDS.join(', ')}`);
  // Pages are generated only for apps listed in LEGAL_APPS, while app pages link to whatever files exist,
  // so an unlisted app would get links to pages that were never built
  if (!LEGAL_APPS.some((entry) => entry.slug === app)) throw new Error(`Add "${app}" to LEGAL_APPS for ${path}`);
  return {
    app,
    kind,
    date,
    locale: locale as Locale,
    draft: file.frontmatter.draft ?? false,
    changes: file.frontmatter.changes,
    Content: file.Content,
  };
});

/** The documents an app has, in [DOCUMENT_KINDS] order. */
export function documentKinds(app: string): DocumentKind[] {
  return DOCUMENT_KINDS.filter((kind) => VERSIONS.some((version) => version.app === app && version.kind === kind));
}

/** Effective dates of one document, newest first. A date counts if any language has it. */
export function versionDates(app: string, kind: DocumentKind): string[] {
  const dates = new Set(
    VERSIONS.filter((version) => version.app === app && version.kind === kind).map((version) => version.date),
  );
  return [...dates].sort().reverse();
}

/**
 * Languages a page falls back to, in order, when a version has no text in the page's own language.
 * Korean is the original and every version has it. Documents are written in Korean and English only,
 * so Japanese pages show English, which more Japanese readers can read than Korean.
 */
const FALLBACKS: Record<Locale, Locale[]> = { ko: [], en: ['ko'], ja: ['en', 'ko'] };

/**
 * One version in one language. A version that has no text in the page's language falls back along
 * [FALLBACKS], and `fallback` tells the page to say which language it shows instead.
 */
export function documentVersion(
  app: string,
  kind: DocumentKind,
  date: string,
  locale: Locale,
): { version: DocumentVersion; fallback: boolean } {
  const same = (version: DocumentVersion) => version.app === app && version.kind === kind && version.date === date;
  if (!VERSIONS.some((version) => same(version) && version.locale === DEFAULT_LOCALE)) {
    throw new Error(`No ${DEFAULT_LOCALE} text for ${app} ${kind} ${date}`);
  }
  for (const language of [locale, ...FALLBACKS[locale]]) {
    const version = VERSIONS.find((candidate) => same(candidate) && candidate.locale === language);
    if (version) return { version, fallback: language !== locale };
  }
  throw new Error(`No text to show for ${app} ${kind} ${date} in ${locale}`);
}
