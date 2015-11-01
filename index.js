var express = require('express');

var port = process.env.PORT || 8080;
var app = express();

app.listen(port);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));