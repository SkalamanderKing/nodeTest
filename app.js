const express = require('express');
let app = express();
const port = 4000;

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

// app.get('/about', (req, res) => {
// 	res.sendfile(_dirname, 'index.html')
// });


app.listen(port, () =>{
	console.log("Running noW!")
	});
