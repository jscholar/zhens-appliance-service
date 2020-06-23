import express from 'express';
import routes from './routes/routes';
import PATH from '../constants/PATH';

import generateDocument from './lib/generateDocument';

const documents = {
  landing: generateDocument('/'),
  contact: generateDocument('/contact'),
};

const server = express();

server.set('view engine', 'pug');

server.use(express.static(PATH.public));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/:route', (req, res) => {
  const { route } = req.params;
  res.send(documents[route] || documents.landing);
});

server.get('/', (req, res) => {
  res.send(documents.landing);
});

server.use('/prototypes', routes);

export default server;
