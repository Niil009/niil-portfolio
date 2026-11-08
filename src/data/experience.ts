// Professional experience + education — from the resume.

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "Qilin Lab",
    title: "Mobile-First Full-Stack Engineer",
    period: "Jan 2026 — Present",
    location: "Bengaluru",
    summary: "React Native, Node.js & Next.js. Shipped two production apps.",
    highlights: [
      "EAM & Field-Service app live on iOS + Android — offline-first, 16 modules, 128 screens, 4 locales",
      "Solo-built a consumer credit-score fintech end-to-end: app, API, admin, payments, DLT OTP, AWS",
      "Cut key feature screens from ~20–30s to 3–5s (~85% faster)",
    ],
  },
  {
    company: "Cactus Communications",
    title: "Full-Stack Developer (Frontend-Focused) · Contract",
    period: "May 2025 — Sep 2025",
    location: "Remote",
    summary: "React.js, React Native (Expo) & Node.js for a pharma operations platform.",
    highlights: [
      "Reusable forms, tables and role-based dashboards for inventory, orders and compliance",
      "Node/Express REST APIs with JWT, RBAC and optimised MongoDB aggregation pipelines",
      "Mirrored the same features in the React Native (Expo) app",
    ],
  },
  {
    company: "Hyniva Simplify Enterprise",
    title: "Software Engineer · React & React Native",
    period: "Aug 2024 — Apr 2025",
    location: "Bengaluru",
    summary: "Role-based HR Management System across web and mobile.",
    highlights: [
      "Owned Attendance, Leave and Performance modules with approval workflows",
      "Offline-first architecture, background sync and biometrics",
      "Resolved 40+ production issues; improved perf with React.memo + Redux Toolkit",
    ],
  },
  {
    company: "Abcedo Technologies",
    title: "Web Developer · React & Node.js",
    period: "Jun 2023 — Jul 2024",
    location: "Mumbai",
    summary: "E-learning platform, frontend to backend.",
    highlights: [
      "Built the platform with React/TypeScript/MUI, backed by Jest unit + integration tests",
      "Secure Node/Express REST APIs on MongoDB with JWT, Multer + Cloudinary",
      "Validation middleware, centralised error handling and query optimisation",
    ],
  },
];

export const education = {
  degree: "B.Sc. Chemistry",
  school: "Utkal University",
  detail: "CGPA 7.9",
  period: "2019 — 2022",
};

export const certification = {
  name: "MERN Full Stack Development",
  school: "JS Spider",
  period: "2022 — 2023",
};

// The AI toolbelt — the "I can build anything" positioning, backed by resume proof.
export const aiToolkit = {
  tools: ["Claude", "GPT / Codex", "Copilot", "Cursor", "Gemini", "Anthropic API"],
  proof: [
    "AI-assisted fault investigation with guided troubleshooting (EAM app)",
    "AI credit-explainer videos via TTS (OpenAI / ElevenLabs / Sarvam)",
    "AI-powered Hindi translation inside the admin panel",
    "This portfolio — designed & built with an AI agent",
  ],
};
