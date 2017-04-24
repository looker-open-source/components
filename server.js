'use strict';

const express = require('express');
const app = express();


const port = 3000;

app.use(express.static(__dirname + '/src'));

app.get('/saml/login', (req, res) => {
  res.send('Hello World');
});

app.all('/*', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/src' });
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
