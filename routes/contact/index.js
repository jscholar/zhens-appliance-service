const contact = require('express').Router();

contact.get("/", (req, res) => {
    res.render("pages/contact/contact");
});

contact.post("/message", (req, res) => {
    console.log("post request received");
    console.log(req.body);
})

module.exports = contact;
