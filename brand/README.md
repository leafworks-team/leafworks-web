# Leafworks Brand

> Tools we wanted. Made for everyone.

리프웍스(Leafworks)는 기술과 아이디어를 바탕으로 새로운 제품과 경험을 만들어가는 개발 스튜디오입니다.
Leafworks is a development studio that builds new products and experiences from technology and ideas.

전체 가이드는 Figma에 있습니다 · The full guideline lives in Figma:
**[Leafworks Brand Guidelines](https://www.figma.com/design/JwvwdchW3hZrllMela1KH8)**

## At a glance

| | |
| --- | --- |
| Personality | 실용성 Practical · 친근함 Friendly |
| Wordmark | `Leafworks` — one word, outlined from Pretendard SemiBold, tracking −1.5% |
| Color | Monochrome logo · Leaf `#3A5F0B` (accent) · Signal `#FF2400` (sparingly) |
| Type | Pretendard (EN/KO) · Pretendard JP (JA) — SIL OFL 1.1 |
| Spacing | 4px base · radius sm 6 / md 12 / lg 20 / xl 28 |

## Files

| File | Use |
| --- | --- |
| `logo/leafworks-mark-positive.svg` | Mark, black, for light backgrounds |
| `logo/leafworks-mark-reversed.svg` | Mark, white, for dark backgrounds. **Different artwork**, not a recolor of positive |
| `logo/leafworks-wordmark-black.svg` · `-white.svg` | Wordmark only |
| `logo/leafworks-lockup-positive.svg` · `-reversed.svg` | Horizontal lockup. Wordmark height = 53% of mark height, gap = 23% |
| `logo/build-wordmark.py` | Regenerates the wordmark outlines from the locally installed Pretendard JP (`fonttools`, `uharfbuzz`) |
| `tokens/colors.json` | Color primitives and light/dark semantic tokens, mirrors the Figma variables |

The marks were traced (potrace) from the original high-resolution artwork. The old `leafworks_logo_vector.svg` was a straight-line polygon trace — don't use it.

## Rules that are easy to break

- **Signal `#FF2400` is not a text color on light backgrounds** (3.82:1). Large text, dots and icons only, about 2% of a surface.
- **Keep Signal away from Leafyrics.** Its maple `#BD5320` is only 11° of hue away.
- **Inside a product, the product's color is the accent.** Leaf green belongs to Leafworks surfaces.
- **"by Leafworks" sits in About screens, footers and store listings** — never merged into a product logo.
- Clear space around the logo: ¼ of the mark height. Minimum: mark 16px, lockup 24px tall.

## Known gaps

- Figma renders text in Noto Sans KR/JP because Pretendard isn't available in Figma's cloud. Swap the text styles to Pretendard in the desktop app.
- Dark mode `text/tertiary` is 4.16:1 — below 4.5 for body text.
