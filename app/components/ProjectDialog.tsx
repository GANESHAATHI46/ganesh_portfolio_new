import type { RefObject } from "react";
import type { Project } from "../types/portfolio";
import { trackContactButtonClick, trackProjectClick } from "../lib/gtm";
import { ArrowIcon } from "./icons/ArrowIcon";

interface ProjectDialogProps {
  dialogRef: RefObject<HTMLDialogElement | null>;
  project: Project | null;
  onClose: () => void;
  onClosed: () => void;
}

export function ProjectDialog({
  dialogRef,
  project,
  onClose,
  onClosed,
}: ProjectDialogProps) {
  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onClose={onClosed}
      onClick={(event) =>
        event.target === event.currentTarget && onClose()
      }
    >
      {project && (
        <div className="dialog-panel">
          <button
            className="dialog-close"
            type="button"
            onClick={onClose}
            aria-label="Close case study"
          >
            ×
          </button>
          <div className="dialog-meta mono">
            <span>SYS / {project.number}</span>
            <span>{project.status}</span>
          </div>
          <div className="dialog-kicker-wrap">
            <p className="dialog-type mono">{project.type}</p>
            <span className="dialog-period mono">TIMELINE // {project.period}</span>
          </div>
          <h2 id="project-dialog-title">{project.title}</h2>
          <div className="dialog-stack stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="case-grid">
            <article>
              <span className="mono">01 / PROBLEM</span>
              <p>{project.problem}</p>
            </article>
            <article>
              <span className="mono">02 / MY CONTRIBUTION</span>
              <p>{project.contribution}</p>
            </article>
            <article>
              <span className="mono">03 / OUTCOME</span>
              <p>{project.impact}</p>
            </article>
          </div>
          <div className="dialog-actions">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                data-gtm-handled="true"
                onClick={() => {
                  trackProjectClick(project.title, project.number, {
                    action: "visit_live_website",
                    project_url: project.link,
                  });
                }}
              >
                Visit live website <ArrowIcon />
              </a>
            )}
            <a
              href="#contact"
              data-gtm-handled="true"
              onClick={() => {
                trackContactButtonClick(
                  project.link ? "discuss_project_work" : "request_project_details"
                );
                onClose();
              }}
            >
              {project.link ? "Discuss this work" : "Request project details"}{" "}
              <ArrowIcon />
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}
