import express from 'express';

const contact = express.Router();

contact.post("/message", (req, res) => {
    console.log("post request received");
    console.log(req);
    res.send("received post");
})

// Javascript Disabled
contact.post("/", (req, res) => {
    res.redirect("/contact");
})

contact.get("/", (req, res) => {
    res.render("pages/contact/contact");
});

export default contact;
