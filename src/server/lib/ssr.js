import ReactDOMServer from 'react-dom/server.js';
import App from '../../App';

const generateDocument = () => {
  ReactDOMServer.renderToString(App);
}

export default generateDocument;
