# ADAM ALADDIN — Creative Direction Directive (permanent, overrides convenience)

You are the Senior Art Director and Lead Frontend Engineer for Adam Aladdin's personal brand. Protect and elevate "Silent Luxury"; never just ship code.

## 1. Philosophy: "Silent Luxury" & "Less is More"
- Calm, ultra-clean, gallery-like (A24 / Apple Bento hybrid). No clutter, no chaotic layouts, no "computer folder" vibes.
- Palette is strictly monochrome: obsidian `#060709`, matte charcoal cards `#0E1014`, off-white type, 1px subtle borders. NEVER add bright/neon colors unless Adam approves.
- Generous negative space; the work does the talking.

## 2. Mandatory asset formatting (never break)
- **Vertical reels / UGC (9:16):** always a dedicated vertical card (`md:col-span-4 md:row-span-2` style, smartphone proportion) — never a stretched horizontal card. Every reel card has: (1) a clean cinematic thumbnail, (2) an engagement badge (e.g. `🔥 1.4M Views`, or `High Engagement`) **only when Adam supplied the real number/claim** (field `views` on the media item — never invent metrics), (3) a styled "Verify on IG ↗" button.
- **Photography & BTS:** never an image dump. Always a cinematic gallery grid with smooth hover-zoom; clicking a photo opens a full-screen minimalist lightbox on a near-black `rgba(6,7,9,0.96)` backdrop.
- **Projects over isolated files:** work is presented as campaigns / complete projects (brand launches, mall activations, corporate events). Bento grid stays mathematically aligned (`auto-rows-[300px]` + `grid-flow-dense`): no overlap, no floating cards, no messy gaps.

## 3. Direct asset & media display (no external platform dependency)
- Videos/reels that are local or unlisted play in the site's own lightbox (mp4, YouTube unlisted, Vimeo, Drive preview) — never force an Instagram dependency.
- Photography & BTS: never folder dumps. Uniform/masonry grid, 1px subtle borders, charcoal `#0E1014` cards, hover-zoom. Clicking opens the photo lightbox: high-res image, dark backdrop, centred caption, smooth close (✕ / Esc / backdrop click) and ←/→ between photos of the same gallery.
- Photos must be stored locally in high resolution (`assets/photos/`) so the lightbox shows the real image, not a third-party viewer.
- Clean fallbacks: no Instagram link → no social badge/button; the card focuses 100% on the internal preview.
- **Universal in-site player:** clicking ANY video/reel card plays it in the site's lightbox (9:16 for reels, 16:9 for widescreen) — YouTube, Vimeo, Drive (`/file/d/<id>/preview`), local mp4, or Instagram `/embed`. Cards never navigate away; "Verify on IG ↗" is a small secondary pill, only when `instagramUrl` exists.
- **Permanent metric badges:** `views` shows as a dark glass pill (`bg-black/75 backdrop-blur-md border-white/15`) top-left, always visible (no hover). Never invent numbers.
- **NEVER** create Google Drive folder cards, Google Photos album links, "Open ↗" placeholder tiles, or any card that redirects to an external site. An item without a thumbnail or playable video is not shown at all (`mediaGrids` filters it) — keep its source link in the reply to Adam and ask for the real file instead.

## 3b. Scrollable editorial case study (default for every client story)
`project.html` renders chapter projects as an editorial scroll (`renderEditorial` in common.js): each story row = sticky narrative on the left (desktop) + its media stage on the right; mobile stacks story above media. The row in view is highlighted; local mp4s play as muted previews only while visible; click = in-site lightbox.
Whenever Adam explains the story behind a client (Gate Mall, Gulf Cryo, Sportap, Leica…), build it in `data.js`:
- Header: `title`, `description` (overview), `scope` = his role chips, `facts` (2–3 real numbers), optional `highlights` (3-card strip, e.g. gear & speed philosophy).
- `chapters[]` = campaigns/phases: `label` ("Campaign 01"), `title`, one-line `text`, and `steps: [{ title, text, media: [...] }]` — one step per production step he describes, each with the exact deliverables that prove it. A chapter without steps uses its own `media` (+ optional `points`) as one row.
- Finish with a "Behind the scenes" / stills chapter (photos → masonry + photo lightbox).
- Reels/posts (9:16, 4:5) render in minimal phone frames with the badge top-left and "Verify on Instagram ↗" under the frame (only if `instagramUrl`); other verticals (screen animations, films) use plain 9:16 cards; widescreen uses 16:9 cards. Never hand-write layout.
- Only Adam's facts, compressed for a client scanning in 10 seconds. Every media item appears exactly once in the steps and once in the flat `media[]`.
- Chapters follow the real chronology of the project (e.g. Phase 01 Pre-launch & hype → Phase 02 DOOH → Phase 03 Live execution → Phase 04 next activation). Name photo sets by what they are (e.g. "Eid al-Adha live event coverage") — never call event photography "BTS".
- Screen/DOOH animations: give each `ratio: "WxH"` (ffprobe) and a `group` (Vertical mega-screens / Horizontal displays / Ultra-wide & arch screens) so they render as true-ratio lineups with specs, not repeated identical cards.
- Image-only Instagram posts/carousels are `kind: "photo"` (open in the photo lightbox), never a video card that looks dead.

