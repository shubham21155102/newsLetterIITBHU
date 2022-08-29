//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});
app.post("/", function(req, res) {
    var fname = app.body.email;
    var pass = app.body.pass;
    console.log(fname, pass);
})
app.listen(3000, function(res, req) {
    console.log("Server is running on 3000 port");
});