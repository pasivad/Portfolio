'use client';

import { useEffect, useRef, useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

import { useCanvasSize } from '@/hooks/useCanvasSize';

import TrafficGame from '../TrafficGame';
import { usePanelDimensions } from './usePanelDimensions';

interface ExpandablePanelProps {
  onToggle: () => void;
}

const ease = 'cubic-bezier(0.4, 0, 0.2, 1)';
const DURATION = 500;
const OVERLAP = 300;

const ExpandablePanel = ({ onToggle }: ExpandablePanelProps) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const parentWidth = usePanelDimensions(outerRef);
  const canvasSize = useCanvasSize(innerRef);

  const [widthExpanded, setWidthExpanded] = useState(false);
  const [heightExpanded, setHeightExpanded] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState(0);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  const handleToggle = () => {
    const el = outerRef.current;
    if (!el) return;
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!widthExpanded) {
      setCollapsedHeight(el.getBoundingClientRect().height);
      setWidthExpanded(true);
      onToggle();
      timerRef.current = setTimeout(() => setHeightExpanded(true), DURATION - OVERLAP);
    } else {
      setHeightExpanded(false);
      timerRef.current = setTimeout(() => {
        setWidthExpanded(false);
        onToggle();
      }, DURATION - OVERLAP);
    }
  };

  const expandedSize = `${parentWidth * 0.5}px`;

  return (
    <div
      ref={outerRef}
      className="relative flex-1 max-sm:hidden"
      style={{
        minWidth: widthExpanded ? expandedSize : '100px',
        maxWidth: widthExpanded ? expandedSize : `${parentWidth}px`,
        height: heightExpanded ? expandedSize : collapsedHeight > 0 ? `${collapsedHeight}px` : undefined,
        transition: `min-width ${DURATION}ms ${ease}, max-width ${DURATION}ms ${ease}, height ${DURATION}ms ${ease}`,
      }}
    >
      <button
        onClick={handleToggle}
        aria-label={widthExpanded ? 'Collapse panel' : 'Expand panel'}
        className="absolute left-0 top-1/2 z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-solid border-border-secondary bg-bg-card text-text-secondary transition-colors duration-200 hover:border-brand-primary hover:text-brand-primary"
      >
        {widthExpanded ? <IoChevronForward size={13} /> : <IoChevronBack size={13} />}
      </button>
      <div
        ref={innerRef}
        className="cut-corners cut-corners-lg h-full w-full overflow-hidden border border-solid border-border-primary"
      >
        {canvasSize.w > 0 && canvasSize.h > 0 && (
          <TrafficGame
            width={canvasSize.w}
            height={canvasSize.h}
            isExpanded={widthExpanded}
            onRequestExpand={handleToggle}
          />
        )}
      </div>
    </div>
  );
};

export default ExpandablePanel;
