'use client';

import { useCallback, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import Button from '@/components/Button';
import TechnologyTag from '@/components/TechnologyTag';
import { useModalControls } from '@/hooks/useModalControls';

import { WorkModalProps } from './types';

const CLOSE_DURATION_MS = 200;

const WorkModal = ({ project, onClose }: WorkModalProps) => {
  const [displayProject, setDisplayProject] = useState(project);
  const [isClosing, setIsClosing] = useState(false);
  const [prevProject, setPrevProject] = useState(project);

  if (prevProject !== project) {
    setPrevProject(project);
    if (project) {
      setDisplayProject(project);
      setIsClosing(false);
    }
  }

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setDisplayProject(undefined);
      setIsClosing(false);
      onClose();
    }, CLOSE_DURATION_MS);
  }, [onClose]);

  useModalControls(!!displayProject, handleClose);

  if (!displayProject) return null;

  return (
    <div
      className={`fixed inset-0 z-50 grid place-items-center pt-14 bg-black/78 backdrop-blur-[6px] ${isClosing ? 'animate-modal-backdrop-out' : 'animate-modal-backdrop-in'}`}
      onClick={handleClose}
    >
      <div
        className={`cut-corners cut-corners-xl relative w-full max-w-275 max-h-[80vh] overflow-y-auto border border-border-secondary bg-bg-secondary scrollbar-modal ${isClosing ? 'animate-modal-panel-out' : 'animate-modal-panel-in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-2 bg-linear-to-b from-bg-secondary via-bg-secondary to-bg-secondary/90 flex items-start gap-6 px-8 py-6 border-b border-border-primary">
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-brand-primary uppercase mb-1.5">
              {displayProject.type}
            </div>
            <h2 className="uppercase text-3xl font-semibold tracking-[0.04em] leading-none text-text-primary flex gap-6 items-center">
              {displayProject.name}
              {displayProject.url && (
                <Button
                  href={`https://${displayProject.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  {displayProject.url}
                </Button>
              )}
            </h2>
            <div className="font-mono text-[12px] text-text-muted tracking-[0.04em] mt-1.5">
              {displayProject.role} · {displayProject.date} · {displayProject.duration}
            </div>
          </div>
          <button
            className="ml-auto shrink-0 w-9 h-9 flex items-center justify-center border border-border-primary text-text-muted hover:border-brand-primary hover:text-brand-primary transition-all duration-150 cursor-pointer"
            onClick={handleClose}
            aria-label="Close"
          >
            <IoCloseOutline size={16} />
          </button>
        </div>

        <div
          className="px-8 py-6 pb-8 grid gap-7 max-md:grid-cols-1"
          style={{ gridTemplateColumns: '1.6fr 1fr' }}
        >
          <div className="flex flex-col gap-5.5">
            {displayProject.metrics && displayProject.metrics.length > 0 && (
              <div>
                <h5 className="text-[13px] font-bold tracking-[0.16em] uppercase text-brand-primary mb-2.5">
                  By the Numbers
                </h5>
                <div className="grid grid-cols-2 gap-2.5">
                  {displayProject.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="relative border border-border-primary bg-bg-card/50 p-4 before:absolute before:top-0 before:left-0 before:w-4.5 before:h-px before:bg-brand-primary"
                    >
                      <div className="text-[26px] font-semibold leading-none text-text-primary">{m.v}</div>
                      <div className="font-mono text-[10px] tracking-[0.14em] text-text-muted uppercase mt-1.5">
                        {m.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="border-t border-border-primary pt-4.5">
              <h5 className="text-[13px] font-bold tracking-[0.16em] uppercase text-brand-primary mb-2.5">
                My Role
              </h5>
              <p className="text-text-secondary text-sm leading-[1.65]">{displayProject.role_detail}</p>
            </div>
            {displayProject.architecture && displayProject.architecture.length > 0 && (
              <div className="border-t border-border-primary pt-4.5">
                <h5 className="text-[13px] font-bold tracking-[0.16em] uppercase text-brand-primary mb-2.5">
                  System Architecture
                </h5>
                <div className="border border-border-primary overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-bg-card border-b border-border-primary">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-2 font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                      architecture
                    </span>
                  </div>
                  <pre className="font-mono text-[12px] leading-relaxed text-brand-primary bg-black/70 px-4.5 py-4 whitespace-pre overflow-x-auto">
                    {displayProject.architecture.join('\n')}
                  </pre>
                </div>
              </div>
            )}

            {displayProject.challenges && displayProject.challenges.length > 0 && (
              <div className="border-t border-border-primary pt-4.5">
                <h5 className="text-[13px] font-bold tracking-[0.16em] uppercase text-brand-primary mb-2.5">
                  Challenges Solved
                </h5>
                <div className="flex flex-col gap-3.5">
                  {displayProject.challenges.map((c, i) => (
                    <div
                      key={i}
                      className="grid gap-x-3.5 gap-y-1.5 border border-border-primary px-4 py-3 bg-bg-card/50"
                      style={{ gridTemplateColumns: '76px 1fr' }}
                    >
                      <div className="font-mono text-[9px] tracking-[0.18em] text-red-400 pt-0.75">PROBLEM</div>
                      <div className="text-[13px] text-text-secondary leading-normal">{c.problem}</div>
                      <div className="font-mono text-[9px] tracking-[0.18em] text-green-300 pt-0.75">SOLVED</div>
                      <div className="text-[13px] text-text-secondary leading-normal">{c.solution}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-5.5">
            <div>
              <h5 className="text-[13px] font-bold tracking-[0.16em] uppercase text-brand-primary mb-2.5">
                At a Glance
              </h5>
              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    ['Role', displayProject.role],
                    ['Year', displayProject.date],
                    ['Duration', displayProject.duration],
                    ['Team', displayProject.team],
                  ] as [string, string][]
                ).map(([k, v]) => (
                  <div
                    key={k}
                    className="border border-border-primary px-3 py-2.5 bg-bg-card/50"
                  >
                    <div className="font-mono text-[10px] tracking-[0.12em] text-text-muted uppercase">{k}</div>
                    <div className="text-[13px] text-text-primary mt-0.5">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-[13px] font-bold tracking-[0.16em] uppercase text-brand-primary mb-2.5">Stack</h5>
              <div className="flex flex-wrap gap-2 text-[11px]">
                {displayProject.technologies.map((tech, i) => (
                  <TechnologyTag
                    key={i}
                    tech={tech}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-border-primary pt-4.5">
              <h5 className="text-[13px] font-bold tracking-[0.16em] uppercase text-brand-primary mb-2.5">
                Overview
              </h5>
              <p className="text-text-secondary text-sm leading-[1.65]">{displayProject.overview}</p>
            </div>

            <div className="border-t border-border-primary pt-4.5">
              <h5 className="text-[13px] font-bold tracking-[0.16em] uppercase text-brand-primary mb-2.5">
                What I Did
              </h5>
              <ul className="flex flex-col gap-2 list-none">
                {displayProject.contributions.map((c, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-secondary pl-5.5 relative leading-[1.55] before:content-['▸'] before:absolute before:left-1 before:text-brand-primary"
                  >
                    <strong className="text-text-primary font-medium">{c.headline}.</strong> {c.body}
                  </li>
                ))}
              </ul>
            </div>

            {displayProject.impact && (
              <div className="border-t border-border-primary pt-4.5">
                <h5 className="text-[13px] font-bold tracking-[0.16em] uppercase text-brand-primary mb-2.5">
                  Outcome
                </h5>
                <p className="text-text-secondary text-sm leading-[1.65]">{displayProject.impact}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;
