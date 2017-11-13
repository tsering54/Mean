var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
},{timestamps: true});

var Quote = mongoose.model('quotes', QuoteSchema);

//views folder location and engine ejs
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//get index html
app.get('/', function(req, res){
    res.render('index');
})

app.get('/quotes', function(req, res){
    Quote.find({}, function(err, results){
        if(err){
            console.log(err);
        }
        res.render('quotes', {quotes: results});
    });
    console.log('works')
});

app.post('/quotes', function(req, res){
    Quote.create(req.body, function(err){
        if(err){
            console.log(err);
        }
        res.redirect('/quotes');
    });
    console.log('post works')
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})