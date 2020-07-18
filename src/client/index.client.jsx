/* eslint-disable no-underscore-dangle */

import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import App from './App';

window.addEventListener('resize', () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const insertCss = (...styles) => {
  const removeCss = styles.map((style) => style._insertCss());
  return () => removeCss.forEach((dispose) => dispose());
};

hydrate(
  <StyleContext.Provider value={{ insertCss }}>
    <Router>
      <App />
    </Router>
  </StyleContext.Provider>,
  document.querySelector('#app'),
);
