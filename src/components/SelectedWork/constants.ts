import { WorkEntity } from './components/SelectedWorkItem/types';

export const SELECTED_WORK: WorkEntity[] = [
  {
    type: 'FEATURED · ENTERPRISE SAAS',
    name: 'Lanai',
    description:
      'Enterprise AI-monitoring SaaS. Chrome extension that captures prompt-level data across every AI tool, paired with a policy-engine admin panel and multi-tenant API.',
    technologies: [
      'Next.js',
      'Nest.js',
      'Chrome API',
      'Auth0',
      'Okta SDK',
      'TypeORM',
      'CockroachDB',
      'Chart.js',
      'Microsoft Graph',
      'PingOne',
    ],
    role: 'Full-Stack',
    date: '2024–25',
    team: '6 people + 4 client-side',
    duration: 'Apr 2024 – Aug 2025',
    overview:
      'Lanai gives enterprise IT and security teams real-time visibility into every employee interaction with AI tools — including unapproved ones — by analysing prompt-level data. The platform helps companies reduce compliance risk, prevent data leaks, and identify high-value AI use cases. I built the core capture layer, the admin panel, and the multi-tenant backend.',
    role_detail:
      'I worked across the full stack: Manifest V3 Chrome extension for data capture, Next.js admin panel for policy management and analytics, and Nest.js backend handling multi-tenancy, Auth0 / Okta / PingOne identity integrations, and CockroachDB persistence. Collaborated with cross-functional teams to refine features and improve data security.',
    contributions: [
      {
        headline: 'Chrome Extension',
        body: 'Built a Manifest V3 service-worker extension that intercepts AI-domain requests across multiple providers (ChatGPT, Copilot, Gemini, etc.) with zero tab performance impact, detecting both existing and emerging tools.',
      },
      {
        headline: 'Admin panel & analytics',
        body: 'Developed the Next.js admin panel for configuring policies and monitoring employee AI usage, with Chart.js dashboards showing per-user activity, cost estimates, and policy violations.',
      },
      {
        headline: 'Multi-tenant backend',
        body: 'Designed Nest.js services with CockroachDB and TypeORM — row-level tenant isolation, Auth0 org-scoped JWTs, Okta SDK and Microsoft Graph Client integrations, and a PingOne identity pipeline for enterprise SSO.',
      },
    ],
    asset: '/selectedwork/lanai_logo.png',
    url: 'withlanai.com',
    metrics: [
      { v: 'Any', l: 'AI tool captured' },
      { v: 'MV3', l: 'Chrome manifest' },
      { v: '0ms', l: 'tab perf impact' },
      { v: 'Multi', l: 'tenant isolation' },
    ],
    architecture: [
      'Browser · MV3 Extension',
      '  | captures all browser requests, detects prompt content',
      '    ▼',
      'Browser Cache',
      '  | batches concurrent detections to reduce LLM load',
      '    ▼',
      'Nest.js API · per-tenant',
      '  | stores and processes captured prompt data',
      '    ▼',
      'CockroachDB · per-tenant isolation',
      '  | each company has its own isolated data space',
      '    ▼',
      'Auth0 · Okta · PingOne',
      '  | identity resolution per tenant at request time',
      '    ▼',
      'Next.js Admin Panel',
      '  | policy config, Chart.js usage analytics',
    ],
    challenges: [
      {
        problem: 'Detecting prompt-containing requests across any AI tool — including ones that did not exist yet — without relying on predefined URL lists.',
        solution: 'Extension intercepts all browser requests and inspects content to identify prompts regardless of the destination, making it compatible with any AI tool automatically.',
      },
      {
        problem: 'Supporting Auth0, Okta, and PingOne in a single multi-tenant auth flow.',
        solution: 'Abstracted identity pipeline that resolves the active provider per tenant from a config registry at request time.',
      },
    ],
  },
  {
    type: 'PRODUCT · MULTI-BRAND CMS',
    name: 'Hotaly',
    description:
      'Unified venue listing platform running multiple branded sites from a single Next.js + PayloadCMS codebase, each targeting a different market segment.',
    technologies: ['TypeScript', 'C#', 'Next.js', 'PayloadCMS', 'Radix UI', 'MongoDB', 'PostgreSQL', 'AWS SDK', 'Vite'],
    role: 'Full-Stack',
    date: '2025–26',
    team: '4 people',
    duration: 'Sep 2025 – Feb 2026',
    overview:
      'Hotaly aggregates venues, activities, and hospitality services under multiple branded sites — corporate events, leisure, family adventures, tourism — all driven from a single codebase and unified CMS. Operators manage all brands from one PayloadCMS interface while each site gets its own domain, design, and SEO configuration.',
    role_detail:
      'I built the multi-site frontend architecture, the PayloadCMS content model, and the admin dashboard for venue and content management. The core challenge was making one Next.js app render completely distinct brand experiences without forking the codebase.',
    contributions: [
      {
        headline: 'Single-codebase multi-site architecture',
        body: 'Implemented Next.js middleware that resolves the active brand from the incoming hostname and injects the correct design tokens, layout, and SEO config — no code duplication across brands.',
      },
      {
        headline: 'PayloadCMS content model',
        body: 'Designed collections for venues, categories, media, and multi-brand config with reusable field groups and access-control policies per brand, keeping content entry consistent for editors.',
      },
      {
        headline: 'Admin dashboard',
        body: 'Built a Radix UI internal panel for venue listing management, featured-slot scheduling, metadata editing, and AWS SDK-backed media uploads.',
      },
    ],
    url: 'hotal.co.uk',
    metrics: [
      { v: '3', l: 'branded sites' },
      { v: '1', l: 'shared codebase' },
      { v: 'Zero', l: 'code duplication' },
      { v: '5 mo', l: 'delivery' },
    ],
    architecture: [
      'Next.js App',
      '  | middleware resolves brand from incoming hostname',
      '    ▼',
      'Brand Config',
      '  | design tokens · layout · SEO metadata injected',
      '    ▼',
      'PayloadCMS',
      '  | collections, access-control scoped per brand',
      '    ▼',
      'PostgreSQL · MongoDB',
      '  | venue data · content · media references',
      '    ▼',
      'AWS S3',
      '  | media uploads via SDK',
    ],
    challenges: [
      {
        problem: 'Rendering completely distinct brand experiences — different themes, layouts, SEO — from a single Next.js codebase without code duplication.',
        solution: 'Middleware resolves the active brand from the incoming hostname at request time and injects design tokens, layout config, and SEO metadata — no per-brand code branches anywhere in the app.',
      },
      {
        problem: 'Keeping content editors productive across multiple brands without duplicating data entry or switching systems.',
        solution: 'Unified PayloadCMS collection model with per-brand access control and reusable field groups — editors manage all brands from one interface with role-scoped visibility.',
      },
    ],
  },
  {
    type: 'PRODUCT · SPORTS GAMING',
    name: "Andy's Bet Club",
    description:
      'Premier League table-prediction game. Users submit full season standings, earn accuracy-based points, and compete for prizes on live leaderboards.',
    technologies: ['TypeScript', 'React', 'Antd', 'Nest.js', 'PostgreSQL', 'GraphQL', 'Prisma ORM', 'Redis', 'REST'],
    role: 'Full-Stack',
    date: '2025–26',
    team: '4 people',
    duration: '2 months across 2 stints',
    overview:
      "Andy's Bet Club Predictor lets users submit full Premier League table predictions at the start of the season, then scores them against real results as the season progresses. The platform combines live sports data, a custom scoring algorithm, and accuracy-based leaderboards with cash prizes. I contributed across two separate stints (Aug–Sep 2025 and Mar–Apr 2026).",
    role_detail:
      'I developed core game functionality including the ranking and scoring logic, leaderboard systems, and football-data API integration, plus performance work to handle peak traffic during submission windows.',
    contributions: [
      {
        headline: 'Prediction ranking logic',
        body: "Built the scoring system that compares a user's submitted league table against actual standings — awarding points for correct predictions and deducting for incorrect ones — and ranks all users on that score.",
      },
      {
        headline: 'Leaderboard system',
        body: 'Implemented a Redis-backed leaderboard for fast rank reads during peak periods, with Prisma ORM + PostgreSQL as the source of truth for historical data and prize eligibility.',
      },
      {
        headline: 'Football-data integration',
        body: 'Integrated external football-data APIs to dynamically populate fixtures, teams, and live league results, with caching and scheduled sync jobs to minimise external API calls.',
      },
      {
        headline: 'Peak-traffic optimisation',
        body: 'Profiled and optimised database queries and API response times to handle high concurrent submission volumes at season-open deadlines.',
      },
    ],
    url: 'andysbetclub.co.uk/predictor',
    metrics: [
      { v: '20', l: 'teams per prediction' },
      { v: 'Sub-ms', l: 'rank reads (Redis)' },
      { v: '2', l: 'delivery stints' },
      { v: 'Live', l: 'sports data sync' },
    ],
    architecture: [
      'React + Antd',
      '  | table predictions, leaderboard view',
      '    ▼',
      'Nest.js API · GraphQL / REST',
      '  | scoring algorithm, results sync jobs',
      '    ▼',
      'Football Data API',
      '  | fixtures, teams, live league results',
      '    ▼',
      'PostgreSQL + Prisma ORM',
      '  | source of truth, prize eligibility',
      '    ▼',
      'Redis Cache',
      '  | live rank reads · write-through invalidation',
    ],
    challenges: [
      {
        problem: 'The platform had to handle hundreds of thousands of concurrent users during season-open submission windows without degrading response times.',
        solution: 'Redis-backed leaderboard cache with write-through invalidation — PostgreSQL remains the authoritative store while Redis absorbs real-time rank reads at scale. DB queries profiled and optimised for peak load.',
      },
      {
        problem: 'All fixture, team, and results data came from a third-party client API, requiring a flexible and resilient integration layer.',
        solution: 'Built a dedicated sync service with scheduled jobs, caching, and error handling to consume the client API — decoupling our scoring and leaderboard logic from upstream availability.',
      },
    ],
  },
  {
    type: 'MOBILE · P2P LOGISTICS',
    name: 'Huddex',
    description:
      'P2P package delivery app pairing senders with travellers already making the journey. Owned the GraphQL backend and ops admin panel.',
    technologies: ['TypeScript', 'React', 'Nest.js', 'GraphQL', 'PostgreSQL', 'MicroORM', 'SendGrid', 'IDWise'],
    role: 'Full-Stack',
    date: '2023–24',
    team: '8 people',
    duration: 'Dec 2023 – Mar 2024',
    overview:
      "Huddex is a two-sided mobile marketplace: senders get quick, affordable package delivery; travellers earn money by carrying small packages on trips they're already taking. I joined to build the ops-facing admin panel from scratch and extend the GraphQL backend with identity verification and notification pipelines.",
    role_detail:
      'I designed and developed the admin panel for managing shipments and platform data, implemented GraphQL backend services for flexible data queries, integrated third-party services (SendGrid, IDWise), and participated in code reviews and performance debugging.',
    contributions: [
      {
        headline: 'Admin panel',
        body: 'Designed and built the internal ops panel covering active shipment management, user administration, delivery tracking, and system settings — used daily by the operations team.',
      },
      {
        headline: 'GraphQL backend services',
        body: 'Implemented Nest.js GraphQL resolvers for shipment lifecycle events (created, picked up, in-transit, delivered, disputed) with flexible query support and efficient data exchange.',
      },
      {
        headline: 'Third-party integrations',
        body: 'Integrated IDWise for KYC identity verification (webhook handling, document-state machine, automated account unlock) and SendGrid + Slack API for transactional notifications.',
      },
    ],
    url: 'huddex.com',
    metrics: [
      { v: '2-sided', l: 'marketplace' },
      { v: '3+', l: 'notification channels' },
      { v: 'KYC', l: 'identity verified' },
      { v: '8', l: 'person team' },
    ],
    architecture: [
      'Mobile clients (iOS / Android)',
      '  | GraphQL queries / mutations',
      '    ▼',
      'Nest.js + GraphQL API',
      '  | matching, state machines',
      '    ▼',
      'Admin panel · ops dashboard',
      '  | moderation, payouts, disputes',
      '    ▼',
      '3rd-party: SendGrid · SMS · Slack · IDWise',
    ],
    challenges: [
      {
        problem: 'IDWise KYC required async webhook handling with a multi-state document verification flow and automated account unlock on completion.',
        solution: 'Webhook consumer with idempotent state transitions — document states (submitted, under-review, verified, rejected) modelled as a strict state machine with automatic account unlock on verification pass.',
      },
      {
        problem: 'Two user types (senders and couriers) with different data visibility, permissions, and workflow steps sharing a single GraphQL API.',
        solution: 'Role-scoped resolvers with field-level permission guards — each user type sees only their relevant shipment data and available actions, enforced at the resolver layer.',
      },
    ],
  },
  {
    type: 'PoC · AI PIPELINE',
    name: 'Story Generator',
    description:
      'Node.js CLI that turns screen recordings into structured implementation stories using multimodal AI — from video in, to Gherkin spec out.',
    technologies: ['Node.js', 'TypeScript', 'ffmpeg', 'OpenAI'],
    role: 'Co-developer',
    date: '2026',
    team: '2 developers',
    duration: '2 weeks',
    overview:
      'A developer-tooling PoC that accepts a screen-recording, slices it into semantically distinct frames via ffmpeg scene detection, batches them to the OpenAI vision API, and outputs structured Markdown implementation stories — cutting spec-writing from ~60 minutes to ~5 minutes per feature.',
    role_detail:
      'I co-built this to explore multimodal AI pipelines for developer tooling. I designed the frame-sampling strategy and the two-pass prompt chain that produces consistent Gherkin-style output across different UI patterns and recording styles.',
    contributions: [
      {
        headline: 'Adaptive frame sampling',
        body: 'Used ffmpeg scene-change detection to extract only semantically distinct frames, cutting OpenAI token usage by ~70% compared to uniform time-based sampling.',
      },
      {
        headline: 'Multimodal GPT-4o analysis',
        body: 'Audio and video frames are sent together to GPT-4o, which correlates narration with on-screen actions and emits schema-enforced JSON user stories via Function Calling — producing structured output regardless of recording length.',
      },
    ],
    impact: 'Reduced feature spec-writing time from ~60 min to ~5 min per screen recording.',
    metrics: [
      { v: '~70%', l: 'token usage cut' },
      { v: '12×', l: 'faster spec writing' },
      { v: '2-pass', l: 'prompt chain' },
      { v: '2 wks', l: 'PoC built in' },
    ],
    architecture: [
      'Screen Recording (MP4 / MOV)',
      '  | input to ffmpeg pipeline',
      '    ▼',
      'ffmpeg',
      '  | extracts audio track + cuts video into frames',
      '    ▼',
      'GPT-4o (multimodal)',
      '  | audio + frames analyzed together',
      '  | Function Calling outputs schema-enforced JSON',
      '    ▼',
      'Markdown Spec Output',
      '  | structured user stories from the recording',
    ],
    challenges: [
      {
        problem: 'Uniform time-based frame sampling produced too many visually redundant frames, making token costs prohibitive at scale.',
        solution: 'ffmpeg scene-change detection extracts only semantically distinct frames — cuts token usage ~70% compared to fixed-interval sampling without losing any meaningful UI state.',
      },
      {
        problem: 'Producing consistent, schema-valid user story output across recordings with different lengths, UI density, and narration styles.',
        solution: 'GPT-4o Function Calling enforces a strict output schema regardless of input variation — the model correlates audio narration with visual frames and emits structured JSON that maps directly to user story fields.',
      },
    ],
  },
];
