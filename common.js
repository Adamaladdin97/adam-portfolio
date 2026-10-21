/* Shared code for every page: Tailwind theme, nav, footer, lightbox, card rendering.
   Load AFTER the Tailwind CDN script and data.js. */

tailwind.config = {
    darkMode: 'class',
    theme: { extend: {
        fontFamily: { serif: ['"Cormorant Garamond"', 'serif'], sans: ['"Plus Jakarta Sans"', 'sans-serif'] },
        colors: { obsidian: '#060709', charcoal: '#0E1014' }
    } }
};

/* Only published projects (drafts or projects without media stay hidden) */
const PROJECTS = projects.filter(p => !p.draft && p.media.length);

const $ = (id) => document.getElementById(id);
const esc = (s = '') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const waLink = () => 'https://wa.me/' + siteConfig.whatsapp + '?text=' + encodeURIComponent(siteConfig.whatsappMessage);
const catById = (id) => categories.find(c => c.id === id);
const isVertical = (f) => f === '9:16' || f === '4:5';

/* ---------------- Live view counts ----------------
   assets/data/views.json is refreshed every 6h by .github/workflows/views.yml (public YouTube counts).
   Instagram counts live in the same file under "instagram" (read by hand from the accounts' Reels grids — IG has no public counts).
   Badges carry data-yt="<id>" / data-igc="<shortcode>"; once the file loads they switch to "🔥 228K Views" (only from siteConfig.viewsMin up). */
const ytId = (url = '') => (url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/|youtube\.com\/embed\/)([\w-]{11})/) || [])[1] || '';
const igCode = (url = '') => (url.match(/instagram\.com\/(?:reel|p|tv)\/([\w-]+)/) || [])[1] || '';
const viewsAttr = (m) => ytId(m.video) ? `data-yt="${ytId(m.video)}"` : igCode(m.instagramUrl || m.video) ? `data-igc="${igCode(m.instagramUrl || m.video)}"` : '';
const fmtViews = (n) => new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(n);
const VIEWS = fetch('assets/data/views.json?t=' + Math.floor(Date.now() / 3.6e6), { cache: 'no-cache' })
    .then(r => (r.ok ? r.json() : {})).catch(() => ({}));
function applyViews() {           // queries the whole page when the counts arrive (cards may still be in a fragment now)
    VIEWS.then(v => document.querySelectorAll('[data-yt],[data-igc]').forEach(el => {
        const n = el.dataset.yt ? (v.youtube || {})[el.dataset.yt] : (v.instagram || {})[el.dataset.igc];
        if (n == null || n < (siteConfig.viewsMin || 0)) return;
        el.textContent = `🔥 ${fmtViews(n)} Views`;
        el.classList.replace('text-neutral-300', 'text-white');
    }));
}

