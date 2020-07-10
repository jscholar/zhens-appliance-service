import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './sass/index.scss';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import About from './pages/About';
import Questionnaire from './components/Questionnaire/Questionnaire';
import Drawer from './components/UI/Drawer';
import NavMenu from './components/NavMenu';
import Map from './components/Map';

const App = () => {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);
  const qClass = active ? 'questionnaire-active' : 'questionnaire-inactive';

  return (
    <main>
      <div className="layout">
        <Navbar
          handleClick={() => setActive(false)}
          toggleMenu={() => setMenu(!menu)}
          isOpen={menu}
        />
        <Drawer isOpen={menu} closeDrawer={() => setMenu(false)}>
          <NavMenu handleClick={() => {
            setMenu(false);
            setActive(false);
          }}
          />
        </Drawer>
        <div className="pages">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/service-map" component={Map} />
            <Route path="/" component={Landing} />
          </Switch>
        </div>
        <div className={`questionnaire-container ${qClass}`}>
          <Questionnaire toggle={() => setActive(!active)} active={active} />
        </div>
      </div>
    </main>
  );
};

export default App;
