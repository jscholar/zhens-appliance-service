import express from 'express';
import routes from './routes/routes';
import PATH from '../PATH';

import generateDocument from './lib/generateDocument';
import { sendEmail, sendSMS } from './lib/mailer';

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


server.use('/prototypes', routes);

server.post('/api/message', (req, res) => {
  Promise.all([sendEmail(req.body), sendSMS(req.body)])
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

server.get('/:route', (req, res) => {
  const { route } = req.params;
  res.send(documents[route] || documents.landing);
});

server.get('/', (req, res) => {
  res.send(documents.landing);
});

export default server;
