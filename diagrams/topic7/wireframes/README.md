# SAD 2026 — Figma reference export

Static HTML + CSS renderings of the **SAD-2026** Figma file, page **Wireframe**.
This is a **visual/structural reference only** — not production code.

- Figma file: <https://www.figma.com/design/Fo4xm6B3ihoWaOC6uHdSwO/SAD-2026>
- Page: `Wireframe` (`34:2`), 10 top-level frames
- Exported: 2026-11-04

## Open it

Open `index.html` in a browser (no build step, no server needed).

Each screen page is a fixed 402 px wide frame, absolutely positioned at the
exact coordinates from Figma, wrapped in a small navigation header.

> The pages load `Inter` and `Be Vietnam Pro` from Google Fonts. Without
> internet access the browser falls back to a system font, so text metrics
> will differ slightly.

## Contents

```
index.html                        gallery of all 10 screens
home.html                         HomePage
login.html                        Login
feedback-selection.html           FeedbackSelection
report-infra.html                 Report_Infastructure
report-infra-history.html         Report_Infastructure_History
report-party-history.html         Report_Party_History
report-individual.html            Report_IndividualOrOrganization
report-individual-history.html    Report_IndividualOrOrganization_History
report-public-services-history.html  Report_PublicServices_History
report-individual-fullvisual.html    Report_IndividualOrOrganization_FullVisual (402x3263)
assets/                           28 SVG assets downloaded from Figma
screenshots/                      5 PNG exports from Figma (ground truth, 1x)
renders/                          headless-Firefox render of each generated page
verification/                     side-by-side Figma | generated images + metrics.json
_source/                          generator and raw Figma design-context dumps
```

## How it was generated

1. Figma MCP `get_design_context` for each frame → React + Tailwind source
   (`/tmp/opencode/sad2026/raw/*.jsx`).
2. A converter (`/tmp/opencode/sad2026/build.py`) parses that JSX and maps the
   Tailwind utility classes to plain inline CSS rules. No Tailwind runtime or
   build step is required by the output.
3. Assets referenced by the design context were downloaded into `assets/`
   (the original Figma asset URLs expire after 7 days).
4. Code-connected components come back as `<CodeConnectSnippet>` placeholders
   with no geometry. Their positions/sizes were taken from the `get_metadata`
   node tree, and the glyphs were re-drawn with matching open icon sets
   (Material 3 kit: `arrow_back`, `edit`, `comment`, `call_end`;
   lucide / Simple Design System: `refresh-cw`, `eye-off`, `lock`,
   `book-open`).

## Fidelity

Measured against 1x PNG exports of the frames (RMSE, 0 = identical):

| screen | RMSE | RMSE after 3px blur |
|---|---|---|
| feedback-selection | 0.0274 | 0.0030 |
| report-infra | 0.0306 | 0.0035 |
| report-infra-history | 0.0308 | 0.0037 |
| home | 0.0512 | 0.0142 |
| login | 0.0609 | 0.0268 |

(0 = identical; `verification/metrics.json` holds the raw numbers.)

The remaining differences are almost entirely font rasterisation (glyph
antialiasing, ~1–2 px baseline offsets in a few centred labels) and the
re-drawn icons. `verification/*-compare.png` shows Figma (left) next to the
generated page (right) for the screens that could be verified.

## Known limitations

- **Not responsive.** Every node is absolutely positioned at its Figma
  coordinates; the layout only looks right at 402 px width.
- **Only 5 of 10 screens could be pixel-verified.** The Figma MCP Starter plan
  hit its tool-call limit before PNG exports could be fetched for
  `report-party-history`, `report-individual`,
  `report-individual-history`, `report-public-services-history` and
  `report-individual-fullvisual`. Those pages are still generated from their
  design context; `renders/` shows what they look like and `index.html` labels
  them accordingly.
- **Icons are approximations.** The design references proprietary component
  libraries through Code Connect; the original vector icons were not available,
  so matching open-source glyphs are used instead. The small 16x16
  `IllutrativeIcon` in the Home header is not reconstructed at all.
- **Text is HTML text, not outlines.** Font family/size/weight/letter-spacing
  are preserved, but Figma's text-layout details (baseline rounding, underlines
  at sub-pixel positions) can be 1–2 px off.
- Frames are clipped with `overflow: hidden`, matching Figma's frame clipping
  for horizontally overflowing rows (e.g. the Home "Utilities" strip): the
  off-screen cards are not accessible by scrolling in this static export.

## Regenerating

The generator and its inputs are in `_source/`:

- `_source/build.py` — the converter (JSX/Tailwind → static HTML/CSS)
- `_source/raw/*.jsx` — the `get_design_context` responses for all 10 frames
- `_source/meta.xml` — the `get_metadata` dump used for exact node positions
- `_source/shots.json` — the 5 Figma PNG export URLs

```sh
cd _source
python3 build.py
```

It rewrites the pages, `index.html`, `renders/` and `verification/` in the
parent folder. Requirements: Python 3, Firefox (headless screenshots) and
ImageMagick (`compare`/`magick`) for the verification step. The Figma asset
URLs inside the raw dumps are temporary and expire after 7 days; the downloaded
copies in `assets/` are the long-lived source, so a rebuild reuses them.
