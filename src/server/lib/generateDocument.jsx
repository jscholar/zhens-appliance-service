import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';

import App from '../../client/App';
import template from './template';

const generateDocument = (url) => {
  const app = ReactDOMServer.renderToString(
    <Router location={url}>
      <App />
    </Router>,
  );
  return template(app);
};

export default generateDocument;
