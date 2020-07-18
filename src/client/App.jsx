import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './sass/index.scss';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import About from './pages/About';
import Questionnaire from './components/Questionnaire/Questionnaire';
import ServiceMap from './pages/ServiceMap';

const App = () => {
  const [active, setActive] = useState(false);
  const qClass = active ? 'questionnaire-active' : 'questionnaire-inactive';

  return (
    <main>
      <div className="layout">
        <Navbar
          handleClick={() => setActive(false)}
          setActive={setActive}
        />
        <div className="pages">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/service-map" component={ServiceMap} />
            <Route path="/" render={() => <Landing getStarted={() => setActive(true)} />} />
          </Switch>
        </div>
        <div className={`questionnaire-container ${qClass}`}>
          <Questionnaire toggle={() => setActive(!active)} active={active} />
        </div>
      </div>
    </main>
  );
};

export default withStyles(styles)(App);
