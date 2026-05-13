'use client';

import { useEffect, useState } from 'react';
import cn from 'classnames';

import { useActiveSection } from '@/hooks/useActiveSection';
import Dot from '@/components/Dot';
import { OPEN_TO_WORK } from '@/constants';

import { NAVIGATION_ITEMS } from '../Nav/constants';
import NavItem from '../Nav/NavItem';

const SECTION_IDS = NAVIGATION_ITEMS.map((item) => item.id);

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleHashChange = () => setOpen(false);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'relative flex flex-col justify-center items-center w-8 h-8 gap-1.25 border border-solid transition-colors duration-200 md:hidden',
          open
            ? 'border-brand-primary bg-active-accent'
            : 'border-border-primary hover:border-brand-primary hover:bg-hover-accent',
        )}
      >
        <span
          className={cn(
            'block h-px w-4 bg-current transition-all duration-300 origin-center',
            open ? 'text-brand-primary translate-y-[6.5px] rotate-45' : 'text-text-secondary',
          )}
        />
        <span
          className={cn(
            'block h-px w-4 bg-current transition-all duration-300',
            open ? 'text-brand-primary opacity-0 scale-x-0' : 'text-text-secondary',
          )}
        />
        <span
          className={cn(
            'block h-px w-4 bg-current transition-all duration-300 origin-center',
            open ? 'text-brand-primary translate-y-[-6.5px] -rotate-45' : 'text-text-secondary',
          )}
        />
      </button>
      <div
        onClick={() => setOpen(false)}
        className={cn(
          'fixed inset-0 top-14.25 bg-bg-header/60 backdrop-blur-sm z-90 transition-opacity duration-300 md:hidden',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      />
      <div
        className={cn(
          'fixed top-14.25 right-0 h-[calc(100dvh-57px)] w-64 z-90 bg-bg-header border-l border-solid border-border-primary flex flex-col transition-transform duration-300 ease-in-out md:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <nav className="flex flex-col gap-1 p-4 border-b border-solid border-border-primary">
          {NAVIGATION_ITEMS.map((item, index) => (
            <NavItem
              key={index}
              {...item}
              active={activeId === item.id}
            />
          ))}
        </nav>
        <div className="p-4 mt-auto border-t border-solid border-border-primary">
          <div className="flex items-center gap-2">
            <Dot
              size="8px"
              pinging
              color={OPEN_TO_WORK ? 'bg-success' : 'bg-red-500'}
            />
            <div className="text-[11px] uppercase text-text-secondary">
              {OPEN_TO_WORK ? 'Available for work' : 'Not available'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
