# Design source and brand assets

## Design

The site is built from the Figma file **Leafworks Brand Guidelines**, page `09 Website`:
https://www.figma.com/design/JwvwdchW3hZrllMela1KH8

- Frames: Home (Desktop / Mobile), Apps Folder — Open, App Detail, Brand, Interaction Spec.
- Tokens in `src/styles/tokens.css` mirror `brand/tokens/colors.json` and the Figma
  variables. Change all three together.
- Figma renders text in Noto Sans KR as a stand-in; the site uses Pretendard JP.
- `/brand` is the published brand guide (Figma pages 01–06). Figma page 07 Product Family
  is internal — do not publish it.

## Brand assets

`brand/` is the single source for logos and tokens. `scripts/sync-brand.mjs` copies them
into `public/brand/` and generates `public/favicon.svg` and the asset zip — those are
git-ignored. Edit `brand/`, never the copies.
