const contact = require('express').Router();

contact.get("/", (req, res) => {
    res.render("pages/contact/contact");
});

contact.get("/style", (req, res) => {
    res.sendFile(__dirname + "/styles/contact.css");
});

module.exports = contact;
