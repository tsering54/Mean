var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


// Tell the express app to listen on port 8000
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});


var io = require('socket.io').listen(server)
var count = 0;
io.sockets.on('connection', function(socket){
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in here

    socket.on('button_pushed', function(data){
        console.log('Button was pushed!');
        console.log(data);
        if (data.reset == true){
            count = 0
            io.emit('update_count', {count: count})
        } 
        else{
            count += 1
            io.emit('update_count', {count: count})
        }
    })
})