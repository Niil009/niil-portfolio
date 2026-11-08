// Projects — from the resume. `device` drives the 3D showcase (phone vs laptop).
// Add real screenshots to /public/shots and set `shot` to swap the 3D screen texture.

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  type: "Work" | "Personal";
  company?: string; // employer the work was shipped at
  device: "mobile" | "web";
  featured: boolean; // featured => appears in the 3D showcase
  year: string;
  accent: "accent" | "accent2";
  shot?: string; // e.g. "/shots/eam.png"
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "eam",
    title: "AlfredX — Asset Ops & Field Service",
    tagline: "Offline-first field-service app · 128 screens · 4 locales",
    description:
      "Architected an offline-first layer (OP-SQLite sync queue, repository pattern, retry) so " +
      "technicians never lose data in low-connectivity plants. Unified barcode/QR + RFID into 8 " +
      "asset-lifecycle flows, shipped AI-assisted fault investigation, and 14 Maestro E2E flows.",
    stack: ["React Native CLI", "TypeScript", "Redux", "OP-SQLite", "Maestro"],
    type: "Work",
    company: "Qilin Lab",
    device: "mobile",
    featured: true,
    year: "2026",
    accent: "accent",
    links: [
      { label: "App Store", href: "https://apps.apple.com/in/app/alfredx/id6786228956" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.alfredx" },
    ],
  },
  {
    id: "fintech",
    title: "Score800 — Credit-Score Fintech",
    tagline: "Solo, end-to-end · ~85% faster · DLT OTP · payments",
    description:
      "Took a consumer fintech from zero to Play Store as the sole engineer: Expo app, Hono/Bun API, " +
      "Next.js admin, Prisma/Postgres monorepo on AWS. Cut key screens from 20–30s to 3–5s, integrated " +
      "Cashfree payments with dual verification and regulator-compliant one-tap OTP login.",
    stack: ["React Native Expo", "Hono / Bun", "Next.js", "PostgreSQL", "Prisma", "AWS"],
    type: "Work",
    company: "Qilin Lab",
    device: "mobile",
    featured: true,
    year: "2026",
    accent: "accent2",
    links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.score800.app" }],
  },
  {
    id: "ai-ppt",
    title: "AI Presentation Generator",
    tagline: "Prompt → downloadable .pptx decks",
    description:
      "Live Next.js 14 app using Google Gemini 2.5 Flash that turns natural-language prompts into " +
      "structured, downloadable PowerPoint decks. Deployed on Vercel.",
    stack: ["Next.js 14", "Gemini 2.5 Flash", "Vercel"],
    type: "Personal",
    device: "web",
    featured: true,
    year: "2025",
    accent: "accent",
    links: [{ label: "Live", href: "#" }],
  },
  {
    id: "hr",
    title: "HR Management System",
    tagline: "Role-based HR web + mobile · approval workflows",
    description:
      "Role-based HRMS across React/MUI web and React Native (Expo) mobile with JWT auth. Owned the " +
      "Attendance, Leave and Performance modules with approval workflows, offline-first sync and biometrics. " +
      "Resolved 40+ production issues.",
    stack: ["React", "Material-UI", "React Native Expo", "Node.js", "JWT"],
    type: "Work",
    company: "Hyniva Simplify",
    device: "web",
    featured: false,
    year: "2024",
    accent: "accent2",
  },
  {
    id: "pharma",
    title: "Pharma Operations Platform",
    tagline: "Inventory / order / compliance dashboards + APIs",
    description:
      "Reusable React forms, tables and role-based dashboards for inventory, order and compliance " +
      "workflows, mirrored in a React Native (Expo) app. Built Node/Express REST APIs with JWT, RBAC and " +
      "optimised MongoDB aggregation pipelines.",
    stack: ["React", "React Native Expo", "Node.js", "Express", "MongoDB"],
    type: "Work",
    company: "Cactus Communications",
    device: "web",
    featured: false,
    year: "2025",
    accent: "accent",
  },
  {
    id: "elearning",
    title: "E-Learning Platform",
    tagline: "Courses app with media uploads + tests",
    description:
      "Built an e-learning platform with React/TypeScript/MUI, backed by Jest unit & integration tests. " +
      "Secure Node/Express REST APIs on MongoDB with JWT, Multer + Cloudinary media handling and " +
      "aggregation pipelines.",
    stack: ["React", "TypeScript", "Material-UI", "Node.js", "MongoDB", "Jest"],
    type: "Work",
    company: "Abcedo Technologies",
    device: "web",
    featured: false,
    year: "2023",
    accent: "accent2",
  },
  {
    id: "streaming",
    title: "Video Streaming Platform",
    tagline: "Streaming backend with recommendations",
    description:
      "Node/Express + MongoDB backend with JWT auth, CRUD, aggregation pipelines for recommendations, " +
      "Multer + Cloudinary uploads and scalable streaming support.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    type: "Personal",
    device: "web",
    featured: false,
    year: "2024",
    accent: "accent",
  },
  {
    id: "weather",
    title: "Weather & News Aggregator",
    tagline: "Real-time forecasts + news · geolocation",
    description:
      "Cross-platform React Native (Expo) app with real-time forecasts, geolocation and news feeds " +
      "(OpenWeatherMap + NewsAPI), native modules for GPS/notifications and performance optimisations.",
    stack: ["React Native Expo", "OpenWeatherMap", "NewsAPI"],
    type: "Personal",
    device: "mobile",
    featured: false,
    year: "2024",
    accent: "accent2",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const mobileProjects = projects.filter((p) => p.device === "mobile");
export const webProjects = projects.filter((p) => p.device === "web");
