'use client';

import { useState } from 'react';
import cn from 'classnames';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';

import TechnologyTag from '@/components/TechnologyTag';
import Dot from '@/components/Dot';
import Button from '@/components/Button';

import { ExperienceItemProps, ExperienceItemType } from './types';

const ExperienceItem = ({
  type,
  dateRange,
  company,
  position,
  description,
  technologies,
  projects,
}: ExperienceItemProps) => {
  const [active, setActive] = useState(true);

  return (
    <div className="cut-corners cut-corners-lg border border-solid p-6 border-border-primary bg-bg-card flex">
      <div className="w-50 mr-6">
        <div className="flex gap-2 items-center">
          <Dot
            size="6px"
            color={
              [ExperienceItemType.Company, ExperienceItemType.Education].includes(type) ? 'bg-brand-primary' : 'bg-info'
            }
          />
          <div
            className={cn('text-[10px] uppercase', {
              'text-brand-primary': [ExperienceItemType.Company, ExperienceItemType.Education].includes(type),
              'text-info': type === ExperienceItemType.Current,
            })}
          >
            {type}
          </div>
        </div>
        <div className="text-xs text-text-muted mt-1">{dateRange}</div>
        <h3 className="text-lg mt-3 uppercase">{company.name}</h3>
        <div className="text-xs text-text-muted mt-1">{company.description}</div>
      </div>
      <div className="pl-6 border-l border-solid border-border-primary flex-1">
        <h2 className="text-[22px] font-bold">{position}</h2>
        <div className="text-text-secondary text-sm max-w-225 my-2">{description}</div>
        <div className={cn('flex flex-wrap text-[11px] gap-2 w-full pb-4', projects?.length && '')}>
          {technologies?.map((tech, index) => (
            <TechnologyTag
              key={index}
              tech={tech}
            />
          ))}
        </div>
        {projects?.length && (
          <>
            <Button
              className="border uppercase cursor-pointer flex items-center py-2! px-4!"
              onClick={() => setActive((prev) => !prev)}
            >
              <IoMdArrowDropdown
                className={`transition-transform text-textPrimary duration-200 ${active ? '' : '-rotate-90'}`}
              />
              {active ? 'Hide' : 'Show'} Projects <span>[{projects.length}]</span>
            </Button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="pt-6 flex flex-col gap-4 border-t border-dashed border-border-primary mt-4">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="flex items-end-last"
                    >
                      <IoMdArrowDropright className="text-brand-primary shrink-0" />
                      <div className="flex flex-col ml-2 max-w-max">
                        <div className="flex items-center">
                          <h3 className="text-sm uppercase font-bold">{project.name}</h3>
                          <div className="ml-2 text-[10px] text-text-muted">{project.dateRange}</div>
                        </div>
                        <div className="text-text-secondary text-[13px]">{project.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default ExperienceItem;
