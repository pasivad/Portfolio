import { WorkEntity } from './components/SelectedWorkItem/types';

export const SELECTED_WORK: WorkEntity[] = [
  {
    type: 'FEATURED · EVENT SALES PLATFORM',
    name: 'Dexter',
    description:
      'Event sales & lead-intake platform for restaurants and hotels. Embeddable inquiry forms that capture and qualify private event leads and route them to the venue’s event management system.',
    technologies: [
      'TypeScript',
      'Nest.js',
      'GraphQL',
      'Apollo',
      'MongoDB',
      'React',
      'Vite',
      'Antd',
      'Socket.IO',
      'Sentry',
      'AWS S3',
      'CloudFront',
    ],
    role: 'Team Lead · Full-Stack',
    date: '2026',
    team: '3 people (led)',
    duration: 'Jun 2026 – Sep 2026',
    overview:
      'Dexter helps restaurants and hotels sell private events. Venues embed a branded inquiry form on their own site; Dexter captures and qualifies the lead, then routes it into the venue’s event management system or inbox. I led a 3-person team, ran daily standups with the client, and coordinated delivery end to end.',
    role_detail:
      'I owned the form engine and the embedding layer end to end, and led the team delivering it: splitting the work into deliverables, running daily standups directly with the client, and taking the build from a per-customer bespoke form into a configuration-driven product that a non-engineer can onboard.',
    contributions: [
      {
        headline: 'JSON-driven form engine',
        body: 'Built a generic engine where form structure and fields are defined as JSON and rendered with themeable CSS classes — so a new brand-specific form is configuration rather than new code.',
      },
      {
        headline: 'Per-customer brand theming',
        body: 'Delivered a theming layer so each venue’s embedded form matches its own site’s look — typography, colour, spacing and control styling driven from the customer’s theme config.',
      },
      {
        headline: 'Iframe embedding across CMS platforms',
        body: 'Implemented iframe-based embedding and built and deployed branded forms for 40+ venue customers, integrating them into WordPress, Webflow and BentoBox sites without host CSS leaking into the form.',
      },
      {
        headline: 'AI-assisted onboarding',
        body: 'Configured an onboarding workflow that generates a new customer’s form JSON and theme from their existing site, bringing a venue fully live in 2–3 hours instead of a development cycle.',
      },
    ],
    url: 'teamdexter.com',
    metrics: [
      { v: '40+', l: 'venue customers live' },
      { v: '2–3 h', l: 'to onboard a venue' },
      { v: 'JSON', l: 'forms as config' },
      { v: '3', l: 'person team led' },
    ],
    architecture: [
      'Venue site · WordPress / Webflow / BentoBox',
      '  | embed script mounts an isolated iframe',
      '    ▼',
      'Embedded form · React + Vite',
      '  | JSON form definition + per-brand theme tokens',
      '    ▼',
      'Nest.js API · GraphQL (Apollo)',
      '  | validation, lead qualification, Socket.IO events',
      '    ▼',
      'MongoDB',
      '  | form definitions, customer themes, captured leads',
      '    ▼',
      'Event management system · venue inbox',
      '  | qualified leads routed to where sales already works',
      '    ▼',
      'AWS S3 + CloudFront · Sentry',
      '  | form bundles, brand assets, error monitoring',
    ],
    challenges: [
      {
        problem:
          'Every venue wanted a different set of questions and a different look, so each new customer was shaping up to be a bespoke front-end build.',
        solution:
          'A JSON-driven form engine: structure and fields are data, rendered through themeable CSS classes. A new brand-specific form became a config file plus a theme — no new code per customer.',
      },
      {
        problem:
          'Forms had to live inside customer-controlled CMS sites (WordPress, Webflow, BentoBox) whose own stylesheets would otherwise break the layout.',
        solution:
          'Iframe-based embedding with a host-agnostic loader script — full style isolation from the host page while still matching the venue’s brand from the inside.',
      },
      {
        problem: 'Onboarding 40+ venues would have bottlenecked entirely on engineering time.',
        solution:
          'An AI-assisted onboarding workflow derives the form JSON and theme from the venue’s existing site, cutting time-to-live to 2–3 hours and moving onboarding off the engineering team.',
      },
    ],
  },
  {
    type: 'INTERNAL · RECRUITMENT & HR',
    name: 'Recruitment Platform',
    description:
      'Internal recruitment and employee management system. Took over an unmaintained 5-year-old platform as sole engineer and brought it back into daily use.',
    technologies: ['TypeScript', 'Fastify', 'MongoDB', 'Mongoose', 'React', 'shadcn/ui', 'GitLab CI', 'AWS S3'],
    role: 'Sole Engineer',
    date: '2025–26',
    team: 'Solo',
    duration: 'Jul 2025 – Feb 2026',
    overview:
      'The internal system the company’s recruitment and accounting teams run on: candidate pipeline, vacancies, incoming applications, and employee records. It had been unmaintained for years and was drifting out of use. I took it over as the only engineer, modernised the stack and UI without interrupting its users, and added the features that put it back at the centre of both teams’ daily work.',
    role_detail:
      'Sole engineer on the whole platform — backend, frontend, database, and CI. I prioritised directly with the recruitment and accounting teams, shipped performance fixes on the endpoints they hit hardest, and ran a stack and UI migration incrementally so the system stayed usable every day it was being rebuilt.',
    contributions: [
      {
        headline: 'Performance rescue on candidate listing',
        body: 'Cut a key candidate-listing endpoint from ~20s to ~2s (50 rows over a 10,000-record candidate collection) through indexing and a query rewrite.',
      },
      {
        headline: 'Stack and UI modernisation',
        body: 'Migrated from Node.js v14 to v22 and rebuilt the UI with shadcn/ui, modernising a 5-year-old codebase without interrupting the teams using it.',
      },
      {
        headline: 'Automatic PDF CV generation',
        body: 'Built generation of employee CVs as PDFs straight from stored profile data, replacing manual document preparation.',
      },
      {
        headline: 'ATS-style application scoring',
        body: 'Implemented scoring over incoming applications, ranking CVs against each vacancy so recruiters see the strongest candidates first.',
      },
    ],
    impact:
      'Per user feedback, the rebuilt system roughly halved the time recruiters and accounting spend on daily tasks and made pipeline status visible in one place.',
    metrics: [
      { v: '10×', l: 'faster candidate listing' },
      { v: '~50%', l: 'daily task time saved' },
      { v: 'v14→22', l: 'Node.js migration' },
      { v: '10k', l: 'candidate records' },
    ],
    architecture: [
      'React + shadcn/ui',
      '  | candidate pipeline, vacancies, employee profiles',
      '    ▼',
      'Fastify API · Node.js 22',
      '  | role-scoped access for recruitment and accounting',
      '    ▼',
      'MongoDB + Mongoose',
      '  | candidates, applications, vacancies, employees',
      '    ▼',
      'ATS scoring',
      '  | ranks incoming CVs against each vacancy',
      '    ▼',
      'PDF generator · AWS S3',
      '  | employee CVs built from stored profile data',
      '    ▼',
      'GitLab CI',
      '  | automated build and deploy',
    ],
    challenges: [
      {
        problem:
          'The candidate listing recruiters open first took ~20s to return 50 rows over a 10,000-record collection — slow enough that the team had started avoiding the system.',
        solution:
          'Profiled the query, added the missing indexes and rewrote the aggregation to stop scanning the full collection per request — ~20s down to ~2s.',
      },
      {
        problem:
          'A 5-year-old unmaintained codebase on Node.js v14 that two teams still depended on every working day — a big-bang rewrite was not an option.',
        solution:
          'Migrated to Node.js v22 and rebuilt the UI on shadcn/ui incrementally, shipping in slices so the platform stayed in daily use throughout the modernisation.',
      },
    ],
  },
  {
    type: 'PRODUCT · MULTI-BRAND PLATFORM',
    name: 'Hotaly',
    description:
      'Multi-brand venue listing platform. Several branded sites for different market segments running from one Next.js codebase, on a Python FastAPI backend.',
    technologies: [
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Redis',
      'TypeScript',
      'Next.js',
      'PayloadCMS',
      'Radix UI',
      'AWS S3',
    ],
    role: 'Full-Stack',
    date: '2024–25',
    team: '4 people',
    duration: 'Sep 2024 – Jun 2025',
    overview:
      'Hotaly is a unified venue and event platform that runs several branded sites — corporate events, leisure, tourism — from a single codebase. Each brand gets its own domain, design, and SEO configuration, while content operators manage all of them from one CMS. I worked across the Python backend behind venue search and booking and the Next.js front-ends and dashboard on top of it.',
    role_detail:
      'I maintained and extended the production FastAPI backend (SQLAlchemy, PostgreSQL, Redis) serving venue search, availability and booking, and built the multi-brand Next.js front-end architecture, the Payload CMS content model, and the internal dashboard used daily by the client’s content operators.',
    contributions: [
      {
        headline: 'Python FastAPI backend',
        body: 'Maintained and extended the FastAPI backend (SQLAlchemy, PostgreSQL) behind the venue search, availability, and booking APIs consumed by every branded front-end.',
      },
      {
        headline: 'Venue filter performance',
        body: 'Reduced response time of the venue filter endpoint by adding a composite index and removing an N+1 query.',
      },
      {
        headline: 'Single-codebase multi-site architecture',
        body: 'Built 3 distinct branded sites from one Next.js codebase: middleware resolves the active brand from the hostname and injects per-brand design tokens, layout, and SEO — with zero code duplication.',
      },
      {
        headline: 'Content operations dashboard',
        body: 'Developed the internal Radix UI dashboard for listing management, featured-slot scheduling, and S3-backed media uploads — the primary daily tool for the client’s content operators.',
      },
      {
        headline: 'Payload CMS content model',
        body: 'Designed the content model with per-brand access control and reusable field groups, so editors manage all brands from one interface without duplicated content entry.',
      },
    ],
    url: 'hotal.co.uk',
    metrics: [
      { v: '3', l: 'branded sites' },
      { v: '1', l: 'shared codebase' },
      { v: 'Zero', l: 'code duplication' },
      { v: '10 mo', l: 'delivery' },
    ],
    architecture: [
      'Next.js App · 3 brand domains',
      '  | middleware resolves brand from incoming hostname',
      '    ▼',
      'Brand Config',
      '  | design tokens · layout · SEO metadata injected',
      '    ▼',
      'FastAPI · Python',
      '  | venue search, availability, booking APIs',
      '    ▼',
      'PostgreSQL + SQLAlchemy · Redis',
      '  | venue data, availability · cached filter results',
      '    ▼',
      'Payload CMS',
      '  | collections, per-brand access control',
      '    ▼',
      'Radix UI dashboard · AWS S3',
      '  | listings, featured slots, media uploads',
    ],
    challenges: [
      {
        problem:
          'Rendering completely distinct brand experiences — different themes, layouts, SEO — from a single Next.js codebase without code duplication.',
        solution:
          'Middleware resolves the active brand from the incoming hostname at request time and injects design tokens, layout config, and SEO metadata — no per-brand code branches anywhere in the app.',
      },
      {
        problem: 'The venue filter endpoint — the single most-hit query on every brand — was slow under real catalogue size.',
        solution:
          'Added a composite index matching the filter’s access pattern and removed an N+1 in the SQLAlchemy relationship loading, cutting response time substantially.',
      },
      {
        problem:
          'Keeping content editors productive across multiple brands without duplicating data entry or switching systems.',
        solution:
          'Unified Payload CMS collection model with per-brand access control and reusable field groups — editors manage all brands from one interface with role-scoped visibility.',
      },
    ],
  },
  {
    type: 'PRODUCT · SPORTS GAMING',
    name: "Andy's Bet Club",
    description:
      'Premier League table-prediction game. Users submit full season standings, earn accuracy-based points, and compete for cash prizes on live leaderboards.',
    technologies: ['TypeScript', 'React', 'Antd', 'Nest.js', 'GraphQL', 'PostgreSQL', 'Prisma ORM', 'Redis', 'REST'],
    role: 'Full-Stack',
    date: '2024 · 2026',
    team: '4 people',
    duration: 'Feb – May 2024 and Mar – May 2026',
    overview:
      'A prediction platform where users submit full Premier League table predictions and compete for cash prizes on live accuracy leaderboards. It combines live sports data, a position-weighted scoring algorithm, and Redis-backed rankings. I contributed across two separate stints and the launch reached 40,000+ registered users in its first 7 days.',
    role_detail:
      'I developed core game functionality — the ranking and scoring engine, the leaderboard system, and the football-data sync service — plus the performance work needed to hold up under peak concurrent submissions at season-open deadlines.',
    contributions: [
      {
        headline: 'Launch at scale',
        body: 'Launched a prediction platform that reached 40,000+ registered users in the first 7 days.',
      },
      {
        headline: 'Redis-backed leaderboard',
        body: 'Built a leaderboard serving sub-millisecond rank lookups under peak concurrent submission load, with PostgreSQL + Prisma as the source of truth for history and prize eligibility.',
      },
      {
        headline: 'Scoring engine',
        body: 'Recomputed full 20-team table rankings for every user after each matchday using position-weighted points against the real standings.',
      },
      {
        headline: 'Resilient football-data sync',
        body: 'Built a sync service with caching and retry logic that kept scoring available even during third-party API outages.',
      },
    ],
    url: 'andysbetclub.co.uk/predictor',
    metrics: [
      { v: '40k+', l: 'users in first 7 days' },
      { v: 'Sub-ms', l: 'rank reads (Redis)' },
      { v: '20', l: 'teams per prediction' },
      { v: '2', l: 'delivery stints' },
    ],
    architecture: [
      'React + Antd',
      '  | table predictions, leaderboard view',
      '    ▼',
      'Nest.js API · GraphQL / REST',
      '  | position-weighted scoring, matchday recompute',
      '    ▼',
      'Football Data API',
      '  | fixtures, teams, live league results',
      '  | cached + retried against upstream outages',
      '    ▼',
      'PostgreSQL + Prisma ORM',
      '  | source of truth, prize eligibility',
      '    ▼',
      'Redis Cache',
      '  | live rank reads · write-through invalidation',
    ],
    challenges: [
      {
        problem:
          'The platform had to absorb tens of thousands of concurrent users during season-open submission windows without degrading response times.',
        solution:
          'Redis-backed leaderboard cache with write-through invalidation — PostgreSQL stays authoritative while Redis absorbs real-time rank reads at scale, with DB queries profiled and optimised for peak load.',
      },
      {
        problem:
          'All fixture, team, and results data came from a third-party API, so an upstream outage would have taken scoring down with it.',
        solution:
          'A dedicated sync service with scheduled jobs, caching, and retry logic — scoring and leaderboards keep working from the last good snapshot when the upstream API is unavailable.',
      },
    ],
  },
  {
    type: 'ENTERPRISE · AI MONITORING SAAS',
    name: 'Lanai',
    description:
      'Enterprise AI-monitoring SaaS. Chrome extension that captures prompt-level data across every AI tool, paired with a policy-engine admin panel and multi-tenant API.',
    technologies: [
      'TypeScript',
      'Next.js',
      'Nest.js',
      'Chrome API',
      'CockroachDB',
      'TypeORM',
      'Auth0',
      'Okta',
      'Microsoft Graph',
      'PingOne',
      'AWS Lambda',
    ],
    role: 'Full-Stack',
    date: '2022–24',
    team: '6 → 2 developers',
    duration: 'Apr 2022 – Jan 2024',
    overview:
      'Lanai gives enterprise security teams real-time visibility into all employee AI usage — including unapproved tools — via prompt-level analysis. The platform helps companies reduce compliance risk, prevent data leaks, and identify high-value AI use cases. I built the core capture layer, the admin panel, and the multi-tenant backend.',
    role_detail:
      'I worked across the full stack: a Manifest V3 Chrome extension for data capture, the Next.js admin panel for policy management and analytics, and a Nest.js backend handling multi-tenancy and enterprise SSO. When the team scaled down from 6 developers to 2, I took full ownership of all third-party integrations — coordinating directly with vendor support and the client’s engineering team.',
    contributions: [
      {
        headline: 'Provider-agnostic Chrome extension',
        body: 'Built a Manifest V3 extension that intercepts AI requests across any provider (ChatGPT, Copilot, Gemini) by inspecting request content rather than hardcoded URL lists — auto-compatible with tools that did not exist yet, with zero measurable impact on tab performance.',
      },
      {
        headline: 'Multi-tenant backend & unified SSO',
        body: 'Designed a Nest.js backend with row-level tenant isolation (CockroachDB + TypeORM) and a unified SSO pipeline integrating 4 enterprise identity providers — Auth0, Okta, Microsoft Graph, PingOne — resolved per tenant at request time.',
      },
      {
        headline: 'Ownership of third-party integrations',
        body: 'Took full ownership of every third-party integration after the team scaled down from 6 developers to 2, coordinating directly with vendor support and the client’s engineering team.',
      },
      {
        headline: 'Admin panel & analytics',
        body: 'Developed the Next.js admin panel for policy configuration and per-user usage, cost, and violation dashboards.',
      },
    ],
    asset: '/selectedwork/lanai_logo.png',
    url: 'withlanai.com',
    metrics: [
      { v: 'Any', l: 'AI tool captured' },
      { v: '4', l: 'identity providers' },
      { v: '0ms', l: 'tab perf impact' },
      { v: 'Multi', l: 'tenant isolation' },
    ],
    architecture: [
      'Browser · MV3 Extension',
      '  | inspects request content, detects prompts',
      '    ▼',
      'Browser Cache',
      '  | batches concurrent detections to reduce LLM load',
      '    ▼',
      'Nest.js API · per-tenant',
      '  | stores and processes captured prompt data',
      '    ▼',
      'CockroachDB · row-level isolation',
      '  | each company has its own isolated data space',
      '    ▼',
      'Auth0 · Okta · Microsoft Graph · PingOne',
      '  | identity resolution per tenant at request time',
      '    ▼',
      'Next.js Admin Panel',
      '  | policy config, usage / cost / violation dashboards',
    ],
    challenges: [
      {
        problem:
          'Detecting prompt-containing requests across any AI tool — including ones that did not exist yet — without relying on predefined URL lists.',
        solution:
          'The extension intercepts all browser requests and inspects content to identify prompts regardless of destination, making it compatible with any AI tool automatically and with no measurable tab performance cost.',
      },
      {
        problem: 'Supporting four enterprise identity providers in a single multi-tenant auth flow.',
        solution:
          'An abstracted identity pipeline that resolves the active provider per tenant from a config registry at request time — Auth0, Okta, Microsoft Graph and PingOne behind one interface.',
      },
    ],
  },
];
