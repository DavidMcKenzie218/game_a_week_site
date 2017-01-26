const express = require('express');
const app = express();
const path = require('path');
const ContentApi = require('./api/testApi');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));

  const server = app.listen(3003, function () {
  const host = server.address().address;
  const port = server.address().port;
  
  new ContentApi(app);

  console.log('Example app listening at http://%s:%s', host, port);
});