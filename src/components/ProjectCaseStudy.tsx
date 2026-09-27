import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "../types/portfolio";
export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <article className="case-study" id={project.id}>
      <div className="case-summary">
        <span className="eyebrow">
          {project.number} / {project.category}
        </span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="case-result">
          <strong>{project.outcome.value}</strong>
          <span>
            {project.outcome.label}
            <small>Reported project result</small>
          </span>
        </div>
      </div>
      <div className="case-detail">
        <span className="eyebrow">THE PROBLEM</span>
        <p>{project.problem}</p>
        <h4>What I built</h4>
        <ul>
          {project.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="case-links">
          {project.repositoryUrl ? (
            <a
              className="text-link"
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> View repository <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="link-note">
              Project repository link coming soon
            </span>
          )}
          {project.liveUrl && (
            <a
              className="text-link"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live project <ArrowUpRight size={16} />
            </a>
          )}
          <a href="#architecture" className="text-link">
            Explore architecture <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
