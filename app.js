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
	
	socket.on('chat', (data) => {
	//socket.emit('message', "hello "+data.value);
	if(data.value==='hej')
	//io.emit('message', data);
		//io.emit('message', 'hej på dej!');
		 socket.emit('message', 'Hej?');
		else 
		//io.emit('message', 'va?');
	 socket.emit('message', 'va?');
	});

	//socket.on('clientmessage', (message) =>{
	//	console.log(message);
	//});
});

//app.get('/', (req, res) => {
//res.sendFile(__dirname + '/index.html');
//});

server.listen(port);

//app.listen(port, () =>{
//	console.log("Running noW!")
//	});
