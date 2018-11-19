/* eslint-disable no-console */
const express = require('express');
const { ports: { serverPort } } = require('../config/variables');

const app = express();
const port = process.env.PORT || serverPort;

app.get('*.bundle.js', function (req, res, next) {
  // req.url = req.url + '.gz';
  // res.set('Content-Encoding', 'gzip');
  next();
});

app.use('/', express.static('dist'));
app.listen(port, () => console.log(`SERVER: Listening on port ${port}`));