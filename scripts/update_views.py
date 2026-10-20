"""Refresh public view counts for every YouTube video linked in data.js -> assets/data/views.json.
Run by .github/workflows/views.yml every 6 hours (also runnable locally: python3 scripts/update_views.py)."""
import json, re, sys, time, urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "data" / "views.json"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
YT = re.compile(r"(?:youtube\.com/watch\?v=|youtu\.be/|youtube\.com/shorts/|youtube\.com/embed/)([\w-]{11})")


def youtube_views(vid):
    req = urllib.request.Request(f"https://www.youtube.com/watch?v={vid}", headers={"User-Agent": UA, "Accept-Language": "en"})
    html = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "ignore")
    m = re.search(r'"videoDetails":\{.*?"viewCount":"(\d+)"', html, re.S) or re.search(r'"viewCount":"(\d+)"', html)
    return int(m.group(1)) if m else None


def main():
    ids = sorted(set(YT.findall((ROOT / "data.js").read_text(encoding="utf-8"))))
    old = json.loads(OUT.read_text()) if OUT.exists() else {}
    counts = dict(old.get("youtube", {}))
    for vid in ids:
        try:
            n = youtube_views(vid)
            if n is not None:
                counts[vid] = n
            print(vid, n)
        except Exception as e:  # keep the last known number on a failed fetch
            print(vid, "error", e, file=sys.stderr)
        time.sleep(1)
    counts = {k: v for k, v in counts.items() if k in ids}
    if counts == old.get("youtube"):
        print("no change")
        return
    OUT.parent.mkdir(parents=True, exist_ok=True)
    old.update({"updated": datetime.now(timezone.utc).isoformat(timespec="minutes"), "youtube": counts})  # keeps the manual "instagram" block
    OUT.write_text(json.dumps(old, indent=1) + "\n")
    print("wrote", OUT, len(counts))


if __name__ == "__main__":
    main()
