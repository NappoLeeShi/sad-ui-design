# Agent Log — Prompt 3.2: Home page styling fix

- **Date:** 2026-11-05
- **Prompt:** `docs/prompts/prompt_3.2_home_page_styling_fix.md`
- **Response:** Fixed the clipped tilde in the citizen name and recolored the Home identity band with MD3 roles instead of the reference's grey palette.
- **Changes:** `app/home/page.tsx` only.

---

## 1. Name accent fix

The text was already correct (`Nguyễn Văn A`, with `ễ` = U+1EC5) and the Be Vietnam Pro font loaded with the Vietnamese subset. The glyph was being clipped, not mis-encoded:

- `text-display` gives a 26 px font a 32 px line box.
- Uppercase `Ễ` stacks a circumflex and a tilde; its ink rises ~30 px above the baseline, about 5 px above the line box.
- `truncate` set `overflow: hidden`, cutting off the tilde and leaving `NGUYÊN`.

Fix: removed `truncate` from the name and used `break-words` so long names wrap instead of being clipped. No typography token changed.

## 2. Header recoloring

The reference is a greybox, so its grey band and white-on-grey treatment were replaced with the application's semantic roles:

| Element | Before | After |
| --- | --- | --- |
| Identity band | `bg-on-surface/55` (grey) | `bg-primary` (`#A51B1D`) |
| Name / band text | `text-surface` (white) | `text-on-primary` |
| Avatar | white 15% on grey | `bg-on-primary/15`, `ring-on-primary/25` |
| Search icon | `text-surface/85` | `text-on-primary/80` |
| Identity pill | white surface, black text | `bg-primary-container` (`#FFEBEC`), `text-primary` |
| QR icon tile | `bg-surface-variant`, muted text | `bg-primary-container`, `text-primary` |
| QR cards | white surface, on-surface text | unchanged (white cards keep contrast on the red band) |

This matches the feedback and report pages, where primary containers carry red icons and primary is reserved for prominent surfaces. The band is now the page's single strong brand moment; the rest of Home stays quiet.

## 3. Verification

- `bun run lint` and `bun run build` pass.
- Headless Firefox (WebDriver BiDi), 48/48 checks, including:
  - name codepoint `ễ` preserved and no clipping ancestor;
  - band, name, pill, and QR icon resolve to `#A51B1D` / white / `#FFEBEC`;
  - contrast: name 7.57:1, pill 6.61:1, QR icons 6.61:1;
  - pixel comparison of the name crop: 0 white pixels above the old clip line before, 74 after — the tilde is now painted;
  - layout remains 180 px tall with no overflow at 430/390/360/320 px;
  - login → `/home`, Home → `/feedback`, Back → `/home`, and route guards still pass.
