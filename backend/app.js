const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Connect to DB
mongoose
  .connect(
    'mongodb://dbuser:dbuser1@ds021969.mlab.com:21969/cmccall',
    { useNewUrlParser: true }
  ) // successful
  .then(() => {
    console.log('Connected to database!');
  })
  // catch errors
  .catch(() => {
    console.log('Connection failed!');
  });


// Parsing json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // no matter which domain its able to access resources
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization' // incoming request may have these headers
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD' // Methods allowed
  );
  next();
});

// importing routes


// Paths


// ng build for backend
app.use('/', express.static(path.join(__dirname, 'angular')));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'angular', 'index.html'));
});

module.exports = app;
