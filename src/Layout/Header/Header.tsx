import Dot from '@/components/Dot';

import Nav from './components/Nav';
import { OPEN_TO_WORK } from '@/constants';
import BurgerMenu from './components/BurgerMenu';

const Header = () => {
  return (
    <header className="flex w-full px-6 py-4 justify-between items-center bg-bg-header border-b border-solid border-border-primary fixed z-100">
      <div className="flex items-center">
        <div className="relative flex border border-solid border-brand-primary text-xs font-bold text-brand-primary items-center p-1 tracking-widest">
          VP
        </div>
        <div className="ml-2 flex flex-col">
          <div className="text-lg uppercase font-semibold">Vlad Pasichnyk</div>
          <div className="text-[11px] uppercase text-text-secondary">{'// Portfolio v2026.05'}</div>
        </div>
      </div>
      <div className="max-md:hidden flex items-center gap-4">
        <Nav />
        <div className="flex items-center gap-1">
          <Dot
            size="8px"
            pinging
            color={OPEN_TO_WORK ? 'bg-success' : 'bg-red-500'}
          />
          <div className="text-[11px] uppercase text-text-secondary">
            {OPEN_TO_WORK ? 'AVAILABLE' : 'NOT AVAILABLE'}
          </div>
        </div>
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
