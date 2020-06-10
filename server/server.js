import express from 'express';
import routes from './routes/routes.js';

import PATH from '../constants/PATH.js';

var server = express();

server.set('view engine', 'pug');

server.use(express.static(PATH.public));

server.use(express.json());
server.use(express.urlencoded({extended: true}))

server.use("/", routes);

export default server;
