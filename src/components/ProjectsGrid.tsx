"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { FiArrowUpRight, FiSmartphone, FiMonitor } from "react-icons/fi";

const filters = ["All", "Work", "Personal", "Mobile", "Web"] as const;
type Filter = (typeof filters)[number];

function matches(p: Project, f: Filter) {
  switch (f) {
    case "Work":
      return p.type === "Work";
    case "Personal":
      return p.type === "Personal";
    case "Mobile":
      return p.device === "mobile";
    case "Web":
      return p.device === "web";
    default:
      return true;
  }
}

export function ProjectsGrid() {
  const [f, setF] = useState<Filter>("All");
  const list = projects.filter((p) => matches(p, f));

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((x) => (
          <button
            key={x}
            onClick={() => setF(x)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
              f === x ? "border-accent text-accent" : "border-line text-muted hover:text-ink"
            }`}
          >
            {x}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="glass group flex flex-col rounded-2xl p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="label flex items-center gap-1.5 !text-[0.56rem]">
                  {p.device === "mobile" ? <FiSmartphone size={12} /> : <FiMonitor size={12} />}
                  {p.device}
                  {p.company ? ` · ${p.company}` : ""}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 font-mono text-[0.56rem] uppercase tracking-wider ${
                    p.type === "Work" ? "bg-accent/10 text-accent" : "bg-accent2/10 text-accent2"
                  }`}
                >
                  {p.type}
                </span>
              </div>

              <h3 className="text-lg font-medium leading-snug text-ink">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{p.tagline}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-line px-2 py-0.5 font-mono text-[0.62rem] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {p.links && p.links.length > 0 && (
                <div className="mt-auto flex gap-4 pt-5">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="flex items-center gap-1 text-xs text-ink/70 transition-colors hover:text-accent"
                    >
                      {l.label}
                      <FiArrowUpRight size={12} />
                    </a>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
