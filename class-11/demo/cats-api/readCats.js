'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Cats = require('./models/Cats.js');
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

// Use a differnet method on the Cats model.
Cats.find()
.then(results => {
  console.log('Here are all of our cats', results);
})
.catch(err => {
  console.log('Ugh oh, ', err);
});
