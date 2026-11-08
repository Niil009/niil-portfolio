"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `Portfolio inquiry — ${name || "Hello"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "w-full rounded-lg border border-line bg-surface/40 px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-colors focus:border-accent";

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
      <div>
        <h2 className="display text-[clamp(2.2rem,5vw,4rem)] text-ink">
          Let&apos;s build something people use.
        </h2>
        <p className="mt-6 max-w-md text-muted">
          Open to full-time and freelance work. The fastest way to reach me is email — or grab my CV.
        </p>

        <a
          href={profile.links.email}
          className="mt-8 inline-flex items-center gap-3 text-lg text-ink transition-colors hover:text-accent"
        >
          <FiMail /> {profile.email}
        </a>

        <div className="mt-8 flex gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="glass grid h-11 w-11 place-items-center rounded-lg text-muted transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass grid h-11 w-11 place-items-center rounded-lg text-muted transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href={profile.links.resume}
            className="glass flex h-11 items-center gap-2 rounded-lg px-5 text-sm text-ink transition-colors hover:text-accent"
          >
            Download CV <FiArrowUpRight />
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            className={field}
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className={field}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          className={`${field} min-h-[9rem] resize-none`}
          placeholder="What are you building?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-lg bg-ink py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.01]"
        >
          Send message
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </form>
    </div>
  );
}
