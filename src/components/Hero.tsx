"use client";

import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-24 md:px-10"
    >
      {/* live 3D backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 z-0 hidden aspect-square w-[46rem] -translate-y-1/2 lg:block xl:right-[2%]"
      >
        <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle,rgba(127,174,155,0.16),transparent_60%)]" />
        <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(58,209,138,0.12),transparent_60%)]" />
        <HeroScene />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-[1600px]"
      >
        <motion.p variants={item} className="label mb-8">
          001 / ENTRY — PORTFOLIO v1.0
        </motion.p>

        <motion.h1 variants={item} className="display text-[clamp(3rem,11vw,10rem)] text-ink">
          Mobile-first
          <br />
          full-stack,
          <br />
          shipped.
        </motion.h1>

        <motion.p variants={item} className="mt-10 max-w-xl text-lg leading-relaxed text-muted">
          <span className="text-ink">{profile.name}</span> — React Native, React &amp; Node. Two
          products live on the App Store &amp; Google Play, built end-to-end and AI-accelerated.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group relative overflow-hidden rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-2">
              View the work
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </a>
          <a
            href={profile.links.resume}
            className="rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-line sm:grid-cols-4"
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="bg-surface/40 px-5 py-5">
              <div className="display text-2xl text-ink">{s.value}</div>
              <div className="label mt-1 !text-[0.6rem] !tracking-[0.12em]">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="label !text-[0.58rem]">SCROLL</span>
        <span className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}

function HeroFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="pulse-glow display text-7xl text-ink/80 [text-shadow:0_0_45px_rgba(58,209,138,0.5)]">
        {profile.monogram}
      </div>
    </div>
  );
}
