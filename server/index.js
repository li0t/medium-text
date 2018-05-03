/** DB */
const path = require('path');
const port = 4443;

/** Server */
const express = require('express');
const logger = require('morgan');

const app = express();

console.log('Initializing');

app.use(logger('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', express.static(path.join(__dirname, '..', 'assets')));

app.get('/', (req, res) => {
  res.end();
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
