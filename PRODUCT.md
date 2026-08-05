# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiting decision-makers — hiring managers, recruiters, and talent screeners evaluating whether to interview the owner for an AI/Backend engineering role. They skim quickly and need to confirm capability, credibility, and contact access fast.

Secondary: engineering peers and technical leads who read more deeply — they judge the rigor and architecture of the presented work (agent orchestration, RL, systems design) rather than the presentation alone.

The two audiences are served in a single scroll: broad signals and proof up front, deeper technical detail available per project.

## Product Purpose

Personal portfolio for Harshit Batra, an AI / Backend engineer. Its purpose is to convert a visitor's attention into action: a recruiter's decision to reach out, a technical lead's decision to recommend, and a follow-up message. The site is currently and explicitly open-to-work; securing interviews for an AI/Backend role is the active goal.

## Positioning

The gap between prototype and production: the portfolio is built by someone who ships AI systems, not demos. Every capability claim (agent orchestration, reinforcement learning, full-stack delivery) is backed by a real, linked, running project. Positioning leans on measurable, verifiable proof — e.g. a 96% win rate in a multi-agent combat simulator, a six-agent narrative generation system — rather than descriptors alone.

## Operating Context

- Single-page site, scroll-driven: hero, work, capabilities/stack, about, contact.
- Visitors arrive from a resume/CV, GitHub profile, LinkedIn, or job application links.
- Facts and metrics on the page are real and must remain truthful and current (project links, live sites, win-rate claim, agent counts).
- The site itself runs Next.js, Tailwind, and the `motion` library; deployed via GitHub Actions to Vercel.

## Capabilities and Constraints

- Sections: Hero (name + terminal motif), Marquee, Selected Work (3 projects), Stack/Capabilities, About, Contact/Footer.
- Projects presented: LoreSpring (multi-agent narrative generation, LangGraph), ARES (multi-agent combat RL simulation, Double DQN), Learning Management System (Spring Boot + React full-stack).
- Contact: email `harshitbatra2005@gmail.com`, GitHub `N1CK99925`, LinkedIn `harshit-batra-a073a6304`.
- Open-to-work signal is a first-class element (currently a "open to work" status chip).
- Resume download is requested but the resume asset does not yet exist in the repo — path is an open decision awaiting a user-provided file.
- Stack displayed: Python, Go, Java, C++, SQL, PyTorch, LangGraph, FastAPI, PostgreSQL, Redis, MongoDB, Docker, Kubernetes, React, and more.
- `prefers-reduced-motion` is currently respected; this behavior should be preserved in a redesign.
- Undecided: whether to add more projects or sections beyond the current three; location and experience-level facts are not stated anywhere and were not confirmed.

## Brand Commitments

- Owner name and persona: Harshit Batra, AI / Backend Engineer.
- Existing identity assets: GitHub/LinkedIn handles, personal email, project repos and live links, the LoreSpring product image at `src/assets/LoreSpring.png` (static-imported so the base path is applied automatically on GitHub Pages). (Project images for ARES and LMS are currently remote placeholders.)
- Voice: plain, confident, professional prose over a terminal-motif frame. No fake command flags, clichés, or stacked buzzwords; section tags keep a `#` prefix and the hero terminal uses real commands (`whoami`, `pwd`, `ls`, `git status`).

## Evidence on Hand

- Project repos: `github.com/N1CK99925/LoreSpring`, `github.com/N1CK99925/ARES`, `github.com/N1CK99925/Learning-Management-System`.
- Live site: `lorespring.vercel.app`.
- LoreSpring screenshot: `src/assets/LoreSpring.png`.
- Verifiable claims in current copy: ARES 96% win rate against a random baseline; LoreSpring orchestrates 6 agents; LMS secures auth with JWT and rate-limits with Bucket4j + Redis.
- Absences that must not be fabricated: no resume file, no work-history/employer claims, no testimonials, no headshot, no location.

## Product Principles

1. **Proof over claims.** Every capability on the page is anchored to a real, linked artifact or measurable result. Nothing is asserted that cannot be verified.
2. **Two speeds, one scroll.** Recruiters can grasp who this is and why it matters within the first viewport; engineers can go as deep as the project details allow.
3. **Truth and currency.** All facts — links, metrics, status — must stay real and up to date; the open-to-work signal stays front and center while it is true.
4. **The medium matches the message.** The site should feel engineered the way the work is engineered: fast, precise, reliable, well-crafted.
5. **Reduced-motion and readability are baseline.** Accessibility behavior already present (reduced-motion support, semantic structure) is preserved, not traded away for effect.

## Accessibility & Inclusion

No product-specific accessibility requirement was established. The incumbent implementation supports `prefers-reduced-motion`, uses semantic landmarks and labels, and maintains readable contrast; a redesign must preserve or improve on these.
