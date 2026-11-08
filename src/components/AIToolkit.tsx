import { Reveal } from "@/components/ui/Reveal";
import { aiToolkit } from "@/data/experience";
import { FiCheck } from "react-icons/fi";

export function AIToolkit() {
  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
        <Reveal>
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
            AI-native, production-grade.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-muted">
            I design, build and ship real software by leveraging modern AI tooling — moving from
            prompt to Play Store faster, without cutting corners on architecture, performance or
            security.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-wrap gap-3">
          {aiToolkit.tools.map((t) => (
            <span
              key={t}
              className="glass rounded-full px-5 py-2 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {aiToolkit.proof.map((p, i) => (
          <Reveal key={p} delay={0.1 + i * 0.06}>
            <div className="glass flex items-start gap-3 rounded-xl p-5">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                <FiCheck size={14} />
              </span>
              <span className="text-sm text-ink/85">{p}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
