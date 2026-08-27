import type { CSSProperties } from "react";
import type { Project } from "../types/portfolio";
import { ArrowIcon } from "./icons/ArrowIcon";

interface ProjectsSectionProps {
  projects: Project[];
  onOpenProject: (project: Project, trigger: HTMLButtonElement) => void;
}

export function ProjectsSection({
  projects,
  onOpenProject,
}: ProjectsSectionProps) {
  return (
    <section className="projects section" id="work">
      <div className="section-shell">
        <div className="section-intro reveal">
          <p className="eyebrow mono">SELECTED SYSTEMS / 05</p>
          <h2>
            Proof of
            <br />
            <span>trajectory.</span>
          </h2>
          <p>
            Products across travel, lead intelligence, realtime communication,
            private mobile finance and desktop data systems.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <button
              className="project-row reveal"
              key={project.title}
              type="button"
              aria-haspopup="dialog"
              onClick={(event) => onOpenProject(project, event.currentTarget)}
              style={{ "--delay": `${index * 80}ms` } as CSSProperties}
            >
              <div className="project-index mono">SYS / {project.number}</div>
              <div className="project-main">
                <div className="project-kicker">
                  <p className="mono">{project.type}</p>
                  <span className="project-status mono">{project.status}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className="project-result">
                <strong>{project.result}</strong>
                <span className="mono">{project.label}</span>
              </div>
              <div className="project-action">
                <span className="mono">CASE STUDY</span>
                <i className="project-arrow">
                  <ArrowIcon />
                </i>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
