import cn from 'classnames';

import Dot from '@/components/Dot';

import { LEARNING_PATH } from '../../constants';
import { ProjectStatus } from '../../types';

const LearningPath = () => {
  return (
    <div className="cut-corners cut-corners-base flex flex-col border border-solid border-border-primary bg-bg-card p-6">
      <div className="text-sm uppercase font-bold tracking-widest mb-4 text-brand-primary">Learning Path</div>
      {LEARNING_PATH.map((path, index) => (
        <div
          key={index}
          className="flex flex-col pb-3 mt-3 border-b border-dashed border-border-primary last:border-0 last:pb-0"
        >
          <div className="flex">
            <Dot
              size="10px"
              pinging={path.status === ProjectStatus.Active}
              color={cn({
                'bg-info': path.status === ProjectStatus.Active,
                'bg-brand-primary': path.status === ProjectStatus.Finished,
              })}
              className="mt-1"
            />
            <div className="flex flex-col ml-3 text-xs">
              <div>{path.title}</div>
              <div className="text-text-muted">{path.details}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearningPath;