/* ---------------- Nav + footer ---------------- */
function renderChrome(active) {
    const link = (href, label, key) => `<a href="${href}" class="${active === key ? 'text-white' : 'text-neutral-400'} hover:text-white transition">${label}</a>`;
    $('site-nav').innerHTML = `
    <nav class="fixed top-0 w-full z-40 bg-obsidian/80 backdrop-blur-md border-b border-white/5">
        <div class="max-w-7xl mx-auto px-5 md:px-6 py-4 md:py-5 flex justify-between items-center gap-4">
            <a href="index.html" class="font-serif text-xl md:text-3xl tracking-wider text-white whitespace-nowrap">ADAM ALADDIN</a>
            <div class="hidden sm:flex items-center gap-8 text-xs tracking-widest uppercase">
                ${link('index.html', 'Home', 'home')}${link('work.html', 'Work', 'work')}${link('about.html', 'About', 'about')}
                <a href="${waLink()}" target="_blank" rel="noopener" class="px-4 py-2 rounded-full border border-white/15 text-white hover:bg-white hover:text-black transition whitespace-nowrap">Let's Talk ↗</a>
            </div>
            <button id="menu-btn" aria-label="Menu" aria-expanded="false" class="sm:hidden text-xs tracking-widest uppercase text-white border border-white/15 rounded-full px-4 py-2">Menu</button>
        </div>
        <div id="menu-panel" class="hidden sm:hidden border-t border-white/5 px-5 py-4 flex-col gap-4 text-sm tracking-widest uppercase">
            ${link('index.html', 'Home', 'home')}${link('work.html', 'Work', 'work')}${link('about.html', 'About', 'about')}
            <a href="${waLink()}" target="_blank" rel="noopener" class="text-white">WhatsApp ↗</a>
        </div>
    </nav>`;
    $('menu-btn').addEventListener('click', () => {
        const p = $('menu-panel'); const open = p.classList.toggle('hidden') === false;
        p.classList.toggle('flex', open); $('menu-btn').setAttribute('aria-expanded', open);
    });

    $('site-footer').innerHTML = `
    <footer id="contact" class="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-20 border-t border-white/5 mt-16 scroll-mt-16">
        <div class="luxury-card rounded-3xl p-7 md:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
                <p class="eyebrow mb-2">Ready to create?</p>
                <h2 class="font-serif text-3xl md:text-5xl text-white">Let's build your next visual campaign.</h2>
            </div>
            <div class="flex flex-wrap gap-4">
                <a href="${waLink()}" target="_blank" rel="noopener" class="px-6 py-3.5 rounded-full bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-neutral-200 transition">WhatsApp ↗</a>
                <a href="mailto:${esc(siteConfig.email)}" class="px-6 py-3.5 rounded-full border border-white/15 text-white text-xs uppercase tracking-widest hover:bg-white/10 transition">Send Email ↗</a>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row justify-between gap-2 text-xs text-neutral-600 mt-10">
            <span>© 2026 ADAM ALADDIN. ALL RIGHTS RESERVED.</span>
            <span>BASE: KUWAIT · SILENT LUXURY EDITION</span>
        </div>
    </footer>
    <div id="lightbox" class="fixed inset-0 z-50 bg-[rgba(6,7,9,0.96)] backdrop-blur-sm hidden items-center justify-center p-4 md:p-10" role="dialog" aria-modal="true">
        <button id="modal-close" class="absolute top-4 right-4 md:top-6 md:right-6 text-neutral-400 hover:text-white text-xs uppercase tracking-widest border border-white/15 px-4 py-2 rounded-full">Close ✕</button>
        <div class="w-full max-w-5xl flex flex-col items-center">
            <h3 id="modal-title" dir="auto" class="font-serif text-2xl text-white mb-4 self-start"></h3>
            <div id="modal-content" class="bg-charcoal rounded-xl overflow-hidden border border-white/10"></div>
            <div id="modal-actions" class="mt-4 self-start"></div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', `
    <div id="photo-box" class="fixed inset-0 z-50 bg-[rgba(6,7,9,0.96)] backdrop-blur-sm hidden items-center justify-center p-4 md:p-12 opacity-0 transition-opacity duration-300" role="dialog" aria-modal="true">
        <button id="photo-close" class="absolute top-4 right-4 md:top-6 md:right-6 text-neutral-400 hover:text-white text-xs uppercase tracking-widest border border-white/15 px-4 py-2 rounded-full z-10">Close ✕</button>
        <button id="photo-prev" aria-label="Previous" class="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/15 text-white/70 hover:text-white hover:bg-white/10 transition z-10">←</button>
        <button id="photo-next" aria-label="Next" class="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/15 text-white/70 hover:text-white hover:bg-white/10 transition z-10">→</button>
        <figure class="flex flex-col items-center max-w-6xl w-full">
            <img id="photo-img" src="" alt="" class="max-h-[80vh] max-w-full object-contain rounded-lg border border-white/10 transition-opacity duration-300">
            <figcaption class="mt-5 text-center">
                <p id="photo-caption" dir="auto" class="font-serif text-xl text-white tracking-wide"></p>
                <p id="photo-count" class="mt-1 text-[11px] font-mono text-neutral-500"></p>
            </figcaption>
        </figure>
    </div>`);
    $('photo-close').addEventListener('click', closePhoto);
    $('photo-prev').addEventListener('click', (e) => { e.stopPropagation(); stepPhoto(-1); });
    $('photo-next').addEventListener('click', (e) => { e.stopPropagation(); stepPhoto(1); });
    $('photo-box').addEventListener('click', (e) => { if (e.target.id === 'photo-box') closePhoto(); });
    window.addEventListener('keydown', (e) => {
        if ($('photo-box').classList.contains('hidden')) return;
        if (e.key === 'ArrowRight') stepPhoto(1);
        if (e.key === 'ArrowLeft') stepPhoto(-1);
    });
    $('modal-close').addEventListener('click', closeModal);
    $('lightbox').addEventListener('click', (e) => { if (e.target.id === 'lightbox') closeModal(); });
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); closePhoto(); } });
}

/* ---------------- Lightbox ---------------- */
function toEmbed(url) {
    let m;
    if ((m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/|youtube\.com\/embed\/)([\w-]{11})/)))
        return { type: 'iframe', src: `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0` };
    if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/))) return { type: 'iframe', src: `https://player.vimeo.com/video/${m[1]}?autoplay=1` };
    if ((m = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]{20,})/)))
        return { type: 'iframe', src: `https://drive.google.com/file/d/${m[1]}/preview` };
    if ((m = url.match(/instagram\.com\/(reel|p|tv)\/([\w-]+)/))) return { type: 'iframe', src: `https://www.instagram.com/${m[1]}/${m[2]}/embed` };
    if (/\.(jpe?g|png|webp|avif)(\?|$)/i.test(url)) return { type: 'img', src: url };
    if (/\.(mp4|webm|mov)(\?|$)/i.test(url) || !/^https?:/.test(url)) return { type: 'video', src: url };
    return { type: 'iframe', src: url };
}

