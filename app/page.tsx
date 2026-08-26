"use client";

import { type CSSProperties, type FormEvent, useEffect, useRef, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Focus Tourism",
    type: "Web platform / Performance",
    summary: "A fast travel platform built around package discovery, itinerary journeys and a clean public-to-admin content flow.",
    stack: ["React 19", "Django", "PostgreSQL"],
    result: "435KB → 48KB",
    label: "Core JavaScript optimized",
    status: "LIVE PRODUCT",
    period: "Production work",
    problem: "The public travel experience needed faster loading, clearer package discovery and a cleaner separation from admin code.",
    contribution: "Built responsive React experiences, improved itinerary journeys, separated public and admin bundles, and introduced route-level loading and dependency cleanup.",
    impact: "Reduced the main JavaScript payload from 435KB to 48KB while preserving the customer journey.",
    link: "https://www.focustourismeventz.com/",
  },
  {
    number: "02",
    title: "Client Hunter",
    type: "Lead intelligence / Automation",
    summary: "A local-business discovery and lead-scoring system that converts raw public data into focused opportunities.",
    stack: ["Python", "Streamlit", "SQLite"],
    result: "SIGNAL / NOISE",
    label: "Scoring and audit engine",
    status: "WORKING PROTOTYPE",
    period: "Product iteration",
    problem: "Finding useful local freelance prospects produced large amounts of unstructured business data.",
    contribution: "Built business discovery, website auditing, lead scoring, review workflows and CSV/Excel exports in a single Streamlit workspace.",
    impact: "Turns raw public business data into ranked, reviewable opportunities for focused outreach.",
  },
  {
    number: "03",
    title: "ChatG",
    type: "Realtime architecture / Communication",
    summary: "A scalable foundation for realtime messages, presence, media and WebRTC audio/video communication.",
    stack: ["NestJS", "WebRTC", "Redis"],
    result: "REALTIME",
    label: "Messaging and calls",
    status: "ARCHITECTURE",
    period: "In development",
    problem: "Realtime messaging and calling need a foundation that can handle presence, media, device state and unreliable networks.",
    contribution: "Designed a NestJS, PostgreSQL, Redis and WebSocket foundation with WebRTC signaling flows for one-to-one audio and video calls.",
    impact: "Defines a scalable path from messaging fundamentals to media, presence and TURN-assisted calling.",
  },
  {
    number: "04",
    title: "Namma Kanakku",
    type: "Mobile product / Private finance",
    summary: "A Tamil-first household finance app for income, expenses and reports, designed to remain completely offline.",
    stack: ["React Native", "Expo", "SQLite"],
    result: "100% OFFLINE",
    label: "Local-first privacy",
    status: "IN DEVELOPMENT",
    period: "Mobile product",
    problem: "Tamil-speaking households need a simple way to track shared income and expenses without sending private data to the cloud.",
    contribution: "Designed the React Native interface, family-role flows, local SQLite data model, category tracking, reports and offline-first behavior.",
    impact: "Keeps household finance records on the device while supporting Tamil-first daily use.",
  },
  {
    number: "05",
    title: "Teacher Record Management System",
    type: "Desktop application / Database",
    summary: "A desktop record-management system for creating, viewing, updating and deleting teacher data through a focused GUI.",
    stack: ["Python", "Tkinter", "MySQL", "OOP"],
    result: "CRUD SYSTEM",
    label: "Dec 2024 — Mar 2025",
    status: "COMPLETED",
    period: "Academic project",
    problem: "Teacher records needed a simpler desktop workflow than editing raw database rows.",
    contribution: "Built a Tkinter GUI with validation, persistent MySQL connectivity, object-oriented structure and complete create, read, update and delete flows.",
    impact: "Delivered a working desktop database application for consistent teacher-record management.",
  },
];

const skillGroups = [
  { index: "A", title: "Interface", items: "React · React Native · JavaScript · TypeScript · HTML · CSS" },
  { index: "B", title: "Backend", items: "Python · Django · FastAPI · REST APIs · Server-side development" },
  { index: "C", title: "Data & AI", items: "PostgreSQL · MySQL · SQLite · LangChain · LangGraph" },
  { index: "D", title: "Tooling", items: "Git · Docker · Linux · Nginx · Deployment workflows" },
];

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function windowFade(progress: number, start: number, end: number, feather = 0.09) {
  return Math.min(clamp((progress - start) / feather), clamp((end - progress) / feather));
}

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 19 19 5M8 5h11v11"/></svg>;
}

