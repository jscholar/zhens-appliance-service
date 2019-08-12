var express = require("express");
var app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get("/about", (req, res) => {
    res.render('pages/about/about');
})

app.get("/", (req, res) => {
    res.render('pages/index/index');
});

app.get("*", (req, res) => {
    res.send("Page not found");
})

app.listen(3000, process.env.IP, () => {
    console.log('server has started');
});
