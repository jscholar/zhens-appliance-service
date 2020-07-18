/* eslint-disable no-underscore-dangle */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext';

import App from '../../client/App';
import template from './template';

const generateDocument = (url) => {
  const css = new Set();
  const insertCss = (...styles) => styles.forEach((style) => css.add(style._getCss()));
  const app = ReactDOMServer.renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <Router location={url}>
        <App />
      </Router>
    </StyleContext.Provider>,
  );
  return template(app, css);
};

export default generateDocument;
