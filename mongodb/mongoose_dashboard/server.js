var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

//views folder and views engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/cat');

var CatSchema = new mongoose.Schema({
    name: String,
    color: String  
});

var Cat = mongoose.model('Cat', CatSchema);

//index
app.get('/', function(req, res){
    Cat.find({}, function(err, results){
        if(err){
            console.log(err);
        }
        res.render('index', {cats: results})
    });
});

//display index page
app.post('/', function(req, res){
    Cat.create(req.body, function(err, reults){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });
});

//add a new cat -- show new page
app.get('/cats/new', function(req, res){
    res.render('new');
})

//show info about 1 cat
app.get('/cats/:id', function(req, res){
    Cat.find({_id: req.params.id}, function(err, results){
        if(err){
            console.log(err);
        }
        res.render('show', {cat:results[0]});
    });
});


//show edit page
app.get('/cats/edit/:id', function(req, res){
    Cat.find({_id: req.params.id}, function(err, results){
        if(err){
            console.log(err);
        }
        res.render('edit', {cat: results[0]});
    });
});

//update
app.post('/cats/:id', function(req, res){
    Cat.update({_id: req.params.id}, req.body, function(err, results){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });
});

//destroy -- redirect to index
app.post('/cats/destroy/:id', function(req, res){
    Cat.remove({_id: req.params.id}, function(err, result){
        if(err){
            console.log(err);
        }
        res.redirect('/')
    })
})


app.listen(8000, function(){
    console.log('listening on port 8000');
});


