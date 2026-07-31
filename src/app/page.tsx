"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import {
  ArrowUpRight,
  Envelope,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import {
  siPython,
  siGo,
  siPytorch,
  siLangchain,
  siLanggraph,
  siFastapi,
  siPostgresql,
  siRedis,
  siMongodb,
  siDocker,
  siKubernetes,
  siReact,
  siSpringboot,
  siSpringsecurity,
  siSqlalchemy,
  siNeo4j,
  siNumpy,
  siPandas,
  siScikitlearn,
  siGit,
  siLinux,
  siVercel,
} from "simple-icons";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const EASE = "ease-[cubic-bezier(0.32,0.72,0,1)]";

function SiIcon({
  path,
  title,
  className,
}: {
  path: string;
  title: string;
  className?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      aria-label={title}
    >
      <path fill="currentColor" d={path} />
    </svg>
  );
}

const STACK = [
  {
    category: "languages",
    note: "The core",
    items: [
      { name: "Python", icon: siPython },
      { name: "Go", icon: siGo },
      { name: "Java", icon: null },
      { name: "C++", icon: null },
      { name: "SQL", icon: null },
    ],
  },
  {
    category: "ai / ml",
    note: "Agents & training",
    items: [
      { name: "LangGraph", icon: siLanggraph },
      { name: "LangChain", icon: siLangchain },
      { name: "PyTorch", icon: siPytorch },
      { name: "NumPy", icon: siNumpy },
      { name: "pandas", icon: siPandas },
      { name: "scikit-learn", icon: siScikitlearn },
    ],
  },
  {
    category: "backend",
    note: "APIs & services",
    items: [
      { name: "FastAPI", icon: siFastapi },
      { name: "Spring Boot", icon: siSpringboot },
      { name: "Spring Security", icon: siSpringsecurity },
      { name: "React", icon: siReact },
      { name: "SQLAlchemy", icon: siSqlalchemy },
      { name: "gRPC", icon: null },
    ],
  },
  {
    category: "data",
    note: "Storage & memory",
    items: [
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MySQL", icon: null },
      { name: "Redis", icon: siRedis },
      { name: "MongoDB", icon: siMongodb },
      { name: "Neo4j", icon: siNeo4j },
    ],
  },
  {
    category: "infra",
    note: "Ship & scale",
    items: [
      { name: "Docker", icon: siDocker },
      { name: "Kubernetes", icon: siKubernetes },
      { name: "Git", icon: siGit },
      { name: "Linux", icon: siLinux },
      { name: "Vercel", icon: siVercel },
    ],
  },
];

const PROJECTS = [
  {
    title: "LoreSpring",
    subtitle: "Multi-Agent Narrative Generation System",
    description:
      "An AI narrative platform orchestrating 6 specialized agents through a stateful LangGraph workflow for end-to-end chapter generation, critique, and revision. Persistent execution with Postgres checkpointing and HITL interrupts.",
    highlights: [
      "6 AI agents (Writer, Continuity, Reviewer, Summarizer, Lorekeeper) via LangGraph",
      "Tenant-isolated retrieval with LightRAG and Neo4j graph memory",
      "JWT auth, Alembic migrations, LangSmith observability",
    ],
    tags: ["Python", "FastAPI", "LangGraph", "LightRAG", "Neo4j"],
    link: "https://github.com/N1CK99925/LoreSpring",
    liveLink: "https://lorespring.vercel.app",
    image: "/LoreSpring.png",
  },
  {
    title: "ARES",
    subtitle: "Multi-Agent Combat Simulation",
    description:
      "5-zone tactical RL simulator with a commander-agnostic tick engine. Self-play Double DQN with per-zone Q-heads on a 5-zone adjacency graph, reaching a 96% win rate against a random baseline.",
    highlights: [
      "Commander-agnostic tick engine supporting LLM or DQN commanders",
      "Partial-observation state encoder (12-dim) with turn-order alternation",
      "96% win rate with Huber loss and gradient clipping (Wilson CI, 4 seeds)",
    ],
    tags: ["Python", "PyTorch", "RL", "LLMs"],
    link: "https://github.com/N1CK99925/ARES",
    image: "https://picsum.photos/seed/ares-sim/1600/900",
  },
  {
    title: "Learning Management System",
    subtitle: "Full-Stack LMS",
    description:
      "Full-stack LMS with a Spring Boot REST backend and React frontend. Secured with Spring Security and JWT for stateless, role-based authentication, and rate-limited with Bucket4j backed by Redis.",
    highlights: [
      "Spring Security + JWT for stateless role-based auth",
      "API rate limiting with Bucket4j + Redis",
      "Docker Compose (Frontend/Nginx, Spring Boot, Redis) with health checks",
    ],
    tags: ["Spring Boot", "React", "PostgreSQL", "Redis", "Docker"],
    link: "https://github.com/N1CK99925/Learning-Management-System",
    image: "https://picsum.photos/seed/lms-edu/1600/900",
  },
];

