import { useEffect, useMemo, useState } from "react";
import { experience, menuItems, profile, projects, skills } from "./data";

const dockItems = [
  { id: "contact", label: "Contact Me", glyph: "me", tone: "pink" },
  { id: "projects", label: "Projects", glyph: "</>", tone: "teal" },
  { id: "resume", label: "Resume", glyph: "cv", tone: "silver" },
  { id: "about", label: "Settings", glyph: "*", tone: "slate" },
];

const quickFacts = [
  { title: "Waterloo CS", detail: "Undergraduate", glyph: "CS" },
  { title: "A.I.", detail: "Specialization", glyph: "AI" },
  { title: "Software Developer", detail: "Currently @ CGI", glyph: "DEV" },
  { title: "Engineering", detail: "Full-stack projects", glyph: "</>" },
];

const pageCopy = {
  about: {
    kicker: "ABOUT",
    title: "A builder with product taste.",
  },
  projects: {
    kicker: "PROJECTS",
    title: "Things I have built.",
  },
  experience: {
    kicker: "TIMELINE",
    title: "My roles and impact.",
  },
  skills: {
    kicker: "SKILLS",
    title: "My technical toolkit.",
  },
  resume: {
    kicker: "RESUME",
    title: "Check out my resume.",
  },
  contact: {
    kicker: "CONTACT",
    title: "Let's connect.",
  },
};

const appTones = {
  teal: "app-teal",
  orange: "app-orange",
  pink: "app-pink",
  green: "app-green",
  yellow: "app-yellow",
  blue: "app-blue",
  silver: "app-silver",
  slate: "app-slate",
};

function useClock() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return time;
}

function StatusBar() {
  const time = useClock();

  return (
    <div className="phone-status">
      <span>{time}</span>
      <div className="phone-status__icons" aria-hidden="true">
        <span className="signal-bars">
          <i />
          <i />
          <i />
        </span>
        <span>wifi</span>
        <span className="battery">100</span>
      </div>
    </div>
  );
}

function AppIcon({ item, onOpen, compact = false }) {
  return (
    <button className="app-shortcut" type="button" onClick={() => onOpen(item.id)}>
      <span className={`app-icon ${appTones[item.tone] ?? "app-teal"}`}>
        <span>{item.glyph}</span>
      </span>
      <strong className={compact ? "is-compact" : ""}>{item.label}</strong>
    </button>
  );
}

function HomeScreen({ onOpen }) {
  return (
    <div className="phone-home">
      <StatusBar />
      <section className="home-hero">
        <p>{profile.name}'s portfolio</p>
        <h2>{profile.name}</h2>
        <strong>{profile.subtitle}</strong>
      </section>

      <div className="app-grid" aria-label="Portfolio apps">
        {menuItems.map((item) => (
          <AppIcon key={item.id} item={item} onOpen={onOpen} />
        ))}
      </div>

      <nav className="dock" aria-label="Quick links">
        {dockItems.map((item) => (
          <AppIcon key={item.id} item={item} onOpen={onOpen} compact />
        ))}
      </nav>
    </div>
  );
}

function PageHeader({ activePage, onBack }) {
  const current = [...menuItems, ...dockItems].find((item) => item.id === activePage) ?? menuItems[0];

  return (
    <header className="page-header">
      <button className="circle-button" type="button" onClick={onBack} aria-label="Back to home">
        {"<"}
      </button>
      <div className={`small-app-icon ${appTones[current.tone] ?? "app-teal"}`}>{current.glyph}</div>
      <strong>{current.label === "Settings" ? "About" : current.label}</strong>
      <span className="header-spacer" />
      <button className="circle-button" type="button" aria-label="Minimize">
        -
      </button>
      <button className="circle-button close" type="button" onClick={onBack} aria-label="Close page">
        x
      </button>
    </header>
  );
}

