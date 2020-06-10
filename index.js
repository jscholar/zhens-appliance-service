import express from 'express';
import routes from './routes/routes.js';

import PATH from './constants/PATH.js';

var app = express();

app.set('view engine', 'pug');

app.use(express.static(PATH.public));

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/", routes);

app.listen(process.env.PORT || 3000, () => {
    console.log('server has started on port 3000');
});
