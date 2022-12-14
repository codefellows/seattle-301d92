

'use strict'
// this contains all the "Data Modeling" for cats in our MongoDB

const mongoose = require('mongoose');

// mongoose requires us to define a "schema"
const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // required means that you can't create a cat without this property.
  },
  age: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  favoriteActivity: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('cats', catSchema);
