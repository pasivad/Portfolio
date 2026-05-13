import About from '@/components/About';
import Container from '@/components/Container';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import SelectedWork from '@/components/SelectedWork';
import Contact from '@/components/Contact';
import GameDevelopment from '@/components/GameDevelopment';

import { SKILLS } from '@/components/Skills/constants';
import { EXPERIENCE_ITEMS } from '@/components/Experience/constants';
import { MY_EXPERIENCE, OPEN_TO_WORK } from '@/constants';

export default function Home() {
  return (
    <div className="mt-30">
      <Container id="about">
        <About />
      </Container>
      <Container
        id="skills"
        containerHeader={{
          title: 'Skills',
          comment: 'stack',
          description: `${SKILLS.length} areas`,
        }}
      >
        <Skills />
      </Container>
      <Container
        id="experience"
        containerHeader={{
          title: 'Experience',
          comment: 'timeline',
          description: `${MY_EXPERIENCE} shipping · ${EXPERIENCE_ITEMS.length} entries`,
        }}
      >
        <Experience />
      </Container>
      <Container
        id="work"
        containerHeader={{
          title: 'Selected Work',
          comment: 'projects',
          description: 'click any card for details',
        }}
      >
        <SelectedWork />
      </Container>
      <Container
        id="gamedev"
        containerHeader={{
          title: 'Game Development',
          comment: 'in progress',
          description: 'currently learning · public repos',
        }}
      >
        <GameDevelopment />
      </Container>
      <Container
        id="contact"
        containerHeader={{
          title: 'Contact',
          comment: 'say hi',
          description: OPEN_TO_WORK ? 'open to opportunities' : 'not seeking opportunities',
        }}
      >
        <Contact />
      </Container>
    </div>
  );
}
