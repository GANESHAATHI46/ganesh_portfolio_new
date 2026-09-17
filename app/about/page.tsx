import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { siteConfig } from "../data/siteConfig";
import { skillGroups } from "../data/skills";
import { educationList, experienceList } from "../data/career";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "About Ganesh A | Full Stack Developer in Dindigul",
  description:
    "Learn about Ganesh A, a Full Stack Developer based in Dindigul, Tamil Nadu, building modern web applications, React and React Native apps, Python/Django/FastAPI APIs, and scalable databases.",
  alternates: {
    canonical: "https://www.ganeshdeveloper.in/about/",
  },
  openGraph: {
    type: "profile",
    title: "About Ganesh A | Full Stack Developer in Dindigul",
    description:
      "Biography, technical background, core technologies, and verified public profiles of Ganesh A, a Full Stack Developer based in Dindigul, Tamil Nadu.",
    url: "https://www.ganeshdeveloper.in/about/",
    siteName: "Ganesh A | Full Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "/ganesh.jpg",
        width: 800,
        height: 800,
        alt: "Ganesh A — Full Stack Developer in Dindigul, Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ganesh A | Full Stack Developer in Dindigul",
    description:
      "Biography, technical background, core technologies, and verified public profiles of Ganesh A, a Full Stack Developer based in Dindigul, Tamil Nadu.",
    images: ["/ganesh.jpg"],
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://www.ganeshdeveloper.in/about/#profile",
  "url": "https://www.ganeshdeveloper.in/about/",
  "name": "About Ganesh A | Full Stack Developer in Dindigul",
  "description":
    "Biography, technical background, core technologies, and verified public profiles of Ganesh A, a Full Stack Developer based in Dindigul, Tamil Nadu.",
  "mainEntity": {
    "@id": "https://www.ganeshdeveloper.in/#person"
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <Navbar />
      <main className="subpage-container" id="top">
        <div className="section-shell">
          {/* Hero Identity */}
          <header className="subpage-hero">
            <p className="eyebrow mono">PERSONAL ENTITY // FULL STACK DEVELOPER</p>
            <h1>
              Ganesh A
              <br />
              <span>Full Stack Developer.</span>
            </h1>
            <p className="subpage-subtitle">
              Based in Dindigul, Tamil Nadu, India. Building modern web applications,
              mobile experiences, and resilient backend systems.
            </p>
          </header>

          {/* Profile Overview */}
          <section className="profile-grid" aria-label="Professional Profile">
            <div className="profile-card">
              <div className="about-photo-frame" style={{ maxWidth: "100%" }}>
                <div className="photo-corner photo-corner-tl" />
                <div className="photo-corner photo-corner-tr" />
                <div className="photo-corner photo-corner-bl" />
                <div className="photo-corner photo-corner-br" />
                <div className="photo-hud-tag mono">
                  <span>DEV // GA-01</span>
                  <i />
                </div>
                <Image
                  src="/ganesh.webp"
                  alt="Ganesh A — Full Stack Developer in Dindigul, Tamil Nadu"
                  width={340}
                  height={340}
                  className="about-portrait"
                  priority
                />
                <div className="photo-overlay" />
              </div>
              <div className="photo-caption mono" style={{ marginTop: "16px" }}>
                <span>{siteConfig.name}</span>
                <span>{siteConfig.coordinates}</span>
              </div>
              <div
                className="mono"
                style={{
                  marginTop: "20px",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--line)",
                  fontSize: "11px",
                  color: "var(--text-dim)",
                  lineHeight: "1.8",
                }}
              >
                <p style={{ margin: 0 }}>
                  <b style={{ color: "var(--text)" }}>PRIMARY:</b> {siteConfig.name}
                </p>
                <p style={{ margin: 0 }}>
                  <b style={{ color: "var(--text)" }}>ROLE:</b> {siteConfig.role}
                </p>
                <p style={{ margin: 0 }}>
                  <b style={{ color: "var(--text)" }}>LOCATION:</b> {siteConfig.location}
                </p>
                <p style={{ margin: 0 }}>
                  <b style={{ color: "var(--text)" }}>KNOWN AS:</b> Ganesh Developer, Ganesh A Developer
                </p>
              </div>
            </div>

            <div className="profile-bio" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <article>
                <h2 style={{ fontSize: "28px", letterSpacing: "-.04em", margin: "0 0 16px", color: "var(--text)" }}>
                  Professional Summary
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.75", color: "var(--text-muted)", margin: "0 0 16px" }}>
                  Ganesh A is a Full Stack Developer based in Dindigul, Tamil Nadu, with hands-on experience
                  designing, developing, and deploying digital software solutions. He bridges client-side
                  responsiveness with server-side stability, taking software from initial architecture to
                  production release.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.75", color: "var(--text-muted)", margin: "0 0 16px" }}>
                  Operating publicly as <strong>Ganesh A</strong> (also referenced as <strong>Ganesh Developer</strong> and <strong>Ganesh A Developer</strong>),
                  he works across modern frontend ecosystems including React and React Native, alongside robust backend
                  frameworks like Python, Django, FastAPI, and Laravel, connected to relational PostgreSQL and MySQL databases.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.75", color: "var(--text-muted)", margin: 0 }}>
                  His technical background combines a Bachelor of Science in Computer Science from Sree Vee College
                  with commercial software engineering at Inpand Technologies in Dindigul, where he develops backend APIs,
                  database architectures, AI workflows with LangChain and LangGraph, and cross-platform mobile interfaces.
                </p>
              </article>

              {/* Core Technologies */}
              <article style={{ borderTop: "1px solid var(--line)", paddingTop: "28px" }}>
                <h3 style={{ fontSize: "20px", letterSpacing: "-.03em", margin: "0 0 18px", color: "var(--text)" }}>
                  Core Technologies &amp; Capabilities
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
                  {skillGroups.map((group) => (
                    <div
                      key={group.index}
                      style={{
                        padding: "16px",
                        border: "1px solid var(--line)",
                        background: "var(--surface)",
                        borderRadius: "4px",
                      }}
                    >
                      <span className="mono" style={{ color: "var(--amber)", fontSize: "11px", fontWeight: 700 }}>
                        {`${group.index} // ${group.title.toUpperCase()}`}
                      </span>
                      <p style={{ fontSize: "13px", lineHeight: "1.6", margin: "8px 0 0", color: "var(--text-muted)" }}>
                        {group.items}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>

          {/* FIND GANESH ONLINE SECTION */}
          <section className="find-online-box" aria-labelledby="find-online-heading">
            <p className="eyebrow mono">VERIFIED PROFILES // CANONICAL ENTITY</p>
            <h2 id="find-online-heading" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", letterSpacing: "-.05em", margin: "10px 0 12px", color: "var(--text)" }}>
              Find Ganesh Online
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", margin: 0, maxWidth: "640px" }}>
              The following verified public developer and social profiles represent Ganesh A. Each profile confirms the single, authoritative identity of Ganesh Developer:
            </p>

            <div className="find-online-grid">
              <a
                href={siteConfig.siteUrl}
                className="find-online-card"
                rel="me"
                aria-label="Official Portfolio of Ganesh A"
              >
                <span className="mono">CANONICAL WEBSITE</span>
                <strong>
                  Portfolio — Ganesh A
                  <i style={{ fontStyle: "normal", color: "var(--amber)" }}>→</i>
                </strong>
                <span>https://www.ganeshdeveloper.in</span>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                className="find-online-card"
                aria-label="LinkedIn profile of Ganesh A"
              >
                <span className="mono">PROFESSIONAL NETWORK</span>
                <strong>
                  LinkedIn — Ganesh A
                  <i style={{ fontStyle: "normal", color: "var(--amber)" }}>↗</i>
                </strong>
                <span>linkedin.com/in/ganesh-software-developer</span>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="me noopener noreferrer"
                className="find-online-card"
                aria-label="GitHub profile of Ganesh A"
              >
                <span className="mono">CODE REPOSITORIES</span>
                <strong>
                  GitHub — Ganesh A
                  <i style={{ fontStyle: "normal", color: "var(--amber)" }}>↗</i>
                </strong>
                <span>github.com/GANESHAATHI46</span>
              </a>

              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="me noopener noreferrer"
                className="find-online-card"
                aria-label="Instagram profile of Ganesh A"
              >
                <span className="mono">PUBLIC MEDIA</span>
                <strong>
                  Instagram — Ganesh A
                  <i style={{ fontStyle: "normal", color: "var(--amber)" }}>↗</i>
                </strong>
                <span>instagram.com/ganesh__official___</span>
              </a>
            </div>
          </section>

          {/* Selected Work & Career Highlights */}
          <section style={{ padding: "70px 0", borderBottom: "1px solid var(--line)" }} aria-label="Selected Projects">
            <p className="eyebrow mono">ENGINEERED PRODUCTS</p>
            <h2 style={{ fontSize: "36px", letterSpacing: "-.04em", margin: "10px 0 24px", color: "var(--text)" }}>
              Selected Projects by Ganesh A
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {projects.map((project) => (
                <div
                  key={project.number}
                  style={{
                    padding: "24px",
                    border: "1px solid var(--line)",
                    background: "var(--surface)",
                    borderRadius: "4px",
                  }}
                >
                  <span className="mono" style={{ fontSize: "11px", color: "var(--amber)", fontWeight: 700 }}>
                    {`${project.number} // ${project.type}`}
                  </span>
                  <h3 style={{ fontSize: "22px", margin: "10px 0 8px", color: "var(--text)" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.65", color: "var(--text-muted)", margin: "0 0 16px" }}>
                    {project.summary}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="mono"
                        style={{
                          fontSize: "10px",
                          padding: "4px 8px",
                          background: "var(--tag-bg)",
                          border: "1px solid var(--tag-border)",
                          borderRadius: "2px",
                          color: "var(--tag-text)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience & Education */}
          <section style={{ padding: "70px 0" }} aria-label="Career and Education">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "50px" }}>
              <div>
                <p className="eyebrow mono">COMMERCIAL WORK</p>
                <h2 style={{ fontSize: "28px", letterSpacing: "-.03em", margin: "10px 0 20px", color: "var(--text)" }}>
                  Experience
                </h2>
                {experienceList.map((exp) => (
                  <article
                    key={exp.role + exp.company}
                    style={{
                      padding: "20px 0",
                      borderBottom: "1px solid var(--line)",
                    }}
                  >
                    <span className="mono" style={{ fontSize: "11px", color: "var(--text-dim)" }}>
                      {exp.period}
                    </span>
                    <h3 style={{ fontSize: "20px", margin: "8px 0 4px", color: "var(--text)" }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: "14px", color: "var(--amber)", margin: "0 0 10px", fontWeight: 600 }}>
                      {exp.company} · {exp.location}
                    </p>
                    {exp.points && (
                      <ul style={{ margin: 0, paddingLeft: "18px", color: "var(--text-muted)", fontSize: "13px", lineHeight: "1.7" }}>
                        {exp.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>

              <div>
                <p className="eyebrow mono">ACADEMIC CREDENTIALS</p>
                <h2 style={{ fontSize: "28px", letterSpacing: "-.03em", margin: "10px 0 20px", color: "var(--text)" }}>
                  Education
                </h2>
                {educationList.map((edu) => (
                  <article
                    key={edu.degree}
                    style={{
                      padding: "20px 0",
                      borderBottom: "1px solid var(--line)",
                    }}
                  >
                    <span className="mono" style={{ fontSize: "11px", color: "var(--text-dim)" }}>
                      {edu.period}
                    </span>
                    <h3 style={{ fontSize: "20px", margin: "8px 0 4px", color: "var(--text)" }}>
                      {edu.degree}
                    </h3>
                    <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: "0 0 6px" }}>
                      {edu.institution}
                    </p>
                    <strong className="mono" style={{ fontSize: "11px", color: "var(--amber)" }}>
                      {edu.grade}
                    </strong>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
