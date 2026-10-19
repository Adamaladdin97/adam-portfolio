/* ============================================================
   ALL EDITABLE CONTENT LIVES HERE. No HTML file needs editing for new work.
   `/add` (see .claude/commands/add.md) only edits `projects` below.

   A PROJECT = one client campaign / case study, holding all its deliverables.
     slug         unique kebab-case id (used in project.html?p=<slug>)
     title        project name
     client       client / brand line
     category     commercial | social | events | photo
     description  optional 1–2 sentences shown on the project page ("" to hide)
     wide         optional – true makes a 16:9 project card 8 columns wide ("All" grid)
     home         optional – true shows it in "Selected Projects" on the home page (keep 4)
     media[]      the deliverables, in display order. The FIRST one is the cover.
        kind         "video" | "reel" | "photo"
        title        optional label ("Episode 16", "Reel 2", ...)
        format       "16:9" | "9:16" | "1:1" | "4:5"   (decides the card shape)
        thumbnail    "assets/images/x.jpg"
        video        YouTube / Vimeo / Instagram URL or "assets/videos/x.mp4" ("" for photos)
        instagramUrl "Verify on Instagram" link ("" to hide)
   ============================================================ */

const siteConfig = {
    showreel: {
        title: "Selected Director's Showreel",
        video: "",                       // YouTube/Vimeo URL or assets/videos/showreel.mp4 – empty = not clickable yet
        poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1800&q=80",
        loop: "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
    },
    whatsapp: "96566534771",          // country code + number, digits only (Kuwait +965)
    whatsappMessage: "Hi Adam, I saw your portfolio and I'd like to talk about a project.",
    email: "adamaladdin97@gmail.com"
};

const categories = [
    { id: "commercial", label: "Commercials & YouTube", short: "Commercials", blurb: "Brand films, campaigns and documentaries." },
    { id: "social",     label: "Social Campaigns",      short: "Social",      blurb: "Vertical reels, UGC and personal-brand content." },
    { id: "events",     label: "Events & Podcasts",     short: "Events",      blurb: "Multi-cam podcasts, seminars and event coverage." },
    { id: "photo",      label: "Photography",           short: "Photography", blurb: "Product, lifestyle and studio photography." }
];

