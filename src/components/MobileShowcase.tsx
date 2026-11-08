import { Reveal } from "@/components/ui/Reveal";
import { mobileProjects } from "@/data/projects";
import { PhoneFrame } from "@/components/PhoneFrame";
import { FiSmartphone } from "react-icons/fi";

export function MobileShowcase() {
  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
        <Reveal>
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
            Built for the phone first.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-muted">
            Mobile is where I started and where I ship. Offline-first React Native (CLI &amp; Expo),
            two apps live on iOS &amp; Android, 128 screens across 4 locales. Hover a device to see
            it straighten up.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 flex snap-x gap-10 overflow-x-auto pb-6 lg:flex-wrap lg:justify-center lg:gap-x-8 lg:gap-y-16 lg:overflow-visible">
        {mobileProjects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.1} className="flex shrink-0 snap-center flex-col items-center">
            <PhoneFrame project={p} />
            <div className="mt-6 max-w-[244px] text-center">
              <h3 className="font-medium text-ink">{p.title}</h3>
              {p.company && <p className="label mt-1 !text-[0.54rem]">{p.company}</p>}
              <p className="mt-1 text-xs text-muted">{p.stack.slice(0, 3).join(" · ")}</p>
            </div>
          </Reveal>
        ))}

        {/* extensible slot — future mobile projects auto-appear from projects.ts */}
        <Reveal
          delay={mobileProjects.length * 0.1}
          className="flex shrink-0 snap-center flex-col items-center"
        >
          <div className="flex h-[500px] w-[244px] flex-col items-center justify-center rounded-[2.4rem] border border-dashed border-line text-center">
            <FiSmartphone className="mb-3 text-faint" size={28} />
            <span className="label">MORE APPS</span>
            <span className="mt-1 text-xs text-faint">coming soon</span>
          </div>
          <div className="mt-6 text-center">
            <h3 className="font-medium text-muted">Your next build</h3>
            <p className="mt-1 text-xs text-faint">just add it to projects.ts</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
