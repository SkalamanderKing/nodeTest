const express = require('express');
let app = express();
const port = 4000;
app.get('/', (req, res) => {
res.send('Hellooo');
});

app.get('/about', (req, res) => {
	res.send('Helloo from about')
});

app.listen(port, () =>{
	console.log("Running noW!")
	});
