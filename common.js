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
    <div id="lightbox" class="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl hidden items-center justify-center p-4 md:p-10" role="dialog" aria-modal="true">
        <button id="modal-close" class="absolute top-4 right-4 md:top-6 md:right-6 text-neutral-400 hover:text-white text-xs uppercase tracking-widest border border-white/15 px-4 py-2 rounded-full">Close ✕</button>
        <div class="w-full max-w-5xl flex flex-col items-center">
            <h3 id="modal-title" dir="auto" class="font-serif text-2xl text-white mb-4 self-start"></h3>
            <div id="modal-content" class="bg-charcoal rounded-xl overflow-hidden border border-white/10"></div>
            <div id="modal-actions" class="mt-4 self-start"></div>
        </div>
    </div>`;
    $('modal-close').addEventListener('click', closeModal);
    $('lightbox').addEventListener('click', (e) => { if (e.target.id === 'lightbox') closeModal(); });
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

/* ---------------- Lightbox ---------------- */
function toEmbed(url) {
    let m;
    if ((m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/|youtube\.com\/embed\/)([\w-]{11})/)))
        return { type: 'iframe', src: `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0` };
    if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/))) return { type: 'iframe', src: `https://player.vimeo.com/video/${m[1]}?autoplay=1` };
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

const projectFormat = (p) => p.media[0].format;
const projectCover = (p) => p.cover || p.media[0].thumbnail;
function deliverablesText(p) {
    const n = (k) => p.media.filter(m => m.kind === k).length;
    return [[n('video'), 'video'], [n('reel'), 'reel'], [n('photo'), 'photo']].filter(([c]) => c).map(([c, w]) => `${c} ${w}${c > 1 ? 's' : ''}`).join(' · ');
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
    a.className = `${mobileH(projectFormat(p))} md:h-auto ${spanClass} luxury-card rounded-2xl overflow-hidden relative group cursor-pointer flex flex-col justify-between`;
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
function mediaLayout(p) {
    const ms = p.media, n = ms.length, allV = ms.every(m => isVertical(m.format)), allH = ms.every(m => !isVertical(m.format));
    return ms.map((m, i) => {
        const f = m.format;
        if (n === 1) return isVertical(f) ? span(f, 4, 'lg:col-start-5') : span(f, 12, '', 2);
        if (allV) {
            const c = n >= 4 ? 3 : 4;
            return span(f, c, n === 2 && i === 0 ? 'lg:col-start-3' : '');
        }
        if (allH && n === 2) return span(f, 6, '', 2);
        if (allH && n >= 4) return span(f, i === n - 1 && n % 2 ? 12 : 6, '', 1);
        if (i === 0) return span(f, isVertical(f) ? 4 : 8, '', 2);
        return span(f, 4);
    });
}
function mediaCard(p, m, layoutClass) {
    const src = m.video || m.thumbnail;
    const playable = !!(m.video || m.kind === 'photo');
    const label = m.title || p.title;
    const el = document.createElement('div');
    el.className = `${mobileH(m.format)} md:h-auto ${layoutClass} luxury-card rounded-2xl overflow-hidden relative group flex flex-col justify-between ${playable ? 'cursor-pointer' : ''}`;
    const kindLabel = { video: 'Film', reel: 'Reel', photo: 'Photo' }[m.kind] || m.kind;
    el.innerHTML = `
        <img src="${esc(m.thumbnail)}" alt="${esc(label)}" loading="lazy" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-95 transition duration-700">
        <div class="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-black/20"></div>
        <div class="relative z-10 p-4 md:p-5 flex justify-between items-center">
            <span class="px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-neutral-300">${kindLabel}</span>
            <span class="px-2.5 py-1 rounded bg-black/60 text-[10px] font-mono text-neutral-400 border border-white/10">${esc(m.format)}</span>
        </div>
        ${playable ? `<div class="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"><div class="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center group-hover:bg-white group-hover:text-black transition duration-300"><svg class="w-5 h-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div></div>` : ''}
        <div class="relative z-10 p-5 flex items-center justify-between gap-3">
            <span dir="auto" class="text-sm text-white truncate">${m.title ? esc(m.title) : ''}</span>
            ${m.instagramUrl ? `<a href="${esc(m.instagramUrl)}" target="_blank" rel="noopener" data-ig class="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white hover:text-black backdrop-blur-md border border-white/15 text-[11px] text-white transition whitespace-nowrap">Verify on IG ↗</a>` : ''}
        </div>`;
    if (playable) el.addEventListener('click', (e) => {
        if (e.target.closest('[data-ig]')) return;
        openModal({ title: m.title ? `${p.title} — ${m.title}` : p.title, url: src, format: m.format, instagramUrl: m.instagramUrl });
    });
    return el;
}

/* ---------------- Story blocks (project page) ---------------- */
function storyHTML(p) {
    const facts = (p.facts || []).map(x => `
        <div class="luxury-card rounded-2xl p-5 md:p-6">
            <div class="font-serif text-3xl md:text-4xl text-white mb-1">${esc(x.value)}</div>
            <div class="text-xs uppercase tracking-widest text-neutral-500">${esc(x.label)}</div>
        </div>`).join('');
    const chapters = (p.chapters || []).map((c, i) => `
        <div class="luxury-card rounded-2xl p-6 md:p-8">
            <p class="text-xs font-mono text-neutral-500 mb-3">${String(i + 1).padStart(2, '0')}</p>
            <h3 dir="auto" class="font-serif text-2xl text-white mb-3">${esc(c.title)}</h3>
            <p dir="auto" class="text-sm text-neutral-400 font-light leading-relaxed">${esc(c.text)}</p>
        </div>`).join('');
    const n = (p.chapters || []).length;
    return (facts ? `<div class="grid grid-cols-1 sm:grid-cols-${Math.min((p.facts || []).length, 3)} gap-5 md:gap-6 mb-5 md:mb-6">${facts}</div>` : '')
        + (chapters ? `<div class="grid grid-cols-1 ${n > 1 ? 'md:grid-cols-2' : ''} gap-5 md:gap-6 mb-12 md:mb-14">${chapters}</div>` : '');
}
