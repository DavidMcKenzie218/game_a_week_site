const express = require('express');
const app = express();
const path = require('path');
const DatabaseQuery = require('./database/databaseQuery');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));


const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  const query = new DatabaseQuery();
  query.all();

  console.log('Example app listening at http://%s:%s', host, port);
});
