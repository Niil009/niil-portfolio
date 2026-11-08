// Skill Constellation data — 8 domains, each with its tech "vectors".
// Straight from the resume's skill groups. The constellation (§9) renders these on a ring.

export type SkillDomain = {
  key: string;
  label: string;
  blurb: string;
  vectors: string[];
};

export const skillDomains: SkillDomain[] = [
  {
    key: "mobile",
    label: "MOBILE",
    blurb: "Offline-first RN apps shipped to both stores.",
    vectors: ["React Native CLI", "Expo", "Redux Toolkit", "OP-SQLite", "App Store / Play"],
  },
  {
    key: "web",
    label: "WEB",
    blurb: "Fast, typed React & Next.js interfaces.",
    vectors: ["React", "Next.js", "TypeScript", "Tailwind", "Material-UI"],
  },
  {
    key: "backend",
    label: "BACKEND",
    blurb: "Typed APIs, auth and validation that fail safe.",
    vectors: ["Node.js", "Express", "Hono / Bun", "REST", "Better-Auth", "Zod"],
  },
  {
    key: "databases",
    label: "DATABASES",
    blurb: "Relational + document data, modeled and indexed.",
    vectors: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose", "SQL"],
  },
  {
    key: "cloud",
    label: "CLOUD / DEVOPS",
    blurb: "Ship it: AWS, Docker, CI, monorepos.",
    vectors: ["AWS EC2/RDS/S3", "Docker", "Nginx", "Railway", "Turborepo"],
  },
  {
    key: "integrations",
    label: "INTEGRATIONS",
    blurb: "Payments, OTP, bureaus, media, AI services.",
    vectors: ["Cashfree", "Razorpay", "Anthropic API", "Gemini", "TTS", "Cloudinary"],
  },
  {
    key: "ai",
    label: "AI",
    blurb: "AI-native dev — I build anything with these.",
    vectors: ["Claude", "GPT / Codex", "Cursor", "Copilot"],
  },
  {
    key: "testing",
    label: "TESTING",
    blurb: "E2E + unit coverage, API contracts.",
    vectors: ["Maestro", "Jest", "i18n CI", "Postman", "Swagger"],
  },
];
