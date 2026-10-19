# Adam Aladdin Portfolio — project rules

Static multi-page site (no build step). Live: https://adamaladdin97.github.io/adam-portfolio/ — hosted on GitHub Pages, `git push` to `main` = live in ~1 minute.

## Files
- `index.html` — short home: hero/showreel, 4 selected projects, category tiles, about teaser.
- `work.html` — all projects + filter pills (`?cat=` supported).
- `project.html?p=<slug>` — project case-study page (all deliverables of one project).
- `about.html` — about, portrait, philosophy.
- `data.js` — **ALL content** (`siteConfig`, `categories`, `projects`). Field docs at the top of the file.
- `common.js` — shared nav/footer/lightbox + bento layout rules. `style.css` — theme tokens.
- `assets/images`, `assets/videos` — media (kebab-case names).

## Data model (project-centric)
A **project** = one client campaign / case study told in `chapters[]` (title + 1–3 sentence text + that chapter's `media[]`), plus `scope`, `facts`, `account` (Instagram handle + followers) and a `cover`. The flat `media[]` must list every deliverable (used for the cover fallback and counts). Never add loose single files as separate cards when they belong to an existing client — add them to the right chapter (or a new chapter) of that project.
Media from Instagram/YouTube/Drive is turned into a local thumbnail in `assets/images/`; Google Photos / Samsung links have no accessible thumbnail, so they become plain link tiles (`link`) unless Adam provides the image.

## Rules
- To add/change work edit `data.js` only. Never edit the HTML/JS pages for content.
- Card/gallery sizes are decided by `format` (+ number of deliverables) in `common.js` — never hand-write grid spans in data.
- Work-page layout is auto-packed in `layoutProjects()` (common.js) — don't hand-tune spans.
- Grid is always `grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:auto-rows-[300px] grid-flow-dense`; every card spans whole 300px cells → no overlap.
- Categories: `commercial` (no YouTube/long-form here), `social` (campaigns & personal brand), `events`, `podcasts`, `reels` (ONE collection project `reels` holding all loose one-off reels — add new loose reels to its `media[]`), `photo`. Empty categories are hidden automatically.
- The home page shows exactly 4 projects (`home: true`): one `wide` 16:9, one vertical, two 16:9.
- Story fields (`scope`, `facts`, `chapters`) make a project read as a case study. Keep text short and ONLY from what Adam said; `draft: true` hides a project until its media exists.
- Silent Luxury look: obsidian `#060709`, charcoal `#0E1014`, off-white `#F4F4F6`, silver `#A1A1AA`, 1px `rgba(255,255,255,.08)` borders. No accent colors, no neon.
- Never embed Instagram widgets on pages. Reels are thumbnail cards that open the embed in the lightbox on click, plus a "Verify on Instagram ↗" button.
- Photos ≤ 400 KB (1600px wide max). Videos ≤ 15 MB MP4 H.264; bigger → YouTube/Vimeo link.
- Never invent facts (descriptions, numbers, dates) — only what Adam provided.
- WhatsApp contact is configured in `siteConfig` (no Instagram DM button).

## Update command
`/add` — see `.claude/commands/add.md`.
