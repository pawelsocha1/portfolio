import { notFound } from "next/navigation";
import Reveal from "../reveal";
import { isLocale, type Localized, ui } from "../i18n";

const projects: { name: string; tag: Localized; desc: Localized; url: string }[] = [
  {
    name: "Ciche 79A Mountainhouse",
    tag: { en: "Web · Hospitality", pl: "Web · Wynajem" },
    desc: {
      en: "Rental site for a modern year-round house at the foot of the Tatras — space, surroundings and booking via Booking.com & Airbnb.",
      pl: "Strona nowoczesnego, całorocznego domu na wynajem u podnóża Tatr — przestrzeń, okolica i rezerwacja przez Booking.com i Airbnb.",
    },
    url: "https://mountainhouse79a.pl/",
  },
  {
    name: "Mateusz Polniak",
    tag: { en: "Web · Portfolio", pl: "Web · Portfolio" },
    desc: {
      en: "Portfolio for a multidisciplinary graphic designer — branding, 3D, motion, video and print.",
      pl: "Portfolio grafika multidyscyplinarnego — branding, 3D, motion, wideo i druk.",
    },
    url: "https://mateuszpolniak.pl/",
  },
  {
    name: "AI Classification",
    tag: { en: "AI · BIM", pl: "AI · BIM" },
    desc: {
      en: "Upload an IFC building model, validate every element against classification specs — review UI, status filtering, PDF reports.",
      pl: "Wgraj model budynku IFC i sprawdź każdy element względem specyfikacji klasyfikacji — interfejs przeglądu, filtrowanie statusów, raporty PDF.",
    },
    url: "https://ai-classification-nm3t.vercel.app/",
  },
  {
    name: "Learni",
    tag: { en: "AI · EdTech", pl: "AI · EdTech" },
    desc: {
      en: "Upload PDF, DOCX or PPTX study materials and get AI-generated quizzes. Google sign-in, progress synced across web and mobile.",
      pl: "Wgraj materiały do nauki w PDF, DOCX lub PPTX i otrzymaj quizy wygenerowane przez AI. Logowanie przez Google, postępy synchronizowane między wersją web i mobilną.",
    },
    url: "https://learni-app-khaki.vercel.app/",
  },
  {
    name: "Glonozałruz",
    tag: { en: "E-commerce", pl: "E-commerce" },
    desc: {
      en: "Merch store for an artist on a custom domain — limited drops, cart and checkout.",
      pl: "Sklep z merchem artysty na własnej domenie — limitowane dropy, koszyk i płatności.",
    },
    url: "https://glonozalruz.com/",
  },
  {
    name: "Damjul",
    tag: { en: "Web · Brand", pl: "Web · Marka" },
    desc: {
      en: "Marketing site for a social media studio — bold typography, scroll-driven motion, case studies.",
      pl: "Strona studia social media — mocna typografia, animacje sterowane scrollem, case studies.",
    },
    url: "https://damianoz.vercel.app/",
  },
  {
    name: "Majkel",
    tag: { en: "Web · Photo", pl: "Web · Fotografia" },
    desc: {
      en: "Minimal portfolio for a photographer, built around an endless scrolling photo wall.",
      pl: "Minimalistyczne portfolio fotografa, zbudowane wokół niekończącej się ściany zdjęć.",
    },
    url: "https://majkel-portfolio.vercel.app/",
  },
];

