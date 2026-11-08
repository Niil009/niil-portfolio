// Core profile — sourced from Dibya's resume. Edit freely.

export const profile = {
  name: "Dibya Ranjan Sahu",
  monogram: "DR",
  role: "Mobile-First Full-Stack Engineer",
  roleLine: "React Native · React · Node",
  // Headline for the hero
  tagline: "AI-native engineer shipping production apps — from prompt to Play Store.",
  location: "Bengaluru, KA · India",
  email: "dibyaranjansahu8144@gmail.com",
  phone: "+91 8144 573 052",
  experienceYears: "3.5+",

  links: {
    github: "https://github.com/Niil009",
    linkedin: "https://www.linkedin.com/in/dibya-sahu-7283b4353/",
    email: "mailto:dibyaranjansahu8144@gmail.com",
    resume: "/Dibya_Ranjan_Sahu_Resume.pdf", // drop the PDF in /public to wire this up
  },

  summary:
    "Mobile-first full-stack engineer with 3.5+ years building and shipping React Native " +
    "(CLI & Expo) apps to the App Store and Google Play, backed by React, Next.js and Node on " +
    "the web and API side. I shipped an offline-first, multi-locale enterprise field-service app " +
    "and solo-built a consumer credit-score fintech end-to-end — app, API, admin, payments, " +
    "DLT-compliant OTP and AWS deployment.",

  // Short, punchy proof points for the hero / about band
  stats: [
    { value: "3.5+", label: "Years shipping" },
    { value: "2", label: "Apps live in stores" },
    { value: "~85%", label: "Faster load time" },
    { value: "128", label: "Screens · 4 locales" },
  ],
} as const;

export type Profile = typeof profile;
