import cn from 'classnames';

import { DotProps } from './types';

const Dot = ({ className, pinging = false, size, color }: DotProps) => {
  return (
    <span
      style={{ height: size, width: size }}
      className={cn(
        'inline-flex rounded-full shrink-0',
        pinging && 'animate-pulse-dot',
        !color ? 'border border-solid border-border-primary bg-bg-header' : color,
        className,
      )}
    />
  );
};

export default Dot;
