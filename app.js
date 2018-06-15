var app = require('./server.js');


app.get('/gapi', (req, res) => {
  res.send('GET');
});

app.post('/gapi/notifications', (req, res) => {
  console.log(req);
  console.log(res);
  res.send('POST');
});