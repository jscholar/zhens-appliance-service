import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Questionnaire from './components/Questionnaire';

const App = () => {
  const [active, setActive] = useState(false);
  const [page, setPage] = useState('landing');

  const qClass = active ? 'questionnaire-active' : 'questionnaire-inactive';

  return (
    <Router>
      <main>
        <div className="layout">
          <Navbar />
          <div className="pages">
            <Switch>
              <Route path="/about" component={() => <div>About</div>} />
              <Route path="/contact" component={Contact} />
              <Route path="/service-map" component={() => <div>Service Map</div>} />
              <Route path="/" component={Landing} />
            </Switch>
          </div>
          <div className={`questionnaire-container ${qClass}`}>
            <Questionnaire actve={active} />
          </div>
        </div>
      </main>
    </Router>
  );
};

export default App;