const projects = [
    {
        slug: "haval-campaign",
        title: "Haval Campaign",
        client: "Haval",
        category: "commercial",
        description: "",
        wide: true,
        home: true,
        media: [
            { kind: "video", title: "Jolion", format: "16:9", thumbnail: "assets/images/haval-jolion.jpg", video: "https://www.youtube.com/watch?v=knLQV6GD3FY", instagramUrl: "" },
            { kind: "video", title: "Dargo", format: "16:9", thumbnail: "assets/images/haval-dargo.jpg", video: "https://www.youtube.com/watch?v=Aq6wKQ3Kcd8", instagramUrl: "" }
        ]
    },
    {
        slug: "the-gate-mall",
        title: "The Gate Mall — Social Campaign",
        client: "The Gate Mall",
        category: "social",
        description: "",
        home: true,
        media: [
            { kind: "reel", title: "Reel 1", format: "9:16", thumbnail: "assets/images/event-daawtpkqlm2.jpg", video: "https://www.instagram.com/reel/DaawTPkqLm2/", instagramUrl: "https://www.instagram.com/reel/DaawTPkqLm2/" },
            { kind: "reel", title: "Reel 2", format: "9:16", thumbnail: "assets/images/ugc-daw4xdqqfnn.jpg", video: "https://www.instagram.com/reel/DaW4XDqqfnn/", instagramUrl: "https://www.instagram.com/reel/DaW4XDqqfnn/" },
            { kind: "reel", title: "Reel 3", format: "9:16", thumbnail: "assets/images/ugc-daaw55zkhsm.jpg", video: "https://www.instagram.com/reel/Daaw55ZKhSM/", instagramUrl: "https://www.instagram.com/reel/Daaw55ZKhSM/" },
            { kind: "reel", title: "Reel 4", format: "9:16", thumbnail: "assets/images/ugc-dbv3f9skpze.jpg", video: "https://www.instagram.com/reel/DbV3F9SKPZe/", instagramUrl: "https://www.instagram.com/reel/DbV3F9SKPZe/" }
        ]
    },
    {
        slug: "mercedes-maybach",
        title: "Mercedes-Benz Maybach",
        client: "Mercedes-Benz",
        category: "commercial",
        description: "",
        home: true,
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/mercedes-maybach.jpg", video: "https://www.youtube.com/watch?v=KDWBEMWzbmM", instagramUrl: "" }
        ]
    },
    {
        slug: "avenues-shopping-marathon",
        title: "Avenues Shopping Marathon",
        client: "Avenues",
        category: "commercial",
        description: "",
        home: true,
        media: [
            { kind: "video", title: "Mother", format: "16:9", thumbnail: "assets/images/avenues-mother.jpg", video: "https://www.youtube.com/watch?v=50Hdcnb5XE4", instagramUrl: "" },
            { kind: "video", title: "Kids", format: "16:9", thumbnail: "assets/images/avenues-kids.jpg", video: "https://www.youtube.com/watch?v=gOMBRIwsYnM", instagramUrl: "" },
            { kind: "video", title: "Father", format: "16:9", thumbnail: "assets/images/avenues-father.jpg", video: "https://www.youtube.com/watch?v=MmeRNPk4WNM", instagramUrl: "" }
        ]
    },
    {
        slug: "sportap",
        title: "Sportap — Main Campaign",
        client: "Sportap",
        category: "commercial",
        description: "",
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/sportap-main.jpg", video: "https://www.youtube.com/watch?v=ncs-3tBcFeA", instagramUrl: "" }
        ]
    },
    {
        slug: "gulf-bank-corporate",
        title: "Gulf Bank — Corporate Film",
        client: "Gulf Bank",
        category: "commercial",
        description: "",
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/gulf-bank-corporate.jpg", video: "https://www.youtube.com/watch?v=nZwwRG5nm6Q", instagramUrl: "" }
        ]
    },
    {
        slug: "fazaa-documentary",
        title: "Fazaa — Documentary Film",
        client: "Fazaa",
        category: "commercial",
        description: "",
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/fazaa-documentary.jpg", video: "https://www.youtube.com/watch?v=uLDdhBG9Og0", instagramUrl: "" }
        ]
    },
    {
        slug: "trolley-eid-2022",
        title: "Trolley — Eid 2022 Campaign",
        client: "Trolley",
        category: "commercial",
        description: "",
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/trolley-eid-2022.jpg", video: "https://www.youtube.com/watch?v=TL9NMtp_PdQ", instagramUrl: "" }
        ]
    },
    {
        slug: "insan-awareness-campaign",
        title: "Insan — Awareness Campaign",
        client: "Insan",
        category: "commercial",
        description: "",
        media: [
            { kind: "video", title: "Violence", format: "16:9", thumbnail: "assets/images/insan-violence.jpg", video: "https://www.youtube.com/watch?v=DVXQExE2_9k", instagramUrl: "" },
            { kind: "video", title: "Racism", format: "16:9", thumbnail: "assets/images/insan-racism.jpg", video: "https://www.youtube.com/watch?v=gOIcFom97z8", instagramUrl: "" },
            { kind: "video", title: "Negativity", format: "16:9", thumbnail: "assets/images/insan-negativity.jpg", video: "https://www.youtube.com/watch?v=co_BG7taS6c", instagramUrl: "" },
            { kind: "video", title: "Education", format: "16:9", thumbnail: "assets/images/insan-education.jpg", video: "https://www.youtube.com/watch?v=MVgnZdv0HTM", instagramUrl: "" },
            { kind: "video", title: "Rumours", format: "16:9", thumbnail: "assets/images/insan-rumours.jpg", video: "https://www.youtube.com/watch?v=itlH81j-O3U", instagramUrl: "" }
        ]
    },
    {
        slug: "nest-sales",
        title: "Nest — Sales Showroom",
        client: "Nest",
        category: "events",
        description: "",
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/nest-sales.jpg", video: "https://www.youtube.com/watch?v=rp9A9EjE1zo", instagramUrl: "" }
        ]
    },
    {
        slug: "kmpg-seminar",
        title: "KMPG — Seminar",
        client: "KMPG",
        category: "events",
        description: "",
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/kmpg-seminar.jpg", video: "https://www.youtube.com/watch?v=raH10Q6le2I", instagramUrl: "" }
        ]
    },
    {
        slug: "iqos-seminar",
        title: "IQOS — Seminar",
        client: "IQOS",
        category: "events",
        description: "",
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/iqos-seminar.jpg", video: "https://www.youtube.com/watch?v=psPLkbz7vN0", instagramUrl: "" }
        ]
    },
    {
        slug: "gulf-cryo-event",
        title: "Gulf Cryo — Event Reel",
        client: "Gulf Cryo",
        category: "events",
        description: "",
        media: [
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/event-do57rfhj-f6.jpg", video: "https://www.instagram.com/reel/DO57rFhj_F6/", instagramUrl: "https://www.instagram.com/reel/DO57rFhj_F6/" }
        ]
    },
    {
        slug: "safat-home-event",
        title: "Safat Home — Event Reel",
        client: "Safat Home",
        category: "events",
        description: "",
        media: [
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/event-dpyxnadikzu.jpg", video: "https://www.instagram.com/reel/DPYXNadiKzU/", instagramUrl: "https://www.instagram.com/reel/DPYXNadiKzU/" }
        ]
    },
    {
        slug: "fatma-event",
        title: "Fatma — Event Reel",
        client: "Fatma",
        category: "events",
        description: "",
        media: [
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/event-dy9askosrrc.jpg", video: "https://www.instagram.com/reel/DY9AsKOsRRC/", instagramUrl: "https://www.instagram.com/reel/DY9AsKOsRRC/" }
        ]
    },
    {
        slug: "farmland-kuwait",
        title: "Farmland Kuwait — Event Post",
        client: "Farmland Kuwait",
        category: "events",
        description: "",
        media: [
            { kind: "reel", title: "", format: "4:5", thumbnail: "assets/images/event-de-0ovrtfyj.jpg", video: "https://www.instagram.com/p/DE_0oVrtFYj/", instagramUrl: "https://www.instagram.com/p/DE_0oVrtFYj/" }
        ]
    },
    {
        slug: "buthaina-podcast",
        title: "Buthaina Podcast",
        client: "Buthaina Podcast",
        category: "events",
        description: "",
        media: [
            { kind: "video", title: "Episode 16", format: "16:9", thumbnail: "assets/images/podcast-4ooiml8szha.jpg", video: "https://www.youtube.com/watch?v=4oOIMl8SzHA", instagramUrl: "" },
            { kind: "video", title: "Dawaniya interview", format: "16:9", thumbnail: "assets/images/podcast-q6h8oumys8s.jpg", video: "https://www.youtube.com/watch?v=Q6h8OUmYS8s", instagramUrl: "" }
        ]
    },
    {
        slug: "qissa-w-qanoon",
        title: "بودكاست قصة وقانون",
        client: "المحامي محمد حمزة عباس",
        category: "events",
        description: "",
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/podcast-cbnylpunk0o.jpg", video: "https://www.youtube.com/watch?v=cBNyLpUnK0o", instagramUrl: "" }
        ]
    },
    {
        slug: "jadwa-podcast",
        title: "بودكاست جدوى",
        client: "Jadwa",
        category: "events",
        description: "",
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/podcast-tzxy7btkdqs.jpg", video: "https://www.youtube.com/watch?v=tZxY7BtkDQs", instagramUrl: "" }
        ]
    },
    {
        slug: "atheer-podcast",
        title: "أثير",
        client: "Atheer",
        category: "events",
        description: "",
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/podcast-x3buubvnxia.jpg", video: "https://www.youtube.com/watch?v=X3BUuBVNXIA", instagramUrl: "" }
        ]
    },
    {
        slug: "oru-roasters",
        title: "Oru Roasters — Brand Reels",
        client: "Oru Roasters",
        category: "social",
        description: "",
        media: [
            { kind: "reel", title: "Reel 1", format: "9:16", thumbnail: "assets/images/personal-brand-drkcqapjx-h.jpg", video: "https://www.instagram.com/reel/DRkcqAPjX_h/", instagramUrl: "https://www.instagram.com/reel/DRkcqAPjX_h/" },
            { kind: "reel", title: "Reel 2", format: "9:16", thumbnail: "assets/images/personal-brand-dqhkfocdui-.jpg", video: "https://www.instagram.com/reel/DQhKFOcDUi_/", instagramUrl: "https://www.instagram.com/reel/DQhKFOcDUi_/" }
        ]
    },
    {
        slug: "shahad-al-momen",
        title: "Shahad Al Momen — Personal Brand",
        client: "Shahad Al Momen",
        category: "social",
        description: "",
        media: [
            { kind: "reel", title: "Reel 1", format: "9:16", thumbnail: "assets/images/personal-brand-dhhk1hyswse.jpg", video: "https://www.instagram.com/reel/DHHK1HYswsE/", instagramUrl: "https://www.instagram.com/reel/DHHK1HYswsE/" },
            { kind: "reel", title: "Reel 2", format: "9:16", thumbnail: "assets/images/personal-brand-djuqihisa50.jpg", video: "https://www.instagram.com/reel/DJUQIHisa50/", instagramUrl: "https://www.instagram.com/reel/DJUQIHisa50/" }
        ]
    },
    {
        slug: "a-line-design",
        title: "A Line Design Co — Interior Reels",
        client: "A Line Design Co",
        category: "social",
        description: "",
        media: [
            { kind: "reel", title: "Reel 1", format: "9:16", thumbnail: "assets/images/realestate-dqgbppedq6x.jpg", video: "https://www.instagram.com/reel/DQGbPpeDQ6x/", instagramUrl: "https://www.instagram.com/reel/DQGbPpeDQ6x/" },
            { kind: "reel", title: "Reel 2", format: "9:16", thumbnail: "assets/images/realestate-dqgz8gcdztl.jpg", video: "https://www.instagram.com/reel/DQGZ8GcDZTl/", instagramUrl: "https://www.instagram.com/reel/DQGZ8GcDZTl/" }
        ]
    },
    {
        slug: "mad-recovery-center",
        title: "MAD Recovery Center — Reel",
        client: "MAD Recovery Center",
        category: "social",
        description: "",
        media: [
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/personal-brand-dbn8-x8djbr.jpg", video: "https://www.instagram.com/reel/DbN8-X8DjBR/", instagramUrl: "https://www.instagram.com/reel/DbN8-X8DjBR/" }
        ]
    },
    {
        slug: "nabila-al-anjari",
        title: "Nabila Al Anjari — Personal Brand",
        client: "Nabila Al Anjari",
        category: "social",
        description: "",
        media: [
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/personal-brand-dm58ad8srxb.jpg", video: "https://www.instagram.com/reel/DM58AD8srXB/", instagramUrl: "https://www.instagram.com/reel/DM58AD8srXB/" }
        ]
    },
    {
        slug: "wajhat-al-seif",
        title: "Wajhat Al Seif — Real Estate Reel",
        client: "Wajhat Al Seif",
        category: "social",
        description: "",
        media: [
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/realestate-dprsjhwdal-.jpg", video: "https://www.instagram.com/reel/DPrSjHwDAl-/", instagramUrl: "https://www.instagram.com/reel/DPrSjHwDAl-/" }
        ]
    }
];
