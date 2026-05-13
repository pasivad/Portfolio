import LearningPath from './components/LearningPath';
import MainProject from './components/MainProject';
import SideProject from './components/SideProject';
import { MAIN_PROJECTS, SIDE_PROJECTS } from './constants';

const GameDevelopment = () => {
  return (
    <div className="flex max-md:flex-col gap-6">
      {MAIN_PROJECTS.map((project, index) => (
        <MainProject
          key={index}
          {...project}
        />
      ))}
      <div className="w-full flex flex-col gap-6">
        {SIDE_PROJECTS.map((project, index) => (
          <SideProject
            key={index}
            {...project}
          />
        ))}
        <LearningPath />
      </div>
    </div>
  );
};

export default GameDevelopment;
