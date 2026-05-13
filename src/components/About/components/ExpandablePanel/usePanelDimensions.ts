import { useEffect, useState } from 'react';

export const usePanelDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [parentWidth, setParentWidth] = useState(9999);

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return;

    setParentWidth(parent.getBoundingClientRect().width);
    const obs = new ResizeObserver(([entry]) => {
      setParentWidth(entry.contentRect.width);
    });
    obs.observe(parent);
    return () => obs.disconnect();
  }, [ref]);

  return parentWidth;
};
