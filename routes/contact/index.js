const contact = require('express').Router();

contact.get("/", (req, res) => {
    res.render("pages/contact/contact");
});

module.exports = contact;
