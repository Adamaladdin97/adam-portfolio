---
description: Add new work (links, files, notes) to Adam's portfolio and publish it
argument-hint: [project info, links, file paths]
---

Adam is adding new work to his portfolio. Input:

$ARGUMENTS

Follow `CLAUDE.md` in this repo, then do these steps in order:

1. **Understand the input.** Extract: project/client name, what it is, links (YouTube / Vimeo / Instagram / TikTok), any local files (video, images) he mentioned or attached, view counts. If the title or client is missing, infer a sensible one from the context; ask only if a link/file is truly unclear.

2. **Pick the card format** (this is the one design decision you make):
   - Horizontal video (commercial, YouTube, film, showreel piece) → `format: "16:9"`, `category: "commercial"`
   - Event / seminar / podcast multi-cam → `format: "16:9"`, `category: "events"`
   - Vertical reel / UGC / TikTok → `format: "9:16"`, `category: "reels"`
   - Product / lifestyle photo → `format: "1:1"` (or `"4:5"` if portrait), `category: "photo"`
   - Check the real dimensions of any file with `ffprobe`/`sips` instead of guessing.
   - Set `featured: true` only if Adam says so (and remove it from the previous featured item).

3. **Handle media.**
   - Copy local files into `assets/images/` or `assets/videos/` with kebab-case names (never leave originals in other folders referenced).
   - Optimize: images → max 1600px wide, JPG ≤ 400 KB (`sips`/`ffmpeg`); videos → if > 15 MB, don't commit; ask him for a YouTube/Vimeo link or compress with ffmpeg (H.264, CRF 26, 1080p max).
   - Thumbnail: use his image if provided; otherwise extract a frame from the video with ffmpeg; for a link-only item, try the YouTube thumbnail (`https://img.youtube.com/vi/<id>/maxresdefault.jpg`, downloaded into `assets/images/`). If no thumbnail is possible, tell him exactly what to send.
   - Instagram reel → `video: ""` and `instagramUrl: "<link>"` unless he gave a direct mp4; thumbnail is required.

4. **Edit `data.js`.** Add the object to the TOP of `portfolioItems` (newest first), after the `featured` item if there is one. Remove any `placeholder: true` item of the same category if this replaces it. Do not touch `index.html`.

5. **Verify.** Open `index.html` in the browser tool (or run `node --check data.js` at minimum), confirm the new card renders with no overlap in "All" and in its category filter.

6. **Publish:**
   ```
   git add . && git commit -m "Add: <project name>" && git push
   ```
   Then tell Adam (in Egyptian Arabic, short): what was added, which format was chosen, and the live URL (it updates in ~1 minute).

If anything is missing (thumbnail, link), still add what you can, push, and list precisely what he should send next.