const workProjects: { name: Localized; desc: Localized; tech: string[] }[] = [
  {
    name: {
      en: "Construction Simulation Platform",
      pl: "Platforma symulacji budowy",
    },
    desc: {
      en: "Simulates building construction progress over time — planned vs. actual state of the site on a live model.",
      pl: "Symuluje postęp budowy w czasie — stan planowany i rzeczywisty placu budowy na żywym modelu.",
    },
    tech: ["TypeScript", ".NET", "Blazor"],
  },
  {
    name: { en: "IFC Model Classification", pl: "Klasyfikacja modeli IFC" },
    desc: {
      en: "Classifies elements of 3D building models with Graph Attention Networks combined with LLM + RAG workflows.",
      pl: "Klasyfikuje elementy modeli 3D budynków za pomocą Graph Attention Networks połączonych z przepływami LLM + RAG.",
    },
    tech: ["PyTorch", "GNN", "LLM", "RAG"],
  },
  {
    name: {
      en: "Construction Process System",
      pl: "System procesów budowlanych",
    },
    desc: {
      en: "Co-developed a platform supporting key stages of the construction lifecycle, used in day-to-day operations.",
      pl: "Współtworzyłem platformę wspierającą kluczowe etapy cyklu realizacji budowy, używaną w codziennej pracy.",
    },
    tech: [".NET", "C#"],
  },
  {
    name: { en: "Work-Time Reporting", pl: "Raportowanie czasu pracy" },
    desc: {
      en: "Designed and delivered a reporting and work-time analytics system used across the company.",
      pl: "Zaprojektowałem i wdrożyłem system raportowania i analityki czasu pracy używany w całej firmie.",
    },
    tech: [".NET", "Blazor", "MS SQL"],
  },
  {
    name: { en: "Excel Classification", pl: "Klasyfikacja danych z Excela" },
    desc: {
      en: "Classifies Excel-based engineering data automatically using a RAG + LLM pipeline.",
      pl: "Automatycznie klasyfikuje dane inżynierskie z plików Excel za pomocą pipeline'u RAG + LLM.",
    },
    tech: ["Python", "RAG", "LLM"],
  },
  {
    name: { en: "Data Scraper", pl: "Scraper danych" },
    desc: {
      en: "Automated data collection and preprocessing pipelines feeding internal systems.",
      pl: "Zautomatyzowane pipeline'y zbierania i wstępnego przetwarzania danych zasilające systemy wewnętrzne.",
    },
    tech: ["Python"],
  },
  {
    name: { en: "PDF Comparator", pl: "Porównywarka PDF" },
    desc: {
      en: "Tool for comparing PDF documents — spots differences between drawing revisions.",
      pl: "Narzędzie do porównywania dokumentów PDF — wychwytuje różnice między rewizjami rysunków.",
    },
    tech: ["Python"],
  },
];

const skills: { title: Localized; hot: boolean; items: string[] }[] = [
  {
    title: { en: "AI / ML", pl: "AI / ML" },
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
    title: { en: "Backend", pl: "Backend" },
    hot: false,
    items: ["C#", ".NET", "EF Core", "Python", "Flask"],
  },
  {
    title: { en: "Frontend & Data", pl: "Frontend i dane" },
    hot: false,
    items: ["TypeScript", "JavaScript", "Blazor", "MS SQL", "MongoDB"],
  },
];

const experience = {
  erbud: {
    when: { en: "09.2023 — present", pl: "09.2023 — obecnie" },
    summary: {
      en: "Internal systems used in day-to-day construction operations — automation that reduces manual engineering effort, shortens process lead time and improves data quality for decision-making.",
      pl: "Systemy wewnętrzne używane w codziennej pracy firmy budowlanej — automatyzacja, która ogranicza ręczną pracę inżynierów, skraca czas procesów i poprawia jakość danych do podejmowania decyzji.",
    },
  },
  abb: {
    summary: {
      en: "Technical support for marine IT systems in an international engineering setup — incident resolution and continuity of user operations.",
      pl: "Wsparcie techniczne systemów IT dla sektora morskiego w międzynarodowym środowisku inżynierskim — rozwiązywanie incydentów i zapewnienie ciągłości pracy użytkowników.",
    },
  },
} satisfies Record<string, Record<string, Localized>>;

