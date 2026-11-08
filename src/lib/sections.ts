// Single source of truth for section order — used by the telemetry nav,
// scroll-spy and anchor ids. Reorder here and everything follows.

export type Section = {
  id: string;
  index: string; // "001"
  label: string; // telemetry label
  nav: string; // short nav label
};

export const sections: Section[] = [
  { id: "home", index: "001", label: "ENTRY", nav: "Home" },
  { id: "work", index: "002", label: "WORK · 3D", nav: "Work" },
  { id: "mobile", index: "003", label: "MOBILE", nav: "Mobile" },
  { id: "stack", index: "004", label: "STACK", nav: "Stack" },
  { id: "about", index: "005", label: "PROFILE", nav: "About" },
  { id: "toolkit", index: "006", label: "AI TOOLKIT", nav: "AI" },
  { id: "path", index: "007", label: "TRAJECTORY", nav: "Path" },
  { id: "contact", index: "008", label: "CONTACT", nav: "Contact" },
];
