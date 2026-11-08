"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { featuredProjects } from "@/data/projects";
import { FiArrowUpRight, FiSmartphone, FiMonitor } from "react-icons/fi";

const DeviceScene = dynamic(() => import("@/components/three/DeviceScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <span className="pulse-glow label">INITIALISING 3D SCENE…</span>
    </div>
  ),
});

export function WorkShowcase3D() {
  const [activeId, setActiveId] = useState(featuredProjects[0].id);
  const active = featuredProjects.find((p) => p.id === activeId) ?? featuredProjects[0];

  const phone = useMemo(
    () =>
      active.device === "mobile"
        ? active
        : featuredProjects.find((p) => p.device === "mobile") ?? active,
    [active],
  );
  const laptop = useMemo(
    () =>
      active.device === "web"
        ? active
        : featuredProjects.find((p) => p.device === "web") ?? active,
    [active],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-center">
      {/* 3D stage */}
      <div className="relative h-[440px] overflow-hidden rounded-2xl border border-line bg-bg-2 md:h-[540px]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <DeviceScene phone={phone} laptop={laptop} />
        <span className="label pointer-events-none absolute bottom-4 left-5">
          ▸ DRAG TO ROTATE
        </span>
      </div>

      {/* info + switcher */}
      <div>
        <p className="label mb-5">FEATURED BUILD</p>
        <h3 key={active.id} className="display animate-[fadeUp_0.4s_ease] text-3xl text-ink">
          {active.title}
        </h3>
        {active.company && <p className="label mt-2 !text-accent">{active.company}</p>}
        <p className="mt-4 text-muted">{active.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {active.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-line px-2 py-0.5 font-mono text-[0.62rem] text-muted"
            >
              {s}
            </span>
          ))}
        </div>

        {active.links && active.links.length > 0 && (
          <div className="mt-6 flex gap-5">
            {active.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="flex items-center gap-1 text-sm text-ink transition-colors hover:text-accent"
              >
                {l.label}
                <FiArrowUpRight size={13} />
              </a>
            ))}
          </div>
        )}

        <div className="hairline my-7" />

        <div className="flex flex-col gap-2">
          {featuredProjects.map((p) => {
            const on = active.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                  on ? "border-accent/60 bg-accent/5" : "border-line hover:border-line/80 hover:bg-surface/30"
                }`}
              >
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${on ? "bg-accent/15 text-accent" : "bg-surface/60 text-muted"}`}>
                  {p.device === "mobile" ? <FiSmartphone size={15} /> : <FiMonitor size={15} />}
                </span>
                <span className={`truncate text-sm ${on ? "text-ink" : "text-muted"}`}>{p.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