const education: { when: string; title: Localized; text: Localized }[] = [
  {
    when: "2024 — 2026",
    title: {
      en: "M.Eng · Applied Computer Science",
      pl: "Mgr inż. · Informatyka stosowana",
    },
    text: {
      en: "University of Economics and Computer Science, Kraków. Specialisation: Artificial Intelligence. Full programme completed — defence expected in 2026.",
      pl: "Wyższa Szkoła Ekonomii i Informatyki w Krakowie. Specjalizacja: Sztuczna inteligencja. Program ukończony — obrona planowana w 2026.",
    },
  },
  {
    when: "2020 — 2024",
    title: {
      en: "B.Eng · Applied Computer Science",
      pl: "Inż. · Informatyka stosowana",
    },
    text: {
      en: "University of Economics and Computer Science, Kraków. Specialisation: Web & Mobile Application Development.",
      pl: "Wyższa Szkoła Ekonomii i Informatyki w Krakowie. Specjalizacja: Tworzenie aplikacji webowych i mobilnych.",
    },
  },
  {
    when: "Microsoft · MTA",
    title: {
      en: "Certifications & Languages",
      pl: "Certyfikaty i języki",
    },
    text: {
      en: "MTA — Microsoft: Software Development, Database, Networking, Security, HTML/CSS Fundamentals. English C1 · Polish native.",
      pl: "MTA — Microsoft: Software Development, Database, Networking, Security, HTML/CSS Fundamentals. Angielski C1 · polski ojczysty.",
    },
  },
];

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = ui[lang];
  const other = lang === "en" ? "pl" : "en";

  return (
    <>
      <nav className="nav">
        <a href="#top" className="nav-logo">
          PS<span style={{ color: "var(--accent)" }}>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">{t.nav.work}</a>
          <a href="#experience" className="nav-optional">
            {t.nav.experience}
          </a>
          <a href="#contact">{t.nav.contact}</a>
          <a
            href={`/${other}`}
            hrefLang={other}
            lang={other}
            title={t.switchTo.title}
            className="lang-switch mono"
          >
            {t.switchTo.label}
          </a>
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
            <strong>{t.intro.lead}</strong>
            {t.intro.before}
            <span className="hl">{t.intro.highlight}</span>
            {t.intro.after}
          </p>
          <div className="hero-meta mono">
            <span>
              <span className="dot" />
              Software Developer @ ERBUD S.A.
            </span>
            <span>{t.degree}</span>
          </div>
        </div>
      </header>

      <main>
        <section id="work">
          <Reveal>
            <div className="section-head">
              <h2>{t.work}</h2>
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
                    <p className="project-desc">{p.desc[lang]}</p>
                  </span>
                  <span className="project-side">
                    <span className="project-tag mono">{p.tag[lang]}</span>
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
              <h2>{t.experience}</h2>
              <span className="mono index">{t.experienceRange}</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="xp-entry">
              <div className="xp-when mono">
                {experience.erbud.when[lang]}
              </div>
              <div>
                <div className="xp-role">
                  Software Developer · <span className="xp-org">ERBUD S.A.</span>
                </div>
                <p className="xp-summary">{experience.erbud.summary[lang]}</p>
              </div>
            </div>
          </Reveal>
          <div className="xp-projects">
            {workProjects.map((wp, i) => (
              <Reveal key={wp.name.en} delay={(i % 3) * 0.07}>
                <div className="xp-card">
                  <span className="mono num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{wp.name[lang]}</h3>
                  <p>{wp.desc[lang]}</p>
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
                <p className="xp-summary">{experience.abb.summary[lang]}</p>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="skills">
          <Reveal>
            <div className="section-head">
              <h2>{t.stack}</h2>
              <span className="mono index">{t.stackNote}</span>
            </div>
          </Reveal>
          <div className="skill-groups">
            {skills.map((group, i) => (
              <Reveal key={group.title.en} delay={i * 0.08}>
                <div className="skill-group">
                  <h3 className="mono">{group.title[lang]}</h3>
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
              <h2>{t.education}</h2>
              <span className="mono index">{t.educationNote}</span>
            </div>
          </Reveal>
          <div className="edu-grid">
            {education.map((e, i) => (
              <Reveal key={e.when} delay={i * 0.08}>
                <div className="edu-card">
                  <span className="mono">{e.when}</span>
                  <h3>{e.title[lang]}</h3>
                  <p>{e.text[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <Reveal>
            <h2 className="contact-title">
              {t.contact.before}
              <a href="mailto:pvwxlsocha@gmail.com">
                {t.contact.link}&nbsp;↗
              </a>
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
