import cn from 'classnames';

import { NavItemProps } from './types';

const NavItem = ({ name, id, active }: NavItemProps) => {
  return (
    <a
      className={cn(
        'px-4 py-2 text-[11px] uppercase border border-solid transition-colors duration-200',
        active
          ? 'text-brand-primary bg-active-accent border-border-secondary/30 underline underline-offset-6'
          : 'text-text-secondary hover:text-brand-primary hover:bg-hover-accent border-transparent',
      )}
      href={`#${id}`}
    >
      {name}
    </a>
  );
};

export default NavItem;
