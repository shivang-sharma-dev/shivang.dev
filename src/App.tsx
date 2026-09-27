import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Check,
  Download,
  Github,
  GraduationCap,
  Mail,
  Linkedin,
  MapPin,
  Terminal,
} from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { ArchitectureDiagram } from "./components/ArchitectureDiagram";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { ProjectCaseStudy } from "./components/ProjectCaseStudy";
import {
  certifications,
  education,
  experience,
  outcomes,
  profile,
  projects,
  skills,
} from "./data/portfolio";
export default function App() {
  const [active, setActive] = useState("overview");
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );
    const updateActiveSection = () => {
      let current = sections[0]?.id ?? "overview";
      const readingLine = Math.min(window.innerHeight * 0.25, 180);
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine)
          current = section.id;
        else break;
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        current = sections[sections.length - 1]?.id ?? current;
      }
      setActive(current);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("success");
    } catch {
      setCopyStatus("error");
    }
  }
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Sidebar active={active} />
      <main id="main">
        <section id="overview" className="overview">
          <div className="topbar">
            <span className="breadcrumb">
              Portfolio <span>/</span> Overview
            </span>
            <a className="button dark" href="#contact">
              Let’s connect <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero">
            <div className="hero-copy">
              <span className="eyebrow">
                SHIVANG SHARMA / DEVOPS & CLOUD ENGINEER
              </span>
              <h1>
                Automating delivery.
                <br />
                Building reliable
                <br />
                cloud systems<span>.</span>
              </h1>
              <p>{profile.introduction}</p>
              <div className="hero-actions">
                <a className="button dark" href="#projects">
                  Explore my projects <ArrowDown size={17} />
                </a>
                <a className="text-link" href={profile.resumeUrl} download>
                  <Download size={16} /> Download résumé
                </a>
              </div>
              <span className="hero-location">
                <MapPin size={14} />
                {profile.location}
              </span>
            </div>
            <div className="hero-panel">
              <div className="panel-header">
                <Terminal size={19} />
                <span>FROM CODE TO OPERATIONS</span>
              </div>
              <div className="system-row">
                <span>01</span>
                <strong>Infrastructure</strong>
                <span className="system-tool">AWS / Terraform</span>
              </div>
              <div className="system-row">
                <span>02</span>
                <strong>Delivery</strong>
                <span className="system-tool">CI/CD / Docker</span>
              </div>
              <div className="system-row">
                <span>03</span>
                <strong>Visibility</strong>
                <span className="system-tool">Metrics / Logs</span>
              </div>
              <div className="panel-footer">
                <span>CURRENT ROLE</span>
                <strong>
                  Grok Digital <ArrowUpRight size={14} />
                </strong>
              </div>
            </div>
          </div>
          <div className="impact-strip">
            {outcomes.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <div>
                  <h2>{item.label}</h2>
                  <p>{item.context}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="impact-note">
            Results reported in my résumé. Project measurement notes are not yet
            published.
          </p>
        </section>
        <section id="projects" className="content-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / SELECTED WORK</span>
              <h2>
                Projects with a purpose<span>.</span>
              </h2>
            </div>
            <span className="section-meta">02 projects / built on AWS</span>
          </div>
          <p className="section-intro">
            The problem, the implementation, and the result behind each project.
          </p>
          <div className="case-studies">
            {projects.map((project) => (
              <ProjectCaseStudy key={project.id} project={project} />
            ))}
          </div>
        </section>
        <section
          id="architecture"
          className="content-section architecture-section"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">02 / HOW THE PARTS CONNECT</span>
              <h2>
                Architecture, explained<span>.</span>
              </h2>
            </div>
            <span className="section-meta">Interactive project overviews</span>
          </div>
          <ArchitectureDiagram />
        </section>
        <section id="experience" className="content-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / PROFESSIONAL EXPERIENCE</span>
              <h2>
                Work beyond the lab<span>.</span>
              </h2>
            </div>
            <span className="section-meta">Jan 2026 — Present</span>
          </div>
          <ExperienceTimeline experience={experience} />
        </section>
        <section id="skills" className="content-section skills-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">04 / THE TOOLBOX</span>
              <h2>
                Tools behind the work<span>.</span>
              </h2>
            </div>
            <span className="section-meta">Skills listed in my résumé</span>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-group" key={group.name}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.name}</h3>
                <div className="tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="content-section about-section">
          <div>
            <span className="eyebrow">05 / BACKGROUND</span>
            <h2>
              Behind the terminal<span>.</span>
            </h2>
            <p>{profile.about}</p>
            <p className="about-focus">
              My focus: repeatable environments, safer releases, and clearer
              visibility into running systems.
            </p>
          </div>
          <article className="education-card">
            <GraduationCap size={27} />
            <span className="eyebrow">EDUCATION / {education.period}</span>
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
            <span>{education.location}</span>
            <strong>{education.grade}</strong>
          </article>
        </section>
        <section
          id="certifications"
          className="content-section certifications-section"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">06 / CONTINUOUS LEARNING</span>
              <h2>
                Certifications & learning<span>.</span>
              </h2>
            </div>
            <span className="section-meta">Cloud foundations & beyond</span>
          </div>
          <div className="certification-grid">
            {certifications.map((cert) => (
              <article key={cert.title} className="certification-card">
                <span className="credential-icon">
                  <Award size={23} />
                </span>
                <div>
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                  {cert.date && <span>{cert.date}</span>}
                  {cert.credentialUrl && (
                    <a
                      className="text-link"
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View credential <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div>
            <span className="eyebrow">07 / NEXT CONVERSATION</span>
            <h2>
              Let’s talk about
              <br />
              your next system<span>.</span>
            </h2>
            <p>
              For DevOps / Cloud roles, internships,
              <br />
              or a conversation about infrastructure and delivery.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button dark" href={`mailto:${profile.email}`}>
              <Mail size={17} /> Get in touch <ArrowUpRight size={17} />
            </a>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="contact-links">
              <a
                className="text-link"
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> GitHub <ArrowUpRight size={14} />
              </a>
              {profile.linkedinUrl && (
                <a className="text-link" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                  <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
                </a>
              )}
              <button className="text-link" onClick={copyEmail}>
                {copyStatus === "success" ? (
                  <Check size={16} />
                ) : (
                  <Mail size={16} />
                )}
                Copy email
              </button>
            </div>
            <p role="status" className="copy-status">
              {copyStatus === "success"
                ? "Email copied."
                : copyStatus === "error"
                  ? `Copy manually: ${profile.email}`
                  : ""}
            </p>
          </div>
        </section>
        <footer>
          <a href="#overview">
            <Terminal size={18} />
            {profile.name}
          </a>
          <span>Infrastructure. Delivery. Observability.</span>
          <a href="#overview">Back to top ↑</a>
        </footer>
      </main>
    </div>
  );
}
