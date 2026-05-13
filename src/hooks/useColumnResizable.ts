import { useRef, useState, useCallback } from 'react';

export const useColumnResizable = (initialPercent: number = 52) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [leftPercent, setLeftPercent] = useState(initialPercent);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startPercent = useRef(initialPercent);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      isDragging.current = true;
      startX.current = e.clientX;
      startPercent.current = leftPercent;

      const onMouseMove = (e: MouseEvent) => {
        if (!isDragging.current || !containerRef.current) return;
        const containerWidth = containerRef.current.offsetWidth;
        const deltaPercent = ((e.clientX - startX.current) / containerWidth) * 100;
        setLeftPercent(Math.min(70, Math.max(30, startPercent.current + deltaPercent)));
      };

      const onMouseUp = () => {
        isDragging.current = false;
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    },
    [leftPercent],
  );

  return { containerRef, leftPercent, onMouseDown };
};
