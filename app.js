var express = require("express");
var app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

// index page
app.get("/", (req, res) => {
    res.render('pages/index');
});

// about page
app.get("/about", (req, res) => {
    res.render('pages/about');
});

app.listen(3000, process.env.IP, () => {
    console.log('server has started');
});
