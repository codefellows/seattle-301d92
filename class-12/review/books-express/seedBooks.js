'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);

const BooksModel = require('./models/Books.js');

// Create 3 books in the database
BooksModel.create({
  title: 'Harry Potter and the Sorcerer\'s Stone',
  description: 'A boy in England discovers he is a Wizard!',
  status: 'read'
}).then(result => console.log(result));
BooksModel.create({
  title: '48 Laws of Power',
  description: 'tells you about power and how to use it',
  status: 'read'
}).then(result => console.log(result));
BooksModel.create({
  title: 'The Cat in hat',
  description: 'The best children\'s book for adults',
  status: 'read'
}).then(result => console.log(result));

// Selection();
