import { ExperienceItemProps, ExperienceItemType } from './components/ExperienceItem/types';

export const EXPERIENCE_ITEMS: ExperienceItemProps[] = [
  {
    type: ExperienceItemType.Company,
    dateRange: 'Dec 2023 — Mar 2026',
    company: { name: 'Apiko', description: 'Digital transformation consultancy · Ternopil, UA' },
    position: 'Full-Stack Developer',
    description:
      'Shipped front-ends, back-ends, admin dashboards, browser extensions, and CLI tools across four enterprise projects. Owned features end-to-end and integrated complex third-party identity, AI, and data systems.',
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Nest.js',
      'PostgreSQL',
      'MongoDB',
      'GraphQL',
      'Auth0',
      'Chrome API',
      'PayloadCMS',
    ],
    projects: [
      {
        name: 'Lanai',
        dateRange: 'Apr 2024 – Aug 2025',
        description:
          'AI-native enterprise SaaS for usage monitoring & policy enforcement, founded by Google + VMware veterans. Built a Chrome extension to track GenAI activity across emerging tools, a Next.js admin panel with Chart.js dashboards, and Nest.js services to securely process prompt data. Integrated Auth0, Okta, Microsoft Graph, and PingOne identity flows.',
      },
      {
        name: 'Hotaly',
        dateRange: 'Sep 2025 – Feb 2026',
        description:
          'Multi-brand venue listing platform — built front-end sites and a unified admin dashboard from a single Next.js + PayloadCMS + Radix codebase, backed by MongoDB.',
      },
      {
        name: "Andy's Bet Club",
        dateRange: 'Aug 2025 – Sep 2025 and March 2026 - Apr 2026',
        description:
          'Football prediction game with leaderboards. Implemented ranking logic, scoring, and football-data API integration on React, Nest.js, PostgreSQL, and Redis.',
      },
      {
        name: 'AI User-Story Generator (PoC)',
        dateRange: 'Mar 2026',
        description:
          'Node.js pipeline that turns screen recordings into structured implementation stories. CLI with ffmpeg audio/frame extraction; OpenAI Function Calling correlates narration with UI actions to emit schema-enforced JSON.',
      },
      {
        name: 'Huddex',
        dateRange: 'Dec 2023 – Mar 2024',
        description:
          'Peer-to-peer package shipping mobile app. Built admin panel and GraphQL backend services; integrated SendGrid, SMS, Slack notifications, and IDWise identity verification.',
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
    dateRange: '2021 — 2022',
    company: { name: 'APIKO ACADEMY', description: 'Bootcamp' },
    position: 'Front-end React JS Web Development Course',
    description:
      'Industry-led programme that bridged self-taught fundamentals into a production React workflow — directly preceding my hire as a junior.',
  },
];
