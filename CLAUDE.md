# Adam Aladdin Portfolio — project rules

Static site (no build step): `index.html` (layout/code) + `data.js` (ALL content) + `assets/`.
Hosted on GitHub Pages / Cloudflare Pages — `git push` to `main` = live update.

## Rules
- Never edit `index.html` to add work. Only append to `portfolioItems` in `data.js` (field docs are at the top of that file).
- Card size is decided by `format` only ("16:9", "9:16", "1:1", "4:5"). Never hand-write grid spans.
- At most ONE item has `featured: true` (a 16:9 hero card, 8 cols wide).
- Keep the "Silent Luxury" look: obsidian/charcoal/off-white, no accent colors, no neon.
- Media lives in `assets/images/` and `assets/videos/` (lowercase-kebab file names). Photos: JPG/WebP ≤ 400 KB, 1600px wide max. Videos: MP4 H.264 ≤ 15 MB; bigger → upload to YouTube/Vimeo and use the link instead.
- Never embed Instagram widgets. Reels use a thumbnail + `instagramUrl` ("Verify on Instagram ↗").
- Remove `placeholder: true` items when real work replaces them.

## Update command
`/add` — see `.claude/commands/add.md`.
