import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import App from '../../client/App';

const generateDocument = () => {
  return ReactDOMServer.renderToString(<App></App>);
}

export default generateDocument;
