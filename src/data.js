export const profile = {
  name: "Pritika Lahiri",
  subtitle: "Waterloo CS undergrad with A.I. specialization building creative products.",
  mission:
    "Waterloo CS undergrad with an A.I. specialization building creative products across software, product, fintech, and machine learning. Click on the apps to learn more about me!",
  location: "Waterloo, ON",
  email: "pritika@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  portfolio: "https://example.com",
};

export const menuItems = [
  { id: "experience", label: "Experience", glyph: "job", tone: "teal" },
  { id: "skills", label: "Skills", glyph: "fx", tone: "orange" },
  { id: "projects", label: "Projects", glyph: "</>", tone: "pink" },
  { id: "contact", label: "Contact", glyph: "@", tone: "green" },
  { id: "resume", label: "Resume", glyph: "cv", tone: "yellow" },
  { id: "about", label: "Awards", glyph: "aw", tone: "blue" },
];

export const projects = [
  {
    name: "AI Research Notebook",
    stack: "React, API, LLM tooling",
    rarity: "Featured App",
    description:
      "A study and research assistant for summarizing notes, generating practice questions, and tracking revision cycles.",
    sprite: "star",
    github: "https://github.com/",
    demo: "https://example.com",
    featured: true,
  },
  {
    name: "Portfolio Phone",
    stack: "React, CSS, interaction design",
    rarity: "Interface App",
    description:
      "A mobile-first personal site shaped like a phone home screen with polished app-style pages.",
    sprite: "board",
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    name: "Research Dashboard",
    stack: "Data viz, dashboards",
    rarity: "Analytics App",
    description:
      "A compact analytics dashboard for tracking experiments, notes, and evaluation results.",
    sprite: "graph",
    github: "https://github.com/",
    demo: "https://example.com",
  },
];

export const experience = [
  {
    version: "2026",
    title: "Software Developer Intern",
    org: "CGI",
    time: "2026",
    description:
      "Worked with the data engineering team on a TD project and contributed front-end development for an internal application.",
  },
  {
    version: "2026 - Present",
    title: "Design Team Researcher",
    org: "WAT.ai, University of Waterloo",
    time: "2026 - Present",
    description:
      "Contributing to Waterloo's WAT.ai research team on semantic object state tracking and practical AI systems.",
  },
  {
    version: "2025",
    title: "Computer Science Student",
    org: "University of Waterloo",
    time: "2025 - 2029",
    description:
      "Studying computer science with an A.I. specialization while building software, product, and machine-learning projects.",
  },
];

export const skills = [
  { name: "React", score: 94, accent: "blue" },
  { name: "Python", score: 92, accent: "lime" },
  { name: "Machine Learning", score: 88, accent: "purple" },
  { name: "Data Engineering", score: 84, accent: "orange" },
  { name: "Product Design", score: 86, accent: "cyan" },
  { name: "Java", score: 80, accent: "amber" },
  { name: "SQL", score: 82, accent: "pink" },
  { name: "Research", score: 85, accent: "lime" },
];

export const achievements = [
  { label: "Legendary App", detail: "Featured project cleared", unlocked: true },
  { label: "Pixel Builder", detail: "3+ apps deployed", unlocked: true },
  { label: "AI Tinkerer", detail: "ML / AI stack active", unlocked: true },
  { label: "Secret Mode", detail: "Konami code discovered", unlocked: false },
];

export const githubContributions = [
  [0, 1, 0, 2, 3, 1, 0],
  [1, 2, 1, 0, 1, 2, 3],
  [0, 0, 2, 1, 2, 1, 0],
  [1, 3, 1, 0, 2, 2, 1],
  [0, 1, 2, 3, 1, 0, 1],
  [1, 0, 1, 2, 1, 2, 3],
];
