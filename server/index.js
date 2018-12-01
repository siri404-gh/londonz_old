/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const { dist, ports: { serverPort } } = require('../config/variables');

const app = express();
const port = process.env.PORT || serverPort;

app.use('/', express.static(dist));
// app.get('*.bundle.js', function (req, res) {
//   // req.url = req.url + '.gz';
//   // res.set('Content-Encoding', 'gzip');
// });

app.post('/crypt', function (req, res) {
  res.sendFile(path.resolve(__dirname, `./mock/crypt.json`));
});

app.get('/leaderboard', function (req, res) {
  res.sendFile(path.resolve(__dirname, `./mock/leaderboard.json`));
});

app.listen(port, () => console.log(`SERVER: Listening on port ${port}`));