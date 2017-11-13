var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

//index.js will handle all routing
var route = require('./routes/index.js')(app, server);