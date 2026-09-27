import { BriefcaseBusiness, MapPin } from "lucide-react";
import type { Experience } from "../types/portfolio";
export function ExperienceTimeline({ experience }: { experience: Experience }) {
  return (
    <article className="experience-card">
      <div className="timeline-marker">
        <BriefcaseBusiness size={23} />
      </div>
      <div className="experience-main">
        <div className="experience-heading">
          <div>
            <h3>{experience.role}</h3>
            <p>{experience.company}</p>
          </div>
          <span>{experience.period}</span>
        </div>
        <span className="location">
          <MapPin size={14} />
          {experience.location}
        </span>
        <ul>
          {experience.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="tags">
          {experience.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
