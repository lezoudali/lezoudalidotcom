var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Lezou Dali')
});

app.listen(3000);
