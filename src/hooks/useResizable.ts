import { useRef, useEffect, useState, useCallback } from 'react';

export const useResizable = (initialHeight: number = 200) => {
  const mediaRef = useRef<HTMLVideoElement & HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(600);
  const [height, setHeight] = useState<number>(initialHeight);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startHeight = useRef(0);

  const updateMaxHeight = useCallback(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    setMaxHeight(Math.round(width * (9 / 16)));
  }, []);

  useEffect(() => {
    updateMaxHeight();
    const observer = new ResizeObserver(updateMaxHeight);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateMaxHeight]);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startY.current = e.clientY;
    startHeight.current = height;

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const delta = e.clientY - startY.current;
      setHeight(Math.min(maxHeight, Math.max(200, startHeight.current + delta)));
    };

    const onMouseUp = () => {
      isDragging.current = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return { mediaRef, containerRef, height, maxHeight, onMouseDown };
};