function openModal({ title, url, format, instagramUrl }) {
    const media = toEmbed(url);
    const vertical = isVertical(format) || /instagram\.com\/(reel|p)\//.test(url);
    const box = $('modal-content');
    box.className = 'bg-charcoal rounded-xl overflow-hidden border border-white/10 ' + (vertical ? 'h-[75vh] max-w-full' : 'w-full');
    box.style.aspectRatio = media.type === 'img' ? 'auto' : (vertical ? '9 / 16' : '16 / 9');
    box.innerHTML = media.type === 'video' ? `<video src="${esc(media.src)}" class="w-full h-full" controls autoplay playsinline></video>`
        : media.type === 'img' ? `<img src="${esc(media.src)}" alt="${esc(title)}" class="max-h-[75vh] w-auto mx-auto">`
        : `<iframe class="w-full h-full" src="${esc(media.src)}" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    $('modal-title').textContent = title || '';
    $('modal-actions').innerHTML = instagramUrl ? `<a href="${esc(instagramUrl)}" target="_blank" rel="noopener" class="px-4 py-2 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/15 text-xs text-white transition">Verify on Instagram ↗</a>` : '';
    $('lightbox').classList.replace('hidden', 'flex');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    $('modal-content').innerHTML = '';
    $('lightbox').classList.replace('flex', 'hidden');
    document.body.style.overflow = '';
}

/* ---------------- Photo lightbox (photography & BTS) ---------------- */
let photoSet = [], photoIdx = 0;
function showPhoto() {
    const ph = photoSet[photoIdx], img = $('photo-img');
    img.style.opacity = 0;
    img.onload = () => { img.style.opacity = 1; };
    img.src = ph.src; img.alt = ph.caption;
    $('photo-caption').textContent = ph.caption;
    $('photo-count').textContent = photoSet.length > 1 ? `${photoIdx + 1} / ${photoSet.length}` : '';
    $('photo-prev').style.display = $('photo-next').style.display = photoSet.length > 1 ? '' : 'none';
}
function openPhoto(set, idx) {
    photoSet = set; photoIdx = idx;
    const box = $('photo-box');
    box.classList.replace('hidden', 'flex');
    setTimeout(() => box.classList.replace('opacity-0', 'opacity-100'), 20);
    document.body.style.overflow = 'hidden';
    showPhoto();
}
function stepPhoto(d) { photoIdx = (photoIdx + d + photoSet.length) % photoSet.length; showPhoto(); }
function closePhoto() {
    const box = $('photo-box');
    if (!box || box.classList.contains('hidden')) return;
    box.classList.replace('opacity-100', 'opacity-0');
    setTimeout(() => { box.classList.replace('flex', 'hidden'); $('photo-img').src = ''; document.body.style.overflow = ''; }, 250);
}

/* ---------------- Bento layout rules ----------------
   Desktop (lg): 12 cols, every row exactly 300px. Tablet (md): 2 cols. Mobile: 1 col.
   Card size is decided ONLY by format (+ view) – never by hand. */
const GRID = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6 md:auto-rows-[300px] grid-flow-dense';
const MOBILE_H = { '16:9': 'h-[240px]', '9:16': 'h-[480px]', '4:5': 'h-[420px]', '1:1': 'h-[340px]' };
const rowsOf = (f) => (isVertical(f) ? 2 : 1);

/* cols: desktop column span; tablet gets 2 for 12+/8 wide cards, otherwise 1 */
function span(format, cols, extra = '', rowsOverride) {
    const rows = rowsOverride || rowsOf(format);
    const tabletCols = cols >= 8 ? 2 : 1;
    return `md:col-span-${tabletCols} md:row-span-${rows} lg:col-span-${cols} lg:row-span-${rows} ${extra}`;
}
const mobileH = (f) => MOBILE_H[f] || MOBILE_H['16:9'];

const projectFormat = (p) => p.coverFormat || p.media[0].format;
const projectCover = (p) => p.cover || p.media[0].thumbnail;
const KIND_LABEL = { video: 'Film', reel: 'Reel', post: 'Post', photo: 'Photo', media: 'Media', album: 'Album' };
const KIND_PLURAL = { video: 'films', reel: 'reels', post: 'posts', photo: 'photos', media: 'files', album: 'albums' };
function deliverablesText(p) {
    const order = ['video', 'reel', 'post', 'photo', 'media', 'album'];
    return order.map(k => [p.media.filter(m => m.kind === k).length, k]).filter(([n]) => n)
        .map(([n, k]) => `${n} ${n === 1 ? KIND_LABEL[k].toLowerCase() : KIND_PLURAL[k]}`).join(' · ');
}

/* ---------------- Project cards (home + work) ---------------- */
/* Work page: every card is one 4-col slot. Verticals are 1 slot x 2 rows, horizontals 1 slot x 1 row,
   so we order them in blocks that fill whole 3x2 rectangles (3V | 2V+2H | 1V+4H | 6H) and widen a short last row. */
function layoutProjects(list) {
    const V = list.filter(p => isVertical(projectFormat(p))), H = list.filter(p => !isVertical(projectFormat(p)));
    const seq = [], push = (p, cols, extra = '', rows) => seq.push({ p, cls: span(projectFormat(p), cols, extra, rows) });
    if (!H.length) {                                   // only verticals: centre short sets
        V.forEach((p, i) => push(p, 4, V.length === 1 ? 'lg:col-start-5' : (V.length === 2 && i === 0 ? 'lg:col-start-3' : '')));
        return seq;
    }
    if (!V.length) {                                   // only horizontals: rows of 3, widen the last row
        H.forEach((p, i) => { const r = H.length % 3, left = H.length - i; push(p, r === 1 && left === 1 ? 12 : r === 2 && left <= 2 ? 6 : 4); });
        return seq;
    }
    let hs = [...H], vs = [...V];
    for (let i = 0; i < 3 && hs.length > 3; i++) push(hs.shift(), 4);        // opening row of 3 horizontals
    while (vs.length >= 3) { for (let i = 0; i < 3; i++) push(vs.shift(), 4); }
    if (vs.length) {                                   // leftover verticals + the horizontals that complete their block
        vs.forEach(p => push(p, 4));
        const t = hs.splice(0, vs.length === 2 ? 2 : 4), k = t.length;
        t.forEach((p, i) => {
            if (vs.length === 1 && k === 1) push(p, 8, '', 2);
            else if (vs.length === 1 && k === 2) push(p, 8, '', 1);
            else if (vs.length === 1 && k === 3 && i === 2) push(p, 8, '', 1);
            else if (vs.length === 2 && k === 1) push(p, 4, '', 2);
            else push(p, 4);
        });
    }
    hs.forEach((p, i) => { const r = hs.length % 3, left = hs.length - i; push(p, r === 1 && left === 1 ? 12 : r === 2 && left <= 2 ? 6 : 4); });
    return seq;
}
function homeSpan(p) {
    const f = projectFormat(p);
    return span(f, p.wide && f === '16:9' ? 8 : 4);
}
function projectCard(p, spanClass) {
    const cat = catById(p.category);
    const multi = p.media.length > 1;
    const a = document.createElement('a');
    a.href = `project.html?p=${encodeURIComponent(p.slug)}`;
    a.className = `${mobileH(projectFormat(p))} md:h-auto ${spanClass} tone-${CAT_TONE[p.category] || 'promo'} glow-card luxury-card rounded-2xl overflow-hidden relative group cursor-pointer flex flex-col justify-between`;
    a.innerHTML = `
        <img src="${esc(projectCover(p))}" alt="${esc(p.title)}" loading="lazy" class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition duration-700">
        <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent"></div>
        <div class="relative z-10 p-4 md:p-5 flex justify-between items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-neutral-300">${esc(cat ? cat.short : p.category)}</span>
            ${multi ? `<span class="px-2.5 py-1 rounded bg-black/60 text-[10px] text-neutral-300 border border-white/10">${esc(deliverablesText(p))}</span>` : ''}
        </div>
        <div class="relative z-10 p-5 md:p-6 flex flex-col gap-3">
            <div>
                <p dir="auto" class="text-[11px] uppercase tracking-widest text-neutral-400 mb-1 truncate">${esc(p.client)}</p>
                <h3 dir="auto" class="card-title font-serif text-xl md:text-2xl text-white leading-snug">${esc(p.title)}</h3>
            </div>
            <span class="text-xs uppercase tracking-widest text-white group-hover:underline">View project →</span>
        </div>`;
    return a;
}
/* view: 'home' (hand-picked 4, one wide) or 'work' (auto-packed) */
function renderProjectGrid(container, list, view) {
    container.innerHTML = '';
    if (view === 'home') list.forEach(p => container.appendChild(projectCard(p, homeSpan(p))));
    else layoutProjects(list).forEach(({ p, cls }) => container.appendChild(projectCard(p, cls)));
}

/* ---------------- Media cards (project page) ---------------- */
/* One chapter = up to two grids: verticals together, horizontals together, each packed in whole cells. */
function layoutList(ms) {
    const n = ms.length, allV = ms.every(m => isVertical(m.format));
    return ms.map((m, i) => {
        const f = m.format;
        if (n === 1) return isVertical(f) ? span(f, 4, 'lg:col-start-5') : span(f, 12, '', 2);
        if (allV) {                                    // rows of 3 (or 4 when n divides by 4); a short last row is centred
            const rw = n >= 4 && n % 4 === 0 && n % 3 !== 0 ? 4 : Math.min(n, 3), cols = rw === 4 ? 3 : 4, r = n % rw;
            let extra = '';
            if (rw === 2 && i === 0) extra = 'lg:col-start-3';
            else if (rw === 3 && r === 1 && i === n - 1) extra = 'lg:col-start-5';
            else if (rw === 3 && r === 2 && i === n - 2) extra = 'lg:col-start-3';
            return span(f, cols, extra);
        }
        if (n === 2) return span(f, 6, '', 2);
        if (n === 3) return i === 0 ? span(f, 8, '', 2) : span(f, 4);
        return span(f, i === n - 1 && n % 2 ? 12 : 6, '', 1);
    });
}
function mediaGrids(p, ms, chapterTitle = '') {
    const wrap = document.createDocumentFragment();
    ms = ms.filter(m => m.video || m.full || m.thumbnail);   // never render link-only / folder tiles
    const photos = ms.filter(m => m.kind === 'photo' && !m.video);
    const set = photos.map(m => ({ src: m.full || m.thumbnail, caption: m.title || (chapterTitle ? `${p.client} — ${chapterTitle}` : p.client) }));
    const card = (m, cls) => mediaCard(p, m, cls, set, photos.indexOf(m));
    const gallery = photos.length >= 2;                       // 2+ photos → masonry gallery after the films
    const rest = gallery ? ms.filter(m => !photos.includes(m)) : ms;
    const V = rest.filter(m => isVertical(m.format)), H = rest.filter(m => !isVertical(m.format));
    const groups = [];
    if (H.length === 1 && V.length === 1) groups.push(['', [[H[0], span(H[0].format, 8, '', 2)], [V[0], span(V[0].format, 4)]]]);
    else {
        const order = rest.length && isVertical(rest[0].format) ? [[V, 'Vertical'], [H, 'Widescreen']] : [[H, 'Widescreen'], [V, 'Vertical']];
        order.forEach(([g, name]) => { if (g.length) { const l = layoutList(g); groups.push([name, g.map((m, i) => [m, l[i]])]); } });
    }
    const labelled = groups.length + (gallery ? 1 : 0) > 1;
    const label = (t) => { if (labelled && t) wrap.appendChild(Object.assign(document.createElement('p'), { className: 'eyebrow mb-4 mt-2', textContent: t })); };
    groups.forEach(([name, items]) => {
        label(name);
        const g = document.createElement('div');
        g.className = GRID + ' mb-5 md:mb-6';
        items.forEach(([m, cls]) => g.appendChild(card(m, cls)));
        wrap.appendChild(g);
    });
    if (gallery) { label('Stills'); wrap.appendChild(photoGallery(photos, set)); }
    applyViews();
    return wrap;
}
/* Photography & BTS: masonry gallery (natural ratios), click = full-screen photo lightbox */
function photoGallery(photos, set) {
    const g = document.createElement('div');
    g.className = 'columns-1 md:columns-3 gap-5 mb-5 md:mb-6';
    photos.forEach((m, i) => {
        const fig = document.createElement('figure');
        fig.className = 'luxury-card rounded-2xl overflow-hidden relative group cursor-zoom-in break-inside-avoid mb-5';
        fig.style.aspectRatio = (m.format || '4:5').replace(':', ' / ');
        fig.innerHTML = `<img src="${esc(m.thumbnail || m.full)}" alt="${esc(set[i].caption)}" loading="lazy" class="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition duration-700">`;
        fig.addEventListener('click', () => openPhoto(set, i));
        g.appendChild(fig);
    });
    return g;
}
function mediaCard(p, m, layoutClass, photoSetForGrid = [], photoIndex = -1) {
    const isPhoto = m.kind === 'photo' && !m.video && !!(m.full || m.thumbnail);
    const url = m.video || (isPhoto ? (m.full || m.thumbnail) : '');
    const playable = !!url, external = false;   // no forced external redirects: cards only open in-site lightboxes
    const label = m.title || p.title;
    const el = document.createElement(external ? 'a' : 'div');
    if (external) { el.href = m.link; el.target = '_blank'; el.rel = 'noopener'; }
    el.className = `${mobileH(m.format)} md:h-auto ${layoutClass} luxury-card rounded-2xl overflow-hidden relative group flex flex-col justify-between ${playable || external ? 'cursor-pointer' : ''}`;
    const kindLabel = KIND_LABEL[m.kind] || m.kind;
    const bg = m.thumbnail
        ? `<img src="${esc(m.thumbnail)}" alt="${esc(label)}" loading="lazy" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-95 transition duration-700">
           <div class="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-black/20"></div>`
        : `<div class="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-white/[0.01]"></div>
           <div class="absolute inset-0 flex items-center justify-center text-neutral-600 font-serif text-6xl select-none">↗</div>`;
    el.innerHTML = `
        ${bg}
        <div class="relative z-10 p-4 md:p-5 flex justify-between items-center">
            <span class="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-widest ${m.views ? 'text-white' : 'text-neutral-300'}" ${!m.views ? viewsAttr(m) : ''}>${m.views ? '🔥 ' + esc(m.views) + ' Views' : kindLabel}</span>
            <span class="px-2.5 py-1 rounded bg-black/60 text-[10px] font-mono text-neutral-400 border border-white/10">${esc(m.format)}</span>
        </div>
        ${playable && m.thumbnail && !isPhoto ? `<div class="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"><div class="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center group-hover:bg-white group-hover:text-black transition duration-300"><svg class="w-5 h-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div></div>` : ''}
        <div class="relative z-10 p-5 flex items-center justify-between gap-3">
            <span dir="auto" class="text-sm text-white truncate">${m.title ? esc(m.title) : ''}</span>
            ${m.instagramUrl ? `<a href="${esc(m.instagramUrl)}" target="_blank" rel="noopener" data-ig class="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white hover:text-black backdrop-blur-md border border-white/15 text-[11px] text-white transition whitespace-nowrap">Verify on IG ↗</a>` : ''}
        </div>`;
    if (isPhoto) el.addEventListener('click', () => openPhoto(photoSetForGrid.length ? photoSetForGrid : [{ src: url, caption: label }], Math.max(photoIndex, 0)));
    else if (playable) el.addEventListener('click', (e) => {
        if (e.target.closest('[data-ig]')) return;
        openModal({ title: m.title ? `${p.title} — ${m.title}` : p.title, url, format: m.format, instagramUrl: m.instagramUrl });
    });
    return el;
}

/* ---------------- Editorial case study (project page) ----------------
   Each chapter (or each of its `steps`) is one row: the story sticks on the left (desktop),
   its media stage scrolls on the right. Mobile stacks story above media. */
const isLocalVideo = (u) => !!u && !/^https?:/.test(u) && /\.(mp4|webm|mov)$/i.test(u);
function stageBadge(m) {
    return m.views
        ? `<span class="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-widest text-white">🔥 ${esc(m.views)} Views</span>`
        : `<span ${viewsAttr(m)} class="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-widest text-neutral-300">${esc(KIND_LABEL[m.kind] || m.kind)}</span>`;
}
/* Visual layer of a card: muted looping preview for local mp4 (starts when in view), else the thumbnail */
function stageVisual(m, alt) {
    return isLocalVideo(m.video)
        ? `<video data-src="${esc(m.video)}" poster="${esc(m.thumbnail)}" muted loop playsinline preload="none" class="ed-preview absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"></video>`
        : `<img src="${esc(m.thumbnail || m.full)}" alt="${esc(alt)}" loading="lazy" class="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition duration-700">`;
}
const playIcon = `<div class="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"><div class="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition duration-300"><svg class="w-4 h-4 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div></div>`;
function openMedia(p, m) { openModal({ title: m.title ? `${p.client} — ${m.title}` : p.client, url: m.video, format: m.format, instagramUrl: m.instagramUrl }); }

/* Vertical card: reels/posts sit in a minimal phone frame, other verticals (screens, films) in a plain card.
   Verify on Instagram sits under the card. */
function phoneCard(p, m) {
    const phone = m.kind === 'reel' || m.kind === 'post';
    const wrap = document.createElement('div');
    wrap.className = 'flex flex-col gap-3';
    wrap.innerHTML = `
        <div class="${phone ? 'phone-frame rounded-[26px] p-[5px] bg-[#0b0c0f] border border-white/15' : 'luxury-card rounded-2xl overflow-hidden'}">
            <div class="ed-screen relative aspect-[9/16] ${phone ? 'rounded-[21px]' : ''} overflow-hidden bg-charcoal group cursor-pointer">
                ${stageVisual(m, m.title || p.title)}
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
                ${phone ? '<span class="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-black/70 z-10"></span>' : ''}
                ${stageBadge(m)}${playIcon}
            </div>
        </div>
        ${m.title || m.instagramUrl ? `<div class="flex items-center justify-between gap-2 px-1">
            <span dir="auto" class="text-xs text-neutral-400 truncate">${esc(m.title || '')}</span>
            ${m.instagramUrl ? `<a href="${esc(m.instagramUrl)}" target="_blank" rel="noopener" data-ig class="shrink-0 text-[10px] uppercase tracking-widest text-neutral-300 hover:text-white border-b border-white/20 hover:border-white transition">Verify on Instagram ↗</a>` : ''}
        </div>` : ''}`;
    wrap.querySelector('.ed-screen').addEventListener('click', () => openMedia(p, m));
    return wrap;
}
/* Widescreen / square film card */
function filmCard(p, m) {
    const el = document.createElement('div');
    el.className = 'flex flex-col gap-3';
    el.innerHTML = `
        <div class="ed-screen luxury-card relative rounded-2xl overflow-hidden group cursor-pointer" style="aspect-ratio:${(m.format === '1:1' ? '1 / 1' : '16 / 9')}">
            ${stageVisual(m, m.title || p.title)}
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
            ${stageBadge(m)}${playIcon}
        </div>
        ${m.title || m.instagramUrl ? `<div class="flex items-center justify-between gap-2 px-1">
            <span dir="auto" class="text-xs text-neutral-400 truncate">${esc(m.title || '')}</span>
            ${m.instagramUrl ? `<a href="${esc(m.instagramUrl)}" target="_blank" rel="noopener" data-ig class="shrink-0 text-[10px] uppercase tracking-widest text-neutral-300 hover:text-white border-b border-white/20 hover:border-white transition">Verify on Instagram ↗</a>` : ''}
        </div>` : ''}`;
    el.querySelector('.ed-screen').addEventListener('click', () => openMedia(p, m));
    return el;
}
/* Ambient glow tone of a story row: explicit `tone` wins, else guessed from the title / media.
   promo = cool cinematic blue · motion = deep violet (DOOH, screens, design) · live = warm (events, coverage, studio) · stills = neutral */
const TONES = ['promo', 'motion', 'live', 'stills'];
function toneOf(item, title) {
    if (TONES.includes(item.tone)) return item.tone;
    const t = (title || '').toLowerCase(), ms = item.media || [];
    if (ms.length && ms.every(m => m.kind === 'photo')) return 'stills';
    if (/screen|dooh|motion|animation|design|identity|graphic/.test(t)) return 'motion';
    if (/live|event|coverage|episode|studio|star|behind|set|bts|podcast|appearance/.test(t)) return 'live';
    return 'promo';
}
const CAT_TONE = { commercial: 'promo', social: 'motion', events: 'live', podcasts: 'live', reels: 'promo', photo: 'stills' };

/* Screen-motion card at its true pixel ratio (`ratio: "256x1152"`), with the spec under it */
function screenCard(p, m) {
    const [w, h] = m.ratio.split('x').map(Number), r = w / h;
    const el = document.createElement('div');
    el.className = `flex flex-col gap-2 ${r >= 2.2 ? 'w-full' : ''}`;
    el.innerHTML = `
        <div class="ed-screen luxury-card relative rounded-xl overflow-hidden group cursor-pointer ${r < 1 ? 'h-[260px] md:h-[380px]' : r < 2.2 ? 'h-[110px] md:h-[150px]' : 'w-full'}" style="aspect-ratio:${w} / ${h}">
            ${stageVisual(m, m.title || p.title)}
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
        <span class="text-[10px] font-mono text-neutral-500">${w}×${h}${m.title ? ' · ' + esc(m.title) : ''}</span>`;
    el.querySelector('.ed-screen').addEventListener('click', () => openMedia(p, m));
    return el;
}
/* Right-hand media stage for one story step */
function mediaStage(p, ms, caption) {
    const stage = document.createElement('div');
    stage.className = 'flex flex-col gap-6 md:gap-8';
    ms = ms.filter(m => m.video || m.full || m.thumbnail);      // never link-only tiles
    if (ms.some(m => m.group)) {                                 // labelled sub-groups (e.g. screen families)
        [...new Set(ms.map(m => m.group || ''))].forEach(gname => {
            const box = document.createElement('div');
            if (gname) box.innerHTML = `<p class="eyebrow mb-4">${esc(gname)}</p>`;
            box.appendChild(mediaStage(p, ms.filter(m => (m.group || '') === gname).map(m => ({ ...m, group: '' })), caption));
            stage.appendChild(box);
        });
        return stage;
    }
    if (ms.length && ms.every(m => m.ratio && m.video)) {         // true-ratio screen lineup
        const row = document.createElement('div');
        row.className = 'flex flex-wrap items-end gap-4 md:gap-5';
        ms.forEach(m => row.appendChild(screenCard(p, m)));
        stage.appendChild(row);
        return stage;
    }
    const photos = ms.filter(m => m.kind === 'photo' && !m.video);
    const set = photos.map(m => ({ src: m.full || m.thumbnail, caption: m.title || caption }));
    const films = ms.filter(m => !photos.includes(m));
    const V = films.filter(m => isVertical(m.format)), H = films.filter(m => !isVertical(m.format));
    const groups = films.length && isVertical(films[0].format) ? [V, H] : [H, V];
    groups.forEach(g => {
        if (!g.length) return;
        const grid = document.createElement('div');
        if (g === V) {
            grid.className = `grid gap-4 md:gap-5 ${g.length === 1 ? `grid-cols-1 ${g[0].feature ? 'max-w-[360px]' : 'max-w-[300px]'}` : g.length === 2 ? 'grid-cols-2 max-w-[620px]' : 'grid-cols-2 md:grid-cols-3'}`;
            g.forEach(m => grid.appendChild(phoneCard(p, m)));
        } else {
            grid.className = 'grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5';
            g.forEach((m, i) => { const c = filmCard(p, m); if (i === 0 && g.length % 2) c.classList.add('sm:col-span-2'); grid.appendChild(c); });
        }
        stage.appendChild(grid);
    });
    if (photos.length) {
        const g = document.createElement('div');
        g.className = photos.length === 1 ? '' : 'columns-2 gap-4 md:gap-5';
        photos.forEach((m, i) => {
            const fig = document.createElement('figure');
            fig.className = 'luxury-card rounded-2xl overflow-hidden relative group cursor-zoom-in break-inside-avoid mb-4 md:mb-5';
            fig.style.aspectRatio = (m.format || '4:5').replace(':', ' / ');
            fig.innerHTML = `<img src="${esc(m.thumbnail || m.full)}" alt="${esc(set[i].caption)}" loading="lazy" class="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition duration-700">`;
            fig.addEventListener('click', () => openPhoto(set, i));
            g.appendChild(fig);
        });
        stage.appendChild(g);
    }
    return stage;
}
/* One story row: sticky narrative (left) + media stage (right) */
function editorialRow(p, head, ms, caption, tone = 'promo') {
    const row = document.createElement('div');
    row.className = `ed-row tone-${tone} grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 py-10 md:py-14 border-t border-white/5`;
    row.innerHTML = `<div class="lg:col-span-4"><div class="ed-text lg:sticky lg:top-32">${head}</div></div><div class="ed-stage lg:col-span-8"></div>`;
    if (ms && ms.length) row.querySelector('.ed-stage').appendChild(mediaStage(p, ms, caption));
    else row.querySelector('.ed-stage').remove();
    return row;
}
function pointsHTML(points) {
    return (points || []).map(x => `<div class="border-t border-white/10 pt-4 mt-5">
        <h4 dir="auto" class="text-xs uppercase tracking-widest text-white mb-2">${esc(x.title)}</h4>
        <p dir="auto" class="text-sm text-neutral-400 font-light leading-relaxed">${esc(x.text)}</p></div>`).join('');
}
/* Layout (order + visibility) of a project's chapters/steps. `layout` = { order:[chapterId], hidden:[id], steps:{chapterId:[stepId]} }
   with ids "c0" (chapter) and "c0s1" (step) = original positions in data.js. Used by the visual manager on project.html. */
function resolveLayout(p, layout = {}) {
    const hidden = new Set(layout.hidden || []);
    const ordered = (ids, all) => [...(ids || []).filter(i => all.includes(i)), ...all.filter(i => !(ids || []).includes(i))];
    const chapters = p.chapters || [];
    return ordered(layout.order, chapters.map((_, i) => 'c' + i)).map(cid => {
        const ci = +cid.slice(1), c = chapters[ci], sids = (c.steps || []).map((_, j) => `c${ci}s${j}`);
        return { id: cid, c, hidden: hidden.has(cid),
            steps: ordered((layout.steps || {})[cid], sids).map(sid => ({ id: sid, st: c.steps[+sid.split('s')[1]], hidden: hidden.has(sid) })) };
    });
}
function renderEditorial(container, p, layout) {
    let n = 0;
    resolveLayout(p, layout).filter(ch => !ch.hidden).forEach(({ c, steps }, i) => {
        const sec = document.createElement('section');
        sec.className = 'mb-12 md:mb-20';
        sec.dataset.chapter = c.title;
        n++;
        const label = c.label ? esc(c.label.replace(/\d+$/, d => String(n).padStart(d.length, '0'))).toUpperCase() : String(n).padStart(2, '0');
        const caption = `${p.client} — ${c.title}`;
        if (c.steps && c.steps.length) {
            const vis = steps.filter(x => !x.hidden);
            sec.innerHTML = `<div class="max-w-3xl mb-4 md:mb-6">
                <p class="text-xs font-mono text-neutral-500 mb-3">${label}</p>
                <h2 dir="auto" class="font-serif text-3xl md:text-5xl text-white leading-tight mb-4">${esc(c.title)}</h2>
                ${c.text ? `<p dir="auto" class="text-sm md:text-base text-neutral-400 font-light leading-relaxed">${esc(c.text)}</p>` : ''}
            </div>`;
            vis.forEach(({ st }, j) => sec.appendChild(editorialRow(p, `
                <p class="text-xs font-mono text-neutral-500 mb-4">${String(j + 1).padStart(2, '0')} <span class="text-neutral-700">/ ${String(vis.length).padStart(2, '0')}</span></p>
                <h3 dir="auto" class="font-serif text-2xl md:text-3xl text-white leading-snug mb-3">${esc(st.title)}</h3>
                ${st.text ? `<p dir="auto" class="text-sm md:text-[15px] text-neutral-400 font-light leading-relaxed">${esc(st.text)}</p>` : ''}
                ${pointsHTML(st.points)}`, st.media, `${p.client} — ${st.title}`, toneOf(st, st.title))));
        } else {
            sec.appendChild(editorialRow(p, `
                <p class="text-xs font-mono text-neutral-500 mb-4">${label}</p>
                <h2 dir="auto" class="font-serif text-3xl md:text-4xl text-white leading-tight mb-3">${esc(c.title)}</h2>
                ${c.text ? `<p dir="auto" class="text-sm md:text-[15px] text-neutral-400 font-light leading-relaxed">${esc(c.text)}</p>` : ''}
                ${pointsHTML(c.points)}`, c.media, caption, toneOf(c, c.title)));
        }
        container.appendChild(sec);
    });
    initEditorial(container);
    applyViews();
}
/* Scroll behaviour: highlight the row in view, play local previews only while visible */
function initEditorial(root) {
    if (!('IntersectionObserver' in window)) { root.querySelectorAll('.ed-row').forEach(r => r.classList.add('is-active')); return; }
    const rowIO = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('is-active', e.isIntersecting)), { rootMargin: '-40% 0px -40% 0px' });
    root.querySelectorAll('.ed-row').forEach(r => rowIO.observe(r));
    const vidIO = new IntersectionObserver(es => es.forEach(e => {
        const v = e.target;
        if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); } else v.pause();
    }), { threshold: 0.35 });
    root.querySelectorAll('video.ed-preview').forEach(v => vidIO.observe(v));
}

