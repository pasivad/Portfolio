import { useEffect, useState } from 'react';

export const useCanvasSize = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new ResizeObserver(([entry]) => {
      setCanvasSize({
        w: Math.floor(entry.contentRect.width),
        h: Math.floor(entry.contentRect.height),
      });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);

  return canvasSize;
};
