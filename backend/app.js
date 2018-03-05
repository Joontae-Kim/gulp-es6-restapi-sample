'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + './dist'));

const index = require('./dist/routes/index');
const meta = require('./dist/routes/meta');

app.use('/', index);
app.use('/meta', meta);

module.exports = app;
