const routes = require('express').Router();
const contact = require('./contact');

routes.use("/contact", contact);

routes.get("/", (req, res) => {
    res.render("pages/index/index");
});

routes.get("*", (req, res) => {
    res.send("Page not found");
});

module.exports = routes;
