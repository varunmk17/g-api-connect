var app = require('./server.js');
var express = require('express');

app.use('/gverify', express.static('static'))

app.get('/gapi/verify', (req, res) => {
  res.send('./static/googled46d7d59b661cfcc.html');
});

app.post('/gverify', (req, res) => {
  console.log(req);
  console.log(res);
  res.send('POST');
});