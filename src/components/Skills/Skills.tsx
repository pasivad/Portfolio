import SkillsItem from './components/SkillsItem';
import { SKILLS } from './constants';

const Skills = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2">
      {SKILLS.map((skill, index) => (
        <SkillsItem
          key={index}
          {...skill}
        />
      ))}
    </div>
  );
};

export default Skills;