function PageShell({ activePage, onBack, children }) {
  const copy = pageCopy[activePage] ?? pageCopy.about;

  return (
    <div className="phone-page">
      <PageHeader activePage={activePage} onBack={onBack} />
      <main className="page-scroll">
        <p className="page-kicker">{copy.kicker}</p>
        <h2>{copy.title}</h2>
        {children}
      </main>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="content-stack">
      <p className="lead-card">{profile.mission}</p>
      <div className="fact-list">
        {quickFacts.map((fact) => (
          <article key={fact.title}>
            <span>{fact.glyph}</span>
            <div>
              <strong>{fact.title}</strong>
              <p>{fact.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="content-stack">
      {projects.map((project) => (
        <article className="project-card" key={project.name}>
          <div>
            <span>{project.rarity}</span>
            <h3>{project.name}</h3>
          </div>
          <p>{project.description}</p>
          <small>{project.stack}</small>
          <div className="inline-actions">
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function ExperiencePage() {
  return (
    <div className="timeline">
      {experience.map((item) => (
        <article className="timeline-card" key={item.title}>
          <span className="timeline-dot" />
          <div>
            <div className="timeline-card__top">
              <h3>{item.title}</h3>
              <span>{item.time}</span>
            </div>
            <strong>{item.org}</strong>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function SkillsPage() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <article key={skill.name}>
          <div>
            <strong>{skill.name}</strong>
            <span>{skill.score}%</span>
          </div>
          <div className="skill-meter">
            <i style={{ width: `${skill.score}%` }} />
          </div>
        </article>
      ))}
    </div>
  );
}

function ResumePage() {
  return (
    <div className="content-stack">
      <a className="primary-action" href="/resume.pdf" target="_blank" rel="noreferrer">
        Open Resume
      </a>
      <article className="resume-preview">
        <div>
          <strong>Resume Preview</strong>
          <span>Scroll inside the document.</span>
        </div>
        <div className="resume-paper">
          <h4>{profile.name}</h4>
          <p>Education | Technical Skills | Experience | Projects | Awards</p>
          {Array.from({ length: 15 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </article>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="contact-list">
      <a href={`mailto:${profile.email}`}>
        <strong>Email</strong>
        <span>{profile.email}</span>
      </a>
      <a href={profile.github} target="_blank" rel="noreferrer">
        <strong>GitHub</strong>
        <span>Open source profile</span>
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer">
        <strong>LinkedIn</strong>
        <span>Professional network</span>
      </a>
    </div>
  );
}

function ActivePage({ activePage, onBack }) {
  const content = useMemo(() => {
    switch (activePage) {
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage />;
      case "experience":
        return <ExperiencePage />;
      case "skills":
        return <SkillsPage />;
      case "resume":
        return <ResumePage />;
      case "contact":
        return <ContactPage />;
      default:
        return <AboutPage />;
    }
  }, [activePage]);

  return (
    <PageShell activePage={activePage} onBack={onBack}>
      {content}
    </PageShell>
  );
}

function PhoneFrame({ activePage, setActivePage }) {
  return (
    <div className="phone-shell" aria-label="Interactive phone portfolio">
      <div className="phone-bezel">
        <div className="phone-notch" aria-hidden="true" />
        <div className="phone-screen">
          {activePage === "home" ? (
            <HomeScreen onOpen={setActivePage} />
          ) : (
            <ActivePage activePage={activePage} onBack={() => setActivePage("home")} />
          )}
        </div>
      </div>
    </div>
  );
}

function IntroPanel({ setActivePage }) {
  return (
    <section className="intro-panel">
      <p className="intro-kicker">{profile.name}</p>
      <h1>{profile.name.split(" ")[0]}'s Personal Portfolio</h1>
      <p className="intro-copy">{profile.mission}</p>
      <div className="quick-facts">
        {quickFacts.map((fact) => (
          <button key={fact.title} type="button" onClick={() => setActivePage("about")}>
            <span>{fact.glyph}</span>
            <strong>{fact.title}</strong>
            <small>{fact.detail}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <main className="portfolio-stage">
      <IntroPanel setActivePage={setActivePage} />
      <PhoneFrame activePage={activePage} setActivePage={setActivePage} />
    </main>
  );
}
