---
description: Add new work (links, files, notes) to Adam's portfolio and publish it
argument-hint: [project info, links, file paths]
---

Adam is adding new work to his portfolio. Input:

$ARGUMENTS

Read `CLAUDE.md` first (site rules + data model), then do these steps in order.

1. **Understand the input.** Extract: client / project name, what it is, every link (YouTube / Vimeo / Instagram / TikTok), local files (video, images), and any description or view counts he gave. Ask only if a link or file is truly unclear.

2. **New project or extra deliverable?** The site is *project-centric*: one project = one client campaign holding all its deliverables.
   - Search `projects` in `data.js` for the same client (match `client`, `slug`, or title). If it exists → **append to its `media[]`** (do not create a duplicate project).
   - Otherwise create a **new project** with chapters. Group everything in the input that belongs to the same client/campaign into ONE project (e.g. a commercial + its reels + photos).

3. **Pick category & formats** (the only design decisions you make):
   - `category`: `commercial` (brand films, documentaries) · `social` (full social campaigns, personal brand) · `events` (events, seminars, live multi-cam) · `podcasts` · `reels` (a loose one-off reel with no campaign → append to the single `reels` collection project's `media[]`, don't create a new project) · `photo`.
   - Each media item: `kind` = `video` | `reel` | `photo`; `format` = real aspect ratio (`16:9`, `9:16`, `1:1`, `4:5`) — check files with `ffprobe` / `sips`, never guess.
   - Put the strongest deliverable FIRST in `media[]` (it becomes the project cover). Prefer a 16:9 film first when there is one.
   - `wide: true` only for a flagship 16:9 project; `home: true` only if Adam says it should be on the home page (keep exactly 4 home projects, and the set should be one wide 16:9 + one vertical + two 16:9 so the home grid packs perfectly — if he adds one, ask which to replace).
   - Write `description`, `scope` (chips), `facts` (2–3 headline numbers) and `chapters` (short story blocks) only from facts he gave — concise, professional English, no hype. Never invent results, numbers, awards or dates. If he tells a long story, compress it to what a client scanning in 10 seconds needs.

4. **Handle media.**
   - Copy local files into `assets/images/` or `assets/videos/` with kebab-case names.
   - Optimize: images → max 1600px wide, JPG ≤ 400 KB (`sips -Z 1600 -s format jpeg -s formatOptions 80`); videos → if > 15 MB don't commit; ask for a YouTube/Vimeo link or compress with ffmpeg (H.264, CRF 26, 1080p max).
   - Thumbnails: his image if given; YouTube → `https://img.youtube.com/vi/<id>/maxresdefault.jpg` (fallback `hqdefault.jpg`) saved into `assets/images/`; local video → extract a frame with ffmpeg; Instagram → fetch the cover from `https://www.instagram.com/<reel|p>/<id>/embed` (`EmbeddedMediaImage`) and save it locally (those CDN URLs expire). If no thumbnail is possible, tell him exactly what to send.
   - Instagram reel: `video` = the reel URL (opens in the lightbox), `instagramUrl` = same URL ("Verify on Instagram").

5. **Chapters.** Put each deliverable in the chapter it belongs to (e.g. "Studio", "Episodes", "Reels", "Live", "Behind the scenes"); keep the flat `media[]` in sync; set `cover`/`coverFormat`. Keep chapter text to 1–3 sentences from what Adam said. An account chip needs `account: { handle, followers }` (read the follower count from the public profile's og:description).

6. **Edit `data.js` only** (never the HTML/JS pages). New projects go right after the `home` projects at the top of the list (newest first). Keep `slug` unique kebab-case. Run `node --check data.js`.

7. **Verify.** Serve the folder (`python3 -m http.server 8765`), open `work.html` and the new `project.html?p=<slug>` in the browser tool; confirm no overlap, images load, video opens in the lightbox. Stop the server.

8. **Publish:**
   ```
   git add . && git commit -m "Add: <project name>" && git push
   ```
   Then tell Adam (Egyptian Arabic, short): what was added / which project it joined, the category and layout chosen, and the live URL https://adamaladdin97.github.io/adam-portfolio/ (updates in ~1 minute).

If something is missing (thumbnail, link), still add what you can, push, and list precisely what to send next.
