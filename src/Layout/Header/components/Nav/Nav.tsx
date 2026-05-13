'use client';

import { useActiveSection } from '@/hooks/useActiveSection';

import NavItem from './NavItem';
import { NAVIGATION_ITEMS } from './constants';

const SECTION_IDS = NAVIGATION_ITEMS.map((item) => item.id);

const Nav = () => {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <nav className="flex gap-4 text-right items-center">
      {NAVIGATION_ITEMS.map((item, index) => (
        <NavItem
          key={index}
          {...item}
          active={activeId === item.id}
        />
      ))}
    </nav>
  );
};

export default Nav;
