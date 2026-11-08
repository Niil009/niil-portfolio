import type { ReactNode } from "react";
import { sections } from "@/lib/sections";

type SectionProps = {
  id: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
  bare?: boolean; // skip the numbered header + hairline
};

export function Section({ id, kicker, children, className = "", bare = false }: SectionProps) {
  const meta = sections.find((s) => s.id === id);

  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32 ${className}`}
    >
      {!bare && meta && (
        <div className="mb-8 flex items-end justify-between gap-6">
          <span className="label">
            {meta.index} / {meta.label}
          </span>
          {kicker && <span className="label hidden text-right sm:block">{kicker}</span>}
        </div>
      )}
      {!bare && <div className="hairline mb-14" />}
      {children}
    </section>
  );
}
