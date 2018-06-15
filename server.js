var express = require('express');
var app = express();
var PORT = process.env.PORT || 1331;

var server = app.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});

module.exports = app;