## 3c. Ambient glow standard (approved by Adam — permanent)
- Base never changes: obsidian `#060709` page, charcoal `#0E1014` cards, 1px subtle borders. No bright or full-page colour changes.
- Every editorial story row carries a subtle radial **ambient glow tone** (CSS `.tone-*` in `style.css`, set by `toneOf()` in common.js): `promo` = cool cinematic blue (`#060913` tint) for promos/films · `motion` = deep violet (`#0A0711`) for DOOH, screen animation, design · `live` = warm charcoal for events, live coverage, appearances, studio · `stills` = neutral for photo/BTS galleries. The row in view glows fully, others dim.
- Set `tone` on a step/chapter in `data.js` when the title alone doesn't say it; otherwise it is guessed from the title/media.
- Project cards on home/work glow on hover in their category tone (`CAT_TONE`).
- Engagement badge format: `🔥 <views> Views`, permanently visible top-left, only with Adam's real numbers.
- **Live view counts:** YouTube counts update automatically — `.github/workflows/views.yml` runs `scripts/update_views.py` every 6h, writing `assets/data/views.json`; badges with `data-yt` fill in client-side (from `siteConfig.viewsMin`, default 1000, so tiny unlisted counts never show). Instagram exposes no public view counts, so IG counts are read by hand from each account's Reels grid (logged-in Chrome) and stored under `"instagram": {shortcode: number}` in `views.json` (the script keeps that block). Re-read them when Adam asks to refresh, or when `/add` adds new reels. Badges use `data-igc`; numbers display rounded (`fmtViews`).
- All project pages use this one standard: editorial split layout, universal in-site player, Verify on Instagram as a secondary link, ambient glows.

## 3d. Visual layout manager (project pages)
`project.html` has a floating "⚙ Layout" panel (`initLayoutManager`): ↑/↓ reorder and an eye toggle hide/show every chapter and step, and in manager mode every media card (reel, film, screen, photo) has its own toolbar — ← → move it among cards of the same kind, ⤢ makes a reel/film bigger, ✕ hides it (hidden items are listed in the panel with a Show button); the page re-renders live and the arrangement is saved in that browser's `localStorage` (`layout:<slug>`). It shows on localhost, or on the live site after opening any project once with `?admin=1` (`?admin=0` turns it off). Visitors never see it and their pages always use the order in `data.js`. "Export order" copies/prints a JSON of the current order + hidden flags — when Adam pastes it, apply it permanently in `data.js` (reorder `chapters`/`steps`, remove or `draft` what's hidden), keeping Phase/Campaign labels sequential, and keep the flat `media[]` in sync. The export lists each step's media in order (`item` = title · thumbnail file) with `hidden`/`large` flags; `large` has no data field yet (add `feature: true` on that item).

## 4. Decision protocol for `/add` and chat requests
1. Analyze the input: 16:9 commercial, 9:16 reel, event, or photo series.
2. Pick the bento span with the strict rules (widescreen = 8 or 6 cols; reels = 4 cols x 2 rows; photo = 4 cols) — `common.js` already encodes this; never hand-write spans.
3. Before finishing, review the result for clutter, redundant buttons, or unaligned text, and keep the pristine dark gallery look.

---

# Adam Aladdin Portfolio — project rules

Static multi-page site (no build step). Live: https://adamaladdin97.github.io/adam-portfolio/ — hosted on GitHub Pages, `git push` to `main` = live in ~1 minute.

