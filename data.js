/* ============================================================
   ALL EDITABLE CONTENT LIVES HERE. No HTML file needs editing for new work.
   `/add` (see .claude/commands/add.md) only edits `projects` below.

   A PROJECT = one client campaign / case study, told in CHAPTERS.
     slug         unique kebab-case id (used in project.html?p=<slug>)
     title        project name            client   client / brand line
     category     commercial | social | events | podcasts | reels | photo
     description  1–2 sentences under the title ("" to hide)
     scope        optional – short chips of what was delivered
     facts        optional – 2–3 headline numbers: [{ value: "2", label: "major campaigns" }]
     account      optional – { handle: "brand", followers: "33K" }  (shown as an Instagram chip)
     cover        thumbnail used on cards;  coverFormat = its format (decides the card shape)
     chapters     the story, in order: [{ title, text, media: [ ... ] }]
                  (a project with no chapter media just uses the flat `media` list)
     media        flat list of every deliverable (cover/count source; keep in sync with chapters)
     wide         optional – true makes a 16:9 project card 8 columns wide (home only)
     home         optional – true shows it on the home page (keep exactly 4:
                  one wide 16:9, one vertical, two 16:9)
     draft        optional – true hides the project everywhere
   Media item:
        kind         video | reel | post | photo | media | album
        title        optional label
        format       "16:9" | "9:16" | "1:1" | "4:5"   (decides the card shape)
        thumbnail    "assets/images/x.jpg"  ("" = shows a plain tile)
        video        URL opened in the lightbox (YouTube / Vimeo / Instagram / Drive preview / mp4)
        instagramUrl "Verify on Instagram" link ("" to hide)
        views        optional – real engagement badge, e.g. "1.4M Views" (never invent; shown instead of the kind label)
        link         optional external URL; used when there is no video (opens in a new tab)
        full         photos only – local high-res image for the photo lightbox (assets/photos/…)
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
    { id: "commercial", label: "Commercials", short: "Commercials", blurb: "Brand films, campaigns and documentaries." },
    { id: "social", label: "Social Campaigns", short: "Social", blurb: "Full social campaigns and personal-brand content." },
    { id: "events", label: "Events", short: "Events", blurb: "Live multi-cam, promos and event marketing." },
    { id: "podcasts", label: "Podcasts", short: "Podcasts", blurb: "Multi-cam podcast production and episodes." },
    { id: "reels", label: "Reels", short: "Reels", blurb: "One-off reels, shot and cut fast." },
    { id: "photo", label: "Photography", short: "Photography", blurb: "Product, lifestyle and studio photography." }
];

const projects = [
    {
        slug: "mercedes-maybach",
        title: "Mercedes-Benz Maybach",
        client: "Mercedes-Benz",
        category: "commercial",
        description: "",
        wide: true,
        home: true,
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/mercedes-maybach.jpg", video: "https://www.youtube.com/watch?v=KDWBEMWzbmM", instagramUrl: "" }
        ]
    },
    {
        slug: "the-gate-mall",
        title: "The Gate Mall — Eid & World Cup Campaigns",
        client: "The Gate Mall",
        category: "social",
        description: "Two major campaigns for The Gate Mall, Eid al-Adha and the World Cup Fan Zone, delivered end to end: promo films, design, animation, live coverage and same-day social.",
        scope: ["Promo films", "Event coverage", "Animation", "Graphic design", "Social content", "Photography"],
        facts: [{ value: "2", label: "major campaigns" }, { value: "Next day", label: "promo delivery, during Eid" }],
        account: { handle: "thegatemallkwt", followers: "102K" },
        cover: "assets/images/ig-daawtpkqlm2.jpg",
        coverFormat: "9:16",
        chapters: [
            {
                title: "Eid al-Adha: films",
                text: "Promo film, a video for each of the three activations and a recap film. A same-day phone reel for a contest winner, and a funny POV reel of the Eidiya team to bring people in across the four days. Phone, 360 and cinema cameras, each chosen for its job.",
                media: [
                    { kind: "post", title: "Promo", format: "9:16", thumbnail: "assets/images/ig-dyj9auxixdj.jpg", video: "https://www.instagram.com/p/DYj9auxIxDJ/", instagramUrl: "https://www.instagram.com/p/DYj9auxIxDJ/" },
                    { kind: "post", title: "Activation 1", format: "9:16", thumbnail: "assets/images/ig-dy9yscluiy1.jpg", video: "https://www.instagram.com/p/DY9YsCluiY1/", instagramUrl: "https://www.instagram.com/p/DY9YsCluiY1/" },
                    { kind: "post", title: "Activation 2", format: "9:16", thumbnail: "assets/images/ig-dy9zspuovlj.jpg", video: "https://www.instagram.com/p/DY9ZSpuOVlJ/", instagramUrl: "https://www.instagram.com/p/DY9ZSpuOVlJ/" },
                    { kind: "post", title: "Activation 3", format: "9:16", thumbnail: "assets/images/ig-dy9bcgeuwhg.jpg", video: "https://www.instagram.com/p/DY9bCGeuwhG/", instagramUrl: "https://www.instagram.com/p/DY9bCGeuwhG/" },
                    { kind: "album", title: "Recap film", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/prztt8RP5j1kvnoV7" },
                    { kind: "album", title: "Contest winner reel", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/jumhwwsTqLHk2Bjb8" },
                    { kind: "album", title: "Eidiya POV reel", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/XTrkamp6Gid683mw5" },
                    { kind: "album", title: "UGC video", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/SVUGhSUtV9evhixC7" }
                ]
            },
            {
                title: "Eid al-Adha: design & animation",
                text: "Stickers, banners, tees, social posts, contests and Eidiya cards, plus animation for every mall screen: large, small, vertical, horizontal, even the arch.",
                media: [
                    { kind: "post", title: "Social set", format: "4:5", thumbnail: "assets/images/ig-dywlix9ikht.jpg", video: "https://www.instagram.com/p/DYwlIx9iKht/", instagramUrl: "https://www.instagram.com/p/DYwlIx9iKht/" },
                    { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-11qtilgrka-h.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-11qtilgrka-h.jpg" },
                    { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-16rhtflnznnw.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-16rhtflnznnw.jpg" },
                    { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-1agkg8toat7m.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1agkg8toat7m.jpg" },
                    { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-1ytembw8ssgk.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1ytembw8ssgk.jpg" },
                    { kind: "media", title: "", format: "9:16", thumbnail: "", video: "https://drive.google.com/file/d/1qYKyZMY4v6z1jGnQBPi96JDf-4oPOE7f/view", instagramUrl: "" },
                    { kind: "photo", title: "", format: "1:1", thumbnail: "assets/images/drive-1vz31gagyetw.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1vz31gagyetw.jpg" },
                    { kind: "album", title: "Screen animations", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/Fytste3XbWYAiRNo7" }
                ]
            },
            {
                title: "World Cup Fan Zone: films",
                text: "A strong launch promo and UGC videos in several styles to pull people in, plus full event coverage featuring freestyle performer Karam Medani and Kuwaiti football star Bader Al Mutawa.",
                media: [
                    { kind: "post", title: "Fan Zone promo", format: "9:16", thumbnail: "assets/images/ig-daawtpkqlm2.jpg", video: "https://www.instagram.com/p/DaawTPkqLm2/", instagramUrl: "https://www.instagram.com/p/DaawTPkqLm2/" },
                    { kind: "post", title: "UGC", format: "9:16", thumbnail: "assets/images/ig-daaw55zkhsm.jpg", video: "https://www.instagram.com/p/Daaw55ZKhSM/", instagramUrl: "https://www.instagram.com/p/Daaw55ZKhSM/" },
                    { kind: "post", title: "UGC", format: "9:16", thumbnail: "assets/images/ig-daw4xdqqfnn.jpg", video: "https://www.instagram.com/p/DaW4XDqqfnn/", instagramUrl: "https://www.instagram.com/p/DaW4XDqqfnn/" },
                    { kind: "post", title: "UGC", format: "9:16", thumbnail: "assets/images/ig-dbv3f9skpze.jpg", video: "https://www.instagram.com/p/DbV3F9SKPZe/", instagramUrl: "https://www.instagram.com/p/DbV3F9SKPZe/" },
                    { kind: "video", title: "Event coverage", format: "9:16", thumbnail: "assets/images/drive-157vqeeb2vxk.jpg", video: "https://drive.google.com/file/d/157vQeeb2vxKfCVW2uTuJxh_thAFwahZj/preview", instagramUrl: "", link: "https://drive.google.com/file/d/157vQeeb2vxKfCVW2uTuJxh_thAFwahZj/view" },
                    { kind: "post", title: "Event highlights", format: "4:5", thumbnail: "assets/images/ig-dapbeordvqj.jpg", video: "https://www.instagram.com/p/DapbeoRDvQj/", instagramUrl: "https://www.instagram.com/p/DapbeoRDvQj/" }
                ]
            },
            {
                title: "World Cup: animation & design",
                text: "Screen animation and event design for the Fan Zone.",
                media: [
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/drive-1faqxr0zghav.jpg", video: "https://drive.google.com/file/d/1FAqXR0ZgHav2_c1_5GvMInX4Gvzj_md9/preview", instagramUrl: "", link: "https://drive.google.com/file/d/1FAqXR0ZgHav2_c1_5GvMInX4Gvzj_md9/view" },
                    { kind: "video", title: "", format: "9:16", thumbnail: "assets/images/drive-18bpahpwtcik.jpg", video: "https://drive.google.com/file/d/18BpAHPWtciK7mVggwNHan2qkv-gFSWkj/preview", instagramUrl: "", link: "https://drive.google.com/file/d/18BpAHPWtciK7mVggwNHan2qkv-gFSWkj/view" },
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/drive-1jtwizh17t6w.jpg", video: "https://drive.google.com/file/d/1jtWIzH17T6WSBfUYt5xsmKR5cah4_0tp/preview", instagramUrl: "", link: "https://drive.google.com/file/d/1jtWIzH17T6WSBfUYt5xsmKR5cah4_0tp/view" },
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/drive-1ir4ck0nhnhe.jpg", video: "https://drive.google.com/file/d/1Ir4Ck0NHNhEBleeWZZex-vkR99ZBjSBz/preview", instagramUrl: "", link: "https://drive.google.com/file/d/1Ir4Ck0NHNhEBleeWZZex-vkR99ZBjSBz/view" },
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/drive-1bmtm-jdidqw.jpg", video: "https://drive.google.com/file/d/1Bmtm_JdIdQwC2jG3V8oyrV3d2TvRdSRo/preview", instagramUrl: "", link: "https://drive.google.com/file/d/1Bmtm_JdIdQwC2jG3V8oyrV3d2TvRdSRo/view" },
                    { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-1cle8dvem-zc.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1cle8dvem-zc.jpg" },
                    { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-1z1juvi4ock7.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1z1juvi4ock7.jpg" }
                ]
            },
            {
                title: "Behind the scenes",
                text: "Coverage of the Eid activations from every angle.",
                media: [
                    { kind: "photo", title: "", format: "16:9", thumbnail: "assets/images/drive-1w16kwm3ydzi.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1w16kwm3ydzi.jpg" },
                    { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-1xlbkqpiyhj1.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1xlbkqpiyhj1.jpg" },
                    { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-17jmyfdjxy9h.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-17jmyfdjxy9h.jpg" },
                    { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-17hu4mqzuitq.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-17hu4mqzuitq.jpg" },
                    { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-1cacbphcaruf.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1cacbphcaruf.jpg" },
                    { kind: "photo", title: "", format: "16:9", thumbnail: "assets/images/drive-1wyrbfdjmrdu.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1wyrbfdjmrdu.jpg" }
                ]
            }
        ],
        home: true,
        media: [
            { kind: "post", title: "Promo", format: "9:16", thumbnail: "assets/images/ig-dyj9auxixdj.jpg", video: "https://www.instagram.com/p/DYj9auxIxDJ/", instagramUrl: "https://www.instagram.com/p/DYj9auxIxDJ/" },
            { kind: "post", title: "Activation 1", format: "9:16", thumbnail: "assets/images/ig-dy9yscluiy1.jpg", video: "https://www.instagram.com/p/DY9YsCluiY1/", instagramUrl: "https://www.instagram.com/p/DY9YsCluiY1/" },
            { kind: "post", title: "Activation 2", format: "9:16", thumbnail: "assets/images/ig-dy9zspuovlj.jpg", video: "https://www.instagram.com/p/DY9ZSpuOVlJ/", instagramUrl: "https://www.instagram.com/p/DY9ZSpuOVlJ/" },
            { kind: "post", title: "Activation 3", format: "9:16", thumbnail: "assets/images/ig-dy9bcgeuwhg.jpg", video: "https://www.instagram.com/p/DY9bCGeuwhG/", instagramUrl: "https://www.instagram.com/p/DY9bCGeuwhG/" },
            { kind: "album", title: "Recap film", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/prztt8RP5j1kvnoV7" },
            { kind: "album", title: "Contest winner reel", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/jumhwwsTqLHk2Bjb8" },
            { kind: "album", title: "Eidiya POV reel", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/XTrkamp6Gid683mw5" },
            { kind: "album", title: "UGC video", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/SVUGhSUtV9evhixC7" },
            { kind: "post", title: "Social set", format: "4:5", thumbnail: "assets/images/ig-dywlix9ikht.jpg", video: "https://www.instagram.com/p/DYwlIx9iKht/", instagramUrl: "https://www.instagram.com/p/DYwlIx9iKht/" },
            { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-11qtilgrka-h.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-11qtilgrka-h.jpg" },
            { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-16rhtflnznnw.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-16rhtflnznnw.jpg" },
            { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-1agkg8toat7m.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1agkg8toat7m.jpg" },
            { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-1ytembw8ssgk.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1ytembw8ssgk.jpg" },
            { kind: "media", title: "", format: "9:16", thumbnail: "", video: "https://drive.google.com/file/d/1qYKyZMY4v6z1jGnQBPi96JDf-4oPOE7f/view", instagramUrl: "" },
            { kind: "photo", title: "", format: "1:1", thumbnail: "assets/images/drive-1vz31gagyetw.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1vz31gagyetw.jpg" },
            { kind: "album", title: "Screen animations", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/Fytste3XbWYAiRNo7" },
            { kind: "post", title: "Fan Zone promo", format: "9:16", thumbnail: "assets/images/ig-daawtpkqlm2.jpg", video: "https://www.instagram.com/p/DaawTPkqLm2/", instagramUrl: "https://www.instagram.com/p/DaawTPkqLm2/" },
            { kind: "post", title: "UGC", format: "9:16", thumbnail: "assets/images/ig-daaw55zkhsm.jpg", video: "https://www.instagram.com/p/Daaw55ZKhSM/", instagramUrl: "https://www.instagram.com/p/Daaw55ZKhSM/" },
            { kind: "post", title: "UGC", format: "9:16", thumbnail: "assets/images/ig-daw4xdqqfnn.jpg", video: "https://www.instagram.com/p/DaW4XDqqfnn/", instagramUrl: "https://www.instagram.com/p/DaW4XDqqfnn/" },
            { kind: "post", title: "UGC", format: "9:16", thumbnail: "assets/images/ig-dbv3f9skpze.jpg", video: "https://www.instagram.com/p/DbV3F9SKPZe/", instagramUrl: "https://www.instagram.com/p/DbV3F9SKPZe/" },
            { kind: "video", title: "Event coverage", format: "9:16", thumbnail: "assets/images/drive-157vqeeb2vxk.jpg", video: "https://drive.google.com/file/d/157vQeeb2vxKfCVW2uTuJxh_thAFwahZj/preview", instagramUrl: "", link: "https://drive.google.com/file/d/157vQeeb2vxKfCVW2uTuJxh_thAFwahZj/view" },
            { kind: "post", title: "Event highlights", format: "4:5", thumbnail: "assets/images/ig-dapbeordvqj.jpg", video: "https://www.instagram.com/p/DapbeoRDvQj/", instagramUrl: "https://www.instagram.com/p/DapbeoRDvQj/" },
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/drive-1faqxr0zghav.jpg", video: "https://drive.google.com/file/d/1FAqXR0ZgHav2_c1_5GvMInX4Gvzj_md9/preview", instagramUrl: "", link: "https://drive.google.com/file/d/1FAqXR0ZgHav2_c1_5GvMInX4Gvzj_md9/view" },
            { kind: "video", title: "", format: "9:16", thumbnail: "assets/images/drive-18bpahpwtcik.jpg", video: "https://drive.google.com/file/d/18BpAHPWtciK7mVggwNHan2qkv-gFSWkj/preview", instagramUrl: "", link: "https://drive.google.com/file/d/18BpAHPWtciK7mVggwNHan2qkv-gFSWkj/view" },
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/drive-1jtwizh17t6w.jpg", video: "https://drive.google.com/file/d/1jtWIzH17T6WSBfUYt5xsmKR5cah4_0tp/preview", instagramUrl: "", link: "https://drive.google.com/file/d/1jtWIzH17T6WSBfUYt5xsmKR5cah4_0tp/view" },
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/drive-1ir4ck0nhnhe.jpg", video: "https://drive.google.com/file/d/1Ir4Ck0NHNhEBleeWZZex-vkR99ZBjSBz/preview", instagramUrl: "", link: "https://drive.google.com/file/d/1Ir4Ck0NHNhEBleeWZZex-vkR99ZBjSBz/view" },
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/drive-1bmtm-jdidqw.jpg", video: "https://drive.google.com/file/d/1Bmtm_JdIdQwC2jG3V8oyrV3d2TvRdSRo/preview", instagramUrl: "", link: "https://drive.google.com/file/d/1Bmtm_JdIdQwC2jG3V8oyrV3d2TvRdSRo/view" },
            { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-1cle8dvem-zc.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1cle8dvem-zc.jpg" },
            { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-1z1juvi4ock7.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1z1juvi4ock7.jpg" },
            { kind: "photo", title: "", format: "16:9", thumbnail: "assets/images/drive-1w16kwm3ydzi.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1w16kwm3ydzi.jpg" },
            { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-1xlbkqpiyhj1.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1xlbkqpiyhj1.jpg" },
            { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-17jmyfdjxy9h.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-17jmyfdjxy9h.jpg" },
            { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-17hu4mqzuitq.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-17hu4mqzuitq.jpg" },
            { kind: "photo", title: "", format: "4:5", thumbnail: "assets/images/drive-1cacbphcaruf.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1cacbphcaruf.jpg" },
            { kind: "photo", title: "", format: "16:9", thumbnail: "assets/images/drive-1wyrbfdjmrdu.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1wyrbfdjmrdu.jpg" }
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
        category: "social",
        description: "One big YouTube film cut into a series of Shorts — every story stands alone, linked by strong transitions — so a single shoot became a full campaign.",
        scope: ["YouTube film", "Shorts series", "Editing & transitions"],
        home: true,
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/sportap-main.jpg", video: "https://www.youtube.com/watch?v=ncs-3tBcFeA", instagramUrl: "" }
        ]
    },
    {
        slug: "horeca-kuwait",
        title: "Horeca Kuwait — Event Marketing",
        client: "Horeca Kuwait",
        category: "events",
        description: "Marketing partner for two consecutive years of Horeca Kuwait, the B2B food & beverage event. The audience was business owners and decision-makers, so the content was built in a corporate voice, without heavy production.",
        scope: ["Event marketing", "Testimonials", "Event coverage", "Podcast corner", "Reels"],
        facts: [{ value: "2 years", label: "consecutive partnership" }, { value: "30–35", label: "podcast reels in 3 days" }, { value: "3 months", label: "target: sales closed before the event" }],
        cover: "assets/images/ig-dts73zwihqq.jpg",
        coverFormat: "9:16",
        chapters: [
            {
                title: "Before the event",
                text: "Awareness posts and cut-downs of past footage, then testimonial videos with participating companies to push others to commit early. The target was to close sales three months before the event.",
                media: [
                    { kind: "reel", title: "Testimonial", format: "9:16", thumbnail: "assets/images/ig-dts73zwihqq.jpg", video: "https://www.instagram.com/reel/DTS73ZwihQq/", instagramUrl: "https://www.instagram.com/reel/DTS73ZwihQq/" },
                    { kind: "reel", title: "Testimonial", format: "9:16", thumbnail: "assets/images/ig-dtlm9smcntc.jpg", video: "https://www.instagram.com/reel/DTLm9sMCnTC/", instagramUrl: "https://www.instagram.com/reel/DTLm9sMCnTC/" },
                    { kind: "reel", title: "Testimonial", format: "9:16", thumbnail: "assets/images/ig-drukenbirfy.jpg", video: "https://www.instagram.com/reel/DRukenbirfY/", instagramUrl: "https://www.instagram.com/reel/DRukenbirfY/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-drxjxwciuux.jpg", video: "https://www.instagram.com/reel/DRxjXWCiuux/", instagramUrl: "https://www.instagram.com/reel/DRxjXWCiuux/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dq4l8h9cmmt.jpg", video: "https://www.instagram.com/reel/DQ4l8h9CmMT/", instagramUrl: "https://www.instagram.com/reel/DQ4l8h9CmMT/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dpjo3hcjxi7.jpg", video: "https://www.instagram.com/reel/DPjo3hCjXi7/", instagramUrl: "https://www.instagram.com/reel/DPjo3hCjXi7/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dqpiqiwiddz.jpg", video: "https://www.instagram.com/reel/DQpIqIWiDdz/", instagramUrl: "https://www.instagram.com/reel/DQpIqIWiDdz/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dtn7adici5c.jpg", video: "https://www.instagram.com/reel/DTN7adICi5C/", instagramUrl: "https://www.instagram.com/reel/DTN7adICi5C/" }
                ]
            },
            {
                title: "At the event",
                text: "Three days of coverage: fun, high-energy reels, plus enough material to market the next year.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dtyov-2cop0.jpg", video: "https://www.instagram.com/reel/DTyOV-2CoP0/", instagramUrl: "https://www.instagram.com/reel/DTyOV-2CoP0/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dtvpwvkcrsw.jpg", video: "https://www.instagram.com/reel/DTvpwVKCrSw/", instagramUrl: "https://www.instagram.com/reel/DTvpwVKCrSw/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dttetawcsub.jpg", video: "https://www.instagram.com/reel/DTtEtAWCsuB/", instagramUrl: "https://www.instagram.com/reel/DTtEtAWCsuB/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dtslwy9ipce.jpg", video: "https://www.instagram.com/reel/DTslWy9ipcE/", instagramUrl: "https://www.instagram.com/reel/DTslWy9ipcE/" }
                ]
            },
            {
                title: "Podcast corner",
                text: "A corner with professional cameras and audio. About 30 to 35 podcast reels shot, edited and delivered during the three days.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dhcdbskkqyz.jpg", video: "https://www.instagram.com/reel/DHCDbSkKQyZ/", instagramUrl: "https://www.instagram.com/reel/DHCDbSkKQyZ/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-di9agyiqfil.jpg", video: "https://www.instagram.com/reel/DI9aGyiqFiL/", instagramUrl: "https://www.instagram.com/reel/DI9aGyiqFiL/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-djr6zchkcx7.jpg", video: "https://www.instagram.com/reel/DJR6ZcHKcX7/", instagramUrl: "https://www.instagram.com/reel/DJR6ZcHKcX7/" },
                    { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-1fcokadqbwlg.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1fcokadqbwlg.jpg" },
                    { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-1getobg79mkk.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1getobg79mkk.jpg" },
                    { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-1gs7jsr9crnh.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1gs7jsr9crnh.jpg" },
                    { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-1nvp9bkzcpxq.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1nvp9bkzcpxq.jpg" }
                ]
            }
        ],
        media: [
            { kind: "reel", title: "Testimonial", format: "9:16", thumbnail: "assets/images/ig-dts73zwihqq.jpg", video: "https://www.instagram.com/reel/DTS73ZwihQq/", instagramUrl: "https://www.instagram.com/reel/DTS73ZwihQq/" },
            { kind: "reel", title: "Testimonial", format: "9:16", thumbnail: "assets/images/ig-dtlm9smcntc.jpg", video: "https://www.instagram.com/reel/DTLm9sMCnTC/", instagramUrl: "https://www.instagram.com/reel/DTLm9sMCnTC/" },
            { kind: "reel", title: "Testimonial", format: "9:16", thumbnail: "assets/images/ig-drukenbirfy.jpg", video: "https://www.instagram.com/reel/DRukenbirfY/", instagramUrl: "https://www.instagram.com/reel/DRukenbirfY/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-drxjxwciuux.jpg", video: "https://www.instagram.com/reel/DRxjXWCiuux/", instagramUrl: "https://www.instagram.com/reel/DRxjXWCiuux/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dq4l8h9cmmt.jpg", video: "https://www.instagram.com/reel/DQ4l8h9CmMT/", instagramUrl: "https://www.instagram.com/reel/DQ4l8h9CmMT/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dpjo3hcjxi7.jpg", video: "https://www.instagram.com/reel/DPjo3hCjXi7/", instagramUrl: "https://www.instagram.com/reel/DPjo3hCjXi7/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dqpiqiwiddz.jpg", video: "https://www.instagram.com/reel/DQpIqIWiDdz/", instagramUrl: "https://www.instagram.com/reel/DQpIqIWiDdz/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dtn7adici5c.jpg", video: "https://www.instagram.com/reel/DTN7adICi5C/", instagramUrl: "https://www.instagram.com/reel/DTN7adICi5C/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dtyov-2cop0.jpg", video: "https://www.instagram.com/reel/DTyOV-2CoP0/", instagramUrl: "https://www.instagram.com/reel/DTyOV-2CoP0/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dtvpwvkcrsw.jpg", video: "https://www.instagram.com/reel/DTvpwVKCrSw/", instagramUrl: "https://www.instagram.com/reel/DTvpwVKCrSw/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dttetawcsub.jpg", video: "https://www.instagram.com/reel/DTtEtAWCsuB/", instagramUrl: "https://www.instagram.com/reel/DTtEtAWCsuB/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dtslwy9ipce.jpg", video: "https://www.instagram.com/reel/DTslWy9ipcE/", instagramUrl: "https://www.instagram.com/reel/DTslWy9ipcE/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dhcdbskkqyz.jpg", video: "https://www.instagram.com/reel/DHCDbSkKQyZ/", instagramUrl: "https://www.instagram.com/reel/DHCDbSkKQyZ/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-di9agyiqfil.jpg", video: "https://www.instagram.com/reel/DI9aGyiqFiL/", instagramUrl: "https://www.instagram.com/reel/DI9aGyiqFiL/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-djr6zchkcx7.jpg", video: "https://www.instagram.com/reel/DJR6ZcHKcX7/", instagramUrl: "https://www.instagram.com/reel/DJR6ZcHKcX7/" },
            { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-1fcokadqbwlg.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1fcokadqbwlg.jpg" },
            { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-1getobg79mkk.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1getobg79mkk.jpg" },
            { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-1gs7jsr9crnh.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1gs7jsr9crnh.jpg" },
            { kind: "photo", title: "", format: "9:16", thumbnail: "assets/images/drive-1nvp9bkzcpxq.jpg", video: "", instagramUrl: "", full: "assets/photos/drive-1nvp9bkzcpxq.jpg" }
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
        title: "Gulf Cryo — Partnership Event",
        client: "Gulf Cryo",
        category: "events",
        description: "A partnership event between two companies: live multi-camera coverage on the venue screens, an event promo, and a quick testimonial interview to close the night.",
        scope: ["Live multi-cam", "Event promo", "Testimonial interview"],
        media: [
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/event-do57rfhj-f6.jpg", video: "https://www.instagram.com/reel/DO57rFhj_F6/", instagramUrl: "https://www.instagram.com/reel/DO57rFhj_F6/" }
        ]
    },
    {
        slug: "buthaina-podcast",
        title: "Buthaina Podcast",
        client: "Buthaina Abdullah",
        category: "podcasts",
        description: "Brought in from season two when the host wanted a more professional production. We designed and built her home studio, directed 12 episodes, grew her reels to millions of views and ran live experiments across platforms.",
        scope: ["Studio design & build", "Episode direction", "Reels & posts", "Live streaming"],
        facts: [{ value: "16K → 160K", label: "Instagram followers" }, { value: "12", label: "episodes produced" }, { value: "Millions", label: "reel views" }],
        account: { handle: "buthaina.podcast", followers: "160K" },
        cover: "assets/images/yt-4ooiml8szha.jpg",
        coverFormat: "16:9",
        chapters: [
            {
                title: "The studio",
                text: "We designed the studio in her home, sourced and built the décor, bought the right equipment and installed a complete set-up, technical details included.",
                media: [
                    { kind: "photo", title: "Studio build 1", format: "1:1", thumbnail: "assets/images/qs-d54rrvtm7mgd.jpg", video: "", instagramUrl: "", link: "https://quickshare.samsungcloud.com/d54RrvTm7MgD", full: "assets/images/qs-d54rrvtm7mgd.jpg" },
                    { kind: "photo", title: "Studio build 2", format: "1:1", thumbnail: "assets/images/qs-hkcr3yjmfdgp.jpg", video: "", instagramUrl: "", link: "https://quickshare.samsungcloud.com/hKCR3yjMFdgP", full: "assets/images/qs-hkcr3yjmfdgp.jpg" },
                    { kind: "album", title: "Studio build 3", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/o1VYkXZ9TpQT9iD16" },
                    { kind: "album", title: "Studio build 4", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/aLpdnVEokgnvj7wWA" },
                    { kind: "album", title: "Studio build 5", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/Vp7JRtU94w7CEejt5" }
                ]
            },
            {
                title: "12 episodes",
                text: "Directed to match her level and the level of her guests.",
                media: [
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-nh67ywvk3qq.jpg", video: "https://www.youtube.com/watch?v=nh67YWvk3QQ", instagramUrl: "" },
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-4ooiml8szha.jpg", video: "https://www.youtube.com/watch?v=4oOIMl8SzHA", instagramUrl: "" },
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-d7rvuf1qpfw.jpg", video: "https://www.youtube.com/watch?v=D7rVuF1QPfw", instagramUrl: "" }
                ]
            },
            {
                title: "Reels that travelled",
                text: "Reels and posts built to push views. Several reached millions.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-daivimymc1l.jpg", video: "https://www.instagram.com/reel/DAiviMyMC1l/", instagramUrl: "https://www.instagram.com/reel/DAiviMyMC1l/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-ddfkx8znxl5.jpg", video: "https://www.instagram.com/reel/DDfKX8ZNxL5/", instagramUrl: "https://www.instagram.com/reel/DDfKX8ZNxL5/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dirfa2yt1sk.jpg", video: "https://www.instagram.com/reel/DIRfa2yt1sk/", instagramUrl: "https://www.instagram.com/reel/DIRfa2yt1sk/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dcehh1stsnu.jpg", video: "https://www.instagram.com/reel/DCehH1StSnU/", instagramUrl: "https://www.instagram.com/reel/DCehH1StSnU/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dblgb2ltoue.jpg", video: "https://www.instagram.com/reel/DBlgb2LtOue/", instagramUrl: "https://www.instagram.com/reel/DBlgb2LtOue/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dbb4wugnrdh.jpg", video: "https://www.instagram.com/reel/DBb4WuGNRdh/", instagramUrl: "https://www.instagram.com/reel/DBb4WuGNRdh/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dbg2cgrm8kx.jpg", video: "https://www.instagram.com/reel/DBG2cgrM8kX/", instagramUrl: "https://www.instagram.com/reel/DBG2cgrM8kX/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-daogwvbs8od.jpg", video: "https://www.instagram.com/reel/DAoGwvbs8od/", instagramUrl: "https://www.instagram.com/reel/DAoGwvbs8od/" }
                ]
            },
            {
                title: "Marina FM",
                text: "We filmed her Marina FM appearance and turned it into content for her own channels.",
                media: [
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-q6h8oumys8s.jpg", video: "https://www.youtube.com/watch?v=Q6h8OUmYS8s", instagramUrl: "" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-c-c6-1nmfwn.jpg", video: "https://www.instagram.com/reel/C-C6-1NMfWN/", instagramUrl: "https://www.instagram.com/reel/C-C6-1NMfWN/" }
                ]
            },
            {
                title: "Live experiments",
                text: "One episode live on YouTube, TikTok and Instagram at the same time, a solo live reading comments, and a live episode with a guest on YouTube and Instagram. Strong engagement.",
                media: [
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-gd-vyag3esw.jpg", video: "https://www.youtube.com/watch?v=gD_VYaG3eSw", instagramUrl: "" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-c-vlrjsmemb.jpg", video: "https://www.instagram.com/reel/C-vLRJSMeMb/", instagramUrl: "https://www.instagram.com/reel/C-vLRJSMeMb/" }
                ]
            }
        ],
        media: [
            { kind: "photo", title: "Studio build 1", format: "1:1", thumbnail: "assets/images/qs-d54rrvtm7mgd.jpg", video: "", instagramUrl: "", link: "https://quickshare.samsungcloud.com/d54RrvTm7MgD", full: "assets/images/qs-d54rrvtm7mgd.jpg" },
            { kind: "photo", title: "Studio build 2", format: "1:1", thumbnail: "assets/images/qs-hkcr3yjmfdgp.jpg", video: "", instagramUrl: "", link: "https://quickshare.samsungcloud.com/hKCR3yjMFdgP", full: "assets/images/qs-hkcr3yjmfdgp.jpg" },
            { kind: "album", title: "Studio build 3", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/o1VYkXZ9TpQT9iD16" },
            { kind: "album", title: "Studio build 4", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/aLpdnVEokgnvj7wWA" },
            { kind: "album", title: "Studio build 5", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/Vp7JRtU94w7CEejt5" },
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-nh67ywvk3qq.jpg", video: "https://www.youtube.com/watch?v=nh67YWvk3QQ", instagramUrl: "" },
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-4ooiml8szha.jpg", video: "https://www.youtube.com/watch?v=4oOIMl8SzHA", instagramUrl: "" },
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-d7rvuf1qpfw.jpg", video: "https://www.youtube.com/watch?v=D7rVuF1QPfw", instagramUrl: "" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-daivimymc1l.jpg", video: "https://www.instagram.com/reel/DAiviMyMC1l/", instagramUrl: "https://www.instagram.com/reel/DAiviMyMC1l/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-ddfkx8znxl5.jpg", video: "https://www.instagram.com/reel/DDfKX8ZNxL5/", instagramUrl: "https://www.instagram.com/reel/DDfKX8ZNxL5/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dirfa2yt1sk.jpg", video: "https://www.instagram.com/reel/DIRfa2yt1sk/", instagramUrl: "https://www.instagram.com/reel/DIRfa2yt1sk/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dcehh1stsnu.jpg", video: "https://www.instagram.com/reel/DCehH1StSnU/", instagramUrl: "https://www.instagram.com/reel/DCehH1StSnU/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dblgb2ltoue.jpg", video: "https://www.instagram.com/reel/DBlgb2LtOue/", instagramUrl: "https://www.instagram.com/reel/DBlgb2LtOue/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dbb4wugnrdh.jpg", video: "https://www.instagram.com/reel/DBb4WuGNRdh/", instagramUrl: "https://www.instagram.com/reel/DBb4WuGNRdh/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dbg2cgrm8kx.jpg", video: "https://www.instagram.com/reel/DBG2cgrM8kX/", instagramUrl: "https://www.instagram.com/reel/DBG2cgrM8kX/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-daogwvbs8od.jpg", video: "https://www.instagram.com/reel/DAoGwvbs8od/", instagramUrl: "https://www.instagram.com/reel/DAoGwvbs8od/" },
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-q6h8oumys8s.jpg", video: "https://www.youtube.com/watch?v=Q6h8OUmYS8s", instagramUrl: "" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-c-c6-1nmfwn.jpg", video: "https://www.instagram.com/reel/C-C6-1NMfWN/", instagramUrl: "https://www.instagram.com/reel/C-C6-1NMfWN/" },
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-gd-vyag3esw.jpg", video: "https://www.youtube.com/watch?v=gD_VYaG3eSw", instagramUrl: "" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-c-vlrjsmemb.jpg", video: "https://www.instagram.com/reel/C-vLRJSMeMb/", instagramUrl: "https://www.instagram.com/reel/C-vLRJSMeMb/" }
        ]
    },
    {
        slug: "qissa-w-qanoon",
        title: "بودكاست قصة وقانون",
        client: "المحامي محمد حمزة عباس",
        category: "podcasts",
        description: "We started with light cinematic reels in his office, built his Instagram presence, then produced a two-episode podcast in a calm studio set. Reels cut from the episodes reached millions.",
        scope: ["Cinematic reels", "Instagram marketing", "Podcast production", "Reel format design"],
        facts: [{ value: "0 → 42K", label: "Instagram followers" }, { value: "2", label: "episodes produced" }, { value: "Millions", label: "reel views" }],
        account: { handle: "lawyermhamzahofficial", followers: "42K" },
        cover: "assets/images/yt-cbnylpunk0o.jpg",
        coverFormat: "16:9",
        chapters: [
            {
                title: "Office reels",
                text: "Simple, lightly cinematic reels shot in his office on varied topics, distributed professionally on Instagram with posts until his views and account took off.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dlk-bxaiogb.jpg", video: "https://www.instagram.com/reel/DLK_bXaioGB/", instagramUrl: "https://www.instagram.com/reel/DLK_bXaioGB/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dlr4mr9cfoi.jpg", video: "https://www.instagram.com/reel/DLR4MR9CFOi/", instagramUrl: "https://www.instagram.com/reel/DLR4MR9CFOi/" }
                ]
            },
            {
                title: "Episode one",
                text: "His first full episode with a host, in a simple, calm set that suits his topics.",
                media: [
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-cbnylpunk0o.jpg", video: "https://www.youtube.com/watch?v=cBNyLpUnK0o", instagramUrl: "" },
                    { kind: "album", title: "Behind the scenes", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/ESzrrK2QY5Vbg7qdA" }
                ]
            },
            {
                title: "Reels from the episode",
                text: "Many reels cut from the episode, marketed for months on Instagram and TikTok.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dw9w-tkgk-v.jpg", video: "https://www.instagram.com/reel/DW9W-TKgk-V/", instagramUrl: "https://www.instagram.com/reel/DW9W-TKgk-V/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dxupm16at8p.jpg", video: "https://www.instagram.com/reel/DXUpm16At8p/", instagramUrl: "https://www.instagram.com/reel/DXUpm16At8p/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dd4j9vscxgg.jpg", video: "https://www.instagram.com/reel/Dd4J9vsCXgg/", instagramUrl: "https://www.instagram.com/reel/Dd4J9vsCXgg/" }
                ]
            },
            {
                title: "Episode two",
                text: "Same approach in a more cinematic studio, with quality raised again and a reel format built around a calm intro and quiet detail in the middle.",
                media: [
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-wd7qj7zzwp8.jpg", video: "https://www.youtube.com/watch?v=Wd7QJ7ZzWP8", instagramUrl: "" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dert1q7ieuf.jpg", video: "https://www.instagram.com/reel/Dert1q7ieUf/", instagramUrl: "https://www.instagram.com/reel/Dert1q7ieUf/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-demtzlmt1un.jpg", video: "https://www.instagram.com/reel/DemtZlmt1UN/", instagramUrl: "https://www.instagram.com/reel/DemtZlmt1UN/" }
                ]
            }
        ],
        media: [
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dlk-bxaiogb.jpg", video: "https://www.instagram.com/reel/DLK_bXaioGB/", instagramUrl: "https://www.instagram.com/reel/DLK_bXaioGB/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dlr4mr9cfoi.jpg", video: "https://www.instagram.com/reel/DLR4MR9CFOi/", instagramUrl: "https://www.instagram.com/reel/DLR4MR9CFOi/" },
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-cbnylpunk0o.jpg", video: "https://www.youtube.com/watch?v=cBNyLpUnK0o", instagramUrl: "" },
            { kind: "album", title: "Behind the scenes", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/ESzrrK2QY5Vbg7qdA" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dw9w-tkgk-v.jpg", video: "https://www.instagram.com/reel/DW9W-TKgk-V/", instagramUrl: "https://www.instagram.com/reel/DW9W-TKgk-V/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dxupm16at8p.jpg", video: "https://www.instagram.com/reel/DXUpm16At8p/", instagramUrl: "https://www.instagram.com/reel/DXUpm16At8p/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dd4j9vscxgg.jpg", video: "https://www.instagram.com/reel/Dd4J9vsCXgg/", instagramUrl: "https://www.instagram.com/reel/Dd4J9vsCXgg/" },
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-wd7qj7zzwp8.jpg", video: "https://www.youtube.com/watch?v=Wd7QJ7ZzWP8", instagramUrl: "" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dert1q7ieuf.jpg", video: "https://www.instagram.com/reel/Dert1q7ieUf/", instagramUrl: "https://www.instagram.com/reel/Dert1q7ieUf/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-demtzlmt1un.jpg", video: "https://www.instagram.com/reel/DemtZlmt1UN/", instagramUrl: "https://www.instagram.com/reel/DemtZlmt1UN/" }
        ]
    },
    {
        slug: "jadwa-podcast",
        title: "Jadwa Podcast",
        client: "Jadwa",
        category: "podcasts",
        description: "Built from zero: a podcast on economics with heavyweight guests, so the production had to match. Studio shoots with professional cameras and editing, sponsor ads integrated inside episodes, and clean reels and posts around every release.",
        scope: ["Concept from zero", "Studio production", "Professional editing", "Sponsor integration", "Reels & posts"],
        facts: [{ value: "0 → 8K", label: "Instagram followers" }],
        account: { handle: "jadwapodcast", followers: "8K" },
        cover: "assets/images/yt-tzxy7btkdqs.jpg",
        coverFormat: "16:9",
        chapters: [
            {
                title: "Studio production",
                text: "A simple, calm studio set, professional cameras and professional editing.",
                media: [
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-tzxy7btkdqs.jpg", video: "https://www.youtube.com/watch?v=tZxY7BtkDQs", instagramUrl: "" },
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-qks5wous72w.jpg", video: "https://www.youtube.com/watch?v=qks5woUS72w", instagramUrl: "" }
                ]
            },
            {
                title: "Sponsor integration",
                text: "A new way to place the sponsor inside the episode so the ad feels part of the show.",
                media: [
                    { kind: "album", title: "Sponsor inside the episode", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/LNgSkCPG7vifLFep9" }
                ]
            },
            {
                title: "Reels & posts",
                text: "Reels and posts after every episode, designed around the sponsor and the standing of the guests.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-df4wyodshga.jpg", video: "https://www.instagram.com/reel/DF4wYOdsHga/", instagramUrl: "https://www.instagram.com/reel/DF4wYOdsHga/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dfgi-bsmxjr.jpg", video: "https://www.instagram.com/reel/DFGI_BsMXjr/", instagramUrl: "https://www.instagram.com/reel/DFGI_BsMXjr/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-de5ohunmiah.jpg", video: "https://www.instagram.com/reel/DE5OhUnMIah/", instagramUrl: "https://www.instagram.com/reel/DE5OhUnMIah/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dcr3lewsxm-.jpg", video: "https://www.instagram.com/reel/DCR3lEwsxM-/", instagramUrl: "https://www.instagram.com/reel/DCR3lEwsxM-/" },
                    { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dg0vjtkisfh.jpg", video: "https://www.instagram.com/p/DG0vJTKisFh/", instagramUrl: "https://www.instagram.com/p/DG0vJTKisFh/" },
                    { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-df79i1rm-vw.jpg", video: "https://www.instagram.com/p/DF79i1RM-VW/", instagramUrl: "https://www.instagram.com/p/DF79i1RM-VW/" }
                ]
            }
        ],
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-tzxy7btkdqs.jpg", video: "https://www.youtube.com/watch?v=tZxY7BtkDQs", instagramUrl: "" },
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-qks5wous72w.jpg", video: "https://www.youtube.com/watch?v=qks5woUS72w", instagramUrl: "" },
            { kind: "album", title: "Sponsor inside the episode", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/LNgSkCPG7vifLFep9" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-df4wyodshga.jpg", video: "https://www.instagram.com/reel/DF4wYOdsHga/", instagramUrl: "https://www.instagram.com/reel/DF4wYOdsHga/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dfgi-bsmxjr.jpg", video: "https://www.instagram.com/reel/DFGI_BsMXjr/", instagramUrl: "https://www.instagram.com/reel/DFGI_BsMXjr/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-de5ohunmiah.jpg", video: "https://www.instagram.com/reel/DE5OhUnMIah/", instagramUrl: "https://www.instagram.com/reel/DE5OhUnMIah/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dcr3lewsxm-.jpg", video: "https://www.instagram.com/reel/DCR3lEwsxM-/", instagramUrl: "https://www.instagram.com/reel/DCR3lEwsxM-/" },
            { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dg0vjtkisfh.jpg", video: "https://www.instagram.com/p/DG0vJTKisFh/", instagramUrl: "https://www.instagram.com/p/DG0vJTKisFh/" },
            { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-df79i1rm-vw.jpg", video: "https://www.instagram.com/p/DF79i1RM-VW/", instagramUrl: "https://www.instagram.com/p/DF79i1RM-VW/" }
        ]
    },
    {
        slug: "atheer-podcast",
        title: "أثير",
        client: "Atheer",
        category: "podcasts",
        description: "",
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/podcast-x3buubvnxia.jpg", video: "https://www.youtube.com/watch?v=X3BUuBVNXIA", instagramUrl: "" }
        ]
    },
    {
        slug: "oru-roasters",
        title: "Oru Roasters — Personal Brand",
        client: "Oru Roasters",
        category: "social",
        description: "Months of content for a specialty coffee shop, led by its owner as a personal brand: storytelling first, advertising second.",
        scope: ["Personal brand", "Storytelling", "Reels", "Photography"],
        account: { handle: "oruroasters", followers: "33K" },
        cover: "assets/images/ig-drkcqapjx-h.jpg",
        coverFormat: "9:16",
        chapters: [
            {
                title: "Stories over coffee",
                text: "The owner tells stories while making coffee, so the shop is marketed indirectly through entertainment.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dqw3duyja9g.jpg", video: "https://www.instagram.com/reel/DQw3DuYja9G/", instagramUrl: "https://www.instagram.com/reel/DQw3DuYja9G/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-drkcqapjx-h.jpg", video: "https://www.instagram.com/reel/DRkcqAPjX_h/", instagramUrl: "https://www.instagram.com/reel/DRkcqAPjX_h/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dr-pbdcdtim.jpg", video: "https://www.instagram.com/reel/DR-PBDcDTIm/", instagramUrl: "https://www.instagram.com/reel/DR-PBDcDTIm/" }
                ]
            },
            {
                title: "The team",
                text: "Light, fun videos with the baristas.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-drcxrutikxg.jpg", video: "https://www.instagram.com/reel/DRcXrUtiKxg/", instagramUrl: "https://www.instagram.com/reel/DRcXrUtiKxg/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-drultxpjwox.jpg", video: "https://www.instagram.com/reel/DRulTXpjWoX/", instagramUrl: "https://www.instagram.com/reel/DRulTXpjWoX/" }
                ]
            },
            {
                title: "Booth coverage",
                text: "Coverage of their booths at events.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dsuxeahjctw.jpg", video: "https://www.instagram.com/reel/DSuxeAhjctW/", instagramUrl: "https://www.instagram.com/reel/DSuxeAhjctW/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dtkclhbdqzs.jpg", video: "https://www.instagram.com/reel/DTKcLhbDQZs/", instagramUrl: "https://www.instagram.com/reel/DTKcLhbDQZs/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dtv-m3ojzez.jpg", video: "https://www.instagram.com/reel/DTV-m3ojZEZ/", instagramUrl: "https://www.instagram.com/reel/DTV-m3ojZEZ/" }
                ]
            },
            {
                title: "Place & what's new",
                text: "The vibe of the space, new products and photography of the place for social.",
                media: [
                    { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dso-a9-jasy.jpg", video: "https://www.instagram.com/p/DSo_A9-jaSy/", instagramUrl: "https://www.instagram.com/p/DSo_A9-jaSy/" },
                    { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dquiaqmju--.jpg", video: "https://www.instagram.com/p/DQuIAqMjU--/", instagramUrl: "https://www.instagram.com/p/DQuIAqMjU--/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dsh8dsxdqjc.jpg", video: "https://www.instagram.com/reel/DSh8DSXDQJc/", instagramUrl: "https://www.instagram.com/reel/DSh8DSXDQJc/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dsu1x47dtqf.jpg", video: "https://www.instagram.com/reel/DSU1x47DTQF/", instagramUrl: "https://www.instagram.com/reel/DSU1x47DTQF/" }
                ]
            }
        ],
        media: [
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dqw3duyja9g.jpg", video: "https://www.instagram.com/reel/DQw3DuYja9G/", instagramUrl: "https://www.instagram.com/reel/DQw3DuYja9G/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-drkcqapjx-h.jpg", video: "https://www.instagram.com/reel/DRkcqAPjX_h/", instagramUrl: "https://www.instagram.com/reel/DRkcqAPjX_h/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dr-pbdcdtim.jpg", video: "https://www.instagram.com/reel/DR-PBDcDTIm/", instagramUrl: "https://www.instagram.com/reel/DR-PBDcDTIm/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-drcxrutikxg.jpg", video: "https://www.instagram.com/reel/DRcXrUtiKxg/", instagramUrl: "https://www.instagram.com/reel/DRcXrUtiKxg/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-drultxpjwox.jpg", video: "https://www.instagram.com/reel/DRulTXpjWoX/", instagramUrl: "https://www.instagram.com/reel/DRulTXpjWoX/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dsuxeahjctw.jpg", video: "https://www.instagram.com/reel/DSuxeAhjctW/", instagramUrl: "https://www.instagram.com/reel/DSuxeAhjctW/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dtkclhbdqzs.jpg", video: "https://www.instagram.com/reel/DTKcLhbDQZs/", instagramUrl: "https://www.instagram.com/reel/DTKcLhbDQZs/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dtv-m3ojzez.jpg", video: "https://www.instagram.com/reel/DTV-m3ojZEZ/", instagramUrl: "https://www.instagram.com/reel/DTV-m3ojZEZ/" },
            { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dso-a9-jasy.jpg", video: "https://www.instagram.com/p/DSo_A9-jaSy/", instagramUrl: "https://www.instagram.com/p/DSo_A9-jaSy/" },
            { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dquiaqmju--.jpg", video: "https://www.instagram.com/p/DQuIAqMjU--/", instagramUrl: "https://www.instagram.com/p/DQuIAqMjU--/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dsh8dsxdqjc.jpg", video: "https://www.instagram.com/reel/DSh8DSXDQJc/", instagramUrl: "https://www.instagram.com/reel/DSh8DSXDQJc/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dsu1x47dtqf.jpg", video: "https://www.instagram.com/reel/DSU1x47DTQF/", instagramUrl: "https://www.instagram.com/reel/DSU1x47DTQF/" }
        ]
    },
    {
        slug: "shahad-al-momen",
        title: "Shahad Al Momen — Naqsh Jewellery",
        client: "Shahad Al Momen · Naqsh",
        category: "social",
        description: "Personal-brand content for a lab-grown diamond jewellery founder: expert talk, fashion and behind-the-scenes, from the shop to home to a shoot trip in Dubai.",
        scope: ["Personal brand", "Reels", "Travel shoot", "Lifestyle"],
        account: { handle: "shahadalmomen", followers: "80K" },
        cover: "assets/images/ig-dhhk1hyswse.jpg",
        coverFormat: "9:16",
        chapters: [
            {
                title: "Dubai",
                text: "A trip to IGI and the lab-grown diamond labs in Dubai. The full tour became content that made real noise on social.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dhrctoqsp1i.jpg", video: "https://www.instagram.com/reel/DHRCTOqsP1i/", instagramUrl: "https://www.instagram.com/reel/DHRCTOqsP1i/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dhbbrqcmpl-.jpg", video: "https://www.instagram.com/reel/DHbbrQCMPl_/", instagramUrl: "https://www.instagram.com/reel/DHbbrQCMPl_/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dhhk1hyswse.jpg", video: "https://www.instagram.com/reel/DHHK1HYswsE/", instagramUrl: "https://www.instagram.com/reel/DHHK1HYswsE/" }
                ]
            },
            {
                title: "Shop & home",
                text: "Expert talk, fashion and everyday topics, shot in the shop and at home.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-df25wusmm-m.jpg", video: "https://www.instagram.com/reel/DF25WuSMm-m/", instagramUrl: "https://www.instagram.com/reel/DF25WuSMm-m/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dgfkcjisah-.jpg", video: "https://www.instagram.com/reel/DGfkcJiSaH_/", instagramUrl: "https://www.instagram.com/reel/DGfkcJiSaH_/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dffsajlm0vi.jpg", video: "https://www.instagram.com/reel/DFfsajlM0vi/", instagramUrl: "https://www.instagram.com/reel/DFfsajlM0vi/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dke-zbysby0.jpg", video: "https://www.instagram.com/reel/DKe-ZbYsBy0/", instagramUrl: "https://www.instagram.com/reel/DKe-ZbYsBy0/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dkpfg61szt3.jpg", video: "https://www.instagram.com/reel/DKPfG61szt3/", instagramUrl: "https://www.instagram.com/reel/DKPfG61szt3/" }
                ]
            },
            {
                title: "Stills",
                text: "",
                media: [
                    { kind: "album", title: "Photo set 1", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/4bK68Uh2nz9yj8tH9" },
                    { kind: "album", title: "Photo set 2", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/mzcr7AxpHgMCK3b66" }
                ]
            }
        ],
        media: [
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dhrctoqsp1i.jpg", video: "https://www.instagram.com/reel/DHRCTOqsP1i/", instagramUrl: "https://www.instagram.com/reel/DHRCTOqsP1i/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dhbbrqcmpl-.jpg", video: "https://www.instagram.com/reel/DHbbrQCMPl_/", instagramUrl: "https://www.instagram.com/reel/DHbbrQCMPl_/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dhhk1hyswse.jpg", video: "https://www.instagram.com/reel/DHHK1HYswsE/", instagramUrl: "https://www.instagram.com/reel/DHHK1HYswsE/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-df25wusmm-m.jpg", video: "https://www.instagram.com/reel/DF25WuSMm-m/", instagramUrl: "https://www.instagram.com/reel/DF25WuSMm-m/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dgfkcjisah-.jpg", video: "https://www.instagram.com/reel/DGfkcJiSaH_/", instagramUrl: "https://www.instagram.com/reel/DGfkcJiSaH_/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dffsajlm0vi.jpg", video: "https://www.instagram.com/reel/DFfsajlM0vi/", instagramUrl: "https://www.instagram.com/reel/DFfsajlM0vi/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dke-zbysby0.jpg", video: "https://www.instagram.com/reel/DKe-ZbYsBy0/", instagramUrl: "https://www.instagram.com/reel/DKe-ZbYsBy0/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dkpfg61szt3.jpg", video: "https://www.instagram.com/reel/DKPfG61szt3/", instagramUrl: "https://www.instagram.com/reel/DKPfG61szt3/" },
            { kind: "album", title: "Photo set 1", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/4bK68Uh2nz9yj8tH9" },
            { kind: "album", title: "Photo set 2", format: "16:9", thumbnail: "", video: "", instagramUrl: "", link: "https://photos.app.goo.gl/mzcr7AxpHgMCK3b66" }
        ]
    },
    {
        slug: "mad-recovery-center",
        title: "MAD Recovery Center — Founder Content",
        client: "MAD Recovery Center",
        category: "social",
        description: "Content for founder Amr: polished educational set-ups mixed with fast, catchy phone-shot videos built to hold attention, plus a YouTube series cut into Shorts. Strong engagement on Instagram.",
        scope: ["Founder content", "Reels", "YouTube series", "Shorts"],
        account: { handle: "madrecoverycenter", followers: "34K" },
        cover: "assets/images/ig-ddmie7gcgif.jpg",
        coverFormat: "9:16",
        chapters: [
            {
                title: "YouTube series",
                text: "Wide episodes where he explains valuable information.",
                media: [
                    { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-axsfjc73n9c.jpg", video: "https://www.youtube.com/watch?v=axSfjC73N9c", instagramUrl: "" }
                ]
            },
            {
                title: "Shorts",
                text: "Shorts cut from the episodes to market them on Instagram.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dergsfxksug.jpg", video: "https://www.instagram.com/reel/DergSfxkSUG/", instagramUrl: "https://www.instagram.com/reel/DergSfxkSUG/" }
                ]
            },
            {
                title: "Reels",
                text: "Fast, young, catchy videos shot on a phone from different angles, with funny and eye-catching moments so viewers stay.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-ddmie7gcgif.jpg", video: "https://www.instagram.com/reel/DdMIE7GCgIf/", instagramUrl: "https://www.instagram.com/reel/DdMIE7GCgIf/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dba0--udev-.jpg", video: "https://www.instagram.com/reel/Dba0-_UDeV-/", instagramUrl: "https://www.instagram.com/reel/Dba0-_UDeV-/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-ddy--45lgm9.jpg", video: "https://www.instagram.com/reel/DdY_-45lGM9/", instagramUrl: "https://www.instagram.com/reel/DdY_-45lGM9/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-depernechrl.jpg", video: "https://www.instagram.com/reel/DePErneChRl/", instagramUrl: "https://www.instagram.com/reel/DePErneChRl/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dbn8-x8djbr.jpg", video: "https://www.instagram.com/reel/DbN8-X8DjBR/", instagramUrl: "https://www.instagram.com/reel/DbN8-X8DjBR/" }
                ]
            }
        ],
        media: [
            { kind: "video", title: "", format: "16:9", thumbnail: "assets/images/yt-axsfjc73n9c.jpg", video: "https://www.youtube.com/watch?v=axSfjC73N9c", instagramUrl: "" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dergsfxksug.jpg", video: "https://www.instagram.com/reel/DergSfxkSUG/", instagramUrl: "https://www.instagram.com/reel/DergSfxkSUG/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-ddmie7gcgif.jpg", video: "https://www.instagram.com/reel/DdMIE7GCgIf/", instagramUrl: "https://www.instagram.com/reel/DdMIE7GCgIf/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dba0--udev-.jpg", video: "https://www.instagram.com/reel/Dba0-_UDeV-/", instagramUrl: "https://www.instagram.com/reel/Dba0-_UDeV-/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-ddy--45lgm9.jpg", video: "https://www.instagram.com/reel/DdY_-45lGM9/", instagramUrl: "https://www.instagram.com/reel/DdY_-45lGM9/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-depernechrl.jpg", video: "https://www.instagram.com/reel/DePErneChRl/", instagramUrl: "https://www.instagram.com/reel/DePErneChRl/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dbn8-x8djbr.jpg", video: "https://www.instagram.com/reel/DbN8-X8DjBR/", instagramUrl: "https://www.instagram.com/reel/DbN8-X8DjBR/" }
        ]
    },
    {
        slug: "wajhat-al-seif",
        title: "Wajhat Al Seif — Tower Launch Campaign",
        client: "Wajhat Al Seif",
        category: "commercial",
        description: "A wide launch campaign for a tower in Kuwait City, started before the building opened, to show its value and bring in office tenants.",
        scope: ["Animation", "Drone", "Interior film", "Design"],
        account: { handle: "wajhatalseif", followers: "2.8K" },
        cover: "assets/images/ig-dprsjhwdal-.jpg",
        coverFormat: "9:16",
        chapters: [
            {
                title: "Heritage",
                text: "Animation and posts on the landmarks of Kuwait City that inspired the tower and give it meaning.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dmnui0vsx6k.jpg", video: "https://www.instagram.com/reel/DMnuI0vsx6k/", instagramUrl: "https://www.instagram.com/reel/DMnuI0vsx6k/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dmyasmlmu-n.jpg", video: "https://www.instagram.com/reel/DMyASmlMU-n/", instagramUrl: "https://www.instagram.com/reel/DMyASmlMU-n/" },
                    { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dm8s-pdstrf.jpg", video: "https://www.instagram.com/p/DM8S-pDstRf/", instagramUrl: "https://www.instagram.com/p/DM8S-pDstRf/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dnjle-isbva.jpg", video: "https://www.instagram.com/reel/DNJLE_IsbvA/", instagramUrl: "https://www.instagram.com/reel/DNJLE_IsbvA/" },
                    { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dnvawgsmn-v.jpg", video: "https://www.instagram.com/p/DNVAWGsMN_v/", instagramUrl: "https://www.instagram.com/p/DNVAWGsMN_v/" }
                ]
            },
            {
                title: "Reveal",
                text: "Drone shots of the exterior to show its size, then interiors showing the space, the finishing and the view, its strongest asset.",
                media: [
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dqzyydkjl4p.jpg", video: "https://www.instagram.com/reel/DQzYYdkjL4P/", instagramUrl: "https://www.instagram.com/reel/DQzYYdkjL4P/" },
                    { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dwmoov4de9y.jpg", video: "https://www.instagram.com/p/DWmOov4DE9y/", instagramUrl: "https://www.instagram.com/p/DWmOov4DE9y/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dpwucrljcrk.jpg", video: "https://www.instagram.com/reel/DPWucRLjCrK/", instagramUrl: "https://www.instagram.com/reel/DPWucRLjCrK/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dp9xp-2jj4g.jpg", video: "https://www.instagram.com/reel/DP9Xp-2jJ4g/", instagramUrl: "https://www.instagram.com/reel/DP9Xp-2jJ4g/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-du811vjjb4t.jpg", video: "https://www.instagram.com/reel/DU811VjjB4t/", instagramUrl: "https://www.instagram.com/reel/DU811VjjB4t/" },
                    { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dprsjhwdal-.jpg", video: "https://www.instagram.com/reel/DPrSjHwDAl-/", instagramUrl: "https://www.instagram.com/reel/DPrSjHwDAl-/" }
                ]
            },
            {
                title: "Leasing",
                text: "Posts and designs announcing that leasing has started.",
                media: [
                    { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-duqi9uajg1c.jpg", video: "https://www.instagram.com/p/DUqI9uajG1C/", instagramUrl: "https://www.instagram.com/p/DUqI9uajG1C/" },
                    { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dqpmomejkyl.jpg", video: "https://www.instagram.com/p/DQpMOMEjKYl/", instagramUrl: "https://www.instagram.com/p/DQpMOMEjKYl/" },
                    { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dqcgeqcjivk.jpg", video: "https://www.instagram.com/p/DQCgeQCjIvK/", instagramUrl: "https://www.instagram.com/p/DQCgeQCjIvK/" }
                ]
            }
        ],
        media: [
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dmnui0vsx6k.jpg", video: "https://www.instagram.com/reel/DMnuI0vsx6k/", instagramUrl: "https://www.instagram.com/reel/DMnuI0vsx6k/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dmyasmlmu-n.jpg", video: "https://www.instagram.com/reel/DMyASmlMU-n/", instagramUrl: "https://www.instagram.com/reel/DMyASmlMU-n/" },
            { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dm8s-pdstrf.jpg", video: "https://www.instagram.com/p/DM8S-pDstRf/", instagramUrl: "https://www.instagram.com/p/DM8S-pDstRf/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dnjle-isbva.jpg", video: "https://www.instagram.com/reel/DNJLE_IsbvA/", instagramUrl: "https://www.instagram.com/reel/DNJLE_IsbvA/" },
            { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dnvawgsmn-v.jpg", video: "https://www.instagram.com/p/DNVAWGsMN_v/", instagramUrl: "https://www.instagram.com/p/DNVAWGsMN_v/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dqzyydkjl4p.jpg", video: "https://www.instagram.com/reel/DQzYYdkjL4P/", instagramUrl: "https://www.instagram.com/reel/DQzYYdkjL4P/" },
            { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dwmoov4de9y.jpg", video: "https://www.instagram.com/p/DWmOov4DE9y/", instagramUrl: "https://www.instagram.com/p/DWmOov4DE9y/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dpwucrljcrk.jpg", video: "https://www.instagram.com/reel/DPWucRLjCrK/", instagramUrl: "https://www.instagram.com/reel/DPWucRLjCrK/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dp9xp-2jj4g.jpg", video: "https://www.instagram.com/reel/DP9Xp-2jJ4g/", instagramUrl: "https://www.instagram.com/reel/DP9Xp-2jJ4g/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-du811vjjb4t.jpg", video: "https://www.instagram.com/reel/DU811VjjB4t/", instagramUrl: "https://www.instagram.com/reel/DU811VjjB4t/" },
            { kind: "reel", title: "", format: "9:16", thumbnail: "assets/images/ig-dprsjhwdal-.jpg", video: "https://www.instagram.com/reel/DPrSjHwDAl-/", instagramUrl: "https://www.instagram.com/reel/DPrSjHwDAl-/" },
            { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-duqi9uajg1c.jpg", video: "https://www.instagram.com/p/DUqI9uajG1C/", instagramUrl: "https://www.instagram.com/p/DUqI9uajG1C/" },
            { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dqpmomejkyl.jpg", video: "https://www.instagram.com/p/DQpMOMEjKYl/", instagramUrl: "https://www.instagram.com/p/DQpMOMEjKYl/" },
            { kind: "post", title: "", format: "4:5", thumbnail: "assets/images/ig-dqcgeqcjivk.jpg", video: "https://www.instagram.com/p/DQCgeQCjIvK/", instagramUrl: "https://www.instagram.com/p/DQCgeQCjIvK/" }
        ]
    },
    {
        slug: "haval-campaign",
        title: "Haval Campaign",
        client: "Haval",
        category: "commercial",
        description: "",
        media: [
            { kind: "video", title: "Jolion", format: "16:9", thumbnail: "assets/images/haval-jolion.jpg", video: "https://www.youtube.com/watch?v=knLQV6GD3FY", instagramUrl: "" },
            { kind: "video", title: "Dargo", format: "16:9", thumbnail: "assets/images/haval-dargo.jpg", video: "https://www.youtube.com/watch?v=Aq6wKQ3Kcd8", instagramUrl: "" }
        ]
    },
    {
        slug: "reels",
        title: "Reels — Quick Takes",
        client: "Various clients",
        category: "reels",
        description: "One-off reels, shot and cut fast — for brands, venues and creators.",
        media: [
            { kind: "reel", title: "Fatma", format: "9:16", thumbnail: "assets/images/event-dy9askosrrc.jpg", video: "https://www.instagram.com/reel/DY9AsKOsRRC/", instagramUrl: "https://www.instagram.com/reel/DY9AsKOsRRC/" },
            { kind: "reel", title: "Safat Home", format: "9:16", thumbnail: "assets/images/event-dpyxnadikzu.jpg", video: "https://www.instagram.com/reel/DPYXNadiKzU/", instagramUrl: "https://www.instagram.com/reel/DPYXNadiKzU/" },
            { kind: "reel", title: "Nabila Al Anjari", format: "9:16", thumbnail: "assets/images/personal-brand-dm58ad8srxb.jpg", video: "https://www.instagram.com/reel/DM58AD8srXB/", instagramUrl: "https://www.instagram.com/reel/DM58AD8srXB/" },
            { kind: "reel", title: "Farmland Kuwait", format: "4:5", thumbnail: "assets/images/event-de-0ovrtfyj.jpg", video: "https://www.instagram.com/p/DE_0oVrtFYj/", instagramUrl: "https://www.instagram.com/p/DE_0oVrtFYj/" },
            { kind: "reel", title: "A Line Design Co", format: "9:16", thumbnail: "assets/images/realestate-dqgbppedq6x.jpg", video: "https://www.instagram.com/reel/DQGbPpeDQ6x/", instagramUrl: "https://www.instagram.com/reel/DQGbPpeDQ6x/" },
            { kind: "reel", title: "A Line Design Co", format: "9:16", thumbnail: "assets/images/realestate-dqgz8gcdztl.jpg", video: "https://www.instagram.com/reel/DQGZ8GcDZTl/", instagramUrl: "https://www.instagram.com/reel/DQGZ8GcDZTl/" }
        ]
    }
];
