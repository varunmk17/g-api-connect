var app = require('./server.js');


app.get('/gapi/notifcations', (req, res) => {
  res.send('GET');
});

app.post('/gapi/notifcations', (req, res) => {
  console.log(req);
  console.log(res);
  res.send('POST');
});