import { ExperienceItemProps, ExperienceItemType } from './components/ExperienceItem/types';

export const EXPERIENCE_ITEMS: ExperienceItemProps[] = [
  {
    type: ExperienceItemType.Company,
    dateRange: 'Apr 2022 — Present',
    company: { name: 'Apiko', description: 'Digital transformation consultancy · Ternopil, UA' },
    position: 'Full-Stack Developer',
    description:
      'Delivered full-stack products for international clients: backend services, APIs and integrations in Node.js/TypeScript, a production Python codebase, multi-tenant services with enterprise SSO, and React/Next.js tools used daily by operations and content teams. Owned delivery end to end, including coordinating directly with client engineering teams and third-party vendors.',
    technologies: [
      'TypeScript',
      'Node.js',
      'Nest.js',
      'Fastify',
      'Python',
      'FastAPI',
      'React',
      'Next.js',
      'GraphQL',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Auth0',
      'Chrome API',
      'PayloadCMS',
      'AWS',
    ],
    projects: [
      {
        name: 'Dexter',
        dateRange: 'Jun 2026 – Sep 2026',
        description:
          'Event sales & lead-intake platform for restaurants and hotels. Led a 3-person team and built a JSON-driven form engine with per-customer theming; shipped iframe-embedded branded forms for 40+ venues across WordPress, Webflow and BentoBox, with onboarding down to 2–3 hours.',
      },
      {
        name: 'Internal Recruitment & Employee Management Platform',
        dateRange: 'Jul 2025 – Feb 2026',
        description:
          'Sole engineer on an unmaintained internal platform, brought back into daily use by the recruitment and accounting teams. Cut the candidate-listing endpoint from ~20s to ~2s, migrated Node.js v14 → v22, rebuilt the UI on shadcn/ui, and added PDF CV generation and ATS-style application scoring.',
      },
      {
        name: 'Hotaly',
        dateRange: 'Sep 2024 – Jun 2025',
        description:
          'Multi-brand venue listing platform. Maintained the Python FastAPI backend (SQLAlchemy, PostgreSQL) behind venue search, availability and booking, built 3 branded sites from one Next.js codebase, and designed the Payload CMS model and Radix UI operations dashboard.',
      },
      {
        name: "Andy's Bet Club",
        dateRange: 'Feb 2024 – May 2024 and Mar 2026 – May 2026',
        description:
          'Premier League prediction game that reached 40,000+ registered users in its first 7 days. Built the position-weighted scoring engine, a Redis-backed leaderboard with sub-millisecond rank lookups, and a football-data sync service resilient to third-party API outages.',
      },
      {
        name: 'Lanai',
        dateRange: 'Apr 2022 – Jan 2024',
        description:
          'Enterprise AI-monitoring SaaS. Built a Manifest V3 Chrome extension that detects AI prompts by request content rather than URL lists, a multi-tenant Nest.js backend on CockroachDB with row-level isolation, and a unified SSO pipeline across Auth0, Okta, Microsoft Graph and PingOne.',
      },
    ],
  },
  {
    type: ExperienceItemType.Education,
    dateRange: '2024 — 2026',
    company: { name: 'WEST UKRAINIAN NATIONAL UNIVERSITY', description: 'Ternopil, UA' },
    position: "Master's Degree in Software Engineering",
    description: 'Advanced studies in software engineering, building on the foundation laid in undergrad.',
  },
  {
    type: ExperienceItemType.Education,
    dateRange: '2020 — 2024',
    company: { name: 'WEST UKRAINIAN NATIONAL UNIVERSITY', description: 'Ternopil, UA' },
    position: "Bachelor's Degree in Software Engineering",
    description:
      'Four-year programme covering computer science fundamentals, software architecture, and engineering practice.',
  },
  {
    type: ExperienceItemType.Education,
    dateRange: '2020 — 2021',
    company: { name: 'APIKO ACADEMY', description: 'Bootcamp' },
    position: 'Front-end React JS Web Development Course',
    description:
      'Industry-led programme that bridged self-taught fundamentals into a production React workflow — directly preceding my hire as a junior.',
  },
];
