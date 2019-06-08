var express = require("express");
var app = express();

app.set('view engine', 'html');

app.get("/", (req, res) => {
});

app.get("/about", (req, res) => {
});

app.listen(9999, process.env.IP, () => {
    console.log('server has started');
});
