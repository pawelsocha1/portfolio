import Reveal from "./reveal";

const projects = [
  {
    name: "Mateusz Polniak",
    tag: "Web · Portfolio",
    desc: "Portfolio for a multidisciplinary graphic designer — branding, 3D, motion, video and print.",
    url: "https://mateuszpolniak.pl/",
  },
  {
    name: "AI Classification",
    tag: "AI · BIM",
    desc: "Upload an IFC building model, validate every element against classification specs — review UI, status filtering, PDF reports.",
    url: "https://ai-classification-nm3t.vercel.app/",
  },
  {
    name: "Learni",
    tag: "AI · EdTech",
    desc: "Upload PDF, DOCX or PPTX study materials and get AI-generated quizzes. Google sign-in, progress synced across web and mobile.",
    url: "https://learni-app-khaki.vercel.app/",
  },
  {
    name: "Glonozałruz",
    tag: "E-commerce",
    desc: "Merch store for an artist on a custom domain — limited drops, cart and checkout.",
    url: "https://glonozalruz.com/",
  },
  {
    name: "Damjul",
    tag: "Web · Brand",
    desc: "Marketing site for a social media studio — bold typography, scroll-driven motion, case studies.",
    url: "https://damianoz.vercel.app/",
  },
  {
    name: "Majkel",
    tag: "Web · Photo",
    desc: "Minimal portfolio for a photographer, built around an endless scrolling photo wall.",
    url: "https://majkel-portfolio.vercel.app/",
  },
];

const workProjects = [
  {
    name: "Construction Simulation Platform",
    desc: "Simulates building construction progress over time — planned vs. actual state of the site on a live model.",
    tech: ["TypeScript", ".NET", "Blazor"],
  },
  {
    name: "IFC Model Classification",
    desc: "Classifies elements of 3D building models with Graph Attention Networks combined with LLM + RAG workflows.",
    tech: ["PyTorch", "GNN", "LLM", "RAG"],
  },
  {
    name: "Construction Process System",
    desc: "Co-developed a platform supporting key stages of the construction lifecycle, used in day-to-day operations.",
    tech: [".NET", "C#"],
  },
  {
    name: "Work-Time Reporting",
    desc: "Designed and delivered a reporting and work-time analytics system used across the company.",
    tech: [".NET", "Blazor", "MS SQL"],
  },
  {
    name: "Excel Classification",
    desc: "Classifies Excel-based engineering data automatically using a RAG + LLM pipeline.",
    tech: ["Python", "RAG", "LLM"],
  },
  {
    name: "Data Scraper",
    desc: "Automated data collection and preprocessing pipelines feeding internal systems.",
    tech: ["Python"],
  },
  {
    name: "PDF Comparator",
    desc: "Tool for comparing PDF documents — spots differences between drawing revisions.",
    tech: ["Python"],
  },
];

