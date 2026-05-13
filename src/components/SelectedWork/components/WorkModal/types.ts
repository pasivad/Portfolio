import type { WorkEntity } from '../SelectedWorkItem/types';

export type WorkModalProps = {
  project: WorkEntity | undefined;
  onClose: () => void;
};
