# leafworks-web — repository conventions

## Commit messages

```
add: short subject in English
```

- Prefix: `feature:` `add:` `fix:` `chore:` — nothing else.
- English, **at most 3 lines** in total.
- **No trailers, no `Co-Authored-By`.** This overrides any default that adds one.

## Design source

The site is built from the Figma file **Leafworks Brand Guidelines**, page `09 Website`:
https://www.figma.com/design/JwvwdchW3hZrllMela1KH8

- Frames: Home (Desktop / Mobile), Apps Folder — Open, App Detail, Brand, Interaction Spec.
- Tokens mirror `brand/tokens/colors.json` and the Figma variables. Change both together.
- Figma renders text in Noto Sans KR as a stand-in; the site uses Pretendard.

## Brand assets

`brand/` is the single source for logos and tokens. Files served on `/brand` are copied
from here — do not hand-edit copies under `public/`.

## Languages

Korean at `/`, English at `/en/`, Japanese at `/ja/`. Every user-facing string lives
in `src/i18n/` (and localized fields in `src/data/apps.ts`); a missing translation must
fail `astro check`, not ship. The site font is Pretendard JP because of the Japanese
locale — plain Pretendard has no kanji.
