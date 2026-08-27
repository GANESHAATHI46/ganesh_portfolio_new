import type { CSSProperties } from "react";
import type {
  CredentialItem,
  EducationItem,
  ExperienceItem,
} from "../types/portfolio";

interface CareerSectionProps {
  education: EducationItem[];
  experience: ExperienceItem[];
  credentials: CredentialItem[];
}

export function CareerSection({
  education,
  experience,
  credentials,
}: CareerSectionProps) {
  return (
    <section className="career section" id="education">
      <div className="section-shell">
        <div className="career-head reveal">
          <p className="eyebrow mono">GROUND CONTROL / FORMATION</p>
          <h2>
            Education &amp;
            <br />
            <span>experience.</span>
          </h2>
          <p>
            A computer-science foundation, practical database work and
            experience across software development and quality control.
          </p>
        </div>

        <div className="career-grid">
          <div className="career-column reveal">
            <div className="career-label mono">
              EDUCATION / {String(education.length).padStart(2, "0")}
            </div>
            {education.map((item) => (
              <article className="career-card" key={item.degree}>
                <span className="career-date mono">{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <strong>{item.grade}</strong>
              </article>
            ))}
          </div>

          <div
            className="career-column reveal"
            style={{ "--delay": "100ms" } as CSSProperties}
          >
            <div className="career-label mono">EXPERIENCE / PRESENT</div>
            {experience.map((item) => (
              <article
                className={
                  item.featured ? "career-card featured" : "career-card"
                }
                key={item.role + item.company}
              >
                <span className="career-date mono">{item.period}</span>
                <h3>{item.role}</h3>
                <p>
                  {item.company} · {item.location}
                </p>
                {item.points && (
                  <ul className="experience-points">
                    {item.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                )}
                {item.summary && <strong>{item.summary}</strong>}
              </article>
            ))}
          </div>
        </div>

        {credentials.map((cred) => (
          <div className="credential-strip reveal" key={cred.title}>
            <div>
              <span className="mono">
                {cred.category} / {cred.date}
              </span>
              <h3>{cred.title}</h3>
            </div>
            <p>{cred.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
