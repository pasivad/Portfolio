import { useEffect, useState } from 'react';

export const useCollapsedHeight = (
  ref: React.RefObject<HTMLDivElement | null>,
  expanded: boolean,
  onToggle: () => void,
) => {
  const [collapsedHeight, setCollapsedHeight] = useState(0);

  useEffect(() => {
    if (expanded) return;
    let timer: ReturnType<typeof setTimeout>;
    const update = () => {
      if (ref.current) {
        setCollapsedHeight(ref.current.getBoundingClientRect().height);
      }
    };
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(update, 150);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(timer);
    };
  }, [expanded, ref]);

  const handleToggle = () => {
    if (!expanded && ref.current) {
      setCollapsedHeight(ref.current.getBoundingClientRect().height);
    }
    onToggle();
  };

  return { collapsedHeight, handleToggle };
};