const skills = [
  {
    title: "AI / ML",
    hot: true,
    items: [
      "PyTorch",
      "scikit-learn",
      "NLP",
      "LLM Orchestration",
      "Agentic Systems",
      "RAG",
      "GNN",
    ],
  },
  {
    title: "Backend",
    hot: false,
    items: ["C#", ".NET", "EF Core", "Python", "Flask"],
  },
  {
    title: "Frontend & Data",
    hot: false,
    items: ["TypeScript", "JavaScript", "Blazor", "MS SQL", "MongoDB"],
  },
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <a href="#top" className="nav-logo">
          PS<span style={{ color: "var(--accent)" }}>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-top mono">
          <span>Kraków, PL — 50.06°N 19.94°E</span>
          <span>AI/ML · Software</span>
        </div>
        <svg className="splat" viewBox="0 0 240 240" aria-hidden="true">
          <filter id="rough">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.42"
              numOctaves="2"
              seed="4"
              result="n"
            />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="18" />
          </filter>
          <g filter="url(#rough)" fill="currentColor">
            <circle cx="118" cy="102" r="56" />
            <circle cx="188" cy="62" r="13" />
            <circle cx="58" cy="55" r="8" />
            <circle cx="203" cy="140" r="6" />
            <circle cx="42" cy="152" r="5" />
            <circle cx="152" cy="188" r="6" />
            <circle cx="90" cy="185" r="4" />
            <rect x="110" y="150" width="6" height="62" rx="3" />
            <rect x="140" y="145" width="5" height="38" rx="2.5" />
          </g>
        </svg>
        <h1 className="hero-name">
          <span className="line">
            <span>Paweł</span>
          </span>
          <span className="line">
            <span>
              Socha<em>.</em>
            </span>
          </span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro">
            <strong>AI/ML Engineer & Software Developer.</strong> I build
            systems where machine learning meets{" "}
            <span className="hl">production software</span> — from
            classifying 3D building models to LLM-powered tools people use
            every day.
          </p>
          <div className="hero-meta mono">
            <span>
              <span className="dot" />
              Software Developer @ ERBUD S.A.
            </span>
            <span>M.Eng Applied CS — AI · 2026</span>
          </div>
        </div>
      </header>

      <main>
        <section id="work">
          <Reveal>
            <div className="section-head">
              <h2>Selected Work</h2>
              <span className="mono index">
                01 — {projects.length.toString().padStart(2, "0")}
              </span>
            </div>
          </Reveal>
          <div className="project-list">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <a
                  className="project-row"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="num mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="project-name">{p.name}</span>
                    <p className="project-desc">{p.desc}</p>
                  </span>
                  <span className="project-side">
                    <span className="project-tag mono">{p.tag}</span>
                    <span className="project-arrow">↗</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience">
          <Reveal>
            <div className="section-head">
              <h2>Experience</h2>
              <span className="mono index">2022 — now</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="xp-entry">
              <div className="xp-when mono">09.2023 — present</div>
              <div>
                <div className="xp-role">
                  Software Developer · <span className="xp-org">ERBUD S.A.</span>
                </div>
                <p className="xp-summary">
                  Internal systems used in day-to-day construction operations —
                  automation that reduces manual engineering effort, shortens
                  process lead time and improves data quality for
                  decision-making.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="xp-projects">
            {workProjects.map((wp, i) => (
              <Reveal key={wp.name} delay={(i % 3) * 0.07}>
                <div className="xp-card">
                  <span className="mono num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{wp.name}</h3>
                  <p>{wp.desc}</p>
                  <span className="mono tech">{wp.tech.join(" · ")}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="xp-entry">
              <div className="xp-when mono">05.2022 — 11.2022</div>
              <div>
                <div className="xp-role">
                  IT Support Engineer, Marine ·{" "}
                  <span className="xp-org">ABB Ltd</span>
                </div>
                <p className="xp-summary">
                  Technical support for marine IT systems in an international
                  engineering setup — incident resolution and continuity of
                  user operations.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="skills">
          <Reveal>
            <div className="section-head">
              <h2>Stack</h2>
              <span className="mono index">Tools I ship with</span>
            </div>
          </Reveal>
          <div className="skill-groups">
            {skills.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.08}>
                <div className="skill-group">
                  <h3 className="mono">{group.title}</h3>
                  <div className="chips">
                    {group.items.map((s) => (
                      <span
                        key={s}
                        className={`chip${group.hot ? " hot" : ""}`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="education">
          <Reveal>
            <div className="section-head">
              <h2>Education</h2>
              <span className="mono index">+ Certs</span>
            </div>
          </Reveal>
          <div className="edu-grid">
            <Reveal>
              <div className="edu-card">
                <span className="mono">2024 — 2026</span>
                <h3>M.Eng · Applied Computer Science</h3>
                <p>
                  University of Economics and Computer Science, Kraków.
                  Specialisation: Artificial Intelligence. Full programme
                  completed — defence expected in 2026.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="edu-card">
                <span className="mono">2020 — 2024</span>
                <h3>B.Eng · Applied Computer Science</h3>
                <p>
                  University of Economics and Computer Science, Kraków.
                  Specialisation: Web & Mobile Application Development.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="edu-card">
                <span className="mono">Microsoft · MTA</span>
                <h3>Certifications & Languages</h3>
                <p>
                  MTA — Microsoft: Software Development, Database, Networking,
                  Security, HTML/CSS Fundamentals. English C1 · Polish native.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="contact" id="contact">
          <Reveal>
            <h2 className="contact-title">
              Let&apos;s{" "}
              <a href="mailto:pvwxlsocha@gmail.com">talk&nbsp;↗</a>
            </h2>
          </Reveal>
          <div className="contact-foot mono">
            <span>© 2026 Paweł Socha · Kraków</span>
            <div className="contact-links">
              <a
                href="https://github.com/pawelsocha1"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/paweł-socha-a98b8a234"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:pvwxlsocha@gmail.com">Email</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
