import express from 'express';
import routes from './routes/routes';
import PATH from '../constants/PATH';

import generateDocument from './lib/generateDocument';

const document = generateDocument();

const server = express();

server.set('view engine', 'pug');

server.use(express.static(PATH.public));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
  res.send(document);
});

server.use('/prototypes', routes);

export default server;
