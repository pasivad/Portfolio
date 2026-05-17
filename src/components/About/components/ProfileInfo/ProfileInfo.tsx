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
        <li>3y shipping production web</li>
        <li>learning C++ & Unreal Engine 5</li>
      </ul>
      <div className="max-w-170 my-6 text-[15px] text-text-secondary">
        {
          'Motivated Software Engineer with 4+ years of experience in JavaScript, TypeScript, React, and Node.js, including 3 years of professional experience in a company environment. As a self-taught developer, I am a dedicated and hardworking individual with a strong passion for personal and professional growth. Currently expanding into game development using C++ and Unreal Engine 5, working on a pet projects while continuously strengthening my C++ skills. I continuously refine my full-stack JavaScript skills alongside my work in other areas. I’m always eager to expand my expertise and deliver practical solutions that add value. With strong problem-solving skills and a collaborative mindset, I confidently handle different parts of the development process and contribute effectively to team projects.'
        }
      </div>
      <div className="mt-auto flex gap-4">
        <div className="border border-solid border-border-secondary uppercase px-3 py-2 text-xs text-text-secondary">
          EXP <span className="text-brand-primary lowercase font-semibold">{MY_EXPERIENCE}</span>
        </div>
        <div className="border border-solid border-border-secondary uppercase px-3 py-2 text-xs text-text-secondary">
          BASED <span className="text-brand-primary font-semibold">PL · UA</span>
        </div>
        <div className="border border-solid border-border-secondary uppercase px-3 py-2 text-xs text-text-secondary">
          STATUS <span className="text-brand-primary font-semibold">OPEN TO WORK</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
