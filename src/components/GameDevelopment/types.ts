export type MainProjectProps = {
  imgPath: string;
  status: ProjectStatus;
  statusText: string;
  name: string;
  details: string;
  description: string;
  resultItems: string[];
  repoLink: string;
};

export type SideProjectProps = {
  status: ProjectStatus;
  name: string;
  details: string;
  description: string;
  repoLink: string;
};

export type LearningPathItem = {
  title: string;
  details: string;
  status?: ProjectStatus;
};

export enum ProjectStatus {
  Active = 'Active',
  Finished = 'Finished',
}
