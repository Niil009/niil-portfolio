import type { Project } from "@/data/projects";

/** A CSS-3D phone mockup rendering a mini app screen for a project.
 *  Pure CSS (no WebGL) so the mobile gallery stays light and crisp. */
export function PhoneFrame({ project }: { project: Project }) {
  const accent = project.accent === "accent2" ? "#7fae9b" : "#3ad18a";
  const accent2 = project.accent === "accent2" ? "#3ad18a" : "#7fae9b";

  return (
    <div className="group" style={{ perspective: "1100px" }}>
      <div
        className="relative h-[500px] w-[244px] rounded-[2.4rem] border border-white/10 bg-[#0e1512] p-2.5 transition-transform duration-500 ease-out [transform:rotateY(-14deg)_rotateX(5deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)]"
        style={{ boxShadow: `0 34px 90px -22px ${accent}55` }}
      >
        {/* notch */}
        <div className="absolute left-1/2 top-2.5 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#0e1512]" />

        {/* screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#0e1512,#050a07)]">
          <div
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-40 blur-2xl"
            style={{ background: accent }}
          />

          {/* status bar */}
          <div className="relative flex items-center justify-between px-5 pt-4 font-mono text-[10px] text-white/50">
            <span>9:41</span>
            <span>● ● ●</span>
          </div>

          {/* content */}
          <div className="relative px-5 pt-6">
            <span
              className="rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider"
              style={{ background: `${accent}22`, color: accent }}
            >
              {project.type}
            </span>
            <h4 className="mt-3 text-lg font-semibold leading-tight text-white">{project.title}</h4>
            <p className="mt-2 text-[11px] leading-snug text-white/50">{project.tagline}</p>

            <div className="mt-5 space-y-2.5">
              {project.stack.slice(0, 4).map((s, i) => (
                <div key={s} className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] p-2.5">
                  <span
                    className="h-6 w-6 shrink-0 rounded-lg"
                    style={{ background: i % 2 ? accent2 : accent }}
                  />
                  <span className="text-[11px] text-white/80">{s}</span>
                </div>
              ))}
            </div>

            <div
              className="mt-5 rounded-xl py-2.5 text-center text-[11px] font-semibold text-[#04140c]"
              style={{ background: `linear-gradient(90deg,${accent},${accent2})` }}
            >
              Open app
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
