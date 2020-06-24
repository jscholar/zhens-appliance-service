import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Questionnaire from './components/Questionnaire';
import Overlay from './components/Overlay';
import NavMenu from './components/NavMenu';

const App = () => {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);
  const qClass = active ? 'questionnaire-active' : 'questionnaire-inactive';

  return (
    <main>
      <div className="layout">
        <Navbar toggleMenu={() => setMenu(!menu)} />
        <Overlay isOpen={menu} closeOverlay={() => setMenu(false)}>
          <NavMenu handleClick={() => setMenu(false)} />
        </Overlay>
        <div className="pages">
          <Switch>
            <Route path="/about" component={() => <div>About</div>} />
            <Route path="/contact" component={Contact} />
            <Route path="/service-map" component={() => <div>Service Map</div>} />
            <Route path="/" component={Landing} />
          </Switch>
        </div>
        <div className={`questionnaire-container ${qClass}`}>
          <Questionnaire active={active} />
        </div>
      </div>
    </main>
  );
};

export default App;
