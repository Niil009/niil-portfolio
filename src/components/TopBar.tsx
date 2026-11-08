"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const p = (n: number) => String(n).padStart(2, "0");
    const tick = () => {
      const d = new Date();
      setTime(`${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())}Z`);
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3.5 md:px-10">
        <a href="#home" className="flex items-center gap-1.5" aria-label="Home">
          <span className="display text-xl leading-none">{profile.monogram}</span>
          <span className="text-accent text-lg leading-none">✕</span>
        </a>

        <div className="label hidden items-center gap-2 md:flex">
          <span className="dot h-1.5 w-1.5 rounded-full bg-emerald-400 text-emerald-400" />
          <span>SYS · ONLINE {time || "--:--:--Z"}</span>
        </div>

        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm text-ink/90 transition-colors hover:border-accent hover:text-accent"
        >
          Let&apos;s talk
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </header>
  );
}
