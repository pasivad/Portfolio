import cn from 'classnames';

import { ButtonProps } from './types';

const Button = ({ href, children, variant = 'secondary', download, target, rel, className, onClick }: ButtonProps) => {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
      className={cn(
        'cut-corners-btn inline-flex items-center gap-1 px-5.5 py-3 font-heading text-[13px] uppercase border border-solid no-underline cursor-pointer transition-all duration-150 tracking-widest',
        {
          'bg-brand-primary text-bg-primary font-bold btn-glow-strong hover:bg-brand-secondary': variant === 'primary',
          'bg-bg-card/70 border-border-secondary text-text-primary btn-glow hover:border-brand-primary hover:text-brand-primary hover:bg-hover-accent':
            variant === 'secondary',
        },
        className,
      )}
    >
      {children}
    </a>
  );
};

export default Button;
