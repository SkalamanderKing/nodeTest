const express = require('express');
const socket = require('socket.io');
let app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const port = process.env.PORT || 4000;
const logger = require('morgan');

app.set('view engine', 'pug');
app.use('/public', express.static('public'));

app.use(logger('tiny'));

app.get('/', (req, res) => {
	res.render('index', { title: 'Hey', message: 'Hello there!' })
});

io.on('connection', function (socket){
	socket.emit('message', "hello fuckers");
	//socket.on('chat', (data) => {
	//	io.emit('message', data);
	//});
	socket.on('clientmessage', (message) =>{
		console.log(message);
	});
});

//app.get('/', (req, res) => {
//res.sendFile(__dirname + '/index.html');
//});

server.listen(port);

//app.listen(port, () =>{
//	console.log("Running noW!")
//	});
