/* ============================================================
   ALL EDITABLE CONTENT LIVES HERE.  index.html never needs editing for new work.
   `/add` (see .claude/commands/add.md) only appends to portfolioItems.

   Item fields
     title         string   project name
     client        string   brand / client line shown above the title
     category      string   commercial | reels | events | photo
     format        string   "16:9" | "9:16" | "1:1" | "4:5"   (decides card shape automatically)
     featured      boolean  optional – only for ONE 16:9 item: makes it wide (8 cols) in "All"
     thumbnail     string   path like "assets/images/leica.jpg" (or a URL)
     video         string   YouTube / Vimeo / Instagram URL, or a local "assets/videos/x.mp4"  ("" for photos)
     instagramUrl  string   link for the "Verify on Instagram" button ("" to hide)
     views         string   badge text e.g. "1.2M Views" ("" to show the category instead)
     placeholder   boolean  true = demo content, remove once real media is added
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

const portfolioItems = [
    {
        title: "جرائم الحب والخيانة | بودكاست قصة وقانون حلقة 1 | المحامي محمد حمزة عباس",
        client: "المحامي محمد حمزة عباس",
        category: "events", format: "16:9", featured: true,
        thumbnail: "assets/images/podcast-cbnylpunk0o.jpg",
        video: "https://www.youtube.com/watch?v=cBNyLpUnK0o", instagramUrl: "", views: ""
    },
    {
        title: "The Gate Mall — Reel",
        client: "The Gate Mall",
        category: "events", format: "9:16",
        thumbnail: "assets/images/event-daawtpkqlm2.jpg",
        video: "https://www.instagram.com/reel/DaawTPkqLm2/", instagramUrl: "https://www.instagram.com/reel/DaawTPkqLm2/", views: ""
    },
    {
        title: "Fatma — Reel",
        client: "Fatma",
        category: "events", format: "9:16",
        thumbnail: "assets/images/event-dy9askosrrc.jpg",
        video: "https://www.instagram.com/reel/DY9AsKOsRRC/", instagramUrl: "https://www.instagram.com/reel/DY9AsKOsRRC/", views: ""
    },
    {
        title: "Farmland Kuwait — Post",
        client: "Farmland Kuwait",
        category: "events", format: "4:5",
        thumbnail: "assets/images/event-de-0ovrtfyj.jpg",
        video: "https://www.instagram.com/p/DE_0oVrtFYj/", instagramUrl: "https://www.instagram.com/p/DE_0oVrtFYj/", views: ""
    },
    {
        title: "جدوى #7 - من الأزمات إلى القمم: فن المخاطرة واغتنام الفرص - مع عادل الغانم",
        client: "Jadwa Podcast -  بودكاست جدوى",
        category: "events", format: "16:9",
        thumbnail: "assets/images/podcast-tzxy7btkdqs.jpg",
        video: "https://www.youtube.com/watch?v=tZxY7BtkDQs", instagramUrl: "", views: ""
    },
    {
        title: "Safat Home — Reel",
        client: "Safat Home",
        category: "events", format: "9:16",
        thumbnail: "assets/images/event-dpyxnadikzu.jpg",
        video: "https://www.instagram.com/reel/DPYXNadiKzU/", instagramUrl: "https://www.instagram.com/reel/DPYXNadiKzU/", views: ""
    },
    {
        title: "Gulf Cryo — Reel",
        client: "Gulf Cryo",
        category: "events", format: "9:16",
        thumbnail: "assets/images/event-do57rfhj-f6.jpg",
        video: "https://www.instagram.com/reel/DO57rFhj_F6/", instagramUrl: "https://www.instagram.com/reel/DO57rFhj_F6/", views: ""
    },
    {
        title: "MAD Recovery Center — Reel",
        client: "MAD Recovery Center",
        category: "reels", format: "9:16",
        thumbnail: "assets/images/personal-brand-dbn8-x8djbr.jpg",
        video: "https://www.instagram.com/reel/DbN8-X8DjBR/", instagramUrl: "https://www.instagram.com/reel/DbN8-X8DjBR/", views: ""
    },
    {
        title: "بودكاست بثينة: الحلقة (16) - أقوالكم..أقداركم - السيدة : زيزي بوشهري",
        client: "Buthaina Podcast",
        category: "events", format: "16:9",
        thumbnail: "assets/images/podcast-4ooiml8szha.jpg",
        video: "https://www.youtube.com/watch?v=4oOIMl8SzHA", instagramUrl: "", views: ""
    },
    {
        title: "Oru Roasters — Reel",
        client: "Oru Roasters",
        category: "reels", format: "9:16",
        thumbnail: "assets/images/personal-brand-drkcqapjx-h.jpg",
        video: "https://www.instagram.com/reel/DRkcqAPjX_h/", instagramUrl: "https://www.instagram.com/reel/DRkcqAPjX_h/", views: ""
    },
    {
        title: "Oru Roasters — Reel",
        client: "Oru Roasters",
        category: "reels", format: "9:16",
        thumbnail: "assets/images/personal-brand-dqhkfocdui-.jpg",
        video: "https://www.instagram.com/reel/DQhKFOcDUi_/", instagramUrl: "https://www.instagram.com/reel/DQhKFOcDUi_/", views: ""
    },
    {
        title: "Shahad Al Momen — Reel",
        client: "Shahad Al Momen",
        category: "reels", format: "9:16",
        thumbnail: "assets/images/personal-brand-dhhk1hyswse.jpg",
        video: "https://www.instagram.com/reel/DHHK1HYswsE/", instagramUrl: "https://www.instagram.com/reel/DHHK1HYswsE/", views: ""
    },
    {
        title: "لقاء أ. بثينة عبدالله مجاربي في برنامج الدوانية على راديو مرينا أف أم بتاريخ 25/07/2024",
        client: "Buthaina Podcast",
        category: "events", format: "16:9",
        thumbnail: "assets/images/podcast-q6h8oumys8s.jpg",
        video: "https://www.youtube.com/watch?v=Q6h8OUmYS8s", instagramUrl: "", views: ""
    },
    {
        title: "Shahad Al Momen — Reel",
        client: "Shahad Al Momen",
        category: "reels", format: "9:16",
        thumbnail: "assets/images/personal-brand-djuqihisa50.jpg",
        video: "https://www.instagram.com/reel/DJUQIHisa50/", instagramUrl: "https://www.instagram.com/reel/DJUQIHisa50/", views: ""
    },
    {
        title: "Nabila Al Anjari — Reel",
        client: "Nabila Al Anjari",
        category: "reels", format: "9:16",
        thumbnail: "assets/images/personal-brand-dm58ad8srxb.jpg",
        video: "https://www.instagram.com/reel/DM58AD8srXB/", instagramUrl: "https://www.instagram.com/reel/DM58AD8srXB/", views: ""
    },
    {
        title: "The Gate Mall — Reel",
        client: "The Gate Mall",
        category: "reels", format: "9:16",
        thumbnail: "assets/images/ugc-daw4xdqqfnn.jpg",
        video: "https://www.instagram.com/reel/DaW4XDqqfnn/", instagramUrl: "https://www.instagram.com/reel/DaW4XDqqfnn/", views: ""
    },
    {
        title: "كيف تحولت همة رجل واحد إلى مؤسسة بـ12 ألف موظف؟ | بودكاست على متمه - عبد الله السميط",
        client: "Atheer - أثير",
        category: "events", format: "16:9",
        thumbnail: "assets/images/podcast-x3buubvnxia.jpg",
        video: "https://www.youtube.com/watch?v=X3BUuBVNXIA", instagramUrl: "", views: ""
    },
    {
        title: "The Gate Mall — Reel",
        client: "The Gate Mall",
        category: "reels", format: "9:16",
        thumbnail: "assets/images/ugc-daaw55zkhsm.jpg",
        video: "https://www.instagram.com/reel/Daaw55ZKhSM/", instagramUrl: "https://www.instagram.com/reel/Daaw55ZKhSM/", views: ""
    },
    {
        title: "The Gate Mall — Reel",
        client: "The Gate Mall",
        category: "reels", format: "9:16",
        thumbnail: "assets/images/ugc-dbv3f9skpze.jpg",
        video: "https://www.instagram.com/reel/DbV3F9SKPZe/", instagramUrl: "https://www.instagram.com/reel/DbV3F9SKPZe/", views: ""
    },
    {
        title: "A Line Design Co — Reel",
        client: "A Line Design Co",
        category: "reels", format: "9:16",
        thumbnail: "assets/images/realestate-dqgbppedq6x.jpg",
        video: "https://www.instagram.com/reel/DQGbPpeDQ6x/", instagramUrl: "https://www.instagram.com/reel/DQGbPpeDQ6x/", views: ""
    },
    {
        title: "A Line Design Co — Reel",
        client: "A Line Design Co",
        category: "reels", format: "9:16",
        thumbnail: "assets/images/realestate-dqgz8gcdztl.jpg",
        video: "https://www.instagram.com/reel/DQGZ8GcDZTl/", instagramUrl: "https://www.instagram.com/reel/DQGZ8GcDZTl/", views: ""
    },
    {
        title: "Wajhat Al Seif — Reel",
        client: "Wajhat Al Seif",
        category: "reels", format: "9:16",
        thumbnail: "assets/images/realestate-dprsjhwdal-.jpg",
        video: "https://www.instagram.com/reel/DPrSjHwDAl-/", instagramUrl: "https://www.instagram.com/reel/DPrSjHwDAl-/", views: ""
    }
];
