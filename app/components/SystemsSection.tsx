import type { CSSProperties } from "react";
import type { SkillGroup } from "../types/portfolio";

interface SystemsSectionProps {
  skillGroups: SkillGroup[];
}

export function SystemsSection({ skillGroups }: SystemsSectionProps) {
  return (
    <section className="systems section" id="systems">
      <div className="section-shell">
        <div className="systems-head reveal">
          <p className="eyebrow mono">OPERATIONAL RANGE</p>
          <h2>
            Systems I<br />
            <span>operate.</span>
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
        <div className="about-block reveal">
          <p className="mono">ABOUT / GANESH A.</p>
          <blockquote>
            “I care about the screen people see—and the engineering they never
            have to think about.”
          </blockquote>
          <div>
            <p>
              Software developer from Tamil Nadu, India, building modern web and
              mobile products across interface, server, data and delivery.
            </p>
            <p>
              Currently focused on joining a product-minded team where I can
              solve real problems, learn fast and ship reliable software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
