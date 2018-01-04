var express  = require('express');
var app      = express();
var port     = process.env.PORT || 1337

app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})
// Initiate ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);;
