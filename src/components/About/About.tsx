'use client';

import { useState } from 'react';

import ProfileInfo from './components/ProfileInfo';
import ProfilePicture from './components/ProfilePicture';
import ExpandablePanel from './components/ExpandablePanel';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex items-stretch gap-4">
      <ProfileInfo />
      <ProfilePicture expanded={expanded} />
      <ExpandablePanel onToggle={() => setExpanded((v) => !v)} />
    </div>
  );
};

export default About;
