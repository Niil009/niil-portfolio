import { Reveal } from "@/components/ui/Reveal";
import { experience, education, certification } from "@/data/experience";

export function Experience() {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <Reveal>
        <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
          The path.
        </h2>
        <p className="mt-6 max-w-sm text-muted">
          Four roles, two cities, one throughline: shipping software people actually use.
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <div className="label !text-[0.56rem]">EDUCATION</div>
            <div className="mt-1 text-ink">{education.degree}</div>
            <div className="text-sm text-muted">
              {education.school} · {education.detail} · {education.period}
            </div>
          </div>
          <div>
            <div className="label !text-[0.56rem]">CERTIFICATION</div>
            <div className="mt-1 text-ink">{certification.name}</div>
            <div className="text-sm text-muted">
              {certification.school} · {certification.period}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="relative">
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-line" />
        <div className="space-y-10">
          {experience.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.08}>
              <div className="relative pl-10">
                <span className="dot absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent text-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium text-ink">{role.company}</h3>
                  <span className="label !text-[0.56rem]">{role.period}</span>
                </div>
                <div className="mt-0.5 text-sm text-accent/90">{role.title}</div>
                <p className="mt-3 text-sm text-muted">{role.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {role.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-ink/75">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
