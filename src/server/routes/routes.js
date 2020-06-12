import express from 'express';
import contact from './contact';

const routes = express.Router();

routes.use('/contact', contact);

routes.get('/', (req, res) => {
  res.render('pages/index/index');
});

routes.get('*', (req, res) => {
  console.log(req.url);
  res.send('Page not found');
});

export default routes;
