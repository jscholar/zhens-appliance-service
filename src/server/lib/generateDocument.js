import React from 'react';
import ReactDOMServer from 'react-dom/server.js';

import App from '../../client/App';
import template from './template';

const generateDocument = () => {
  const app = ReactDOMServer.renderToString(<App></App>);
  return template(app);
}

export default generateDocument;