/* ---------------- Story blocks (project page) ---------------- */
function factsHTML(p) {
    const facts = (p.facts || []).map(x => `
        <div class="luxury-card rounded-2xl p-5 md:p-6">
            <div class="font-serif text-3xl md:text-4xl text-white mb-1">${esc(x.value)}</div>
            <div class="text-xs uppercase tracking-widest text-neutral-500">${esc(x.label)}</div>
        </div>`).join('');
    return facts ? `<div class="grid grid-cols-1 sm:grid-cols-${Math.min((p.facts || []).length, 3)} gap-5 md:gap-6 mb-12 md:mb-14">${facts}</div>` : '';
}
function chapterHead(i, c) {
    const points = (c.points || []).map(x => `
        <div class="border-t border-white/10 pt-4">
            <h3 dir="auto" class="text-xs uppercase tracking-widest text-white mb-2">${esc(x.title)}</h3>
            <p dir="auto" class="text-sm text-neutral-400 font-light leading-relaxed">${esc(x.text)}</p>
        </div>`).join('');
    return `<div class="mb-8 md:mb-10 ${points ? 'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12' : 'max-w-3xl'}">
        <div class="${points ? 'lg:col-span-5' : ''}">
            <p class="text-xs font-mono text-neutral-500 mb-3">${c.label ? esc(c.label).toUpperCase() : String(i + 1).padStart(2, '0')}</p>
            <h2 dir="auto" class="font-serif text-3xl md:text-4xl text-white mb-3 leading-tight">${esc(c.title)}</h2>
            ${c.text ? `<p dir="auto" class="text-sm md:text-base text-neutral-400 font-light leading-relaxed">${esc(c.text)}</p>` : ''}
        </div>
        ${points ? `<div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">${points}</div>` : ''}
    </div>`;
}
/* Optional strip of 3 highlight cards under the facts (e.g. gear & speed philosophy) */
function highlightsHTML(p) {
    const h = p.highlights;
    if (!h || !(h.items || []).length) return '';
    return `<section class="mb-14 md:mb-20">
        ${h.title ? `<p class="eyebrow mb-5">${esc(h.title)}</p>` : ''}
        <div class="grid grid-cols-1 md:grid-cols-${Math.min(h.items.length, 3)} gap-5 md:gap-6">${h.items.map((x, i) => `
            <div class="luxury-card rounded-2xl p-6 md:p-7 flex flex-col gap-6">
                <span class="text-xs font-mono text-neutral-500">${String(i + 1).padStart(2, '0')}</span>
                <div><h3 dir="auto" class="font-serif text-2xl text-white mb-2">${esc(x.title)}</h3>
                <p dir="auto" class="text-sm text-neutral-400 font-light leading-relaxed">${esc(x.text)}</p></div>
            </div>`).join('')}
        </div>
    </section>`;
}
function accountChip(p) {
    return p.account ? `<a href="https://www.instagram.com/${esc(p.account.handle)}/" target="_blank" rel="noopener" class="px-3 py-1.5 rounded-md bg-white/10 border border-white/10 text-xs text-white hover:bg-white hover:text-black transition">@${esc(p.account.handle)} · ${esc(p.account.followers)} ↗</a>` : '';
}
