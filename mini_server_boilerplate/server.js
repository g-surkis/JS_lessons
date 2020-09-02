var express = require('express');
var app = express();

app.get('/', (req, res)=>{res.sendFile('index.html', { root: __dirname });});
app.listen(8080, function()
{
	console.log("Server starts on port 8080");
});
app.use(express.static(__dirname));