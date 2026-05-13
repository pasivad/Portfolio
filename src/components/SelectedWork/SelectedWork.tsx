'use client';

import { useState } from 'react';

import SelectedWorkItem from './components/SelectedWorkItem';
import WorkModal from './components/WorkModal';
import { SELECTED_WORK } from './constants';
import { WorkEntity } from './components/SelectedWorkItem/types';

const SelectedWork = () => {
  const [openModal, setOpenModal] = useState<WorkEntity | undefined>();

  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2 gap-4">
      {SELECTED_WORK.map((work, index) => (
        <SelectedWorkItem
          key={index}
          onClick={() => setOpenModal(work)}
          {...work}
        />
      ))}
      <WorkModal
        project={openModal}
        onClose={() => setOpenModal(undefined)}
      />
    </div>
  );
};

export default SelectedWork;
