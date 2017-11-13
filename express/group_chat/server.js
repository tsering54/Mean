var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', {messages: messages})
});

// Tell the express app to listen on port 8000
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

var messages = [{name:" Michael", text: "This app is so amazing..."}]
var user_id_count = 0;

var io = require('socket.io').listen(server)
var count = 0;
io.sockets.on('connection', function(socket){
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in here

    socket.on('new_user', function(data){
        console.log('A new user entered the chatroom!');
        console.log(data);
        socket.broadcast.emit("added_user", data)
        user_id_count += 1;
        socket.emit("assigned user id", {user_id: user_id_count})
    });
    socket.on('new_message', function(data){
        console.log("New message received!");
        console.log(data);
        messages.push(data)
        io.emit('append_message', messages[messages.length -1])
    });
})