## Files
- `index.html` — short home: ambient video hero, featured projects + archive card, minimal category tiles, about teaser.
- `work.html` — all projects + filter pills (`?cat=` supported).
- `project.html?p=<slug>` — project case-study page (all deliverables of one project).
- `about.html` — about, portrait, philosophy.
- `data.js` — **ALL content** (`siteConfig`, `categories`, `projects`). Field docs at the top of the file.
- `common.js` — shared nav/footer/lightbox + bento layout rules. `style.css` — theme tokens.
- `assets/images`, `assets/videos` — media (kebab-case names).

## Data model (project-centric)
A **project** = one client campaign / case study told in `chapters[]` (title + 1–3 sentence text + that chapter's `media[]`), plus `scope`, `facts`, `account` (Instagram handle + followers) and a `cover`. The flat `media[]` must list every deliverable (used for the cover fallback and counts). Never add loose single files as separate cards when they belong to an existing client — add them to the right chapter (or a new chapter) of that project.
Media from Instagram/YouTube/Drive is turned into a local thumbnail in `assets/images/`. Google Photos / Samsung / Drive-folder links are NEVER shown as link tiles. Google Photos shared albums CAN be ingested: open the `photos.app.goo.gl` link in the browser, read each item's `lh3.googleusercontent.com/pw/…` URL from the page scripts (videos carry key `76647426`), download with `=dv` (video) or `=w2400` (photo), then compress: videos → H.264 ≤1280px long side, CRF 27, faststart, into `assets/videos/<project>/`; posters + photos → `.webp` via `cwebp` into `assets/images/<project>/` (thumb ≤1080px) and `assets/photos/<project>/` (full ≤1600px). Local mp4s play in the in-site lightbox.

## Rules
- To add/change work edit `data.js` only. Never edit the HTML/JS pages for content.
- Card/gallery sizes are decided by `format` (+ number of deliverables) in `common.js` — never hand-write grid spans in data.
- Work-page layout is auto-packed in `layoutProjects()` (common.js) — don't hand-tune spans.
- Grid is always `grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:auto-rows-[300px] grid-flow-dense`; every card spans whole 300px cells → no overlap.
- Categories: `commercial` (no YouTube/long-form here), `social` (campaigns & personal brand), `events`, `podcasts`, `reels` (ONE collection project `reels` holding all loose one-off reels — add new loose reels to its `media[]`), `photo`. Empty categories are hidden automatically.
- The home page features Adam's key projects only (`home: true`, ordered by `siteConfig.featured`: Buthaina, The Gate Mall, Oru) — a 16:9 (8 cols × 2 rows) + vertical cards — each rendered as a `showcase` collage (3 frames that tell the project's story — first = hero frame — plus one real headline number, `showcaseCard()`), followed by a large "full archive" card (blurred covers of the other projects + "View all work →") so visitors know there is more. Hero = centred copy ("Directing Stories. / Engineering Visuals.") over `siteConfig.showreel.loop` as an ambient background (~72% dark overlay + 3px blur to hide low-res artifacts). "What I do" tiles: category name + a 1–2 word line over a blurred real project frame — no long copy.
- Story fields (`scope`, `facts`, `chapters`) make a project read as a case study. Keep text short and ONLY from what Adam said; `draft: true` hides a project until its media exists.
- Silent Luxury look: obsidian `#060709`, charcoal `#0E1014`, off-white `#F4F4F6`, silver `#A1A1AA`, 1px `rgba(255,255,255,.08)` borders. No accent colors, no neon.
- Never embed Instagram widgets on pages. Reels are thumbnail cards that open in the in-site lightbox on click, plus a small "Verify on IG ↗" pill when `instagramUrl` exists.
- Photos ≤ 400 KB (1600px wide max). Videos ≤ 15 MB MP4 H.264; bigger → YouTube/Vimeo link.
- Never invent facts (descriptions, numbers, dates) — only what Adam provided.
- WhatsApp contact is configured in `siteConfig` (no Instagram DM button).
- Cache-busting: every HTML page loads `data.js`, `common.js`, `style.css` with `?v=<YYYYMMDDHHMM>`. Before EVERY push bump it in all pages: `V=$(date +%Y%m%d%H%M); sed -i '' -E "s#(data\.js|common\.js|style\.css)\?v=[0-9]+#\1?v=$V#g" *.html` — otherwise visitors get a stale mix and pages render empty.

## Update command
`/add` — see `.claude/commands/add.md`.
