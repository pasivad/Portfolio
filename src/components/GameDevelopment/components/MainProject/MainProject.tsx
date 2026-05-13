'use client';

import { useState } from 'react';
import cn from 'classnames';
import { IoMdArrowDropright } from 'react-icons/io';
import Image from 'next/image';
import { FaDiamond } from 'react-icons/fa6';

import Button from '@/components/Button';
import { useResizable } from '@/hooks/useResizable';

import { ProjectStatus, type MainProjectProps } from '../../types';

const MainProject = ({
  imgPath,
  status,
  statusText,
  name,
  details,
  description,
  resultItems,
  repoLink,
}: MainProjectProps) => {
  const isVideo = imgPath.endsWith('.mp4') || imgPath.endsWith('.webm');
  const { mediaRef, containerRef, height, onMouseDown } = useResizable(200);
  const [isDraggingBar, setIsDraggingBar] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDraggingBar(true);
    onMouseDown(e);
    const onUp = () => {
      setIsDraggingBar(false);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mouseup', onUp);
  };

  return (
    <div className="cut-corners cut-corners-lg min-w-[60%] flex-col border border-solid border-brand-primary">
      <div
        ref={containerRef}
        className="w-full overflow-hidden"
        style={{ height }}
      >
        {isVideo ? (
          <video
            ref={mediaRef}
            src={imgPath}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            ref={mediaRef}
            src={imgPath}
            alt={name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div
        onMouseDown={handleMouseDown}
        className={cn(
          'w-full flex flex-col items-center justify-center gap-0.5 py-1.5 cursor-ns-resize select-none transition-colors border-y border-solid border-brand-primary/20',
          isDraggingBar ? 'bg-brand-primary/20' : 'bg-zinc-900 hover:bg-brand-primary/10',
        )}
      >
        <div
          className={cn('w-10 h-px transition-colors', isDraggingBar ? 'bg-brand-primary' : 'bg-brand-primary/40')}
        />
        <div
          className={cn('w-10 h-px transition-colors', isDraggingBar ? 'bg-brand-primary' : 'bg-brand-primary/40')}
        />
        <div
          className={cn('w-10 h-px transition-colors', isDraggingBar ? 'bg-brand-primary' : 'bg-brand-primary/40')}
        />
      </div>

      <div className="flex flex-col p-8 border-t border-solid border-brand-primary bg-zinc-950 [background:radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.12)_0%,transparent_50%),linear-gradient(135deg,#1a1a1f_0%,#0f0f12_100%)]">
        <div
          className={cn('flex items-center text-[13px] uppercase', {
            'text-info': status === ProjectStatus.Active,
            'text-brand-primary': status === ProjectStatus.Finished,
          })}
        >
          <IoMdArrowDropright />
          {statusText}
        </div>
        <h1 className="text-[46px] uppercase font-bold">{name}</h1>
        <div className="text-xs text-text-secondary">{details}</div>
        <div className="text-sm text-text-secondary my-6">{description}</div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 w-full">
          {resultItems.map((item, index) => (
            <div
              key={index}
              className="flex items-baseline"
            >
              <div className="flex gap-2 items-center">
                <FaDiamond className="text-brand-primary w-2" />
                <div className="text-text-secondary text-[13px] w-full">{item}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <Button
            href={`https://${repoLink}`}
            target="_blank"
            variant="primary"
            className="min-w-1/6 justify-center text-nowrap"
          >
            <IoMdArrowDropright className="shrink-0" />
            View Repo
          </Button>
          <div className="cut-corners-btn inline-flex items-center gap-1 px-5.5 py-3 font-heading text-[13px] uppercase border border-solid no-underline tracking-widest bg-bg-card/70 border-border-secondary text-text-primary btn-glow">
            {repoLink}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProject;
