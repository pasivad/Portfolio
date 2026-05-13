import ExperienceItem from './components/ExperienceItem';
import { EXPERIENCE_ITEMS } from './constants';

const Experience = () => {
  return (
    <div className="flex flex-col gap-4">
      {EXPERIENCE_ITEMS.map((item, index) => (
        <ExperienceItem
          key={index}
          {...item}
        />
      ))}
    </div>
  );
};

export default Experience;