const MARQUEE = [
  "Multi-Agent Systems",
  "LLM Inference",
  "Vector Databases",
  "LangGraph",
  "RL Agents",
  "Distributed Systems",
  "GPU Clusters",
  "Production ML",
];

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
];

function MonoTag({
  children,
  prefix = "$",
  className,
}: {
  children: ReactNode;
  prefix?: string;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55",
        className,
      )}
    >
      <span className="text-accent">{prefix}</span>
      {children}
    </span>
  );
}

function Cursor() {
  return (
    <span
      aria-hidden="true"
      className="cursor-blink inline-block h-[0.72em] w-[0.5em] translate-y-[0.08em] bg-accent"
    />
  );
}

function Panel({
  label,
  children,
  className,
  innerClassName,
}: {
  label?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-[1.75rem] bg-ink/[0.04] p-1 ring-1 ring-line",
        className,
      )}
    >
      <div
        className={cx(
          "relative h-full rounded-[calc(1.75rem-0.375rem)] border border-line bg-white p-6 sm:p-7",
          innerClassName,
        )}
      >
        {label && (
          <span className="absolute -top-[0.8125rem] left-6 bg-background px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            {label}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}

function Corners({ accent = false }: { accent?: boolean }) {
  const tone = accent ? "text-accent" : "text-ink/35";
  const base =
    "pointer-events-none absolute font-mono text-sm leading-none";
  return (
    <>
      <span aria-hidden="true" className={cx(base, tone, "left-2.5 top-2.5")}>
        ┌
      </span>
      <span
        aria-hidden="true"
        className={cx(base, tone, "right-2.5 top-2.5")}
      >
        ┐
      </span>
      <span
        aria-hidden="true"
        className={cx(base, tone, "bottom-2.5 left-2.5")}
      >
        └
      </span>
      <span
        aria-hidden="true"
        className={cx(base, tone, "bottom-2.5 right-2.5")}
      >
        ┘
      </span>
    </>
  );
}

function Pill({
  href,
  children,
  variant = "solid",
  className,
  onClick,
  target,
  rel,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={cx(
        "group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-medium transition-all duration-700 active:scale-[0.98]",
        EASE,
        variant === "solid"
          ? "bg-accent text-white hover:bg-[#1d4ed8]"
          : "border border-line bg-white text-ink hover:border-ink/25 hover:bg-ink/[0.02]",
        className,
      )}
    >
      <span>{children}</span>
      <span
        className={cx(
          "flex h-9 w-9 items-center justify-center rounded-full transition-all duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105",
          EASE,
          variant === "solid"
            ? "bg-white/20 text-white"
            : "bg-ink/[0.05] text-ink",
        )}
      >
        <ArrowUpRight weight="light" className="h-4 w-4" />
      </span>
    </a>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={
        reduce ? false : { opacity: 0, y: 28, filter: "blur(8px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: [0.32, 0.72, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(20,22,26,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 65% at 50% 0%, black 25%, transparent 78%)",
          maskImage:
            "radial-gradient(ellipse 90% 65% at 50% 0%, black 25%, transparent 78%)",
        }}
      />
      <div className="absolute -top-40 left-[10%] h-[26rem] w-[26rem] rounded-full bg-blue-300/30 blur-[130px]" />
      <div className="absolute bottom-[-10%] right-[-8%] h-[24rem] w-[24rem] rounded-full bg-sky-200/50 blur-[120px]" />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={reduce ? false : { opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
        className="fixed inset-x-0 top-5 z-40 flex justify-center px-4"
      >
        <nav
          aria-label="Primary"
          className="flex w-max items-center gap-1 rounded-full border border-line bg-white/70 p-1.5 shadow-[0_12px_40px_-16px_rgba(20,22,26,0.25)] backdrop-blur-2xl"
        >
          <a
            href="#top"
            aria-label="Home"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/[0.04] ring-1 ring-line transition-all duration-500 hover:bg-ink/[0.08]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-ink"
              aria-hidden="true"
            >
              <path
                d="M12 2L2 7v10l10 5 10-5V7L12 2z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M12 2v20M2 7l10 5m0 0l10-5M12 12v10"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div className="mx-2 hidden h-5 w-px bg-line md:block" />

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 font-mono text-[12px] text-ink/55 transition-all duration-500 hover:bg-ink/[0.04] hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:harshitbatra2005@gmail.com"
            className="group hidden items-center gap-2 rounded-full bg-accent py-1.5 pl-4 pr-1.5 font-mono text-[12px] font-medium text-white transition-all duration-500 hover:bg-[#1d4ed8] md:flex"
          >
            Contact
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight weight="light" className="h-3.5 w-3.5" />
            </span>
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-ink/[0.04] ring-1 ring-line transition-all duration-500 hover:bg-ink/[0.08] md:hidden"
          >
            <span
              className={cx(
                "absolute h-px w-4 bg-ink transition-all duration-500",
                EASE,
                open ? "rotate-45" : "-translate-y-[3px]",
              )}
            />
            <span
              className={cx(
                "absolute h-px w-4 bg-ink transition-all duration-500",
                EASE,
                open ? "-rotate-45" : "translate-y-[3px]",
              )}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-30 flex flex-col justify-end bg-[#f6f5f2]/90 px-6 pb-20 backdrop-blur-3xl md:hidden"
          >
            <div className="space-y-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.08 + i * 0.08,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="group flex items-center justify-between px-2 py-4 font-display text-4xl font-medium tracking-tight text-ink/85"
                >
                  {link.label}
                  <ArrowUpRight
                    weight="light"
                    className="h-8 w-8 text-ink/20 transition-colors duration-500 group-hover:text-ink/60"
                  />
                </motion.a>
              ))}
              <motion.a
                href="mailto:harshitbatra2005@gmail.com"
                onClick={close}
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{
                  duration: 0.6,
                  delay: 0.32,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-accent py-4 font-mono text-[15px] font-medium text-white"
              >
                Get in touch
                <ArrowUpRight weight="light" className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative flex overflow-hidden border-y border-line py-5">
      <div className="animate-marquee flex w-max shrink-0 items-center gap-8 pr-8">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.25em] text-ink/30"
          >
            {item}
            <span className="text-accent/40">│</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Terminal() {
  const lines = [
    { prompt: true, text: "whoami", output: "harshit-batra" },
    { prompt: true, text: "./engineer --focus", output: "ai-infra" },
    {
      prompt: true,
      text: "./engineer --stack",
      output: "python · go · fastapi · langgraph",
    },
    { prompt: true, text: "./engineer --status", output: "open-to-work", hot: true },
  ];

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-12 rounded-full bg-blue-300/30 blur-[110px]"
      />
      <Panel>
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          </div>
          <span className="font-mono text-[11px] text-ink/35">
            zsh — engineer.sh
          </span>
        </div>
        <div className="pt-5 font-mono text-[13px] leading-[1.95]">
          {lines.map((line, i) => (
            <div key={i}>
              <div>
                {line.prompt && (
                  <span className="mr-2 select-none text-accent">$</span>
                )}
                <span className={line.hot ? "text-accent" : "text-ink/80"}>
                  {line.text}
                </span>
              </div>
              {line.output && (
                <div
                  className={cx(
                    "pl-[1.1rem]",
                    line.hot ? "font-medium text-accent" : "text-ink/45",
                  )}
                >
                  {line.output}
                </div>
              )}
            </div>
          ))}
          <div className="mt-1 flex items-center">
            <span className="mr-2 select-none text-accent">$</span>
            <Cursor />
          </div>
        </div>
      </Panel>

      <div className="absolute -right-4 -top-6 rotate-2 rounded-lg border border-line bg-white px-3.5 py-2.5 font-mono text-[11px] text-ink/60 shadow-[0_16px_40px_-20px_rgba(37,99,235,0.45)] sm:-right-8">
        <span className="text-accent">[</span>96%<span className="text-accent">]</span> ARES win rate
      </div>
      <div className="absolute -bottom-6 -left-4 -rotate-2 rounded-lg border border-line bg-white px-3.5 py-2.5 font-mono text-[11px] text-ink/60 shadow-[0_16px_40px_-20px_rgba(20,22,26,0.35)] sm:-left-8">
        <span className="text-accent">[</span>6<span className="text-accent">]</span> agents · LoreSpring
      </div>
    </div>
  );
}

function StackCard({
  category,
  note,
  items,
  tall = false,
}: {
  category: string;
  note: string;
  items: Array<{ name: string; icon: { path: string } | null }>;
  tall?: boolean;
}) {
  return (
    <Panel label={category} className="h-full">
      <div className="flex h-full flex-col pt-2">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
            {note}
          </p>
          <span className="font-mono text-[11px] text-ink/25">
            {String(items.length).padStart(2, "0")}
          </span>
        </div>
        <div className={cx("mt-6 flex flex-wrap gap-2.5", tall && "content-start")}>
          {items.map((item) => (
            <span
              key={item.name}
              className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-1.5 font-mono text-[12.5px] text-ink/65 transition-all duration-500 hover:border-accent/40 hover:text-accent"
            >
              {item.icon ? (
                <SiIcon
                  path={item.icon.path}
                  title={item.name}
                  className="h-3.5 w-3.5"
                />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
              )}
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </Panel>
  );
}

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      <div className="grain" aria-hidden="true" />
      <Backdrop />
      <Nav />

      <main className="relative">
        {/* Hero */}
        <section
          id="top"
          className="relative flex min-h-[100dvh] items-center px-4 pb-24 pt-32 sm:px-6"
        >
          <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              >
                <MonoTag>whoami</MonoTag>
              </motion.div>

              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.08,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="mt-7 font-display text-[clamp(3rem,10vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.02em]"
              >
                Harshit
                <br />
                <span className="bg-gradient-to-br from-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent">
                  Batra
                </span>
              </motion.h1>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.16,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="mt-7 max-w-md font-mono text-[13.5px] leading-relaxed text-ink/55"
              >
                &gt; AI and Backend Engineer — reliable systems, intelligent
                pipelines, production ML infrastructure.
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.24,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Pill href="mailto:harshitbatra2005@gmail.com">
                  Get in touch
                </Pill>
                <Pill href="#work" variant="ghost">
                  View selected work
                </Pill>
              </motion.div>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="hidden lg:block"
            >
              <Terminal />
            </motion.div>
          </div>
        </section>

        <Marquee />

        {/* Work */}
        <section id="work" className="relative px-4 py-28 sm:px-6 sm:py-36">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <MonoTag prefix="#">selected work</MonoTag>
                  <h2 className="mt-6 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                    Shipping systems,
                    <br />
                    not demos.
                    <Cursor />
                  </h2>
                </div>
                <p className="max-w-xs font-mono text-xs leading-relaxed text-ink/45">
                  # production-grade work across agent orchestration,
                  reinforcement learning, and full-stack delivery
                </p>
              </div>
            </Reveal>

            <div className="mt-20 space-y-28 sm:space-y-32">
              {PROJECTS.map((project, i) => {
                const flipped = i % 2 === 1;
                return (
                  <Reveal key={project.title}>
                    <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cx(
                          "group relative block lg:col-span-7",
                          flipped && "lg:order-2",
                        )}
                      >
                        <Corners accent />
                        <div className="overflow-hidden rounded-lg border border-line bg-white shadow-[0_2px_4px_rgba(20,22,26,0.04),0_16px_48px_-20px_rgba(20,22,26,0.18)]">
                          <div className="aspect-[16/10] w-full overflow-hidden">
                            <Image
                              src={project.image}
                              alt={`${project.title} screenshot`}
                              width={1600}
                              height={900}
                              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                            />
                          </div>
                        </div>
                        <div className="absolute -top-4 left-6 rounded-md bg-accent px-3 py-1.5 font-mono text-[11px] font-medium text-white">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      </a>

                      <div
                        className={cx(
                          "lg:col-span-5",
                          flipped && "lg:order-1",
                        )}
                      >
                        <MonoTag prefix="$">{project.subtitle}</MonoTag>
                        <h3 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
                          {project.description}
                        </p>
                        <ul className="mt-6 space-y-2.5">
                          {project.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-3 font-mono text-[12.5px] leading-relaxed text-ink/60"
                            >
                              <span className="mt-px select-none text-accent">
                                &gt;
                              </span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-7 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-line bg-white px-2.5 py-1 font-mono text-[11px] text-ink/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                          <Pill
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Source
                          </Pill>
                          {"liveLink" in project && project.liveLink && (
                            <Pill
                              href={project.liveLink}
                              variant="ghost"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live site
                            </Pill>
                          )}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="relative px-4 py-28 sm:px-6 sm:py-36">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <MonoTag prefix="#">capabilities</MonoTag>
                  <h2 className="mt-6 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                    The toolkit.
                    <Cursor />
                  </h2>
                </div>
                <p className="max-w-xs font-mono text-xs leading-relaxed text-ink/45">
                  # a deliberately narrow stack, chosen for depth over breadth
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
              <Reveal className="lg:row-span-2">
                <StackCard
                  category={STACK[0].category}
                  note={STACK[0].note}
                  items={STACK[0].items}
                  tall
                />
              </Reveal>
              <Reveal className="lg:row-span-2" delay={0.1}>
                <StackCard
                  category={STACK[1].category}
                  note={STACK[1].note}
                  items={STACK[1].items}
                  tall
                />
              </Reveal>
              <Reveal delay={0.2}>
                <StackCard
                  category={STACK[2].category}
                  note={STACK[2].note}
                  items={STACK[2].items}
                />
              </Reveal>
              <Reveal delay={0.3}>
                <StackCard
                  category={STACK[3].category}
                  note={STACK[3].note}
                  items={STACK[3].items}
                />
              </Reveal>
              <Reveal delay={0.4}>
                <StackCard
                  category={STACK[4].category}
                  note={STACK[4].note}
                  items={STACK[4].items}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative px-4 py-28 sm:px-6 sm:py-36">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <Reveal>
                <Panel label="profile" className="lg:sticky lg:top-32">
                  <div className="flex flex-col gap-7 pt-2">
                    <div className="flex items-center gap-5">
                      <pre
                        aria-hidden="true"
                        className="font-mono text-[11px] leading-[1.25] text-accent"
                      >
{`█ █ ██ 
█ █ █ █
███ ██ 
█ █ █ █
█ █ ██ `}
                      </pre>
                      <div>
                        <p className="font-medium text-ink">Harshit Batra</p>
                        <p className="mt-0.5 font-mono text-xs text-ink/45">
                          ai / backend engineer
                        </p>
                      </div>
                    </div>
                    <div className="h-px w-full bg-line" />
                    <div className="flex items-center gap-3 rounded-md border border-line bg-white px-4 py-3 font-mono text-xs text-ink/70">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                      </span>
                      [open to work]
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/N1CK99925"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex h-11 w-11 items-center justify-center rounded-md bg-ink/[0.04] text-ink/60 ring-1 ring-line transition-all duration-500 hover:bg-ink/[0.08] hover:text-ink"
                      >
                        <GithubLogo weight="light" className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/harshit-batra-a073a6304/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-11 w-11 items-center justify-center rounded-md bg-ink/[0.04] text-ink/60 ring-1 ring-line transition-all duration-500 hover:bg-ink/[0.08] hover:text-ink"
                      >
                        <LinkedinLogo weight="light" className="h-5 w-5" />
                      </a>
                      <a
                        href="mailto:harshitbatra2005@gmail.com"
                        aria-label="Email"
                        className="flex h-11 w-11 items-center justify-center rounded-md bg-ink/[0.04] text-ink/60 ring-1 ring-line transition-all duration-500 hover:bg-ink/[0.08] hover:text-ink"
                      >
                        <Envelope weight="light" className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </Panel>
              </Reveal>

              <Reveal delay={0.1}>
                <MonoTag prefix="#">about</MonoTag>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
                  The gap between prototype and production.
                </h2>
                <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-ink/60">
                  <p>
                    I engineer the systems that make AI work in production. From
                    retrieval pipelines that serve millions of queries to
                    training infrastructure that scales across GPU clusters, I
                    focus on the gap between a working prototype and a reliable
                    service.
                  </p>
                  <p>
                    My work spans the full backend stack: distributed systems,
                    data pipelines, API design, and ML infrastructure. I care
                    about making things fast, observable, and boring in the
                    best possible way.
                  </p>
                </div>
                <div className="mt-9">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">
                    # currently exploring
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "LLM inference optimization",
                      "Vector databases",
                      "Agent tooling",
                    ].map((interest) => (
                      <span
                        key={interest}
                        className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3.5 py-2 font-mono text-[12px] text-ink/65 transition-all duration-500 hover:border-accent/40 hover:text-accent"
                      >
                        <span className="text-accent">+</span>
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-line px-4 pb-10 pt-28 sm:px-6 sm:pt-36">
          <div className="mx-auto max-w-6xl text-center">
            <Reveal>
              <MonoTag prefix="#">contact</MonoTag>
              <h2 className="mx-auto mt-7 max-w-3xl font-display text-[clamp(2.4rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent">
                  intelligent.
                </span>
                <Cursor />
              </h2>
              <p className="mx-auto mt-7 max-w-md font-mono text-xs leading-relaxed text-ink/50">
                $ open-to-role: AI / backend engineering — and people who want
                to ship reliable ML systems
              </p>
              <div className="mt-10 flex justify-center">
                <Pill href="mailto:harshitbatra2005@gmail.com">
                  harshitbatra2005@gmail.com
                </Pill>
              </div>
            </Reveal>
          </div>

          <div className="mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-5 border-t border-line pt-8 sm:flex-row">
            <p className="font-mono text-[11px] text-ink/40">
              &copy; {new Date().getFullYear()} harshit-batra
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/N1CK99925"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-ink/[0.04] text-ink/50 ring-1 ring-line transition-all duration-500 hover:bg-ink/[0.08] hover:text-ink"
              >
                <GithubLogo weight="light" className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/harshit-batra-a073a6304/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-ink/[0.04] text-ink/50 ring-1 ring-line transition-all duration-500 hover:bg-ink/[0.08] hover:text-ink"
              >
                <LinkedinLogo weight="light" className="h-4 w-4" />
              </a>
              <a
                href="mailto:harshitbatra2005@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-ink/[0.04] text-ink/50 ring-1 ring-line transition-all duration-500 hover:bg-ink/[0.08] hover:text-ink"
              >
                <Envelope weight="light" className="h-4 w-4" />
              </a>
            </div>
            <p className="font-mono text-[11px] text-ink/40">
              next.js · tailwind · motion
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
