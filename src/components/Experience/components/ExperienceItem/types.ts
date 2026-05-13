export type ExperienceItemProps = {
  type: ExperienceItemType;
  dateRange: string;
  company: { name: string; description: string };
  position: string;
  description: string;
  technologies?: string[];
  projects?: {
    name: string;
    dateRange: string;
    description: string;
  }[];
};

export enum ExperienceItemType {
  Current = 'Current',
  Company = 'Company',
  Education = 'Education',
}
