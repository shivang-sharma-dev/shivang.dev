import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  FileText,
  Github,
  Layers,
  LayoutDashboard,
  Linkedin,
  Mail,
  Menu,
  Terminal,
  UserRound,
  X,
} from "lucide-react";
import { profile } from "../data/portfolio";
const links = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "architecture", label: "Architecture", icon: Layers },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "skills", label: "Tech stack", icon: Terminal },
  { id: "about", label: "About & education", icon: UserRound },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];
export function Sidebar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const handle = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [open]);
  return (
    <>
      <header className="mobile-header">
        <a className="brand" href="#overview">
          <Terminal size={23} /> Portfolio<span>.</span>
        </a>
        <button
          className="icon-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="sidebar"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open && (
        <button
          className="nav-backdrop"
          aria-label="Dismiss navigation"
          onClick={() => setOpen(false)}
        />
      )}
      <aside id="sidebar" className={`sidebar ${open ? "is-open" : ""}`}>
        <a className="brand" href="#overview" onClick={() => setOpen(false)}>
          <Terminal size={25} /> Portfolio<span>.</span>
        </a>
        <span className="sidebar-label">THE WORKSPACE</span>
        <nav aria-label="Main navigation">
          {links.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </nav>
        <div className="sidebar-links">
          <span className="sidebar-label">ELSEWHERE</span>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
            <ArrowUpRight size={15} />
          </a>
          {profile.linkedinUrl && (
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
              <ArrowUpRight size={15} />
            </a>
          )}
          <a href={profile.resumeUrl} download>
            <FileText size={18} />
            Résumé
            <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="sidebar-focus">
          <span className="sidebar-label">ENGINEERING FOCUS</span>
          <p>
            Automate delivery.
            <br />
            Understand the system.
          </p>
        </div>
        <div className="sidebar-profile">
          <span className="avatar">SS</span>
          <div>
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </div>
        </div>
      </aside>
    </>
  );
}
