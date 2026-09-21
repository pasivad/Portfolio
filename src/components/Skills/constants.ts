import { SkillsItemProps } from './components/SkillsItem/types';

export const SKILLS: SkillsItemProps[] = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'C++'] },
  {
    title: 'Web — frontend',
    items: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'Antd', 'Radix UI', 'shadcn/ui'],
  },
  {
    title: 'Web — backend',
    items: ['Node.js', 'Nest.js', 'Express', 'Fastify', 'FastAPI', 'GraphQL', 'REST'],
  },
  {
    title: 'Databases & ORM',
    items: ['PostgreSQL', 'MongoDB', 'CockroachDB', 'Redis', 'Prisma', 'TypeORM', 'MikroORM', 'Mongoose', 'SQLAlchemy'],
  },
  {
    title: 'Auth & security',
    items: ['Auth0', 'Okta', 'Microsoft Graph', 'PingOne', 'Multi-tenant isolation', 'RBAC'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Docker', 'AWS (S3, Lambda, RDS, ECS)', 'GitHub Actions', 'GitLab CI', 'Nginx', 'Git'],
  },
  { title: 'Testing', items: ['Jest', 'Vitest', 'Playwright'] },
  {
    title: 'Integrations',
    items: ['Stripe', 'PayloadCMS', 'SendGrid', 'Socket.IO', 'Sentry', 'Chrome Extensions API (MV3)'],
  },
  {
    title: 'Game development',
    items: ['Unreal Engine 5', 'C++ (UE)', 'Blueprints', 'UMG', 'CommonUI', 'Enhanced Input'],
  },
];
