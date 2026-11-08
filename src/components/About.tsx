import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { FiMapPin, FiBriefcase, FiZap, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const facts = [
  { Icon: FiMapPin, k: "Based in", v: "Bengaluru, India" },
  { Icon: FiBriefcase, k: "Experience", v: `${profile.experienceYears} years` },
  { Icon: FiZap, k: "Focus", v: "Mobile-first full-stack" },
];

export function About() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
      <Reveal>
        <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
          I build and ship — end to end.
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{profile.summary}</p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line sm:grid-cols-3">
          {facts.map(({ Icon, k, v }) => (
            <div key={k} className="bg-surface/40 p-5">
              <Icon className="mb-3 text-accent" size={18} />
              <div className="label !text-[0.56rem]">{k}</div>
              <div className="mt-1 text-sm text-ink">{v}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="glass sticky top-24 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="display grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 text-2xl text-ink">
              {profile.monogram}
            </div>
            <div>
              <div className="font-medium text-ink">{profile.name}</div>
              <div className="label mt-1 !text-[0.56rem]">{profile.role}</div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="dot h-2 w-2 rounded-full bg-emerald-400 text-emerald-400" />
            <span className="text-sm text-ink/80">Open to full-time &amp; freelance</span>
          </div>

          <div className="hairline my-6" />

          <div className="flex gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="glass grid h-10 w-10 place-items-center rounded-lg text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass grid h-10 w-10 place-items-center rounded-lg text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href={profile.links.resume}
              className="glass flex h-10 flex-1 items-center justify-center gap-2 rounded-lg text-sm text-ink transition-colors hover:text-accent"
            >
              Download CV <FiArrowUpRight />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
