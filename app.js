
var express = require("express");
var routes = require("./routes/routes");
var app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.use("/", routes);

app.listen(process.env.PORT || 3000, () => {
    console.log('server has started');
});
