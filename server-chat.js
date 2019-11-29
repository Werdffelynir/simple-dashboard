const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const chatSession = [{
    name: '[Server]',
    message: 'Server started ' + (new Date()).getDate()
}];

io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('chat', function(message){
        if (message) {
            message.time = (new Date()).getTime();
            chatSession.push(message);
            io.emit('chat', message);
        }
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
