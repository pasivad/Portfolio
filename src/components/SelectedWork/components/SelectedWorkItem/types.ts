export type Contribution = {
  headline: string;
  body: string;
};

export type Metric = {
  v: string;
  l: string;
};

export type Challenge = {
  problem: string;
  solution: string;
};

export type WorkEntity = {
  type: string;
  name: string;
  description: string;
  technologies: string[];
  role: string;
  date: string;
  team: string;
  duration: string;
  overview: string;
  role_detail: string;
  contributions: Contribution[];
  impact?: string;
  asset?: string;
  url?: string;
  metrics?: Metric[];
  architecture?: string[];
  challenges?: Challenge[];
};

export type SelectedWorkItemProps = WorkEntity & {
  onClick: () => void;
};
