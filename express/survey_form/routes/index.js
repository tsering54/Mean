module.exports = function Route(app, server){
    var io = require('socket.io').listen(server)
    app.get('/', function(req, res){
        res.render('index');
    });

    io.sockets.on('connection', function (socket) {
        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);
        // all the server socket code goes in here
        //server listening to posting_form event
        socket.on('posting_form', function(data){
            var random_number = Math.floor((Math.random()*1000) +1);
            //emit data to client
            socket.emit('updated_message', {response:data});
            socket.emit('random_number', {response:random_number});
        });
    });
};