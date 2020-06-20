import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Questionnaire from './components/Questionnaire';

const App = () => {
  const [active, setActive] = useState(false);
  const [page, setPage] = useState('landing');

  const qClass = active ? 'questionnaire-active' : 'questionnaire-inactive';

  return (
    <main>
      <div className="layout">
        <Navbar />
        <div className="pages">
          <Landing />
        </div>
        <div className={`questionnaire ${qClass}`}>
          <Questionnaire />
        </div>
      </div>
    </main>
  );
};

export default App;
