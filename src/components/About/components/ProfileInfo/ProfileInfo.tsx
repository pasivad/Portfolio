import { IoMdArrowDropright } from 'react-icons/io';

import { MY_EXPERIENCE } from '@/constants';

const ProfileInfo = () => {
  return (
    <div className="cut-corners cut-corners-lg flex flex-col max-w-200 w-full overflow-hidden p-10 border border-solid border-border-primary bg-linear-to-tr from-bg-card from-55% to-brand-primary/35 transition-[width] duration-500 ease-in-out">
      <div className="flex gap-2 items-center text-brand-primary uppercase text-xs">
        <IoMdArrowDropright />
        <div>Full-Stack Engineer</div>
      </div>
      <h1 className="uppercase text-brand-primary font-bold text-7xl pt-4">Vlad Pasichnyk</h1>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 bullet-list list-disc list-inside mt-4 text-[13px] text-text-secondary">
        <li>Software engineer</li>
        <li>4y+ shipping production web</li>
        <li>learning C++ & Unreal Engine 5</li>
      </ul>
      <div className="max-w-170 my-6 text-[15px] text-text-secondary">
        {
          'Full-stack engineer with 4+ years of commercial experience building backend services, APIs and integrations in Node.js/TypeScript (Nest.js, GraphQL), with hands-on work in a production Python codebase (FastAPI, SQLAlchemy). I have built multi-tenant services on PostgreSQL and Redis, enterprise SSO across four identity providers, and React/Next.js internal tools used daily by operations and content teams — and I am comfortable owning delivery end to end, including coordinating directly with client engineering teams and third-party vendors. Outside of web, I am teaching myself C++ and Unreal Engine 5 — currently building Wilderness Alone, a top-down survival game with its core systems written from scratch. Same instinct in both: understand the system deeply, then build the hard part myself.'
        }
      </div>
      <div className="mt-auto flex gap-4">
        <div className="border border-solid border-border-secondary uppercase px-3 py-2 text-xs text-text-secondary">
          EXP <span className="text-brand-primary lowercase font-semibold">{MY_EXPERIENCE}</span>
        </div>
        <div className="border border-solid border-border-secondary uppercase px-3 py-2 text-xs text-text-secondary">
          BASED <span className="text-brand-primary font-semibold">WARSAW, PL</span>
        </div>
        <div className="border border-solid border-border-secondary uppercase px-3 py-2 text-xs text-text-secondary">
          STATUS <span className="text-brand-primary font-semibold">OPEN TO WORK</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
