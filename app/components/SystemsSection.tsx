import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { SkillGroup } from "../types/portfolio";

interface SystemsSectionProps {
  skillGroups: SkillGroup[];
}

export function SystemsSection({ skillGroups }: SystemsSectionProps) {
  return (
    <section className="systems section" id="skills" aria-label="Skills and About">
      <div className="section-shell">
        <div className="systems-head reveal">
          <p className="eyebrow mono">OPERATIONAL RANGE</p>
          <h2>
            Skills &amp;<br />
            <span>Systems.</span>
          </h2>
        </div>
        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <article
              className="skill-row reveal"
              key={group.index}
              style={{ "--delay": `${index * 80}ms` } as CSSProperties}
            >
              <span className="mono">{group.index}</span>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
            </article>
          ))}
        </div>
        <div className="about-block reveal" id="about">
          <div className="about-photo-col">
            <div className="about-photo-frame">
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
                width={380}
                height={380}
                className="about-portrait"
                loading="lazy"
                decoding="async"
              />
              <div className="photo-overlay" />
            </div>
            <div className="photo-caption mono">
              <span>GANESH A</span>
              <span>10.3673° N / 77.9803° E</span>
            </div>
          </div>
          <div className="about-text-col">
            <p className="eyebrow mono">ABOUT / GANESH A.</p>
            <h2 className="sr-only">About Ganesh A — Full Stack Developer in Dindigul</h2>
            <blockquote>
              “I care about the screen people see—and the engineering they never
              have to think about.”
            </blockquote>
            <div className="about-details">
              <p>
                Ganesh A is a Full Stack Developer based in Dindigul, Tamil Nadu,
                building modern web and mobile products across interface, server,
                data and production delivery.
              </p>
              <div>
                <p>
                  Specializing in React, React Native, Python, Django, FastAPI,
                  PostgreSQL and automation tools to deliver robust, high-performance
                  software.
                </p>
                <p style={{ marginTop: "14px" }}>
                  <Link
                    href="/about"
                    className="mono"
                    style={{
                      color: "var(--amber)",
                      fontWeight: 700,
                      letterSpacing: ".08em",
                      textDecoration: "underline",
                      fontSize: "12px",
                    }}
                  >
                    READ FULL PROFILE &amp; PUBLIC PROFILES →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

