import cn from 'classnames';
import { IoMdArrowDropright } from 'react-icons/io';

import Button from '@/components/Button';

import { ProjectStatus, SideProjectProps } from '../../types';

const SideProject = ({ name, status, details, description, repoLink }: SideProjectProps) => {
  return (
    <div className="cut-corners cut-corners-base p-6 flex flex-col border border-solid border-border-primary bg-bg-card">
      <h3
        className={cn('text-sm uppercase font-bold tracking-widest', {
          'text-brand-primary': status === ProjectStatus.Finished,
          'text-info': status === ProjectStatus.Active,
        })}
      >
        SIDE PROJECT · {name}
      </h3>
      <h2 className="uppercase text-lg my-4">{details}</h2>
      <div className="text-[13px] text-text-secondary mb-4">{description}</div>
      <Button
        href={`https://${repoLink}`}
        target="_blank"
        className="w-fit justify-center px-3"
      >
        <IoMdArrowDropright className="shrink-0" />
        {repoLink}
      </Button>
    </div>
  );
};

export default SideProject;
