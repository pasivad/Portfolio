import { BsArrowUpRight } from 'react-icons/bs';

import TechnologyTag from '@/components/TechnologyTag';

import type { SelectedWorkItemProps } from './types';

const SelectedWorkItem = ({ type, name, description, technologies, role, date, onClick }: SelectedWorkItemProps) => {
  return (
    <button
      className="cut-corners cut-corners-md border border-solid p-6 border-border-primary bg-bg-card flex flex-col cursor-pointer group hover:border-brand-primary transition-all hover:-translate-y-0.5 text-left"
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="text-[11px] text-brand-primary">{type}</div>
        <BsArrowUpRight className="text-text-muted text-sm group-hover:text-brand-primary transition-colors" />
      </div>
      <h3 className="uppercase text-[22px] font-bold mb-2">{name}</h3>
      <div className="text-[13px] text-text-secondary mb-4">{description}</div>
      <div className="flex flex-wrap gap-2 pb-4 text-[11px]">
        {technologies.map((tech, index) => (
          <TechnologyTag
            key={index}
            tech={tech}
          />
        ))}
      </div>
      <div className="flex flex-col mt-auto border-t border-solid border-border-primary">
        <div className="flex text-[11px] text-text-muted mt-6">
          ROLE <span className="ml-2 mr-4 text-text-primary">{role}</span> YEAR
          <span className="ml-2 text-text-primary">{date}</span>
        </div>
      </div>
    </button>
  );
};

export default SelectedWorkItem;
