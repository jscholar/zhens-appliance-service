import express from 'express';
import routes from './routes/routes';
import PATH from '../constants/PATH';

import generateDocument from './lib/generateDocument';

const documents = {
  landing: generateDocument('/'),
  contact: generateDocument('/contact'),
  about: generateDocument('/about'),
  map: generateDocument('/service-map'),
};

const server = express();

server.set('view engine', 'pug');

server.use(express.static(PATH.public));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/prototypes', routes);

server.get('/:route', (req, res) => {
  const { route } = req.params;
  res.send(documents[route] || documents.landing);
});

server.get('/', (req, res) => {
  res.send(documents.landing);
});

export default server;
