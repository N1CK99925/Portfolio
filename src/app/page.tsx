"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import {
  ArrowUpRight,
  Brain,
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
    category: "Languages",
    items: [
      { name: "Python", icon: siPython },
      { name: "Go", icon: siGo },
      { name: "Java", icon: null },
      { name: "C++", icon: null },
      { name: "SQL", icon: null },
    ],
  },
  {
    category: "AI / ML",
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
    category: "Backend",
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
    category: "Data",
    items: [
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MySQL", icon: null },
      { name: "Redis", icon: siRedis },
      { name: "MongoDB", icon: siMongodb },
      { name: "Neo4j", icon: siNeo4j },
    ],
  },
  {
    category: "Infra",
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
      "Built an AI narrative platform orchestrating 6 specialized agents through a stateful LangGraph workflow for end-to-end chapter generation, critique, and revision. Persistent execution with Postgres checkpointing and HITL interrupts.",
    highlights: [
      "6 AI agents (Writer, Continuity, Reviewer, Summarizer, Lorekeeper) via LangGraph",
      "Tenant-isolated retrieval with LightRAG and Neo4j graph memory",
      "JWT auth, Alembic migrations, LangSmith observability",
    ],
    tags: ["Python", "FastAPI", "LangGraph", "LightRAG", "Neo4j"],
    link: "https://github.com/N1CK99925/LoreSpring",
    liveLink: "https://lorespring.vercel.app",
    image: "https://picsum.photos/seed/lorespring/1600/900",
  },
  {
    title: "ARES",
    subtitle: "Multi-Agent Combat Simulation",
    description:
      "5-zone tactical RL simulator with a commander-agnostic tick engine. Self-play Double DQN agent per-zone Q-heads on a 5-zone adjacency graph, reaching 96% win rate vs random baseline.",
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
      "Full-stack LMS with Spring Boot REST backend and React frontend. Secured with Spring Security and JWT for stateless, role-based authentication. Rate limiting with Bucket4j backed by Redis.",
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

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <span className="flex items-center gap-2">
            <svg
              viewBox="0 0 28 28"
              fill="none"
              className="h-6 w-6 text-foreground"
              aria-hidden="true"
            >
              <path
                d="M14 2L2 7v14l12 5 12-5V7L14 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M14 2v24M2 7l12 5m0 0l12-5M14 12v10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#work"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Work
            </a>
            <a
              href="#stack"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Stack
            </a>
            <a
              href="#about"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="mailto:harshitbatra2005@gmail.com"
              className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <Envelope weight="light" className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero - Asymmetric split (Section 4.3: anti-center bias) */}
      <section className="relative flex min-h-[100dvh] items-center px-6 pt-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
            {/* Left: Name + role + CTAs */}
            <div>
              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl font-semibold tracking-tighter leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
              >
                Harshit
                <br />
                Batra
              </motion.h1>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-6 max-w-md text-[15px] leading-relaxed text-muted"
              >
                AI and Backend Engineer building reliable systems, intelligent
                pipelines, and production ML infrastructure.
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-8 flex items-center gap-4"
              >
                <a
                  href="mailto:harshitbatra2005@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Get in touch
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-all hover:border-muted active:scale-[0.98]"
                >
                  View work
                </a>
              </motion.div>
            </div>

            {/* Right: Visual accent block - bigger and more prominent */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hidden lg:block"
            >
              <div className="rounded-xl border border-border bg-surface p-6 font-mono text-[13px] text-muted/70 leading-[1.8]">
                <span className="text-accent">const</span>{" "}
                <span className="text-foreground/80">engineer</span> = {"{"}
                <br />
                &nbsp;&nbsp;name:{" "}
                <span className="text-foreground/60">&quot;Harshit Batra&quot;</span>,
                <br />
                &nbsp;&nbsp;focus:{" "}
                <span className="text-accent">&quot;ai-infra&quot;</span>,
                <br />
                &nbsp;&nbsp;languages: [
                <span className="text-foreground/60">&quot;Python&quot;</span>,{" "}
                <span className="text-foreground/60">&quot;Go&quot;</span>,{" "}
                <span className="text-foreground/60">&quot;Java&quot;</span>],
                <br />
                &nbsp;&nbsp;interests: [
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-foreground/60">
                  &quot;multi-agent-systems&quot;
                </span>
                ,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-foreground/60">
                  &quot;llm-inference&quot;
                </span>
                ,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-foreground/60">
                  &quot;vector-databases&quot;
                </span>
                ,
                <br />
                &nbsp;&nbsp;],
                <br />
                &nbsp;&nbsp;status:{" "}
                <span className="text-accent">&quot;open-to-work&quot;</span>,
                <br />
                {"}"};
              </div>
              <div className="mt-3 h-px w-full bg-gradient-to-l from-accent/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work - Editorial Layout */}
      <section id="work" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Selected Work
            </h2>
          </Reveal>

          <div className="mt-12 space-y-32">
            {PROJECTS.map((project, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={project.title}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl">
                      <div className="aspect-[16/9] w-full overflow-hidden sm:aspect-[2/1]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1600}
                          height={900}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>

                    {/* Content overlay */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-6 sm:p-10 ${
                        isEven ? "sm:pr-[45%]" : "sm:pl-[45%]"
                      }`}
                    >
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <div className="flex gap-2">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/80 backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/50 italic">
                        {project.subtitle}
                      </p>
                      <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">
                        {project.description}
                      </p>
                      <ul className="mt-3 space-y-1">
                        {project.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-xs text-white/50"
                          >
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex items-center gap-4">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 transition-colors group-hover:text-white">
                          View project
                          <ArrowUpRight
                            weight="light"
                            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                        {"liveLink" in project && project.liveLink && (
                          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors">
                            Live
                            <ArrowUpRight
                              weight="light"
                              className="h-4 w-4"
                            />
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stack - below projects */}
      <section id="stack" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Tech Stack
            </h2>
          </Reveal>

          <div className="mt-12 space-y-8">
            {STACK.map((group) => (
              <Reveal key={group.category}>
                <div>
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-foreground"
                      >
                        {item.icon ? (
                          <SiIcon
                            path={item.icon.path}
                            title={item.name}
                            className="h-4 w-4"
                          />
                        ) : (
                          <span className="inline-block h-4 w-4 rounded border border-foreground/20" />
                        )}
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface">
                    <Brain weight="light" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Harshit Batra</p>
                    <p className="text-sm text-muted">
                      AI / Backend Engineer
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/N1CK99925"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-muted hover:text-foreground"
                  >
                    <GithubLogo weight="light" className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harshit-batra-a073a6304/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-muted hover:text-foreground"
                  >
                    <LinkedinLogo weight="light" className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:harshitbatra2005@gmail.com"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-muted hover:text-foreground"
                  >
                    <Envelope weight="light" className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 text-[15px] leading-relaxed text-muted">
                <p>
                  I engineer the systems that make AI work in production.
                  From designing retrieval pipelines that serve millions of
                  queries to building training infrastructure that scales across
                  GPU clusters, I focus on the gap between a working prototype
                  and a reliable service.
                </p>
                <p>
                  My work spans the full backend stack: distributed systems,
                  data pipelines, API design, and ML infrastructure. I care
                  about making things fast, observable, and boring in the best
                  possible way.
                </p>
                <p>
                  Currently interested in LLM inference optimization, vector
                  databases, and building tools that help other engineers ship
                  ML systems with confidence.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Harshit Batra
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/N1CK99925"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              <GithubLogo weight="light" className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/harshit-batra-a073a6304/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              <LinkedinLogo weight="light" className="h-5 w-5" />
            </a>
            <a
              href="mailto:harshitbatra2005@gmail.com"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Envelope weight="light" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
