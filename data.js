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
    email: "contact@adamaladdin.com"
};

const portfolioItems = [
    {
        title: "Leica Store — 360 Mall Visual Reel",
        client: "Leica Store Kuwait",
        category: "commercial", format: "16:9", featured: true,
        thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
        video: "", instagramUrl: "", views: "", placeholder: true
    },
    {
        title: "The Gate Mall — Walking Activation",
        client: "The Gate Mall x Sportstap",
        category: "reels", format: "9:16",
        thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
        video: "", instagramUrl: "https://instagram.com/", views: "High Engagement", placeholder: true
    },
    {
        title: "Something to Consider — Podcast Production",
        client: "Multi-Cam Video Editing",
        category: "events", format: "16:9",
        thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
        video: "", instagramUrl: "", views: "", placeholder: true
    },
    {
        title: "Gulf Cryo — Multi-Cam Seminar Coverage",
        client: "Gulf Cryo Corporate",
        category: "events", format: "16:9",
        thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
        video: "", instagramUrl: "", views: "", placeholder: true
    },
    {
        title: "Minimal Product & Lifestyle Series",
        client: "Studio & Brand Photography",
        category: "photo", format: "1:1",
        thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        video: "", instagramUrl: "https://instagram.com/", views: "", placeholder: true
    },
    {
        title: "Broxel Aluminium — Brand Showcase",
        client: "Social Media Campaign",
        category: "reels", format: "9:16",
        thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
        video: "", instagramUrl: "https://instagram.com/", views: "Viral Reel", placeholder: true
    }
];
