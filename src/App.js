import React, { useState } from 'react';
import ModalBox from './copmonents/Modal/ModalBox';

const App = () => {
  const modalUrl = "https://lp-studio.pl/"
  return (
    <div>
      <ModalBox modalUrl={modalUrl}/>
    </div>
  );
};

export default App