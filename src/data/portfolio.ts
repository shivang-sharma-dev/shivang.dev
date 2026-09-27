import type {
  Architecture,
  Certification,
  Experience,
  Outcome,
  Project,
} from "../types/portfolio";

export const profile = {
  name: "Shivang Sharma",
  initials: "SS",
  role: "DevOps & Cloud Engineer",
  email: "shivang.sharma.pro@gmail.com",
  githubUrl: "https://github.com/shivang-sharma-dev",
  linkedinUrl: "https://www.linkedin.com/in/shivang-sharma-91a5a9168/",
  resumeUrl: "/resume.pdf",
  location: "Jammu & Kashmir, India",
  introduction:
    "I work with AWS infrastructure, CI/CD pipelines, containerized applications, and production observability. At Grok Digital, my work spans deployment automation, security checks, monitoring, and cloud architecture.",
  about:
    "I’m a DevOps & Cloud Engineer with hands-on experience connecting infrastructure, delivery, and observability. My work includes AWS environments, automated quality and security checks, containerized services, and monitoring that helps teams investigate production issues.",
};
export const outcomes: Outcome[] = [
  {
    value: "≈65%",
    label: "Faster anomaly detection",
    context: "QCC Command Centre · Grok Digital",
  },
  {
    value: "≈60%",
    label: "Smaller container images",
    context: "AWS deployment project",
  },
  {
    value: "≈80%",
    label: "Less environment setup time",
    context: "Terraform & Ansible project",
  },
];
export const projects: Project[] = [
  {
    id: "aws-delivery",
    number: "01",
    title: "CI/CD-driven cloud deployment",
    category: "AWS / DELIVERY",
    summary:
      "A three-tier AWS EC2 environment with containerized services, Nginx traffic routing, and automated releases.",
    tags: ["AWS EC2", "Docker", "Nginx", "GitHub Actions", "IAM"],
    problem:
      "Make application delivery repeatable while managing access, service health, and container resource usage.",
    contributions: [
      "Designed and deployed a three-tier AWS EC2 environment with Nginx as a reverse proxy and load balancer.",
      "Implemented GitHub Actions build, test, and deployment stages with encrypted secret management.",
      "Added IAM-based access control and automated health checks.",
      "Applied multi-stage Docker builds to reduce image size and address memory bottlenecks.",
    ],
    outcome: outcomes[1],
    repositoryUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "infrastructure-automation",
    number: "02",
    title: "Repeatable AWS infrastructure",
    category: "INFRASTRUCTURE / AUTOMATION",
    summary:
      "Modular Terraform provisioning and Ansible configuration for consistent development and production environments.",
    tags: ["Terraform", "AWS", "Ansible", "GitHub Actions", "IAM"],
    problem:
      "Reduce manual setup and keep environment provisioning and server configuration consistent.",
    contributions: [
      "Provisioned VPC, EC2, S3, security groups, and IAM roles with modular Terraform.",
      "Automated server configuration using Ansible playbooks.",
      "Integrated provisioning into GitHub Actions to run after merges.",
      "Built a reusable environment for development and production deployments.",
    ],
    outcome: outcomes[2],
    repositoryUrl: undefined,
    liveUrl: undefined,
  },
];
export const experience: Experience = {
  role: "DevOps & Cloud Engineer",
  company: "Grok Digital",
  period: "Jan 2026 — Present",
  location: "Jammu & Kashmir, India",
  contributions: [
    "Built a production observability stack for a QCC Command Centre using Prometheus, Grafana, Loki, Promtail, and Alertmanager; reduced anomaly-detection time by approximately 65%.",
    "Built a DevSecOps CI/CD pipeline with GitHub Actions, AI-assisted code testing, self-hosted SonarQube quality gates, and SAST scanning.",
    "Containerized an internal microservice, reduced its image size by approximately 55% through multi-stage builds, and owned the production rollout.",
    "Contributed to AWS deployment architecture, infrastructure topology, auto-scaling policies, and separate staging and production environments.",
  ],
  tags: ["AWS", "DevSecOps", "Docker", "Prometheus", "Grafana"],
};
export const skills = [
  {
    name: "Cloud & infrastructure",
    items: [
      "AWS EC2",
      "VPC",
      "IAM",
      "S3",
      "RDS",
      "ElastiCache",
      "CloudWatch",
      "Route 53",
      "Auto Scaling",
      "Terraform",
      "Ansible",
    ],
  },
  {
    name: "Delivery & containers",
    items: [
      "GitHub Actions",
      "Git",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Multi-stage builds",
      "Release automation",
    ],
  },
  {
    name: "Observability & reliability",
    items: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Promtail",
      "Alertmanager",
      "Health checks",
      "Anomaly detection",
    ],
  },
  {
    name: "Systems, security & scripting",
    items: [
      "Linux / Ubuntu",
      "Nginx",
      "Networking",
      "SonarQube",
      "SAST",
      "Vulnerability scanning",
      "Python",
      "Bash",
      "SQL",
    ],
  },
];
// Owner-supplied titles and résumé entries. Dates and verification links are intentionally optional.
export const certifications: Certification[] = [
  {
    title: "Amazon Solution Architect Associate",
    issuer: "Amazon Web Services",
  },
  { title: "AWS Academy Graduate", issuer: "Amazon Web Services" },
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    title: "Education for Sustainable Development",
    issuer: "NPTEL · IIT Madras",
  },
  { title: "Entrepreneurship", issuer: "NPTEL · IIT Madras" },
  { title: "GitHub Fundamentals", issuer: "GitHub" },
];
export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "Shri Mata Vaishno Devi University",
  period: "2022 — 2026",
  grade: "CGPA 8.3 / 10",
  location: "Jammu & Kashmir, India",
};
export const architectures: Architecture[] = [
  {
    id: "delivery",
    title: "Application delivery on AWS",
    summary:
      "From a code change to containerized services, with traffic routing and health checks.",
    scope:
      "Conceptual overview from the résumé. Exact subnet placement and data-tier services are not specified.",
    nodes: [
      {
        id: "git",
        label: "GitHub",
        subtitle: "Source changes",
        detail:
          "GitHub hosts the source changes that enter the project’s CI/CD workflow.",
      },
      {
        id: "pipeline",
        label: "GitHub Actions",
        subtitle: "Build · test · deploy",
        detail:
          "The pipeline automates build, test, and deployment stages. Encrypted secrets support the delivery workflow.",
      },
      {
        id: "compute",
        label: "AWS EC2 + Docker",
        subtitle: "Containerized services",
        detail:
          "EC2 hosts the containerized services. Multi-stage builds reduced image size by approximately 60% in this project.",
      },
      {
        kind: "support",
        id: "routing",
        label: "Nginx",
        subtitle: "Proxy · load balancing",
        detail:
          "Nginx handles reverse proxy and load-balancing responsibilities. This is a delivery sequence; incoming user traffic reaches the routing layer before application services.",
      },
      {
        kind: "support",
        id: "checks",
        label: "Health checks + IAM",
        subtitle: "Health · access",
        detail:
          "Automated health checks and IAM-based access control support the deployment. These are supporting controls, not downstream traffic hops.",
      },
    ],
  },
  {
    id: "provisioning",
    title: "Infrastructure provisioning",
    summary:
      "Reusable infrastructure definitions, followed by automated server configuration.",
    scope:
      "Provisioning sequence from the résumé. This diagram documents the project; it does not provision resources.",
    nodes: [
      {
        id: "merge",
        label: "GitHub Actions",
        subtitle: "After merge",
        detail:
          "The infrastructure workflow integrates with GitHub Actions for automated provisioning after merges.",
      },
      {
        id: "terraform",
        label: "Terraform",
        subtitle: "Modular infrastructure",
        detail:
          "Reusable Terraform modules define AWS infrastructure for consistent development and production environments.",
      },
      {
        id: "resources",
        label: "AWS resources",
        subtitle: "VPC · EC2 · S3 · IAM",
        detail:
          "The environment includes VPC, EC2, S3, security groups, and IAM roles. Detailed resource placement is not specified in the résumé.",
      },
      {
        id: "ansible",
        label: "Ansible",
        subtitle: "Server configuration",
        detail:
          "Ansible playbooks automate server configuration, reducing environment setup time by approximately 80%.",
      },
    ],
  },
];
