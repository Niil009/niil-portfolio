import { profile } from "@/data/profile";
import { sections } from "@/lib/sections";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-line px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-1.5">
              <span className="display text-xl">{profile.monogram}</span>
              <span className="text-lg text-accent">✕</span>
            </a>
            <p className="mt-4 text-sm text-muted">{profile.role} — {profile.location}</p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-3" aria-label="Footer">
            {sections.slice(1).map((s) => (
              <a key={s.id} href={`#${s.id}`} className="label transition-colors hover:text-accent">
                {s.nav}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="glass grid h-10 w-10 place-items-center rounded-lg text-muted transition-colors hover:text-accent" aria-label="GitHub">
              <FaGithub size={17} />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="glass grid h-10 w-10 place-items-center rounded-lg text-muted transition-colors hover:text-accent" aria-label="LinkedIn">
              <FaLinkedinIn size={17} />
            </a>
            <a href={profile.links.email} className="glass grid h-10 w-10 place-items-center rounded-lg text-muted transition-colors hover:text-accent" aria-label="Email">
              <FiMail size={17} />
            </a>
          </div>
        </div>

        <div className="hairline" />

        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <span className="label">© 2026 {profile.name.toUpperCase()}</span>
          <span className="label">BUILT WITH NEXT.JS · THREE.JS · AI</span>
        </div>
      </div>
    </footer>
  );
}