export default function Home() {
  const missionRef = useRef<HTMLElement>(null);
  const burstRef = useRef<HTMLElement>(null);
  const projectDialogRef = useRef<HTMLDialogElement>(null);
  const projectTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const progressFor = (element: HTMLElement | null) => {
      if (!element) return 0;
      const rect = element.getBoundingClientRect();
      return clamp(-rect.top / Math.max(1, rect.height - window.innerHeight));
    };

    const render = () => {
      raf = 0;
      const mission = progressFor(missionRef.current);
      const burst = progressFor(burstRef.current);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      root.style.setProperty("--page", String(maxScroll > 0 ? window.scrollY / maxScroll : 0));
      root.style.setProperty("--mission", mission.toFixed(4));
      root.style.setProperty("--burst", burst.toFixed(4));

      [[0, -.09, .25], [1, .18, .51], [2, .44, .77], [3, .70, 1.10]].forEach(([index, start, end]) => {
        root.style.setProperty(`--beat-${index}`, windowFade(mission, start, end).toFixed(3));
      });
      [[0, -.09, .29], [1, .20, .54], [2, .46, .79], [3, .71, 1.10]].forEach(([index, start, end]) => {
        root.style.setProperty(`--burst-${index}`, windowFade(burst, start, end).toFixed(3));
      });
    };

    const requestRender = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender, { passive: true });
    render();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const openProject = (project: (typeof projects)[number], trigger: HTMLButtonElement) => {
    projectTriggerRef.current = trigger;
    setSelectedProject(project);
    requestAnimationFrame(() => projectDialogRef.current?.showModal());
  };

  const closeProject = () => projectDialogRef.current?.close();

  const handleProjectClosed = () => {
    setSelectedProject(null);
    projectTriggerRef.current?.focus();
  };

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) return;

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "Not specified");
    const role = String(data.get("role") || "Software developer opportunity");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`${role} — ${company}`);
    const body = encodeURIComponent(
      `Hi Ganesh,\n\n${message}\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nOpportunity: ${role}`,
    );

    setFormStatus("Opening your email app…");
    window.location.href = `mailto:ganeshaathi46@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main id="top">
      <div className="film-grain" aria-hidden="true" />
      <div className="page-progress" aria-hidden="true" />

      <header className="nav-shell">
        <a className="wordmark" href="#top" aria-label="Ganesh A. portfolio home">
          <strong>GA</strong><span>SOFTWARE<br/>DEVELOPER</span>
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          <a href="#mission" onClick={closeMenu}>Mission</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#systems" onClick={closeMenu}>Systems</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="nav-status"><i/> Seeking developer roles</div>
        <button className="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span/><span/>
        </button>
      </header>

      <section className="opening" aria-labelledby="opening-title">
        <div className="opening-stars" aria-hidden="true" />
        <div className="opening-meta mono"><span>GANESH A. / PORTFOLIO 2026</span><span>10.3673° N / 77.9803° E</span></div>
        <h1 id="opening-title">
          <span>ENGINEER</span>
          <span className="outline">FOR THE</span>
          <span>UNKNOWN.</span>
        </h1>
        <div className="opening-bottom">
          <p>I build full-stack web and mobile systems—taking ambitious ideas from the first signal to a product people can use.</p>
          <a href="#mission"><span>Begin mission</span><i>↓</i></a>
        </div>
        <div className="horizon" aria-hidden="true" />
      </section>

      <section className="mission" id="mission" ref={missionRef} aria-label="Scroll-driven developer journey">
        <div className="mission-sticky">
          <div className="starfield stars-near" aria-hidden="true" />
          <div className="starfield stars-far" aria-hidden="true" />
          <img className="mission-craft" src="/rocket.webp" alt="An original spacecraft travelling through deep space" />
          <div className="engine-trail" aria-hidden="true" />

          <div className="mission-hud mono">
            <span>MISSION / GA-26</span>
            <div className="hud-line"><i/></div>
            <span>SCROLL VECTOR <b>↓</b></span>
          </div>

          <div className="mission-beats">
            <article className="mission-beat beat-0">
              <p className="mono">00 / IGNITION</p>
              <h2>Every system starts<br/>with a <em>signal.</em></h2>
              <span>I turn unclear requirements into a buildable product direction.</span>
            </article>
            <article className="mission-beat beat-1">
              <p className="mono">01 / ORBIT</p>
              <h2>Interfaces with<br/><em>gravity.</em></h2>
              <span>Responsive React experiences with hierarchy, performance and purposeful motion.</span>
            </article>
            <article className="mission-beat beat-2">
              <p className="mono">02 / DEEP SPACE</p>
              <h2>The invisible<br/><em>architecture.</em></h2>
              <span>APIs, data, realtime communication and infrastructure that keep the product moving.</span>
            </article>
            <article className="mission-beat beat-3">
              <p className="mono">03 / ARRIVAL</p>
              <h2>Useful work.<br/><em>Delivered.</em></h2>
              <span>Keep scrolling to inspect five selected systems.</span>
            </article>
          </div>

          <div className="telemetry mono" aria-hidden="true">
            <span>ALT</span><b>∞</b><span>VEL</span><b>27.4</b><span>SYS</span><b>NOMINAL</b>
          </div>
        </div>
      </section>

      <section className="projects section" id="work">
        <div className="section-shell">
          <div className="section-intro reveal">
            <p className="eyebrow mono">SELECTED SYSTEMS / 05</p>
            <h2>Proof of<br/><span>trajectory.</span></h2>
            <p>Products across travel, lead intelligence, realtime communication, private mobile finance and desktop data systems.</p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <button
                className="project-row reveal"
                key={project.title}
                type="button"
                aria-haspopup="dialog"
                onClick={(event) => openProject(project, event.currentTarget)}
                style={{ "--delay": `${index * 80}ms` } as CSSProperties}
              >
                <div className="project-index mono">SYS / {project.number}</div>
                <div className="project-main">
                  <div className="project-kicker"><p className="mono">{project.type}</p><span className="project-status mono">{project.status}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <div className="project-result"><strong>{project.result}</strong><span className="mono">{project.label}</span></div>
                <div className="project-action"><span className="mono">CASE STUDY</span><i className="project-arrow"><Arrow/></i></div>
              </button>
            ))}
          </div>

          <dialog
            className="project-dialog"
            ref={projectDialogRef}
            aria-labelledby="project-dialog-title"
            onClose={handleProjectClosed}
            onClick={(event) => event.target === event.currentTarget && closeProject()}
          >
            {selectedProject && (
              <div className="dialog-panel">
                <button className="dialog-close" type="button" onClick={closeProject} aria-label="Close case study">×</button>
                <div className="dialog-meta mono"><span>SYS / {selectedProject.number}</span><span>{selectedProject.status}</span></div>
                <p className="dialog-type mono">{selectedProject.type} · {selectedProject.period}</p>
                <h2 id="project-dialog-title">{selectedProject.title}</h2>
                <div className="dialog-stack stack">{selectedProject.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="case-grid">
                  <article><span className="mono">01 / PROBLEM</span><p>{selectedProject.problem}</p></article>
                  <article><span className="mono">02 / MY CONTRIBUTION</span><p>{selectedProject.contribution}</p></article>
                  <article><span className="mono">03 / OUTCOME</span><p>{selectedProject.impact}</p></article>
                </div>
                <div className="dialog-actions">
                  {selectedProject.link && <a href={selectedProject.link} target="_blank" rel="noreferrer">Visit live website <Arrow/></a>}
                  <a href="#contact" onClick={closeProject}>{selectedProject.link ? "Discuss this work" : "Request project details"} <Arrow/></a>
                </div>
              </div>
            )}
          </dialog>
        </div>
      </section>

      <section className="burst-story" ref={burstRef} aria-label="A scroll-controlled energy burst representing product impact">
        <div className="burst-sticky">
          <img className="burst-image" src="/burst.webp" alt="An abstract scientific energy wave expanding through darkness" />
          <div className="burst-vignette" aria-hidden="true" />
          <p className="burst-code mono">REACTION / CONTROLLED<br/>ENERGY / PRODUCT IMPACT</p>
          <div className="burst-copy">
            <h2 className="burst-line burst-0">A SMALL IDEA</h2>
            <h2 className="burst-line burst-1">BUILDS PRESSURE</h2>
            <h2 className="burst-line burst-2">BECOMES A SYSTEM</h2>
            <h2 className="burst-line burst-3">CREATES IMPACT.</h2>
          </div>
          <div className="burst-scale mono"><span>10<sup>0</sup></span><i/><span>10<sup>6</sup></span></div>
        </div>
      </section>

      <section className="systems section" id="systems">
        <div className="section-shell">
          <div className="systems-head reveal">
            <p className="eyebrow mono">OPERATIONAL RANGE</p>
            <h2>Systems I<br/><span>operate.</span></h2>
          </div>
          <div className="skills-list">
            {skillGroups.map((group, index) => (
              <article className="skill-row reveal" key={group.index} style={{ "--delay": `${index * 80}ms` } as CSSProperties}>
                <span className="mono">{group.index}</span><h3>{group.title}</h3><p>{group.items}</p>
              </article>
            ))}
          </div>
          <div className="about-block reveal">
            <p className="mono">ABOUT / GANESH A.</p>
            <blockquote>“I care about the screen people see—and the engineering they never have to think about.”</blockquote>
            <div>
              <p>Software developer from Tamil Nadu, India, building modern web and mobile products across interface, server, data and delivery.</p>
              <p>Currently focused on joining a product-minded team where I can solve real problems, learn fast and ship reliable software.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="career section" id="education">
        <div className="section-shell">
          <div className="career-head reveal">
            <p className="eyebrow mono">GROUND CONTROL / FORMATION</p>
            <h2>Education &amp;<br/><span>experience.</span></h2>
            <p>A computer-science foundation, practical database work and experience across software development and quality control.</p>
          </div>

          <div className="career-grid">
            <div className="career-column reveal">
              <div className="career-label mono">EDUCATION / 02</div>
              <article className="career-card">
                <span className="career-date mono">JUN 2022 — MAY 2025</span>
                <h3>B.Sc Computer Science</h3>
                <p>Sree Vee College · Kiriyampatti, India</p>
                <strong>GPA 8.06</strong>
              </article>
              <article className="career-card">
                <span className="career-date mono">JUN 2020 — APR 2022</span>
                <h3>Textile Technology Diploma Coursework</h3>
                <p>The Gandhigram Rural Institute · Gandhigram, India</p>
                <strong>Academic GPA 8.70 · Final arrear pending</strong>
              </article>
            </div>

            <div className="career-column reveal" style={{ "--delay": "100ms" } as CSSProperties}>
              <div className="career-label mono">EXPERIENCE / PRESENT</div>
              <article className="career-card featured">
                <span className="career-date mono">APR 2026 — PRESENT</span>
                <h3>Software Developer</h3>
                <p>Inpand Technologies · Dindigul, India</p>
                <ul className="experience-points">
                  <li>Backend development with Python, Django and FastAPI.</li>
                  <li>Responsive interfaces using React and React Native.</li>
                  <li>Database, server-side and LangChain/LangGraph workflow development.</li>
                </ul>
              </article>
              <article className="career-card">
                <span className="career-date mono">MAY 2022 — FEB 2023</span>
                <h3>Quality Control</h3>
                <p>Natchi Apparel Pvt Ltd</p>
                <strong>Apparel quality-control experience</strong>
              </article>
            </div>
          </div>

          <div className="credential-strip reveal">
            <div>
              <span className="mono">DATABASE CREDENTIAL / MAY 2025</span>
              <h3>Naan Mudhalvan — Database Management</h3>
            </div>
            <p>Oracle database creation and querying hackathon.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-stars" aria-hidden="true" />
        <div className="contact-content">
          <div className="contact-copy reveal">
            <p className="eyebrow mono">NEXT MISSION</p>
            <h2>LET&apos;S BUILD<br/><span>WHAT&apos;S NEXT.</span></h2>
            <p>Open to software developer opportunities across full-stack web, mobile and product engineering.</p>
            <div className="contact-links">
              <a href="mailto:ganeshaathi46@gmail.com"><span className="mono">EMAIL</span>ganeshaathi46@gmail.com</a>
              <a href="tel:+917871974080"><span className="mono">PHONE</span>+91 78719 74080</a>
              <a href="https://www.linkedin.com/in/ganesh-a-8a9b992ab" target="_blank" rel="noreferrer"><span className="mono">LINKEDIN</span>ganesh-a-8a9b992ab ↗</a>
              <a href="mailto:ganeshaathi46@gmail.com?subject=Resume%20request%20for%20Ganesh%20A"><span className="mono">RESUME</span>Available on request →</a>
            </div>
            <p className="contact-location mono">DINDIGUL, TAMIL NADU / REMOTE</p>
          </div>

          <form className="contact-form reveal" onSubmit={handleContact} style={{ "--delay": "120ms" } as CSSProperties}>
            <div className="form-heading">
              <span className="mono">RECRUITER CHANNEL / OPEN</span>
              <i aria-hidden="true" />
            </div>
            <div className="form-grid">
              <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" maxLength={80} required /></label>
              <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" maxLength={120} required /></label>
              <label>Company<input name="company" type="text" autoComplete="organization" placeholder="Company name" maxLength={100} /></label>
              <label>Role / opportunity<input name="role" type="text" placeholder="Software developer" maxLength={120} /></label>
            </div>
            <label className="message-field">Message<textarea name="message" rows={5} placeholder="Tell me about the role, team and what you are building." maxLength={1500} required /></label>
            <label className="website-field" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
            <div className="form-footer">
              <button type="submit">Send opportunity <Arrow/></button>
              <span className="mono" role="status" aria-live="polite">{formStatus || "OPENS YOUR EMAIL APP"}</span>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <span>GANESH A. © 2026</span><span>SOFTWARE DEVELOPER</span><a href="#top">RETURN TO ORIGIN ↑</a>
      </footer>
    </main>
  );
}
