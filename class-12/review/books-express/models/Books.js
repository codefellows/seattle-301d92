'use strict';

const mongoose = require('mongoose');

// create our Schema object

const booksSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  status:{
    type: String,
    required: true,
    enum: ["read", "not started", 'in-progress']
  }
});

// export our Book Model
module.exports = mongoose.model('books', booksSchema);
