export const profile = {
  name: "Harshit Batra",
  subtitle: "CS undergrad at Bennett University building AI systems and full-stack products.",
  mission:
    "CS undergrad at Bennett University specializing in AI/ML, backend systems, and full-stack engineering. Building multi-agent pipelines, LLM-powered tools, and production-ready applications. Click on the apps to learn more about me!",
  location: "Greater Noida, Uttar Pradesh",
  email: "harshitbatra2005@gmail.com",
  github: "https://github.com/N1CK99925",
  linkedin: "https://www.linkedin.com/in/harshit-batra-a073a6304/",
  portfolio: "https://github.com/N1CK99925",
};

export const menuItems = [
  { id: "experience", label: "Experience", glyph: "job", tone: "teal" },
  { id: "skills",     label: "Skills",     glyph: "fx",  tone: "orange" },
  { id: "projects",   label: "Projects",   glyph: "</>", tone: "pink" },
  { id: "contact",    label: "Contact",    glyph: "@",   tone: "green" },
  { id: "resume",     label: "Resume",     glyph: "cv",  tone: "yellow" },
  { id: "about",      label: "Awards",     glyph: "aw",  tone: "blue" },
];

export const projects = [
  {
    name: "LoreSpring",
    stack: "Python, FastAPI, LangGraph, LightRAG, PostgreSQL, pgvector",
    rarity: "AI Systems",
    description:
      "Multi-agent narrative generation system with a 6-node LangGraph pipeline (Writer, Continuity, Reviewer, Summarizer, Lorekeeper) featuring human-in-the-loop review, per-tenant RAG isolation via LightRAG, and full LangSmith observability.",
    sprite: "star",
    github: "https://github.com/N1CK99925/LoreSpring",
    demo: "https://github.com/N1CK99925/LoreSpring",
    featured: true,
  },
  {
    name: "Learning Management System",
    stack: "Spring Boot, Spring Security, React, PostgreSQL, Redis, Docker",
    rarity: "Full-Stack",
    description:
      "Full-stack LMS with JWT-based role auth, API rate limiting via Bucket4j + Redis, 20+ RESTful endpoints, and a Dockerized deployment with Nginx, health checks, and persistent volumes.",
    sprite: "board",
    github: "https://github.com/N1CK99925/Learning-Management-System",
    demo: "https://github.com/N1CK99925/Learning-Management-System",
  },
  {
    name: "ARES",
    stack: "Python, PyTorch, LLM Commanders, DQN",
    rarity: "AI / Simulation",
    description:
      "Multi-agent combat simulation with a custom TickEngine, attrition model, 3-path win-condition system, LLMCommander with retry-on-schema-failure, and a multi-head DQN architecture with 5 zone-specific Q-heads.",
    sprite: "graph",
    github: "https://github.com/N1CK99925/ARES",
    demo: "https://github.com/N1CK99925/ARES",
  },
];

export const experience = [
  {
    version: "2024",
    title: "B.Tech Computer Science & Engineering",
    org: "Bennett University",
    time: "Sept 2024 – Present",
    description:
      "Pursuing a Bachelor of Technology in CSE with a CGPA of 8.3/10. Building AI/ML systems, backend services, and full-stack applications alongside coursework.",
  },
  {
    version: "2024",
    title: "Secondary & Senior Secondary (CBSE)",
    org: "KDPS, Narela, Delhi",
    time: "April 2022 – June 2024",
    description:
      "Completed PCM stream under CBSE, building foundational knowledge in mathematics and sciences that underpins current engineering and ML work.",
  },
];

export const skills = [
  { name: "Python",       score: 95, accent: "lime" },
  { name: "Java",         score: 88, accent: "orange" },
  { name: "Spring Boot",  score: 86, accent: "amber" },
  { name: "React",        score: 84, accent: "blue" },
  { name: "LangGraph",    score: 90, accent: "purple" },
  { name: "PyTorch",      score: 85, accent: "pink" },
  { name: "PostgreSQL",   score: 88, accent: "cyan" },
  { name: "Docker",       score: 82, accent: "teal" },
  { name: "Golang",       score: 78, accent: "lime" },
  { name: "Redis",        score: 80, accent: "orange" },
];

export const achievements = [
  { label: "Agent Architect", detail: "6-node LangGraph pipeline shipped", unlocked: true },
  { label: "Full-Stack Dev",  detail: "LMS with Docker + Redis deployed",  unlocked: true },
  { label: "Tactician",       detail: "LLM combat sim completed",           unlocked: true },
  { label: "Secret Mode",     detail: "Konami code discovered",             unlocked: false },
];

export const githubContributions = [
  [0, 1, 0, 2, 3, 1, 0],
  [1, 2, 1, 0, 1, 2, 3],
  [0, 0, 2, 1, 2, 1, 0],
  [1, 3, 1, 0, 2, 2, 1],
  [0, 1, 2, 3, 1, 0, 1],
  [1, 0, 1, 2, 1, 2, 3],
];