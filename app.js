/*Examination - Socket.io Chatbot 2017-05-05 Fredrick Östlund*/

const express = require('express');
const socket = require('socket.io');
let app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const port = process.env.PORT || 4000;
const logger = require('morgan');

//Import home-made module
const iobot = require('./iobot.js');

//Pug files stored in a folder
app.set('view engine', 'pug');

//use stuff from folder: client js and css
app.use('/public', express.static('public'));

app.use(logger('tiny'));

//render pug stuff
app.get('/', (req, res) => {
	res.render('index')
});

//The socket.io-connection
io.on('connection', function (socket){
	socket.on('chat', (data) => {

		//Use func from iobot-module and send back to client
		socket.emit('message', iobot.sayHello(data));
	});
});
server.listen(port);
