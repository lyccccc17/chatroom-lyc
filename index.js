var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  var addedUser = false;

  // when the client emits 'add user', this listens and executes
  socket.on('add user', (username) => {
    // if (addedUser) return;
    // socket.username = username;
    // addedUser = true;
    // socket.emit('user joined', {
    //   username: socket.username
    // })
  })

  // when the client emits 'new message', this listens and executes
  socket.on('new message', (message) => {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: message
    })
    // io.emit('new message', msg);
  });
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});
