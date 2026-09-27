export interface Outcome {
  value: string;
  label: string;
  context: string;
}
export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  problem: string;
  contributions: string[];
  outcome: Outcome;
  repositoryUrl?: string;
  liveUrl?: string;
}
export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  contributions: string[];
  tags: string[];
}
export interface Certification {
  title: string;
  issuer: string;
  credentialUrl?: string;
  date?: string;
}
export interface ArchitectureNode {
  kind?: "support";
  id: string;
  label: string;
  subtitle: string;
  detail: string;
}
export interface Architecture {
  id: string;
  title: string;
  summary: string;
  scope: string;
  nodes: ArchitectureNode[];
}
