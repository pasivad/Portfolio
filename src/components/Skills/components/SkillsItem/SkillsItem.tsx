import cn from 'classnames';

import Dot from '@/components/Dot';

import type { SkillsItemProps } from './types';

const SkillsItem = ({ title, items, current }: SkillsItemProps) => {
  return (
    <div
      className={cn(
        'relative bg-bg-card border border-solid p-5 cut-corners cut-corners-base',
        current ? 'border-brand-primary' : 'border-border-primary',
      )}
    >
      {current && (
        <div className="absolute right-2.5 top-2.5 uppercase border border-solid border-brand-primary px-1 text-brand-primary text-[10px]">
          Currently learning
        </div>
      )}
      <h2 className="text-brand-primary uppercase text-base font-bold">{title}</h2>
      <div className="flex flex-wrap gap-2 mt-3 ">
        {items.map((item) => (
          <div
            className="py-2 px-4 text-xs border border-solid border-border-secondary bg-bg-header"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      {current && (
        <div className="flex items-center gap-2 text-text-muted text-[11px] mt-4">
          <Dot
            size="6px"
            color="bg-brand-primary"
          />
          Picking up — actively building Wilderness Alone
        </div>
      )}
    </div>
  );
};

export default SkillsItem;
