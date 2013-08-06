var express = require('express');
var requirejs = require('requirejs');


var app = express();

var url = __dirname + "/../client/js"
var config = {
  baseUrl: url,
  paths: {
    jquery: "empty:" // CDN
  },
  out: url + "/app/sample.min.js",
  name: 'app/sample'
};

// optimization via node module
requirejs.optimize(config, function (buildResponse) {
  console.log('RequireJS optimizer build response:', buildResponse);
  //buildResponse is just a text output of the modules
  //included. Load the built file for the contents.
  //Use config.out to get the optimized file contents.
  var contents = fs.readFileSync(config.out, 'utf8');
}, function(err) {
  console.log('error');
  console.dor(err);
});

app.use(express.static(__dirname + '/../client'));
app.listen(3000);

console.log('RequireJS Demo is up and running and optimized');
