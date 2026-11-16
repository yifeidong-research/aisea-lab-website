export const lab = {
  shortName: 'AI-SEA Lab',
  name: 'AI Systems Engineering & Assurance Lab',
  affiliation: 'UTS Data Science Institute',
  mission: 'Advancing the engineering, reliability and trustworthiness of intelligent systems in real-world environments.',
  programme: 'From GenAI Prototypes to Production-Ready Systems',
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research/' },
  { label: 'People', href: '/people/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Contact', href: '/contact/' },
];

export const researchThemes = [
  {
    title: 'Systems engineering',
    summary: 'Designing, integrating and operating intelligent systems in real-world environments.',
    detail: 'How should intelligent components be integrated into software and workflows? We are interested in system architecture, interfaces, observability and the decisions that make systems easier to operate and maintain.',
  },
  {
    title: 'Reliability and evaluation',
    summary: 'Measuring how intelligent systems behave under changing conditions.',
    detail: 'How can teams measure performance when data, users and deployment conditions change? We are interested in evaluation design, failure analysis and monitoring over the system lifecycle.',
  },
  {
    title: 'Assurance and governance',
    summary: 'Building evidence to support decisions about when and how systems can be used.',
    detail: 'What evidence gives people grounds to deploy, supervise or retire an intelligent system? We are interested in traceability, human oversight and how teams communicate limitations and uncertainty.',
  },
];

export const programmeTopics = [
  { title: 'Assess readiness', detail: 'Define intended use, acceptance criteria and failure modes before deployment.' },
  { title: 'Evaluate in context', detail: 'Design tests around realistic tasks, operating conditions and human oversight.' },
  { title: 'Monitor after release', detail: 'Track changes in behaviour and define when to investigate, intervene or roll back.' },
];

export type Profile = { name: string; role: string; profileUrl?: string };
export type Publication = { title: string; authors: string; venue: string; year: number; url?: string };
export type Project = { title: string; description: string; url?: string };

export const people: Profile[] = [];
export const publications: Publication[] = [];
export const projects: Project[] = [];

// Add an approved public lab email address when one is available.
export const contactEmail: string = '';
