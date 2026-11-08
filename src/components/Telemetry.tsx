"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/sections";

export function Telemetry() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="glass rounded-xl px-4 py-4">
        <div className="mb-3 flex items-center justify-between gap-10">
          <span className="label">TELEMETRY</span>
          <span className="dot h-1.5 w-1.5 rounded-full bg-accent text-accent" />
        </div>
        <ul className="space-y-2.5">
          {sections.map((s) => {
            const on = active === s.id;
            return (
              <li key={s.id}>
                <a href={`#${s.id}`} className="group flex items-center justify-between gap-10">
                  <span
                    className={`font-mono text-[0.62rem] uppercase tracking-[0.2em] transition-colors ${
                      on ? "text-ink" : "text-faint group-hover:text-muted"
                    }`}
                  >
                    {s.index} {s.label}
                  </span>
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 ${
                      on ? "dot bg-accent text-accent" : "bg-faint/50"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
