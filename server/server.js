var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client'));
app.listen(3000);

console.log('RequireJS Demo is up and running');
