import { SkillsItemProps } from './components/SkillsItem/types';

export const SKILLS: SkillsItemProps[] = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'C++'] },
  { title: 'Web — frontend', items: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Antd', 'Radix UI', 'Chart.js'] },
  { title: 'Web — backend', items: ['Node.js', 'Nest.js', 'GraphQL', 'TypeORM', 'Prisma', 'PayloadCMS'] },
  {
    title: 'Game development',
    items: ['Unreal Engine 5', 'C++ (UE)', 'Blueprints', 'UMG', 'CommonUI', 'Enhanced Input'],
  },
  { title: 'Data & infra', items: ['PostgreSQL', 'MongoDB', 'CockroachDB', 'Redis', 'AWS', 'Git / Git LFS'] },
  {
    title: 'Specialized',
    items: ['Chrome Extensions API', 'Auth0', 'Okta', 'Microsoft Graph', 'PingOne', 'ffmpeg', 'OpenAI'],
  },
];
